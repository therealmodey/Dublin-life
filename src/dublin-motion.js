import * as THREE from 'three';
import {createReferenceVehicle} from './reference-props.js';
import {createAirliner, createHelicopter} from './dublin-vehicles.js';
import {DUBLIN_AIRPORT_LAYOUT} from './dublin-airport.js';
import {DUBLIN_ROAD_LANES, roadLaneLength, sampleRoadLane} from './dublin-road-network.js';

const clamp01 = n => Math.max(0, Math.min(1, n));
const smooth = n => { n = clamp01(n); return n * n * (3 - 2 * n); };
const mix = (a, b, t) => a + (b - a) * t;
const FLIGHT_CYCLE_SECONDS = 120;

function pathCurve(points, closed = false) {
  return new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, p.y ?? 0, p.z)), closed, 'centripetal', .4);
}

function interpolatePath(curve, progress) {
  const t = clamp01(progress), point = curve.getPointAt(t), tangent = curve.getTangentAt(t);
  return {x: point.x, y: point.y, z: point.z, tx: tangent.x, ty: tangent.y, tz: tangent.z};
}

function runwayLayout() {
  const runway = DUBLIN_AIRPORT_LAYOUT.runway;
  const start = runway.start || {x: runway.x - runway.length / 2, z: runway.z, y: runway.y};
  const end = runway.end || {x: runway.x + runway.length / 2, z: runway.z, y: runway.y};
  return {runway, start: {...start, y: start.y ?? runway.y ?? .34}, end: {...end, y: end.y ?? runway.y ?? .34}};
}

function gateAt(index) {
  const gates = DUBLIN_AIRPORT_LAYOUT.gates || [];
  if (gates[index]) return gates[index];
  const {start} = runwayLayout();
  return {id: `gate-${index + 1}`, position: {x: start.x + 10 + index * 8, y: .4, z: start.z + 2.5}, heading: 0};
}

function taxiPathsFor(gate) {
  const authored = DUBLIN_AIRPORT_LAYOUT.taxiways?.[gate.id] || DUBLIN_AIRPORT_LAYOUT.taxiway || [];
  const shared = authored.map(p => ({x: p.x, y: p.y ?? .4, z: p.z}));
  const {start, end} = runwayLayout();
  const gatePoint = {x: gate.position.x, y: gate.position.y ?? .4, z: gate.position.z};
  const startsAtGate = shared.length && Math.hypot(shared[0].x - gatePoint.x, shared[0].z - gatePoint.z) < 1;
  const authoredEnd = shared.at(-1);
  const threshold = authoredEnd && Math.hypot(authoredEnd.x - start.x, authoredEnd.z - start.z) < Math.hypot(authoredEnd.x - end.x, authoredEnd.z - end.z) ? start : end;
  const direction = threshold === start ? 1 : -1;
  const runwayPoint = {x: threshold.x, y: threshold.y, z: threshold.z};
  const points = [...(startsAtGate ? [] : [gatePoint]), ...shared];
  if (!points.length) points.push(gatePoint);
  const last = points.at(-1);
  if (Math.hypot(last.x - threshold.x, last.z - threshold.z) < 2) points[points.length - 1] = runwayPoint;
  else points.push(runwayPoint);
  const exitIndex=shared.findIndex((point,index)=>index>0&&Math.abs(point.z-threshold.z)<.01&&Math.abs(point.x-threshold.x)>2);
  if(exitIndex<0)throw new Error(`Gate ${gate.id} has no runway exit connector`);
  const inbound=shared.slice(0,exitIndex+1).reverse();
  inbound[0]={...inbound[0],y:threshold.y};
  return {outbound: points, inbound, landingExit:inbound[0], direction, threshold, farThreshold: threshold === start ? end : start, runwayPoint};
}

function setHeading(object, tx, tz, forward = '+X') {
  object.rotation.y = forward === '+X' ? Math.atan2(-tz, tx) : Math.atan2(tx, tz);
}

/** Builds a deterministic, data-driven Dublin traffic and flight simulation. */
export function buildDublinMotion() {
  const group = new THREE.Group(); group.name = 'Dublin traffic and aircraft';
  const actors = [], routes = [];
  const kinds = ['sedan', 'taxi', 'suv', 'van', 'sedan', 'taxi', 'suv', 'sedan'];
  const carsPerLane = 2;
  const trafficLanes = DUBLIN_ROAD_LANES.filter(lane => lane.closed);
  for (const [laneIndex, lane] of trafficLanes.entries()) {
    const length = roadLaneLength(lane);
      const speed = [2.6, 3.15, 2.85, 3.35][laneIndex % 4];
    routes.push({id: lane.id, type: 'continuous-left-driving-lane', length, speed, bridgeCrossings: lane.bridgeXs});
    for (let vehicleIndex = 0; vehicleIndex < carsPerLane; vehicleIndex++) {
      const kind = kinds[(laneIndex * carsPerLane + vehicleIndex) % kinds.length];
      const object = new THREE.Group(); object.name = `Dublin ${kind} ${laneIndex + 1}.${vehicleIndex + 1}`;
      object.userData.vehicleKind = kind;
      group.add(object);
      actors.push({kind: 'car', vehicleKind: kind, object, lane, laneId: lane.id, route: lane.id,
        speed, distanceOffset: length * vehicleIndex / carsPerLane, distance:length * vehicleIndex / carsPerLane, length, vehicleLength:2.45,vehicleWidth:.92});
    }
  }

  const aircraft = [0, 1].map(index => {
    const object = createAirliner({scale: .82});
    object.name = `Dublin Airport scheduled jet ${index + 1}`;
    object.rotation.order = 'YXZ';
    group.add(object);
    const actor = {kind: 'airliner', object, route: 'airport-scheduled-flight', scheduleOffset: index * .25,
      gate: gateAt(index), scheduleId: `flight-${index + 1}`};
    const taxiPaths = taxiPathsFor(actor.gate);
    actor.taxiOut = pathCurve(taxiPaths.outbound);
    actor.taxiIn = pathCurve(taxiPaths.inbound);
    actor.runwayDirection = taxiPaths.direction;
    actor.landingExit = taxiPaths.landingExit;
    actor.departureThreshold = taxiPaths.threshold;
    actor.farThreshold = taxiPaths.farThreshold;
    actor.runwayPoint = taxiPaths.runwayPoint;
    actor.rollStart = {...actor.runwayPoint, x: actor.runwayPoint.x + actor.runwayDirection * 1.2};
    const taxiStartTangent = actor.taxiOut.getTangentAt(0);
    actor.taxiStartYaw = Math.atan2(-taxiStartTangent.z, taxiStartTangent.x);
    const gateYaw = actor.gate.heading ?? 0;
    actor.taxiStartYawDelta = Math.atan2(Math.sin(actor.taxiStartYaw - gateYaw), Math.cos(actor.taxiStartYaw - gateYaw));
    const taxiTangent = actor.taxiOut.getTangentAt(1);
    actor.lineUpStartYaw = Math.atan2(-taxiTangent.z, taxiTangent.x);
    actor.lineUpEndYaw = actor.runwayDirection > 0 ? 0 : -Math.PI;
    actor.lineUpYawDelta = Math.atan2(Math.sin(actor.lineUpEndYaw - actor.lineUpStartYaw), Math.cos(actor.lineUpEndYaw - actor.lineUpStartYaw));
    actor.taxiExitProgress = Math.max(.05, Math.min(.2, 1.2 / actor.taxiIn.getLength()));
    const taxiEntryTangent = actor.taxiIn.getTangentAt(0);
    actor.taxiEntryYaw = Math.atan2(-taxiEntryTangent.z, taxiEntryTangent.x);
    const landingYaw = actor.runwayDirection > 0 ? 0 : -Math.PI;
    actor.taxiEntryYawDelta = Math.atan2(Math.sin(actor.taxiEntryYaw - landingYaw), Math.cos(actor.taxiEntryYaw - landingYaw));
    actors.push(actor);
    routes.push({id: actor.scheduleId, type: 'scheduled-taxi-takeoff-offmap-approach-land', durationSeconds: FLIGHT_CYCLE_SECONDS});
    return actor;
  });

  const heliLayout = DUBLIN_AIRPORT_LAYOUT.helipad;
  const heli = createHelicopter({scale: .82});
  heli.name = 'Dublin airborne patrol'; group.add(heli);
  const helipad = heliLayout?.position || heliLayout || {x: -26, y: .4, z: -36.25};
  const patrol = {kind: 'helicopter', object: heli, route: 'airport-city-return', helipad,
    scheduleId: 'dublin-helicopter-patrol', cycleSeconds: 72};
  actors.push(patrol);
  routes.push({id: patrol.scheduleId, type: 'helipad-depart-city-patrol-return-land', durationSeconds: patrol.cycleSeconds});

  const flightSnapshots = new Map();
  function updateAircraft(actor, seconds) {
    const {start} = runwayLayout();
    const phase = ((seconds / FLIGHT_CYCLE_SECONDS + actor.scheduleOffset) % 1 + 1) % 1;
    const gate = actor.gate;
    let p, pitch = 0, gear = 1, headingYaw = null, label, visible = true, runwayOccupied = false;
    if (phase < .06) {
      label = 'taxi-to-runway';
      const progress = phase / .06;
      p = interpolatePath(actor.taxiOut, progress);
      const gateHeading = gate.heading ?? 0;
      if (progress < .08) headingYaw = gateHeading + actor.taxiStartYawDelta * smooth(progress / .08);
      else headingYaw = Math.atan2(-p.tz, p.tx);
    } else if (phase < .08) {
      label = 'runway-line-up'; runwayOccupied = true;
      const t = smooth((phase - .06) / .02);
      headingYaw = actor.lineUpStartYaw + actor.lineUpYawDelta * t;
      p = {x: mix(actor.runwayPoint.x, actor.rollStart.x, t), y: actor.rollStart.y,
        z: mix(actor.runwayPoint.z, actor.rollStart.z, t), tx: actor.runwayDirection, tz: 0};
    } else if (phase < .20) {
      label = 'takeoff-roll'; runwayOccupied = true;
      const t = smooth((phase - .08) / .12), direction = actor.runwayDirection, near = actor.rollStart, far = actor.farThreshold;
      p = {x: mix(near.x, far.x, t), y: start.y, z: mix(near.z, far.z, t), tx: direction, tz: 0};
      pitch = 0; // Keep the gear on the pavement until rotation after lift-off.
    } else if (phase < .32) {
      label = 'climb-out';
      const t = smooth((phase - .20) / .12), direction = actor.runwayDirection, far = actor.farThreshold;
      p = {x: mix(far.x, far.x + direction * 55, t), y: mix(start.y, 23, t), z: mix(far.z, far.z - 4, t), tx: direction, tz: -.15};
      pitch = .13 * smooth(t / .2) * (1 - t);
      gear = 1 - smooth(t / .55);
    } else if (phase < .55) {
      label = 'off-map-cruise'; visible = false;
      const direction = actor.runwayDirection, far = actor.farThreshold;
      p = {x: far.x + direction * 70, y: 23, z: far.z - 4, tx: direction, tz: 0};
      gear = 0;
    } else if (phase < .65) {
      label = 'opposite-side-approach';
      const direction = actor.runwayDirection, t = smooth((phase - .55) / .1), threshold = actor.departureThreshold;
      p = {x: mix(threshold.x - direction * 55, actor.rollStart.x, t), y: mix(23, start.y, t), z: mix(threshold.z - 4, threshold.z, t), tx: direction, tz: 0};
      pitch = -.08 * Math.sin(t * Math.PI) ** 2;
      gear = smooth((phase - .58) / .055);
    } else if (phase < .75) {
      label = 'landing-roll'; runwayOccupied = true;
      const t = smooth((phase - .65) / .1), direction = actor.runwayDirection, near = actor.rollStart, exit = actor.landingExit;
      p = {x: mix(near.x, exit.x, t), y: start.y, z: mix(near.z, exit.z, t), tx: direction, tz: 0};
      pitch = 0;
    } else if (phase < .77) {
      label = 'taxi-clear-runway'; runwayOccupied = true;
      const t = smooth((phase - .75) / .02);
      p = interpolatePath(actor.taxiIn, actor.taxiExitProgress * t);
      headingYaw = (actor.runwayDirection > 0 ? 0 : -Math.PI) + actor.taxiEntryYawDelta * t;
    } else if (phase < .84) {
      label = 'taxi-to-gate';
      const t = smooth((phase - .77) / .07);
      p = interpolatePath(actor.taxiIn, mix(actor.taxiExitProgress, 1, t));
      const pathYaw = Math.atan2(-p.tz, p.tx), gateYaw = gate.heading ?? 0;
      const yawDelta = Math.atan2(Math.sin(gateYaw - pathYaw), Math.cos(gateYaw - pathYaw));
      headingYaw = pathYaw + yawDelta * smooth((t - .7) / .3);
    } else {
      label = 'parked-at-gate';
      p = {x: gate.position.x, y: gate.position.y ?? .4, z: gate.position.z, tx: Math.cos(gate.heading || 0), tz: -Math.sin(gate.heading || 0)};
    }
    actor.object.visible = visible;
    actor.object.position.set(p.x, p.y ?? start.y, p.z);
    if (headingYaw === null) setHeading(actor.object, p.tx ?? 1, p.tz ?? 0, '+X');
    else actor.object.rotation.y = headingYaw;
    actor.object.rotation.x = 0;
    actor.object.rotation.z = pitch;
    for (const assembly of actor.object.userData.gear || []) assembly.scale.y = gear;
    const snapshot = {id: actor.scheduleId, phase: label, phaseProgress: phase, visible, runwayOccupied,
      cycleDurationSeconds: FLIGHT_CYCLE_SECONDS, gateId: gate.id, position: {x: p.x, y: p.y ?? start.y, z: p.z}};
    flightSnapshots.set(actor.scheduleId, snapshot);
    return snapshot;
  }

  function updateHelicopter(actor, seconds) {
    const cycle = actor.cycleSeconds, t = ((seconds % cycle) + cycle) % cycle;
    const home = {x: actor.helipad.x, y: actor.helipad.y ?? .4, z: actor.helipad.z};
    const elevated = {x: home.x, y: 10.5, z: home.z};
    const patrolPoints = [
      elevated, {x: -25, y: 11.2, z: -22}, {x: -7, y: 12, z: -16},
      {x: 15, y: 11.4, z: -9}, {x: 27, y: 10.8, z: 9},
      {x: 12, y: 11, z: 22}, {x: -8, y: 10.8, z: 11},
    ];
    actor.patrolCurve ||= pathCurve(patrolPoints);
    actor.returnCurve ||= pathCurve([patrolPoints.at(-1), {x: 5, y: 12, z: 2}, {x: -10, y: 11, z: -18}, elevated]);
    let p, label;
    if (t < 8) {
      label = 'vertical-departure'; const u = smooth(t / 8);
      p = {...home, y: mix(home.y, elevated.y, u), tx: 0, tz: 1};
    } else if (t < 38) {
      label = 'city-patrol'; p = interpolatePath(actor.patrolCurve, (t - 8) / 30);
    } else if (t < 56) {
      label = 'return-to-airport';
      p = interpolatePath(actor.returnCurve, (t - 38) / 18);
    } else if (t < 64) {
      label = 'helipad-approach'; const u = smooth((t - 56) / 8);
      p = {...home, y: mix(elevated.y, home.y, u), tx: 0, tz: 1};
    } else {
      label = 'parked-at-helipad'; p = {...home, tx: 0, tz: 1};
    }
    actor.object.position.set(p.x, p.y, p.z);
    setHeading(actor.object, p.tx ?? 0, p.tz ?? 1, '+X');
    if (actor.object.userData.rotors) {
      actor.object.userData.rotors[0].rotation.y = seconds * 15;
      actor.object.userData.rotors[1].rotation.x = seconds * 19;
    }
    actor.snapshot = {id: actor.scheduleId, phase: label, visible: actor.object.visible, runwayOccupied: false,
      cycleDurationSeconds: cycle, position: {x: p.x, y: p.y, z: p.z}};
  }

  let disposed = false, currentSeconds = 0, bridgeController=null;
  function setCarPose(actor,bridges){
    const p=sampleRoadLane(actor.lane,actor.distance),deckY=bridges?.roadSurfaceY?.(p.x,p.z);
    actor.object.position.set(p.x,(deckY??p.y??.252)+.018,p.z);setHeading(actor.object,p.tx,p.tz,'+Z');
    actor.object.userData.routeDistance=((actor.distance%actor.length)+actor.length)%actor.length;
  }
  function advanceCars(dt,bridges){
    const cars=actors.filter(actor=>actor.kind==='car');
    for(const actor of cars){
      const current=sampleRoadLane(actor.lane,actor.distance),proposed=actor.distance+actor.speed*dt;
      let next=proposed;
      // A closed drawbridge signal holds the car before the deck. Vehicles already on a
      // span clear it at their normal speed so the bridge can safely begin raising.
      const vehicleBounds={x:current.x,z:current.z,width:actor.vehicleWidth,length:actor.vehicleLength};
      const atDeck=bridges?.isVehicleOnDeck?bridges.isVehicleOnDeck(vehicleBounds):Math.abs(current.z)<=2.25+actor.vehicleLength/2&&actor.lane.bridgeXs.some(x=>Math.abs(current.x-x)<.56+actor.vehicleWidth/2);
      const candidate=sampleRoadLane(actor.lane,next);
      if(!atDeck&&bridges?.signalAt?.(candidate.x,candidate.z)==='red'){
        let lo=actor.distance,hi=proposed;
        for(let i=0;i<10;i++){const mid=(lo+hi)/2,p=sampleRoadLane(actor.lane,mid);if(bridges.signalAt(p.x,p.z)==='red')hi=mid;else lo=mid;}
        next=lo;actor.object.userData.stopped=true;
      }else actor.object.userData.stopped=false;
      // Keep a real following gap if an upstream vehicle is being held at a signal.
      for(const other of cars){
        if(other===actor||other.laneId!==actor.laneId)continue;
        const ahead=((other.distance-actor.distance)%actor.length+actor.length)%actor.length;
        const gap=actor.vehicleLength+other.vehicleLength+1.1;
        if(ahead>.01&&ahead<gap+actor.speed*dt){next=Math.min(next,actor.distance+Math.max(0,ahead-gap));}
      }
      actor.distance=Math.max(actor.distance,next);
      if(actor.object.userData.stopped)actor.object.userData.waitingFor='drawbridge';
      else delete actor.object.userData.waitingFor;
      setCarPose(actor,bridges);
    }
  }
  function update(elapsedSeconds,options={}) {
    if (disposed) return;
    if(options?.signalAt)bridgeController=options;
    else if(options?.bridges)bridgeController=options.bridges;
    const target=Number.isFinite(elapsedSeconds)?Math.max(0,elapsedSeconds):0;
    if(target<currentSeconds){for(const actor of actors)if(actor.kind==='car')actor.distance=actor.distanceOffset;currentSeconds=0;}
    let remaining=target-currentSeconds;
    while(remaining>1e-9){const dt=Math.min(.05,remaining);advanceCars(dt,bridgeController);currentSeconds+=dt;remaining-=dt;}
    currentSeconds=target;
    for (const actor of actors) {
      if(actor.kind==='car')setCarPose(actor,bridgeController);
      else if (actor.kind === 'airliner') updateAircraft(actor, currentSeconds);
      else if (actor.kind === 'helicopter') updateHelicopter(actor, currentSeconds);
    }
  }

  function setVehicleModels(models) {
    if (disposed) return;
    for (const actor of actors) {
      if (actor.kind !== 'car') continue;
      const model = models?.[actor.vehicleKind];
      if (!model?.isObject3D) throw new Error(`Missing exact Dublin vehicle model: car/${actor.vehicleKind}.glb`);
      // GLTF cache owns the source geometry/materials; this actor owns only its cloned hierarchy.
      for (const child of [...actor.object.children]) actor.object.remove(child);
      const vehicle = createReferenceVehicle(model, {height: .26});
      vehicle.updateMatrixWorld(true);
      const vehicleSize=new THREE.Box3().setFromObject(vehicle).getSize(new THREE.Vector3());
      actor.vehicleLength=Math.max(.1,vehicleSize.z);
      actor.vehicleWidth=Math.max(.1,vehicleSize.x);
      vehicle.name = `${actor.vehicleKind} reference vehicle`;
      actor.object.add(vehicle);
      actor.object.userData.modelReady = true;
    }
    update(currentSeconds);
  }

  function getSnapshot() {
    const flights = actors.filter(actor => actor.kind === 'airliner').map(actor => flightSnapshots.get(actor.scheduleId)).filter(Boolean);
    const occupied = flights.filter(flight => flight.runwayOccupied);
    const roadCars=actors.filter(actor=>actor.kind==='car');
    return {timeSeconds: currentSeconds, timeMs: currentSeconds * 1000, roadVehicles: roadCars.length,
      roadVehiclePositions:roadCars.map(actor=>({id:actor.object.name,x:actor.object.position.x,z:actor.object.position.z,length:actor.vehicleLength,width:actor.vehicleWidth,laneId:actor.laneId,onBridge:bridgeController?.isVehicleOnDeck?bridgeController.isVehicleOnDeck({x:actor.object.position.x,z:actor.object.position.z,width:actor.vehicleWidth,length:actor.vehicleLength}):Math.abs(actor.object.position.z)<=2.25+actor.vehicleLength/2&&actor.lane.bridgeXs.some(x=>Math.abs(actor.object.position.x-x)<=.56+actor.vehicleWidth/2),stopped:actor.object.userData.stopped===true,distance:actor.distance})),
      runwayOccupiedBy: occupied.map(flight => flight.id), runwayExclusive: occupied.length <= 1,
      flights, helicopter: actors.find(actor => actor.kind === 'helicopter')?.snapshot || null,
      actors: actors.map(actor => ({kind: actor.kind, id: actor.scheduleId || actor.object.name,
        visible: actor.object.visible, position: {x: actor.object.position.x, y: actor.object.position.y, z: actor.object.position.z}}))};
  }

  function snapshot(elapsedSeconds = currentSeconds) {
    if (!disposed && Number.isFinite(elapsedSeconds) && elapsedSeconds !== currentSeconds) update(elapsedSeconds);
    return getSnapshot();
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    for (const actor of actors) {
      actor.object.removeFromParent();
      // Models from Drei's cache are shared; only discard the cloned scene nodes, not their assets.
      actor.object.clear();
    }
    group.clear(); flightSnapshots.clear(); actors.length = 0; routes.length = 0;
  }

  update(0);
  group.userData.actorCount = actors.length;
  group.userData.roadNetwork = trafficLanes;
  return {group, update, dispose, setVehicleModels, getSnapshot, snapshot, actors, routes,
    cycleDurationSeconds: FLIGHT_CYCLE_SECONDS};
}
