import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublinMotion} from '../src/dublin-motion.js';
import {DUBLIN_AIRPORT_LAYOUT} from '../src/dublin-airport.js';
import {
  DUBLIN_ROAD_LANES,
  DUBLIN_ROAD_NETWORK_WITH_LANES,
  findRoadClearanceIssues,
  isRoadSegmentClear,
  roadLaneLength,
} from '../src/dublin-road-network.js';

const loopLanes = DUBLIN_ROAD_LANES.filter(lane => lane.closed);
const connectorLanes = DUBLIN_ROAD_LANES.filter(lane => !lane.closed);
assert.equal(loopLanes.length, 18, 'Dublin exposes opposing lanes on each mapped neighborhood loop');
assert.equal(connectorLanes.length, 42, 'cross streets extend through the western estates and south-belt neighborhoods');
assert(loopLanes.every(lane => lane.points.length > 100));
assert(loopLanes.every(lane => roadLaneLength(lane) > 20));
assert(connectorLanes.every(lane => roadLaneLength(lane) >= 2.5));
const outerClockwise = loopLanes.find(lane => lane.id === 'quayside-loop:clockwise');
const outerCounter = loopLanes.find(lane => lane.id === 'quayside-loop:counterclockwise');
const clockwiseNorthRoad = outerClockwise.points.filter(point => Math.abs(point.x) < .3 && Math.abs(point.z + 32) < .3);
const counterNorthRoad = outerCounter.points.filter(point => Math.abs(point.x) < .3 && Math.abs(point.z + 32) < .3);
assert(clockwiseNorthRoad.length && clockwiseNorthRoad.every(point => point.z < -32), 'eastbound traffic uses the left, north side of the road');
assert(counterNorthRoad.length && counterNorthRoad.every(point => point.z > -32), 'westbound traffic uses the left, south side of the road');
assert(DUBLIN_ROAD_NETWORK_WITH_LANES.segments.some(segment => segment.bridge && segment.laneId.includes('quayside')));
assert(DUBLIN_ROAD_NETWORK_WITH_LANES.segments.some(segment => segment.bridge && segment.laneId.includes('inner-city')));
for (const lane of loopLanes) {
  for (const segment of lane.segments) {
    if (Math.abs((segment.a.z + segment.b.z) / 2) < 2.25) {
      assert(segment.bridge, `${lane.id} crosses the Liffey only on a designated vehicular bridge`);
      assert(isRoadSegmentClear(segment), `${lane.id} bridge segment stays on its deck and clear of non-bridge lots`);
    }
  }
  for (const bridgeX of lane.bridgeXs) {
    const bridgePoints = lane.points.filter(point => Math.abs(point.z) < 2.25 && Math.abs(point.x - bridgeX) < .5);
    assert(bridgePoints.length > 2, `${lane.id} traverses bridge ${bridgeX} on a straight deck`);
    const xRange = Math.max(...bridgePoints.map(point => point.x)) - Math.min(...bridgePoints.map(point => point.x));
    assert(xRange < .002, `${lane.id} remains straight across bridge ${bridgeX}`);
  }
}
for (const segment of connectorLanes.flatMap(lane => lane.segments)) {
  assert(isRoadSegmentClear(segment), `${segment.laneId} connector remains clear of lots and water`);
}
assert.equal(findRoadClearanceIssues().length, 0, 'all lane footprints clear mapped lots and map edges');

const motion = buildDublinMotion();
assert(motion.group.isGroup);
const roadActors = motion.actors.filter(actor => actor.kind === 'car');
assert.equal(roadActors.length, loopLanes.length*2, 'two reference vehicle actors populate each closed traffic lane without procedural substitutes');
assert(roadActors.every(actor=>Number.isFinite(actor.speed)&&[actor.object.position.x,actor.object.position.y,actor.object.position.z].every(Number.isFinite)),'all expanded-road actors begin on valid finite routes');
assert(roadActors.every(actor => actor.object.children.length === 0), 'road actor holders wait for exact GLB injection');
assert.equal(motion.actors.filter(actor => actor.kind === 'airliner').length, 2, 'two scheduled aircraft use separate gates');
assert.equal(motion.actors.filter(actor => actor.kind === 'helicopter').length, 1);
assert.equal(motion.cycleDurationSeconds, 120);

const reference = new THREE.Group();
reference.name = 'test exact vehicle prototype';
reference.add(new THREE.Mesh(new THREE.BoxGeometry(.7, 1, 1.8), new THREE.MeshStandardMaterial({color: '#395f70'})));
motion.setVehicleModels({sedan: reference, suv: reference, taxi: reference, van: reference});
assert(roadActors.every(actor => actor.object.userData.modelReady && actor.object.children.length === 1));
assert(roadActors.every(actor => actor.object.children[0].userData.forward === '+Z'));
assert(roadActors.every(actor=>Math.abs(actor.vehicleLength-.468)<.001&&Math.abs(actor.vehicleWidth-.182)<.001),'barrier and queue footprint uses the loaded forward-axis GLB dimensions');

const initialCars = roadActors.map(actor => actor.object.position.clone());
motion.update(.5);
for (let i = 0; i < roadActors.length; i++) {
  const actor = roadActors[i], before = initialCars[i], after = actor.object.position;
  assert(before.distanceTo(after) > .1, `${actor.laneId} traffic advances on elapsed time`);
  assert(after.distanceTo(before) < actor.speed * .5 + .1, 'traffic follows continuous routes without long jumps');
}
for (let timeMs = 600; timeMs < 30_000; timeMs += 100) {
  motion.update(timeMs / 1000);
  for (const actor of roadActors) {
    const p = actor.object.position;
    assert([p.x, p.y, p.z].every(Number.isFinite));
    const segment = actor.lane.segments.find(item => Math.hypot(item.a.x - p.x, item.a.z - p.z) < .3);
    assert(segment, `${actor.laneId} remains on its authored lane`);
  }
}

const layout = DUBLIN_AIRPORT_LAYOUT;
assert.equal(layout.gates.length, 2, 'the animated flights each have a reserved gate');
assert(layout.runway.start && layout.runway.end, 'flight paths use explicit runway thresholds');
const planes = motion.actors.filter(actor => actor.kind === 'airliner');
assert.deepEqual(layout.origin, {x: -11, z: -55}, 'flight anchors use the airport campus origin');
assert.equal(layout.runway.length, 64, 'scheduled aircraft use the expanded runway axis');
assert.deepEqual(layout.gates.map(gate => gate.position.x), [-23, 1], 'both scheduled gates move with the expanded terminal footprint');
assert(layout.gates.every(gate => gate.position.z === -56.8));
let lastVisiblePositions = new Map();
let lastVisibleYaw = new Map();
const observedFlightPhases = new Set();
for (let timeMs = 0; timeMs <= 360_000; timeMs += 200) {
  motion.update(timeMs / 1000);
  const snapshot = motion.getSnapshot();
  assert(snapshot.runwayExclusive, `runway remains exclusive at ${timeMs}ms: ${snapshot.runwayOccupiedBy.join(',')}`);
  for (const plane of planes) {
    const flight = snapshot.flights.find(item => item.id === plane.scheduleId);
    assert(flight && flight.cycleDurationSeconds === 120);
    observedFlightPhases.add(flight.phase);
    const p = plane.object.position;
    assert([p.x, p.y, p.z].every(Number.isFinite));
    if (['runway-line-up','takeoff-roll','landing-roll'].includes(flight.phase)) {
      const bounds = new THREE.Box3().setFromObject(plane.object);
      assert(bounds.min.y >= .351 && bounds.min.y <= .355, `${flight.id} gear stays on the runway during ${flight.phase}`);
    }
    if (plane.object.visible && lastVisiblePositions.has(plane.scheduleId)) {
      const previous = lastVisiblePositions.get(plane.scheduleId);
      assert(p.distanceTo(previous) < 2.5, `${flight.id} has no visible-cycle teleport during ${flight.phase}`);
      const previousYaw = lastVisibleYaw.get(plane.scheduleId);
      const yawDelta = Math.abs(Math.atan2(Math.sin(plane.object.rotation.y - previousYaw), Math.cos(plane.object.rotation.y - previousYaw)));
      assert(yawDelta < 1.1, `${flight.id} turns continuously during ${flight.phase}`);
    }
    if (plane.object.visible) {
      lastVisiblePositions.set(plane.scheduleId, p.clone());
      lastVisibleYaw.set(plane.scheduleId, plane.object.rotation.y);
    } else {
      lastVisiblePositions.delete(plane.scheduleId);
      lastVisibleYaw.delete(plane.scheduleId);
    }
  }
}
for (const phase of ['taxi-to-runway', 'runway-line-up', 'takeoff-roll', 'climb-out', 'off-map-cruise', 'opposite-side-approach', 'landing-roll', 'taxi-clear-runway', 'taxi-to-gate', 'parked-at-gate']) {
  assert(observedFlightPhases.has(phase), `expanded airport cycle reaches ${phase}`);
}

const flight = planes[0];
motion.update(10.2);
assert.equal(motion.getSnapshot().flights.find(item => item.id === flight.scheduleId).phase, 'takeoff-roll');
motion.update(40);
assert.equal(motion.getSnapshot().flights.find(item => item.id === flight.scheduleId).phase, 'off-map-cruise');
assert.equal(flight.object.visible, false, 'aircraft disappears only during its off-map cruise interval');
assert(flight.object.position.x > layout.runway.end.x, 'first aircraft departs beyond the east threshold');
motion.update(66.1);
assert(flight.object.position.x < layout.runway.start.x, 'first aircraft reappears beyond the opposite west threshold');
motion.update(40);
assert(flight.object.userData.gear.every(assembly => assembly.scale.y < .01), 'landing gear retracts for the off-map cruise');
motion.update(76.8);
assert.equal(motion.getSnapshot().flights.find(item => item.id === flight.scheduleId).phase, 'opposite-side-approach');
assert(flight.object.userData.gear.every(assembly => assembly.scale.y > .9), 'landing gear extends before the approach reaches the runway');
motion.update(120);
const home = flight.gate.position;
assert(Math.hypot(flight.object.position.x - home.x, flight.object.position.z - home.z) < .01, 'flight cycle closes at its assigned gate');

const helicopter = motion.actors.find(actor => actor.kind === 'helicopter');
motion.update(20);
assert.equal(helicopter.snapshot.phase, 'city-patrol');
const airborne = helicopter.object.position.clone();
motion.update(68);
assert.equal(helicopter.snapshot.phase, 'parked-at-helipad');
assert(helicopter.object.position.distanceTo(airborne) > 10, 'helicopter leaves the pad, patrols across the city and returns');
motion.update(30);
assert(helicopter.object.userData.rotors.every(rotor => Math.abs(rotor.rotation.x) + Math.abs(rotor.rotation.y) > 0));

motion.dispose();
assert.equal(motion.actors.length, 0);
assert.equal(motion.group.children.length, 0);
motion.update(Number.NaN);
console.log('Dublin motion passed: shared lot-clear lanes, continuous GLB traffic, exclusive scheduled flights and coherent helicopter return.');
