import assert from 'node:assert/strict';
import * as THREE from 'three';
import { createAirliner, createHelicopter } from '../src/dublin-vehicles.js';
import { buildDublinAirport, DUBLIN_AIRPORT_LAYOUT } from '../src/dublin-airport.js';
import { buildDublinMotion } from '../src/dublin-motion.js';

function assertFiniteBounds(object, label) {
  object.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(object);
  assert(!bounds.isEmpty(), `${label} should contain visible geometry`);
  for (const n of [...bounds.min.toArray(), ...bounds.max.toArray()]) {
    assert(Number.isFinite(n), `${label} bounds should remain finite`);
  }
  return bounds;
}

function airportBoxBounds(airport, detail) {
  const transform = new THREE.Object3D();
  transform.position.set(detail.x, detail.y, detail.z);
  transform.scale.set(detail.sx, detail.sy, detail.sz);
  transform.rotation.set(0, detail.rotY || 0, detail.rotZ || 0);
  transform.updateMatrix();
  return new THREE.Box3(
    new THREE.Vector3(-.5, -.5, -.5),
    new THREE.Vector3(.5, .5, .5),
  ).applyMatrix4(transform.matrix).applyMatrix4(airport.matrixWorld);
}

function airportCylinderBounds(airport, detail) {
  const transform = new THREE.Object3D();
  transform.position.set(detail.x, detail.y, detail.z);
  transform.scale.set(detail.sx, detail.sy, detail.sz);
  transform.updateMatrix();
  return new THREE.Box3(
    new THREE.Vector3(-1, -.5, -1),
    new THREE.Vector3(1, .5, 1),
  ).applyMatrix4(transform.matrix).applyMatrix4(airport.matrixWorld);
}

function overlapVolume(a, b) {
  const overlap = a.clone().intersect(b);
  if (overlap.isEmpty()) return 0;
  const size = overlap.getSize(new THREE.Vector3());
  return size.x * size.y * size.z;
}

const airliner = createAirliner({ scale: .82 });
assert.equal(airliner.userData.forward, '+X', 'aircraft heading contract remains +X');
assert.equal(airliner.userData.gear.length, 3, 'airliner exposes its three source-backed gear assemblies');
assert(airliner.children.some(child => child.name === 'Airliner source frame'));
const airlinerBounds = assertFiniteBounds(airliner, 'Lagos Life Airliner');
assert(airlinerBounds.max.x - airlinerBounds.min.x > 2.5, 'airliner nose and tail follow the +X axis');
assert(airlinerBounds.max.z - airlinerBounds.min.z > 2.5, 'airliner swept wings have their expected span');

const helicopter = createHelicopter({ scale: .82, spin: false });
assert.equal(helicopter.userData.forward, '+X', 'helicopter heading contract remains +X');
assert.equal(helicopter.userData.rotors.length, 2, 'main and tail rotor groups remain addressable');
assert(helicopter.userData.rotors[0].name === 'main rotor');
assert(helicopter.userData.rotors[1].name === 'tail rotor');
const helicopterBounds = assertFiniteBounds(helicopter, 'Lagos Life Helicopter');
assert(helicopterBounds.max.x - helicopterBounds.min.x > 1.5, 'helicopter tail boom extends along its forward axis');
assert(helicopterBounds.max.z - helicopterBounds.min.z > 2, 'helicopter main rotor has source proportions');

const layout = DUBLIN_AIRPORT_LAYOUT;
assert.deepEqual(layout.origin, { x: -11, z: -55 });
assert.deepEqual(layout.runway.start, { x: -43, y: .8325, z: -62, threshold: '10R', heading: 100 });
assert.deepEqual(layout.runway.end, { x: 21, y: .8325, z: -62, threshold: '28L', heading: 280 });
assert.equal(layout.runway.length, 64, 'primary runway axis doubles with the airport footprint');
assert.equal(layout.runway.surfaceY, .3525);
assert.equal(layout.parallelRunway.id, '10L/28R');
assert.equal(layout.crosswindRunway.id, '16/34');
assert.equal(layout.gates.length, 2, 'two gates are reserved for scheduled aircraft');
assert.deepEqual(layout.gates.map(gate => gate.id), ['T1-1', 'T2-1']);
assert.deepEqual(Object.keys(layout.taxiways).sort(), ['T1-1', 'T2-1']);
for (const gate of layout.gates) {
  const path = layout.taxiways[gate.id];
  assert(path.length >= 4, `${gate.id} has a connected taxi route`);
  assert(Math.hypot(path[0].x - gate.position.x, path[0].z - gate.position.z) < .01,
    `${gate.id} taxi path starts at its gate`);
  const endpoint = path.at(-1);
  assert(Math.min(Math.abs(endpoint.x - layout.runway.start.x), Math.abs(endpoint.x - layout.runway.end.x)) < 2,
    `${gate.id} route connects to primary runway`);
  assert(Math.abs(endpoint.z - layout.runway.start.z) < 1, `${gate.id} route reaches primary runway axis`);
}
assert(layout.helipad.position && Number.isFinite(layout.helipad.position.x));

const airport = buildDublinAirport();
assert.equal(airport.userData.reservedGateIds.length, 2);
assert.deepEqual(airport.userData.reservedGateIds, ['T1-1', 'T2-1']);
assert.equal(airport.userData.parkedAircraft.length, 3, 'parked airliners use stands outside the active gates');
assert.equal(airport.userData.helicopters.length, 1);
const airportBounds = assertFiniteBounds(airport, 'Dublin Airport');
const campusBounds = airportBoxBounds(airport, airport.userData.airportBoxes.find(detail => detail.name === 'airport campus'));
assert(Math.abs((campusBounds.max.x - campusBounds.min.x) - 72) < .1, 'airport campus spans the requested 72 world units');
assert(Math.abs((campusBounds.max.z - campusBounds.min.z) - 29) < .1, 'airport campus spans the requested 29 world units');
assert(airportBounds.min.x <= -47 && airportBounds.max.x >= 25, 'campus is anchored at the expanded western/eastern site edge');
assert(airportBounds.min.z <= -69 && airportBounds.max.z >= -41, 'campus is anchored at the expanded northern/southern site edge');
assert(airportBounds.min.x >= campusBounds.min.x - .01 && airportBounds.max.x <= campusBounds.max.x + .01 &&
  airportBounds.min.z >= campusBounds.min.z - .01 && airportBounds.max.z <= campusBounds.max.z + .01,
  'all airport structures and parked aircraft fit within the 72 by 29 ground footprint');
assert(airport.scale.x === 2 && airport.scale.z === 2, 'ground footprint expands uniformly in both horizontal axes');
assert.equal(airport.userData.metrics.campusWidth, 72);
assert.equal(airport.userData.metrics.campusDepth, 29);
assert.equal(airport.userData.metrics.instancedDetailBatches, 2, 'repeated airport details remain in two instance batches');
assert(airport.userData.metrics.boxDetailInstances > 400, 'campus detail inventory remains rich after expansion');
assert(airport.userData.metrics.cylinderDetailInstances > 120, 'lights, tanks, posts and equipment remain instanced');
assert.equal(airport.userData.metrics.terminals, 2);
assert.equal(airport.userData.metrics.runways, 3);
assert.equal(airport.userData.metrics.stands, 4);
assert.equal(airport.userData.metrics.boardingBridgeComponents, 12);
assert.equal(airport.userData.metrics.parkedAirliners, 3);
assert.equal(airport.userData.metrics.parkedHelicopters, 1);
assert.equal(airport.userData.metrics.customMeshCount, airport.userData.airportMeshes.length);
const primaryRunwayBounds = airportBoxBounds(airport, airport.userData.airportBoxes.find(detail => detail.name === 'runway 10R/28L'));
const parallelRunwayBounds = airportBoxBounds(airport, airport.userData.airportBoxes.find(detail => detail.name === 'runway 10L/28R'));
const crosswindRunwayBounds = airportBoxBounds(airport, airport.userData.airportBoxes.find(detail => detail.name === 'runway 16/34'));
assert(Math.abs((primaryRunwayBounds.max.x - primaryRunwayBounds.min.x) - 64) < .01, 'primary runway pavement renders at its 64-unit world length');
assert(Math.abs((parallelRunwayBounds.max.x - parallelRunwayBounds.min.x) - 64) < .01, 'parallel runway pavement renders at its 64-unit world length');
assert(Math.abs((crosswindRunwayBounds.max.z - crosswindRunwayBounds.min.z) - 22) < .01, 'crosswind runway pavement renders at its 22-unit world length');
assert(Math.abs((primaryRunwayBounds.max.z - primaryRunwayBounds.min.z) - 2.6) < .01);
assert(Math.abs((parallelRunwayBounds.max.z - parallelRunwayBounds.min.z) - 1.8) < .01);
assert(Math.abs((crosswindRunwayBounds.max.x - crosswindRunwayBounds.min.x) - 1.6) < .01);
assert(Math.abs(primaryRunwayBounds.min.x - layout.runway.start.x) < .01 && Math.abs(primaryRunwayBounds.max.x - layout.runway.end.x) < .01,
  'runway paving meets its authored threshold anchors');
for (const runwayBounds of [primaryRunwayBounds, parallelRunwayBounds, crosswindRunwayBounds]) {
  assert(runwayBounds.min.x >= campusBounds.min.x && runwayBounds.max.x <= campusBounds.max.x &&
    runwayBounds.min.z >= campusBounds.min.z && runwayBounds.max.z <= campusBounds.max.z,
  'all runway surfaces fit fully inside the campus ground footprint');
}
const curvedCanopy = airport.userData.airportMeshes.find(mesh => mesh.name === 'T2 curved barrel canopy');
assert(curvedCanopy, 'T2 canopy uses curved mesh geometry');
const canopyYs = Array.from(curvedCanopy.geometry.attributes.position.array).filter((_, index) => index % 3 === 1);
assert(Math.max(...canopyYs) - Math.min(...canopyYs) > .4, 'T2 barrel canopy has a visibly arched roof profile');
const roundabout = airport.userData.airportMeshes.find(mesh => mesh.name === 'airport access roundabout');
assert(roundabout?.geometry instanceof THREE.RingGeometry, 'airport access is a real circular ring road');
assert(airport.userData.airportCylinders.filter(detail => detail.name === 'stand bollard').length === 4,
  'bollards remain on the two non-scheduled stands clear of active taxi paths');
const parked = airport.userData.parkedAircraft;
for (const gate of layout.gates) {
  const nearGate = parked.some(plane => {
    airport.updateMatrixWorld(true); plane.updateMatrixWorld(true);
    const point = plane.getWorldPosition(new THREE.Vector3());
    return Math.hypot(point.x - gate.position.x, point.z - gate.position.z) < 1.2;
  });
  assert(!nearGate, `${gate.id} stays clear for scheduled traffic`);
}

// Match the scheduled-aircraft scale and gate anchors used by Dublin motion so
// terminal clearance is checked against both the parked and reserved stands.
const scheduledAircraft = layout.gates.map(gate => {
  const plane = createAirliner({ scale: .82 });
  plane.scale.set(.41, .82, .41);
  plane.position.set(
    (gate.position.x - layout.origin.x) / 2,
    gate.position.y - .26,
    (gate.position.z - layout.origin.z) / 2,
  );
  plane.rotation.y = gate.heading;
  airport.add(plane);
  return plane;
});
airport.updateMatrixWorld(true);
const allAircraftBounds = [...parked, ...scheduledAircraft].map(plane => ({
  plane,
  bounds: assertFiniteBounds(plane, plane.name || 'scheduled airliner'),
}));
const terminalStructures = airport.userData.airportBoxes.filter(detail =>
  /T1 (arrivals hall|glazed departure facade|roof canopy|front concourse)|T2 (terminal hall|curved glazing|barrel canopy|curved pier)/.test(detail.name),
);
assert(terminalStructures.length >= 15, 'both terminal halls and their piers/concourse roofs are represented in clearance data');
for (const detail of terminalStructures) {
  const structureBounds = airportBoxBounds(airport, detail);
  for (const { plane, bounds } of allAircraftBounds) {
    assert(!structureBounds.intersectsBox(bounds),
      `${detail.name} clears the measured aircraft bounds at ${plane.name}`);
  }
}
const bridgeDetails = airport.userData.airportBoxes.filter(detail => detail.name.startsWith('boarding bridge'));
assert.equal(bridgeDetails.length, 12, 'four stands retain a corridor, support, and narrow door-contact shoe');
for (const detail of bridgeDetails) {
  const bridgeBounds = airportBoxBounds(airport, detail);
  for (const { plane, bounds } of allAircraftBounds) {
    const overlap = overlapVolume(bridgeBounds, bounds);
    if (detail.name === 'boarding bridge door contact') {
      assert(overlap <= .01, `${plane.name} meets only the narrow bridge door-contact shoe`);
    } else {
      assert.equal(overlap, 0, `${detail.name} clears the measured bounds of ${plane.name}`);
    }
  }
}
for (const feature of ['west maintenance hangar shell', 'east maintenance hangar shell', 'airport fuel tank', 'airport baggage tug', 'airport coach bay', 'staff car park asphalt', 'airport perimeter fence post', 'apron floodlight mast']) {
  assert(airport.userData.airportBoxes.some(detail => detail.name === feature) || airport.userData.airportCylinders.some(detail => detail.name === feature),
    `airport retains detailed ${feature}`);
}
assert.equal(airport.userData.campus.width, 72);
assert.equal(airport.userData.campus.depth, 29);
const standTop = .3325, helipadTop = layout.helipad.surfaceY;
for (const plane of parked) {
  const bounds = new THREE.Box3().setFromObject(plane);
  assert(Math.abs(bounds.min.y - standTop) < .002,
    `${plane.name} landing gear rests on the stand pavement`);
}
const parkedHelicopterBounds = new THREE.Box3().setFromObject(airport.userData.helicopters[0]);
assert(Math.abs(parkedHelicopterBounds.min.y - helipadTop) < .002,
  'maintenance helicopter skids rest on the helipad');
const sourceScaleHelicopter = createHelicopter({ scale: .55, spin: false });
sourceScaleHelicopter.rotation.y = -Math.PI / 2;
const sourceScaleHelicopterBounds = new THREE.Box3().setFromObject(sourceScaleHelicopter);
const parkedHelicopterSize = parkedHelicopterBounds.getSize(new THREE.Vector3());
const sourceScaleHelicopterSize = sourceScaleHelicopterBounds.getSize(new THREE.Vector3());
assert(Math.abs(parkedHelicopterSize.x - sourceScaleHelicopterSize.x) < .01 &&
  Math.abs(parkedHelicopterSize.z - sourceScaleHelicopterSize.z) < .01,
  'airport group scaling preserves the maintenance helicopter source proportions');
const flightGearOffset = Math.abs(airlinerBounds.min.y);
assert(Math.abs(layout.runway.start.y - layout.runway.surfaceY - flightGearOffset) < .002,
  'scheduled aircraft anchor places deployed gear on the runway');
assert(Math.abs(layout.gates[0].position.y - layout.gates[0].surfaceY - flightGearOffset) < .002,
  'scheduled aircraft anchor places deployed gear on the gate stand');
assert(Math.abs(layout.helipad.position.y - helipadTop - Math.abs(helicopterBounds.min.y)) < .002,
  'patrol aircraft anchor places skids on the helipad');

// Sweep both scheduled aircraft through a full 120-second cycle against every
// raised airport object. Flat pavement/paint is intentionally left out because
// deployed landing gear is meant to meet it; all buildings, lights, bridges,
// service equipment and parked aircraft are in scope. A single narrow gate
// shoe may contact an aircraft by less than one hundredth of a cubic unit.
airport.updateMatrixWorld(true);
const excludedPavement = /(runway|taxiway|holding line|centreline|centerline|threshold|edge light|airport campus|service apron|aircraft stand apron|stand lead-in|helicopter apron|helipad|road|lane|bay divider|bay marking|parking bay line|bund|safety stripe)/i;
const obstacles = [];
for (const detail of airport.userData.airportBoxes) {
  const bounds = airportBoxBounds(airport, detail);
  if (bounds.max.y > .45 && !excludedPavement.test(detail.name)) obstacles.push({ name: detail.name, bounds });
}
for (const detail of airport.userData.airportCylinders) {
  const bounds = airportCylinderBounds(airport, detail);
  if (bounds.max.y > .45 && !excludedPavement.test(detail.name)) obstacles.push({ name: detail.name, bounds });
}
for (const object of [...parked, ...airport.userData.helicopters]) {
  obstacles.push({ name: object.name, bounds: new THREE.Box3().setFromObject(object) });
}
for (const object of airport.userData.airportMeshes) {
  const bounds = new THREE.Box3().setFromObject(object);
  if (bounds.max.y > .45) obstacles.push({ name: object.name, bounds });
}
const clearanceMotion = buildDublinMotion();
const scheduledFlights = clearanceMotion.actors.filter(actor => actor.kind === 'airliner');
const sampleStepSeconds = .1;
const sampleCount = Math.round(clearanceMotion.cycleDurationSeconds / sampleStepSeconds);
let collisionChecks = 0, allowedDoorContacts = 0, maxDoorContactVolume = 0, forbiddenIntersections = 0;
for (let sample = 0; sample < sampleCount; sample++) {
  const seconds = sample * sampleStepSeconds;
  clearanceMotion.update(seconds);
  clearanceMotion.group.updateMatrixWorld(true);
  const phases = new Map(clearanceMotion.getSnapshot().flights.map(flight => [flight.id, flight.phase]));
  for (const actor of scheduledFlights) {
    const aircraftBounds = new THREE.Box3().setFromObject(actor.object);
    for (const obstacle of obstacles) {
      collisionChecks++;
      if (!aircraftBounds.intersectsBox(obstacle.bounds)) continue;
      const volume = overlapVolume(aircraftBounds, obstacle.bounds);
      if (obstacle.name === 'boarding bridge door contact' && volume <= .01 &&
        ['taxi-to-runway', 'taxi-to-gate', 'parked-at-gate'].includes(phases.get(actor.scheduleId))) {
        allowedDoorContacts++;
        maxDoorContactVolume = Math.max(maxDoorContactVolume, volume);
      } else {
        forbiddenIntersections++;
        assert.fail(`${actor.scheduleId} intersects ${obstacle.name} during ${phases.get(actor.scheduleId)} at ${seconds.toFixed(1)}s (overlap ${volume.toFixed(4)})`);
      }
    }
  }
}
airport.userData.metrics.flightClearance = {
  sampleStepSeconds, sampledCycleSeconds: clearanceMotion.cycleDurationSeconds,
  actorSamples: scheduledFlights.length * sampleCount,
  obstacleBounds: obstacles.length, collisionChecks, forbiddenIntersections,
  allowedDoorContacts, maxDoorContactVolume,
};
assert.equal(forbiddenIntersections, 0, 'both full scheduled cycles clear every raised airport structure');
assert.equal(airport.userData.metrics.flightClearance.forbiddenIntersections, 0);
assert(airport.userData.metrics.flightClearance.allowedDoorContacts > 0, 'the gate has only a small intended boarding-shoe contact');
assert(airport.userData.metrics.flightClearance.maxDoorContactVolume <= .01);
clearanceMotion.dispose();

console.log('Aircraft and airport geometry passed: source-shaped aircraft, +X heading, rotor/gear controls, runway and taxiway layout, and clear flight gates.');
console.log(`Airport clearance audit passed: ${airport.userData.metrics.flightClearance.actorSamples} aircraft samples across ${airport.userData.metrics.flightClearance.obstacleBounds} raised obstacle bounds (${collisionChecks} checks), ${forbiddenIntersections} forbidden intersections, ${allowedDoorContacts} tiny gate-shoe contacts.`);
