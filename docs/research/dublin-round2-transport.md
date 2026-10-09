# Dublin round-two transport notes

The elevated rail and river traffic in this standalone explorer are illustrative additions. Dublin does not currently operate the depicted metro or these opening road spans; station names and river geography provide local context, while the service layout and opening sequence are proposed map content.

The map's central Liffey water corridor runs along X, with the navigation channel kept clear around Z=0. The west turnaround uses the reserved basin centered near `(-68, 0)` with a six-unit radius. Port water begins at X=40 and connects to the terminal mouth at X=62.5; the outer harbor basin continues to X=96. No duplicate water slab is placed over the city channel. The port's moving leaf is six units wide, matching the mouth; city leaves span 4.5 units. All closed leaf tops and their walking/traffic height use Y=0.523.

`src/dublin-port.js` routes cargo and passenger vessels through the full central channel, past the seven controlled spans at X `[-28, -18, -5, 2, 18, 30, 42.4]`, around the west basin, and back toward the quay. Vessels cruise at 2.8 map units per second, turn on a smooth sampled curve, and carry length, width, heading axis, route progress, and the next span request in their snapshots. The shared river reservation allows one vessel to occupy the passage at a time; another remains queued offshore. Hull-corner checks cover the city channel, upstream basin, port mouth, and harbor. Cargo transfer containers are placed on the quay; while a container is over water it remains aboard its vessel.

`src/dublin-bridges.js` coordinates each drawbridge from current vessel and road-vehicle snapshots. It closes traffic signals first, lowers the road arms, waits for vehicles already on the leaf to clear by their full rear extent, raises the leaf to 1.48 radians, grants vessel passage only when fully open, and keeps the leaf raised until the vessel stern clears. It lowers the leaf before lifting the arms and restoring green signals. Signal aspect materials are per-head, so each span can change independently. A level leaf remains walkable during gate and clearing phases; its walk surface disappears as soon as it starts moving. Controller time advances in bounded 50 ms increments and `reset()` rebases it to zero.

`src/dublin-motion.js` holds cars at red signals with distance-based movement, preserving queue gaps and allowing vehicles already on a leaf to leave. Loaded reference vehicle bounds set their true footprint. Flight actors retain their existing absolute-cycle behavior. `src/dublin-road-details.js` leaves the moving bridge lengths clear of static ribbons and fittings; seven pairs of signalized approaches are authored at the span locations.

The added west and south local road loops in `src/dublin-road-network.js` follow lot-clear routes around the expanded residential and neighborhood blocks. Their centerlines are shared with road details and traffic. The current clearance check reports no lane intersections with selectable lots.

Focused checks:

- `node tests/dublin-bridges.test.mjs`
- `node tests/dublin-port.test.mjs`
- `node tests/dublin-motion.test.mjs`
- `node tests/dublin-road-details.test.mjs`
- `node tests/dublin-map.test.mjs`

