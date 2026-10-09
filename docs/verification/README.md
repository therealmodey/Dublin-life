# Browser migration verification

`tests/browser-migration.mjs` captures Lagos, Abuja and Dublin at desktop (1440×900) and mobile (390×844), recording screenshots, visible place labels, map readiness, browser errors, failed requests and HTTP errors. It then exercises the existing names, neighbours, billboards, place selection/details, focus, walking entry/exit, districts, zoom, reset, drag and city switching controls.

The baseline screenshots and browser report are in [`baseline/`](baseline/). They were captured from the pre-migration static build at `http://127.0.0.1:5173` before application files changed. They describe observed explorer behavior, not the original Lagos Life game. The first baseline probe treated the walking-control wrapper as visible only when it had its own bounding box. Its children are fixed-position controls, so that wrapper check was insufficient to establish a walking failure. The final harness checks the actual Exit walk button and runtime walking state instead; do not present the earlier wrapper observation as a proven baseline regression.

Run against a local app by setting `BASE_URL` and providing the Playwright module path if it is not installed in the project:

```sh
PLAYWRIGHT_MODULE=/path/to/node_modules/playwright \
BASE_URL=http://127.0.0.1:3100 \
OUTPUT_DIR=docs/verification/current \
node tests/browser-migration.mjs
```

The script launches Chrome in headless mode. Screenshots are visual evidence; the JSON diagnostics and interaction records provide the corresponding browser state. It does not infer visual parity from HTTP responses.

Final implementation evidence is in `final/` and `dublin/`; see [final-notes.md](final-notes.md) for results and limits.
