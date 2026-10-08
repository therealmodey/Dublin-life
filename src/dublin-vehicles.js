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

/** A detailed, forward +X airliner. The wheel bottoms rest at local y=0. */
export function createAirliner({scale = 1, color = '#f4f1e8'} = {}) {
  const group = new THREE.Group(); group.name = 'Dublin airliner'; group.scale.setScalar(scale);
  const dark = '#33434a', glass = '#9ed4e4', wing = '#d9dfdc';
  box(group, '#f7f5ef', [-.08, .58, 0], [2.62, .47, .52]);
  // Forward-pointing nose and tapered rear cap.
  const nose = part(group, geometries.nose, '#f7f5ef', [1.5, .58, 0], [.24, .54, .47], [0, 0, -Math.PI / 2]);
  const tail = part(group, geometries.nose, '#f7f5ef', [-1.48, .58, 0], [.2, .46, .42], [0, 0, Math.PI / 2]);
  nose.name = 'rounded nose'; tail.name = 'tail cone';
  // Swept main wing and rear stabilizers, all oriented across Z.
  part(group, geometries.sweptWing, wing, [-.12, .43, 0], [1, 1, 1]);
  box(group, wing, [-1.12, .66, 0], [.57, .09, 1.06]).rotation.y = -.16;
  box(group, color, [-1.26, 1.02, 0], [.43, .65, .08]);
  // Twin under-wing nacelles, dark intakes, cockpit and cabin windows.
  for (const z of [-.78, .78]) {
    box(group, '#c4cdd0', [.08, .17, z], [.66, .24, .27]);
    box(group, dark, [.43, .17, z], [.035, .17, .22]);
    for (let x = -.8; x <= .82; x += .27) box(group, glass, [x, .78, z < 0 ? -.267 : .267], [.12, .075, .025]);
  }
  box(group, glass, [1.03, .79, 0], [.36, .09, .35]);
  // Three landing gear legs and wheels; bottom edge is exactly y=0.
  for (const x of [-.86, .63]) for (const z of [-.77, .77]) {
    box(group, '#414b4c', [x, .105, z], [.075, .21, .075]);
    part(group, geometries.wheel, '#222a2d', [x, .11, z], [1, 1, 1], [Math.PI / 2, 0, 0]);
  }
  box(group, '#414b4c', [.91, .12, 0], [.07, .24, .07]);
  part(group, geometries.wheel, '#222a2d', [.91, .11, 0], [1, 1, 1], [Math.PI / 2, 0, 0]);
  batchMeshes(group);
  group.userData.forward = '+X';
  return group;
}

/** Detailed helicopter with animatable main and tail rotor objects. */
export function createHelicopter({scale = 1, color = '#477b57'} = {}) {
  const group = new THREE.Group(); group.name = 'Dublin helicopter'; group.scale.setScalar(scale);
  const glass = '#9ed4e4', dark = '#263236';
  box(group, color, [0, .83, 0], [.94, .55, .62]);
  part(group, geometries.nose, color, [.5, .83, 0], [.25, .57, .56], [0, 0, -Math.PI / 2]);
  box(group, glass, [.54, 1.02, 0], [.08, .26, .43]);
  box(group, dark, [-.62, .87, 0], [.08, .1, .12]);
  box(group, color, [-.86, .92, 0], [.98, .13, .16]);
  part(group, geometries.nose, color, [-1.36, .93, 0], [.13, .24, .13], [0, 0, Math.PI / 2]);
  const mainRotor = new THREE.Group(); mainRotor.name = 'main rotor'; mainRotor.position.set(-.08, 1.22, 0);
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(geometries.blade, mat('#27383a'));
    const angle = i * Math.PI / 2;
    blade.scale.set(1.05, 1, 1); blade.position.set(Math.cos(angle) * .53, 0, -Math.sin(angle) * .53); blade.rotation.y = angle;
    blade.castShadow = true; mainRotor.add(blade);
  }
  group.add(mainRotor);
  const tailRotor = new THREE.Group(); tailRotor.name = 'tail rotor'; tailRotor.position.set(-1.34, .94, 0);
  for (let i = 0; i < 3; i++) {
    const blade = new THREE.Mesh(geometries.blade, mat('#27383a'));
    blade.scale.set(.34, 1, .8); blade.rotation.z = i * Math.PI * 2 / 3;
    blade.castShadow = true; tailRotor.add(blade);
  }
  batchMeshes(mainRotor);
  batchMeshes(tailRotor);
  group.add(tailRotor);
  for (const z of [-.42, .42]) {
    box(group, dark, [-.03, .32, z], [.065, .53, .065]);
    box(group, dark, [-.05, .055, z], [1.25, .07, .08]);
  }
  batchMeshes(group, new Set([mainRotor, tailRotor]));
  group.userData.rotors = [mainRotor, tailRotor];
  group.userData.forward = '+X';
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
