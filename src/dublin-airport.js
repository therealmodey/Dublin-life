import * as THREE from 'three';
import { DUBLIN_PALETTE as P } from './dublin-palette.js';
import {DUBLIN_ROAD_LANES} from './dublin-road-network.js';
import { createAirliner, createHelicopter } from './dublin-vehicles.js';

const AIRPORT_ORIGIN = Object.freeze({ x: -11, z: -55 });
const AIRPORT_GROUND_SCALE = 2;
const worldPoint = (x, z, y = .3) => ({ x: AIRPORT_ORIGIN.x + x * AIRPORT_GROUND_SCALE, y, z: AIRPORT_ORIGIN.z + z * AIRPORT_GROUND_SCALE });
// Paths store actor-anchor heights, including the source airliner's deployed
// gear offset; the airport paving itself is built independently below.
const taxiAnchorY = .8125;
const runwayAnchorY = .8325;
const taxiPath = (...points) => points.map(([x, z]) => worldPoint(x, z, taxiAnchorY));

// The compact scene follows the published Dublin runway arrangement: parallel
// east-west 10/28 runways and a short north-south 16/34 crosswind runway.
export const DUBLIN_AIRPORT_LAYOUT = Object.freeze({
  origin: AIRPORT_ORIGIN,
  runway: Object.freeze({
    id: '10R/28L', x: -11, z: -62, y: runwayAnchorY, surfaceY: .3525, length: 64, width: 2.6,
    start: Object.freeze({ x: -43, y: runwayAnchorY, z: -62, threshold: '10R', heading: 100 }),
    end: Object.freeze({ x: 21, y: runwayAnchorY, z: -62, threshold: '28L', heading: 280 }),
  }),
  parallelRunway: Object.freeze({
    id: '10L/28R', start: Object.freeze({ x: -43, y: runwayAnchorY, z: -65.2, threshold: '10L', heading: 100 }),
    end: Object.freeze({ x: 21, y: runwayAnchorY, z: -65.2, threshold: '28R', heading: 280 }), y: runwayAnchorY, surfaceY: .3525, length: 64, width: 1.8,
  }),
  crosswindRunway: Object.freeze({
    id: '16/34', start: Object.freeze({ x: -40, y: runwayAnchorY, z: -68.4, threshold: '16', heading: 160 }),
    end: Object.freeze({ x: -40, y: runwayAnchorY, z: -46.4, threshold: '34', heading: 340 }), y: runwayAnchorY, surfaceY: .3525, length: 22, width: 1.6,
  }),
  gates: Object.freeze([
    Object.freeze({ id: 'T1-1', terminal: 'T1', surfaceY: .3325, position: Object.freeze(worldPoint(-6, -.9, taxiAnchorY)), heading: -Math.PI / 2 }),
    Object.freeze({ id: 'T2-1', terminal: 'T2', surfaceY: .3325, position: Object.freeze(worldPoint(6, -.9, taxiAnchorY)), heading: -Math.PI / 2 }),
  ]),
  taxiway: Object.freeze(taxiPath([-6, -.9], [-8, -.9], [-8, -3.5], [-15, -3.5], [-16, -3.5])),
  taxiways: Object.freeze({
    'T1-1': Object.freeze(taxiPath([-6, -.9], [-8, -.9], [-8, -3.5], [-15, -3.5], [-16, -3.5])),
    'T2-1': Object.freeze(taxiPath([6, -.9], [7.5, -.9], [7.5, -3.5], [15, -3.5], [16, -3.5])),
  }),
  helipad: Object.freeze({ surfaceY: .375, position: Object.freeze(worldPoint(-14.8, 4.1, .734)), heading: -Math.PI / 2 }),
});

const materialCache = new Map();
function material(color, roughness = .78, metalness = 0, extra = {}) {
  const key = `${color}/${roughness}/${metalness}/${extra.emissive || ''}`;
  if (!materialCache.has(key)) materialCache.set(key, new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra }));
  return materialCache.get(key);
}

/** Build recognizable T1/T2 concourses and the three published runway axes. */
export function buildDublinAirport({ lot = AIRPORT_ORIGIN, textSurface } = {}) {
  const root = new THREE.Group();
  root.name = 'Dublin Airport';
  root.position.set(lot.x, .26, lot.z);
  // The airport's local design remains easy to author, while the campus expands
  // evenly across the ground plane. Aircraft compensate below to retain the
  // source model's proportions.
  root.scale.set(AIRPORT_GROUND_SCALE, 1, AIRPORT_GROUND_SCALE);

  const m = {
    grass: material(P.lawn), concrete: material('#c1c3bf'), apron: material('#aeb2b1'),
    asphalt: material('#30363b'), stripe: material('#f7f5ef'), yellow: material('#e9bc32'),
    light: material('#ffe8a3', .3, .05, { emissive: '#b5892d', emissiveIntensity: .55 }),
    glass: material(P.glass, .23, .14), steel: material('#72808a', .4, .4),
    roof: material('#d8dfe0', .38, .22), brick: material('#d5d9d8'), dark: material('#34414a'),
    green: material('#236b48'), red: material('#ce3b36'),
  };
  const boxes = [], cylinders = [], meshes = [];
  const box = (name, x, y, z, sx, sy, sz, surface, rotY = 0, rotZ = 0) => {
    boxes.push({ name, x, y, z, sx, sy, sz, rotY, rotZ, color: surface.color });
  };
  const cylinder = (name, x, y, z, radius, height, surface, segments = 12) => {
    cylinders.push({ name, x, y, z, sx: radius, sy: height, sz: radius, color: surface.color, segments });
  };
  const addMesh = mesh => { mesh.castShadow = true; mesh.receiveShadow = true; root.add(mesh); meshes.push(mesh); return mesh; };
  const flush = () => {
    const makeInstances = (items, geometry, name) => {
      if (!items.length) return;
      const instanced = new THREE.InstancedMesh(geometry, material('#ffffff'), items.length);
      instanced.name = name;
      const dummy = new THREE.Object3D();
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        dummy.position.set(item.x, item.y, item.z);
        dummy.scale.set(item.sx, item.sy, item.sz);
        dummy.rotation.set(0, item.rotY || 0, item.rotZ || 0);
        dummy.updateMatrix();
        if (!dummy.matrix.elements.every(Number.isFinite)) throw new Error(`Invalid airport instance: ${item.name}`);
        instanced.setMatrixAt(i, dummy.matrix);
        instanced.setColorAt(i, item.color);
      }
      instanced.instanceMatrix.needsUpdate = true;
      instanced.computeBoundingSphere();
      if (!Number.isFinite(instanced.boundingSphere?.radius)) throw new Error(`Invalid bounds for ${name}`);
      addMesh(instanced);
    };
    makeInstances(boxes, new THREE.BoxGeometry(1, 1, 1), 'airport box details');
    makeInstances(cylinders, new THREE.CylinderGeometry(1, 1, 1, 12), 'airport cylinder details');
  };
  const label = (text, color, width, x, y, z, flat = true, background = null) => {
    if (!textSurface) return;
    textSurface(text, color, width, root, x, y, z, flat, background);
  };
  const local = ({ x, z }) => ({ x: (x - lot.x) / AIRPORT_GROUND_SCALE, z: (z - lot.z) / AIRPORT_GROUND_SCALE });

  box('airport campus', 0, -.015, 0, 36, .04, 14.5, m.grass);
  box('airfield service apron', 0, .025, -.95, 34, .045, 1.25, m.apron);

  const runwaySpecs = [
    { data: DUBLIN_AIRPORT_LAYOUT.runway, z: -3.5, width: DUBLIN_AIRPORT_LAYOUT.runway.width / AIRPORT_GROUND_SCALE },
    { data: DUBLIN_AIRPORT_LAYOUT.parallelRunway, z: -5.1, width: DUBLIN_AIRPORT_LAYOUT.parallelRunway.width / AIRPORT_GROUND_SCALE },
  ];
  for (const { data, z, width } of runwaySpecs) {
    box(`runway ${data.id}`, 0, .055, z, data.length / AIRPORT_GROUND_SCALE, .075, width, m.asphalt);
    for (let x = -14.4; x <= 14.41; x += 1.65) box('runway centreline dash', x, .098, z, .76, .016, .055, m.stripe);
    for (const [x, end] of [[-15.1, data.start], [15.1, data.end]]) {
      for (let k = -3; k <= 3; k++) box(`runway ${end.threshold} threshold bar`, x, .105, z + k * width / 10, .78, .018, .07, m.stripe);
      label(end.threshold, '#ffffff', 1.2, x, .112, z, true);
    }
    for (let x = -15; x <= 15; x += 2) for (const side of [-1, 1]) {
      box('runway edge light', x, .11, z + side * (width / 2 + .12), .07, .055, .07, m.light);
    }
  }

  // North/south crosswind runway 16/34 meets the west ends of both parallels.
  const cross = DUBLIN_AIRPORT_LAYOUT.crosswindRunway;
  const crossLocal = local({ x: cross.start.x, z: (cross.start.z + cross.end.z) / 2 });
  box('runway 16/34', crossLocal.x, .052, crossLocal.z, cross.width / AIRPORT_GROUND_SCALE, .07, cross.length / AIRPORT_GROUND_SCALE, m.asphalt);
  for (let z = -5.5; z <= 3.5; z += 1.25) box('16/34 centreline dash', crossLocal.x, .095, z, .045, .014, .56, m.stripe);
  for (const [z, threshold] of [[-6.7, '16'], [4.3, '34']]) {
    for (let k = -2; k <= 2; k++) box(`${threshold} threshold`, crossLocal.x + k * .12, .105, z, .06, .015, .62, m.stripe);
    label(threshold, '#ffffff', .9, crossLocal.x, .112, z, true);
  }
  for (let z = -6.7; z <= 4.3; z += 1.1) for (const side of [-1, 1]) {
    box('crosswind edge light', crossLocal.x + side * .53, .105, z, .06, .045, .06, m.light);
  }

  // Taxiway centerlines join the two reserved stands to opposite runway ends.
  const paths = DUBLIN_AIRPORT_LAYOUT.taxiways;
  for (const path of Object.values(paths)) {
    for (let i = 1; i < path.length; i++) {
      const a = local(path[i - 1]), b = local(path[i]);
      const dx = b.x - a.x, dz = b.z - a.z, length = Math.hypot(dx, dz);
      const heading = Math.atan2(-dz, dx);
      box('taxiway paved connector', (a.x+b.x)/2, .045, (a.z+b.z)/2, length, .045, .66, m.apron, heading);
      const count = Math.max(1, Math.floor(length / .95));
      for (let n = 0; n < count; n++) {
        const t = (n + .5) / count;
        box('taxiway centerline', a.x + dx*t, .073, a.z + dz*t, .35, .012, .035, m.yellow, heading);
      }
    }
  }
  for (const [x, z] of [[-8,-.9],[7.5,-.9],[-8,-3.5],[7.5,-3.5]]) {
    for (const side of [-1,1]) box('taxiway holding line', x + side * .28, .091, z, .04, .016, .62, m.stripe);
  }

  // T1 and T2 concourses run across the terminal frontage, clear of the aircraft envelope.
  const terminal1 = { x: -6.2, z: 2.45 }, terminal2 = { x: 5.15, z: 2.5 };
  box('T1 arrivals hall', terminal1.x, .42, terminal1.z, 9.8, .76, 2.1, m.brick);
  box('T1 glazed departure facade', terminal1.x, .95, terminal1.z - .05, 9.7, .53, 2.02, m.glass);
  box('T1 roof canopy', terminal1.x, 1.39, terminal1.z, 10.25, .13, 2.45, m.roof);
  box('T1 sign panel', terminal1.x, 1.13, terminal1.z + 1.05, 2.7, .23, .055, m.green);
  label('TERMINAL 1', '#ffffff', 2.45, terminal1.x, 1.13, terminal1.z + 1.09, false, '#236b48');
  for (let x = -10.8; x <= -1.6; x += .55) box('T1 window mullion', x, .91, terminal1.z - 1.09, .04, .58, .05, m.steel);
  box('T1 front concourse', -6.2, .78, 1.15, 9.95, .5, .56, m.glass);
  box('T1 front concourse canopy', -6.2, 1.12, 1.15, 10.2, .12, .72, m.roof);

  box('T2 terminal hall', terminal2.x, .44, terminal2.z, 7.2, .8, 2.2, m.concrete);
  box('T2 curved glazing', terminal2.x, .97, terminal2.z - .05, 7.16, .48, 2.11, m.glass);
  // Shallow elliptical barrel profile gives T2 a curved glazed silhouette.
  const canopyGeometry = new THREE.BufferGeometry();
  const canopyPositions = [], canopyIndices = [];
  const alongSegments = 24, acrossSegments = 12, canopyHalfDepth = 1.265, canopyRise = .46;
  for (let along = 0; along <= alongSegments; along++) {
    const x = -3.81 + 7.62 * along / alongSegments;
    for (let across = 0; across <= acrossSegments; across++) {
      const u = -1 + 2 * across / acrossSegments;
      canopyPositions.push(x, 1.08 + canopyRise * Math.sqrt(Math.max(0, 1 - u * u)), u * canopyHalfDepth);
      if (along < alongSegments && across < acrossSegments) {
        const a = along * (acrossSegments + 1) + across, b = a + acrossSegments + 1;
        canopyIndices.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
  }
  canopyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(canopyPositions, 3));
  canopyGeometry.setIndex(canopyIndices); canopyGeometry.computeVertexNormals();
  const canopy = new THREE.Mesh(canopyGeometry, m.roof);
  canopy.name = 'T2 curved barrel canopy'; canopy.position.set(terminal2.x, 0, terminal2.z);
  addMesh(canopy);
  box('T2 barrel canopy fascia', terminal2.x, 1.1, terminal2.z - 1.22, 7.7, .16, .09, m.roof);
  box('T2 sign panel', terminal2.x, 1.17, terminal2.z + 1.11, 2.35, .24, .055, m.green);
  label('TERMINAL 2', '#ffffff', 2.1, terminal2.x, 1.17, terminal2.z + 1.15, false, '#236b48');
  for (let x = 1.8; x <= 8.5; x += .48) box('T2 curtain-wall mullion', x, .92, terminal2.z - 1.13, .04, .55, .045, m.steel);

  // T2 keeps a segmented curved-glass frontage, parallel to the terminal hall.
  const curvedPier = [
    { x: 2.95, z: 1.38, angle: -.04 },
    { x: 4.45, z: 1.3, angle: -.02 },
    { x: 5.95, z: 1.28, angle: .02 },
    { x: 7.45, z: 1.37, angle: .04 },
  ];
  for (const [i, segment] of curvedPier.entries()) {
    box(`T2 curved pier segment ${i+1}`, segment.x, .78, segment.z, 1.62, .48, .58, m.glass, segment.angle);
    box(`T2 curved pier roof ${i+1}`, segment.x, 1.12, segment.z, 1.74, .12, .7, m.roof, segment.angle);
  }

  // Four aircraft stands: gates T1-1 and T1-4 remain empty for the flight actor.
  const standX = [-6, -2, 2, 6];
  const standIds = ['T1-1', 'T1-2', 'T1-3', 'T2-1'];
  for (const [index, x] of standX.entries()) {
    // The active T2 taxi route approaches from the eastern side; place that
    // passenger bridge on the opposite side of the nose/taxi corridor.
    const bridgeX = index === 3 ? x - 1 : x + 1.9;
    const shoeX = index === 3 ? x - .8 : x + 1.68;
    box('aircraft stand apron', x, .055, -.9, 2.8, .035, 1.9, m.concrete);
    box('stand lead-in', x, .083, -1.25, .48, .012, .035, m.yellow);
    // Bridge corridors approach from the concourse along the outside edge of each
    // aircraft's measured bounds; only the small terminal shoe meets that envelope.
    box('boarding bridge', bridgeX, .55, .32, .26, .3, 1.12, m.glass);
    box('boarding bridge support', bridgeX, .28, .38, .1, .5, .12, m.steel);
    box('boarding bridge door contact', shoeX, .55, index === 3 ? -.1 : -.22, index === 3 ? .08 : .12, .18, index === 3 ? .2 : .2, m.glass);
    box('gate marker', x, .15, -1.75, .75, .05, .32, m.dark);
    label(`GATE ${standIds[index]}`, '#ffffff', .8, x, .2, -1.75, false, '#34414a');
    if (!DUBLIN_AIRPORT_LAYOUT.gates.some(gate => gate.id === standIds[index])) {
      for (const side of [-1, 1]) cylinder('stand bollard', x + side * 1.45, .16, -1.15, .04, .32, m.yellow, 8);
    }
  }

  // Only non-reserved stands are occupied by parked aircraft.
  const parkedAircraft = [];
  for (const [x, name] of [[-2, 'parked T1 aircraft'], [2, 'parked T2 aircraft']]) {
    const aircraft = createAirliner({ scale: .58, gear: 1 });
    aircraft.name = name; aircraft.position.set(x, .412, -.9); aircraft.scale.set(.29, .58, .29); aircraft.rotation.y = -Math.PI / 2;
    root.add(aircraft); parkedAircraft.push(aircraft);
  }
  const charter = createAirliner({ scale: .48, gear: 1 });
  charter.name = 'parked charter aircraft'; charter.position.set(14, .353, -1.2); charter.scale.set(.24, .48, .24); charter.rotation.y = -Math.PI / 2;
  root.add(charter); parkedAircraft.push(charter);

  // Control tower and a separate service block sit west of the terminal.
  box('ATC tower base', -15.3, .36, 1.6, 2.2, .7, 1.6, m.concrete);
  box('ATC tower shaft', -15.3, 1.33, 1.6, .62, 1.35, .62, m.concrete);
  box('ATC glazed cab', -15.3, 2.13, 1.6, 1.2, .48, 1.18, m.glass);
  box('ATC roof', -15.3, 2.4, 1.6, 1.38, .1, 1.35, m.dark);
  cylinder('ATC antenna', -15.3, 2.78, 1.6, .025, .66, m.steel, 8);

  // Two marked helipads; one is clear for operations, one holds a maintenance craft.
  const heliWorld = DUBLIN_AIRPORT_LAYOUT.helipad.position;
  const heliLocal = local(heliWorld);
  const helipads = [-14.8, -11.5];
  for (const x of helipads) {
    cylinder('helicopter apron', x, .075, 4.1, .95, .08, m.asphalt, 32);
    for (let i = 0; i < 16; i++) {
      const angle = i * Math.PI / 8;
      box('helipad perimeter light', x + Math.cos(angle)*.86, .14, 4.1 + Math.sin(angle)*.86, .09, .035, .09, m.light);
    }
    box('helipad H crossbar', x, .13, 4.1, .9, .025, .12, m.stripe);
    for (const dx of [-.34,.34]) box('helipad H leg', x + dx, .13, 4.1, .12, .025, .78, m.stripe);
  }
  const parkedHelicopter=createHelicopter({scale:.55});
  parkedHelicopter.name='parked maintenance helicopter';
  parkedHelicopter.scale.set(.275,.55,.275);
  parkedHelicopter.position.set(helipads[1], .356, 4.1); parkedHelicopter.rotation.y=-Math.PI/2;
  root.add(parkedHelicopter);
  const helicopters=[parkedHelicopter];

  // A curbside access road connects the compact terminal frontage.
  box('airport arrivals road', 0, .025, 3.85, 35, .055, 1.0, m.dark);
  box('roundabout connector lane', 0, .025, 4.04, .58, .055, .58, m.dark);
  for (let x = -16; x <= 16; x += 1.8) box('arrivals lane dash', x, .058, 3.85, .72, .014, .045, m.stripe);
  for (const x of [-10, 10]) {
    box('airport roadside lamp', x, .65, 3.15, .055, 1.3, .055, m.steel);
    const light = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), m.light);
    light.name = 'airport roadside lamp head'; light.position.set(x, 1.35, 3.15); light.scale.set(.14,.1,.14); addMesh(light);
  }

  // Service apron: a pair of maintenance hangars, marked fuel compound,
  // baggage staging lanes and the small vehicles that make the airfield read
  // as an operating airport at this map scale.
  for (const [x, width, name] of [[-15.3, 4.4, 'west maintenance hangar'], [15.2, 4.8, 'east maintenance hangar']]) {
    box(`${name} shell`, x, .48, 5.7, width, .88, 2.4, m.concrete);
    box(`${name} roof`, x, .96, 5.7, width + .18, .1, 2.55, m.roof);
    box(`${name} sliding door`, x, .48, 4.45, width * .66, .72, .055, m.dark);
    for (let stripe = -1; stripe <= 1; stripe++) box(`${name} door stripe`, x + stripe * .38, .48, 4.485, .025, .62, .018, m.steel);
  }
  box('fuel farm bund', 15.25, .16, .8, 4.7, .28, 2.15, m.concrete);
  for (const x of [14.2, 15.25, 16.3]) {
    cylinder('airport fuel tank', x, .48, .8, .42, .62, m.steel, 20);
    cylinder('fuel tank cap', x, .81, .8, .18, .06, m.dark, 16);
  }
  box('fuel compound safety stripe', 15.25, .31, -.28, 4.45, .025, .055, m.yellow);
  label('FUEL FARM', '#ffffff', 1.2, 15.25, .95, 1.93, false, '#34414a');
  for (let row = 0; row < 3; row++) {
    const z = 1.05 + row * .5;
    box('baggage cart staging lane', -11.65, .06, z, 4.6, .035, .32, m.apron);
    for (let bay = 0; bay < 5; bay++) box('baggage bay marking', -13.72 + bay * 1.02, .085, z, .035, .012, .27, m.yellow);
  }
  // Distinct service vehicles are kept compact and low, with their wheels and
  // drawbars as instanced primitives rather than stretched aircraft models.
  for (const [index, x] of [-13.15, -11.65, -10.15, 4.2, 6.2, 8.2].entries()) {
    const z = index < 3 ? 1.05 + index * .5 : 1.05 + (index - 3) * .5;
    const color = index % 2 ? m.yellow : m.stripe;
    box('airport baggage tug', x, .18, z, .58, .27, .32, color);
    box('baggage tug cab', x + .12, .34, z, .23, .16, .3, m.glass);
    for (const side of [-1, 1]) cylinder('baggage tug wheel', x + side * .17, .09, z + .18, .095, .07, m.dark, 10);
    if (index < 3) {
      box('baggage cart train', x - .62, .16, z, .66, .22, .48, m.apron);
      for (const side of [-1, 1]) cylinder('baggage cart wheel', x - .68, .085, z + side * .22, .065, .05, m.dark, 8);
      box('baggage tug drawbar', x - .34, .16, z, .27, .035, .035, m.steel);
    } else {
      box('apron service van', x + .72, .27, z, .92, .48, .52, index % 2 ? m.red : m.green);
      box('apron van windscreen', x + .72, .4, z + .27, .5, .19, .025, m.glass);
    }
  }

  // A signed forecourt, taxi/coach bays and a striped staff car park sit south
  // of the terminal. The access road links around the airport perimeter.
  box('airport taxi queue', -6.1, .035, 6.35, 8.6, .055, .58, m.dark);
  box('airport coach bay', 7.5, .035, 6.35, 9.2, .055, .72, m.dark);
  for (let x = -10; x <= -2; x += 1.6) box('taxi bay divider', x, .068, 6.35, .035, .016, .56, m.yellow);
  for (let x = 3; x <= 12; x += 2.25) box('coach bay divider', x, .068, 6.35, .035, .016, .68, m.stripe);
  box('airport forecourt directional island', 0, .085, 6.35, 1.1, .1, .42, m.concrete);
  for (const x of [-11, 11.95]) box('airport forecourt feeder road', x, .025, 5.1, .58, .055, 2.5, m.dark);
  const roundabout = new THREE.Mesh(new THREE.RingGeometry(.62, 1.12, 40), m.dark);
  roundabout.name = 'airport access roundabout';
  roundabout.rotation.x = -Math.PI / 2;
  roundabout.position.set(0, .055, 5.35);
  addMesh(roundabout);
  cylinder('airport roundabout planted island', 0, .12, 5.35, .55, .12, m.green, 32);
  cylinder('airport roundabout island tree', 0, .42, 5.35, .12, .58, material(P.trunk), 8);
  const islandCanopy = new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), material(P.lawnLight));
  islandCanopy.name = 'airport roundabout island crown'; islandCanopy.position.set(0, .8, 5.35); islandCanopy.scale.set(.38,.42,.38); addMesh(islandCanopy);
  box('staff car park asphalt', 6, .025, 5, 4.8, .045, 1.2, m.asphalt);
  for (let row = 0; row < 2; row++) for (let bay = 0; bay < 7; bay++) {
    box('staff parking bay line', 4.1 + bay * .58, .055, 4.62 + row * .42, .025, .012, .32, m.stripe);
  }
  box('TAXI DROP OFF sign', -7.8, .72, 5.65, 2.25, .45, .08, m.green);
  label('TAXI / DROP OFF', '#ffffff', 1.75, -7.8, .72, 5.7, false, '#236b48');
  box('COACHES sign', 8.6, .72, 5.65, 1.65, .45, .08, m.green);
  label('COACHES', '#ffffff', 1.2, 8.6, .72, 5.7, false, '#236b48');

  const accessPoints=DUBLIN_ROAD_LANES.filter(lane=>lane.routeId.includes('airport')).flatMap(lane=>lane.points);
  const clearAccess=(x,z,w,d)=>!accessPoints.some(p=>Math.abs(p.x-(lot.x+x*2))<w+.24&&Math.abs(p.z-(lot.z+z*2))<d+.24);
  // Perimeter fencing and apron floodlights define the boundary of the site.
  for (let x = -17.5; x <= 17.51; x += .7) {
    for (const z of [-6.85, 6.95]) if(clearAccess(x,z,.025,.025))cylinder('airport perimeter fence post', x, .42, z, .025, .84, m.steel, 6);
  }
  for (const z of [-6.5, -5.4, 5.3, 6.5]) for (let x = -17; x <= 13.6; x += 3.4) {
    if(clearAccess(x+1.7,z,1.7,.035))box('airport fence rail', x + 1.7, .42, z, 3.4, .025, .035, m.steel);
  }
  for (const [x, z] of [[-17, -5.8], [-2, -6.2], [14, -5.9], [17, 2.1]]) {
    cylinder('apron floodlight mast', x, 1.75, z, .055, 3.5, m.steel, 8);
    box('apron floodlight bar', x, 3.48, z, .7, .07, .16, m.dark);
    for (const dx of [-.22, 0, .22]) box('apron floodlight', x + dx, 3.43, z, .12, .08, .12, m.light);
  }

  flush();
  root.userData = {
    runway: DUBLIN_AIRPORT_LAYOUT.runway,
    parallelRunway: DUBLIN_AIRPORT_LAYOUT.parallelRunway,
    crosswindRunway: DUBLIN_AIRPORT_LAYOUT.crosswindRunway,
    gates: DUBLIN_AIRPORT_LAYOUT.gates,
    gateCount: 4,
    reservedGateIds: DUBLIN_AIRPORT_LAYOUT.gates.map(gate => gate.id),
    airportBoxes: boxes,
    airportCylinders: cylinders,
    airportMeshes: meshes.filter(mesh => !mesh.isInstancedMesh),
    parkedAircraft,
    helicopters,
    campus: { width: 72, depth: 29, origin: AIRPORT_ORIGIN },
    metrics: {
      campusWidth: 72, campusDepth: 29, localScale: AIRPORT_GROUND_SCALE,
      terminals: 2, runways: 3, stands: standX.length, scheduledGates: DUBLIN_AIRPORT_LAYOUT.gates.length,
      boardingBridgeComponents: boxes.filter(detail => detail.name.startsWith('boarding bridge')).length,
      parkedAirliners: parkedAircraft.length, parkedHelicopters: helicopters.length,
      boxDetailInstances: boxes.length, cylinderDetailInstances: cylinders.length,
      instancedDetailBatches: Number(boxes.length > 0) + Number(cylinders.length > 0),
      customMeshCount: meshes.filter(mesh => !mesh.isInstancedMesh).length,
    },
    counts: { airliners: 3, privateJets: 0, helicopters: 1, helipads: 2, runways: 3 },
  };
  return root;
}
