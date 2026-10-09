import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildDublinBridges,DUBLIN_DRAWBRIDGE_XS} from '../src/dublin-bridges.js';

const bridges=buildDublinBridges();
assert.deepEqual(bridges.snapshot().spans.map(s=>s.x),DUBLIN_DRAWBRIDGE_XS);
assert.equal(bridges.roadSurfaceY(-28,0),.523);
assert.equal(bridges.roadSurfaceY(40,0),undefined,'walking/road height exists only on a physical span');
assert.equal(bridges.roadSurfaceY(-28,2.3),undefined,'road height stops at the real leaf edge');
assert.equal(bridges.roadSurfaceY(42.4,2.9),.523,'the port span is six metres wide');
assert.equal(bridges.roadSurfaceY(42.4,3.1),undefined);
assert.ok(Math.abs(bridges.shipStopClearance(-28,5.4)-3.51)<.001,'city ship stop includes the real half-leaf length and margin');
assert.ok(Math.abs(bridges.shipStopClearance(42.4,5.4)-4.35)<.001,'port ship stop includes its wider real leaf');
const portLeaf=[];bridges.world.traverse(o=>{if(o.name==='Moving road deck leaf'&&Math.abs(o.parent.position.x-42.4)<.02)portLeaf.push(o);});
assert.equal(portLeaf.length,1);
assert.equal(portLeaf[0].scale.x,2.8,'the port moving leaf matches the road and footway ramp width');
assert.equal(bridges.signalAt(-28,0),'green');

const spans=bridges.world.children.filter(o=>o.name.startsWith('Drawbridge '));
bridges.world.updateMatrixWorld(true);
const aspects=DUBLIN_DRAWBRIDGE_XS.map(x=>{const found=[];bridges.world.traverse(o=>{if(o.name==='Bridge signal aspect'){const p=o.getWorldPosition(new THREE.Vector3());if(Math.abs(p.x-x)<1.1)found.push(o);}});return found;});
assert(aspects.every(items=>items.length===4));
assert.equal(new Set(aspects.flat().map(a=>a.material.uuid)).size,28,'each signal aspect has an independent material');
for(const x of DUBLIN_DRAWBRIDGE_XS){
  const arms=[];bridges.world.traverse(o=>{if(o.name==='Road barrier pivot'&&Math.abs(o.parent.getWorldPosition(new THREE.Vector3()).x-x)<1.1)arms.push(o);});
  assert.equal(arms.length,4);
  assert(arms.every(arm=>Math.abs(Math.abs(arm.rotation.z)-1.48)<.01),'closed-road barriers stand upright');
}
// Each approach has mirrored half-road arms with a small center gap.
for(const x of DUBLIN_DRAWBRIDGE_XS){
  const arms=[];bridges.world.traverse(o=>{if(o.name==='Operating road barrier arm'&&Math.abs(o.getWorldPosition(new THREE.Vector3()).x-x)<1.2)arms.push(o);});
  assert.equal(arms.length,4);
  const endpoints=arms.map(arm=>{arm.updateWorldMatrix(true,false);return [arm.localToWorld(new THREE.Vector3(-.5,0,0)),arm.localToWorld(new THREE.Vector3(.5,0,0))];});
  assert(endpoints.every(pair=>Math.abs(pair[0].y-pair[1].y)>.6),'raised arms stand near vertical');
  const zLevels=endpoints.map(pair=>(pair[0].z+pair[1].z)/2).sort((a,b)=>a-b);
  assert(zLevels[1]-zLevels[0]<.1&&zLevels[3]-zLevels[2]<.1,'each pair shares its approach plane');
}
const barrierGeometry=buildDublinBridges();
barrierGeometry.update(0,{ships:[{id:'barrier-check',riverTransit:true,x:-40,z:0,length:5.4,width:1.35,headingAxis:'x',nextBridgeX:-28,requestedBridges:[-28]}],vehicles:[]});
barrierGeometry.update(1.1,{ships:[{id:'barrier-check',riverTransit:true,x:-40,z:0,length:5.4,width:1.35,headingAxis:'x',nextBridgeX:-28,requestedBridges:[-28]}],vehicles:[]});
barrierGeometry.world.updateMatrixWorld(true);
const horizontalArms=[];barrierGeometry.world.traverse(o=>{if(o.name==='Operating road barrier arm')horizontalArms.push(o);});
const lowered=horizontalArms.filter(arm=>Math.abs(arm.getWorldPosition(new THREE.Vector3()).x+28)<1.2);
assert.equal(lowered.length,4);
for(const arm of lowered){const bounds=new THREE.Box3().setFromObject(arm);assert(bounds.max.x-bounds.min.x>.65,'lowered barrier covers its half-road approach');assert(bounds.max.y-bounds.min.y<.12,'lowered barrier is horizontal across traffic');}
for(const z of [-4.1,4.1]){
  const pair=lowered.filter(arm=>Math.abs(arm.getWorldPosition(new THREE.Vector3()).z-z)<.2).map(arm=>new THREE.Box3().setFromObject(arm));
  assert.equal(pair.length,2);
  assert.equal(pair[0].intersectsBox(pair[1]),false,'opposing half-road arms leave a small center gap without overlapping');
  assert(Math.min(pair[0].min.x,pair[1].min.x)<-28.7&&Math.max(pair[0].max.x,pair[1].max.x)>-27.3,'paired arms span both road halves');
}
barrierGeometry.dispose();

const ship={id:'test-ship',x:-37,z:0,length:5.4,width:1.35,heading:Math.PI/2,headingAxis:'x',riverTransit:true,nextBridgeX:-28,requestedBridges:[-28]};
bridges.update(0,{ships:[ship],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'gate');
assert.equal(bridges.signalAt(-28,5.4),'red','signals stop approaching traffic before the barrier');
assert.equal(bridges.canShipPass(-28),false,'a vessel cannot enter a closed leaf');

const car={id:'car-on-leaf',x:-28,z:2.2,length:2.45,width:.65,onBridge:true};
bridges.update(1.1,{ships:[ship],vehicles:[car]});
assert.equal(bridges.snapshot().spans[0].state,'clearing','the barrier cycle waits for a car already on the span');
bridges.update(2.5,{ships:[ship],vehicles:[car]});
assert.equal(bridges.snapshot().spans[0].state,'clearing');
assert.equal(bridges.snapshot().spans[0].deckAngle,0,'the leaf stays level while the car clears');
car.z=4.0;car.onBridge=false;
bridges.update(2.55,{ships:[ship],vehicles:[car]});
assert.equal(bridges.snapshot().spans[0].state,'raising','opening starts after the whole rear bumper leaves the deck');
assert.equal(bridges.snapshot().spans[0].deckAngle,0,'raising starts at the level-deck pose');
bridges.update(3.55,{ships:[ship],vehicles:[]});
assert.equal(bridges.canShipPass(-28),false,'a partially raised leaf still blocks the ship');
bridges.update(4.7,{ships:[ship],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'open');
assert(bridges.snapshot().spans[0].deckAngle>=1.47,'full opening reaches near vertical');
assert.equal(bridges.canShipPass(-28),true);

const hinge=spans[0].children.find(o=>o.name==='Moving drawbridge hinge');
hinge.updateWorldMatrix(true,false);
const cityUnderside=hinge.localToWorld(new THREE.Vector3(0,-.08,2.25));
assert(cityUnderside.y>1.76,'actual city leaf underside clears the vessel mast top with margin');
const portSpan=spans.find(o=>o.name.includes('x=42.4')),portHinge=portSpan.children.find(o=>o.name==='Moving drawbridge hinge');
portHinge.rotation.x=-1.48;portHinge.updateWorldMatrix(true,false);
const portUnderside=portHinge.localToWorld(new THREE.Vector3(0,-.08,3));
assert(portUnderside.y>1.76,'actual wide port leaf underside clears the vessel mast top with margin');
ship.x=-28;
bridges.update(4.75,{ships:[ship],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'open','a vessel over the deck keeps the span fully raised');
ship.x=-24.3;ship.nextBridgeX=null;ship.requestedBridges=[];
bridges.update(4.8,{ships:[ship],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'lowering','closure waits until the vessel stern clears');
assert.equal(bridges.signalAt(-28,0),'red','traffic remains stopped throughout lowering and release');
assert.equal(bridges.roadSurfaceY(-28,0),undefined,'a moving leaf is not a walking surface');
bridges.update(7,{ships:[],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'release');
assert.equal(bridges.signalAt(-28,0),'red','signals stay red until barrier arms finish lifting');
bridges.update(7.6,{ships:[],vehicles:[]});
assert.equal(bridges.snapshot().spans[0].state,'closed');
assert.equal(bridges.signalAt(-28,0),'green');
assert.equal(bridges.roadSurfaceY(-28,0),.523);

bridges.update(7.61,{ships:[{...ship,x:20,nextBridgeX:18,requestedBridges:[18]}],vehicles:[]});
assert.equal(bridges.snapshot().spans.find(s=>s.x===18).state,'gate');
assert.equal(aspects[0][0].material.color.getHexString(),'4d8759','a different span signal remains green');
bridges.reset();
assert.equal(bridges.snapshot().timeSeconds,0,'reset also rebases the shared simulation clock');
assert(bridges.snapshot().spans.every(s=>s.state==='closed'));
assert(bridges.snapshot().spans.every(s=>s.deckAngle===0),'reset restores physical leaf angles as well as state flags');
bridges.dispose();
console.log('Dublin bridge coordination, clearance, barriers and replay tests passed');
