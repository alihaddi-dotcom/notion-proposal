/* ==========================================================================
   Chrome shared by every page in this repo (index.html, notion.html).

   Nothing here knows what a page is *about* — only how the frame around it
   works: the section nav, the scroll spy, and the presenter-notes toggle.
   Page-specific rendering lives in app.js / notion.js.

   The presenter logic in particular must exist in exactly one place: it is
   what keeps exercise answers and negotiating position off the audience URL.
   Two copies would eventually disagree.
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (sel) { return document.querySelector(sel); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function decorative(n) { n.setAttribute('aria-hidden', 'true'); return n; }

  /* Rebuilt on every language change, so the nav items are passed in rather
     than read from a global — the two pages have different DATA. */
  function renderNav(items) {
    var box = $('#navScroll');
    if (!box) return;
    box.innerHTML = '';
    items.forEach(function (item) {
      var a = el('a', null, window.I18N.pick(item));
      a.href = item.href;
      box.appendChild(a);
    });
  }

  function initScrollSpy(items) {
    var targets = items
      .map(function (n) { return document.getElementById(n.href.slice(1)); })
      .filter(Boolean);

    /* A nav pointing only at sections that no longer exist would otherwise
       leave `current` undefined and throw on the first scroll event. */
    if (!targets.length) return;

    function update() {
      var offset = 160;
      var current = targets[0];
      targets.forEach(function (sec) {
        if (sec.getBoundingClientRect().top <= offset) current = sec;
      });
      document.querySelectorAll('#navScroll a').forEach(function (a) {
        a.classList.toggle('is-current', a.getAttribute('href') === '#' + current.id);
      });
    }

    var queued = false;
    window.addEventListener('scroll', function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; update(); });
    }, { passive: true });
    update();
  }

  /* ======================================================================
     Presenter notes
     ====================================================================== */

  /* Notes are English-only and deliberately bypass I18N: switching the page to
     日本語 must leave them in English, because the presenter narrates in English
     while the room reads Japanese. Rendered once at boot — there is nothing
     language-dependent to re-render.
     See docs/adr/0001-english-narration-japanese-slides.md */
  function renderNotes() {
    document.querySelectorAll('[data-note]').forEach(function (n) {
      var html = window.NOTES[n.getAttribute('data-note')];
      n.innerHTML = html != null ? html : '';
    });
  }

  /* Presenter tooling is opt-in by URL: /index.html?presenter
     Without it the button is removed from the document entirely — not merely
     hidden — so it is absent from the tab order and cannot be pressed by a
     reader working alone. This matters because the material the notes carry
     is not for the audience: the workshop's exercise answer key, and the
     Notion deck's read on how the room is likely to push back.
     The stored preference is read ONLY in presenter mode; otherwise a toggle
     left on from an earlier visit would reveal the notes on the audience URL. */
  function isPresenterUrl() {
    return /(^|[?&])presenter(=|&|$)/.test(window.location.search);
  }

  function initPresenter(storeKey) {
    var btn = $('#presenterToggle');
    var on  = false;

    if (!isPresenterUrl()) {
      if (btn) btn.remove();
      document.body.classList.remove('presenter-on');
      return;
    }

    /* A published build strips the notes and the button out of the HTML
       altogether. Someone appending ?presenter to that page must not throw —
       throwing here would take out the scroll spy and the language toggle,
       which are wired up after this call. */
    if (!btn) return;

    document.body.classList.add('presenter-mode');
    try { on = localStorage.getItem(storeKey) === '1'; } catch (e) {}

    function paint() {
      document.body.classList.toggle('presenter-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      /* Open every note outright rather than leaving several <details> to click
         one by one mid-session. The presenter reads these from a private
         second screen, so "on" should mean visible, not "available". */
      document.querySelectorAll('.pnote').forEach(function (d) { d.open = on; });
    }
    btn.addEventListener('click', function () {
      on = !on;
      try { localStorage.setItem(storeKey, on ? '1' : '0'); } catch (e) {}
      paint();
    });
    paint();
  }

  /* ======================================================================
     Small render helpers used by both pages
     ====================================================================== */

  /* <table> builder. `rows` is an array of cell arrays; a cell is either
     { text } or { node }, optionally with { cls }. */
  function buildTable(table, headings, rows) {
    table.innerHTML = '';
    var thead = document.createElement('thead');
    var htr   = document.createElement('tr');
    headings.forEach(function (h) {
      var th = el('th', null, h);
      th.setAttribute('scope', 'col');
      htr.appendChild(th);
    });
    thead.appendChild(htr);
    table.appendChild(thead);

    var tbody = document.createElement('tbody');
    rows.forEach(function (cells) {
      var tr = document.createElement('tr');
      cells.forEach(function (cell) {
        var td = el('td', cell.cls || null);
        if (cell.node) td.appendChild(cell.node);
        else td.textContent = cell.text;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
  }

  /* A <ul> of plain strings — every recap box on both pages. */
  function fillList(sel, items) {
    var box = $(sel);
    if (!box) return;
    box.innerHTML = '';
    items.forEach(function (item) {
      box.appendChild(el('li', null, window.I18N.pick(item)));
    });
  }

  window.PAGE = {
    $:              $,
    el:             el,
    decorative:     decorative,
    renderNav:      renderNav,
    initScrollSpy:  initScrollSpy,
    renderNotes:    renderNotes,
    initPresenter:  initPresenter,
    buildTable:     buildTable,
    fillList:       fillList
  };
})();
