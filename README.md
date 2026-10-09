# Lagos / Abuja / Dublin Map Explorer

A standalone explorer based on the public [Lagos Life map](https://lagoslife.eliysites.com/). It preserves Lagos and Abuja and adds a researched, deliberately compressed Dublin scene. It has no connection to the original game's accounts, player saves, fares or simulation services.

## Current verification and release status — 2026-10-09

Round 3 is complete in source: the metro is removed, 45 source-linked destinations replace housing across the expanded city, and Howth Harbour adds four moving boats on the shared Dublin clock. Dublin has 134 selectable places, 327 residential parcels, 11 detailed parks, 118 distinct public-building structures, and one connected network of 30 road routes. See [Round 3 verification](docs/verification/round3-notes.md) for exact production/live results and release metadata.

The project is published on [Cloudflare Workers](https://ireland-life.ikosam12345.workers.dev/?city=dublin) and tracked in the private [Dublin-life repository](https://github.com/therealmodey/Dublin-life). Round 2 evidence remains historical in [its dated report](docs/verification/round2-notes.md).

## Run locally

```sh
npm install
npm run dev -- --port 3100
```

Open [Dublin](http://127.0.0.1:3100/?city=dublin), [Lagos](http://127.0.0.1:3100/?city=lagos) or [Abuja](http://127.0.0.1:3100/?city=abuja). `npm run build` creates the Next.js production build; `npm run start -- --port 3100` serves it. The build uses webpack because the local Turbopack production CSS worker cannot bind its required port in this environment.

The preserved pre-migration static build remains in `dist/`, with its original deployment manifest. Serve that baseline with `python3 -m http.server 5173 --directory dist`. The current release is on [Cloudflare Workers](https://ireland-life.ikosam12345.workers.dev/?city=dublin); release metadata is in the Round 3 report. The existing static hosting manifest remains a separate historical deployment configuration.

## Frontend and map

Next.js App Router, React 19.2.8, React Three Fiber 9.8.1, Three r186, Drei, Tailwind v4 and Zustand replace the original direct Three/esbuild shell. Fiber owns the renderer, scene, camera and frame loop; existing map factories attach geometry through `src/map-runtime.js`. React and Zustand manage controls and local camera/preferences. GLTF assets load through Drei's shared cache. Exact original Next.js, Drei, Tailwind and Zustand versions are unknown; compatible local versions are pinned in the lockfile.

Pan, rotate, zoom, district views, names, housing and billboard toggles, selection, focus, walking and per-city camera restoration work across all three cities. Place links preserve city and selection. Destination sheets use the public reference's bottom-sheet pattern; airports receive a distinct airport panel. The available actions operate this explorer only. Original-game ticketing, NPC/shop actions and travel costs require a separate authorized integration.

Dublin uses the public reference's sedan, SUV, taxi, van and deciduous tree GLBs, verified byte for byte against the live assets. Shared two-lane road data drives both the street geometry and continuous traffic, including vehicular Liffey crossings. Aircraft and helicopters use geometry ported from the public aircraft module. Two staggered jets taxi, depart, disappear in the distance, arrive from the opposite side, land and return to their reserved gates. A helicopter departs, patrols and returns to its clear helipad. Motion pauses outside Dublin, in hidden tabs and under reduced-motion preferences.

Dublin's buildings are authored low-poly interpretations of real counterparts, including distinct civic, cathedral, stadium, university, bridge and waterfront forms. The geography preserves broad river-side and neighbourhood relationships while compressing distances and footprints for exploration. It is not a surveyed street map or address directory. Natural parks, the river and dock water remain open space. Source links and modeling limits are recorded in [the city evidence](docs/research/dublin-city-evidence.md).

Dublin's earlier expansion added source-linked landmarks, a 72×29 airport, detailed roads and parks, and a local cargo/ferry simulation. Historical counts and the removed Round 2 metro remain in the dated reports. Current Round 3 results and generated counts are recorded in [Round 3 verification](docs/verification/round3-notes.md). Port and Howth boat motion are local visual simulations; they do not represent current public timetables or connect to game services.

## Verification and evidence

```sh
npm run check
npm test
npm run build
BASE_URL=http://127.0.0.1:3100 npm run test:browser
BASE_URL=http://127.0.0.1:3100 npm run test:round2
BASE_URL=http://127.0.0.1:3100 npm run test:round3
```

Browser scripts require Playwright with Chrome. If Playwright is not installed in this checkout, set `PLAYWRIGHT_MODULE` to its installed module path. Set `BASE_URL` to the running preview and `OUTPUT_DIR` to the desired evidence directory. `tests/browser-migration.mjs` checks desktop/mobile loading and existing controls across all cities. `tests/browser-dublin.mjs` checks destination/airport sheets, shared links, reduced motion and deterministic flight frames on the development preview. `tests/browser-round2.mjs` checks camera fit/limits, label stability and the development bridge sequence; use `PHASE=bridges` to rerun just that phase, or `EXPECT_PRODUCTION=1` on a production preview to verify UI camera limits without development hooks. `tests/browser-port-cycle.mjs` exercises the real-time Dublin Port cycle. `tests/browser-round3.mjs` verifies current Dublin venues, metro removal, road connectivity and Howth shared-clock behavior. Development-only seek hooks are absent from production builds.

Evidence is under `docs/verification/`: preserved baseline and migration screenshots, asset/source hashes, browser reports and implementation notes. The migration was verified before the Dublin changes. Focused geometry and motion tests check parcel/water boundaries, batching, connected traffic, aircraft continuity and runway scheduling. Screenshots supplement these checks; they do not establish exact architectural or original-game behavioral parity.

Generic GLB models are by [Kenney](https://kenney.nl/assets), as distributed in the public reference, with original materials and textures. The Lagos public map supplied the layout and visual reference. Public source bundles are saved under `reference/public-source/`; original supplied design documents remain reference material under `docs/supplied/`.

## Cloudflare Workers

The browser-side app can be exported by Next.js and served through Workers Static Assets without adding a game backend. The Worker configuration targets the signed-in owner's `Ireland-Life` deployment as `ireland-life` and uses the generated `out/` directory; the preserved `dist/` manifest is separate.

```sh
npm run build:worker
npm run preview:worker
npx wrangler deploy --dry-run
npm run deploy:worker
```

`build:worker` enables Next.js `output: 'export'` only for the Worker build. Normal local development and `npm run build` remain available. `preview:worker` serves the exported build at port 3101. Keep `out/`, `.wrangler/`, credentials and local environment files out of Git. The user explicitly authorized a Workers deployment on 2026-10-09; no original-game account or save mutations are authorized.

Deployment uses [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports) and [Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/get-started/). Runtime source lives in `worker/index.js`; `wrangler.jsonc` selects the account and Worker, asset binding, compatibility date, logs and traces. `/health` is a read-only status endpoint. Missing assets retain a 404 response rather than receiving the app HTML.
