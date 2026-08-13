/* ==========================================================================
   Page behaviour for notion.html — the Notion proposal to the accounting team.

   Only rendering lives here. The nav, scroll spy and presenter-notes toggle
   are shared with index.html and live in assets/js/shared.js.
   All wording lives in assets/js/notion-content.js.
   ========================================================================== */
(function () {
  'use strict';

  var D    = window.DATA;
  var pick = window.I18N.pick;

  var P          = window.PAGE;
  var $          = P.$;
  var el         = P.el;
  var decorative = P.decorative;

  /* ======================================================================
     Shared shapes
     ====================================================================== */

  /* The icon/title/body card used on the cover, in 1.2 and in the pilot list. */
  function renderCards(sel, items, numbered) {
    var box = $(sel);
    box.innerHTML = '';
    items.forEach(function (item, i) {
      var c    = pick(item);
      var card = el('div', 'card card-goal');
      card.appendChild(decorative(el('span', 'goal-icon', item.icon)));
      if (numbered) card.appendChild(el('span', 'goal-n', String(i + 1).padStart(2, '0')));
      card.appendChild(el('h4', null, c.title));
      card.appendChild(el('p', null, c.body));
      box.appendChild(card);
    });
  }

  /* A step-list of title + body. Used for both halves of 3.1, for 3.2 and
     for the four-week plan. */
  function renderSteps(sel, items) {
    var box = $(sel);
    box.innerHTML = '';
    items.forEach(function (s) {
      var c  = pick(s);
      var li = el('li');
      var d  = el('div');
      d.appendChild(el('span', 'sl-title', c.title));
      d.appendChild(el('span', 'sl-body', c.body));
      li.appendChild(d);
      box.appendChild(li);
    });
  }

  /* The term card: a heading, a one-line summary, then optional label/value
     rows. `code` renders as the small latin caption, and only in Japanese —
     in English it would just repeat the heading. */
  function renderTermCards(sel, items, rows) {
    var box = $(sel);
    box.innerHTML = '';

    items.forEach(function (item) {
      var c    = pick(item);
      var card = el('div', 'term');

      var head = el('div', 'term-head');
      head.appendChild(el('span', 'term-jp', c.term));
      if (item.code && window.I18N.lang === 'ja') {
        head.appendChild(el('span', 'term-en', item.code));
      }
      card.appendChild(head);

      card.appendChild(el('p', 'term-one', c.one));

      if (rows && rows.length) {
        var meta = el('div', 'term-meta');
        rows.forEach(function (pair) {
          if (c[pair.key] == null) return;
          var row = el('div');
          row.appendChild(el('span', 'tm-label', pair.label));
          row.appendChild(el('span', 'tm-val', c[pair.key]));
          meta.appendChild(row);
        });
        card.appendChild(meta);
      }

      box.appendChild(card);
    });
  }

  /* ======================================================================
     Cover
     ====================================================================== */

  function renderGoals() { renderCards('#coverGoals', D.goals, true); }

  function renderAgenda() {
    var box = $('#coverAgenda');
    box.innerHTML = '';
    D.agenda.forEach(function (row) {
      var li = el('li', row.session ? 'ag-session' : null);
      li.appendChild(el('span', 'ag-time', window.I18N.lang === 'ja' ? row.time : row.timeEn));
      var d = el('div');
      d.appendChild(el('span', 'ag-title', pick(row).title));
      d.appendChild(el('span', 'ag-desc', pick(row).desc));
      li.appendChild(d);
      box.appendChild(li);
    });
  }

  /* ======================================================================
     Part 1 — where information is lost
     ====================================================================== */

  /* The Chatwork/Notion comparison — the argument the whole deck rests on. */
  function renderCompare() {
    var lbl = pick(D.compareLabels);
    P.buildTable($('#compareTable'), [lbl.aspect, lbl.chatwork, lbl.notion],
      D.compare.map(function (r) {
        var c = pick(r);
        return [
          { text: c.aspect },
          { text: c.chatwork, cls: 'mt-note' },
          { text: c.notion,   cls: 'mt-note' }
        ];
      }));
  }

  function renderLosses() { renderCards('#lossGrid', D.losses, false); }

  /* ======================================================================
     Part 2 — what Notion is
     ====================================================================== */

  function renderConcepts() {
    var lbl = pick(D.conceptLabels);
    renderTermCards('#conceptCards', D.concepts, [
      { key: 'like', label: lbl.like },
      { key: 'why',  label: lbl.why }
    ]);
  }

  /* ======================================================================
     Part 3 — what changes
     ====================================================================== */

  function renderBeforeAfter() {
    $('#askNowLabel').textContent   = pick(D.askNowLabel);
    $('#askAfterLabel').textContent = pick(D.askAfterLabel);
    renderSteps('#askNow',   D.askNow);
    renderSteps('#askAfter', D.askAfter);
  }

  function renderOnboard() { renderSteps('#onboardSteps', D.onboard); }

  /* ======================================================================
     Part 4 — Notion AI
     ====================================================================== */

  /* The AI examples are question/answer pairs, so they reuse the term card
     with the question as the heading and the answer as the summary line. */
  function renderAiExamples() {
    renderTermCards('#aiExamples', D.aiExamples.map(function (x) {
      return {
        ja: { term: x.ja.q, one: x.ja.a },
        en: { term: x.en.q, one: x.en.a }
      };
    }), null);
  }

  /* ======================================================================
     Part 5 — concerns and the ask
     ====================================================================== */

  function renderObjections() {
    renderTermCards('#objectionCards', D.objections.map(function (o) {
      return {
        ja: { term: o.ja.term, one: o.ja.answer },
        en: { term: o.en.term, one: o.en.answer }
      };
    }), null);
  }

  function renderPilots()     { renderCards('#pilotCards', D.pilots, false); }
  function renderPilotWeeks() { renderSteps('#pilotWeeks', D.pilotWeeks); }

  /* ======================================================================
     Boot
     ====================================================================== */

  function renderAll() {
    P.renderNav(D.nav);
    renderGoals();
    renderAgenda();
    renderCompare();
    renderLosses();
    P.fillList('#p1Recap', D.recap1);
    renderConcepts();
    P.fillList('#p2Recap', D.recap2);
    renderBeforeAfter();
    renderOnboard();
    P.fillList('#p3Recap', D.recap3);
    renderAiExamples();
    P.fillList('#p4Recap', D.recap4);
    renderObjections();
    renderPilots();
    renderPilotWeeks();
  }

  window.I18N.apply();
  renderAll();
  P.renderNotes();
  P.initPresenter('taimatsu-notion-presenter');
  P.initScrollSpy(D.nav);

  window.I18N.onChange(function () { renderAll(); });
})();
