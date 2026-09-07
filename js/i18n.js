/* Trekk Mobility — language switcher engine.
   Translates any [data-i18n] element's innerHTML, [data-i18n-placeholder]
   input placeholders, and the services-page tab data-title/data-desc/data-points
   attributes, based on the dictionaries in js/i18n/{en,fr,es}.js. Persists the
   chosen language in localStorage so it carries across page navigation. */
(function () {
  var STORAGE_KEY = 'trekk-lang';
  var SUPPORTED = ['en', 'fr', 'es'];
  var LABELS = { en: 'EN', fr: 'FR', es: 'ES' };
  var NAMES = { en: 'English', fr: 'Français', es: 'Español' };

  function getLang() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {}
    return 'en';
  }

  function setLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function t(key, lang) {
    var dicts = window.TREKK_I18N || {};
    var dict = dicts[lang] || {};
    if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
    var fallback = dicts.en || {};
    if (Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return null;
  }

  function renderServicePanel(btn) {
    var highlight = document.querySelector('.service-highlight');
    if (!btn || !highlight) return;
    var h3 = highlight.querySelector('h3');
    var p = highlight.querySelector('p');
    var list = highlight.querySelector('ul');
    if (h3) h3.textContent = btn.dataset.title || '';
    if (p) p.textContent = btn.dataset.desc || '';
    if (list && btn.dataset.points) {
      list.innerHTML = '';
      btn.dataset.points.split('|').forEach(function (point) {
        var li = document.createElement('li');
        li.textContent = point;
        list.appendChild(li);
      });
    }
  }

  function applyTranslations(lang) {
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key, lang);
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var value = t(key, lang);
      if (value !== null) el.setAttribute('placeholder', value);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      var value = t(key, lang);
      if (value !== null) el.setAttribute('aria-label', value);
    });

    var activeTabBtn = null;
    document.querySelectorAll('[data-i18n-tab]').forEach(function (btn) {
      var base = btn.getAttribute('data-i18n-tab');
      var title = t(base + '.title', lang);
      var desc = t(base + '.desc', lang);
      var points = t(base + '.points', lang);
      if (title !== null) btn.textContent = title;
      if (title !== null) btn.dataset.title = title;
      if (desc !== null) btn.dataset.desc = desc;
      if (points !== null) btn.dataset.points = points;
      if (btn.getAttribute('aria-selected') === 'true') activeTabBtn = btn;
    });
    if (activeTabBtn) renderServicePanel(activeTabBtn);

    // Pricing feature-matrix Yes/No/Optional cells share one translation each,
    // rather than tagging every one of the ~100+ cells individually.
    document.querySelectorAll('td.yes').forEach(function (el) {
      var v = t('common.yes', lang);
      if (v !== null) el.textContent = v;
    });
    document.querySelectorAll('td.no').forEach(function (el) {
      var v = t('common.no', lang);
      if (v !== null) el.textContent = v;
    });
    document.querySelectorAll('td.opt').forEach(function (el) {
      var v = t('common.optional', lang);
      if (v !== null) el.textContent = v;
    });
  }

  function buildSwitcher(current) {
    var wrap = document.createElement('div');
    wrap.className = 'lang-switch';
    var select = document.createElement('select');
    select.className = 'lang-select';
    select.setAttribute('aria-label', 'Choose language');
    SUPPORTED.forEach(function (code) {
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LABELS[code] + ' — ' + NAMES[code];
      if (code === current) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener('change', function () {
      var lang = select.value;
      setLang(lang);
      applyTranslations(lang);
    });
    wrap.appendChild(select);
    return wrap;
  }

  function injectSwitcher(lang) {
    var ctas = document.querySelectorAll('.nav-cta');
    ctas.forEach(function (cta) {
      if (cta.querySelector('.lang-switch')) return;
      var toggle = cta.querySelector('.nav-toggle');
      var switcher = buildSwitcher(lang);
      if (toggle) cta.insertBefore(switcher, toggle);
      else cta.appendChild(switcher);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var lang = getLang();
    injectSwitcher(lang);
    applyTranslations(lang);
  });
})();
