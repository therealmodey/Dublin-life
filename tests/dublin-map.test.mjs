import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublin, dublinLots, dublinBridges, isDublinLand, DUBLIN_PALETTE} from '../src/dublin.js';
import {palette as abujaPalette} from '../src/abuja-primitives.js';

const selectableIds = new Set(dublinLots.map(lot => lot.id));
assert.equal(dublinLots.length, 69, 'Dublin should provide 69 selectable places');
assert.equal(selectableIds.size, dublinLots.length, 'Selectable place IDs must be unique');
assert(dublinLots.every(lot => lot.city === 'dublin'));

for (const lot of dublinLots) {
  assert([lot.x, lot.z, lot.w, lot.d, lot.h, lot.arrivalX, lot.arrivalZ].every(Number.isFinite),
    `${lot.name} needs finite geometry and an explicit walk arrival point`);
  assert(lot.w > 0 && lot.d > 0 && lot.h > 0, `${lot.name} needs a positive footprint and height`);
  assert(isDublinLand(lot.arrivalX, lot.arrivalZ), `${lot.name} arrival point must be walkable`);
  assert(lot.x - lot.w / 2 >= -42 && lot.x + lot.w / 2 <= 40,
    `${lot.name} footprint must stay inside the map's east-west bounds`);
  assert(lot.z - lot.d / 2 >= -47 && lot.z + lot.d / 2 <= 33,
    `${lot.name} footprint must stay inside the map's north-south bounds`);
  if (!lot.kind.endsWith('Bridge') && lot.kind !== 'dock') {
    // Sample each venue plot, not only its arrival marker, so a selectable
    // venue cannot straddle the Liffey, dock basin, bay, or map edge.
    for (const dx of [-.49, 0, .49]) for (const dz of [-.49, 0, .49]) {
      assert(isDublinLand(lot.x + dx * lot.w, lot.z + dz * lot.d),
        `${lot.name} footprint must stay on walkable land`);
    }
  }
}

// Bridges intentionally span the river; every other selectable plot keeps a
// separate footprint so selecting one venue does not mask another.
const footprints = dublinLots.filter(lot => !lot.kind.endsWith('Bridge'));
for (let i = 0; i < footprints.length; i++) {
  const a = footprints[i];
  for (const b of footprints.slice(i + 1)) {
    const overlapX = Math.min(a.x + a.w / 2, b.x + b.w / 2) - Math.max(a.x - a.w / 2, b.x - b.w / 2);
    const overlapZ = Math.min(a.z + a.d / 2, b.z + b.d / 2) - Math.max(a.z - a.d / 2, b.z - b.d / 2);
    assert(!(overlapX > 1e-4 && overlapZ > 1e-4),
      `${a.name} and ${b.name} selectable footprints must not overlap`);
  }
}

// Keep a small set of established landmarks stable while the venue list grows.
for (const id of ['dubAirport', 'dubPhoenix', 'dubHapenny', 'dubBeckett', 'dubTemple', 'dubTrinity', 'dubGreen', 'dubCanal', 'dubAviva']) {
  assert(selectableIds.has(id), `Existing Dublin landmark ${id} must remain selectable`);
}
assert(dublinLots.find(lot => lot.id === 'dubAirport').z < 0);
assert(dublinLots.find(lot => lot.id === 'dubTrinity').z > 0);
for (const kind of ['cafe', 'cinema', 'gym', 'hotel', 'market', 'museum', 'office', 'pub', 'shoppingStreet', 'theatre']) {
  assert(dublinLots.some(lot => lot.kind === kind), `Dublin should include the ${kind} venue type`);
}

// These swatches are shared with Abuja so the new city keeps the same saturated
// greens and dark/blue accents as the existing map palette.
const sharedSwatches = [
  ['leaf', 'leaf'], ['leafDark', 'leafDark'], ['hedge', 'hedge'],
  ['trunk', 'trunk'], ['lawn', 'lawn'], ['lawnLight', 'lawnLight'],
  ['water', 'water'], ['glass', 'glass'], ['glassMid', 'deepGlass'],
  ['glassDark', 'window'], ['dark', 'black'], ['darkBlue', 'carGlass'],
];
for (const [dublinKey, abujaKey] of sharedSwatches) {
  assert.equal(DUBLIN_PALETTE[dublinKey], abujaPalette[abujaKey][1],
    `Dublin ${dublinKey} should reuse Abuja's ${abujaKey} swatch`);
}

assert(!isDublinLand(10, 0), 'River water is not walkable');
for (const x of dublinBridges) {
  for (const z of [-2.3, -1, 0, 1, 2.3]) assert(isDublinLand(x, z), `Bridge at x=${x} connects both banks`);
}
assert(!isDublinLand(27, 12), 'Dock basin is not walkable');
assert(!isDublinLand(44, 12), 'Bay is not walkable');
assert(!isDublinLand(0, -50), 'Outside the map is not walkable');

const map = buildDublin({textSurface() {}});
assert.equal(map.world.userData.palette, DUBLIN_PALETTE, 'Dublin scene should identify its applied palette');
assert.equal(map.world.userData.lotCount, dublinLots.length, 'Rendered Dublin count should match selectable data');
assert(map.world.userData.landmarks && map.world.userData.landmarks !== map.homes,
  'Landmark and terrace scenery geometry should remain separately inspectable');
assert(map.world.children.includes(map.homes) && map.world.children.includes(map.boards));

let batches = 0, instances = 0;
const renderedSwatches = new Set();
map.world.traverse(mesh => {
  if (!mesh.isInstancedMesh) return;
  batches++;
  instances += mesh.count;
  assert([...mesh.instanceMatrix.array].every(Number.isFinite), 'All instanced transforms must be finite');
  assert(Number.isFinite(mesh.boundingSphere.radius), 'Every batch needs finite culling bounds');
  const color = new THREE.Color();
  for (let i = 0; i < mesh.count; i++) {
    mesh.getColorAt(i, color);
    renderedSwatches.add(color.getHexString());
  }
});
for (const key of ['leaf', 'waterDark', 'dark', 'glass']) {
  assert(renderedSwatches.has(DUBLIN_PALETTE[key].slice(1).toLowerCase()),
    `Rendered geometry should use the Dublin ${key} palette swatch`);
}
assert.equal(map.world.userData.houses, 62, 'Dublin terrace count should match the collision-culled layout');
assert(batches < 25, 'Repeated scenery details should stay batched');
assert.equal(batches, map.world.userData.batchCount, 'Reported batch count should match rendered geometry');
console.log(`Dublin map passed: ${map.places.length} venues, ${map.world.userData.houses} terraces, ${instances} instances in ${batches} batches; venue geometry and walk boundaries valid.`);
