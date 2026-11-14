(function () {
  var root = document.documentElement;
  var ICONS = __ICONS__;
  function icon(n, size) { size = size || 24; return '<svg class="cg-icon" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">' + ICONS[n].map(function (d) { return '<path d="' + d + '"/>'; }).join('') + '</svg>'; }

  /*__DATA__*/
  var FACTS = {
    "esparrago-verde": "An asparagus plant keeps sending up new spears for around 15 years or more.",
    champinon: "Mushrooms are fungi, not plants. Left in sunlight or UV light, they make vitamin D.",
    "lechuga-romana": "Also called cos lettuce. Unlike round lettuces, it grows as a tall, upright head.",
    alcachofa: "An artichoke is the unopened flower bud of a thistle plant. Left to bloom, it opens into a large purple flower.",
    remolacha: "Its deep red comes from pigments called betalains. In some people they turn urine pink or red, which is harmless.",
    puerro: "The leek is a national emblem of Wales.",
    cebolleta: "Spring onions are picked before the bulb swells, so the green tops are eaten as well as the white base.",
    maiz: "Each silky thread on a corn cob is attached to one kernel, so a cob has as many silks as it has kernels.",
    apio: "Celery is about 95% water.",
    berenjena: "Botanically an eggplant is a berry, and it belongs to the same plant family as tomatoes and potatoes.",
    calabaza: "Its orange flesh is rich in beta-carotene, which the body turns into vitamin A. That is why its vitamin A figure is so high.",
    pepino: "Gherkins and pickles are cucumbers preserved in brine or vinegar.",
    patata: "Potatoes come from the Andes in South America and reached Europe through Spain in the 16th century.",
    cebolla: "Cutting an onion releases sulfur compounds that irritate the eyes. Chilling it first helps.",
    zanahoria: "Early cultivated carrots were purple or yellow. Orange ones became common in Europe several centuries ago.",
    tomate: "Botanically a tomato is a fruit. It came to Europe from the Americas in the 16th century.",
    calabacin: "The zucchini flowers are edible too, often stuffed or fried.",
    acelga: "Despite the name, Swiss chard is not Swiss. It is the same species as beetroot, grown for its leaves instead of its root.",
    espinaca: "Popeye made spinach famous for strength, but the iron in spinach is absorbed less easily than iron from meat.",
    repollo: "Fermented cabbage becomes sauerkraut.",
    guisantes: "Gregor Mendel worked out the basic rules of inheritance by crossing pea plants.",
    coliflor: "The white head is a cluster of flower buds that never opened. Cauliflower, broccoli, cabbage, kale and Brussels sprouts all come from one species.",
    "col-bruselas": "Brussels sprouts grow as rows of tiny buds along a tall stalk and are close relatives of cabbage.",
    brocoli: "Broccoli is a cluster of flower buds. Its name comes from the Italian word for the flowering top of a cabbage.",
    "pimiento-rojo": "A red pepper is usually a green pepper left to ripen on the plant for longer.",
    kale: "A 100 g portion has about three times the daily reference for vitamin K, which helps blood to clot.",
    endibia: "It is grown twice: roots first, then sprouted in the dark, which keeps the leaves pale and mild."
  };
  var bySlug = {}; veg.forEach(function (v) { bySlug[v.slug] = v; });
  var nGroup = veg.filter(function (v) { return v.source === 'grupo'; }).length;
  var nEst = veg.filter(function (v) { return v.source === 'estimado'; }).length;

  /* ---------- State ---------- */
  var state = { sel: 'espinaca', basis: 'edible', sort: 'name' };
  try { var h = (location.hash || '').slice(1); if (bySlug[h]) state.sel = h; } catch (e) {}
  function pr(v) { return state.basis === 'edible' ? v.priceEdible : v.price; }
  function basisText() { return state.basis === 'edible' ? 'edible part' : 'as bought'; }
  function ord(n) { var s = ['th', 'st', 'nd', 'rd'], v = n % 100; return n + (s[(v - 20) % 10] || s[v] || s[0]); }
  function rankOf(v, get, desc) { var sorted = veg.slice().sort(function (a, b) { return desc ? get(b) - get(a) : get(a) - get(b); }); return sorted.indexOf(v) + 1; }
  function median(arr) { var s = arr.slice().sort(function (a, b) { return a - b; }); return s[Math.floor(s.length / 2)]; }
  function sorted() {
    var a = veg.slice();
    if (state.sort === 'name') a.sort(function (x, y) { return x.name.localeCompare(y.name); });
    if (state.sort === 'score') a.sort(function (x, y) { return y.score - x.score; });
    if (state.sort === 'price') a.sort(function (x, y) { return pr(x) - pr(y); });
    return a;
  }
  var imgFailed = 0;
  function pic(v) { return '<img src="icons/' + v.slug + '.png" alt="" loading="lazy" data-fb="' + v.color + '">'; }
  function lc(n) { return n.charAt(0).toLowerCase() + n.slice(1); }
  function euro(x) { return x.toFixed(2); }

  /* ---------- Theme switch ---------- */
  var t = document.getElementById('theme');
  var dark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  if (root.getAttribute('data-theme')) dark = root.getAttribute('data-theme') === 'dark';
  function setTheme(d) { dark = d; root.setAttribute('data-theme', d ? 'dark' : 'light'); t.setAttribute('aria-checked', String(d)); }
  setTheme(dark);
  t.addEventListener('click', function () { setTheme(!dark); });

  /* ---------- Banners ---------- */
  function banner(kind, name, title, text) {
    return '<div class="cg-banner cg-banner--' + kind + '" role="' + (kind === 'error' ? 'alert' : 'status') + '"><span class="cg-banner__icon">' + icon(name) + '</span><div class="cg-banner__body"><strong class="cg-banner__title">' + title + '</strong><div>' + text + '</div></div></div>';
  }
  var bn = document.getElementById('banners');
  bn.innerHTML = banner('warning', 'warning', 'Provisional data',
    'Nutrition is approximate until Spain’s BEDCA database is added. ' + (nGroup + nEst) + ' prices are for a product group or estimated. They are marked with a dashed ring.') + '<div id="imgerr"></div>';
  function onImgError(img) {
    var fb = document.createElement('span'); fb.className = 'dot-fallback'; fb.style.background = img.getAttribute('data-fb');
    img.replaceWith(fb); imgFailed++;
    document.getElementById('imgerr').innerHTML = banner('error', 'error', 'Some illustrations did not load', imgFailed + ' illustration' + (imgFailed > 1 ? 's' : '') + ' could not be loaded and a coloured dot is shown instead. Names and data are not affected. Reload the page to try again.');
  }
  document.addEventListener('error', function (e) { if (e.target && e.target.tagName === 'IMG' && e.target.hasAttribute('data-fb')) onImgError(e.target); }, true);

  /* ---------- Grid of vegetables ---------- */
  var grid = document.getElementById('grid');
  function renderGrid() {
    grid.innerHTML = sorted().map(function (v) {
      return '<button type="button" class="veg" data-slug="' + v.slug + '" aria-pressed="' + (v.slug === state.sel) + '"><span class="pic">' + pic(v) + '</span><b>' + v.name + '</b></button>';
    }).join('');
  }
  function markSelected() {
    grid.querySelectorAll('.veg').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-slug') === state.sel)); });
  }
  grid.addEventListener('click', function (e) {
    var b = e.target.closest('.veg'); if (!b) return;
    select(b.getAttribute('data-slug'), true);
  });

  /* ---------- Details ---------- */
  var dyn = document.getElementById('dyn');
  function nutrientRows(v) {
    return NUTRIENTS.map(function (k) {
      var val = Math.round(v.capped[k]), amt = v.n[k], d = amt < 1 ? amt.toFixed(2) : (amt < 10 ? amt.toFixed(1) : Math.round(amt));
      return '<div class="cg-score"><span class="cg-score__label">' + NAMES[k][0] + '<small>' + d + ' ' + NAMES[k][1] + ' per 100 g</small></span>' +
        '<div class="cg-score__track" role="meter" aria-label="' + NAMES[k][0] + ', share of daily reference in 100 g" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + val + '"><div class="cg-score__bar" style="width:' + val + '%"></div></div>' +
        '<span class="cg-score__value">' + val + '%</span></div>';
    }).join('');
  }
  function scatter(sel) {
    var W = 480, H = 340, m = { l: 58, r: 14, t: 12, b: 62 }, pw = W - m.l - m.r, ph = H - m.t - m.b;
    var xmax = Math.ceil(Math.max.apply(null, veg.map(function (v) { return v.score; })) / 10) * 10, xs = xmax <= 60 ? 10 : 20;
    var ymax = Math.ceil(Math.max.apply(null, veg.map(pr))), ys = ymax <= 6 ? 1 : 2; ymax = Math.ceil(ymax / ys) * ys;
    function X(v) { return m.l + v / xmax * pw; } function Y(v) { return m.t + ph - v / ymax * ph; }
    var s = '<rect class="plot" x="' + m.l + '" y="' + m.t + '" width="' + pw + '" height="' + ph + '"/>';
    for (var x = 0; x <= xmax; x += xs) s += '<line class="gridl" x1="' + X(x) + '" x2="' + X(x) + '" y1="' + m.t + '" y2="' + (m.t + ph) + '"/><text x="' + X(x) + '" y="' + (m.t + ph + 20) + '" text-anchor="middle">' + x + '</text>';
    for (var y = 0; y <= ymax; y += ys) s += '<line class="gridl" y1="' + Y(y) + '" y2="' + Y(y) + '" x1="' + m.l + '" x2="' + (m.l + pw) + '"/><text x="' + (m.l - 8) + '" y="' + (Y(y) + 5) + '" text-anchor="end">' + y + '</text>';
    s += '<text class="ttl" x="' + (m.l + pw / 2) + '" y="' + (H - 10) + '" text-anchor="middle">Nutrient Density Score (0 to 100, higher is better)</text>';
    s += '<text class="ttl" transform="translate(16 ' + (m.t + ph / 2) + ') rotate(-90)" text-anchor="middle">Price (€ per kg, ' + basisText() + ')</text>';
    var others = veg.filter(function (v) { return v !== sel; }).concat([sel]);
    others.forEach(function (v) {
      var cx = X(v.score), cy = Y(pr(v)), isSel = v === sel, r = isSel ? 9 : 6;
      s += '<g class="pt' + (isSel ? ' sel' : '') + '" data-slug="' + v.slug + '"><title>' + v.name + ': score ' + v.score.toFixed(0) + ' of 100, € ' + euro(pr(v)) + ' per kg (' + basisText() + '), ' + SRC_SHORT[v.source] + '</title>' +
        (v.source !== 'panel' ? '<circle class="ring" cx="' + cx + '" cy="' + cy + '" r="' + (r + 3.5) + '"/>' : '') + '<circle class="mark" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/></g>';
    });
    var sx = X(sel.score), sy = Y(pr(sel)), left = sx > m.l + pw * 0.7;
    s += '<text class="sel-label" x="' + (left ? sx - 15 : sx + 15) + '" y="' + (sy - 12) + '" text-anchor="' + (left ? 'end' : 'start') + '">' + sel.name + '</text>';
    return '<svg class="chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Scatter chart of price against Nutrient Density Score for all 27 vegetables. ' + sel.name + ' is highlighted. The same figures are in the table at the end of the page.">' + s + '</svg>';
  }
  function renderDetail() {
    var v = bySlug[state.sel];
    var rs = rankOf(v, function (x) { return x.score; }, true), rp = rankOf(v, pr, false), re = rankOf(v, function (x) { return x.perEuro; }, true);
    var top = NUTRIENTS.slice().sort(function (a, b) { return v.n[b] / REF[b] - v.n[a] / REF[a]; })[0];
    var topPct = Math.round(v.n[top] / REF[top] * 100);
    var est = v.source !== 'panel';
    var priceMain = euro(pr(v)), priceAlt = state.basis === 'edible' ? euro(v.price) + ' per kg as bought' : euro(v.priceEdible) + ' per kg edible part';
    var sentence = v.name + ' ranks ' + ord(rs) + ' of 27 for nutrient density and is the ' + (rp === 1 ? 'cheapest' : ord(rp) + ' cheapest') + ' of 27 per kilo (' + basisText() + '). Its strongest nutrient is ' + lc(NAMES[top][0]) + ': 100 g covers ' + topPct + '% of the daily reference.';
    var meds = { s: median(veg.map(function (x) { return x.score; })), p: median(veg.map(pr)), e: median(veg.map(function (x) { return x.perEuro; })) };
    var best = { s: Math.max.apply(null, veg.map(function (x) { return x.score; })), p: Math.min.apply(null, veg.map(pr)), e: Math.max.apply(null, veg.map(function (x) { return x.perEuro; })) };
    var cmp = '<div class="cg-table cmp"><table><thead><tr><th scope="col">Measure</th><th scope="col">' + v.name + '</th><th scope="col">Median of 27</th><th scope="col">Best of 27</th></tr></thead><tbody>' +
      '<tr><td>Nutrient Density Score (out of 100)</td><td>' + v.score.toFixed(0) + '</td><td>' + meds.s.toFixed(0) + '</td><td>' + best.s.toFixed(0) + '</td></tr>' +
      '<tr><td>Price (€ per kg, ' + basisText() + ')</td><td>' + euro(pr(v)) + '</td><td>' + euro(meds.p) + '</td><td>' + euro(best.p) + '</td></tr>' +
      '<tr><td>Per €1 (% of daily needs)</td><td>' + v.perEuro.toFixed(0) + '%</td><td>' + meds.e.toFixed(0) + '%</td><td>' + best.e.toFixed(0) + '%</td></tr></tbody></table></div>';
    dyn.innerHTML =
      '<div class="d-head"><span class="pic">' + pic(v) + '</span><div><h2 id="veg-name" tabindex="-1">' + v.name + '</h2><p class="sentence">' + sentence + '</p></div></div>' +
      '<button type="button" class="cg-btn cg-btn--link back" id="back">Back to all vegetables</button>' +
      '<dl class="facts">' +
        '<div class="fact"><dt>Nutrient Density Score</dt><dd class="big">' + v.score.toFixed(0) + '<small>out of 100</small></dd><dd><div class="cg-score" style="grid-template-columns:minmax(0,1fr) 0 0;gap:0"><div class="cg-score__track" role="meter" aria-label="Nutrient Density Score" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + v.score.toFixed(0) + '"><div class="cg-score__bar" style="width:' + v.score.toFixed(0) + '%"></div></div></div></dd><dd class="more">' + ord(rs) + ' of 27 · average of 12 nutrients per 100 g</dd></div>' +
        '<div class="fact"><dt>Price, ' + basisText() + '</dt><dd class="big">€ ' + priceMain + '<small>per kg</small></dd><dd class="more">€ ' + priceAlt + '</dd><dd class="more"><span class="cg-legend"><i class="cg-legend__dot' + (est ? ' cg-legend__dot--est' : '') + '"></i>' + SRC[v.source] + '</span></dd></div>' +
        '<div class="fact"><dt>Per €1 spent</dt><dd class="big">' + v.perEuro.toFixed(0) + '%<small>of daily needs</small></dd><dd class="more">' + Math.round(v.gramsPerEuro) + ' g of edible part for €1 · ' + ord(re) + ' of 27</dd></div>' +
        '<div class="fact"><dt>Energy and edible share</dt><dd class="big">' + v.kcal + '<small>kcal per 100 g</small></dd><dd class="more">' + Math.round(v.edible * 100) + '% of the weight bought is edible</dd></div>' +
      '</dl>' +
      '<section class="block fun" aria-labelledby="h-f"><h3 id="h-f">Fun fact</h3><p>' + (FACTS[v.slug] || '') + '</p></section>' +
      '<section class="block" aria-labelledby="h-n"><h3 id="h-n">12 nutrients in 100 g</h3><p>Each bar is the share of the EU daily reference found in 100 g of raw ' + lc(v.name) + ', capped at 100%. The Nutrient Density Score is the average of these 12 bars. The amount of each nutrient is shown under its name.</p><div class="nutrients">' + nutrientRows(v) + '</div></section>' +
      '<section class="block" aria-labelledby="h-s"><h3 id="h-s">Price and nutrition compared with the other 26</h3><p>Each dot is a vegetable. Further right means more nutritious, lower means cheaper, so the bottom right is where the best buys are. Select a dot to jump to that vegetable.</p>' + scatter(v) +
        '<div class="legend"><span class="cg-legend"><i class="cg-legend__dot cg-legend__dot--sel"></i>' + v.name + '</span><span class="cg-legend"><i class="cg-legend__dot"></i>Official consumer price (MAPA panel)</span><span class="cg-legend"><i class="cg-legend__dot cg-legend__dot--est"></i>Price from a product group or estimated</span></div></section>' +
      '<section class="block" aria-labelledby="h-c"><h3 id="h-c">' + v.name + ' compared with the median and the best</h3>' + cmp + '<p class="note">For price, best means the lowest of the 27. Median is the middle vegetable when all 27 are ranked.</p></section>';
    var back = document.getElementById('back');
    if (back) back.addEventListener('click', function () { var b = grid.querySelector('.veg[aria-pressed="true"]'); if (b) { b.scrollIntoView({ block: 'center' }); b.focus(); } });
    dyn.querySelectorAll('.pt').forEach(function (g) { g.addEventListener('click', function () { select(g.getAttribute('data-slug'), true); }); });
  }

  /* ---------- Table of everything ---------- */
  function renderTable() {
    document.getElementById('alltable').innerHTML = '<table><thead><tr><th scope="col">Vegetable</th><th scope="col">Price as bought (€ / kg)</th><th scope="col">Edible share (%)</th><th scope="col">Price, edible part (€ / kg)</th><th scope="col">Price type</th><th scope="col">Score (out of 100)</th><th scope="col">Per €1 (% of daily needs)</th><th scope="col">Energy (kcal / 100 g)</th></tr></thead><tbody>' +
      sorted().map(function (v) { return '<tr><td>' + v.name + '</td><td>' + euro(v.price) + '</td><td>' + Math.round(v.edible * 100) + '</td><td>' + euro(v.priceEdible) + '</td><td>' + SRC_SHORT[v.source] + '</td><td>' + v.score.toFixed(0) + '</td><td>' + v.perEuro.toFixed(0) + '</td><td>' + v.kcal + '</td></tr>'; }).join('') + '</tbody></table>';
  }

  /* ---------- Interactions ---------- */
  var narrow = window.matchMedia('(max-width: 999px)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  function select(slug, user) {
    state.sel = slug; markSelected(); renderDetail();
    document.getElementById('live').textContent = 'Showing details for ' + bySlug[slug].name;
    try { history.replaceState(null, '', '#' + slug); } catch (e) {}
    if (user && narrow.matches) { var d = document.getElementById('veg-name'); d.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth', block: 'start' }); d.focus({ preventScroll: true }); }
  }
  document.getElementById('sort').addEventListener('change', function (e) { state.sort = e.target.value; renderGrid(); renderTable(); });
  document.getElementById('basis').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    state.basis = b.getAttribute('data-mode');
    document.querySelectorAll('#basis button').forEach(function (x) { x.setAttribute('aria-checked', String(x === b)); });
    if (state.sort === 'price') renderGrid(); renderDetail();
  });
  renderGrid(); renderTable(); renderDetail();
})();

(function () {
  var d = document.getElementById('about-wrap'), mq = window.matchMedia('(min-width: 1000px)');
  function sync() { if (mq.matches) d.open = true; }
  sync(); if (mq.addEventListener) mq.addEventListener('change', sync);
})();
