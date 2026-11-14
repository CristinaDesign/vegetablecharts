  /* ---------- Data (from the Vegetable Chart prototype) ---------- */
  // Reference daily intakes: EU Reg. 1169/2011 Annex XIII (fiber: EFSA 25 g).
  var REF = { prot: 50, fib: 25, a: 800, c: 80, e: 12, k: 75, fol: 200, b6: 1.4, pot: 2000, mg: 375, ca: 800, fe: 14 };
  var NUTRIENTS = Object.keys(REF);
  var NAMES = { prot: ['Protein', 'g'], fib: ['Fiber', 'g'], a: ['Vitamin A', 'µg'], c: ['Vitamin C', 'mg'], e: ['Vitamin E', 'mg'], k: ['Vitamin K', 'µg'],
    fol: ['Folate', 'µg'], b6: ['Vitamin B6', 'mg'], pot: ['Potassium', 'mg'], mg: ['Magnesium', 'mg'], ca: ['Calcium', 'mg'], fe: ['Iron', 'mg'] };
  // [slug, name, color, kcal, prot, fib, a, c, e, k, fol, b6, pot, mg, ca, fe, price €/kg, price source]
  var RAW = [
   ["esparrago-verde","Green asparagus","#7FA650",20,2.2,2.1,38,5.6,1.1,41.6,52,.091,202,14,24,2.14,4.47,"panel"],
   ["champinon","Mushroom","#D8C8B4",22,3.1,1.0,0,2.1,.01,0,17,.104,318,9,3,.5,5.66,"grupo"],
   ["lechuga-romana","Romaine lettuce","#8DBB5A",17,1.2,2.1,436,4,.13,102.5,136,.074,247,14,33,.97,3.22,"grupo"],
   ["alcachofa","Artichoke","#6E8B4E",47,3.3,5.4,1,11.7,.19,14.8,68,.116,370,60,44,1.28,4.39,"panel"],
   ["remolacha","Beetroot","#8E2449",43,1.6,2.8,2,4.9,.04,.2,109,.067,325,23,16,.8,2.2,"estimado"],
   ["puerro","Leek","#B4CC86",61,1.5,1.8,83,12,.92,47,64,.233,180,28,59,2.1,4.44,"panel"],
   ["cebolleta","Spring onion","#9CC26A",32,1.8,2.6,50,18.8,.55,207,64,.061,276,20,72,1.48,2.6,"estimado"],
   ["maiz","Sweet corn","#E8B93A",86,3.3,2.0,9,6.8,.07,.3,42,.093,270,37,2,.52,3.5,"estimado"],
   ["apio","Celery","#A9C98A",16,.7,1.6,22,3.1,.27,29.3,36,.074,260,11,40,.2,1.76,"panel"],
   ["berenjena","Eggplant","#4B2E5A",25,1.0,3.0,1,2.2,.3,3.5,22,.084,229,14,9,.23,2.08,"panel"],
   ["calabaza","Butternut squash","#E0913A",45,1.0,2.0,532,21,1.44,1.1,27,.154,352,34,48,.7,2.14,"panel"],
   ["pepino","Cucumber","#3F7A3A",15,.65,.5,5,2.8,.03,16.4,7,.04,147,13,16,.28,1.8,"panel"],
   ["patata","Potato","#C9A15A",77,2.0,2.2,0,19.7,.01,2,15,.298,425,23,12,.81,1.22,"panel"],
   ["cebolla","Onion","#C98A5A",40,1.1,1.7,0,7.4,.02,.4,19,.12,146,10,23,.21,1.92,"panel"],
   ["zanahoria","Carrot","#E8762D",41,.9,2.8,835,5.9,.66,13.2,19,.138,320,12,33,.3,1.49,"panel"],
   ["tomate","Tomato","#D9412F",18,.9,1.2,42,13.7,.54,7.9,15,.08,237,11,10,.27,2.3,"panel"],
   ["calabacin","Zucchini","#4F7D3A",17,1.2,1.0,10,17.9,.12,4.3,24,.163,261,18,16,.37,1.61,"panel"],
   ["acelga","Swiss chard","#3F8F4A",19,1.8,1.6,306,30,1.89,830,14,.099,379,81,51,1.8,2.74,"panel"],
   ["espinaca","Spinach","#2F6B35",23,2.9,2.2,469,28.1,2.03,483,194,.195,558,79,99,2.71,4.87,"grupo"],
   ["repollo","Cabbage","#B9D39A",25,1.3,2.5,5,36.6,.15,76,43,.124,170,12,40,.47,1.6,"panel"],
   ["guisantes","Green peas","#6FA83E",81,5.4,5.7,38,40,.13,24.8,65,.169,244,33,25,1.47,6.0,"estimado"],
   ["coliflor","Cauliflower","#EDE3C8",25,1.9,2.0,0,48.2,.08,15.5,57,.184,299,15,22,.42,2.1,"panel"],
   ["col-bruselas","Brussels sprouts","#5E8F3A",43,3.4,3.8,38,85,.88,177,61,.219,389,23,42,1.4,4.2,"estimado"],
   ["brocoli","Broccoli","#3E7A35",34,2.8,2.6,31,89.2,.78,101.6,63,.175,316,21,47,.73,2.48,"panel"],
   ["pimiento-rojo","Red bell pepper","#C8302A",31,1.0,2.1,157,127.7,1.58,4.9,46,.291,211,12,7,.43,2.68,"panel"],
   ["kale","Kale","#355E3B",35,2.9,4.1,241,93.4,.66,389.6,62,.147,348,33,254,1.6,6.5,"estimado"],
   ["endibia","Belgian endive","#E9E3A8",17,.9,3.1,1,2.8,0,0,37,.042,211,10,19,.24,3.22,"grupo"]
  ];
  // Edible portion: share of the weight bought that you actually eat (USDA refuse factors, approximate).
  var EDIBLE = { "esparrago-verde": .55, champinon: .97, "lechuga-romana": 1, alcachofa: .40, remolacha: .80, puerro: .60, cebolleta: .85, maiz: .45, apio: .80, berenjena: .90,
    calabaza: .75, pepino: .80, patata: .80, cebolla: .90, zanahoria: .88, tomate: 1, calabacin: .95, acelga: .85, espinaca: .85, repollo: .80, guisantes: .80,
    coliflor: .60, "col-bruselas": .90, brocoli: .65, "pimiento-rojo": 1, kale: .75, endibia: 1 };
  var SRC = { panel: 'Official consumer price · MAPA panel', grupo: 'Price of its product group · MAPA panel', estimado: 'Estimated price · to confirm with Mercamadrid' };
  var SRC_SHORT = { panel: 'MAPA', grupo: 'MAPA group', estimado: 'Estimate' };

  var veg = RAW.map(function (r) {
    var n = {}; NUTRIENTS.forEach(function (k, i) { n[k] = r[4 + i]; });
    var kcal = r[3], price = r[16], edible = EDIBLE[r[0]] || 1, priceEdible = price / edible;
    var capped = {}, score = 0, perEuro = 0, gramsPerEuro = 1000 / priceEdible;
    NUTRIENTS.forEach(function (k) {
      capped[k] = Math.min(100, n[k] / REF[k] * 100); score += capped[k];
      perEuro += Math.min(100, n[k] * gramsPerEuro / 100 / REF[k] * 100);
    });
    return { slug: r[0], name: r[1], color: r[2], kcal: kcal, n: n, capped: capped, price: price, priceEdible: priceEdible, edible: edible, source: r[17],
      score: score / NUTRIENTS.length, perEuro: perEuro / NUTRIENTS.length, gramsPerEuro: gramsPerEuro };
  });
