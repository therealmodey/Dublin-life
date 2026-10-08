# Lagos Map Explorer

A standalone browser recreation of the Lagos Life map, based on the live reference inspected on 8 October 2026: https://lagoslife.eliysites.com/

Includes the Mainland, Island and Lekki coastline; Lagos Lagoon; Third Mainland and Lekki–Ikoyi bridges; 31 city destinations and a Yaba home; low-poly building models; illustrative neighbourhood plots and billboards; pan, pinch/scroll zoom, rotation, district views, place selection and walking controls.

The core coast, road and landmark coordinates follow the public reference map. Landscape props, housing density, billboard artwork, walking avatar, airport and refinery are approximations. The sea-plot marketplace, Port Harcourt, Abuja, multiplayer systems and life simulation are outside this standalone map. No player accounts, personal data or game progress are copied. The original remains unchanged.

Map layout and visual reference: Lagos Life. Generic models by Kenney as distributed by the public reference; included locally with their colour textures. See https://kenney.nl/assets for original asset packs and licensing.

Run `npm install` and `npm run build` to rebuild `dist/map.js`. Serve `dist/` through an HTTP server; for example `python3 -m http.server 5173 --directory dist`. Open http://127.0.0.1:5173/ .

The browser tools `list_map_places` and `focus_map_place` register where WebMCP is supported. All interaction state is local to the page.
