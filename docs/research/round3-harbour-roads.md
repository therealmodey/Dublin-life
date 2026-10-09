# Round 3: Howth harbour and connected Dublin roads

This work adds a **compressed local interpretation**, not a surveyed reconstruction or a real harbour booking system. The new place is labeled Howth Harbour and remains separate from the existing Dublin Port cycle and Liffey bridge controller.

## Harbour references and scene decisions

- Ireland's Department of Agriculture, Food and the Marine describes Howth Fishery Harbour Centre as a north-side-of-Howth harbour with a western trawler basin entered between two bull-noses and an eastern yacht area with swing moorings and a marked channel to the yacht-club marina. The scene therefore distinguishes working fishing piers from a marina/launch basin: [Fishery Harbour Centres](https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/publications/fishery-harbour-centres/).
- The Department records a dedicated Fishing Pier redevelopment, including 134m of new quay wall and separate fishing and marine-tourism/leisure activity. The compressed scene uses dedicated fishing piers, a market/gear shore, and separate sailing-club frontage; dimensions are illustrative: [Howth Fishing Pier opening](https://www.gov.ie/en/department-of-agriculture-food-and-the-marine/press-releases/mcconalogue-officially-names-the-new-10-million-fishing-pier-at-howth-fishery-harbour-centre/).
- Fingal’s protected-structure records identify the Howth East Pier lighthouse as a granite ashlar lighthouse with an attached two-storey keeper’s house. The scene uses an octagonal stone tower and attached house on the breakwater head: [Fingal protected structures, RPS 565](https://www.fingal.ie/sites/default/files/2022-02/appendix-5.pdf).

The boat fleet is a local visual simulation. It has four distinct hulls, repeated route curves, separate track bands, berth/boarding dwell, and deterministic shared elapsed-time updates. It does not model actual vessels, tides, schedules, or passenger services.

## Road graph approach

The map road source has two layers: authored centerline definitions, then paired lane centerlines offset from each route. A route intersection alone is not enough; pavement width, rounded corners, lot footprints, and the actual airport/port approach geometry must all agree. The round-three road tests validate shared endpoints and true segment intersections with the road-width tolerance, verify every authored district is in one connected component, sample the full lane footprint against lots/map bounds, and check junction aprons and interruptions in kerb/footway strips. Both raw routes and the rounded sampled ribbon centres form one component. Airport access is also checked against actual raised airport solids, including the directional island, roundabout and perimeter fence gate.

Roads and destination parcels were reconciled together, with full footprint clearance checks. The airport access connection follows the existing arrivals road and its roundabout approach rather than cutting through the airport parking area or roundabout island. The Howth spur terminates on reclaimed west-shore land; harbor water is a separate east-side patch at x=69.3..94.5 and z=-64.5..-27.5, with no overlap with the existing port basin at z≈[-17,17].

## Verification

Run `node tests/dublin-second-harbour.test.mjs` for shared-clock replay, complete route phases, boat corner-in-water checks, boat separation, and berth/pier clearances. Run `node tests/dublin-road-details.test.mjs` and the dedicated road-graph test for street connectivity, lot clearance, centerline crossings, and junction pavement/curb geometry. The runtime owner is responsible for the combined world lifecycle/selectable-place integration check.
