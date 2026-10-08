import * as THREE from 'three';
import {dublinLots} from './dublin-locations.js';
import {DUBLIN_PALETTE} from './dublin-palette.js';
import {createAirliner, createCar, createHelicopter} from './dublin-vehicles.js';

const TAU = Math.PI * 2;
const clamp01 = n => Math.max(0, Math.min(1, n));
const smooth = n => { n = clamp01(n); return n * n * (3 - 2 * n); };

/** Animated road traffic and aircraft for the authored Dublin map. */
export function buildDublinMotion() {
  const group = new THREE.Group(); group.name = 'Dublin traffic and aircraft';
  const actors = [], routes = [];
  const colors = [DUBLIN_PALETTE.white, DUBLIN_PALETTE.cream, '#536b67', '#b5754d', '#7891a0', '#ddd5bd'];
  const specs = [
    // South quay: broad clear roadway at z=32.
    ...[-31, -13, 6, 24].map((x, i) => ({kind: 'car', route: 'south-quay', axis: 'x', fixed: 32, min: -35, max: 36, start: x, speed: 3.0 + i * .22, dir: i % 2 ? -1 : 1})),
    {kind: 'bus', route: 'south-quay', axis: 'x', fixed: 32, min: -35, max: 36, start: -23, speed: 2.35, dir: 1},
    {kind: 'bus', route: 'south-quay', axis: 'x', fixed: 32, min: -35, max: 36, start: 17, speed: 2.2, dir: -1},
    // West central street: the z=-6 lane clears the riverside lot edges.
    ...[-31, -18, -3].map((x, i) => ({kind: 'car', route: 'west-central', axis: 'x', fixed: -6, min: -38, max: 8, start: x, speed: 2.5 + i * .25, dir: i % 2 ? -1 : 1})),
    // Eastern north-south street, east of the Custom House and venue plots.
    ...[-22, -2, 20].map((z, i) => ({kind: 'car', route: 'east-road', axis: 'z', fixed: 39.35, min: -29, max: 30, start: z, speed: 2.2 + i * .18, dir: i === 1 ? -1 : 1})),
  ];
  const routeMap = new Map();
  for (let i = 0; i < specs.length; i++) {
    const s = specs[i], vehicle = createCar({color: s.kind === 'bus' ? '#f2bd25' : colors[i % colors.length], bus: s.kind === 'bus'});
    vehicle.name = `${s.kind === 'bus' ? 'Dublin bus' : 'Dublin car'} ${i + 1}`;
    group.add(vehicle);
    const actor = {kind: s.kind, object: vehicle, route: s.route, speed: s.speed, phase: (s.start - s.min) / (s.max - s.min), direction: s.dir, axis: s.axis, fixed: s.fixed, min: s.min, max: s.max};
    actors.push(actor);
    if (!routeMap.has(s.route)) routeMap.set(s.route, {id: s.route, axis: s.axis, fixed: s.fixed, min: s.min, max: s.max});
  }
  routes.push(...routeMap.values());

  const plane = createAirliner({scale: .82, color: '#e7e8df'});
  plane.name = 'Dublin Airport scheduled jet'; group.add(plane);
  const aircraft = {kind: 'airliner', object: plane, route: 'airport-runway-flight'};
  actors.push(aircraft);
  routes.push({id: 'airport-runway-flight', type: 'taxi-takeoff-flight-landing', runway: {x: -11, z: -43.5, length: 32, width: 1.5}});

  const patrol = createHelicopter({scale: .82, color: '#456f54'});
  patrol.name = 'Dublin airborne patrol'; group.add(patrol);
  const patrolActor = {kind: 'helicopter', object: patrol, route: 'city-patrol'}; actors.push(patrolActor);
  routes.push({id: 'city-patrol', type: 'elevated-loop', minY: 8.5});

  // Store numeric route values once; the update loop mutates existing objects only.
  const landBounds = dublinLots;
  function update(elapsedSeconds) {
    const time = Number.isFinite(elapsedSeconds) ? Math.max(0, elapsedSeconds) : 0;
    for (const a of actors) {
      if (a.kind === 'car' || a.kind === 'bus') {
        const span = a.max - a.min;
        const u = ((a.phase + time * a.speed * a.direction / span) % 1 + 1) % 1;
        // Smoothly reverse at the ends of each authored road segment.
        const wave = TAU * u;
        const x = (a.min + a.max) / 2 + Math.cos(wave) * span / 2;
        a.object.position.set(a.axis === 'x' ? x : a.fixed, .27, a.axis === 'z' ? x : a.fixed);
        const forward = -Math.sin(wave) * a.direction >= 0 ? 1 : -1;
        a.object.rotation.y = a.axis === 'x' ? (forward > 0 ? 0 : Math.PI) : (forward > 0 ? -Math.PI / 2 : Math.PI / 2);
      } else if (a.kind === 'airliner') {
        // A 78 second closed cycle: runway taxi, takeoff, climb, high-altitude
        // turn, return, approach, landing roll, then a runway turnaround.
        const q = (time / 78) % 1;
        let x, y = .4, z = -43.5, yaw = 0, pitch = 0;
        if (q < .10) { const t = q / .10; x = -27 + 9 * t; }
        else if (q < .22) { const t = (q - .10) / .12; x = -18 + 23 * t; pitch = .16 * Math.sin(t * Math.PI); }
        else if (q < .37) { const t = (q - .22) / .15; x = 5 + 28 * t; y = .4 + 13 * smooth(t); pitch = .19 * (1 - t); }
        else if (q < .43) { const t = (q - .37) / .06; x = 33 + 1.5 * Math.sin(Math.PI * t); y = 13.4 + .12 * Math.sin(Math.PI * t); yaw = Math.PI * smooth(t); }
        else if (q < .62) { const t = (q - .43) / .19; x = 33 - 61 * t; y = 13.4 + .12 * Math.sin(t * TAU); yaw = Math.PI; }
        else if (q < .69) { const t = (q - .62) / .07; x = -28 + 2 * Math.sin(Math.PI * t); z = -43.5 + 4 * Math.sin(Math.PI * t); y = 13.4 + .12 * Math.sin(Math.PI * t); yaw = Math.PI + Math.PI * smooth(t); }
        else if (q < .84) { const t = (q - .69) / .15; x = -28 + 10 * t; y = 13.4 - 13 * smooth(t); yaw = Math.PI * 2; pitch = -.12 * Math.sin(t * Math.PI); }
        else if (q < .91) { const t = (q - .84) / .07; x = -18 + 8 * t; yaw = Math.PI * 2; }
        else if(q<.925){const t=(q-.91)/.015;x=-10;yaw=Math.PI*2+Math.PI*smooth(t);}
        else if(q<.985){const t=(q-.925)/.06;x=-10-17*smooth(t);yaw=Math.PI*3;}
        else {const t=(q-.985)/.015;x=-27;yaw=Math.PI*3+Math.PI*smooth(t);}
        a.object.position.set(x, y, z); a.object.rotation.set(0, yaw, pitch);
      } else if (a.kind === 'helicopter') {
        const angle = time * .115;
        a.object.position.set(-5 + 24 * Math.cos(angle), 9.2 + .45 * Math.sin(angle * 2), 1 + 20 * Math.sin(angle));
        const dx = -24 * Math.sin(angle), dz = 20 * Math.cos(angle);
        a.object.rotation.y = Math.atan2(-dz, dx);
      }
      if (a.object.userData.rotors) {
        a.object.userData.rotors[0].rotation.y = time * 15;
        a.object.userData.rotors[1].rotation.x = time * 19;
      }
    }
  }
  update(0);
  group.userData.actorCount = actors.length;
  group.userData.landBounds = landBounds;
  return {group, update, actors, routes};
}
