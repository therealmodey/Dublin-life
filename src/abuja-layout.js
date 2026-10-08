let R = [[-16, 0, 31.3, 0, 3.6, "blvd"], [-16, -18, 40, -18, 1.6, "main"], [-16, 21, 40, 21, 1.6, "main"], [-16, -46, -16, 21, 1.6, "main"], [-4, -46, -4, 47.5, 1.2, "sec"], [19, -46, 19, 21, 1.2, "sec"], [40, -18, 40, 47, 1.4, "sec"], [-48, 0, -16, 0, 1.2, "sec"], [-16, -30, 35, -30, 1.2, "sec"], [-42, 23.5, -4, 23.5, 1, "sec"], [-16, 0, -42, 23.5, 1.8, "exp"], [-16, -18, -49.5, -40.3, 1.8, "exp"], [-42, 23.5, -51, 23.5, 1.8, "exp"], [-51, 23.5, -51, 47.5, 1.6, "exp"], [-51, 47.5, -4, 47.5, 1, "sec"]], I = [[39.3, -9.5, 37.4, -9.5], [40.7, -14, 42.85, -14], [-16.8, -8, -20.7, -8], [40.7, 16.6, 54.4, 16.6], [-30, -27.6, -30, -33.85], [-46, 0.6, -46, 2.6], [-31.9, 10.7, -30.06, 12.71], [-16.8, 14.5, -18.4, 14.5], [-4.6, 14.5, -6.35, 14.5], [-4.6, -42, -8.2, -42], [40.7, 28, 43.85, 28], [-28 + 17, 35.4 + 8.55, -4.6, 35.4 + 8.55]], E = [[-51, 23.5, 1.4], [-16, 0, 2.8], [-4, 0, 2.4], [19, 0, 2.4], [-16, -18, 2], [-4, -18, 1.7], [19, -18, 1.7], [40, -18, 1.7], [-16, 21, 2], [-4, 21, 1.7], [19, 21, 1.7], [40, 21, 1.7], [-42, 23.5, 2], [-16, -30, 1.4], [-4, -30, 1.4], [19, -30, 1.4]], O = R[10], G = Math.hypot(O[2] - O[0], O[3] - O[1]), L = [(O[2] - O[0]) / G, (O[3] - O[1]) / G], N = [L[1], -L[0]], F = [O[0] + 22 * L[0] + N[0] * 4, O[1] + 22 * L[1] + N[1] * 4], U = { abjAssembly: { x: 35, z: 0, w: 7, d: 7, label: "National Assembly", top: 3.8 }, abjSupremeCourt: { x: 35, z: -9.5, w: 5, d: 4.5, label: "Supreme Court", top: 2.1 }, abjAsoRock: { x: 45, z: -14, w: 4.5, d: 4.5, label: "Aso Rock", top: 1.4 }, abjZoo: { x: 54, z: 13.7, w: 7, d: 5, label: "Children's Park & Zoo", top: 1.4 }, abjSecretariat: { x: 25, z: -6.5, w: 8, d: 5, label: "Fed. Secretariat", top: 2.8 }, abjMosque: { x: 12.5, z: -6.5, w: 6, d: 6, label: "National Mosque", top: 5.2 }, abjHospital: { x: 1.5, z: -6.5, w: 7, d: 5, label: "National Hospital", top: 2.7 }, abjSilverbird: { x: -10, z: -6.5, w: 6, d: 5, label: "Silverbird", top: 3 }, abjEagleSquare: { x: 25, z: 6.5, w: 8, d: 6, label: "Eagle Square", top: 2.1 }, abjChristianCentre: { x: 12.5, z: 6.5, w: 6, d: 6, label: "Christian Centre", top: 7.8 }, abjCeddi: { x: 1.5, z: 6.5, w: 7, d: 5, label: "Ceddi Plaza", top: 2.9 }, abjArtsVillage: { x: -10, z: 6.5, w: 6, d: 5, label: "Arts Village", top: 1.1 }, abjBanex: { x: -10, z: -13.5, w: 6, d: 5, label: "Banex Plaza", top: 2 }, abjWuseMarket: { x: 1.5, z: -13.5, w: 7, d: 5, label: "Wuse Market", top: 1.8 }, abjTranscorp: { x: 12.5, z: -13.5, w: 6, d: 5, label: "Transcorp Hilton", top: 6.8 }, abjTechHub: { x: 26, z: -13.5, w: 6, d: 5, label: "Ventures Park", top: 3.5 }, abjNovare: { x: -10, z: -25, w: 8, d: 7, label: "Novare Central", top: 3 }, abjLounge: { x: 1.5, z: -23.25, w: 5, d: 4.5, label: "Kryxtal Lounge", top: 1.8 }, abjUnityFountain: { x: 12.5, z: -24, w: 6, d: 6, label: "Unity Fountain", top: 1.6 }, abjMillenniumPark: { x: 28, z: -25, w: 10, d: 8, label: "Millennium Park", top: 1.5 }, abjGolf: { x: 42, z: -32, w: 11, d: 9, label: "IBB Golf Club", top: 1.5 }, abjClub: { x: -10, z: -36, w: 6, d: 5, label: "Hustle & Bustle", top: 2.4 }, abjRooftop: { x: 1.5, z: -35, w: 4.5, d: 4.5, label: "Lupita Rooftop", top: 7 }, abjJabiLake: { x: -24, z: -8, w: 7, d: 5, label: "Jabi Lake Mall", top: 2.2 }, abjZumaRock: { x: -46, z: 5, w: 5, d: 5, label: "Zuma Rock", top: 1.4, tag: [-10, 5, -9.6] }, abjMotors: { x: -36, z: 8.5, w: 9, d: 5.5, label: "Capital Motors", top: 2.4 }, abjStadium: { x: -22.5, z: 14.5, w: 8.4, d: 8.4, label: "National Stadium", top: 3.4, round: true }, abjMagicLand: { x: -9, z: 14.5, w: 5.5, d: 5.5, label: "Magic Land", top: 3 }, abjCityGate: { x: F[0], z: F[1], w: 4.4, d: 4.4, label: "City Gate", top: 4.7, ry: Math.atan2(N[0], N[1]) }, abjAirport: { x: -28, z: 35.4, w: 34, d: 22, label: "Abuja Airport", top: 6.2, pad: "#d6dbc4", tag: [-3.6, 2.05, 2.4] }, abjUniAbuja: { x: -57.5, z: 31, w: 10, d: 9, label: "University of Abuja", top: 3 }, abjGwagwalada: { x: -56.5, z: 41, w: 7, d: 5, label: "Gwagwalada Market", top: 3.1 }, abjTokyo: { x: -12.1, z: -44.75, w: 4.4, d: 2.9, label: "Tokyo Nightlife", top: 2.8, art: 0.72 }, abjPlay: { x: -7, z: -44.75, w: 4.4, d: 2.9, label: "Play Lounge", top: 1.6, art: 0.72 }, abj345: { x: -12.1, z: -41.25, w: 4.4, d: 2.9, label: "345 Nightlife", top: 2.6, art: 0.72 }, abjMoscow: { x: -7, z: -41.25, w: 4.4, d: 2.9, label: "Moscow Underground", top: 2, art: 0.72 }, abjMagicCity: { x: -0.8, z: -42.6, w: 4.1, d: 4.4, label: "Magic City 18+", top: 2 }, abjTrukadero: { x: 4.73, z: -42.6, w: 4.1, d: 4.4, label: "Trukadero", top: 2.7 }, abjHavana: { x: 10.27, z: -42.6, w: 4.1, d: 4.4, label: "Havana", top: 1.8 }, abjBoto: { x: 15.8, z: -42.6, w: 4.1, d: 4.4, label: "BOTO", top: 1.7 }, abjMars: { x: 7, z: -34.6, w: 3.6, d: 4.4, label: "Mar's Caf\xE9", top: 2.2 }, abjBarracuda: { x: 22.4, z: -37.2, w: 4.4, d: 4.4, label: "Barracuda Rooftop", top: 3.8 }, abjPalmAve: { x: 22.4, z: -44, w: 4.4, d: 4.4, label: "Palm Ave", top: 1.6 }, abjMarks: { x: 32.6, z: -35.2, w: 4.4, d: 4.4, label: "Marks at the Park", top: 1.6 }, abjTulip: { x: 32.6, z: -44.1, w: 4.4, d: 4.4, label: "Tulip Bistro", top: 1.5 }, abjCityPark: { x: 36.6, z: -22.75, w: 4.4, d: 5.5, label: "City Park", top: 1.8 }, abjPappies: { x: 38.7, z: -42.5, w: 5, d: 4.6, label: "Papiee's Meatro", top: 1.7 }, abjLuxeSpa: { x: 45.6, z: -42.5, w: 5, d: 4.6, label: "Abuja Luxe Spa", top: 1.2 }, abjEscape: { x: 53.5, z: -38.2, w: 6, d: 4.4, label: "Escape House", top: 1.2 }, abjPolo: { x: 47.5, z: -22.5, w: 11, d: 6.5, label: "Guards Polo Club", top: 1.3 }, abjAbujaCar: { x: -38, z: -40, w: 7, d: 5, label: "AbujaCar", top: 2 }, abjEcoFitness: { x: -46, z: -43.8, w: 5, d: 4.6, label: "Ecofitness Hub", top: 1.7 }, abjFmc: { x: -44.5, z: -27.2, w: 7, d: 5, label: "FMC Jabi", top: 2.2 }, abjEfcc: { x: -44.5, z: -18.5, w: 7, d: 5, label: "EFCC", top: 3.2 }, abjJabiPark: { x: -22.5, z: -14.5, w: 7.8, d: 4.6, label: "Jabi Motor Park", top: 1 }, abjIdu: { x: -56, z: -24, w: 10, d: 5, label: "Idu Station", top: 1.3 }, abjNile: { x: -45.2, z: 15.5, w: 5.6, d: 8, label: "Nile University", top: 2.1 }, abjBaze: { x: 2.2, z: 42, w: 10, d: 7, label: "Baze University", top: 1.9 }, abjBarYucca: { x: -0.6, z: 15.6, w: 4.6, d: 6, label: "Bar Yucca", top: 2.4 }, abjFraser: { x: 6.3, z: 15.6, w: 6.4, d: 3.8, label: "Fraser Suites", top: 3.8 }, abjKefiano: { x: 14.4, z: 16.4, w: 7, d: 5, label: "Kefiano Autos", top: 2 }, abjWTC: { x: 24.2, z: 14.6, w: 7, d: 6.6, label: "World Trade Center", top: 6.4 }, abjICC: { x: 34.6, z: 14.6, w: 8.2, d: 6.6, label: "Int'l Conference Centre", top: 2.9 }, abjSarkinmota: { x: 0.4, z: 25.6, w: 6.4, d: 4.8, label: "Sarkinmota Autos", top: 2 }, abjGarkiPolice: { x: 15, z: 25.6, w: 6, d: 4.8, label: "Garki Police", top: 1.9 }, abjGarkiMarket: { x: 23.8, z: 25.6, w: 6.4, d: 4.8, label: "Garki Market", top: 1.7 }, abjCentralPark: { x: 1.6, z: 32.8, w: 9, d: 7, label: "Central Park", top: 1.4 }, abjMonoliza: { x: 33.8, z: 32.6, w: 9.4, d: 7, label: "Monoliza Park", top: 2.2 }, abjIFitness: { x: 52, z: 40, w: 6, d: 5, label: "i-Fitness Guzape", top: 1.8 }, home_abjMaitama: { x: 12.5, z: -35, w: 4.5, d: 4.5, label: "Home", top: 1.6 }, home_abjWuse2: { x: 6.75, z: -24, w: 4, d: 4, label: "Home", top: 2.4 }, home_abjGwarinpa: { x: -30, z: -36, w: 4.5, d: 4.5, label: "Home", top: 2.2 }, home_abjKubwa: { x: -52.5, z: -39, w: 4.5, d: 4.5, label: "Home", top: 1.6 }, home_abjAsokoro: { x: 46, z: 28, w: 4.5, d: 4.5, label: "Home", top: 2.5 } }, _ = { x: -80, z: 40 }, D = { x0: -65, x1: 61, z0: -48, z1: 49 }, K = [], W = (a, e) => "home" === e ? U[`home_${a.home}`] : U[e], H = { x: -36, z: -9, rx: 8, rz: 5 }, J = [["ABUJA", 14, 35, 14, "#6f9a52", 0.85], ["CENTRAL BUSINESS DISTRICT", 13.7, 11, 9, "#6f9a52", 0.85], ["THREE ARMS ZONE", 35, 6.6, 7.5, "#6f9a52", 0.85], ["MAITAMA", 30, -40.5, 9, "#5f8c45", 0.85], ["GARKI", 8, 27.5, 7, "#6f9a52", 0.85], ["ASOKORO", 50, 19, 6.5, "#5f8c45", 0.85], ["JABI LAKE", -36, -8.6, 7, "#ffffff", 0.7], ["GWARINPA", -30, -44, 7, "#6f9a52", 0.85], ["KUBWA", -56, -44, 5, "#6f9a52", 0.85], ["UTAKO", -38, -20.5, 5, "#6f9a52", 0.85]], V = [[-16, 40, -10, 10, "#c6e2a0"], [-4, 58, -47, -10, "#a9d07f"], [-16, -4, -47, -10, "#bcd796"], [-8, 30, 10, 48, "#c2d89a"], [30, 60, 10, 48, "#acd083"], [-48, -16, -28, 0, "#b4d48c"]], Y = [], Z = R.map(([a, e, t, l, o, r]) => Y.push({ k: "s", ax: a, az: e, bx: t, bz: l, hw: o / 2 + 0.6 * ("blvd" === r || "main" === r) }) - 1);
for (let [a, e, t, l] of I) Y.push({ k: "s", ax: a, az: e, bx: t, bz: l, hw: 0.4 });
for (let [a, e, t] of E) Y.push({ k: "c", x: a, z: e, r: t });
let $ = (a, e, t, l, o = 0) => {
  let r = [Math.cos(o), -Math.sin(o)], s = [Math.sin(o), Math.cos(o)];
  return [[1, 1], [1, -1], [-1, -1], [-1, 1]].map(([o2, i]) => [a + r[0] * t * o2 / 2 + s[0] * l * i / 2, e + r[1] * t * o2 / 2 + s[1] * l * i / 2]);
};
for (let a of Object.values(U)) a.round ? Y.push({ k: "c", x: a.x, z: a.z, r: a.w / 2 }) : a.ry ? Y.push({ k: "p", pts: $(a.x, a.z, a.w, a.d, a.ry) }) : Y.push({ k: "r", x0: a.x - a.w / 2, x1: a.x + a.w / 2, z0: a.z - a.d / 2, z1: a.z + a.d / 2 });
for (let a of (Y.push({ k: "c", x: F[0] - N[0] * 4, z: F[1] - N[1] * 4, r: 3.2 }), Y.push({ k: "e", ...H }, { k: "c", x: 52, z: -1, r: 9.6 }, { k: "c", x: -56, z: -8, r: 7.4 }, { k: "r", x0: 42.8, x1: 49.2, z0: 9.6, z1: 14.4 }), K)) {
  let e = a.r ?? 0;
  Y.push({ k: "p", pts: $(a.x, a.z, 4.4, 0.6, e) });
  let t = 2.2 * Math.cos(e), l = -(2.2 * Math.sin(e));
  Y.push({ k: "p", pts: [[a.x + t, a.z + l], [a.x + t, a.z + l + 3.2], [a.x - t, a.z - l + 3.2], [a.x - t, a.z - l]] });
}
for (let [, a, e, t] of J) Y.push({ k: "r", x0: a - t / 2, x1: a + t / 2, z0: e - 0.08 * t, z1: e + 0.08 * t });
let q = (a, e, t, l, o, r) => {
  let s = o - t, i = r - l, n = Math.max(0, Math.min(1, ((a - t) * s + (e - l) * i) / (s * s + i * i || 1)));
  return Math.hypot(t + s * n - a, l + i * n - e);
}, X = (a, e, t, l) => {
  switch (a.k) {
    case "r":
      return e > a.x0 - l && e < a.x1 + l && t > a.z0 - l && t < a.z1 + l;
    case "c":
      return Math.hypot(e - a.x, t - a.z) < a.r + l;
    case "s":
      return q(e, t, a.ax, a.az, a.bx, a.bz) < a.hw + l;
    case "e":
      return ((e - a.x) / (a.rx + l)) ** 2 + ((t - a.z) / (a.rz + l)) ** 2 < 1;
    case "p":
      return ((a2, e2, t2, l2) => {
        let o = 0, r = true;
        for (let s = 0; s < t2.length; s++) {
          let [i, n] = t2[s], [d, p] = t2[(s + 1) % t2.length], f = (d - i) * (e2 - n) - (p - n) * (a2 - i);
          if (0 !== f && (0 === o ? o = Math.sign(f) : Math.sign(f) !== o && (r = false)), q(a2, e2, i, n, d, p) < l2) return true;
        }
        return r;
      })(e, t, a.pts, l);
  }
}, Q = (a, e, t, l = -1) => {
  if (a < -63.4 || a > 59.4 || e < -46.4 || e > 47.4) return true;
  for (let o = 0; o < Y.length; o++) if (o !== l && X(Y[o], a, e, t)) return true;
  return false;
}, aa = (a) => {
  let e = 43758.5453 * Math.sin(127.1 * a + 311.7);
  return e - Math.floor(e);
}, ae = [], at = [], al = [], ao = [], ar = [], as = [], ai = [], an = [], ad = [], ap = [], af = [], ac = [], ah = [], ab = [], au = [], am = [], aw = [], aB = [], aj = [], ax = ["#4f9a3c", "#5aa845", "#3f8a35", "#6bb04f", "#478f3a"], ag = ["#e63946", "#ffd166", "#f472b6", "#ffffff", "#fb923c"], aM = (a, e, t, l = 1) => {
  let o = (0.36 + 0.16 * aa(t)) * l;
  ad.push({ p: [a, 0.2 + 0.24 * l, e], s: [0.05 * l, 0.48 * l, 0.05 * l] }), an.push({ p: [a, 0.2 + 0.45 * l + 0.75 * o, e], s: [o, 1.15 * o, o], r: 3 * aa(t + 3), c: ax[t % ax.length] });
}, az = (a, e, t, l = 1.3 + 0.35 * aa(t)) => {
  ap.push({ p: [a, 0.2 + l / 2, e], s: [0.05, l, 0.05] }), af.push({ p: [a, 0.2 + l + 0.04, e], s: [0.55, 0.26, 0.55], e: [Math.PI, 3 * aa(t + 1), 0] }), af.push({ p: [a, 0.2 + l + 0.16, e], s: [0.34, 0.2, 0.34], e: [Math.PI, 3 * aa(t + 2), 0] });
}, ak = (a, e, t, l, o, r = 0.2) => {
  for (let s = 0; s < t; s++) ai.push({ p: [a + (aa(o + s) - 0.5) * l, r, e + (aa(o + s + 0.5) - 0.5) * l], s: [0.12, 0.1, 0.12], c: ag[(o + s) % ag.length] });
};
for (let [a, e, t, l] of (R.forEach(([a2, e2, t2, l2, o, r], s) => {
  let i = Math.hypot(t2 - a2, l2 - e2), n = (t2 - a2) / i, d = (l2 - e2) / i, p = -d, f = Math.atan2(-d, n), c = (a2 + t2) / 2, h = (e2 + l2) / 2;
  if (ae.push({ p: [c, 0.234, h], s: [i, 0.012, o], r: f }), "blvd" === r || "main" === r) for (let a3 of [-1, 1]) at.push({ p: [c + p * (o / 2 + 0.3) * a3, 0.215, h + n * (o / 2 + 0.3) * a3], s: [i, 0.01, 0.6], r: f });
  if ("sec" !== r && al.push({ p: [c, 0.245, h], s: [i, 0.01, "blvd" === r ? 1 : 0.3], r: f }), "sec" === r) for (let t3 = 1; t3 < i - 0.5; t3 += 2.2) {
    let l3 = a2 + n * t3, o2 = e2 + d * t3;
    Q(l3, o2, 0.3, Z[s]) || ao.push({ p: [l3, 0.2475, o2], s: [0.9, 5e-3, 0.08], r: f });
  }
  let b = "blvd" === r ? 2.1 : "main" === r ? o / 2 + 0.3 : o / 2 + 0.75, u = "blvd" === r ? 2.6 : "exp" === r ? 2.8 : 3;
  for (let t3 = u / 2, l3 = 0; t3 < i; t3 += u, l3++) for (let o2 of [-1, 1]) {
    let i2 = a2 + n * t3 + p * b * o2, f2 = e2 + d * t3 + n * b * o2;
    Q(i2, f2, 0.45, Z[s]) || ("exp" === r ? az(i2, f2, 500 * s + 2 * l3 + o2) : aM(i2, f2, 500 * s + 2 * l3 + o2));
  }
  if ("blvd" === r || "main" === r) {
    let t3 = "blvd" === r ? 2.75 : o / 2 + 0.95;
    for (let l3 = 1.2; l3 < i - 1; l3 += 2.1) for (let o2 of [-1, 1]) {
      let r2 = a2 + n * l3 + p * t3 * o2, i2 = e2 + d * l3 + n * t3 * o2;
      Q(r2, i2, 0.35, Z[s]) || ac.push({ p: [r2, 0.35, i2], s: [1.8, 0.3, 0.32], r: f });
    }
  }
  if ("blvd" === r || "main" === r) for (let t3 = "blvd" === r ? 4.7 : 3, l3 = 0; t3 < i; t3 += "blvd" === r ? 5.2 : 6, l3++) {
    let i2 = "blvd" === r ? 0 : (o / 2 + 0.3) * (l3 % 2 ? 1 : -1), f2 = a2 + n * t3 + p * i2, c2 = e2 + d * t3 + n * i2;
    Q(f2, c2, 0.3, Z[s]) || (ah.push({ p: [f2, 1.05, c2], s: [0.03, 1.6, 0.03] }), ab.push({ p: [f2, 1.88, c2], s: [0.12, 0.08, 0.12] }));
  }
  let m = "blvd" === r ? 1 : "main" === r ? 0.42 : "exp" === r ? 0.5 : 0.28, w = Math.floor(i / 9);
  for (let t3 = 0; t3 < w; t3++) {
    let l3 = (t3 + 0.3 + 0.4 * aa(50 * s + t3)) / w * i, o2 = t3 % 2 ? 1 : -1, r2 = a2 + n * l3 + p * m * o2, f2 = e2 + d * l3 + n * m * o2;
    if (E.some(([a3, e3, t4]) => Math.hypot(r2 - a3, f2 - e3) < t4 + 0.4) || K.some((a3) => 2.6 > Math.hypot(r2 - a3.x, f2 - a3.z))) continue;
    let c2 = Math.atan2(n, d) + (o2 > 0 ? 0 : Math.PI), h2 = ["#17803d", "#f4f4f2", "#1b1d22", "#c0c6cc", "#c81e1e", "#1f5fbf", "#f4f4f2", "#17803d"][(s + t3) % 8];
    aB.push({ p: [r2, 0.335, f2], s: [0.32, 0.15, 0.64], r: c2, c: h2 }), aj.push({ p: [r2, 0.47, f2], s: [0.28, 0.12, 0.34], r: c2 });
  }
}), I)) {
  let o = Math.hypot(t - a, l - e);
  ae.push({ p: [(a + t) / 2, 0.234, (e + l) / 2], s: [o, 0.012, 0.8], r: Math.atan2(-(l - e), t - a) });
}
for (let a = -12.6, e = 0; a < 30; a += 2.6, e++) Q(a, 0, 0.5, Z[0]) || (aM(a, 0, 9e3 + e, 1.05), e % 2 && !Q(a + 1.3, 0, 0.4, Z[0]) && ak(a + 1.3, 0, 4, 0.5, 9100 + 7 * e, 0.25));
E.forEach(([a, e, t], l) => {
  let o = Math.max(0.5, t - 0.9);
  ar.push({ p: [a, 0.255, e], s: [t, 0.01, t] }), as.push({ p: [a, 0.265, e], s: [o, 0.02, o] });
  let r = Math.max(6, Math.round(2 * Math.PI * o * 0.78 / 0.32));
  for (let t2 = 0; t2 < r; t2++) {
    let s = t2 / r * Math.PI * 2;
    ai.push({ p: [a + Math.cos(s) * o * 0.78, 0.275, e + Math.sin(s) * o * 0.78], s: [0.12, 0.1, 0.12], c: ag[(l + t2) % ag.length] });
  }
  t >= 2.4 ? (ap.push({ p: [a, 1.125, e], s: [0.06, 1.7, 0.06] }), af.push({ p: [a, 2.015, e], s: [0.7, 0.3, 0.7], e: [Math.PI, l, 0] }, { p: [a, 2.155, e], s: [0.42, 0.24, 0.42], e: [Math.PI, l + 0.5, 0] })) : t >= 2 ? aM(a, e, 9500 + l, 0.9) : an.push({ p: [a, 0.275 + 0.15, e], s: [0.3, 0.22, 0.3], c: "#3f7f35" });
});
let ay = ["#b45a3c", "#8a4b33", "#a3552f", "#7a2e2e"], aA = ["#2f6f4f", "#5b6b7a", "#8a4b33", "#3f4b57"], av = ["#f2e8d5", "#e9d3b0", "#f6efe3", "#dbe7f2", "#f6d6c8", "#e4ecd6", "#fff7e8"];
[[-3, 30, 22.5, 46.5, 2.9, 0.9, 1.3, 1, ay], [-3, 18, 10.5, 19.5, 2.6, 0.8, 1.1, 1, ay], [22, 39, 10.5, 19.5, 2.8, 0.9, 1.2, 1, ay], [41, 59, 14, 47, 3.2, 1.3, 1.8, 2, aA], [-2, 59, -46.5, -30.6, 3.3, 1.2, 1.7, 2, aA], [30, 59, -28, -19, 3, 1.1, 1.5, 2, aA], [-15.5, -4.5, -46.5, -38.5, 2.2, 0.8, 1, 3, ay], [-48, -17, -46.5, -28, 2.3, 0.8, 1, 1, ay], [-63.4, -49, -46.5, -19, 2.5, 0.75, 1, 1, ay], [-48, -18, -28, -12.5, 2.4, 0.8, 1, 1, ay], [-63.4, -49, -18, 0, 2.6, 0.8, 1, 1, ay], [-63.4, -49, 1, 20, 2.6, 0.8, 1, 1, ay], [-48, -17, 9, 22, 2.6, 0.8, 1.1, 1, ay], [-63.4, -52.5, 21, 47.4, 2.3, 0.7, 0.95, 1, ay]].forEach(([a, e, t, l, o, r, s, i, n], d) => {
  for (let p = t + o / 2, f = 0; p < l; p += o, f++) for (let t2 = a + o / 2, l2 = 0; t2 < e; t2 += o, l2++) {
    let a2 = 1e4 * d + 100 * f + l2, e2 = t2 + (aa(a2) - 0.5) * o * 0.25, c = p + (aa(a2 + 0.3) - 0.5) * o * 0.25, h = r + aa(a2 + 0.6) * (s - r), b = h * (0.8 + 0.25 * aa(a2 + 0.9));
    if (Q(e2, c, Math.max(h, b) / 2 + 0.35)) continue;
    let u = 3 === i ? 1.2 + 0.5 * aa(a2 + 1.2) : 2 === i ? 0.7 + 0.25 * aa(a2 + 1.2) : 0.38 + 0.2 * aa(a2 + 1.2), m = aa(a2 + 1.5) > 0.5 ? 0 : Math.PI / 2;
    au.push({ p: [e2, 0.2 + u / 2, c], s: [h, u, b], r: m, c: av[a2 % av.length] }), 3 !== i && am.push({ p: [e2, 0.2 + u + 0.15, c], s: [0.75 * h, 0.3, 0.75 * b], r: m, c: n[(f + l2) % n.length] });
    let w = e2 + 0.42 * o, B = c + 0.38 * o;
    0.55 > aa(a2 + 2.1) && !Q(w, B, 0.5) && aM(w, B, a2, 2 === i ? 1.15 : 1);
  }
});
for (let a = -72; a <= 70; a += 8.5) aw.push({ p: [a, 0.1, -53 - 3 * aa(a)], s: [6 + 3 * aa(a + 1), 3 + 2.2 * aa(a + 2), 5 + 3 * aa(a + 3)], r: 3 * aa(a + 4), c: ["#7fa25a", "#8aac64", "#96a873", "#749852"][Math.abs(Math.round(a)) % 4] }), aw.push({ p: [a + 4, 0.1, 54 + 3 * aa(a + 5)], s: [6 + 3 * aa(a + 6), 2.4 + 2 * aa(a + 7), 5 + 3 * aa(a + 8)], r: 3 * aa(a + 9), c: ["#8aac64", "#7fa25a", "#749852", "#96a873"][Math.abs(Math.round(a)) % 4] });
for (let a = -44; a <= 44; a += 9) aw.push({ p: [-71 - 3 * aa(a), 0.1, a], s: [6 + 3 * aa(a + 1), 3 + 2.4 * aa(a + 2), 6 + 2 * aa(a + 3)], r: 3 * aa(a + 4), c: ["#7fa25a", "#96a873", "#8aac64"][Math.abs(a) % 3] }), aw.push({ p: [67 + 3 * aa(a + 5), 0.1, a + 4], s: [6 + 3 * aa(a + 6), 3.2 + 2.4 * aa(a + 7), 6 + 2 * aa(a + 8)], r: 3 * aa(a + 9), c: ["#8aac64", "#749852", "#7fa25a"][Math.abs(a) % 3] });
export {
  aj as carWindows,
  aB as cars,
  ai as flowers,
  J as groundNames,
  ac as hedges,
  aw as hills,
  au as houses,
  H as lake,
  ab as lampHeads,
  ah as lampPosts,
  U as lots,
  al as medians,
  af as palmCrowns,
  ap as palmTrunks,
  V as patches,
  at as pavements,
  ae as roads,
  am as roofs,
  as as roundaboutGreens,
  ar as roundabouts,
  ao as stripes,
  an as treeCrowns,
  ad as treeTrunks
};
