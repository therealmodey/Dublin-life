import {dublinLots} from './dublin-locations.js';

/** Shared, world-space Dublin streets. The city mesh and traffic use these exact centerlines. */
export const DUBLIN_ROAD_NETWORK = Object.freeze({
  bounds: Object.freeze({minX: -78, maxX: 65, minZ: -54, maxZ: 52}),
  roadWidth: 0.9,
  laneWidth: 0.37,
  laneOffset: 0.22,
  centerlines: Object.freeze([
    // Quayside loop: Liffey crossings use vehicular bridges at x=-28 and x=30.
    Object.freeze({id: 'quayside-loop', points: Object.freeze([
      [-28, -32], [30, -32], [30, -2.55], [30, 2.55], [30, 31],
      [-28, 31], [-28, 2.55], [-28, -2.55],
    ]), closed: true, bridgeXs: Object.freeze([-28, 30])}),
    // Inner-city loop uses the vehicular bridges at x=-18 and x=18.
    Object.freeze({id: 'inner-city-loop', points: Object.freeze([
      [-18, -27], [18, -27], [18, -2.55], [18, 2.55], [18, 28],
      [-18, 28], [-18, 2.55], [-18, -2.55],
    ]), closed: true, bridgeXs: Object.freeze([-18, 18])}),
    // Illustrative neighborhood streets added for the western estates and south belt.
    Object.freeze({id:'ballyfermot-estate-loop',points:Object.freeze([[-77.5,-34],[-49,-34],[-49,-8],[-77.5,-8]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'kilmainham-inchicore-loop',points:Object.freeze([[-77.5,8],[-49,8],[-49,31],[-77.5,31]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'dolphins-barn-grid-loop',points:Object.freeze([[-37,34],[-24,34],[-24,48.8],[-37,48.8]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'rathmines-grid-loop',points:Object.freeze([[-17,34],[8,34],[8,48.8],[-17,48.8]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'ballsbridge-grid-loop',points:Object.freeze([[-4,34],[12,34],[12,48.8],[-4,48.8]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'sandymount-grid-loop',points:Object.freeze([[24,44],[34,44],[34,48.8],[24,48.8]]),closed:true,bridgeXs:Object.freeze([])}),
    Object.freeze({id:'west-south-district-loop',points:Object.freeze([[-77.5,34],[-49,34],[-49,48.8],[-77.5,48.8]]),closed:true,bridgeXs:Object.freeze([])}),
    // Coast and airport access are modeled as joined routes with real lane ribbons.
    Object.freeze({id:'airport-access-roundabout',points:Object.freeze([
      [0,-40.9],[-5.5,-40.9],[-8.2,-41.3],[-8.9,-42.4],
      [-9.28,-43.68],[-9.28,-44.3],
      [-9.55,-45.06],[-10.1,-45.67],[-11,-45.92],[-11,-46.92],
    ]),closed:false,bridgeXs:Object.freeze([])}),
  ]),
  connectors: Object.freeze([
    Object.freeze({id: 'northside-link', a: Object.freeze({x: 0, z: -32}), b: Object.freeze({x: 0, z: -27})}),
    Object.freeze({id: 'southside-link', a: Object.freeze({x: 0, z: 28}), b: Object.freeze({x: 0, z: 31})}),
    Object.freeze({id:'ballyfermot-interior-street',a:Object.freeze({x:-63,z:-34}),b:Object.freeze({x:-63,z:-8})}),
    Object.freeze({id:'ballyfermot-cross-street',a:Object.freeze({x:-77.5,z:-21}),b:Object.freeze({x:-49,z:-21})}),
    Object.freeze({id:'kilmainham-interior-street',a:Object.freeze({x:-63,z:8}),b:Object.freeze({x:-63,z:23})}),
    Object.freeze({id:'kilmainham-cross-street',a:Object.freeze({x:-77.5,z:19}),b:Object.freeze({x:-49,z:19})}),
    Object.freeze({id:'dolphins-barn-local-street',a:Object.freeze({x:-35.5,z:34}),b:Object.freeze({x:-35.5,z:48.8})}),
    Object.freeze({id:'rathmines-local-street',a:Object.freeze({x:-5,z:34}),b:Object.freeze({x:-5,z:48.8})}),
    Object.freeze({id:'ballsbridge-local-street',a:Object.freeze({x:3,z:34}),b:Object.freeze({x:3,z:48.8})}),
    Object.freeze({id:'sandymount-local-street',a:Object.freeze({x:29,z:44}),b:Object.freeze({x:29,z:48.8})}),
    Object.freeze({id:'southern-grid-tie-in',a:Object.freeze({x:0,z:31}),b:Object.freeze({x:0,z:34})}),
    Object.freeze({id:'ballyfermot-core-link',points:Object.freeze([[-28,-32],[-49,-32],[-49,-34]])}),
    Object.freeze({id:'west-south-district-link',points:Object.freeze([[-49,30],[-49,34]])}),
    Object.freeze({id:'kilmainham-core-link',points:Object.freeze([[-28,31],[-28,32],[-49,32],[-49,30]])}),
    Object.freeze({id:'dolphins-barn-core-link',points:Object.freeze([[-28,31],[-28,34]])}),
    Object.freeze({id:'sandymount-core-link',points:Object.freeze([[12,48.8],[12,50.4],[24,50.4],[24,48.8]])}),
    Object.freeze({id:'airport-core-link',a:Object.freeze({x:0,z:-32}),b:Object.freeze({x:0,z:-40.9})}),
    Object.freeze({id:'port-city-access',points:Object.freeze([[30,31],[36.2,31]])}),
    Object.freeze({id:'dublin-port-gate-approach',points:Object.freeze([[36.2,31],[42.4,31],[42.4,14.1]])}),
    Object.freeze({id:'howth-coastal-approach',points:Object.freeze([[30,-32],[38.3,-32],[38.3,-46.2],[59.15,-46.2],[64,-46.2]])}),
  ]),
});

export const DUBLIN_VEHICULAR_BRIDGE_XS = Object.freeze(
  [...new Set(DUBLIN_ROAD_NETWORK.centerlines.flatMap(line => line.bridgeXs))],
);
export const DUBLIN_ROAD_HEIGHTS = Object.freeze({
  street: .252,
  bridgeDeckTop: .52,
  bridgeDeck: .523,
  deckHalfLength: 2.4,
  approachLength: 1.8,
});

/** Road ribbon and traffic center height, including smooth ramps at road bridges. */
export function roadSurfaceY(x, z) {
  if(z<-40.5 && x>-24 && x<5)return .252+.057*Math.min(1,Math.max(0,(-z-40.5)/1.56));
  if(x>40&&z<-30)return .252+.072*Math.min(1,Math.max(0,(x-55)/4.2));
  if(x>40&&z>10)return .333;

  if (![x, z].every(Number.isFinite)) return Number.NaN;
  const bridge = DUBLIN_VEHICULAR_BRIDGE_XS.some(bridgeX => Math.abs(x - bridgeX) <= .45);
  const distance = Math.abs(z);
  if (!bridge || distance >= DUBLIN_ROAD_HEIGHTS.deckHalfLength + DUBLIN_ROAD_HEIGHTS.approachLength) {
    return DUBLIN_ROAD_HEIGHTS.street;
  }
  if (distance <= DUBLIN_ROAD_HEIGHTS.deckHalfLength) return DUBLIN_ROAD_HEIGHTS.bridgeDeck;
  const raw = (distance - DUBLIN_ROAD_HEIGHTS.deckHalfLength) / DUBLIN_ROAD_HEIGHTS.approachLength;
  const t = raw * raw * (3 - 2 * raw);
  return DUBLIN_ROAD_HEIGHTS.bridgeDeck + (DUBLIN_ROAD_HEIGHTS.street - DUBLIN_ROAD_HEIGHTS.bridgeDeck) * t;
}

function sampleCenterline(definition) {
  // Round only actual road intersections; keep long straights and bridge decks exact.
  const corners = definition.points.map((raw, i) => {
    const prev = definition.points[definition.closed ? (i - 1 + definition.points.length) % definition.points.length : Math.max(0,i-1)];
    const next = definition.points[definition.closed ? (i + 1) % definition.points.length : Math.min(definition.points.length-1,i+1)];
    const inLength = Math.hypot(raw[0] - prev[0], raw[1] - prev[1]);
    const outLength = Math.hypot(next[0] - raw[0], next[1] - raw[1]);
    const ax = raw[0] - prev[0], az = raw[1] - prev[1], bx = next[0] - raw[0], bz = next[1] - raw[1];
    const cross = ax * bz - az * bx;
    if ((!definition.closed && (i===0||i===definition.points.length-1)) || Math.abs(cross) < 1e-6 || !inLength || !outLength) {
      const p = {x: raw[0], z: raw[1]}; return {before: p, after: p, center: p, rounded: false};
    }
    const cut = Math.min(1.6, inLength * .25, outLength * .25);
    return {center: {x: raw[0], z: raw[1]},
      before: {x: raw[0] - ax / inLength * cut, z: raw[1] - az / inLength * cut},
      after: {x: raw[0] + bx / outLength * cut, z: raw[1] + bz / outLength * cut}, rounded: true};
  });
  const result = [];
  const pushLine = (a, b, steps) => {
    for (let k = 0; k < steps; k++) { const t = k / steps; result.push({x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t}); }
  };
  for (let i = 0; i < corners.length - (definition.closed ? 0 : 1); i++) {
    const current = corners[i], next = corners[(i + 1) % corners.length];
    if (current.rounded) {
      const arcSteps = 16;
      for (let k = 0; k < arcSteps; k++) {
        const t = k / arcSteps, u = 1 - t;
        result.push({x: u * u * current.before.x + 2 * u * t * current.center.x + t * t * current.after.x,
          z: u * u * current.before.z + 2 * u * t * current.center.z + t * t * current.after.z});
      }
    } else result.push(current.center);
    const distance = Math.hypot(next.before.x - current.after.x, next.before.z - current.after.z);
    pushLine(current.after, next.before, Math.max(1, Math.ceil(distance / .35)));
  }
  if(!definition.closed)result.push(corners.at(-1).center);
  return result;
}

function offsetPoints(points, offset, closed = true) {
  return points.map((p, i) => {
    const prev = points[closed ? (i - 1 + points.length) % points.length : Math.max(0, i - 1)];
    const next = points[closed ? (i + 1) % points.length : Math.min(points.length - 1, i + 1)];
    const dx = next.x - prev.x, dz = next.z - prev.z;
    const length = Math.hypot(dx, dz) || 1;
    // In x/z world coordinates north is -Z; the left normal is (+dz, -dx).
    return {x: p.x + dz / length * offset, z: p.z - dx / length * offset};
  });
}

function segmentBridgeX(a, b, bridgeXs) {
  const midX = (a.x + b.x) / 2, midZ = (a.z + b.z) / 2;
  return Math.abs(midZ) < DUBLIN_ROAD_HEIGHTS.deckHalfLength ? bridgeXs.find(x => Math.abs(midX - x) < 1.2) ?? null : null;
}

function makeSegments(lane) {
  const segmentCount = lane.closed ? lane.points.length : lane.points.length - 1;
  return Array.from({length: segmentCount}, (_, i) => {
    const a = lane.points[i], b = lane.points[(i + 1) % lane.points.length];
    const bridgeX = segmentBridgeX(a, b, lane.bridgeXs);
    return {id: `${lane.id}:${i}`, laneId: lane.id, a, b, width: lane.width,
      direction: lane.direction, bridge: bridgeX !== null, bridgeX};
  });
}

const lanes = DUBLIN_ROAD_NETWORK.centerlines.flatMap(def => {
  const center = sampleCenterline(def);
  const forward = offsetPoints(center, DUBLIN_ROAD_NETWORK.laneOffset, def.closed);
  const backward = offsetPoints([...center].reverse(), DUBLIN_ROAD_NETWORK.laneOffset, def.closed);
  return [
    {id: `${def.id}:clockwise`, routeId: def.id, points: forward, width: DUBLIN_ROAD_NETWORK.laneWidth,
      direction: 1, bridgeXs: def.bridgeXs, closed: def.closed},
    {id: `${def.id}:counterclockwise`, routeId: def.id, points: backward, width: DUBLIN_ROAD_NETWORK.laneWidth,
      direction: -1, bridgeXs: def.bridgeXs, closed: def.closed},
  ];
});

for (const connector of DUBLIN_ROAD_NETWORK.connectors) {
  const raw = (connector.points || [connector.a, connector.b]).map(p => Array.isArray(p) ? p : [p.x,p.z]);
  const center = [];
  for (let leg = 0; leg < raw.length - 1; leg++) {
    const a = raw[leg], b = raw[leg + 1], length = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const count = Math.max(1, Math.ceil(length / .25));
    for (let i = 0; i < count; i++) { const t = i / count; center.push({x:a[0]+(b[0]-a[0])*t,z:a[1]+(b[1]-a[1])*t}); }
  }
  center.push({x:raw.at(-1)[0],z:raw.at(-1)[1]});
  lanes.push(
    {id: `${connector.id}:northbound`, routeId: connector.id, points: offsetPoints(center, DUBLIN_ROAD_NETWORK.laneOffset, false),
      width: DUBLIN_ROAD_NETWORK.laneWidth, direction: 1, bridgeXs: [], closed: false},
    {id: `${connector.id}:southbound`, routeId: connector.id, points: offsetPoints([...center].reverse(), DUBLIN_ROAD_NETWORK.laneOffset, false),
      width: DUBLIN_ROAD_NETWORK.laneWidth, direction: -1, bridgeXs: [], closed: false},
  );
}

export const DUBLIN_ROAD_LANES = Object.freeze(lanes.map(lane => Object.freeze({
  ...lane,
  points: Object.freeze(lane.points.map(p => Object.freeze(p))),
  lengths: Object.freeze(lane.points.slice(0, lane.closed ? undefined : -1).map((p, i) => {
    const next = lane.points[(i + 1) % lane.points.length]; return Math.hypot(next.x - p.x, next.z - p.z);
  })),
  segments: Object.freeze(makeSegments(lane).map(s => Object.freeze(s))),
})));

export const DUBLIN_ROAD_NETWORK_WITH_LANES = Object.freeze({
  ...DUBLIN_ROAD_NETWORK,
  lanes: DUBLIN_ROAD_LANES,
  segments: Object.freeze(DUBLIN_ROAD_LANES.flatMap(lane => lane.segments)),
});

/** True when a circular footprint does not intersect a selectable lot or leave the authored map. */
export function isRoadClear(x, z, radius = DUBLIN_ROAD_NETWORK.laneWidth / 2, {bridge = false, bridgeX = null} = {}) {
  if (![x, z, radius].every(Number.isFinite) || radius < 0) return false;
  const {minX, maxX, minZ, maxZ} = DUBLIN_ROAD_NETWORK.bounds;
  if (x - radius < minX || x + radius > maxX || z - radius < minZ || z + radius > maxZ) return false;
  if (Math.abs(z) < 2.25 && ![-28, -18, 18, 30].some(bridgeX => Math.abs(x - bridgeX) <= 0.58 - radius)) return false;
  return !dublinLots.some(lot => {
    if (lot.kind==='airport')return false;
    if (bridge && lot.kind?.endsWith('Bridge') && bridgeX !== null && Math.abs(lot.x - bridgeX) < .75 && Math.abs(x - lot.x) < lot.w / 2 + radius && Math.abs(z - lot.z) < lot.d / 2 + radius) return false;
    return Math.abs(x - lot.x) < lot.w / 2 + radius && Math.abs(z - lot.z) < lot.d / 2 + radius;
  });
}

/** Samples an entire segment at the supplied footprint radius. */
export function isRoadSegmentClear(segment, radius = DUBLIN_ROAD_NETWORK.laneWidth / 2) {
  const dx = segment.b.x - segment.a.x, dz = segment.b.z - segment.a.z;
  const length = Math.hypot(dx, dz), steps = Math.max(1, Math.ceil(length / Math.max(0.08, radius / 2)));
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    if (!isRoadClear(segment.a.x + dx * t, segment.a.z + dz * t, radius, {bridge: segment.bridge, bridgeX: segment.bridgeX})) return false;
  }
  return true;
}

/** Identifies blocked footprints so the shared parcel layout can be adjusted precisely. */
export function findRoadClearanceIssues(radius = DUBLIN_ROAD_NETWORK.laneWidth / 2) {
  const issues = [];
  for (const segment of DUBLIN_ROAD_NETWORK_WITH_LANES.segments) {
    const dx = segment.b.x - segment.a.x, dz = segment.b.z - segment.a.z;
    const length = Math.hypot(dx, dz), steps = Math.max(1, Math.ceil(length / Math.max(.08, radius / 2)));
    let collision = null;
    for (let i = 0; i <= steps && !collision; i++) {
      const t = i / steps, x = segment.a.x + dx * t, z = segment.a.z + dz * t;
      if (!isRoadClear(x, z, radius, {bridge: segment.bridge, bridgeX: segment.bridgeX})) {
        const lot = dublinLots.find(candidate => !(segment.bridge && candidate.kind?.endsWith('Bridge') && Math.abs(candidate.x - segment.bridgeX) < .75) && Math.abs(x - candidate.x) < candidate.w / 2 + radius && Math.abs(z - candidate.z) < candidate.d / 2 + radius);
        collision = {x, z, lotId: lot?.id || (Math.abs(z) < 2.25 ? 'river-or-non-vehicular-crossing' : 'map-boundary')};
      }
    }
    if (collision) issues.push({...segment, collision});
  }
  return issues;
}

/** Returns a normalized sample from a lane by distance, with a stable tangent for vehicle yaw. */
export function sampleRoadLane(lane, distance) {
  const points = lane.points;
  const lengths = lane.lengths || points.slice(0, lane.closed ? undefined : -1).map((p, i) => {
    const next = points[(i + 1) % points.length]; return Math.hypot(next.x - p.x, next.z - p.z);
  });
  const total = lengths.reduce((sum, n) => sum + n, 0);
  let remaining = lane.closed ? ((distance % total) + total) % total : Math.max(0, Math.min(total, distance));
  for (let i = 0; i < lengths.length; i++) {
    const segmentLength = lengths[i];
    if (remaining <= segmentLength || i === lengths.length - 1) {
      const a = points[i], b = lane.closed ? points[(i + 1) % points.length] : points[i + 1] || points[i];
      const t = segmentLength ? remaining / segmentLength : 0;
      const tx = (b.x - a.x) / (segmentLength || 1), tz = (b.z - a.z) / (segmentLength || 1);
      const x = a.x + (b.x - a.x) * t, z = a.z + (b.z - a.z) * t;
      return {x, y: roadSurfaceY(x, z), z, tx, tz, distance};
    }
    remaining -= segmentLength;
  }
  return {x: points[0].x, y: roadSurfaceY(points[0].x, points[0].z), z: points[0].z, tx: 0, tz: 1, distance: 0};
}

export function roadLaneLength(lane) {
  return lane.points.slice(0, lane.closed ? undefined : -1).reduce((sum, p, i) => {
    const next = lane.points[(i + 1) % lane.points.length]; return sum + Math.hypot(next.x - p.x, next.z - p.z);
  }, 0);
}

// Actual route intersections supply open junction aprons and gaps in kerbs.
const junctions=[];
const routeSegments=[...DUBLIN_ROAD_NETWORK.centerlines,...DUBLIN_ROAD_NETWORK.connectors].map(route=>{
  const points=(route.points||[route.a,route.b]).map(p=>Array.isArray(p)?{x:p[0],z:p[1]}:p);
  if(route.closed)points.push(points[0]);
  return {id:route.id,segments:points.slice(0,-1).map((a,i)=>({a,b:points[i+1]}))};
});
for(let i=0;i<routeSegments.length;i++)for(let j=i+1;j<routeSegments.length;j++)for(const a of routeSegments[i].segments)for(const b of routeSegments[j].segments){
  const dx=a.b.x-a.a.x,dz=a.b.z-a.a.z,ex=b.b.x-b.a.x,ez=b.b.z-b.a.z,den=dx*ez-dz*ex;
  if(Math.abs(den)<1e-8)continue;
  const px=b.a.x-a.a.x,pz=b.a.z-a.a.z,t=(px*ez-pz*ex)/den,u=(px*dz-pz*dx)/den;
  if(t<0||t>1||u<0||u>1)continue;
  const x=a.a.x+t*dx,z=a.a.z+t*dz;
  if(Math.abs(z)<4.3||z<-40||x>40)continue;
  const existing=junctions.find(p=>Math.hypot(p.x-x,p.z-z)<.1);
  if(existing){existing.routes=[...new Set([...existing.routes,routeSegments[i].id,routeSegments[j].id])];}
  else junctions.push({x,z,radius:.78,routes:[routeSegments[i].id,routeSegments[j].id]});
}
export const DUBLIN_ROAD_JUNCTIONS=Object.freeze(junctions.map(p=>Object.freeze(p)));
