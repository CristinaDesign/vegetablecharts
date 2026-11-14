
  /* ---------- Game ---------- */
  var ROUNDS = 10;
  var game = document.getElementById('game'), live = document.getElementById('live');
  var themeBtn = document.getElementById('theme');
  function setTheme(dark) { root.setAttribute('data-theme', dark ? 'dark' : 'light'); themeBtn.setAttribute('aria-checked', String(dark)); }
  setTheme(window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
  themeBtn.addEventListener('click', function () { setTheme(root.getAttribute('data-theme') !== 'dark'); });

  function euro(x) { return x.toFixed(2); }
  function pic(v) { return '<img src="icons/' + v.slug + '.png" alt="" data-fb="' + v.color + '">'; }
  function banner(kind, name, title, text) {
    return '<div class="cg-banner cg-banner--' + kind + '" role="status"><span class="cg-banner__icon">' + icon(name) + '</span><div class="cg-banner__body"><strong class="cg-banner__title">' + title + '</strong><div>' + text + '</div></div></div>';
  }
  document.addEventListener('error', function (e) {
    var img = e.target; if (!img || img.tagName !== 'IMG' || !img.hasAttribute('data-fb')) return;
    var fb = document.createElement('span'); fb.className = 'dot-fallback'; fb.style.background = img.getAttribute('data-fb'); img.replaceWith(fb);
  }, true);

  var officialPool = veg.filter(function (v) { return v.source === 'panel'; });
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var AUTO_MS = 5000, CHOICES = 4;
  function lcFirst(s) { return s.charAt(0).toLowerCase() + s.slice(1); }
  function nutName(k) { return lcFirst(NAMES[k][0]).replace(/^vitamin (.+)$/, function (m, x) { return 'vitamin ' + x.toUpperCase(); }); }
  function numSpan(text, to, dec) { return '<span class="num" data-to="' + to + '" data-dec="' + dec + '">' + text + '</span>'; }
  function grams(g) { return g >= 1000 ? { t: (g / 1000).toFixed(1), to: g / 1000, dec: 1, unit: 'kg' } : (g < 10 ? { t: g.toFixed(1), to: g, dec: 1, unit: 'g' } : { t: g.toFixed(0), to: g, dec: 0, unit: 'g' }); }
  function amt(x, unit) { return { t: x < 1 ? x.toFixed(2) : (x < 10 ? x.toFixed(1) : x.toFixed(0)), to: x, dec: x < 1 ? 2 : (x < 10 ? 1 : 0), unit: unit }; }
  function ord(n) { return ['1st', '2nd', '3rd', '4th'][n - 1] || n + 'th'; }
  function show(f) { return (f.pre || '') + numSpan(f.t, f.to, f.dec) + '<small>' + f.unit + '</small>'; }
  function plain(f) { return (f.pre || '') + f.t + (f.glue === '' ? '' : ' ') + f.unit; }

  /* One question type: what is measured, who wins (high or low), how clear the win must be */
  function Q(o) {
    o.valHTML = function (v) { return '<span class="val">' + show(o.fmt(v)) + '</span>'; };
    o.text = function (v) { return plain(o.fmt(v)); };
    return o;
  }
  function refText(k) { return REF[k] + ' ' + NAMES[k][1]; }
  var T = {
    nutritious: function (high) { return Q({ key: 'score' + high, pool: veg, get: function (v) { return v.score; }, high: high, ratio: 1.12, diff: 4,
      title: high ? 'Which is the most nutritious?' : 'Which is the least nutritious?',
      help: (high ? 'Highest' : 'Lowest') + ' Nutrient Density Score wins. The score is out of 100: the average share of 12 daily nutrients found in 100 g.',
      fmt: function (v) { return { t: v.score.toFixed(0), to: v.score, dec: 0, unit: 'out of 100' }; } }); },
    price: function (high) { return Q({ key: 'price' + high, pool: officialPool, get: function (v) { return v.price; }, high: high, ratio: 1.12, diff: .4,
      title: high ? 'Which is the most expensive?' : 'Which is the cheapest?',
      help: (high ? 'Highest' : 'Lowest') + ' price wins. Prices are in € per kg as bought (the whole product), July 2026, official MAPA prices.',
      fmt: function (v) { return { pre: '€ ', t: v.price.toFixed(2), to: v.price, dec: 2, unit: 'per kg' }; } }); },
    energy: function (high) { return Q({ key: 'kcal' + high, pool: veg, get: function (v) { return v.kcal; }, high: high, ratio: 1.2, diff: 12,
      title: high ? 'Which has the most energy?' : 'Which has the least energy?',
      help: (high ? 'Most' : 'Fewest') + ' kilocalories (kcal) per 100 g of raw vegetable wins, from USDA FoodData Central.',
      fmt: function (v) { return { t: String(v.kcal), to: v.kcal, dec: 0, unit: 'kcal per 100 g' }; } }); },
    day: function (k) { return Q({ key: 'day' + k, pool: veg.filter(function (v) { return v.n[k] > 0; }), get: function (v) { return 100 * REF[k] / v.n[k]; }, high: false, ratio: 1.35, diff: 4,
      title: 'Which gives you a whole day of ' + nutName(k) + ' in the smallest portion?',
      help: 'Smallest portion wins. A whole day means the EU daily reference, ' + refText(k) + ' of ' + nutName(k) + '. Portions are raw vegetable, approximate (USDA).',
      fmt: function (v) { return grams(100 * REF[k] / v.n[k]); } }); },
    eatLots: function () { return Q({ key: 'lots', pool: veg, get: function (v) { return 200000 / v.kcal; }, high: true, ratio: 1.2, diff: 300,
      title: 'Which would you have to eat the most of to reach 2,000 kcal?',
      help: 'Biggest amount wins. 2,000 kcal is just a round number for a fun comparison, not a diet advice. Amounts are raw vegetable.',
      fmt: function (v) { return grams(200000 / v.kcal); } }); },
    euro: function () { return Q({ key: 'euro', pool: officialPool, get: function (v) { return 1000 / v.price; }, high: true, ratio: 1.2, diff: 40,
      title: 'Which gives you the most vegetable for €1?',
      help: 'Heaviest portion wins. Weight is as bought (the whole product), at the July 2026 official MAPA price.',
      fmt: function (v) { return grams(1000 / v.price); } }); },
    cheapDay: function (k) { return Q({ key: 'cheap' + k, pool: officialPool.filter(function (v) { return v.n[k] > 0; }), get: function (v) { return v.priceEdible / 1000 * 100 * REF[k] / v.n[k]; }, high: false, ratio: 1.4, diff: .03,
      title: 'Which is the cheapest way to get a whole day of ' + nutName(k) + '?',
      help: 'Lowest cost wins. A whole day means the EU daily reference, ' + refText(k) + ' of ' + nutName(k) + '. Cost is for the edible part, at the July 2026 official MAPA price.',
      fmt: function (v) { var c = v.priceEdible / 1000 * 100 * REF[k] / v.n[k]; return { pre: '€ ', t: c.toFixed(2), to: c, dec: 2, unit: 'for a whole day' }; } }); },
    cheapKcal: function () { return Q({ key: 'ckcal', pool: officialPool, get: function (v) { return v.priceEdible * 100 / v.kcal; }, high: false, ratio: 1.3, diff: .3,
      title: 'Which is the cheapest way to eat 1,000 kcal?',
      help: 'Lowest cost wins. Cost is for the edible part, at the July 2026 official MAPA price, to reach 1,000 kcal.',
      fmt: function (v) { var c = v.priceEdible * 100 / v.kcal; return { pre: '€ ', t: c.toFixed(2), to: c, dec: 2, unit: 'per 1,000 kcal' }; } }); },
    dense: function (k) { return Q({ key: 'dense' + k, pool: veg, get: function (v) { return v.n[k] * 100 / v.kcal; }, high: true, ratio: 1.35, diff: REF[k] * .02,
      title: 'Which packs the most ' + nutName(k) + ' into 100 kcal?',
      help: 'Most ' + nutName(k) + ' per 100 kcal wins, in ' + NAMES[k][1] + '. Amounts are from raw vegetable, approximate (USDA).',
      fmt: function (v) { return amt(v.n[k] * 100 / v.kcal, NAMES[k][1] + ' per 100 kcal'); } }); },
    waste: function () { return Q({ key: 'waste', pool: veg, get: function (v) { return v.edible * 100; }, high: false, ratio: 1.1, diff: 5,
      title: 'Which has the most waste after trimming or peeling?',
      help: 'Lowest edible share wins. Edible share is the part of the weight bought that you actually eat, approximate (USDA refuse factors).',
      fmt: function (v) { var e = v.edible * 100; return { t: e.toFixed(0), to: e, dec: 0, unit: '% edible', glue: '' }; } }); }
  };
  var NUT_KEYS = ['prot', 'fib', 'a', 'c', 'k', 'pot', 'ca', 'fe', 'fol', 'mg'];
  function rk() { return NUT_KEYS[Math.floor(Math.random() * NUT_KEYS.length)]; }
  var MAKERS = [
    function () { return T.nutritious(Math.random() < .6); }, function () { return T.price(Math.random() < .5); }, function () { return T.energy(Math.random() < .5); },
    function () { return T.day(rk()); }, function () { return T.day(rk()); }, T.eatLots, T.euro,
    function () { return T.cheapDay(rk()); }, T.cheapKcal, function () { return T.dense(rk()); }, function () { return T.dense(rk()); }, T.waste
  ];
  var state = { i: 0, score: 0, streak: 0, best: 0, q: null, answered: false, log: [], lastKey: '', recent: {}, auto: true, timer: null };

  function pickPair(K) {
    for (var t = 0; t < 300; t++) {
      var pool = K.pool.slice(), opts = [];
      while (opts.length < CHOICES && pool.length) opts.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
      if (opts.length < CHOICES) return null;
      var sorted = opts.slice().sort(function (x, y) { return K.high ? K.get(y) - K.get(x) : K.get(x) - K.get(y); });
      var b = K.get(sorted[0]), s = K.get(sorted[1]);
      var clear = K.high ? (b >= s * K.ratio && b - s >= K.diff) : (s >= b * K.ratio && s - b >= K.diff);
      if (!clear) continue;
      var seen = {}, distinct = true; opts.forEach(function (o) { var tx = K.text(o); if (seen[tx]) distinct = false; seen[tx] = 1; });
      if (!distinct) continue;
      if (t < 120 && opts.filter(function (o) { return state.recent[o.slug]; }).length > 1) continue;
      return { K: K, opts: opts, rank: sorted, win: sorted[0] };
    }
    return null;
  }
  function newQuestion() {
    for (var t = 0; t < 60; t++) {
      var K = MAKERS[Math.floor(Math.random() * MAKERS.length)]();
      if (K.key === state.lastKey && t < 40) continue;
      var p = pickPair(K); if (p) { state.lastKey = K.key; state.recent = {}; p.opts.forEach(function (o) { state.recent[o.slug] = 1; }); return p; }
    }
    return pickPair(T.nutritious(true));
  }

  /* ---------- Micro-interactions ---------- */
  function countUp(el) {
    var to = parseFloat(el.getAttribute('data-to')), dec = parseInt(el.getAttribute('data-dec'), 10), final = el.textContent;
    if (REDUCED || isNaN(to)) return;
    var t0 = null, dur = 650;
    function step(t) { if (t0 === null) t0 = t; var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = (to * e).toFixed(dec); if (p < 1) requestAnimationFrame(step); else el.textContent = final; }
    el.textContent = (0).toFixed(dec); requestAnimationFrame(step);
  }
  function burst(btn, color) {
    if (REDUCED) return;
    var cols = [color, 'var(--cg-color-accent)', 'var(--cg-color-success)'];
    for (var i = 0; i < 12; i++) {
      var s = document.createElement('span'), ang = (Math.PI * 2 * i) / 12 + Math.random() * .4, dist = 50 + Math.random() * 40;
      s.className = 'spark'; s.setAttribute('aria-hidden', 'true');
      s.style.setProperty('--dx', Math.cos(ang) * dist + 'px'); s.style.setProperty('--dy', Math.sin(ang) * dist + 'px'); s.style.background = cols[i % 3];
      btn.appendChild(s); setTimeout(function (x) { x.remove(); }.bind(null, s), 800);
    }
  }
  function bump(el) { if (REDUCED || !el) return; el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump'); }

  /* ---------- Screens ---------- */
  function autoSwitch() {
    return '<button class="cg-switch" id="auto" type="button" role="switch" aria-checked="' + state.auto + '"><span class="cg-switch__track"><span class="cg-switch__knob"></span></span><span>Move on by itself after 5 seconds</span></button>';
  }
  function bindAuto() {
    var s = document.getElementById('auto'); if (!s) return;
    s.addEventListener('click', function () { state.auto = !state.auto; s.setAttribute('aria-checked', String(state.auto)); if (state.answered) armTimer(); });
  }
  function armTimer() {
    clearTimeout(state.timer); var cd = document.getElementById('cd'); if (cd) cd.remove();
    var nb = document.getElementById('next'); if (!nb || !state.auto) return;
    var bar = document.createElement('i'); bar.id = 'cd'; bar.setAttribute('aria-hidden', 'true'); bar.style.animationDuration = AUTO_MS + 'ms'; nb.appendChild(bar);
    state.timer = setTimeout(function () { nb.click(); }, AUTO_MS);
  }

  var TEASERS = ['Which gives you a whole day of vitamin C in the smallest portion?', 'Which is the cheapest way to eat 1,000 kcal?', 'Which would you have to eat the most of to reach 2,000 kcal?', 'Which has the most waste after trimming or peeling?', 'Which packs the most iron into 100 kcal?', 'Which gives you the most vegetable for €1?'];
  var teaserTimer = null;
  function renderStart() {
    clearTimeout(state.timer); clearInterval(teaserTimer);
    document.body.classList.add('landing');
    var pool = veg.slice(), four = [];
    while (four.length < 4) four.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    game.innerHTML =
      '<div class="hero">' +
        '<div class="fan" aria-hidden="true">' +
          four.map(function (v, i) { return '<div class="fcard f' + (i + 1) + '"><span class="pic">' + pic(v) + '</span><b>' + v.name + '</b></div>'; }).join('') +
          '<span class="vs">VS</span>' +
        '</div>' +
        '<div class="copy">' +
          '<h1 class="mega">Vegetable<br>face-off</h1>' +
          '<p class="tag-line">Four vegetables. One odd question. Can you spot the winner?</p>' +
          '<p class="teaser" aria-hidden="true"><span class="cg-chip cg-chip--solid">Try this</span><span id="teaser">' + TEASERS[0] + '</span></p>' +
          '<div class="actions"><button type="button" class="cg-btn cg-btn--primary huge" id="start"><span>Start game</span><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></div>' +
          '<div class="chips"><span class="cg-chip"><b>10</b> questions</span><span class="cg-chip"><b>4</b> vegetables each</span><span class="cg-chip">about <b>2</b> minutes</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="screen intro">' +
        '<p>Each game has ' + ROUNDS + ' random questions, and every question shows <b>four vegetables</b> from 27 sold in Spain. Pick the one that wins. Questions compare nutrition per 100 g, price in € per kg, energy in kcal, and how much of a vegetable you would need for a whole day of one nutrient. After each pick you see the real numbers and units for all four.</p>' +
        autoSwitch() +
      '</div>';
    bindAuto(); document.getElementById('start').addEventListener('click', start);
    var ti = 0, te = document.getElementById('teaser');
    if (!REDUCED) teaserTimer = setInterval(function () {
      ti = (ti + 1) % TEASERS.length; te.classList.add('out');
      setTimeout(function () { te.textContent = TEASERS[ti]; te.classList.remove('out'); }, 260);
    }, 3200);
  }
  function start() { document.body.classList.remove('landing'); clearInterval(teaserTimer); state.i = 0; state.score = 0; state.streak = 0; state.best = 0; state.log = []; state.lastKey = ''; state.recent = {}; nextQ(); }
  function nextQ() {
    clearTimeout(state.timer);
    state.i++; state.answered = false; state.q = newQuestion(); renderQ();
    var h = document.getElementById('q-title'); if (h) h.focus({ preventScroll: true });
    live.textContent = 'Question ' + state.i + ' of ' + ROUNDS + '. ' + state.q.K.title;
  }
  function cardHTML(v, i) {
    return '<button type="button" class="pick" data-i="' + i + '"><span class="pic">' + pic(v) + '</span><b>' + v.name + '</b><span class="reveal"><span class="hint">Select</span></span></button>';
  }
  function statsHTML() {
    return '<div class="stats" aria-label="Progress"><span><b>' + state.i + '</b>of ' + ROUNDS + '</span><span><b id="st-score">' + state.score + '</b>correct</span><span><b id="st-streak">' + state.streak + '</b>in a row</span></div>' +
      '<div class="prog" aria-hidden="true"><i style="width:' + ((state.i - 1) / ROUNDS * 100) + '%"></i></div>';
  }
  function renderQ() {
    var q = state.q, K = q.K;
    game.innerHTML = '<div class="screen">' + statsHTML() +
      '<div class="q"><h2 id="q-title" tabindex="-1">' + K.title + '</h2><p>' + K.help + '</p></div>' +
      '<div class="pair" role="group" aria-labelledby="q-title">' + q.opts.map(cardHTML).join('') + '</div>' +
      '<div id="fb"></div><div class="actions" id="nx"></div></div>';
    game.querySelectorAll('.pick').forEach(function (b) { b.addEventListener('click', function () { answer(parseInt(b.getAttribute('data-i'), 10)); }); });
  }

  function answer(idx) {
    if (state.answered) return; state.answered = true;
    var q = state.q, K = q.K, chosen = q.opts[idx], ok = chosen === q.win;
    if (ok) { state.score++; state.streak++; state.best = Math.max(state.best, state.streak); } else state.streak = 0;
    state.log.push({ K: K, win: q.win, chosen: chosen, ok: ok });
    game.querySelectorAll('.pick').forEach(function (btn) {
      var v = q.opts[parseInt(btn.getAttribute('data-i'), 10)], isWin = v === q.win, isPick = v === chosen, r = q.rank.indexOf(v) + 1;
      btn.setAttribute('data-done', ''); btn.setAttribute('aria-pressed', String(isPick));
      btn.classList.add(isWin ? 'right' : (isPick ? 'wrong' : 'dim'));
      if (isPick) btn.classList.add(ok ? 'cheer' : 'shake');
      btn.querySelector('.reveal').innerHTML = K.valHTML(v) +
        '<span class="tag">' + (isWin ? icon('check_circle', 20) + 'Winner' + (isPick ? ', your pick' : '') : (isPick ? icon('close', 20) + 'Your pick, ' + ord(r) : ord(r))) + '</span>';
      btn.querySelectorAll('.num').forEach(countUp);
      if (isPick && ok) burst(btn, v.color);
    });
    var order = q.rank.slice(1).map(function (v) { return v.name + ' ' + K.text(v); }).join('; ');
    var msg = ok
      ? banner('success', 'check_circle', 'Correct', q.win.name + ' wins with ' + K.text(q.win) + '. Then: ' + order + '.' + (state.streak > 1 ? ' ' + state.streak + ' in a row.' : ''))
      : banner('error', 'error', 'Not this time', q.win.name + ' wins with ' + K.text(q.win) + '. You picked ' + chosen.name + ' (' + K.text(chosen) + ', ' + ord(q.rank.indexOf(chosen) + 1) + '). Order: ' + q.rank.map(function (v) { return v.name; }).join(', ') + '.');
    var fb = document.getElementById('fb'); fb.innerHTML = msg; fb.classList.add('in');
    var last = state.i >= ROUNDS;
    document.getElementById('nx').innerHTML = '<button type="button" class="cg-btn cg-btn--primary big" id="next"><span>' + (last ? 'See my results' : 'Next question') + '</span></button>' + autoSwitch();
    var nb = document.getElementById('next'); nb.addEventListener('click', last ? renderResults : nextQ); nb.focus({ preventScroll: true }); bindAuto();
    var sc = document.getElementById('st-score'), st = document.getElementById('st-streak'); sc.textContent = state.score; st.textContent = state.streak;
    if (ok) { bump(sc); if (state.streak > 1) bump(st); }
    document.querySelector('.prog i').style.width = (state.i / ROUNDS * 100) + '%';
    live.textContent = (ok ? 'Correct. ' : 'Not this time. ') + q.win.name + ' wins with ' + K.text(q.win) + '.';
    armTimer();
    nb.scrollIntoView({ block: 'nearest', behavior: REDUCED ? 'auto' : 'smooth' });
  }

  function renderResults() {
    clearTimeout(state.timer);
    var s = state.score, msg = s >= 9 ? 'Market expert.' : s >= 7 ? 'You know your vegetables.' : s >= 5 ? 'Not bad. Some of these are very surprising.' : 'Tricky ones. Vegetables are full of surprises.';
    game.innerHTML = '<div class="screen">' +
      '<div class="q"><h2 id="q-title" tabindex="-1">Your results</h2></div>' +
      '<p class="score-big">' + numSpan(s, s, 0) + '<small>correct out of ' + ROUNDS + '</small></p>' +
      '<p>' + msg + ' Longest run: ' + state.best + ' in a row.</p>' +
      '<div class="actions"><button type="button" class="cg-btn cg-btn--primary big" id="again">Play again</button></div>' +
      '<div class="cg-table rounds"><table><thead><tr><th scope="col">Question</th><th scope="col">Right answer</th><th scope="col">You</th></tr></thead><tbody>' +
      state.log.map(function (r, i) {
        return '<tr><td>' + (i + 1) + '. ' + r.K.title.replace('?', '') + '</td><td>' + r.win.name + ', ' + r.K.text(r.win) + '</td><td><span class="res ' + (r.ok ? 'ok' : 'no') + '">' + icon(r.ok ? 'check_circle' : 'close', 20) + (r.ok ? 'Correct' : 'Missed') + '</span>' + (r.ok ? '' : '<br>' + r.chosen.name) + '</td></tr>';
      }).join('') + '</tbody></table></div></div>';
    document.getElementById('again').addEventListener('click', start);
    document.querySelectorAll('.num').forEach(countUp);
    document.getElementById('q-title').focus({ preventScroll: true });
    live.textContent = 'Game over. You got ' + s + ' of ' + ROUNDS + ' correct.';
  }

  renderStart();
})();
