import assert from 'node:assert/strict';
import {ART,palette,ASO_ROCK,ZUMA_ROCK,ASO_VILLA} from '../src/abuja-primitives.js';
import {extraArt} from '../src/abuja-landmarks.js';
import * as layout from '../src/abuja-layout.js';
const shapes=new Set(['box','cyl','cyl8','cylT','halfCyl','cone','cone8','pyr','dome','sphere','ico','rock','mono','bowlWall','bowlSeats','ring','torus']);
function finite(values){assert(values.every(Number.isFinite),'Every mesh transform must be finite');}
for(const [id,lot] of Object.entries(layout.lots)){
 finite([lot.x,lot.z,lot.w,lot.d,lot.top]);assert(lot.w>0&&lot.d>0,`${id} needs a valid selection footprint`);
 assert(extraArt[id]||ART[id],`${id} needs matching landmark geometry`);
}
for(const descriptors of [...Object.values(ART),...Object.values(extraArt),ASO_ROCK,ZUMA_ROCK,ASO_VILLA])for(const descriptor of descriptors){
 assert(shapes.has(descriptor.g),`Unknown mesh geometry ${descriptor.g}`);assert(palette[descriptor.m],`Missing material ${descriptor.m}`);
 finite(descriptor.p);finite(descriptor.s);if(descriptor.r)finite(descriptor.r);
}
for(const items of [layout.roads,layout.roundabouts,layout.houses,layout.roofs,layout.hills,layout.treeCrowns,layout.cars])for(const item of items){finite(item.p);finite(item.s);assert(item.s.every(n=>n>0));if(item.r!==undefined)assert(Number.isFinite(item.r));if(item.c)assert(/^#[0-9a-f]{6}$/i.test(item.c));}
assert.equal(Object.keys(layout.lots).filter(id=>!id.startsWith('home_')).length,69);
assert.equal(layout.houses.length,355);
assert.equal(layout.lots.abjAirport.x,-28);assert.equal(layout.lots.abjAirport.z,35.4);
assert(layout.roads.length>20);assert(layout.roundabouts.length>10);
console.log('Abuja geometry passed: 69 landmarks, 355 houses, valid transforms and materials.');
