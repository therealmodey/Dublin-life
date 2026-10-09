# Map camera and transport integration — 2026-10-09

## Current implementation

- Each city has a finite authored world rectangle. Dublin uses the city worker's full `[-96, 96] × [-76, 56]` bounds, including the west woodland, airport, expanded southern lots, and east port. Lagos includes the preserved estate ground to `z=-31`.
- Overview cameras are fitted from projected world corners at the current viewport aspect. The default camera is aligned with north (zero X offset), remains oblique, and frames the full world around the desktop/mobile HUD. Overview resize recomputes the fit; custom camera views retain their focus and are clamped to bounds.
- Per-city pan and zoom remain finite. Maximum zoom-out follows 1.4× the responsive fitted overview distance. Camera state received from older saved views is checked for finite coordinates, clamped to the world, bounded by distance, and restricted to a limited azimuth/elevation. Walking, districts, selections, and city changes retain their existing app state path.
- Perspective near/far planes now adapt to camera distance and the current world bounds, keeping overview depth precision useful while retaining the full map, aircraft, and close walking views in the clip range.
- The renderer's shadow frustum now derives from each authored world extent. This covers the added west forest and east port; normal bias was reduced to limit shadow acne/crawl.
- Dynamic label visibility previously used hard per-frame screen-edge and overlap thresholds and changed from an estimated width while hidden to measured width while visible. Labels now use a single measured width per viewport plus separate show/hide margins to damp threshold popping. This addresses label projection and collision feedback only.
- Dublin runtime composition includes the metro and seven drawbridge factories. Metro station focus targets the elevated platform while walking still starts at its ground entrance. Port, road traffic, metro, bridges, and scheduled aircraft advance from a shared active-time clock in steps no larger than 50 ms. Development seeking replays in those steps; a backward seek resets the systems and replays from zero. Port reset also resets bridge permissions and the remaining dynamic actors. Reduced-motion, hidden-tab, port-pause, city visibility, and disposal paths are coordinated.
- Walking land checks use the active bridge deck height and reject an open drawbridge span. A walker on a span is included in bridge-clearance checks.

## Source review and flicker limits

The runtime pass did not remove surfaces or disable shadows. Source inspection found road markings and fittings offset above their road surfaces, with authored height transitions at the bridge roads and ramps. Live visual review inspected the metro route and a ship crossing an open drawbridge; six paused canvas captures were byte-identical. Live desktop/mobile overviews showed the western forest beyond expanded town, full city coverage, dense housing, the airport and port, and the elevated metro. This does not constitute an exhaustive search for coplanar intersections or shadow crawl across the entire scene, and the notes do not claim that all flicker is solved.

## Acceptance status

| Requirement | Result | Evidence and limit |
| --- | --- | --- |
| Finite pan and zoom with an authored map boundary | Passed | Development and production six-view camera checks; extreme pan/zoom and finite snapshot assertions. |
| North-aligned oblique, responsive overview with HUD clearance | Passed | Camera is straightened to face north while retaining oblique 3D elevation, not top-down. Desktop/mobile all-city overviews; projected bounds tests include city, forest, airport and port. Live camera captures reviewed. |
| City expansion and forest coverage | Passed | 637 terraces, 87 base city places plus port and five metro stops (93 total), 11 park plans and 662 source-tree placements including 448 in the western forest. These are authored scene counts, not a surveyed map. |
| Saved camera and city-switch behavior | Passed | Restored views are normalized and clamped; damping is settled before saving/switching; production control round trips passed. |
| Camera depth range and visibility feedback | Passed with scope limits | Adaptive near/far tests, stable measured label widths and repeated-frame checks; six paused preview canvas captures were identical. This does not guarantee identical results on every GPU/browser. |
| Metro route and selected station focus | Passed as illustrative geometry | Five elevated stops and route were visible in production preview; station focus targets the platform while walking starts at ground access. Not a representation of an operating Dublin metro service. |
| Ship, bridge and road-vehicle clearance | Passed | Full hull and vehicle footprint tests; bridge controller waits for physical clearance before opening/closing; all seven crossings verified. |
| Shared simulation lifecycle | Passed in tested scenarios | Deterministic substep replay, pause/resume, reset, reduced-motion and disposal checks. Port/traffic/aircraft remain local visual simulations. |
| Baseline and output preservation | Passed | 47 saved static/Abuja hashes unchanged; 51 current Round 2 source/build inputs recorded and matched. No commit or push. |

## Focused checks

- `node tests/map-camera.test.mjs` passed projected bounds checks for all three cities at 390×844 and 1440×900, along with restored-view and extreme-pan/zoom limits.
- `node tests/walk-boundaries.test.mjs` passed physical-deck, ramp, and gate-entry rules for the city and port spans.
- `node tests/dublin-bridges.test.mjs` passed span coordination, clearance, barrier, and replay checks.
- `node tests/dublin-port.test.mjs` and `node tests/dublin-metro.test.mjs` passed geometry and motion checks after the latest peer updates.
- `node --check tests/browser-round2.mjs` passed.
- `node --check tests/browser-port-cycle.mjs` passed.
- `npm run check` passed.
- `tests/browser-round2.mjs` is the desktop/mobile regression harness. It captures all-city overviews, checks camera state after extreme pan/zoom, verifies per-city view retention and shared display/walking state, checks stationary label visibility with reduced motion, and seeks the coordinated bridge cycle through closed, opening, ship-passing, and closing snapshots. It verifies hull clearance on every non-open span and the stop limit while a requested span lacks passage permission; an actual vessel stop is recorded when observed without being required if a bridge opens early. It checks all seven span passages and road vehicle movement after resume. `PHASE=bridges` runs only the bridge section.
- `tests/browser-port-cycle.mjs` covers real-time production mode for at least 300 simulation seconds, verifies that development seek hooks are absent, and checks vessel calls plus all seven bridge passages.

## Final verification and publication status

Development browser verification passed all six desktop/mobile city overview and maximum-zoom views and stationary reduced-motion label checks. The bridge rerun verified safe ship gating, a cargo stop at 34.5 seconds, all seven bridge openings and ship passages by 45 seconds, a road-vehicle stop at 23.5 seconds, a car clearing the deck at 94 seconds, pause/resume at 300/302 seconds and reset to zero. The browser report contains no errors. The first run found two real clearance defects: a ship hull could overlap a non-open leaf, and road traffic could be released before its rear cleared the leaf. Both were fixed and the rerun passed. The initial harness also required a vessel stop even when a bridge opened before the ship arrived; it now asserts safe hull exclusion and the stop limit whenever passage is unavailable, while recording an actual stop when observed.

Production-preview migration controls passed six pages and 22 interactions with no browser, console or failed-response errors (`round2-production-controls/browser-report.json`). The production camera harness passed all six city/viewport combinations with bounded pan/zoom, overview framing, resize and stable labels; development seeking and stress hooks were absent (`round2-production-camera/browser-report.json`).

The real-time production-preview capture observed all seven bridge passages by 44.7985 simulated seconds, captured the elevated metro route and a ship on an open bridge, reported no errors, and confirmed six paused canvas captures were byte-identical (`round2-production-visual/report.json`). This checks paused-frame stability and the reviewed geometry; it does not prove every possible source of scene flicker is eliminated.

Ten numeric suites and `npm run check` passed. Source preservation review found all 47 saved static asset and Abuja hashes unchanged. `round2-source-hashes.json` records 51 current app, test and build inputs. The graph was refreshed at `2026-10-09T09:30:25Z` (11,774 nodes, 58,742 edges); relevant app paths matched metadata with no recorded issue. CSS imports at lines 1–2 had partial coverage and were read directly; tests/configs excluded by the graph fast pattern were directly reviewed and run.

Round 2 deployment completed at 2026-10-09 09:31:10 UTC: Worker `ireland-life`, version `f8c3bee9-e467-47fd-9a45-cb1bdf46b553`, deployment `3b08110a-e855-4311-9f7d-0c63eb2a22fa`, 100% traffic. The Worker export contains 105 assets; production build and Wrangler dry run passed. Live HTTP checks passed for health, CSS, app JavaScript, a GLB and an unknown-path 404 (`round2-live-http.json`). Live controls verification passed six city/viewport pages and 22 interactions with no page, console or asset errors (`round2-live-controls/browser-report.json`). Live camera verification passed six views, two responsive resize checks, finite camera bounds, label stability and production-hook absence with no errors (`round2-live-camera/browser-report.json`). The live port cycle ran for 313.7209 simulated seconds, observed approach/offshore/berth/transfer/depart phases, completed one cargo and one ferry call, moved one container, recorded two arrivals and two departures, and passed all seven bridge passages with no errors (`round2-live-port/browser-report.json`). The parent visually reviewed cargo transfer and cycle-complete captures. Both local preview servers were stopped and ports 3100/3101 had no listeners. All deployment and live checks are complete.
