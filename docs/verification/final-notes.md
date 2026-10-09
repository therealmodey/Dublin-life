# Local implementation and verification — 2026-10-09

This records the earlier migration/Dublin checkpoint. The later compact-city expansion and authorized Cloudflare Workers deployment are complete; see [expansion-notes.md](expansion-notes.md) for current live verification and scope. The local-only publication statements below are historical.

The migration was completed and checked before Dublin rebuilding. GPT-6 Luna workers implemented bounded parts; the main agent integrated the scene, exact asset loading, destination sheets and the final corrections. Work is local on `codex/frontend-migration`, with no commit, push, publication, hosting purchase or original-game/player-data mutation. The tracked `dist/`, Abuja modules and `.openai/hosting.json` are unchanged.

## Migration checkpoint

- Next.js/React, React Three Fiber/Three r186, Drei's shared GLTF loading, Tailwind v4 and Zustand replace the vanilla shell. Exact private Next/Drei/Tailwind/Zustand versions remain unknown; compatible versions are pinned locally.
- The pre-migration syntax/tests/build passed, followed by six desktop/mobile baseline captures. The migrated baseline then passed six browser views, 22 control checks and the production build before visual changes began.
- Evidence: `baseline/`, `migration/`, `migration-notes.md`, and `../research/current/frontend-version-compatibility.md`.

## Dublin implementation

- Source-identical sedan/SUV/taxi/van and deciduous trees, with unchanged GLB geometry/materials. `reference-prop-assets.json` records six live/local hash matches. The aircraft module's fresh hash is saved separately.
- Eight vehicles on four opposing, left-driving continuous lanes; two cross-street links connect the network. Streets, bridge ramps and traffic share coordinates and heights. Lane samples clear parcels and water; vehicles travel above bridge decks rather than through them.
- Two reserved airport gates, three parked jets and separate patrol/maintenance helipads. Measured gear/skid contact and terminal/bridge clearance checks prevent buried aircraft. Two staggered 120-second schedules depart beyond one map edge, arrive from the opposite edge, land, exit at an authored taxi connector and return to the gate. Runway occupancy is exclusive through line-up, takeoff, landing and clearance. Gear retracts and extends; the patrol helicopter departs, visits the city and returns.
- Real named destinations replace illustrative services. Four Courts, Busáras, museum sites, Glasnevin, the Citizens Information Centre and 3Arena received broad geographic corrections; EPIC/CHQ is represented once, alongside a separate Famine Memorial. Geographic/source notes are in `../research/dublin-city-evidence.md`.
- Distinct landmark forms include the Campanile, round Record Tower, civic porticoes/domes, cathedral silhouettes, tiered Croke Park with an open Hill 16, Aviva's curved roof and the harp bridge. Smaller signs and footprint-aware focus make these forms visible.
- Native destination sheets follow the public source's bottom-sheet pattern, share deep links and offer this explorer's focus/walking actions. Airports have a separate panel. Closing, Escape and city/district changes release modal state. Original-game fares, ticketing, NPC/shop operations and private services are not fabricated.

## Verification

Final automated results are in `production/browser-report.json` (six views and 22 interactions) and `dublin/browser-report.json` (four sheets, nine flight frames and seven landmark views), with screenshots beside each report. `npm run check`, all four `npm test` suites, `git diff --check`, and the webpack production build pass. The browser suite checks six city/viewport combinations, 22 existing interactions, page/console errors, failed requests, HTTP failures and non-GLB fallback responses. The Dublin suite checks four destination sheets on desktop/mobile, share links and Escape, reduced-motion pausing, nine deterministic full-cycle frames and seven landmark/bridge views. Numeric motion checks sample three complete flight cycles and continuous traffic; visual phase captures supplement those checks.

The production browser report verifies the same controls and assets on `next start` and confirms that the development animation-seek hook is absent. Development captures remain separate from production checks.

## Limits and restart

Dublin is a deliberately compressed, authored low-poly scene, not surveyed geometry or address-level geocoding. Some smaller venues retain schematic typology rather than a detailed replica. Visual evidence does not establish full original-game interaction parity: the original reference was inspected through public source, and its signed-in Continue screen was left untouched to avoid advancing a player save. This is a standalone explorer, not an original-game integration.

Turbopack development works. Its production CSS worker could not bind a local port in this environment, so `npm run build` uses webpack. Fiber emits a non-fatal Three.Clock deprecation warning with the verified Fiber/Three versions. The original static deployment manifest cannot publish this Next.js migration as-is; future publishing needs an authorized hosting plan.

Run `npm run dev -- --port 3100`, or build then `npm run start -- --port 3100`. Browser scripts need Chrome and Playwright; set `PLAYWRIGHT_MODULE`, `BASE_URL` and `OUTPUT_DIR` as documented in the root README. The graph project is `ireland-life`; confirm its current generation/coverage before further changes. App global Tailwind import lines are parse-partial; tests/docs can be excluded by design and were read directly.
