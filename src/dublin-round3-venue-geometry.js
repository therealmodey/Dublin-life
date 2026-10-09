// Individually authored landmark massings for the Round 3 real-place set.
// Geometry is intentionally compact and illustrative; metadata source URLs
// identify the real counterpart, not surveyed parcel dimensions.
const brick='#a96750';
const pale='#d2c5a8';
const glass='#56808a';
const dark='#343d43';
const green='#507956';

export function buildDublinRound3Venue({lot,w,d,b,c,building,roof,shape}) {
  const X=w/2,Z=d/2;
  const mass=(x,z,bw,bd,h,col=brick)=>building(x,z,bw,bd,h,col);
  const box=(x,y,z,bw,bh,bd,col)=>b(x,y,z,bw,bh,bd,col);
  const glassBand=(x,y,z,bw,bd=.06)=>box(x,y,z,bw,.12,bd,glass);
  const signature=lot.signature;
  const features=[];
  const add=(name,draw)=>{draw();features.push(name);};

  if(signature.includes('mall')||signature==='liffey-valley'||signature==='powerscourt-townhouse'){
    // Malls read as broad retail podiums with a legible roof and public forecourt.
    mass(0,-.12,w*.82,d*.66,1.35,signature==='powerscourt-townhouse'?pale:glass);
    box(0,1.43,-.1,w*.9,.16,d*.72,dark);
    for(const x of [-X*.55,0,X*.55])glassBand(x,.78,Z*.48,w*.24,.05);
    box(0,.12,Z*.78,w*.76,.05,d*.14,'#b7ad99');
    box(0,.2,Z*.56,w*.28,.08,.3,green);
    if(signature.includes('glass')){shape('vault',0,1.58,0,w*.78,.6,d*.62,glass);features.push('barrel-vault-glazed-roof');}
    else {box(0,1.58,0,w*.76,.1,d*.12,glass);features.push('long-rooflight');}
    if(signature==='liffey-valley'){mass(-X*.32,-Z*.25,w*.22,d*.2,1.65,pale);features.push('regional-leisure-anchor');}
    if(signature==='ilac-mall'){box(X*.31,1.72,-Z*.16,w*.17,.4,d*.25,glass);features.push('library-side-rooflight');}
    if(signature==='jervis-mall'){for(const x of [-X*.3,X*.3])box(x,1.52,Z*.2,.14,.36,.16,pale);features.push('paired-stone-entry-columns');}
    if(signature==='powerscourt-townhouse'){for(const x of [-X*.22,0,X*.22])box(x,1.5,Z*.19,.09,.7,.13,pale);roof(0,1.6,-Z*.2,w*.5,d*.3,dark);features.push('georgian-townhouse-front');}
    features.push('multi-level-retail-podium','public-entry-forecourt','display-window-bands');
  } else if(signature==='rail-works'){
    for(const x of [-X*.57,0,X*.57]){
      mass(x,-.05,w*.24,d*.7,1.7,brick);roof(x,1.78,-.05,w*.25,d*.73,dark);
      box(x,.45,Z*.24,.09,.85,d*.48,pale);
    }
    for(const z of [-Z*.58,0,Z*.58])box(0,.08,z,w*.85,.05,.11,dark);
    features.push('three-long-workshop-sheds','parallel-service-tracks','repeated-high-bay-doors');
  } else if((signature.includes('campus')&&signature!=='rte-broadcast-campus')||signature==='ucd-belfield'||signature==='rcsi-medical-campus'){
    const campusColors=signature==='rcsi-medical-campus'?[pale,glass]:[pale,'#bac0b7'];
    mass(-X*.48,-Z*.32,w*.31,d*.38,1.65,campusColors[0]);
    mass(X*.42,-Z*.32,w*.28,d*.4,1.35,campusColors[1]);
    mass(-X*.35,Z*.42,w*.42,d*.25,1.05,brick);
    mass(X*.39,Z*.4,w*.35,d*.24,1.2,pale);
    box(0,.1,0,w*.25,.05,d*.25,green);
    box(0,.82,Z*.72,w*.42,.82,.12,glass);
    if(signature==='dcu-campus'){box(0,1.78,-Z*.32,w*.27,.12,d*.38,glass);features.push('glazed-student-centre');}
    if(signature==='grangegorman-campus'){box(-X*.48,1.75,-Z*.32,w*.34,.1,d*.42,dark);features.push('retained-industrial-hall');}
    if(signature==='ucd-belfield'){roof(0,1.78,-Z*.32,w*.27,d*.4,green);features.push('central-academic-hall');}
    if(signature==='rcsi-medical-campus'){box(0,1.45,-Z*.32,w*.31,.12,d*.42,glass);features.push('historic-stone-range-and-glazed-teaching-wing');}
    features.push('linked-campus-blocks','shared-courtyard','distinct-low-academic-wings');
  } else if(signature==='botanic-glasshouse'){
    box(0,.12,0,w*.88,.06,d*.84,green);
    mass(0,-Z*.08,w*.48,d*.68,1.5,glass);
    shape('vault',0,1.58,-Z*.08,w*.55,.65,d*.74,glass);
    for(const x of [-X*.26,0,X*.26])box(x,1.58,-Z*.08,.04,.04,d*.74,pale);
    for(let x=-X*.34;x<=X*.35;x+=w*.17)box(x,.95,-Z*.08,.045,1.18,d*.67,pale);
    box(0,1.8,-Z*.08,w*.46,.08,.12,glass);
    features.push('framed-victorian-glasshouse','glazed-ridge-and-roof-bays','planted-formal-beds');
  } else if(signature==='national-boxing-stadium'){
    // The National Stadium is a rectangular boxing hall, not a circular bowl.
    mass(0,-Z*.12,w*.82,d*.68,1.75,pale);
    box(0,1.82,-Z*.12,w*.9,.16,d*.76,dark);
    box(0,1.9,-Z*.12,w*.56,.08,d*.45,glass);
    box(0,.82,Z*.36,w*.65,.9,.11,brick);
    for(const x of [-X*.26,X*.26])box(x,.65,Z*.43,.12,.7,.12,pale);
    features.push('rectangular-boxing-arena','broad-roof-trusses','raised-light-monitor','deep-public-entry');
  } else if(signature==='chi-crumlin'||signature==='st-lukes-rathgar'||signature==='victoria-eye-ear'||signature==='svuh-elm-park'||signature==='beaumont-hospital'){
    mass(-X*.37,-Z*.3,w*.39,d*.42,signature==='beaumont-hospital'?3.2:2.15,pale);
    mass(X*.32,-Z*.24,w*.34,d*.52,1.65,brick);
    mass(-X*.14,Z*.38,w*.58,d*.24,1.2,'#e3ded0');
    box(0,.12,Z*.72,w*.36,.06,d*.11,green);
    box(0,1.04,Z*.52,w*.5,.12,.07,glass);
    if(signature==='chi-crumlin'){box(X*.38,2.45,-Z*.3,.12,.55,.12,'#bd4d47');box(X*.38,2.45,-Z*.3,.55,.12,.12,'#bd4d47');features.push('paediatric-cross-rooftop-marker');}
    if(signature==='st-lukes-rathgar'){box(-X*.37,2.23,-Z*.3,w*.42,.11,d*.44,green);features.push('garden-set-clinical-wing');}
    if(signature==='victoria-eye-ear'){box(0,1.14,Z*.49,w*.35,.5,.06,brick);features.push('red-brick-institutional-frontage');}
    if(signature==='svuh-elm-park'||signature==='beaumont-hospital'){mass(0,-Z*.48,w*.36,d*.24,3.15,glass);features.push('taller-glazed-clinical-tower');}
    features.push('linked-clinical-wings','recessed-main-entrance','low-ward-blocks');
  } else if(signature==='poolbeg-chimneys'){
    mass(0,.05,w*.82,d*.5,1.65,brick);
    for(const x of [-X*.42,X*.42]){
      c(x,4.1,-Z*.28,.27,5.8,'#a9513e');
      for(const y of [2.3,3.9,5.5])c(x,y,-Z*.28,.29,.18,pale);
      c(x,7,-Z*.28,.3,.28,dark);
    }
    box(0,1.8,Z*.35,w*.24,.2,d*.1,dark);
    features.push('two-tall-banded-chimneys','paired-red-and-white-stack-markings','turbine-hall','roof-galleries');
  } else if(signature==='poolbeg-waste-to-energy'){
    mass(-X*.1,0,w*.78,d*.67,2.1,pale);
    box(0,1.15,Z*.7,w*.58,.22,.16,brick);
    box(0,2.24,-Z*.25,w*.34,.08,d*.24,glass);
    c(X*.36,2.55,-Z*.35,.19,3.7,dark);
    box(X*.28,1.45,0,w*.18,.3,d*.72,'#aaa99e');
    features.push('large-process-hall','enclosed-transfer-conveyor','single-vent-stack','high-clerestory');
  } else if(signature==='google-gordon-house'){
    // Gordon House is a broad office block with a planted roof, not a tower.
    mass(0,-Z*.08,w*.78,d*.68,2.05,'#b16c55');
    box(0,2.12,-Z*.08,w*.82,.12,d*.72,green);
    for(const y of [.55,1.05,1.55])glassBand(0,y,Z*.27,w*.68,.055);
    box(-X*.38,.95,-Z*.42,.08,1.7,d*.28,pale);
    features.push('broad-midrise-campus-block','roof-garden','horizontal-glass-bands','brick-and-pale-frame');
  } else if(signature==='salesforce-tower'){
    // Four connected mid-rise buildings with a roof garden, per Salesforce's
    // published Dublin campus description; no slender skyscraper silhouette.
    for(const [x,z,bw,bd,h] of [[-X*.38,-Z*.28,w*.31,d*.38,3.0],[X*.38,-Z*.28,w*.31,d*.38,3.25],[-X*.38,Z*.34,w*.31,d*.37,2.7],[X*.38,Z*.34,w*.31,d*.37,2.9]]){
      mass(x,z,bw,bd,h,glass);
      box(x,h+.08,z,bw*1.05,.12,bd*1.05,dark);
      for(let y=.55;y<h;y+=.48)glassBand(x,y,z+bd*.51,bw*.8,.04);
    }
    box(0,.35,0,w*.3,.16,d*.26,green);
    box(0,1.55,0,w*.22,.12,.24,pale);
    features.push('four-interconnected-midrise-volumes','central-roof-garden','shared-campus-plaza','horizontal-blue-glass-bands');
  } else if(signature==='esb-head-office'){
    mass(0,-Z*.18,w*.76,d*.62,1.3,pale);mass(0,-Z*.18,w*.58,d*.42,2.65,glass);
    box(0,2.73,-Z*.18,w*.62,.16,d*.46,dark);
    for(const x of [-X*.3,X*.3])box(x,.68,Z*.35,.08,1.15,.07,pale);
    features.push('formal-masonry-base','glazed-upper-floors','setback-roof-plant');
  } else if(signature==='city-hall-georgian'){
    mass(0,-Z*.12,w*.82,d*.64,1.2,pale);
    for(const x of [-X*.31,-X*.1,X*.1,X*.31])box(x,.92,Z*.22,.1,1.05,.12,pale);
    box(0,1.42,Z*.31,w*.48,.16,.22,pale);
    c(0,1.58,0,.46,.18,pale);shape('dome',0,1.85,0,.42,.35,.42,pale);
    features.push('symmetrical-georgian-facade','central-portico','domed-round-hall','low-stone-roofline');
  } else if(signature==='city-hall-georgian') {
    features.push('georgian-civic-pavilion');
  } else if(signature.includes('pub')||signature.includes('victorian')||signature==='smithfield-pub'||signature==='odonoghues-merrion'){
    mass(0,-Z*.18,w*.72,d*.58,1.65,signature.includes('victorian')?brick:'#7c5140');
    for(const x of [-X*.3,0,X*.3]){
      box(x,.9,Z*.16,w*.17,.58,.06,glass);
      box(x,1.36,Z*.2,w*.23,.1,.15,pale);
      box(x,1.76,-Z*.18,.07,.26,.08,dark);
    }
    box(0,.56,Z*.39,w*.7,.18,.12,signature==='long-hall-victorian'?'#79543a':green);
    roof(0,1.86,-Z*.18,w*.78,d*.63,signature==='smithfield-pub'?brick:dark);
    if(signature==='long-hall-victorian'){box(0,1.51,Z*.23,w*.74,.13,.13,pale);features.push('ornate-victorian-cornice');}
    if(signature==='odonoghues-merrion'){box(-X*.31,1.97,-Z*.1,.16,.42,.14,brick);features.push('pub-chimney-and-timber-fascia');}
    if(signature==='palace-bar-victorian')box(X*.33,.9,Z*.22,.18,1.85,.16,'#9c453a');
    if(signature==='smithfield-pub')features.push('brick-pitched-public-house-roof');
    features.push('narrow-street-frontage','repeated-sash-window-bays','deep-cornice','pitched-roof-profile');
  } else if(signature==='botanic-glasshouse'){
    features.push('glazed-garden-pavilion');
  } else if(signature==='rte-broadcast-campus'){
    mass(-X*.37,-Z*.22,w*.33,d*.54,1.8,pale);mass(X*.29,-Z*.22,w*.4,d*.48,2.25,dark);
    mass(-X*.2,Z*.36,w*.34,d*.24,1.25,glass);
    box(X*.35,2.45,-Z*.22,.12,2.1,.12,dark);box(X*.35,3.58,-Z*.22,.55,.09,.55,brick);
    features.push('linked-broadcast-studios','acoustic-dark-glazing','transmission-mast','studio-courtyard');
  } else if(signature==='national-aquatic-centre'){
    mass(0,0,w*.8,d*.6,1.75,glass);shape('vault',0,1.83,0,w*.86,.55,d*.66,glass);
    mass(X*.27,Z*.18,w*.31,d*.27,1.2,pale);
    box(0,.4,0,w*.52,.12,d*.31,'#4e9eae');
    features.push('broad-pool-hall','high-curved-roof','separate-leisure-pool-volume');
  } else if(signature==='helix-performance-venue'){
    mass(-X*.15,0,w*.66,d*.65,1.8,dark);shape('vault',-X*.15,1.88,0,w*.71,.45,d*.71,glass);
    box(X*.34,.9,Z*.35,w*.3,1.1,.11,glass);box(X*.34,1.55,Z*.4,w*.32,.12,.2,pale);
    features.push('curved-performance-hall','glazed-lobby','separate-stage-volume');
  } else if(signature==='oreilly-theatre'){
    mass(0,-Z*.14,w*.76,d*.61,1.55,pale);roof(0,1.72,-Z*.14,w*.81,d*.68,brick);
    box(0,.88,Z*.36,w*.42,.84,.08,dark);box(0,1.4,Z*.4,w*.53,.13,.1,brick);
    features.push('school-performance-hall','pitched-roof','stage-portal');
  } else if(signature.includes('theatre')||signature.includes('gaiety')||signature.includes('olympia')){
    mass(0,-Z*.12,w*.8,d*.62,2.0,brick);
    box(0,1.25,Z*.32,w*.68,.16,.2,pale);box(0,1.45,Z*.39,w*.74,.32,.13,'#a33935');
    box(0,1.65,Z*.46,w*.58,.09,.04,'#dfb454');
    for(const x of [-X*.32,X*.32])box(x,1.03,Z*.28,.22,.82,.06,glass);
    roof(0,2.1,-Z*.12,w*.84,d*.66,dark);
    features.push('tall-proscenium-front','layered-lighted-marquee','deep-auditorium-roof');
  } else if(signature==='liffey-valley'){
    features.push('regional-shopping-podium');
  } else if(signature==='georges-street-arcade'){
    mass(0,-Z*.16,w*.72,d*.64,1.35,brick);
    roof(0,1.55,-Z*.16,w*.74,d*.69,glass);
    for(let x=-X*.3;x<=X*.31;x+=w*.2)box(x,.78,Z*.22,.045,1.1,.04,pale);
    box(0,.78,Z*.37,w*.27,.9,.11,brick);
    features.push('long-glazed-ridge','repeated-market-bays','red-brick-entry-arch');
  } else if(signature==='fallon-byrne-foodhall'){
    mass(0,-Z*.16,w*.8,d*.62,1.45,pale);box(0,.8,Z*.34,w*.7,.76,.08,glass);
    box(0,.48,Z*.4,w*.52,.18,.1,brick);roof(0,1.68,-Z*.16,w*.84,d*.67,brick);
    box(0,.2,Z*.72,w*.7,.05,d*.12,'#92775d');
    features.push('heritage-foodhall-front','broad-market-windows','restaurant-upper-floor','cellar-entry');
  } else if(signature==='leo-burdock-christchurch'){
    mass(0,-Z*.17,w*.74,d*.56,1.15,pale);roof(0,1.35,-Z*.17,w*.78,d*.6,brick);
    box(0,.72,Z*.31,w*.62,.45,.08,'#d9cc9e');box(0,.3,Z*.4,w*.6,.12,.12,'#b14b39');
    features.push('compact-takeaway-front','striped-canopy','tiled-sign-band');
  } else if(signature==='winding-stair'||signature==='woollen-mills'){
    mass(0,-Z*.14,w*.72,d*.59,1.75,brick);
    for(const y of [.7,1.25])glassBand(0,y,Z*.3,w*.58,.07);
    for(const x of [-X*.3,X*.3])box(x,.95,Z*.25,.08,1.45,.08,pale);
    roof(0,1.95,-Z*.14,w*.76,d*.63,dark);
    if(signature==='winding-stair')box(0,1.58,Z*.4,w*.38,.45,.18,glass);
    else box(0,2.08,0,w*.55,.16,d*.28,pale);
    features.push('historic-quayside-building','layered-window-bays',signature==='winding-stair'?'upper-river-view-dining-bay':'stepped-roofline');
  } else if(signature==='bewleys-cafe'){
    mass(0,-Z*.15,w*.78,d*.6,1.8,brick);
    for(const x of [-X*.3,0,X*.3]){box(x,.92,Z*.32,w*.2,.76,.07,glass);box(x,1.35,Z*.38,w*.23,.1,.13,pale);}
    box(0,.53,Z*.41,w*.84,.15,.1,'#a2483e');
    roof(0,2,-Z*.15,w*.82,d*.64,dark);
    features.push('ornate-multi-bay-shopfront','striped-cafe-awning','upper-sash-windows');
  } else if(signature==='avoca-suffolk'){
    mass(0,-Z*.14,w*.76,d*.6,2.7,pale);
    for(const y of [.72,1.22,1.72,2.22])glassBand(0,y,Z*.31,w*.62,.07);
    box(0,2.8,-Z*.14,w*.56,.14,d*.42,green);
    box(0,.4,Z*.38,w*.82,.1,.16,brick);
    features.push('stacked-seven-level-store','food-market-ground-floor','upper-cafe-terrace','horizontal-shopfront-bands');
  } else if(signature==='national-aquatic-centre'){
    features.push('high-span-leisure-hall');
  } else if(signature==='sugar-club'||signature==='vicar-street'||signature==='button-factory'||signature==='workmans-club'){
    mass(0,-Z*.13,w*.78,d*.62,signature==='vicar-street'?2.15:1.9,signature==='button-factory'?brick:dark);
    box(0,1.2,Z*.33,w*.66,.18,.15,'#a13c39');box(0,1.45,Z*.4,w*.53,.1,.05,'#dab04f');
    for(const x of [-X*.32,X*.32])box(x,.95,Z*.25,.1,1.42,.11,pale);
    if(signature==='button-factory'){roof(0,2.0,-Z*.13,w*.82,d*.64,dark);features.push('converted-warehouse','high-stage-hall');}
    if(signature==='workmans-club'){for(const y of [.68,1.2,1.72])glassBand(0,y,Z*.32,w*.62,.06);features.push('stacked-historic-quay-floors','lit-ground-floor-entry');}
    if(signature==='vicar-street'){box(0,.12,Z*.74,w*.75,.06,d*.12,'#8b7460');features.push('broad-brick-performance-hall','exposed-roof-trusses','projecting-ticket-canopy');}
    if(signature==='sugar-club'){box(0,.18,-Z*.2,w*.62,.08,d*.24,'#98816b');features.push('dark-auditorium-volume','tiered-seating','screen-bay');}
    features.push('live-music-marquee','deep-event-entry');
  } else if(signature==='national-stadium'){
    features.push('rectangular-arena');
  } else if(signature==='dublin-zoo'){
    box(0,.12,0,w*.9,.06,d*.82,green);
    box(0,.75,Z*.25,w*.8,.12,.12,pale);
    for(const x of [-X*.24,X*.24]){mass(x,-Z*.24,w*.32,d*.32,1.3,pale);roof(x,1.45,-Z*.24,w*.36,d*.36,green);}
    box(0,.8,Z*.43,w*.32,.92,.1,brick);roof(0,1.35,Z*.43,w*.36,d*.12,dark);
    features.push('visitor-entry-arch','paired-habitat-pavilions','planted-visitor-court');
  } else if(signature==='poolbeg-chimneys'){
    features.push('twin-banded-chimneys');
  } else if(signature==='ilac-mall'||signature==='jervis-mall'||signature==='stephens-green-glass-mall'){
    features.push('glazed-city-mall');
  } else {
    // Explicit fallback for a newly added authored destination: make a block
    // with articulated wings, a roof break and a public entry court.
    mass(-X*.24,-Z*.15,w*.46,d*.62,1.65,pale);
    mass(X*.28,-Z*.15,w*.38,d*.5,1.25,glass);
    box(0,.12,Z*.64,w*.52,.06,d*.14,green);
    roof(0,1.84,-Z*.15,w*.78,d*.64,dark);
    features.push('articulated-wings','roof-profile-break','public-entry-court');
  }
  return {id:lot.id,shape:`round3-${signature}`,features,signature,facadeVariant:signature};
}
