# Public map interaction evidence

Checked 2026-10-08. The live page opened on a signed-in Continue screen; it was left untouched so no player simulation/save was advanced. The interaction chain below is source-backed, not a fresh in-game click-through.

- `city-map-reference.js` about character 152,000: `PlaceTag` calls `onPick(location)`, matching clicks on lot geometry.
- `42xw_uqxgydce.js` about character 140,600: `MapScreen` callback opens `FlightDesk` for airports, otherwise updates selected destination.
- Same bundle characters 132,413-138,000: `PlaceSheet` renders `GameSheet`, title/area/icon/blurb, share link, destination action chips, current NPCs/shops, and state-dependent travel modes/fare/Go action. Its mutation calls require the original player store.
- Airport `FlightDesk` is a separate sheet; the map is not itself a ticket purchase action.

The standalone explorer can reproduce the selection/sheet/share/walk-around presentation and airport distinction. It cannot truthfully display working original fares, NPC presence, purchases, services or travel without the original contracts. Those controls must not be invented.

Source aircraft module `1nc-hajz8ogze.js` freshly downloaded from the original deployed `/_next/static/chunks/` path and SHA-256 matched its saved bytes: `77e6325d021051e10d667398048831af436de2e7fa6b46b8251e72d4bdb6c52c`.
