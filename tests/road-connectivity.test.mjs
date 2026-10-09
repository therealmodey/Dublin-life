import assert from 'node:assert/strict';
import {DUBLIN_ROAD_NETWORK,DUBLIN_ROAD_LANES} from '../src/dublin-road-network.js';
import {measureRoadConnectivity} from '../src/road-connectivity.js';
const fixtures=[
  ['collinear disjoint routes',{roadWidth:.9,centerlines:[{id:'a',points:[[0,0],[1,0]]},{id:'b',points:[[50,0],[51,0]]}]},2],
  ['parallel touching road widths',{roadWidth:1,centerlines:[{id:'a',points:[[0,0],[2,0]]},{id:'b',points:[[0,.8],[2,.8]]}]},1],
  ['parallel separated roads',{roadWidth:1,centerlines:[{id:'a',points:[[0,0],[2,0]]},{id:'b',points:[[0,1.1],[2,1.1]]}]},2],
  ['shared endpoint',{roadWidth:.9,centerlines:[{id:'a',points:[[0,0],[1,0]]},{id:'b',points:[[1,0],[1,2]]}]},1],
  ['T intersection within road width',{roadWidth:.9,centerlines:[{id:'a',points:[[0,0],[2,0]]},{id:'b',points:[[1,.3],[1,2]]}]},1],
  ['T gap outside road width',{roadWidth:.9,centerlines:[{id:'a',points:[[0,0],[2,0]]},{id:'b',points:[[1,1],[1,2]]}]},2],
  ['crossing roads',{roadWidth:.9,centerlines:[{id:'a',points:[[0,0],[2,0]]},{id:'b',points:[[1,-1],[1,1]]}]},1],
];
for(const[name,fixture,components]of fixtures)assert.equal(measureRoadConnectivity(fixture).connectedComponents,components,name);
const network=measureRoadConnectivity(DUBLIN_ROAD_NETWORK);
assert.ok(network.routeCount>=18,'core, district and connector routes are included');
assert.equal(network.connected,true,`all authored roads meet at physical intersections: ${JSON.stringify(network.components)}`);
assert.equal(network.connectedComponents,1);
assert.ok(network.routeIds.includes('quayside-loop'));
assert.ok(network.routeIds.includes('northside-link'));
console.log(`Dublin road graph connects ${network.routeCount} routes through physical road intersections`);

// Rounded, sampled road ribbons must also connect; raw corner endpoints alone
// could otherwise hide a gap introduced by the lane curve generator.
const sampled=DUBLIN_ROAD_LANES.filter(l=>l.direction===1).map(l=>({id:l.routeId,closed:l.closed,points:l.points.map((p,i)=>{
 const a=l.points[l.closed?(i+l.points.length-1)%l.points.length:Math.max(0,i-1)],b=l.points[l.closed?(i+1)%l.points.length:Math.min(l.points.length-1,i+1)],dx=b.x-a.x,dz=b.z-a.z,d=Math.hypot(dx,dz)||1;
 return[p.x-dz/d*.22,p.z+dx/d*.22];
})}));
assert.equal(measureRoadConnectivity({roadWidth:.9,centerlines:sampled}).connectedComponents,1,'sampled road ribbon centres connect after corner rounding');
