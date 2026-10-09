import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublinPort} from '../src/dublin-port.js';
import {buildDublinBridges} from '../src/dublin-bridges.js';
import {buildDublinMotion} from '../src/dublin-motion.js';

function checkClear(port){
  const audit=port.audit();
  assert.deepEqual(audit.groundIssues,[],'container stacks and crane legs must sit on the authored terminal land');
  assert.deepEqual(audit.channelIntrusions,[],'fixed port equipment remains clear of the channel');
  assert.deepEqual(audit.landIntrusions,[],'vessel hulls must remain in water outside the quay');
  assert.deepEqual(audit.hullLandIssues,[],'all four full hull corners stay within the city channel, basin, and harbor water');
  assert.deepEqual(audit.vesselOverlaps,[],'active vessel hulls must have separate lanes and berth reservations');
  assert.ok(audit.vessels.filter(v=>['berth','transfer'].includes(v.phase)).every(v=>v.clearance>.5),'berthing hulls keep a clear water gap from the terminal edge');
  const cargoBounds=[];
  port.world.traverse(o=>{if(o.isMesh&&o.name==='Active cargo transfer container'&&o.visible)cargoBounds.push({x:o.position.x,z:o.position.z});});
  assert.ok(cargoBounds.every(p=>p.x<39||p.x>62.5||Math.abs(p.z)>=3||port.snapshot().vessels.some(v=>v.phase==='approach'&&Math.abs(p.x-v.x)<v.length/2+.2&&Math.abs(p.z-v.z)<v.width/2+.2)),'cargo storage stays on the quay; a container over water must remain aboard its moving ship');
}

const port=buildDublinPort();
assert.equal(port.places[0].id,'dubPort');
assert.equal(port.places[0].city,'dublin');
assert.equal(port.places[0].kind,'seaport');
assert.equal(port.isLand(port.places[0].arrivalX,port.places[0].arrivalZ),true);
assert.equal(port.isLand(76,0),false,'basin is navigable water');
assert.equal(port.isLand(30,31),true,'city-edge connector has a continuous walking surface');
assert.equal(port.isLand(43,22),true,'gated port approach has a continuous walking surface');
assert.equal(port.isLand(54,0),false,'the central Liffey channel stays navigable through the terminal');
assert.equal(port.groundY(54,0),undefined);
assert.equal(port.groundY(54,-5),.325,'north quay exposes its actual walking height');
assert.equal(port.groundY(54,5),.325,'south quay exposes its actual walking height');
assert.equal(port.groundY(38,0),undefined,'the channel has no artificial land beyond the bridge');
assert.ok(Math.abs(port.groundY(42.4,0)-.523)<.001,'port drawbridge reports its actual closed deck height');
assert.ok(port.groundY(42.4,-8)>.325&&port.groundY(42.4,-8)<.523,'bridge ramp exposes its sloping height');
for(let z=-12;z<=12;z+=.25)assert.notEqual(port.groundY(42.4,z),undefined,`bridge crossing remains walkable at z=${z}`);
assert.deepEqual(port.audit().channelIntrusions,[],'quay equipment and fixed road fittings stay out of the navigable channel');
assert.equal(port.world.userData.metrics.riverMouthWidth,6);
assert.equal(port.places[0].arrivalZ,5,'the port focus point sits on the south quay');
assert.equal(port.snapshot().cranes,4);
assert.deepEqual(port.snapshot().vessels.map(v=>v.type),['cargo','ferry']);

const phases=new Set();
const bridges=buildDublinBridges();
for(let t=0;t<=650;t+=.5){
  bridges.update(t,{ships:port.snapshot().vessels,vehicles:[]});
  port.update(t,{bridges});
  for(const vessel of port.snapshot().vessels)phases.add(vessel.phase);
  if(Math.abs(t%2)<1e-8)checkClear(port);
}
for(const required of ['approach','berth','transfer','depart','offshore'])assert.ok(phases.has(required),`cycle includes ${required}`);
assert.ok(port.snapshot().completedCargo>=2);
assert.ok(port.snapshot().completedFerries>=2);
assert.ok(port.snapshot().containersMoved>=2,'container counter follows completed visual transfers');
checkClear(port);
port.resetTimeline();
assert.equal(port.snapshot().time,0);
assert(bridges.snapshot().spans.every(s=>s.state==='closed'&&s.deckAngle===0),'port reset releases bridge reservations and resets moving leaves');
const resetCargo=port.world.children.find(o=>o.name==='Container ship cargo-1');
const resetFerry=port.world.children.find(o=>o.name==='Ro-Ro ferry ferry-1');
assert(Math.abs(resetCargo.position.x-92)<.01&&Math.abs(resetCargo.position.z+6)<.01,'reset immediately restores the first vessel mesh at its route start');
assert(Math.abs(resetFerry.position.x-92)<.01&&Math.abs(resetFerry.position.z+12)<.01&&resetFerry.visible,'reset leaves the second vessel visibly moored outside the shared channel');
for(let t=.5;t<=400;t+=.5){bridges.update(t,{ships:port.snapshot().vessels,vehicles:[]});port.update(t,{bridges});if(Math.abs(t%2)<1e-8)checkClear(port);}
checkClear(port);
bridges.dispose();port.dispose();

// Hold every span shut and verify the approach controller stops the full ship
// before the actual leaf footprint instead of trusting bridge timing.
const heldPort=buildDublinPort();
const heldBridges=buildDublinBridges();
let heldAtBridge=null;
for(let t=.5;t<=220;t+=.5){
  const ships=heldPort.snapshot().vessels;
  heldBridges.reset();heldBridges.update(0,{ships,vehicles:[]});
  heldPort.update(t,{bridges:heldBridges});
  const cargo=heldPort.snapshot().vessels.find(v=>v.id==='cargo-1');
  if(cargo?.nextBridgeX!==null&&cargo?.nextBridgeX!==undefined&&cargo.nextBridgeStopDistance!==null&&Math.abs(cargo.routeDistance-cargo.nextBridgeStopDistance)<.01){heldAtBridge=cargo;break;}
}
assert.ok(heldAtBridge,'cargo reaches the stop line at its first closed span');
assert.equal(heldBridges.canShipPass(heldAtBridge.nextBridgeX),false);
assert.ok(heldAtBridge.routeDistance<=heldAtBridge.nextBridgeStopDistance+.001,'route controller holds the vessel at the bridge stop line');
assert.equal(heldAtBridge.nextBridgeX,42.4,'the first route crossing uses the wider port leaf');
assert.ok(Math.abs(heldAtBridge.x-heldAtBridge.nextBridgeX)>=heldAtBridge.length/2+1.4+.25-.03,'full hull stops clear of the port leaf footprint');
const heldInitial={distance:heldAtBridge.routeDistance,x:heldAtBridge.x,z:heldAtBridge.z};
const portLeafMesh=[];heldBridges.world.traverse(o=>{if(o.name==='Moving road deck leaf'&&Math.abs(o.parent.position.x-42.4)<.02)portLeafMesh.push(o);});
assert.equal(portLeafMesh.length,1);
const actualCargoRoot=heldPort.world.children.find(o=>o.name==='Container ship cargo-1');
for(let t=220.5;t<=240;t+=.5){const ships=heldPort.snapshot().vessels;heldBridges.reset();heldBridges.update(0,{ships,vehicles:[]});heldPort.update(t,{bridges:heldBridges});}
heldPort.world.updateMatrixWorld(true);heldBridges.world.updateMatrixWorld(true);
const stopped=heldPort.snapshot().vessels.find(v=>v.id==='cargo-1');
assert.equal(stopped.routeDistance,heldInitial.distance,'a held-closed span keeps the ship route distance fixed');
assert.ok(Math.abs(stopped.x-heldInitial.x)<.001&&Math.abs(stopped.z-heldInitial.z)<.001,'the actual ship pose remains fixed while waiting');
assert.equal(new THREE.Box3().setFromObject(actualCargoRoot).intersectsBox(new THREE.Box3().setFromObject(portLeafMesh[0])),false,'full moving cargo-ship bounds do not intersect the actual closed leaf while waiting');
heldBridges.dispose();heldPort.dispose();

// Exercise real road traffic, ships, and all bridge states on the same clock.
const coordinatedPort=buildDublinPort(),coordinatedBridges=buildDublinBridges(),coordinatedMotion=buildDublinMotion();
const openedSpans=new Set();
for(let t=0;t<=600;t+=.5){
  coordinatedBridges.update(t,{ships:coordinatedPort.snapshot().vessels,vehicles:coordinatedMotion.getSnapshot().roadVehiclePositions});
  coordinatedPort.update(t,{bridges:coordinatedBridges});
  coordinatedMotion.update(t,{bridges:coordinatedBridges});
  for(const span of coordinatedBridges.snapshot().spans)if(span.state==='open')openedSpans.add(span.x);
}
assert.equal(openedSpans.size,7,'live road traffic and port vessels eventually obtain all seven spans');
assert.ok(coordinatedPort.snapshot().vessels.some(v=>v.routeDistance>100),'vessels keep moving through the river under coordinated traffic');
assert.ok(coordinatedMotion.getSnapshot().roadVehiclePositions.every(v=>Number.isFinite(v.x)&&Number.isFinite(v.z)));
coordinatedMotion.dispose();coordinatedBridges.dispose();coordinatedPort.dispose();

// Verify a cargo crate leaves the vessel and remains deposited on terminal land.
const cargoPort=buildDublinPort();
for(let t=0;t<=155;t+=.25)cargoPort.update(t);
const transferred=cargoPort.world.children.find(o=>o.name==='Active cargo transfer container');
assert.ok(transferred,'cargo is represented by a separate moving container mesh');
assert.equal(transferred.parent,cargoPort.world,'transfer container is not parented to the departing ship');
assert.ok(transferred.position.x>=54&&transferred.position.x<=59);
assert.ok(cargoPort.isLand(transferred.position.x,transferred.position.z));
assert.equal(cargoPort.snapshot().containersMoved,1);
checkClear(cargoPort);

const movingPort=buildDublinPort();
movingPort.update(131);
const movingCrate=movingPort.world.children.find(o=>o.name==='Active cargo transfer container');
assert.ok(movingCrate.position.y>4,'cargo visibly travels on the crane hoist between ship and yard');
const ropePositions=movingPort.world.children.filter(o=>o.name==='Quayside ship-to-shore gantry').flatMap(c=>c.children.filter(m=>m.name==='Crane hoist cable').map(m=>m.position.x));
assert.ok(ropePositions.every(Number.isFinite));

// Repeated pauses preserve simulation time; reset uses a wall-clock baseline rather than stale zero.
const pausedPort=buildDublinPort();
pausedPort.update(100);pausedPort.update(101);pausedPort.dispatch('pause');
const pausedAt=pausedPort.snapshot().time;
pausedPort.update(150);pausedPort.update(200);
assert.equal(pausedPort.snapshot().time,pausedAt);
pausedPort.dispatch('resume');pausedPort.update(201);
assert.ok(Math.abs(pausedPort.snapshot().time-(pausedAt+1))<1e-8);
pausedPort.dispatch('pause');pausedPort.update(205);pausedPort.dispatch('resume');pausedPort.update(206);
assert.ok(Math.abs(pausedPort.snapshot().time-(pausedAt+2))<1e-8);
pausedPort.dispatch('reset');
assert.equal(pausedPort.snapshot().time,0);
assert.equal(pausedPort.snapshot().completedCargo,0);
pausedPort.update(207);
assert.equal(pausedPort.snapshot().time,1,'reset does not jump to the caller external elapsed time');

// Dispatch reserves unused channel lanes, rejects overflow, then retires dispatched ships after departure.
const dispatchPort=buildDublinPort();
const cargoResult=dispatchPort.dispatch('dispatch-cargo');
const ferryResult=dispatchPort.dispatch('dispatch-ferry');
assert.equal(cargoResult.ok,true);assert.equal(ferryResult.ok,true);
assert.ok(cargoResult.message);assert.ok(ferryResult.message);
assert.equal(new Set(dispatchPort.snapshot().vessels.map(v=>v.slot)).size,4);
const busy=dispatchPort.dispatch('dispatch-cargo');
assert.equal(busy.ok,false);assert.match(busy.message,/occupied/i);
checkClear(dispatchPort);
for(let t=.5;t<=1050;t+=.5){dispatchPort.update(t);if(Math.abs(t%2)<1e-8)checkClear(dispatchPort);}
assert.equal(dispatchPort.snapshot().vessels.length,2,'dispatched vessels retire once offscreen after departure');
assert.ok(dispatchPort.snapshot().completedCargo>=1);
dispatchPort.dispose();

const longPort=buildDublinPort();
for(let t=0;t<=73*18;t+=.5)longPort.update(t);
const cargoMeshes=[];longPort.world.traverse(o=>{if(o.isMesh&&o.name==='Active cargo transfer container')cargoMeshes.push(o);});
assert.ok(cargoMeshes.length<=13,'cargo reuse keeps long-running storage bounded to twelve deposited containers and one active load');
longPort.dispose();
const rewindPort=buildDublinPort();
rewindPort.update(120);rewindPort.resetTimeline();
assert.equal(rewindPort.snapshot().time,0,'devseek reset rebases the port clock to zero');
rewindPort.update(.5);assert.ok(Math.abs(rewindPort.snapshot().time-.5)<1e-8,'the port advances immediately after a backward seek');
rewindPort.dispose();
console.log('Dublin Port geometry and operations tests passed');
