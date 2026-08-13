/* ==========================================================================
   Language switching. Japanese is the default.
   The choice is remembered in the browser, so a returning reader keeps it.
   ========================================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'taimatsu-training-lang';
  var DEFAULT   = 'ja';

  /* the diagram labels live in DATA but are addressed by data-i18n keys,
     so fold them into the flat string table */
  if (window.DATA && window.DATA.flowLabels) {
    Object.keys(window.DATA.flowLabels).forEach(function (k) {
      window.STR[k] = window.DATA.flowLabels[k];
    });
  }

  var listeners = [];
  var lang = DEFAULT;

  try {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved === 'ja' || saved === 'en') lang = saved;
  } catch (e) { /* private browsing — fall back to the default */ }

  /** look up a flat string by key */
  function t(key) {
    var entry = window.STR[key];
    if (!entry) return '[' + key + ']';
    return entry[lang] != null ? entry[lang] : entry[DEFAULT];
  }

  /** pull the right half out of any { ja: …, en: … } object */
  function pick(obj) {
    if (!obj) return '';
    return obj[lang] != null ? obj[lang] : obj[DEFAULT];
  }

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      /* a few labels legitimately contain <br> */
      if (v.indexOf('<br>') !== -1) el.innerHTML = v;
      else el.textContent = v;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    listeners.forEach(function (fn) { fn(lang); });
  }

  function set(next) {
    if (next !== 'ja' && next !== 'en') return;
    if (next === lang) return;
    lang = next;
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    apply();
  }

  window.I18N = {
    t: t,
    pick: pick,
    apply: apply,
    set: set,
    get lang() { return lang; },
    onChange: function (fn) { listeners.push(fn); }
  };

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.lang-switch button');
    if (btn) set(btn.getAttribute('data-lang'));
  });
})();
