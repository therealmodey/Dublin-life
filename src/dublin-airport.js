import * as THREE from 'three';
import { DUBLIN_PALETTE as P } from './dublin-palette.js';
import { createAirliner, createHelicopter, createCar } from './dublin-vehicles.js';

// World-space anchors shared with the airport animation and arrival systems.
export const DUBLIN_AIRPORT_LAYOUT = Object.freeze({
  runway: { x: -11, z: -43.5, y: .33, length: 32, width: 1.5 },
  helipad: { x: -26, z: -36.25, y: .40 },
});

const mat = (color, roughness = .8, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });

/** Build the detailed airport inside its 36 by 12 Dublin landmark lot. */
export function buildDublinAirport({ lot = { x: -11, z: -40 }, textSurface } = {}) {
  const root = new THREE.Group();
  root.name = 'Dublin Airport';
  root.position.set(lot.x, .26, lot.z);
  const m = {
    grass: mat(P.lawn), concrete: mat('#b7b9b5'), apron: mat('#aeb2b1'), asphalt: mat('#30363b'),
    stripe: mat('#f7f5ef'), yellow: mat('#e9bc32'), light: new THREE.MeshStandardMaterial({ color: '#ffe8a3', emissive: '#b5892d', emissiveIntensity: .55 }),
    glass: new THREE.MeshStandardMaterial({ color: P.glass, roughness: .23, metalness: .14 }), steel: mat('#72808a', .4, .4),
    roof: mat('#d8dfe0', .38, .22), brick: mat(P.brick), dark: mat(P.dark), green: mat(P.pubGreen), red: mat('#ce3b36'),
  };
  const boxInstances = [], cylinderInstances = [];
  const box = (name, x,y,z, sx,sy,sz, material, rotY=0, rotX=0) => {
    boxInstances.push({name,x,y,z,sx,sy,sz,rotY,rotX,color:material.color});
  };
  const cylinder = (name,x,y,z,r,h,material,segments=12) => {
    cylinderInstances.push({name,x,y,z,sx:r,sy:h,sz:r,color:material.color});
  };
  const flushInstances=()=>{
    const place=(group,items,geometry)=>{if(!items.length)return;
      const mesh=new THREE.InstancedMesh(geometry,new THREE.MeshStandardMaterial({color:'#ffffff',roughness:.72}),items.length), dummy=new THREE.Object3D();
      mesh.name=items[0].name;items.forEach((it,i)=>{dummy.position.set(it.x,it.y,it.z);dummy.scale.set(it.sx||1,it.sy||1,it.sz||1);dummy.rotation.set(it.rotX||0,it.rotY||0,0);dummy.updateMatrix();
        if(!dummy.matrix.elements.every(Number.isFinite)) throw new Error(`Nonfinite airport instance transform: ${it.name}`);
        mesh.setMatrixAt(i,dummy.matrix);mesh.setColorAt(i,it.color);
      });
      mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=true;mesh.receiveShadow=true;mesh.computeBoundingSphere();
      if(!Number.isFinite(mesh.boundingSphere?.radius)) throw new Error(`Invalid airport instance bounds: ${mesh.name}`);
      group.add(mesh);
    };
    place(root,boxInstances,new THREE.BoxGeometry(1,1,1));
    place(root,cylinderInstances,new THREE.CylinderGeometry(1,1,1,12));
  };
  const sphere = (name,x,y,z,sx,sy,sz,material) => { const o=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),material);o.name=name;o.position.set(x,y,z);o.scale.set(sx,sy,sz);root.add(o);return o; };
  const line = (x,z,sx,sz,material=m.yellow,y=.09) => box('taxiway marking',x,y,z,sx,.018,sz,material);
  const ix = DUBLIN_AIRPORT_LAYOUT.runway.x-lot.x, iz=DUBLIN_AIRPORT_LAYOUT.runway.z-lot.z;

  // Airfield paving, runway 09/27, threshold bars, edge lights and centerline.
  box('airfield grass',0,-.015,0,36,.04,12,m.grass);
  box('taxi apron',0,.035,.45,34,.07,4.2,m.apron);
  box('runway 09/27',ix,.055,iz,32,.075,1.55,m.asphalt);
  for(let x=-14.5;x<=14.5;x+=1.65) line(x,iz, .72,.055,m.stripe,.101);
  for(const end of [-15.05,15.05]) {
    for(let k=-3;k<=3;k++) box('runway threshold bar',end,.103,iz+k*.17,.82,.018,.075,m.stripe);
    for(let side of [-1,1]) { const lamp= new THREE.Mesh(new THREE.BoxGeometry(.12,.075,.12),m.light);lamp.position.set(end,.14,iz+side*.94);root.add(lamp); }
  }
  for(let x=-15;x<=15;x+=2) for(const side of [-1,1]) {const l=new THREE.Mesh(new THREE.BoxGeometry(.075,.065,.075),m.light);l.position.set(x,.115,iz+side*.86);root.add(l);}
  // Parallel taxi lane and connectors from runway ends, with holding points.
  line(0,-2.2,30,.07); line(-15.2,-2.85,.07,1.3); line(15.2,-2.85,.07,1.3);
  for(const x of [-15.2,15.2]) line(x,-3.5,.07,1.3);
  for(const x of [-4,4]) { line(x,-2.2,.08,.48,m.stripe,.105); line(x,-2.2,.08,.48,m.stripe,.105); }
  for(const x of [-13,-8,-3,2,7,12]) { line(x,-2.2,.8,.055); line(x,-2.2,.055,.52); }
  if(textSurface){ textSurface('09','#ffffff',2.5,root,ix-13.3,.11,iz,true); textSurface('27','#ffffff',2.5,root,ix+13.3,.11,iz,true); }
  // Glass-fronted terminal, distinctive curved canopy and jet bridges.
  box('terminal base',0,.42,2.12,16.8,.75,2.15,m.brick);
  box('terminal concourse',0,.91,2.04,17,.72,2.05,m.glass);
  box('terminal lower mullion',0,.55,.94,16.8,.08,.08,m.steel);
  box('arrivals glazing',0,.77,3.21,16.7,.62,.035,m.glass);
  for(let x=-8;x<=8;x+=.8)box('arrivals mullion',x,.78,3.24,.045,.64,.04,m.steel);
  for(let x=-8;x<=8;x+=.55) box('terminal mullion',x,.9,1.0,.045,.62,.045,m.steel);
  // Shallow curved canopy panels meet at a gently raised center.
  const roofY=j=>1.39+Math.sin(j*Math.PI/4)*.22;
  for(let j=0;j<5;j++) {
    const slope=(roofY(j+1)-roofY(j))/.47;
    box('curved canopy roof panel',0,roofY(j)-.03,1.05+j*.47+.235,17.8,.1,.49,m.roof,0,-Math.atan(slope));
  }
  // Repeated arch ribs make the curved roof edge legible from above.
  for(let x=-8.3;x<=8.31;x+=1.15){
    for(let j=0;j<=4;j++) { const z=1.05+j*.47, y=1.36+Math.sin(j*Math.PI/4)*.22;box('canopy arch rib',x,y,z,.055,.075,.07,m.steel); }
  }
  box('departure hall sign',0,1.55,.93,3.2,.25,.08,m.green);
  if(textSurface) textSurface('DUBLIN AIRPORT','#ffffff',3.0,root,0,1.55,.985,false,'#236b48');
  for(const x of [-6,-2,2,6]) {
    // Covered passenger bridge reaches the aircraft from the terminal.
    box('jet bridge',x,.76,.18,1.3,.34,1.05,m.glassMid || m.glass);
    box('jet bridge support',x,.36,.23,.13,.62,.13,m.steel);
    box('boarding stand number',x,.16,-.55,.82,.06,.36,m.dark);
    if(textSurface) textSurface(String([-6,-2,2,6].indexOf(x)+1),P.white,.42,root,x,.205,-.55,false,'#1f2328');
  }
  // Three taxi lead-ins, stand lines, service lane and apron fixtures.
  for(const x of [-6,-2,2,6]) {
    line(x,-.85,.065,1.2); line(x,-1.5,.8,.05); line(x,-1.5,.05,.5);
    for(const dx of [-.8,.8]) cylinder('apron bollard',x+dx,.18,-.92,.045,.36,m.yellow,8);
  }
  // Airfield support block and glazed control tower.
  box('tower service block',-16,.42,1.3,2,.8,1.7,m.concrete);
  box('tower shaft',-16,1.4,1.3,.52,1.25,.52,m.concrete);
  box('control room',-16,2.15,1.3,1.05,.52,1.05,m.glass);
  box('tower roof',-16,2.44,1.3,1.25,.1,1.25,m.dark);
  cylinder('tower antenna',-16,2.8,1.3,.025,.65,m.steel,8);
  // Marked parking apron with a charter aircraft and helipad pair.
  box('charter apron',12,.03,-1.05,5,.07,2.1,m.concrete);
  for(let x=10;x<=14;x+=2) { line(x,-1.05,.05,1.5); }
  const privateJet=createAirliner({scale:.64,color:'#c8d9e8'}); privateJet.name='parked charter jet'; privateJet.position.set(12,.12,-1.05); privateJet.rotation.y=-Math.PI/2;root.add(privateJet);
  const helis=[];
  for(const x of [-15,-11.5]) {
    cylinder('helipad asphalt',x,.075,3.75,1.05,.08,m.asphalt,32);
    for(let a=0;a<16;a++){const ang=a*Math.PI/8;box('helipad perimeter light',x+Math.cos(ang)*.96,.14,3.75+Math.sin(ang)*.96,.11,.035,.11,m.light);}
    box('helipad H crossbar',x,.13,3.75,1.15,.025,.12,m.stripe);
    for(const dx of [-.42,.42]) box('helipad H leg',x+dx,.13,3.75,.12,.025,.92,m.stripe);
  }
  const helicopter=createHelicopter({scale:.72});helicopter.name='parked helicopter';helicopter.position.set(-15,.14,3.75);root.add(helicopter);helis.push(helicopter);
  // Four gate aircraft occupy distinct stands. The supplied vehicle model has forward +X.
  const parked=[];
  const gates=[[-6,-.9,'#f7f5ef'],[-2,-.9,'#2a8c68'],[2,-.9,'#e8b931'],[6,-.9,'#d8e2ea']];
  for(const [x,z,color] of gates){const jet=createAirliner({color});jet.name='Dublin Airport gate aircraft';jet.position.set(x,.14,z);jet.rotation.y=-Math.PI/2;root.add(jet);parked.push(jet);}
  parked.push(privateJet);
  // Baggage tractor, belt loader and fuel truck are simple, legible apron details.
  const serviceVehicle=(name,x,z,color)=>{box(name+' body',x,.19,z,.72,.25,.38,mat(color));box(name+' cab',x+.12,.36,z,.32,.18,.34,m.glass);for(const dx of [-.23,.23])for(const dz of [-.22,.22])cylinder(name+' wheel',x+dx,.09,z+dz,.09,.07,m.dark,10);};
  serviceVehicle('baggage tug',-8,.6,'#e8b931'); serviceVehicle('fuel truck',8,.55,'#d4d9de');
  box('baggage cart',-9,.16,.9,.8,.2,.42,m.concrete);box('belt loader',-8.8,.32,1.3,.14,.55,.9,m.dark,Math.PI/8);
  box('terminal car park',12,.025,2.45,5,.05,3.4,m.concrete);
  for(const [i,color] of ['#f7f5ef','#36597d','#a83232','#1f2328'].entries()){const car=createCar({color,scale:.8});car.position.set(10.5+i,.09,2.45);car.rotation.y=Math.PI/2;root.add(car);}
  for(let z=1;z<=3.5;z+=.6) line(12,z,4.7,.035,m.stripe,.075);
  // Arrival access road on the south edge of the landmark lot.
  box('airport arrivals road',0,.025,5.15,35,.055,1.0,mat(P.roadDark));
  for(let x=-16;x<=16;x+=1.8) line(x,5.15,.72,.045,m.stripe,.07);
  for(const x of [-10,10]) {box('roadside lamp post',x,.62,4.45,.055,1.2,.055,m.steel);sphere('roadside lamp',x,1.25,4.45,.13,.1,.13,m.light);}
  flushInstances();
  root.userData={runway:{...DUBLIN_AIRPORT_LAYOUT.runway},gateCount:4,parkedAircraft:parked,helicopters:helis,counts:{airliners:4,privateJets:1,helicopters:1,helipads:2}};
  return root;
}
