import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublinPort} from '../src/dublin-port.js';
import {buildDublinSecondHarbour,DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS} from '../src/dublin-second-harbour.js';

const harbour=buildDublinSecondHarbour();
// Audit integration against the existing port, including diagonal breakwaters.
const port=buildDublinPort();port.world.updateMatrixWorld(true);
const basin=new THREE.Box3(new THREE.Vector3(DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS.minX,-.1,DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS.minZ),new THREE.Vector3(DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS.maxX,.5,DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS.maxZ));
port.world.traverse(mesh=>{if(mesh.isMesh)assert(!new THREE.Box3().setFromObject(mesh).intersectsBox(basin),`${mesh.name} intrudes into the second harbour basin`)});

assert.equal(harbour.places.length,1);
assert.equal(harbour.places[0].id,'dubHowthHarbour');
assert.equal(harbour.places[0].kind,'seaport');
assert.equal(harbour.snapshot().boats.length,4,'four independent working, marina and passenger craft');
assert.equal(harbour.isLand(64,-46),true,'west quay and harbour buildings have a walking surface');
assert.equal(harbour.isLand(72.5,-55.5),true,'pier decks expose walkable land');
assert.equal(harbour.isLand(84,-46),false,'the inner basin remains water');
assert.equal(harbour.groundY(84,-46),undefined);
assert.equal(harbour.groundY(64,-46),.31);
assert.deepEqual(harbour.audit().hullIssues,[]);
assert.deepEqual(harbour.audit().overlaps,[]);
assert.deepEqual(harbour.audit().dockIssues,[]);
assert.deepEqual(harbour.audit().floatIssues,[],'boat hull bottoms sit at the waterline with a small draft');
assert.ok(DUBLIN_HOWTH_HARBOUR_WATER_BOUNDS.minX>62.5,'Howth basin is separate from the east port-water patch');

const seen=new Set();let previous=harbour.snapshot().boats.map(boat=>({id:boat.id,x:boat.x,z:boat.z}));
for(let t=.25;t<=350;t+=.25){
  harbour.update(t);
  const snapshot=harbour.snapshot();
  for(const boat of snapshot.boats)seen.add(boat.phase);
  assert.equal(snapshot.boats.length,4);
  assert.ok(snapshot.boats.every(boat=>[boat.x,boat.z,boat.heading,boat.routeProgress].every(Number.isFinite)));
  for(const boat of snapshot.boats){const old=previous.find(item=>item.id===boat.id);assert.ok(Math.hypot(boat.x-old.x,boat.z-old.z)<.65,`${boat.id} moves continuously without teleporting at t=${t}`);}
  previous=snapshot.boats.map(boat=>({id:boat.id,x:boat.x,z:boat.z}));
  if(Math.abs(t%2)<1e-9){const audit=harbour.audit();assert.deepEqual(audit.hullIssues,[],`full oriented hull corners stay in basin at t=${t}`);assert.deepEqual(audit.overlaps,[],`boats retain separate lanes at t=${t}`);assert.deepEqual(audit.dockIssues,[],`hulls clear every pier and breakwater solid at t=${t}`);assert.deepEqual(audit.floatIssues,[]);}
}
for(const phase of ['boarding','departing','fishing','cruising','returning'])assert.ok(seen.has(phase),`harbour service reaches ${phase}`);
assert.ok(harbour.snapshot().arrivals>0&&harbour.snapshot().departures>0);
harbour.update(0);
assert.equal(harbour.snapshot().timeSeconds,0,'backward shared-clock seek resets boats coherently without internal wall time');
assert.deepEqual(harbour.audit().hullIssues,[]);

// Walkable pier surfaces stay outside the visible moving hull at each berth.
harbour.world.updateMatrixWorld(true);
for(const boat of harbour.snapshot().boats.filter(item=>item.berth)){
  const root=harbour.world.children.find(object=>object.name.endsWith(boat.id));
  assert.ok(root&&root.visible);
  const hull=new THREE.Box3().setFromObject(root);
  const pierBoxes=[];harbour.world.traverse(object=>{if(object.isMesh&&object.name.startsWith('Fishing and marina pier'))pierBoxes.push(new THREE.Box3().setFromObject(object));});
  assert.ok(pierBoxes.every(bounds=>!bounds.intersectsBox(hull)),`${boat.id} has a clear boarding berth`);
}
harbour.dispose();
console.log('Howth harbour boats, berth clearance, shared clock and water-bound tests passed');
