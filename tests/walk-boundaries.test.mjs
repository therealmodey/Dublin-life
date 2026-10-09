import assert from 'node:assert/strict';
import {bridgeSpanAt,mayEnterBridge} from '../src/walk-boundaries.js';

const spans=[-28,-18,-5,2,18,30,42.4];
assert.equal(bridgeSpanAt(-5,2.4,spans),-5,'walker footprint reaches the edge of a city drawbridge deck');
assert.equal(bridgeSpanAt(-5,2.6,spans),undefined,'city bridge bank approach is outside the physical deck');
assert.equal(bridgeSpanAt(42.4,3.15,spans),42.4,'the wider port span includes its ramp-side deck edge');
assert.equal(bridgeSpanAt(42.4,3.3,spans),undefined,'the port approach ramp is not bridge deck occupancy');
assert.equal(mayEnterBridge({currentlyOnDeck:false,signal:'red'}),false,'red bridge signals stop new entrants');
assert.equal(mayEnterBridge({currentlyOnDeck:true,signal:'red'}),true,'a pedestrian already on the deck can clear it during gate/clearing phases');
assert.equal(mayEnterBridge({currentlyOnDeck:false,signal:'green'}),true,'green bridge signals permit entry');
console.log('Bridge walking footprint and gate-entry boundaries passed.');
