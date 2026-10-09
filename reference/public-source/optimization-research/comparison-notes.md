# Comparison notes

- Graph project was unavailable: the parent reported `index_repository` failed and coverage returned not indexed. Claims below come from direct source reads and saved public JS snapshots.
- The reference snapshots inspected were `work/map-reference.js`, `work/city-map-reference.js`, `work/map-scene-reference.js`, and `work/0c4q12y7izpbh.js`. The optimization evidence came from `city-map-reference.js`: `InstancedMesh`, `LOW_POWER` branches, and a lazy scene component path. These files are saved snapshots, not a fresh crawl or a live performance measurement.
- Clone source: `outputs/lagos-map/src/main.js`, `src/abuja.js`. `main.js` has a continuous RAF loop, shadows/DPR settings, shared GLTF scene cache, clone-and-bounds logic, eager Abuja construction, and repeated Lagos model placements. `abuja.js` has geometry/material reuse and batched instancing.
- Local build inventory: `dist/assets` had 35 GLBs totaling 3,307,748 bytes; `dist/map.js` was 694,208 bytes. These are uncompressed local file sizes, not transfer sizes or proof all files are requested.
- No app source edits, deployment, browser benchmark, or reference application execution performed.
