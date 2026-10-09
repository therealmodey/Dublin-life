import assert from 'node:assert/strict';
import {buildDublinAirport} from '../src/dublin-airport.js';
import {buildDublinRoadDetails} from '../src/dublin-road-details.js';
import {DUBLIN_ROAD_LANES,DUBLIN_ROAD_JUNCTIONS} from '../src/dublin-road-network.js';

const {world,metrics}=buildDublinRoadDetails();
assert.equal(metrics.roadLanes,DUBLIN_ROAD_LANES.length);
assert.equal(metrics.curbs,DUBLIN_ROAD_LANES.map(l=>l.routeId).filter((id,i,a)=>a.indexOf(id)===i).length*2,'one paired kerb system per authored road route');
assert.equal(metrics.footways,DUBLIN_ROAD_LANES.map(l=>l.routeId).filter((id,i,a)=>a.indexOf(id)===i).length*2,'one paired footway system per authored road route');
assert.ok(metrics.markings>100);
assert.equal(metrics.signalizedCrossings,14,'all seven operating spans have signals on both riverbanks');
assert.ok(metrics.streetLights>=10);
assert.equal(metrics.busStops,4);
assert.equal(metrics.railSegments,0,'metro rail geometry is removed');
const airportLane=DUBLIN_ROAD_LANES.find(l=>l.routeId==='airport-access-roundabout'&&l.direction===1);
assert.equal(metrics.airportConnectorLength,airportLane.lengths.reduce((sum,n)=>sum+n,0));
assert(Math.hypot(airportLane.points.at(-1).x+11,airportLane.points.at(-1).z+46.92)<.3,'airport road reaches the actual arrivals-road connector');
assert.equal(metrics.airportBusLaneSegments,0);
assert.ok(world.children.length>metrics.curbs);

// Every generated fitting has a valid material and finite placement.
const meshes=[];world.traverse(o=>{if(o.isMesh)meshes.push(o);});
assert.ok(meshes.length>450);
for(const mesh of meshes){
  assert.ok(mesh.material?.isMaterial,`${mesh.name} receives a Three.js Material`);
  assert.ok([mesh.position.x,mesh.position.y,mesh.position.z].every(Number.isFinite),`${mesh.name} has finite coordinates`);
}

// No kerb, footway or rail ribbon floats across open river water.
for(const sample of metrics.surfaceSamples){
  assert.ok([sample.x,sample.y,sample.z].every(Number.isFinite),`${sample.name} sample is finite`);
  assert.ok(Math.abs(sample.z)>=2.25,`${sample.name} does not leave fixed geometry over a moving river span`);
  if(sample.role==='kerb'||sample.role==='footway')assert(DUBLIN_ROAD_JUNCTIONS.every(j=>Math.hypot(sample.x-j.x,sample.z-j.z)>=j.radius+.25),'junction openings are clear of continuous kerbs');
  if(sample.role==='rail')assert.ok(Math.abs(sample.z)>2.25,'north quay rails stay on land');
}

// Tram rails avoid the shared road lanes except at the explicitly cleared bridge spans.
for(const mesh of meshes.filter(o=>o.userData.streetRole==='rail')){
  const p=mesh.userData.surfacePoint;
  for(const lane of DUBLIN_ROAD_LANES)for(const q of lane.points){
    const distance=Math.hypot(p.x-q.x,p.z-q.z);
    assert.ok(distance>.36,`tram rail blocks a traffic lane at ${p.x.toFixed(2)}, ${p.z.toFixed(2)}`);
  }
}
console.log('Dublin road detail geometry tests passed');

// Access is checked against actual airport solids, not only its large parcel.
const airport=buildDublinAirport();
const raised=[...airport.userData.airportBoxes,...airport.userData.airportCylinders].filter(b=>.26+b.y+b.sy/2>.34&&.26+b.y-b.sy/2<1);
for(const lane of DUBLIN_ROAD_LANES.filter(l=>l.routeId.includes('airport')))for(const p of lane.points)for(const b of raised){
  const halfX=b.sx; // boxes double in plan; cylinders use twice their radius.
  const radiusX=airport.userData.airportCylinders.includes(b)?2*b.sx:halfX;
  const radiusZ=airport.userData.airportCylinders.includes(b)?2*b.sz:b.sz;
  const isCylinder=airport.userData.airportCylinders.includes(b),dx=p.x-(-11+2*b.x),dz=p.z-(-55+2*b.z);
  assert(isCylinder?Math.hypot(dx,dz)>=radiusX+.20:(Math.abs(dx)>=radiusX+.20||Math.abs(dz)>=radiusZ+.20),`airport access cuts through ${b.name}`);
}
