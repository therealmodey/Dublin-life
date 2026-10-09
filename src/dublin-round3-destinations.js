// Real, individually selectable destinations added for the Round 3 city pass.
// Coordinates are authored in the compressed scene; source URLs describe the
// actual Dublin counterpart, not surveyed map coordinates or game services.
const rows = [
  // West and northwest districts: retail, rail employment, music, education, gardens.
  ['dubVenueLiffeyValley','Liffey Valley Shopping Centre','Ballyfermot','shoppingCentre',-67.5,-25,6,4.8,2.8,'liffey-valley','A regional shopping and leisure centre in west Dublin, represented as a compact glazed mall.','https://www.liffeyvalley.ie/'],
  ['dubVenueInchicoreWorks','Iarnród Éireann Inchicore Works','Inchicore','industry',-57.5,-28,8,4.8,2.2,'rail-works','Historic railway engineering and maintenance works, represented with long workshop bays and parallel service tracks.','https://www.irishrail.ie/en-ie/about-us/company-information/iarnrod-eireann-heritage-and-enthusiasts'],
  ['dubVenueCobblestone','The Cobblestone','Smithfield','pub',-60,-24,3.1,2.4,1.8,'smithfield-pub','Smithfield pub known for live Irish traditional music, shown as a narrow corner public house with a pitched roof and session-room frontage.','https://www.cobblestonepub.ie/'],
  ['dubVenueDcu','Dublin City University — Glasnevin Campus','Glasnevin','education',-58.5,-17,6,4.8,2.5,'dcu-campus','DCU’s largest campus, represented by linked academic blocks around a glazed student-centre hall.','https://www.dcu.ie/commsteam/our-campuses'],
  ['dubVenueBotanic','National Botanic Gardens, Glasnevin','Glasnevin','garden',-69.5,-17,6,4.8,2.2,'botanic-glasshouse','The OPW gardens are known for historic glasshouses and plant collections; the compact scene uses a framed glasshouse and planted beds.','https://www.botanicgardens.ie/'],
  ['dubVenueGrangegorman','TU Dublin Grangegorman Campus','Grangegorman','education',-44.5,-28,6,4.8,2.3,'grangegorman-campus','A city-campus destination represented by a group of contemporary teaching blocks around a public forecourt.','https://www.tudublin.ie/explore/our-campuses/grangegorman/'],

  // West and southwest: acute care, sport, civic buildings and food/nightlife.
  ['dubVenueChiCrumlin',"Children’s Health Ireland at Crumlin",'Crumlin','hospital',-58.5,15,6,4.8,2.6,'chi-crumlin','A paediatric teaching hospital campus represented by linked clinical wings, a central glazed entrance and a rooftop cross.','https://www.childrenshealthireland.ie/your-hospital-visit/our-locations/chi-at-crumlin/'],
  ['dubVenueNationalStadium','National Stadium','South Circular Road','sports',-71,23,6,4.8,2.4,'national-boxing-stadium','The purpose-built Irish boxing arena, modeled as a rectangular boxing hall with broad roof trusses and a raised light monitor.','https://www.thenationalstadium.ie/thenationalstadium'],
  ['dubVenueStLukes','St Luke’s Hospital, Rathgar','Rathgar','hospital',-57,23,6,4.8,2.2,'st-lukes-rathgar','The HSE oncology site at Rathgar, represented by a garden-set hospital block with a distinct entrance pavilion.','https://www.stlukesnetwork.ie/about-us/locations-and-visiting/st-lukes-hospital-rathgar/'],
  ['dubVenueEyeEar','Royal Victoria Eye and Ear Hospital','South Inner City','hospital',-44.5,21.5,6,4.8,2.2,'victoria-eye-ear','A specialist hospital destination with a red-brick institutional frontage and paired ward wings.','https://www.rveeh.ie/contact-us/'],
  ['dubVenueOdonoghue','O’Donoghue’s, Merrion Row','South City Centre','pub',-66,13.5,3.1,2.4,1.8,'odonoghues-merrion','A long-running traditional pub associated with Irish music, shown with a warm timber fascia and upper sash windows.','https://www.odonoghues.ie/contact'],
  ['dubVenueGaiety','The Gaiety Theatre','South City Centre','theatre',-66,22,3.5,2.8,2.6,'gaiety-theatre','A Victorian theatre destination with a tall proscenium frontage, layered marquee and deep pitched roof.','https://www.gaietytheatre.ie/'],

  // Northside inner districts: music, retail, culture and recreation.
  ['dubVenueLongHall','The Long Hall','South Great George’s Street','pub',-33,-26.5,3.1,2.4,1.8,'long-hall-victorian','A Victorian pub celebrated for preserved woodwork and stained glass, modeled with a narrow bay rhythm and deep cornice.','https://www.visitdublin.com/the-long-hall-pub'],
  ['dubVenuePalace','The Palace Bar','Fleet Street','pub',-36.5,-26.5,3.1,2.4,1.9,'palace-bar-victorian','Fleet Street’s Victorian heritage pub, represented with a red-brick corner bay, tall sash windows and copper-toned roof edge.','https://www.thepalacebardublin.com/'],
  ['dubVenueWorkmans','The Workman’s Club','Wellington Quay','musicVenue',-33,-35,3.2,2.6,2.3,'workmans-club','A multi-floor live music and club venue in a historic quay building, shown with stacked brick floors and a lit ground-floor entrance.','https://theworkmansclub.com/contact/'],
  ['dubVenueButtonFactory','Button Factory','Temple Bar','musicVenue',-36.5,-35,3.2,2.6,2.3,'button-factory','Temple Bar live music venue, modeled as a converted warehouse with a high stage hall, deep fascia and event marquee.','https://buttonfactory.ie/about-us'],
  ['dubVenueVicarStreet','Vicar Street','The Liberties','musicVenue',-43.5,-24,3.3,2.7,2.5,'vicar-street','A live performance venue on Thomas Street, modeled with a broad brick hall, roof trusses and a projecting ticket canopy.','https://www.vicarstreet.com/about-us.html'],

  // Southside inner districts: distinctive retail and food destinations.
  ['dubVenueIlac','The ILAC Shopping Centre','Henry Street','shoppingCentre',-37.5,20.5,6,4.8,2.5,'ilac-mall','Dublin’s first shopping centre, represented as a multi-level glazed mall with a legible central atrium roof.','https://www.ilac.ie/about-us'],
  ['dubVenueJervis','Jervis Shopping Centre','North City Centre','shoppingCentre',-42.5,15,6,4.8,2.6,'jervis-mall','A retail and dining centre by Mary Street, represented with broad window bands and a high glazed roof.','https://jervis.ie/'],
  ['dubVenueStephensCentre','Stephen’s Green Shopping Centre','South City Centre','shoppingCentre',-41.5,35.8,6,4.8,2.5,'stephens-green-glass-mall','The glass-roofed city-centre mall is represented with a bright barrel-vault roof and stepped shop fronts.','https://stephensgreen.com/'],
  ['dubVenueGeorgesArcade','George’s Street Arcade','South City Centre','market',-39.5,24.5,3.4,2.7,2.1,'georges-street-arcade','A covered Victorian market arcade shown with a long glazed ridge, repeated shop bays and a red-brick entrance.','https://georgesstreetarcade.ie/'],
  ['dubVenuePowerscourt','Powerscourt Townhouse Centre','South William Street','shoppingCentre',-54,38,6,4.8,2.4,'powerscourt-townhouse','A Georgian townhouse converted to independent retail and dining, represented with a restored townhouse façade and courtyard roof glazing.','https://www.powerscourtcentre.ie/powerscourt-centre-location'],

  // Rathmines, Crumlin and south suburbs: major employers, culture, hospitality.
  ['dubVenueRte','RTÉ Donnybrook','Donnybrook','office',-31,43.5,6,4.8,2.8,'rte-broadcast-campus','RTÉ’s Donnybrook broadcast campus, modeled as linked studio blocks with a taller transmission mast and dark acoustic glazing.','https://about.rte.ie/contact/rte-reception/'],
  ['dubVenueUcd','University College Dublin — Belfield','Belfield','education',-41.5,47,6,4.8,2.8,'ucd-belfield','UCD’s main Belfield campus, represented by a central academic hall and repeated low campus wings.','https://shoponline.ucd.ie/contact/'],
  ['dubVenueStVincent','St Vincent’s University Hospital','Elm Park','hospital',-12.5,44.5,6,4.8,2.7,'svuh-elm-park','An academic teaching hospital represented by a taller glazed clinical block, lower wards and an emergency entrance canopy.','https://www.svuh.ie/'],
  ['dubVenueRCSI','RCSI University of Medicine and Health Sciences','St Stephen’s Green','education',-53.5,44.5,6,4.8,2.6,'rcsi-medical-campus','RCSI’s city-centre medical campus is represented with historic stone frontage joined to a contemporary teaching wing.','https://www.rcsi.com/dublin/student-life/life-on-campus/our-campus'],
  ['dubVenueBewleys','Bewley’s Grafton Street Café','Grafton Street','cafe',-46.2,39,3.2,2.5,2,'bewleys-cafe','The Grafton Street café destination is modeled with an ornate multi-bay shopfront, striped awning and upper café windows.','https://www.bewleys.com/'],
  ['dubVenueAvoca','Avoca Suffolk Street','South City Centre','retail',-46,43,3.2,2.5,2,'avoca-suffolk','The seven-level city store combines retail, a food market and café; the compact landmark uses stacked floors and an upper terrace.','https://avoca.com/pages/suffolk-street'],

  // South and southeast: restaurant, pub, shopping and performance venues.
  ['dubVenueFallonByrne','Fallon & Byrne, Exchequer Street','South City Centre','market',-1,42.5,3.2,2.5,2,'fallon-byrne-foodhall','A food hall and restaurant destination in a heritage building, modeled with a broad shopfront and cellar-level entry.','https://www.fallonandbyrne.com/locations-contact-us/'],
  ['dubVenueLeoBurdock','Leo Burdock, Christchurch','The Liberties','cafe',-1,45.5,3.1,2.3,1.8,'leo-burdock-christchurch','The Christchurch fish-and-chip shop founded in 1913, shown as a compact traditional takeaway with striped canopy and tiled fascia.','https://www.leoburdock.com/contact/'],
  ['dubVenueWindingStair','The Winding Stair','Lower Ormond Quay','cafe',-13,40.5,3.1,2.3,1.8,'winding-stair','A restaurant overlooking the Liffey, represented as a narrow Georgian quay building with an upper dining-room bay.','https://www.winding-stair.com/'],
  ['dubVenueWoollenMills','The Woollen Mills','Lower Ormond Quay','cafe',-13,37.5,3.1,2.3,1.8,'woollen-mills','A restaurant in a historic quayside building, shown with a stepped roof and layered window bays.','https://www.winding-stair.com/'],
  ['dubVenueSugarClub','The Sugar Club','Leeson Street','musicVenue',-20,42.5,3.2,2.5,2.1,'sugar-club','An intimate music venue with tiered seating and cinema roots, represented by a dark auditorium block, screen bay and lit marquee.','https://thesugarclub.com/terms-conditions/'],
  ['dubVenueOlympia','3Olympia Theatre','Dame Street','theatre',-20,45.5,3.3,2.6,2.4,'olympia-theatre','The Dame Street theatre is modeled with a tall historic frontage, projecting marquee and narrow vertical window rhythm.','https://www.3olympia.ie/your-visit/how-to-find-us'],

  // Northeast districts: health, civic and employment destinations.
  ['dubVenueBeaumont','Beaumont Hospital','Beaumont','hospital',25,-27,6,4.8,2.8,'beaumont-hospital','A northside teaching hospital campus represented with a tall central clinical block and lower ward wings.','https://www.beaumont.ie/contact'],
  ['dubVenueCrokeZoo','Dublin Zoo','Phoenix Park','attraction',25,-15,6,4.8,2.2,'dublin-zoo','The Phoenix Park zoo destination is represented by a visitor-entry arch and two compact habitat pavilions; the adjoining park remains separately selectable.','https://www.dublinzoo.ie/plan-your-visit/getting-here/'],
  ['dubVenueNac','Sport Ireland National Aquatic Centre','Blanchardstown','sports',21.5,-36,6,4.8,2.6,'national-aquatic-centre','The aquatic centre is represented with a broad pool hall, a high curved roof and a separate leisure-pool volume.','https://www.sportirelandcampus.ie/customer-charter'],
  ['dubVenueHelix','The Helix','Glasnevin','theatre',20,-29.5,3.2,2.5,2.2,'helix-performance-venue','DCU’s multi-space arts venue is represented with a broad performance hall, a curved roof and a glazed lobby.','https://www.thehelix.ie/'],
  ['dubVenueWorkplace','The O’Reilly Theatre','North Inner City','theatre',16.5,-29.5,3.2,2.5,2.2,'oreilly-theatre','The O’Reilly Theatre at Belvedere College is represented as a compact school performance hall with a pitched roof and stage portal.','https://www.aist.ie/dublin'],

  // Southeast waterfront and inner docklands: energy, offices and retail.
  ['dubVenuePoolbeg','Poolbeg Energy Hub','Poolbeg','industry',20.5,35,8,4.8,7.8,'poolbeg-chimneys','Poolbeg’s retired red-and-white thermal-station stacks remain a Dublin skyline landmark beside the active energy site; two banded stacks rise above an industrial turbine hall.','https://esb.ie/what-we-do/generation-and-trading/poolbeg---thermal'],
  ['dubVenueWasteEnergy','Dublin Waste to Energy','Poolbeg','industry',18.5,47.2,8,3.8,3.1,'poolbeg-waste-to-energy','The Poolbeg waste-to-energy facility is represented with a large process hall, enclosed conveyor and a single vent stack.','https://www.epa.ie/our-services/compliance--enforcement/whats-happening/sites-in-the-news/current-sites-in-the-news-/sites-in-the-news-archive/dublin-waste-to-energy-w0232-01/'],
  ['dubVenueEsb','ESB Head Office','Fitzwilliam Street','office',34.5,11.5,6,4.8,3,'esb-head-office','ESB’s Fitzwilliam Street head office is represented with a formal masonry base, glass upper floors and roof plant.','https://esb.ie/who-we-are/contact-us'],
  ['dubVenueGoogle','Google Dublin — Gordon House','Grand Canal Dock','office',27,28,3.8,3.2,3.6,'google-gordon-house','Google’s Gordon House address at Barrow Street is represented as a contemporary glazed docklands office block.','https://about.google/company-info/locations/'],
  ['dubVenueSalesforce','Salesforce Tower Dublin','North Docklands','office',-13.5,-14.5,6,4.8,4.2,'salesforce-tower','A source-linked docklands employment destination, represented by four interconnected mid-rise buildings, a central roof garden and a shared plaza.','https://www.salesforce.com/company/locations/emea/ireland/'],
  ['dubVenueCityHall','Dublin City Hall','Wood Quay','civic',-8,10,3.2,2.5,2.4,'city-hall-georgian','The Georgian civic building is represented with a symmetrical stone frontage, central portico and cupola.','https://www.dublincity.ie/council/about-dublin-city-council/city-hall'],
];

export const DUBLIN_ROUND3_DESTINATIONS = Object.freeze(rows.map(([id,name,area,kind,x,z,w,d,h,signature,description,sourceUrl])=>Object.freeze({
  id,name,area,emoji:kind==='pub'?'🍺':kind==='cafe'?'🍽️':kind==='hospital'?'🏥':kind==='office'?'🏢':kind==='industry'?'⚡':kind==='education'?'🎓':kind==='theatre'||kind==='musicVenue'?'🎭':kind==='shoppingCentre'||kind==='retail'?'🛍️':kind==='sports'?'🏟️':kind==='garden'?'🌿':'📍',
  x,z,w,d,h,kind,signature,
  description,
  city:'dublin',arrivalX:x,arrivalZ:z+d/2+.7,sourceUrl,
})));
