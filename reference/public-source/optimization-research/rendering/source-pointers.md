# Rendering investigation scratch: source pointers

All byte positions refer to the saved one-line JavaScript inputs under `work/` in the Lagos Life checkout.

- `work/city-map-reference.js` is byte-identical to `work/2asxp3jcu780f.js` (155,825 bytes). Lagos `MergeStatic`: 104,900–112,500; scans/eligibility: 105,300–107,500; group construction: 107,000–112,500; reveal/restoration and resource cleanup: 110,000–112,500.
- `work/map-reference.js` (Abuja batch definitions): shared geometry/materials 233–2,000; InstancedMesh renderer 30,523–31,210; aggregate placed-object grouping 35,000–36,500.
- `work/0c4q12y7izpbh.js` (Abuja city map): InstancedMesh helper 39,960–40,800; grouped feature list 42,274–43,050; memoized map data and canvas settings 45,050–48,000.
- `work/map-scene-reference.js` (Lagos landmark art): shared primitive geometry/material cache 10,329–11,300; phone detail reduction in lot-art placement 10,148–10,400; tree/rail-style instancing 11,846–12,600.
- `work/2asxp3jcu780f.js` and `work/city-map-reference.js` match exactly. Renderer settings 152,634–153,500; DPR/AA settings source around 150,402; shadow setup around 148,234; GLB model paths and memoized model normalization around 112,000–118,000.
- `work/0aebqb-r2y4mc.js` identifies the lazy loader for module 67575 and loads `static/chunks/33hpcy7s2rwbe.js` plus `static/chunks/2c3zakk_tyr-i.js`.
- `work/43isb8bjdiv7j.js` identifies the Abuja map route chunk `static/chunks/0c4q12y7izpbh.js`.

Live check performed 2026-10-08: homepage script list includes `43isb8bjdiv7j.js`; its current loader references the Abuja route and the Lagos route loader. The Lagos route loader references the shared art chunk and Lagos scene chunk. Four decisive source chunks match the saved inputs byte-for-byte; `live-verification.json` contains sizes and SHA-256 hashes. No live FPS/device measurements performed.
