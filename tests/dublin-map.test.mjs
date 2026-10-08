import assert from 'node:assert/strict';
import {buildDublin,dublinLots,dublinBridges,isDublinLand} from '../src/dublin.js';

assert.equal(new Set(dublinLots.map(p=>p.id)).size,dublinLots.length);
for(const p of dublinLots){
  assert([p.x,p.z,p.w,p.d,p.h].every(Number.isFinite));
  assert(p.w>0&&p.d>0&&p.h>0);
  assert(isDublinLand(p.x,p.z+p.d/2+.65),`${p.name} needs a walkable arrival point`);
}
assert(!isDublinLand(10,0),'River water is not walkable');
for(const x of dublinBridges)for(const z of [-2.3,-1,0,1,2.3])assert(isDublinLand(x,z),'Bridges connect both banks');
assert(!isDublinLand(27,12),'Dock basin is not walkable');
assert(!isDublinLand(44,12),'Bay is not walkable');
assert(!isDublinLand(0,-50),'Outside the map is not walkable');
assert(dublinLots.find(p=>p.id==='dubAirport').z<0);
assert(dublinLots.find(p=>p.id==='dubTrinity').z>0);
const map=buildDublin({textSurface(){}});
let batches=0,instances=0;
map.world.traverse(mesh=>{
  if(!mesh.isInstancedMesh)return;
  batches++;instances+=mesh.count;
  assert([...mesh.instanceMatrix.array].every(Number.isFinite),'All instanced transforms must be finite');
  assert(Number.isFinite(mesh.boundingSphere.radius),'Every batch needs finite culling bounds');
});
assert(map.world.children.includes(map.homes)&&map.world.children.includes(map.boards));
assert(map.world.userData.houses>60);
assert(batches<25,'Repeated details stay batched');
console.log(`Dublin map passed: ${map.places.length} landmarks, ${map.world.userData.houses} terraces, ${instances} instances in ${batches} batches; river and dock boundaries valid.`);
