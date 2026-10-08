import assert from 'node:assert/strict';
import {createAirliner, createHelicopter} from '../src/dublin-vehicles.js';
import {buildDublinMotion} from '../src/dublin-motion.js';
import {dublinLots} from '../src/dublin-locations.js';

const jet = createAirliner();
assert(jet.isGroup && jet.children.length <= 8, 'airliner parts should be draw-call batched');
assert.equal(jet.userData.forward, '+X');
const jetBounds = new (await import('three')).Box3().setFromObject(jet);
assert(jetBounds.min.x < -1 && jetBounds.max.x > 1.5, 'airliner should have a long nose and tail');
assert(jetBounds.max.z - jetBounds.min.z > 2.5, 'airliner needs swept full-span wings');
assert(jetBounds.min.y >= -1e-6, 'airliner landing gear should touch local y=0');

const heli = createHelicopter();
assert.equal(heli.userData.rotors.length, 2, 'helicopter exposes animatable main and tail rotors');
assert(heli.children.some(child => child.name === 'main rotor'));
assert(heli.children.some(child => child.name === 'tail rotor'));
const meshCount = root => { let count = 0; root.traverse(node => { if (node.isMesh) count++; }); return count; };
assert(meshCount(jet) <= 8, 'airliner should stay within a small draw-call budget');
assert(meshCount(heli) <= 8, 'helicopter should batch body and preserve separate rotors');

const motion = buildDublinMotion();
assert(motion.group.isGroup);
assert.equal(motion.actors.filter(a => a.kind === 'car').length, 10, 'ten moving cars');
assert.equal(motion.actors.filter(a => a.kind === 'bus').length, 2, 'two Dublin buses');
assert.equal(motion.actors.filter(a => a.kind === 'airliner').length, 1);
assert.equal(motion.actors.filter(a => a.kind === 'helicopter').length, 1);
assert.equal(motion.actors.filter(a => a.kind === 'parked-helicopter').length, 0);
for (const a of motion.actors) {
  if (a.kind === 'car' || a.kind === 'bus') assert(meshCount(a.object) <= 4, 'street vehicles should use few draw calls');
  if (a.kind === 'airliner') assert(meshCount(a.object) <= 8);
  if (a.kind === 'helicopter') assert(meshCount(a.object) <= 8);
}
assert(motion.routes.find(r => r.id === 'airport-runway-flight').runway.length === 32);

const roadActors = motion.actors.filter(a => a.kind === 'car' || a.kind === 'bus');
const positionsAtZero = roadActors.map(a => a.object.position.clone());
const rotorAtZero = motion.actors.filter(a => a.object.userData.rotors).map(a => a.object.userData.rotors.map(r => r.rotation.clone()));
motion.update(0);
motion.update(30);
assert(roadActors.some((a, i) => !a.object.position.equals(positionsAtZero[i])), 'cars and buses should move with elapsed time');
assert(motion.actors.find(a => a.kind === 'airliner').object.position.y > .3, 'flight cycle should climb above runway');
assert(motion.actors.find(a => a.kind === 'airliner').object.position.y > 10, 'jet should reach a clear high-altitude return');
for (const [i, a] of motion.actors.filter(a => a.object.userData.rotors).entries()) {
  assert(a.object.userData.rotors.some((r, j) => !r.rotation.equals(rotorAtZero[i][j])), 'rotors should rotate');
}

// Vehicle noses should point along the actual local road direction.
motion.update(31.4);
const headingSamples = roadActors.map(a => ({a, p: a.object.position.clone(), yaw: a.object.rotation.y}));
motion.update(31.5);
for (const {a, p, yaw} of headingSamples) {
  const dx = a.object.position.x - p.x, dz = a.object.position.z - p.z;
  const forwardX = Math.cos(yaw), forwardZ = -Math.sin(yaw);
  assert(dx * forwardX + dz * forwardZ > 0, `${a.route} vehicle nose should face its travel direction`);
}

const jetActor = motion.actors.find(a => a.kind === 'airliner');
motion.update(0); const cycleStart = jetActor.object.position.clone();
motion.update(78 - .001); const cycleEnd = jetActor.object.position.clone();
assert(cycleStart.distanceTo(cycleEnd) < .1, 'flight cycle should close without a visible position jump');

// Sample road routes across a full loop. Vehicle footprints must stay clear of lots.
for (let time = 0; time <= 100; time += 2.5) {
  motion.update(time);
  for (const a of roadActors) {
    const p = a.object.position;
    assert([p.x, p.y, p.z].every(Number.isFinite), 'road actor positions remain finite');
    for (const lot of dublinLots) {
      const vehicleHalfX = a.kind === 'bus' && a.axis === 'x' ? .98 : (a.axis === 'z' ? .3 : .57);
      const vehicleHalfZ = a.kind === 'bus' && a.axis === 'x' ? .39 : (a.axis === 'z' ? .58 : .3);
      const overlaps = Math.abs(p.x - lot.x) < vehicleHalfX + lot.w / 2 && Math.abs(p.z - lot.z) < vehicleHalfZ + lot.d / 2;
      assert(!overlaps, `${a.route} ${a.kind} overlaps lot ${lot.id}`);
    }
  }
}
motion.update(-12);
motion.update(Number.NaN);
motion.update(1e9);
motion.group.traverse(node => {
  assert([node.position.x, node.position.y, node.position.z].every(Number.isFinite), 'long and invalid updates keep finite positions');
});
console.log(`Dublin motion passed: ${motion.actors.length} actors, ${motion.routes.length} routes, procedural aircraft and road clearance valid.`);
