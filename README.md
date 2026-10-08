# Lagos Map Explorer

A standalone browser recreation of the Lagos Life map, based on the live reference inspected on 8 October 2026: https://lagoslife.eliysites.com/

Includes the Mainland, Island and Lekki coastline; Lagos Lagoon; Third Mainland and Lekki–Ikoyi bridges; 31 city destinations and a Yaba home; low-poly building models; illustrative neighbourhood plots and billboards; pan, pinch/scroll zoom, rotation, district views, place selection and walking controls.

The Lagos coast, road and landmark coordinates follow the public reference map. Landscape props, housing density, billboard artwork, walking avatar, airport and refinery are approximations. The sea-plot marketplace, Port Harcourt, multiplayer systems and life simulation are outside this standalone map. No player accounts, personal data or game progress are copied. The original remains unchanged.

Map layout and visual reference: Lagos Life. Generic models by Kenney as distributed by the public reference; included locally with their colour textures. See https://kenney.nl/assets for original asset packs and licensing.

Run `npm install` and `npm run build` to rebuild `dist/map.js`. Serve `dist/` through an HTTP server; for example `python3 -m http.server 5173 --directory dist`. Open http://127.0.0.1:5173/ .

The browser tools `list_map_places` and `focus_map_place` register where WebMCP is supported. All interaction state is local to the page.

## Abuja extension

Abuja is connected to Lagos through the city selector, matching the reference’s separate city views. The Abuja map includes 69 selectable landmarks, 355 scenery houses, the exact road and roundabout coordinates, Jabi Lake, Aso Rock, Zuma Rock, government buildings, parks, and an airport. The landmark geometry and neighbourhood placement are adapted from numeric public reference descriptors; the airport planes and billboards are simplified. Display options work across both cities, and landmark focus switches to the appropriate city. Camera positions are preserved when switching. Open `?city=abuja` to start in Abuja.

This remains a standalone map explorer, without the original game’s accounts, travel simulation, or progress.

## Dublin expansion

Dublin is available through the same city selector. The authored miniature map includes 33 selectable landmarks, the River Liffey and six crossings, the Ha’penny and Samuel Beckett bridges, Trinity College, Temple Bar, the Spire, Phoenix Park, St Stephen’s Green, Georgian terraces, Croke Park, the Aviva Stadium, Docklands, an airport and illustrative shops and service offices. It preserves broad neighbourhood relationships while compressing geography for exploration. This is not a surveyed street map. Embassy and Nigerian visa-processing locations remain outside Dublin.

Repeated Dublin scenery uses 1,968 instances in 11 geometry batches, plus landmark signage and bridge curves. Names, neighbourhoods and billboards can be toggled; district buttons, landmark focus and walking work across all three cities. Walking excludes the Liffey except at bridges, the dock basin and the bay. Open `?city=dublin` to start in Dublin.

Dublin landmark references: [Visit Dublin bridges](https://www.visitdublin.com/guides/seven-dublin-bridges), [Samuel Beckett Bridge](https://www.visitdublin.com/samuel-beckett-bridge), and [Dublin city map](https://assets-eu-01.kc-usercontent.com/aa24ba70-9a12-01ae-259b-7ef588a0b2ef/25ae3768-e605-4166-a2b6-ae8e11f09c6e/Dublin%20City%20Map%200923-ONLINE-2.pdf). The Dublin scene is original procedural geometry; generic shop/service locations are illustrative game content.

`npm test` verifies Abuja geometry and Dublin landmark transforms, batching and river/dock walking boundaries. Browser checks cover the 1440×900 desktop and 390×844 phone layouts, city switching, selection/focus, district navigation, walking mode and display controls. No simulation or account integration is included in this map update.
