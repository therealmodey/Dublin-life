# Lagos Life: optimization and hosting

Investigated on 2026-10-08 by three GPT-6 Luna agents, with parent review and live source verification.

## Hosting

The original at https://lagoslife.eliysites.com/ is strongly indicated to serve a Next.js application through **Cloudflare Workers using OpenNext**. Live headers include `cf-placement: local-CDG`, `x-opennext: 1`, and `x-powered-by: Next.js`. Cloudflare DNS and static-asset caching are also confirmed; the checked CSS asset returned `cf-cache-status: HIT` and a one-year immutable cache policy.

Cloudflare documents [`cf-placement`](https://developers.cloudflare.com/workers/configuration/placement/) as identifying where a Worker processed a request, and its [OpenNext documentation](https://developers.cloudflare.com/workers/framework-guides/web-apps/opennext/) describes running Next.js on Workers. These signals support the runtime inference. The hostname itself does not identify a separate hosting product. Public evidence does not reveal the deployment account, database, storage, or every upstream origin.

Our recreation at https://lagos-map-explorer.ikosam12345.chatgpt.site is a separate Sites deployment.

## How the maps reduce rendering work

| Technique found in the public code | Purpose and qualification |
|---|---|
| Instanced repeated meshes | Reuses compatible geometry/materials while supplying each item's transform and color, reducing individual draw submissions. Abuja uses this for landmarks, roads, trees, hills, houses, and props. |
| Static scene batching in Lagos | Groups eligible static geometry after the scene settles. Moving, interactive, skinned, and unsupported meshes are excluded; source objects can be restored when membership or transforms change. |
| Shared geometry, materials, and derived placement data | Avoids rebuilding identical resources and repeatedly calculating the same placement data. |
| Deferred scene and model loading | Uses split chunks and lazy loading paths to defer work until the corresponding view or asset is needed. First use can still incur loading cost. |
| Device-specific quality | Adjusts detail, DPR/antialiasing settings, shadows, generated textures, and some object counts for low-power/mobile devices. |
| Demand-rendering configuration and frame caps | Provides control over frame generation. Actual idle savings depend on whether animations continuously request new frames. |

Evidence: live [Lagos scene/batching chunk](https://lagoslife.eliysites.com/_next/static/chunks/2asxp3jcu780f.js), [shared Abuja geometry/batching chunk](https://lagoslife.eliysites.com/_next/static/chunks/33hpcy7s2rwbe.js), [Abuja map chunk](https://lagoslife.eliysites.com/_next/static/chunks/0c4q12y7izpbh.js), and [Lagos artwork chunk](https://lagoslife.eliysites.com/_next/static/chunks/2c3zakk_tyr-i.js). The decisive chunks fetched today match our saved source byte-for-byte. The live homepage and nested loader chain reference them. These are implementation findings, not measured FPS improvements.

## Priorities for our clone

Abuja already uses instanced batches. The largest source-level opportunities are to batch repeated Lagos scenery, defer construction/loading of the inactive city, cache GLTF bounds, and add a mobile quality tier. Consider demand rendering only with reliable invalidation for walking, traffic, camera motion, and label updates. Capture draw calls, frame times, and loading timing before claiming a performance improvement.

## Delegated deliverables

- [Instructions given to the Luna agents](luna6-investigation-instructions.md)
- [Rendering evidence and limitations](lagos-life-rendering-findings.md)
- [Hosting evidence and limitations](lagos-life-hosting-findings.md)
- [Prioritized clone optimization recommendations](lagos-map-optimization-next-steps.md)

The agents completed research and recommendations. The application and deployment were not changed during this investigation.
