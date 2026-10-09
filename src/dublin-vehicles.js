import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

// Procedural, shared parts keep the moving scene small and cheap to render.
const geometries = {
  box: new THREE.BoxGeometry(1, 1, 1),
  nose: new THREE.ConeGeometry(.5, 1, 12),
  wheel: new THREE.CylinderGeometry(.11, .11, .07, 10),
  blade: new THREE.BoxGeometry(1, .035, .12),
};
const wingShape = new THREE.Shape();
wingShape.moveTo(.38, -.29); wingShape.lineTo(-.18, -1.5); wingShape.lineTo(.2, -1.5);
wingShape.lineTo(.52, -.29); wingShape.lineTo(.52, .29); wingShape.lineTo(.2, 1.5);
wingShape.lineTo(-.18, 1.5); wingShape.lineTo(.38, .29); wingShape.closePath();
geometries.sweptWing = new THREE.ExtrudeGeometry(wingShape, {depth: .09, bevelEnabled: false});
geometries.sweptWing.translate(0, 0, -.045); geometries.sweptWing.rotateX(Math.PI / 2);
const materials = new Map();
function mat(color, roughness = .72) {
  const key = `${color}/${roughness}`;
  if (!materials.has(key)) materials.set(key, new THREE.MeshStandardMaterial({color, roughness}));
  return materials.get(key);
}
function part(parent, geometry, color, position, scale, rotation) {
  const mesh = new THREE.Mesh(geometry, mat(color));
  mesh.position.set(...position); mesh.scale.set(...scale);
  if (rotation) mesh.rotation.set(...rotation);
  mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh);
  return mesh;
}
function box(parent, color, position, scale) { return part(parent, geometries.box, color, position, scale); }

// Collapse a procedural subassembly to one mesh per material. Geometry is
// transformed into root-local coordinates, so actor transforms stay cheap.
function batchMeshes(root, preserve = new Set()) {
  root.updateMatrixWorld(true);
  const inverse = root.matrixWorld.clone().invert(), byMaterial = new Map(), source = [];
  const visit = node => {
    if (node !== root && preserve.has(node)) return;
    if (node.isMesh) {
      node.updateMatrixWorld(true);
      const material = node.material;
      if (!byMaterial.has(material)) byMaterial.set(material, []);
      let geometry = node.geometry.clone();
      geometry.applyMatrix4(inverse.clone().multiply(node.matrixWorld));
      if (geometry.index) geometry = geometry.toNonIndexed();
      for (const attribute of Object.keys(geometry.attributes)) {
        if (attribute !== 'position' && attribute !== 'normal') geometry.deleteAttribute(attribute);
      }
      if (!geometry.attributes.normal) geometry.computeVertexNormals();
      geometry.clearGroups();
      byMaterial.get(material).push(geometry);
      source.push(node);
    }
    else for (const child of [...node.children]) visit(child);
  };
  visit(root);
  for (const mesh of source) mesh.parent.remove(mesh);
  for (const [material, geometries] of byMaterial) {
    const geometry = mergeGeometries(geometries, false);
    for (const item of geometries) item.dispose();
    if (!geometry) continue;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true; mesh.receiveShadow = true; root.add(mesh);
  }
}

const airline = {
  name: 'Lagos Life Air', body: '#ffffff', belly: '#e3e8ee',
  tail: '#0f7a3d', stripe: '#ffd400', window: '#1d2a3d',
};
const airMaterials = new Map();
const airGeometry = new Map();
const bodyProfile = [[0,0],[.22,.006],[.45,.02],[.63,.04],[.78,.065],[.89,.095],[.96,.13],[1,.18],[1,.7],[.97,.75],[.9,.8],[.8,.85],[.66,.9],[.48,.945],[.28,.98],[.1,.997],[0,1]];
const helicopterProfile = [[0,0],[.55,.04],[.85,.14],[1,.3],[.98,.5],[.82,.68],[.5,.86],[.22,.97],[0,1]];

function cachedAirMaterial(key, create) {
  if (!airMaterials.has(key)) airMaterials.set(key, create());
  return airMaterials.get(key);
}

function latheGeometry(name, profile, length, radius, segments, crown = 0) {
  if (airGeometry.has(name)) return airGeometry.get(name);
  const geometry = new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(Math.max(1e-4, r * radius), y * length)), segments);
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, 0, -length / 2);
  const position = geometry.attributes.position, uv = geometry.attributes.uv;
  for (let i = 0; i < position.count; i++) {
    const along = (position.getZ(i) + length / 2) / length;
    if (along > .68) position.setY(i, position.getY(i) + (along - .68) ** 2 * crown * length);
    uv.setXY(i, along, uv.getX(i));
  }
  geometry.computeVertexNormals();
  airGeometry.set(name, geometry);
  return geometry;
}

function sweptWingGeometry(name, span, chord, taper, sweep, thickness, side, cant = 0) {
  if (airGeometry.has(name)) return airGeometry.get(name);
  const shape = new THREE.Shape();
  shape.moveTo(0, -chord / 2);
  shape.lineTo(span * side, -chord / 2 + sweep);
  shape.lineTo(span * side, -chord / 2 + sweep + taper);
  shape.lineTo(0, chord / 2);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: thickness, bevelEnabled: true, bevelThickness: .45 * thickness,
    bevelSize: .5 * thickness, bevelSegments: 2, steps: 1, curveSegments: 1,
  });
  geometry.rotateX(Math.PI / 2);
  geometry.translate(0, thickness / 2, 0);
  geometry.rotateZ(cant * side);
  geometry.computeVertexNormals();
  airGeometry.set(name, geometry);
  return geometry;
}

function finGeometry(name, outline, depth, uvShift = undefined) {
  if (airGeometry.has(name)) return airGeometry.get(name);
  const shape = new THREE.Shape();
  shape.moveTo(...outline[0]);
  for (const point of outline.slice(1)) shape.lineTo(...point);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth, bevelEnabled: true, bevelThickness: .4 * depth, bevelSize: .45 * depth,
    bevelSegments: 2, steps: 1, curveSegments: 1,
  });
  if (uvShift !== undefined) {
    const positions = geometry.attributes.position, uvs = geometry.attributes.uv;
    const { start, count } = geometry.groups[0];
    for (let i = start; i < start + count; i++) if (positions.getZ(i) < depth / 2) uvs.setX(i, 2 * uvShift - uvs.getX(i));
    uvs.needsUpdate = true;
  }
  geometry.rotateY(-Math.PI / 2);
  geometry.translate(depth / 2, 0, 0);
  geometry.computeVertexNormals();
  airGeometry.set(name, geometry);
  return geometry;
}

function makeCanvas(width, height) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = width; canvas.height = height;
  return canvas;
}

function airlinerBodyTexture() {
  return cachedAirMaterial('body-texture', () => {
    const canvas = makeCanvas(1024, 256);
    if (!canvas) return null;
    const ctx = canvas.getContext('2d'), h = canvas.height, w = canvas.width;
    const scaleZ = h / (2 * Math.PI * .3) / (w / 4), y = n => n * h;
    ctx.fillStyle = airline.body; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = airline.belly; ctx.fillRect(0, 0, w, y(.1)); ctx.fillRect(0, y(.9), w, y(.1));
    for (const side of [1, -1]) {
      const centre = side === 1 ? .27 : .73, v = n => y(centre - side * n);
      ctx.fillStyle = airline.tail; const a = v(.04), b = v(.075);
      ctx.fillRect(.04 * w, Math.min(a, b), .9 * w, Math.abs(b - a));
      ctx.fillStyle = airline.stripe; const c = v(.085), d = v(.095);
      ctx.fillRect(.08 * w, Math.min(c, d), .84 * w, Math.abs(d - c));
      ctx.fillStyle = airline.window;
      const gap = .06 * w, xWidth = .022 * w, yHeight = .03 * w * scaleZ;
      for (let x = .22 * w; x < .66 * w; x += gap) {
        ctx.beginPath(); ctx.roundRect(x, y(centre) - yHeight / 2, xWidth, yHeight, Math.min(xWidth, yHeight) / 2); ctx.fill();
      }
      ctx.strokeStyle = 'rgba(60,70,85,0.55)'; ctx.lineWidth = 1;
      for (const x of [.15]) ctx.strokeRect(w * x, y(centre) - .55 * .034 * w * scaleZ, .012 * w, .034 * w * scaleZ);
      ctx.fillStyle = '#121a26'; const cy = y(side === 1 ? .335 : .665), hMark = .012 * w * scaleZ;
      ctx.beginPath(); ctx.moveTo(.035*w,cy-hMark/2); ctx.lineTo(.075*w,cy-hMark/2); ctx.lineTo(.082*w,cy+hMark/2); ctx.lineTo(.04*w,cy+hMark/2); ctx.closePath(); ctx.fill();
      ctx.save(); ctx.fillStyle = airline.tail; ctx.font = `800 ${Math.round(.032*w)}px system-ui, sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.translate(w*.44,y(side===1?.345:.655));
      ctx.scale(1, side===1 ? -1 : 1); ctx.scale(1, scaleZ); ctx.fillText(airline.name.toUpperCase(),0,0); ctx.restore();
    }
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.anisotropy = 4; return texture;
  });
}

function airlinerTailTexture() {
  return cachedAirMaterial('tail-texture', () => {
    const canvas = makeCanvas(256, 256); if (!canvas) return null;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = airline.tail; ctx.fillRect(0, 0, 256, 256);
    ctx.fillStyle = airline.stripe; ctx.beginPath(); ctx.arc(150, 120, 54, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = airline.tail; ctx.font = '900 60px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('LL',150,124);
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture;
  });
}

function paintMaterial(key, texture, color = '#ffffff') {
  return cachedAirMaterial(`paint:${key}:${color}`, () => new THREE.MeshPhysicalMaterial({
    map: texture || null, color, roughness: .22, metalness: .12, clearcoat: 1, clearcoatRoughness: .08,
  }));
}

function airMesh(parent, geometry, material, position, {rotation, castShadow = true} = {}) {
  const mesh = new THREE.Mesh(geometry, material); mesh.position.set(...position);
  if (rotation) mesh.rotation.set(...rotation);
  mesh.castShadow = castShadow; mesh.receiveShadow = true; parent.add(mesh); return mesh;
}

function landingGear({position, wheels = 2, height = .28, visible = true}) {
  const group = new THREE.Group(); group.position.set(...position); group.scale.y = visible ? 1 : .001; group.visible = visible;
  airMesh(group, new THREE.CylinderGeometry(.014,.014,height,6), cachedAirMaterial('chrome',()=>new THREE.MeshStandardMaterial({color:'#c9ced4',roughness:.18,metalness:.95})), [0,-height/2,0]);
  const tyre = cachedAirMaterial('tyre',()=>new THREE.MeshStandardMaterial({color:'#111317',roughness:.9}));
  for (let i=0;i<wheels;i++) {
    const x=(i-(wheels-1)/2)*.07;
    airMesh(group,new THREE.CylinderGeometry(.045,.045,.035,12),tyre,[x,-height,0],{rotation:[0,0,Math.PI/2]});
  }
  return group;
}

/** Source-backed Lagos Life Air profile. Local forward is +X; gear assemblies can animate through userData.gear. */
export function createAirliner({scale = 1, color = '#ffffff', gear = 1, detail = 'high'} = {}) {
  const group = new THREE.Group(); group.name = 'Lagos Life Airliner'; group.scale.setScalar(scale);
  const source = new THREE.Group(); source.name = 'Airliner source frame'; source.rotation.y = -Math.PI / 2; group.add(source);
  const high = detail === 'high';
  const body = latheGeometry(`airliner-body-${detail}`,bodyProfile,4,.3,high?48:18,.6);
  const mainRight = sweptWingGeometry('airliner-wing-right',1.95,1.1,.24,.98,.05,1,.08);
  const mainLeft = sweptWingGeometry('airliner-wing-left',1.95,1.1,.24,.98,.05,-1,.08);
  const tailRight = sweptWingGeometry('airliner-tail-right',.75,.46,.18,.36,.024,1,.12);
  const tailLeft = sweptWingGeometry('airliner-tail-left',.75,.46,.18,.36,.024,-1,.12);
  const fin = finGeometry('airliner-fin',[[0,0],[.6,.92],[.92,.92],[1.05,0]],.03,150/256*1.05);
  const winglet = finGeometry('airliner-winglet',[[0,0],[.14,.24],[.24,.24],[.24,0]],.016);
  const nacelle = latheGeometry(`airliner-nacelle-${detail}`,[[.78,0],[.93,.05],[1,.18],[1,.62],[.88,.86],[.66,1]],.78,.15,high?28:12);
  const wingMaterial = cachedAirMaterial('airliner-wing',()=>new THREE.MeshStandardMaterial({color:'#d6dce3',roughness:.36,metalness:.5}));
  const dark = cachedAirMaterial('airliner-dark',()=>new THREE.MeshStandardMaterial({color:'#1a212c',roughness:.55}));
  const chrome = cachedAirMaterial('chrome',()=>new THREE.MeshStandardMaterial({color:'#c9ced4',roughness:.18,metalness:.95}));
  const bodyMat=paintMaterial(`airliner-body-${detail}`,airlinerBodyTexture(),color);
  const finMat=paintMaterial('airliner-tail',airlinerTailTexture(),color);
  const engineMat=paintMaterial('airliner-engine',null,'#f2f4f7');
  airMesh(source,body,bodyMat,[0,0,0],{castShadow:high});
  airMesh(source,mainRight,wingMaterial,[.12,-.17,-.05],{castShadow:high});
  airMesh(source,mainLeft,wingMaterial,[-.12,-.17,-.05],{castShadow:high});
  for (const side of [1,-1]) {
    airMesh(source,winglet,finMat,[2.06*side,-.004166346760113246,.42],{rotation:[0,0,-(.18*side)]});
    airMesh(source,nacelle,engineMat,[.82*side,-.36,-.28]);
    const intake = airMesh(source,new THREE.CircleGeometry(.118,high?24:10),dark,[.82*side,-.36,-.665],{rotation:[0,Math.PI,0]});
    intake.name='engine intake';
    airMesh(source,new THREE.BoxGeometry(.035,.1,.42),wingMaterial,[.82*side,-.17,-.2]);
    airMesh(source,side===1?tailRight:tailLeft,wingMaterial,[.05*side,.12,1.55]);
  }
  airMesh(source,fin,finMat,[0,.24,.92],{castShadow:high});
  const gearGroups=[
    landingGear({position:[0,-.27,-1.45],wheels:2,height:.26,visible:gear>.02}),
    landingGear({position:[.42,-.26,.18],wheels:4,height:.28,visible:gear>.02}),
    landingGear({position:[-.42,-.26,.18],wheels:4,height:.28,visible:gear>.02}),
  ];
  gearGroups.forEach((assembly,index)=>{assembly.scale.y=gear>.02?gear:.001;assembly.name=`landing gear ${index+1}`;source.add(assembly)});
  const navLights = new THREE.Group();
  for(const [x,colorName] of [[-2.07,'#ff2d2d'],[2.07,'#22ff6e']]) {
    const lampMat=cachedAirMaterial(`nav:${colorName}`,()=>new THREE.MeshBasicMaterial({color:colorName,toneMapped:false}));
    airMesh(navLights,new THREE.SphereGeometry(.025,8,6),lampMat,[x,-.014166346760113246,.4],{castShadow:false});
  }
  const beaconMat=cachedAirMaterial('beacon',()=>new THREE.MeshBasicMaterial({color:'#ff3b3b',transparent:true,toneMapped:false}));
  const beacon=airMesh(navLights,new THREE.SphereGeometry(.025,8,6),beaconMat,[0,-.31,.2],{castShadow:false});
  navLights.userData.beacon=beacon; source.add(navLights);
  group.userData.forward='+X'; group.userData.gear=gearGroups; group.userData.rotors=[]; group.userData.navLights=navLights;
  return group;
}

/** Source-backed Lagos Life helicopter. Rotor groups stay separately addressable for motion. */
export function createHelicopter({scale = 1, color = '#0b0f17', spin = true, detail = 'high'} = {}) {
  const group = new THREE.Group(); group.name = 'Lagos Life Helicopter'; group.scale.setScalar(scale);
  const source = new THREE.Group(); source.rotation.y = -Math.PI/2; group.add(source);
  const high = detail === 'high';
  const bodyGeometry=latheGeometry(`helicopter-body-${detail}`,helicopterProfile,1.25,.36,high?36:14,.2);
  const paint=cachedAirMaterial(`helicopter:${color}`,()=>new THREE.MeshPhysicalMaterial({color,roughness:.22,metalness:.12,clearcoat:1,clearcoatRoughness:.08}));
  const glass=cachedAirMaterial('helicopter-glass',()=>new THREE.MeshPhysicalMaterial({color:'#0e1726',roughness:.05,metalness:.3,clearcoat:1,transparent:true,opacity:.85}));
  const gold=cachedAirMaterial('helicopter-gold',()=>new THREE.MeshStandardMaterial({color:'#d4a017',roughness:.3,metalness:.8}));
  const chrome=cachedAirMaterial('chrome',()=>new THREE.MeshStandardMaterial({color:'#c9ced4',roughness:.18,metalness:.95}));
  const dark=cachedAirMaterial('airliner-dark',()=>new THREE.MeshStandardMaterial({color:'#1a212c',roughness:.55}));
  airMesh(source,bodyGeometry,paint,[0,0,0]);
  airMesh(source,new THREE.SphereGeometry(1,20,14,0,Math.PI*2,0,Math.PI/1.7),glass,[0,.06,-.38],{rotation:undefined});
  const cockpit=source.children.at(-1);cockpit.scale.set(.33,.27,.32);
  airMesh(source,new THREE.BoxGeometry(.73,.03,.9),gold,[0,-.05,0]);
  airMesh(source,new THREE.CylinderGeometry(.05,.09,1.3,12),paint,[0,.12,1.15],{rotation:[Math.PI/2+.04,0,0]});
  airMesh(source,new THREE.BoxGeometry(.03,.4,.18),paint,[0,.3,1.75],{rotation:[.3,0,0]});
  const tailRotor=new THREE.Group();tailRotor.name='tail rotor';tailRotor.position.set(.05,.32,1.78);
  for(let i=0;i<2;i++)airMesh(tailRotor,new THREE.BoxGeometry(.01,.42,.04),dark,[0,0,0],{rotation:[0,i*Math.PI/2,0]});
  source.add(tailRotor);
  airMesh(source,new THREE.CylinderGeometry(.035,.05,.16,10),chrome,[0,.42,.05]);
  const mainRotor=new THREE.Group();mainRotor.name='main rotor';mainRotor.position.set(0,.51,.05);
  const bladeGeometry=new THREE.BoxGeometry(2.6,.012,.09);
  for(let i=0;i<2;i++)airMesh(mainRotor,bladeGeometry,dark,[0,0,0],{rotation:[0,i*Math.PI/2,0]});
  source.add(mainRotor);
  const skidMaterial=chrome;
  for(const side of [1,-1]) {
    airMesh(source,new THREE.CylinderGeometry(.018,.018,1.1,8),skidMaterial,[.3*side,-.42,.02],{rotation:[Math.PI/2,0,0]});
    for(const z of [-.25,.25])airMesh(source,new THREE.CylinderGeometry(.014,.014,.2,6),skidMaterial,[.26*side,-.33,z],{rotation:[0,0,.35*side]});
  }
  group.userData.rotors=[mainRotor,tailRotor];group.userData.forward='+X';group.userData.spin=spin;
  return group;
}

/** A compact street vehicle with windows and four visible wheels. */
export function createCar({color = '#f2eee2', scale = 1, bus = false} = {}) {
  const group = new THREE.Group(); group.name = bus ? 'Dublin bus' : 'Dublin car'; group.scale.setScalar(scale);
  const body = bus ? [1.9, .72, .72] : [1.05, .4, .55];
  box(group, color, [0, body[1] / 2 + .08, 0], body);
  if (bus) {
    box(group, '#f5d44f', [0, .53, .372], [1.65, .27, .025]);
    box(group, '#a9d7df', [0, .61, -.02], [1.65, .27, .57]);
  } else {
    box(group, '#a9d7df', [-.04, .42, 0], [.59, .26, .44]);
  }
  for (const x of [-body[0] * .32, body[0] * .32]) for (const z of [-body[2] * .47, body[2] * .47]) {
    part(group, geometries.wheel, '#202729', [x, .11, z], [1, .9, 1], [Math.PI / 2, 0, 0]);
  }
  batchMeshes(group);
  return group;
}
