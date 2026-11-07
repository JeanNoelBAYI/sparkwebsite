(function () {
  var FX = { NGN: 1333.5, USD: 1, GHS: 11.25, XOF: 566, EUR: 0.865 };
  var SYMBOL = { NGN: '₦', USD: '$', GHS: 'GH₵', XOF: 'FCFA', EUR: '€' };

  var DEFAULTS = {
    NGN: { cost: 867000, fare: 800, opex: 30000 },
    USD: { cost: 650, fare: 0.60, opex: 22.5 },
    GHS: { cost: 7313, fare: 6.75, opex: 253 },
    XOF: { cost: 367900, fare: 340, opex: 12735 },
    EUR: { cost: 562, fare: 0.52, opex: 19 }
  };

  var SETUP_FEE = {
    NGN: { basic: 5334000, standard: 8001000, premium: 10667000 },
    USD: { basic: 4000, standard: 6000, premium: 8000 },
    GHS: { basic: 45000, standard: 67500, premium: 90000 },
    XOF: { basic: 2264000, standard: 3396000, premium: 4528000 },
    EUR: { basic: 3460, standard: 5190, premium: 6910 }
  };

  var PER_VEHICLE_FEE = {
    NGN: [10667, 9334, 6667, 5334],
    USD: [8, 7, 5, 4],
    GHS: [90, 79, 56, 45],
    XOF: [4528, 3962, 2830, 2264],
    EUR: [7, 6, 4, 3]
  };

  var TIER_LABEL = { basic: 'Basic', standard: 'Standard', premium: 'Premium' };

  var form = document.getElementById('calcForm');
  if (!form) return;

  var els = {};
  [
    'calcScooters', 'calcCost', 'calcRides', 'calcFare', 'calcOpex', 'calcLifespan',
    'calcHorizon', 'calcHorizonValue', 'calcCostUnit', 'calcFareUnit', 'calcOpexUnit',
    'calcPayback', 'calcRoi', 'calcInvestment', 'calcRevenue', 'calcTrekkFee',
    'calcOpexTotal', 'calcNetProfit', 'calcTierBadge', 'calcTierText', 'calcChart',
    'calcTooltip', 'calcTableToggle', 'calcTableWrap', 'calcTableBody', 'calcReset',
    'calcCurrencyToggle', 'calcChartWrap'
  ].forEach(function (id) { els[id] = document.getElementById(id); });

  var state = { currency: 'NGN', chart: null };

  function perVehicleFee(currency, count) {
    var bands = PER_VEHICLE_FEE[currency];
    if (count <= 100) return bands[0];
    if (count <= 500) return bands[1];
    if (count <= 1000) return bands[2];
    return bands[3];
  }

  function tierFor(count) {
    if (count <= 500) return 'basic';
    if (count <= 1500) return 'standard';
    return 'premium';
  }

  function fmt(value, decimals) {
    decimals = decimals || 0;
    var neg = value < 0;
    var abs = Math.abs(value);
    var str = abs.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return (neg ? '−' : '') + SYMBOL[state.currency] + str;
  }

  function compactFmt(value) {
    var neg = value < 0;
    var abs = Math.abs(value);
    var sym = SYMBOL[state.currency];
    var out;
    if (abs >= 1e6) out = sym + (abs / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    else if (abs >= 1e3) out = sym + (abs / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    else out = sym + Math.round(abs).toLocaleString('en-US');
    return (neg ? '−' : '') + out;
  }

  function updateUnits() {
    var label = '(' + SYMBOL[state.currency] + ')';
    els.calcCostUnit.textContent = label;
    els.calcFareUnit.textContent = label;
    els.calcOpexUnit.textContent = label;
  }

  function applyDefaults(currency) {
    var d = DEFAULTS[currency];
    els.calcCost.value = d.cost;
    els.calcFare.value = d.fare;
    els.calcOpex.value = d.opex;
  }

  function convertFieldsToCurrency(oldCurrency, newCurrency) {
    var factor = FX[newCurrency] / FX[oldCurrency];
    var cost = parseFloat(els.calcCost.value) || 0;
    var fare = parseFloat(els.calcFare.value) || 0;
    var opex = parseFloat(els.calcOpex.value) || 0;
    els.calcCost.value = round(cost * factor, newCurrency === 'USD' || newCurrency === 'EUR' ? 2 : 0);
    els.calcFare.value = round(fare * factor, 2);
    els.calcOpex.value = round(opex * factor, newCurrency === 'USD' || newCurrency === 'EUR' ? 2 : 0);
  }

  function round(value, decimals) {
    var p = Math.pow(10, decimals);
    return Math.round(value * p) / p;
  }

  function readInputs() {
    return {
      scooters: Math.max(1, parseFloat(els.calcScooters.value) || 0),
      cost: Math.max(0, parseFloat(els.calcCost.value) || 0),
      rides: Math.max(0, parseFloat(els.calcRides.value) || 0),
      fare: Math.max(0, parseFloat(els.calcFare.value) || 0),
      opex: Math.max(0, parseFloat(els.calcOpex.value) || 0),
      lifespan: Math.max(1, parseFloat(els.calcLifespan.value) || 1),
      horizon: Math.max(1, parseFloat(els.calcHorizon.value) || 1)
    };
  }

  function compute(inputs) {
    var tier = tierFor(inputs.scooters);
    var fee = SETUP_FEE[state.currency][tier];
    var perVehicle = perVehicleFee(state.currency, inputs.scooters);

    var initialInvestment = inputs.scooters * inputs.cost + fee;
    var monthlyRevenue = inputs.scooters * inputs.rides * inputs.fare * 30;
    var monthlyTrekkFee = inputs.scooters * perVehicle;
    var monthlyOpexTotal = inputs.scooters * inputs.opex;
    var monthlyNetProfit = monthlyRevenue - monthlyTrekkFee - monthlyOpexTotal;
    var replacementCost = inputs.scooters * inputs.cost;

    var cumulative = [-initialInvestment];
    var netFlow = [-initialInvestment];
    for (var m = 1; m <= inputs.horizon; m++) {
      var flow = monthlyNetProfit;
      if (m % inputs.lifespan === 0 && m < inputs.horizon) flow -= replacementCost;
      netFlow.push(flow);
      cumulative.push(cumulative[m - 1] + flow);
    }

    var paybackMonth = null;
    for (var i = 1; i < cumulative.length; i++) {
      if (cumulative[i] >= 0) {
        var prev = cumulative[i - 1];
        var curr = cumulative[i];
        var frac = curr === prev ? 0 : (-prev) / (curr - prev);
        paybackMonth = (i - 1) + frac;
        break;
      }
    }

    var roiPercent = initialInvestment > 0 ? (cumulative[cumulative.length - 1] / initialInvestment) * 100 : 0;

    return {
      tier: tier, fee: fee, perVehicle: perVehicle,
      initialInvestment: initialInvestment, monthlyRevenue: monthlyRevenue,
      monthlyTrekkFee: monthlyTrekkFee, monthlyOpexTotal: monthlyOpexTotal,
      monthlyNetProfit: monthlyNetProfit, cumulative: cumulative, netFlow: netFlow,
      paybackMonth: paybackMonth, roiPercent: roiPercent, horizon: inputs.horizon
    };
  }

  function renderStats(result) {
    els.calcPayback.textContent = result.paybackMonth === null
      ? 'Never'
      : result.paybackMonth.toFixed(1) + ' mo';
    els.calcPayback.classList.toggle('is-warning', result.paybackMonth === null);

    els.calcRoi.textContent = (result.roiPercent >= 0 ? '+' : '−')
      + Math.abs(result.roiPercent).toFixed(0) + '%';
    els.calcRoi.classList.toggle('is-warning', result.roiPercent < 0);

    els.calcInvestment.textContent = fmt(result.initialInvestment);
    els.calcRevenue.textContent = fmt(result.monthlyRevenue);
    els.calcTrekkFee.textContent = fmt(result.monthlyTrekkFee);
    els.calcOpexTotal.textContent = fmt(result.monthlyOpexTotal);
    els.calcNetProfit.textContent = fmt(result.monthlyNetProfit);
    els.calcNetProfit.classList.toggle('is-warning', result.monthlyNetProfit < 0);

    els.calcTierBadge.textContent = TIER_LABEL[result.tier];
    els.calcTierText.innerHTML = TIER_LABEL[result.tier] + ' tier: ' + fmt(result.fee) +
      ' one-time set-up fee, ' + fmt(result.perVehicle, result.perVehicle < 10 ? 2 : 0) +
      ' / vehicle / month &mdash; pulled directly from our <a href="pricing.html">Pricing</a> page.';
  }

  function renderTable(result) {
    var rows = [];
    for (var m = 0; m < result.cumulative.length; m++) {
      var label = m === 0 ? 'Start' : 'Month ' + m;
      rows.push('<tr><td>' + label + '</td><td>' + fmt(result.netFlow[m]) + '</td><td>' + fmt(result.cumulative[m]) + '</td></tr>');
    }
    els.calcTableBody.innerHTML = rows.join('');
  }

  function renderChart(result) {
    var cumulative = result.cumulative;
    var horizon = result.horizon;
    var width = 800, height = 320;
    var padL = 72, padR = 20, padT = 20, padB = 34;
    var plotW = width - padL - padR;
    var plotH = height - padT - padB;

    var minV = Math.min.apply(null, cumulative.concat([0]));
    var maxV = Math.max.apply(null, cumulative.concat([0]));
    var span = maxV - minV || 1;
    minV -= span * 0.08;
    maxV += span * 0.08;
    span = maxV - minV;

    function xAt(m) { return padL + (m / horizon) * plotW; }
    function yAt(v) { return padT + (1 - (v - minV) / span) * plotH; }

    var zeroY = yAt(0);

    var linePoints = cumulative.map(function (v, m) { return xAt(m) + ',' + yAt(v); }).join(' ');

    var posArea = 'M' + xAt(0) + ',' + zeroY;
    cumulative.forEach(function (v, m) { posArea += ' L' + xAt(m) + ',' + yAt(Math.max(v, 0)); });
    posArea += ' L' + xAt(horizon) + ',' + zeroY + ' Z';

    var negArea = 'M' + xAt(0) + ',' + zeroY;
    cumulative.forEach(function (v, m) { negArea += ' L' + xAt(m) + ',' + yAt(Math.min(v, 0)); });
    negArea += ' L' + xAt(horizon) + ',' + zeroY + ' Z';

    var xStep = horizon <= 12 ? 2 : horizon <= 24 ? 3 : horizon <= 36 ? 6 : 12;
    var xTicks = '';
    for (var m = 0; m <= horizon; m += xStep) {
      var x = xAt(m);
      xTicks += '<text x="' + x + '" y="' + (height - 10) + '" class="calc-axis-label" text-anchor="middle">M' + m + '</text>';
    }

    var yTicks = '';
    var yVals = [maxV, maxV / 2 + minV / 2 > 0 ? maxV / 2 : 0, 0, minV];
    [maxV, 0, minV].forEach(function (v) {
      var y = yAt(v);
      yTicks += '<line x1="' + padL + '" y1="' + y + '" x2="' + (width - padR) + '" y2="' + y + '" class="calc-grid-line' + (v === 0 ? ' calc-zero-line' : '') + '" />';
      yTicks += '<text x="' + (padL - 10) + '" y="' + (y + 4) + '" class="calc-axis-label" text-anchor="end">' + compactFmt(v) + '</text>';
    });

    var paybackMarker = '';
    if (result.paybackMonth !== null && result.paybackMonth <= horizon) {
      var px = xAt(result.paybackMonth);
      var py = zeroY;
      paybackMarker = '<line x1="' + px + '" y1="' + padT + '" x2="' + px + '" y2="' + (height - padB) + '" class="calc-payback-line" />' +
        '<circle cx="' + px + '" cy="' + py + '" r="5" class="calc-payback-dot" />' +
        '<text x="' + px + '" y="' + (padT - 4) + '" class="calc-payback-label" text-anchor="' + (px > width - 140 ? 'end' : 'start') + '">Payback: Month ' + result.paybackMonth.toFixed(1) + '</text>';
    }

    var svg = '<clipPath id="calcClipPos"><rect x="' + padL + '" y="' + padT + '" width="' + plotW + '" height="' + (zeroY - padT) + '" /></clipPath>' +
      '<clipPath id="calcClipNeg"><rect x="' + padL + '" y="' + zeroY + '" width="' + plotW + '" height="' + (padT + plotH - zeroY) + '" /></clipPath>' +
      yTicks + xTicks +
      '<path d="' + posArea + '" class="calc-area-positive" clip-path="url(#calcClipPos)" />' +
      '<path d="' + negArea + '" class="calc-area-negative" clip-path="url(#calcClipNeg)" />' +
      '<polyline points="' + linePoints + '" class="calc-line" />' +
      paybackMarker +
      '<rect x="' + padL + '" y="' + padT + '" width="' + plotW + '" height="' + plotH + '" fill="transparent" id="calcChartHover" />' +
      '<g id="calcCrosshair" class="calc-crosshair" style="display:none;"><line x1="0" y1="' + padT + '" x2="0" y2="' + (height - padB) + '" /><circle r="4" /></g>';

    els.calcChart.innerHTML = svg;

    state.chart = { xAt: xAt, yAt: yAt, padL: padL, padR: padR, padT: padT, padB: padB, width: width, horizon: horizon, cumulative: cumulative };
  }

  function wireChartHover() {
    var wrap = els.calcChartWrap;
    var svg = els.calcChart;
    var tooltip = els.calcTooltip;

    function handleMove(clientX, clientY) {
      if (!state.chart) return;
      var rect = svg.getBoundingClientRect();
      var scaleX = state.chart.width / rect.width;
      var localX = (clientX - rect.left) * scaleX;
      var plotW = state.chart.width - state.chart.padL - state.chart.padR;
      var ratio = (localX - state.chart.padL) / plotW;
      ratio = Math.max(0, Math.min(1, ratio));
      var month = Math.round(ratio * state.chart.horizon);
      var value = state.chart.cumulative[month];
      if (value === undefined) return;

      var cx = state.chart.xAt(month);
      var cy = state.chart.yAt(value);
      var crosshair = document.getElementById('calcCrosshair');
      if (crosshair) {
        crosshair.style.display = 'block';
        crosshair.querySelector('line').setAttribute('x1', cx);
        crosshair.querySelector('line').setAttribute('x2', cx);
        crosshair.querySelector('circle').setAttribute('cx', cx);
        crosshair.querySelector('circle').setAttribute('cy', cy);
      }

      tooltip.hidden = false;
      tooltip.innerHTML = '<strong>Month ' + month + '</strong>' + fmt(value);
      var wrapRect = wrap.getBoundingClientRect();
      var scaleRatioX = rect.width / state.chart.width;
      var tooltipX = rect.left - wrapRect.left + cx * scaleRatioX;
      var tooltipY = rect.top - wrapRect.top + cy * (rect.height / 320);
      tooltip.style.left = tooltipX + 'px';
      tooltip.style.top = Math.max(0, tooltipY - 50) + 'px';
    }

    svg.addEventListener('mousemove', function (e) { handleMove(e.clientX, e.clientY); });
    svg.addEventListener('mouseleave', function () {
      tooltip.hidden = true;
      var crosshair = document.getElementById('calcCrosshair');
      if (crosshair) crosshair.style.display = 'none';
    });
    svg.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) { handleMove(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }
    }, { passive: false });
    svg.addEventListener('touchend', function () {
      tooltip.hidden = true;
      var crosshair = document.getElementById('calcCrosshair');
      if (crosshair) crosshair.style.display = 'none';
    });
  }

  function render() {
    var inputs = readInputs();
    var result = compute(inputs);
    renderStats(result);
    renderChart(result);
    renderTable(result);
  }

  els.calcCurrencyToggle.querySelectorAll('.currency-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var newCurrency = btn.dataset.currency;
      if (newCurrency === state.currency) return;
      convertFieldsToCurrency(state.currency, newCurrency);
      state.currency = newCurrency;
      els.calcCurrencyToggle.querySelectorAll('.currency-btn').forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', active ? 'true' : 'false');
      });
      updateUnits();
      render();
    });
  });

  ['calcScooters', 'calcCost', 'calcRides', 'calcFare', 'calcOpex', 'calcLifespan'].forEach(function (id) {
    els[id].addEventListener('input', render);
  });

  els.calcHorizon.addEventListener('input', function () {
    els.calcHorizonValue.textContent = els.calcHorizon.value;
    render();
  });

  els.calcReset.addEventListener('click', function () {
    els.calcScooters.value = 50;
    els.calcRides.value = 4;
    els.calcLifespan.value = 24;
    els.calcHorizon.value = 24;
    els.calcHorizonValue.textContent = 24;
    applyDefaults(state.currency);
    render();
  });

  els.calcTableToggle.addEventListener('click', function () {
    var isHidden = els.calcTableWrap.hidden;
    els.calcTableWrap.hidden = !isHidden;
    els.calcChartWrap.hidden = isHidden;
    els.calcTableToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
    els.calcTableToggle.textContent = isHidden ? 'View as chart' : 'View as table';
  });

  applyDefaults(state.currency);
  updateUnits();
  wireChartHover();
  render();
})();
