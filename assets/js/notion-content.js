/* ==========================================================================
   ALL TEXT FOR notion.html LIVES IN THIS FILE.
   To change any wording on the Notion proposal, edit it here — nowhere else.

   Same three globals as content.js (STR / NOTES / DATA). The two files are
   never loaded together — index.html loads content.js, notion.html loads this
   one — so they share the names deliberately and i18n.js works unchanged.

   Audience-facing text always has a `ja` and an `en` version. Presenter notes
   are the one exception: they live in window.NOTES below and are English only,
   because the presenter narrates in English while the room reads Japanese.
   See docs/adr/0001-english-narration-japanese-slides.md

   TWO RULES FOR THIS FILE SPECIFICALLY:

   1. Keep the English simple. Short sentences. Common words. Nobody in this
      material is a native English speaker — the presenter included. No idioms,
      no business jargon, no clever phrasing.
   2. The subject is the DIFFERENCE between Chatwork and Notion. Chatwork is
      staying; that is settled and needs one line, not a defence.
   See docs/adr/0005-notion-complements-chatwork.md
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. Simple text. Used by elements with data-i18n="key" in notion.html
   -------------------------------------------------------------------------- */
window.STR = {

  'a11y.skip':        { ja: '本文へスキップ', en: 'Skip to content' },

  'site.brand':       { ja: 'TAIMATSU', en: 'TAIMATSU' },
  'site.brandSub':    { ja: '経理チームへの提案', en: 'A proposal for the accounting team' },

  'ui.presenter':     { ja: '講師メモ', en: 'Presenter notes' },
  'ui.presenterNote': { ja: '講師メモ', en: 'Presenter notes' },
  'ui.keyPoint':      { ja: 'ポイント', en: 'Key point' },

  /* ---- cover ---- */
  'cover.eyebrow':     { ja: '社内提案', en: 'Internal proposal' },
  'cover.title':       { ja: '書いたことが、あとで見つかるように', en: 'So that what we write can be found later' },
  'cover.subtitle':    { ja: '経理業務の手順書・引き継ぎ情報を、Notionで整理・共有する提案です',
                         en: 'A proposal: organise and share our accounting procedures and handover information in Notion' },
  /* Rendered with data-i18n-html — this one entry carries markup, because the
     two points read better as a list than buried in a paragraph. */
  'cover.lead':        { ja: '<p>今日は、Notionを活用した情報共有についてご紹介します。</p>' +
                             '<p>最初にお伝えしたいのは、今のやり方を変えることが目的ではない、ということです。Chatworkはこれまで通り使いますし、Excelもそのまま使います。</p>' +
                             '<p>今日お伝えしたいのは、次の2点です。</p>' +
                             '<ul><li>ChatworkとNotionの違い</li>' +
                             '<li>Notionで経理業務の負担をどのように減らせるか</li></ul>' +
                             '<p>目指しているのは、個人の知識や経験を、チーム全体の資産として残せる環境をつくることです。最後に、最初に試してみる業務を皆さんと一緒に決めたいと思います。</p>',
                         en: '<p>Today I would like to introduce how we could share information using Notion.</p>' +
                             '<p>First, let me be clear: the aim is not to change the way you work now. Chatwork stays as it is, and Excel stays as it is.</p>' +
                             '<p>There are two things I want to cover:</p>' +
                             '<ul><li>How Chatwork and Notion differ</li>' +
                             '<li>How Notion can reduce the workload in accounting</li></ul>' +
                             '<p>Our aim is simple. The knowledge and experience of each person should stay with the whole team. At the end, I would like us to decide together which task to try first.</p>' },
  'cover.goalsTitle':  { ja: '30分後のゴール', en: 'The goal for these 30 minutes' },
  'cover.agendaTitle': { ja: '今日の流れ（30分）', en: 'Today — 30 minutes' },

  /* ---- Part 1 ---- */
  'p1.label': { ja: 'Part 1', en: 'Part 1' },
  'p1.title': { ja: 'ChatworkとNotionは、何がちがうのか', en: 'How is Notion different from Chatwork?' },
  'p1.lead':  { ja: '新しいツールの話をする前に、まずChatworkとの違いをご説明します。Chatworkは「話すためのツール」です。Notionは「残すためのツール」です。この1点が、今日の話の中心になります。',
                en: 'Before going into the tool itself, let me start with how it differs from Chatwork. Chatwork is a tool for talking. Notion is a tool for keeping. That one difference is the centre of today.' },

  'p1.s1.title': { ja: '同じ情報でも、管理する場所で結果が変わる', en: 'The same information — a different result depending on where it is kept' },
  'p1.s1.lead':  { ja: '同じことを書いても、Chatworkに書いた場合とNotionに書いた場合では、そのあとの結果がちがいます。5つの点で比べます。',
                   en: 'If you write the same thing in Chatwork and in Notion, what happens next is different. Here are five points.' },
  'p1.s1.takeaway': { ja: 'Chatworkが悪いという話ではありません。Chatworkは「話すためのツール」として、とてもよくできています。ただ、残すためのツールではありません。いま私たちは、残したい情報もChatworkに入れています。',
                      en: 'This is not a complaint about Chatwork. As a tool for talking, Chatwork works very well. It is just not a tool for keeping. Right now we put both kinds of information into it.' },

  'p1.s2.title': { ja: 'いま、何が起きているか', en: 'What happens now' },
  'p1.s2.lead':  { ja: 'この2つは、思い当たる場面があるのではないでしょうか。',
                   en: 'You may well recognise both of these.' },

  'p1.s3.title': { ja: '属人化 — 課題になるのは、人が変わるとき', en: '属人化 — it becomes an issue when people change' },
  'p1.s3.lead':  { ja: '業務の進め方が特定の人しか分からない状態を「属人化」といいます。担当者が変わるたびに、同じ説明を何度も繰り返すことになり、引き継ぎの負担が大きくなります。',
                   en: 'When only one person knows how a job is done, we call it 属人化. Each time the person in charge changes, someone has to explain everything again. The handover becomes a heavy load.' },
  'p1.s3.takeaway': { ja: '手順を書いていないわけではありません。書いてはいても、あとで見つけにくいのが実情です。',
                      en: 'The problem is not that we fail to write things down. We do write them — they are just hard to find afterwards.' },

  'p1.recapTitle': { ja: 'Part 1 のまとめ', en: 'Part 1 — summary' },

  /* ---- Part 2 ---- */
  'p2.label': { ja: 'Part 2', en: 'Part 2' },
  'p2.title': { ja: 'Notionでできること（4つだけ）', en: 'What Notion can do — four things' },
  'p2.lead':  { ja: 'Notionはチャットのツールではありません。Wordのような文章管理、Excelのような一覧管理、共有フォルダのような情報管理を、1つの場所で行えるツールです。しかも、書いた中身まで検索できます。機能はたくさんありますが、今日は4つだけ説明します。経理業務には、この4つでほぼ足ります。',
                en: 'Notion is not a chat tool. You can write documents, like Word. You can make lists, like Excel. You can keep shared information, like a shared folder. All of it is in one place. You can also search inside the text you wrote. Notion has many features. Today I will explain only four. For accounting work, four is almost enough.' },

  'p2.s1.title': { ja: 'まずは、この4つだけ覚えれば十分です', en: 'To start with, these four are enough' },
  'p2.s1.lead':  { ja: '上がNotionでの呼び方、その下が「いま使っているもので言うと何か」です。',
                   en: 'The Notion name is on top. Below it, we show the closest thing you already use.' },

  'p2.s2.title': { ja: '見せる相手は、ページごとに選べます', en: 'You choose who can see each page' },
  'p2.s2.lead':  { ja: '経理が扱う情報には、全員に見せてよいものと、そうでないものがあります。Notionでは、ページごとに「誰が見られるか」「誰が編集できるか」を選べます。経理だけが見られるページと、全社が見られるページを、同じ構造の中で管理できます。権限を分けるためだけに、ファイルをコピーして別の場所で管理する必要はありません。',
                   en: 'Some accounting information is fine for everyone. Some is not. For each page, you choose who can read it. You also choose who can edit it. Some pages can be for the accounting team only. Other pages can be open to everyone. Both kinds sit in the same structure. You do not need to copy a file to another place just to control who sees it.' },

  'p2.s3.title': { ja: '社内ではもう使っています', en: 'We already use it here' },
  'p2.s3.lead':  { ja: 'Notionは、エンジニアリングチームがすでに毎日使っています。つまり今日の話は、新しいツールを買いましょうという話ではありません。社内にもうあるものを、経理でも使ってみませんか、という話です。分からないことがあれば、社内に聞ける人がいます。',
                   en: 'The engineering team already uses Notion every day. So this is not about buying a new tool. It is about using something the company already has. If something is unclear, there are people here you can ask.' },

  'p2.recapTitle': { ja: 'Part 2 のまとめ', en: 'Part 2 — summary' },

  /* ---- Part 3 ---- */
  'p3.label': { ja: 'Part 3', en: 'Part 3' },
  'p3.title': { ja: '経理業務の、どの負担を減らせるか', en: 'Which parts of your workload we can reduce' },
  'p3.lead':  { ja: 'ここまではツールの説明でした。ここからは、実際の業務がどう変わるかを2つの場面で見ます。どちらも、日常的に起きている場面だと思います。',
                en: 'That was the tool itself. Now let us look at how the actual work changes, in two situations. Both are everyday situations.' },

  'p3.s1.title': { ja: '場面1 — 質問されたとき', en: 'Situation 1 — someone asks you a question' },
  'p3.s1.lead':  { ja: '左が今のやり方、右がNotionを使った場合です。Chatworkの使い方は、ほとんど変わりません。',
                   en: 'On the left, how it works now. On the right, with Notion. The way you use Chatwork barely changes.' },
  'p3.s1.takeaway': { ja: 'Chatworkでのやりとりは、そのままです。書いて送るかわりに、リンクを送るだけです。',
                      en: 'The Chatwork conversation stays the same. You send a link instead of typing the answer again.' },

  'p3.s2.title': { ja: '場面2 — 新しい担当者が入ったとき', en: 'Situation 2 — a new person joins the team' },
  'p3.s2.lead':  { ja: '今は、新しい担当者が入ると、引き継ぐ側の時間が何週間も取られます。手順が書いてあると、この形が変わります。',
                   en: 'Right now, when a new person joins, weeks of someone else\'s time go into explaining things. If the steps are written down, that changes.' },
  'p3.s2.takeaway': { ja: '引き継ぎの工数がなくなるわけではありません。毎回かかっていた工数が、1回分に変わります。',
                      en: 'The handover effort does not disappear. It stops repeating, and happens once.' },

  'p3.recapTitle': { ja: 'Part 3 のまとめ', en: 'Part 3 — summary' },

  /* ---- Part 4 ---- */
  'p4.label': { ja: 'Part 4', en: 'Part 4' },
  'p4.title': { ja: 'Notion AI — 探さずに、聞く', en: 'Notion AI — ask instead of search' },
  'p4.lead':  { ja: 'ここまでは、情報をどこで管理するかの話でした。最後に、整理した情報をどう取り出すかの話をします。',
                en: 'So far we have looked at where information is kept. Finally, how to get it back out.' },

  'p4.s1.title': { ja: '言葉を思い出せなくても、調べれば出てくる', en: 'You do not need to remember the exact word to find it' },
  'p4.s1.lead':  { ja: 'Notion AIは、社内に書いてあるページを読んだうえで、日本語の質問に日本語で答えます。検索のように「その言葉が入っているページ」を並べるのではなく、答えそのものと、答えのもとになったページへのリンクを返します。ファイル名を覚えていなくても大丈夫です。',
                   en: 'Notion AI reads the pages we write, and answers questions in Japanese. Search gives you a list of pages that contain your word. This gives you the answer itself, with a link to the page it came from. You do not need to remember the file name.' },

  'p4.s1.caseTitle': { ja: '実際にあった例', en: 'A real example' },
  'p4.s1.case':      { ja: '実際に経理業務でNotionを活用している例では、日々の業務内容をNotionに記録したうえで、その記録からNotion AIにマニュアルを作成させています。その際、担当者本人が書き漏らしていた項目をAIが拾い上げました。パスワードの管理方法です。人がマニュアルを書くと、当たり前すぎる手順ほど抜けます。記録さえ残っていれば、AIがその抜けを見つけられます。',
                       en: 'Here is a real example. An accounting team wrote their daily tasks in Notion. Then they asked Notion AI to make a manual from those records. The AI added one item the person had forgotten: how to manage passwords. When we write a manual ourselves, we often forget the most obvious steps. If the record is in Notion, the AI can find what is missing.' },

  'p4.s2.title': { ja: '1つだけ、大事な点があります', en: 'One important point' },
  'p4.s2.lead':  { ja: 'AIが答えられるのは、Notionに書いてあることだけです。書いていないことは答えられません。書いてあることが古ければ、古い答えをそのまま返します。つまりAIは、ページを書く工数をなくすツールではありません。書いたページを活かすツールです。',
                   en: 'The AI can only answer from what is written in Notion. If something is not written, it cannot answer. If a page is old, it will give you the old answer. So the AI does not remove the work of writing pages. It makes written pages more useful.' },
  'p4.s2.takeaway': { ja: '先にページを書く。AIが役に立つのは、そのあとです。',
                      en: 'Write the pages first. The AI helps after that, not before.' },

  'p4.recapTitle': { ja: 'Part 4 のまとめ', en: 'Part 4 — summary' },

  /* ---- Part 5 / the ask ---- */
  'p5.label': { ja: '次の一歩', en: 'Next step' },
  'p5.title': { ja: '心配なことと、今日決めたいこと', en: 'Your concerns, and what I would like us to decide today' },
  'p5.lead':  { ja: 'ここまで聞いて、気になる点があると思います。よく出るものを4つ先に挙げます。ここに挙げていない点があれば、このあとぜひお聞かせください。',
                en: 'You probably have some concerns. Here are four that come up often. If yours is not among them, please do tell me afterwards.' },

  'p5.s1.title': { ja: 'よくある4つの心配', en: 'Four common concerns' },

  'p5.s2.title': { ja: 'Notionでは管理しないもの', en: 'What we will not manage in Notion' },
  'p5.s2.lead':  { ja: 'ここは大事な点ですので、先にお伝えしておきます。Notionで管理するのは、手順書・議事録・チェックリスト・引き継ぎ資料です。つまり「業務の進め方を書いた文書」です。請求書や領収書などの証憑そのもの、および電子帳簿保存法の対象になる取引データは、Notionでは管理しません。会計システムと帳簿は、今のままです。',
                   en: 'This part is important, so I want to state it up front. Into Notion we put procedures, meeting notes, checklists and handover notes. In other words, documents about how we do the work. We do not put invoices, receipts, or transaction data covered by the Electronic Books Preservation Act. The accounting system and the books stay exactly as they are.' },

  'p5.s3.title': { ja: 'ChatworkとNotionは、自動ではつながりません', en: 'Chatwork and Notion do not connect automatically' },
  'p5.s3.lead':  { ja: 'ここも事前に共有しておきます。ChatworkとNotionは、自動では連携しません。Notionに書いたことがChatworkに流れることはなく、その逆もありません。つなぐのは人です。質問に答えるときに、リンクを1つ貼る。新しく増える作業は、これだけです。',
                   en: 'One more thing to say up front. Chatwork and Notion do not talk to each other. Nothing moves between them by itself. A person connects them, by pasting one link when answering a question. That is the only new work.' },

  'p5.s4.title': { ja: 'まずは1つの業務で、4週間試してみませんか', en: 'Shall we try one task for four weeks?' },
  'p5.s4.lead':  { ja: '全部を移す提案ではありません。業務を1つだけ選んで、4週間試します。うまくいかなければ、4週間後にやめられます。かかるのは4週間分の工数だけで、今あるExcelは何も変わりません。',
                   en: 'We are not moving everything. We choose one task and try it for four weeks. If it does not work, we stop. The only cost is four weeks of effort, and none of your Excel files change.' },

  'p5.s5.title': { ja: 'どれを選びますか', en: 'Which one shall we try?' },
  'p5.s5.lead':  { ja: '候補を3つ用意しました。今日、一緒に最初に試す業務を決めたいと思います。',
                   en: 'Here are three options. Today I would like us to decide together which one to try first.' },

  'p5.s6.title': { ja: '4週間の進め方', en: 'How the four weeks work' },

  'p5.askTitle': { ja: '今日、決めていただきたいこと', en: 'What I am asking you to decide today' },
  'p5.ask':      { ja: '今日決めたいのは2つだけです。A・B・Cのどれから試すか。そして、最初のページを書く担当を1人。ほかのことは、4週間後に一緒に振り返って決めます。',
                   en: 'Only two things today. Which one we start with: A, B or C. And who writes the first page. Everything else we look at together after four weeks.' },

  /* ---- footer ---- */
  'footer.note': { ja: 'TAIMATSU 社内提案資料 — 経理チーム向け', en: 'TAIMATSU internal proposal — for the accounting team' },
  'footer.edit': { ja: '内容の修正は', en: 'Edit the content in' }
};

/* --------------------------------------------------------------------------
   2. Presenter notes. ENGLISH ONLY — see the header comment.
      Shown only on notion.html?presenter
   -------------------------------------------------------------------------- */
window.NOTES = {};  /* stripped for publication — the presenter notes are
                       not shipped to a public page. See tools/build-public.py */

/* --------------------------------------------------------------------------
   3. Structured content. Rendered by assets/js/notion.js
   -------------------------------------------------------------------------- */
window.DATA = {

  nav: [
    { ja: '導入',        en: 'Intro',      href: '#top' },
    { ja: '1. ちがい',    en: '1. Difference', href: '#part1' },
    { ja: '2. できること', en: '2. What it does', href: '#part2' },
    { ja: '3. 仕事',      en: '3. Your work', href: '#part3' },
    { ja: '4. AI',       en: '4. AI',      href: '#part4' },
    { ja: '次の一歩',     en: 'Next step',  href: '#next' }
  ],

  goals: [
    { icon: '🔍',
      ja: { title: 'ChatworkとNotionのちがいが説明できる',
            body: 'Chatworkは話すためのツール、Notionは残すためのツール。このちがいを、自分の言葉で人に説明できる状態。' },
      en: { title: 'You can explain the difference',
            body: 'Chatwork is for talking. Notion is for keeping. You can say that in your own words to someone else.' } },
    { icon: '🧭',
      ja: { title: 'Notionで何ができるか分かる',
            body: 'ページ・データベース・テンプレート・権限。この4つが、いま使っているWordやExcelと何がちがうかが分かっている状態。' },
      en: { title: 'You know what Notion can do',
            body: 'Pages, databases, templates and permissions. You know how they are different from Word and Excel.' } },
    { icon: '🎯',
      ja: { title: '最初に試す業務が1つ決まっている',
            body: 'どの業務を最初にNotionで整理するかを、今日この場で一緒に決め終えている状態。書く担当も1人決まっている。' },
      en: { title: 'One task is chosen',
            body: 'Before we leave this room, we decide together which task to try first, and who writes the first page.' } }
  ],

  agenda: [
    { time: '0:00', timeEn: '0:00', ja: { title: '導入', desc: '今日の2つの話' },
                                    en: { title: 'Opening', desc: 'The two things I want to explain' } },
    { time: '1分',  timeEn: '1 min', session: true,
      ja: { title: 'Part 1 — ChatworkとNotionは何がちがうのか', desc: '話すためのツールと、残すためのツール' },
      en: { title: 'Part 1 — How Notion differs from Chatwork', desc: 'A tool for talking, a tool for keeping' } },
    { time: '8分',  timeEn: '8 min', session: true,
      ja: { title: 'Part 2 — Notionでできること', desc: '覚えるのは4つだけ／権限／社内ではもう使っている' },
      en: { title: 'Part 2 — What Notion can do', desc: 'Four things, permissions, already used here' } },
    { time: '15分', timeEn: '15 min', session: true,
      ja: { title: 'Part 3 — 経理業務のどの負担を減らせるか', desc: '質問されたとき／新しい担当者が入ったとき' },
      en: { title: 'Part 3 — Reducing the workload', desc: 'Answering a question; a new person joins' } },
    { time: '21分', timeEn: '21 min', session: true,
      ja: { title: 'Part 4 — Notion AI', desc: '探すのではなく、質問する／大事な点が1つ' },
      en: { title: 'Part 4 — Notion AI', desc: 'Ask instead of search, and one important point' } },
    { time: '25分', timeEn: '25 min', session: true,
      ja: { title: '次の一歩 — 心配なことと、今日の決定', desc: '4つの心配／管理しないもの／最初の業務を一緒に決める' },
      en: { title: 'Next step — concerns and one decision', desc: 'Four concerns, what stays out, and choosing the first task together' } }
  ],

  /* ---- Part 1 ---------------------------------------------------------- */

  /* The five-row comparison that carries the whole argument. Deliberately
     concrete — no abstract vocabulary for the two kinds of information. */
  compareLabels: {
    ja: { aspect: '', chatwork: 'Chatwork', notion: 'Notion' },
    en: { aspect: '', chatwork: 'Chatwork', notion: 'Notion' }
  },

  compare: [
    { ja: { aspect: '何のためのツールか', chatwork: '話すためのツール', notion: '残すためのツール' },
      en: { aspect: 'What it is for',   chatwork: 'For talking',   notion: 'For keeping' } },
    { ja: { aspect: '書いたあと、どうなるか', chatwork: '新しい話が来ると、下へ流れていく', notion: '書いた場所に、そのまま残る' },
      en: { aspect: 'After you write it',    chatwork: 'New messages push it down',      notion: 'It stays where you put it' } },
    { ja: { aspect: 'あとで見つけるには', chatwork: '日付をさかのぼって探す', notion: 'リンクを開く。または言葉で検索する' },
      en: { aspect: 'How you find it later', chatwork: 'Scroll back through the dates', notion: 'Open a link, or search for a word' } },
    { ja: { aspect: '向いている内容', chatwork: '「本日の振込、お願いします」', notion: '「振込のやり方」' },
      en: { aspect: 'What it suits',  chatwork: '"Please make today\'s transfer."', notion: '"How to make a transfer."' } },
    { ja: { aspect: '1週間後', chatwork: '探すのがむずかしい', notion: '同じ場所にある' },
      en: { aspect: 'One week later', chatwork: 'Hard to find', notion: 'Still in the same place' } }
  ],

  losses: [
    { icon: '💬',
      ja: { title: '答えたことが、見つからなくなる',
            body: '一度きちんと答えた質問が、3か月後にまた来ます。答えはChatworkのどこかにあります。でも、さかのぼって探すより、知っている人に聞くほうが速いです。だから、いちばん忙しい人が何度も手を止めることになります。' },
      en: { title: 'The answer cannot be found again',
            body: 'A question you answered properly comes back three months later. The answer is somewhere in Chatwork. But asking the person who knows is faster than scrolling. So the busiest person is interrupted again and again.' } },
    { icon: '📁',
      ja: { title: '同じ書類が、いくつも増える',
            body: '「手順書_最新.xlsx」「手順書_最新(2).xlsx」「手順書_2024改訂版.xlsx」。どれが正しいかは、作った人しか分かりません。その人が休んだ日、誰も安心して対応できなくなります。' },
      en: { title: 'The same document appears many times',
            body: 'procedure_latest.xlsx, procedure_latest(2).xlsx, procedure_2024_revised.xlsx. Only the person who made them knows which one is right. On the day they are away, nobody can deal with them confidently.' } }
  ],

  recap1: [
    { ja: 'Chatworkは話すためのツールです。その役割では、とてもよく働いています。',
      en: 'Chatwork is a tool for talking, and it does that job very well.' },
    { ja: '足りないのは、何度も見返す情報を置いておく場所です。',
      en: 'What is missing is a place for the information we need to read again and again.' },
    { ja: '書く場所が決まっていないと、仕事は自然に属人化します。その影響は、人が入れ替わるときにいちばん大きく出ます。',
      en: 'When there is no fixed place to write things down, work drifts into 属人化 by itself. The effect shows most when people change.' }
  ],

  /* ---- Part 2 ---------------------------------------------------------- */

  conceptLabels: {
    ja: { like: 'いま使っているもので言うと', why: '何が変わるか' },
    en: { like: 'Closest thing you use now',  why: 'What changes' }
  },

  concepts: [
    { code: 'Page',
      ja: { term: 'ページ',
            one: '文章を書く場所です。手順書1つが、1ページになります。',
            like: 'Wordの文書',
            why: 'ファイルではないので、開くのにダウンロードが要りません。1つのURLがあり、それをChatworkに貼れば、相手はクリックするだけで最新の内容を見られます。「添付ファイルはどれが最新か」という問題がなくなります。' },
      en: { term: 'Page',
            one: 'A place to write. One procedure is one page.',
            like: 'A Word document',
            why: 'It is not a file, so you do not download it. Each page has one link. Paste that link in Chatwork. The other person clicks it and sees the newest version. Nobody has to ask "which attached file is the newest one?"' } },
    { code: 'Sub-page',
      ja: { term: 'ページの中のページ',
            one: 'ページの中に、さらにページを入れられます。',
            like: 'フォルダ',
            why: '「経理」の中に「月次決算」があり、その中に「振込の手順」がある、という形で並べられます。フォルダとちがって、たどりながら中身も読めるので、どこに何があるかが見て分かります。' },
      en: { term: 'Pages inside pages',
            one: 'A page can hold other pages.',
            like: 'Folders',
            why: 'An "Accounting" page holds a "Monthly close" page. That page holds a "How to make a transfer" page. A folder only shows you file names. Here you can read each page as you move down, so it is easy to see where things are.' } },
    { code: 'Database',
      ja: { term: 'データベース',
            one: '表です。ただし、1行が1ページになっています。',
            like: 'Excelの表',
            why: '「取引先一覧」の1行をクリックすると、その取引先のページが開き、これまでの経緯や注意点が書いてあります。表として全体を見ることも、1件ずつ読むこともできます。行に説明を書き足しても、表は崩れません。' },
      en: { term: 'Database',
            one: 'A table. Each row is also a page you can open.',
            like: 'An Excel sheet',
            why: 'Open the "Suppliers" table and click one row. That supplier\'s page opens. Inside it, you can write the past history and the points to be careful about. You can look at the whole table, or read one row at a time. Adding more text to a row does not break the table.' } },
    { code: 'Template',
      ja: { term: 'テンプレート',
            one: '毎回同じ形で作るものを、型として登録しておけます。',
            like: 'Excelのひな形ファイル',
            why: '「月次決算チェックリスト」を型にしておけば、毎月ボタン1つで同じ項目のページができます。担当者によって項目が抜ける、ということがなくなります。ひな形をコピーし忘れて前月分を上書きする事故も起きません。' },
      en: { term: 'Template',
            one: 'A form you save once and reuse every time.',
            like: 'A blank Excel master file',
            why: 'Save "Monthly close checklist" as a template. Every month, one click makes a new page with the same items. The items do not change when a different person does the work. And nobody deletes the page from last month by mistake.' } }
  ],

  recap2: [
    { ja: '覚えるのは、ページ・ページの中のページ・データベース・テンプレートの4つだけです。',
      en: 'Four things to learn: pages, pages inside pages, databases, and templates.' },
    { ja: '見せる相手はページごとに選べるので、経理だけの情報も同じ構造の中で管理できます。',
      en: 'You choose who sees each page, so accounting-only information can be managed inside the same structure.' },
    { ja: '新しく買う必要はありません。エンジニアリングチームがもう使っています。',
      en: 'Nothing new to buy. The engineering team already uses it.' }
  ],

  /* ---- Part 3 ---------------------------------------------------------- */

  askNowLabel:   { ja: 'いまのやり方', en: 'How it works now' },
  askAfterLabel: { ja: 'Notionを使った場合', en: 'With Notion' },

  askNow: [
    { ja: { title: 'Chatworkで質問が来る', body: '「この処理、どうするんでしたっけ」' },
      en: { title: 'A question comes in Chatwork', body: '"How do we do this one again?"' } },
    { ja: { title: '知っている人が答える', body: '手を止めて、思い出して、その場で書く' },
      en: { title: 'The person who knows answers', body: 'They stop working, remember, and type it out' } },
    { ja: { title: 'その答えが流れていく', body: '数日で、事実上たどり着けなくなる' },
      en: { title: 'The answer moves down and away', body: 'After a few days, nobody can reach it' } },
    { ja: { title: '3か月後、また同じ質問', body: '同じ人が、また手を止める' },
      en: { title: 'Three months later, the same question', body: 'The same person stops working again' } }
  ],

  askAfter: [
    { ja: { title: 'Chatworkで質問が来る', body: 'ここは今までと同じです' },
      en: { title: 'A question comes in Chatwork', body: 'No change here' } },
    { ja: { title: 'ページのリンクを送る', body: '書き直さない。リンクを1つ送るだけ' },
      en: { title: 'You send the link to the page', body: 'Nothing is typed again — just one link' } },
    { ja: { title: '相手はいつでも見返せる', body: '二度目に聞く理由がなくなる' },
      en: { title: 'They can read it any time', body: 'No reason to ask a second time' } },
    { ja: { title: 'ページが無ければ、答えながら作る', body: '工数がかかるのは1回目だけ。次からは送るだけ' },
      en: { title: 'If there is no page, write it as you answer', body: 'Only the first time costs you. After that, just send it' } }
  ],

  onboard: [
    { ja: { title: '初日 — 1ページ渡す', body: '「最初の2週間で読むもの」というページを1つ渡します。何から手をつければいいか分からない時間が無くなります。' },
      en: { title: 'Day one — give them one page', body: 'A page called "What to read in your first two weeks". No time is lost wondering where to start.' } },
    { ja: { title: '読む — 自分のペースで', body: '順番に読んでいきます。分からない言葉は、その場でリンク先の説明に飛べます。引き継ぐ側の予定を押さえる必要がありません。' },
      en: { title: 'They read — at their own speed', body: 'In order, following links when a word is new. The person handing over does not have to set aside time.' } },
    { ja: { title: '聞く — 残った分だけ', body: '読んでも分からなかったところだけ質問します。質問の数が減り、内容もはっきりします。' },
      en: { title: 'They ask — only what is left', body: 'Only the parts reading did not answer. Fewer questions, and clearer ones.' } },
    { ja: { title: '足す — 答えをページに書く', body: 'その質問への答えを、その場でページに書き足します。次に入る人は、そこまで読んだ状態で始められます。' },
      en: { title: 'You add — the answer goes on the page', body: 'You write it there and then. The next person starts from that point instead of from zero.' } }
  ],

  recap3: [
    { ja: 'Chatworkは今まで通り、質問をする場所です。',
      en: 'Chatwork stays what it is — the place where questions are asked.' },
    { ja: '変わるのは、その答えが消えるか、残るかです。',
      en: 'What changes is whether the answer disappears or stays.' },
    { ja: '残った答えは、そのまま次の人のための資料になります。',
      en: 'The answers that stay become the material for the next new person.' }
  ],

  /* ---- Part 4 ---------------------------------------------------------- */

  aiExamples: [
    { ja: { q: '海外向けの返金の手順は？',
            a: '手順の要点を日本語でまとめたものと、もとになった手順書ページへのリンク。ページの名前を覚えていなくても出てきます。' },
      en: { q: 'What are the steps for an overseas refund?',
            a: 'A short summary of the steps, and a link to the page it came from. You do not need to know the page name.' } },
    { ja: { q: '先月の締めで決めた例外、どこに書いてある？',
            a: 'その議事録ページと、決まった内容の該当箇所。「決めたのは覚えているが、どこに書いたか分からない」というときに役立ちます。' },
      en: { q: 'Where did we write the exception we agreed last month?',
            a: 'The meeting notes page, and the part where it was decided. Useful when you remember deciding but not where you wrote it.' } },
    { ja: { q: 'この議事録、決まったことだけまとめて',
            a: '長い議事録から、決定事項だけを抜き出した一覧。全部を読み返す必要がありません。' },
      en: { q: 'Summarise only the decisions from these notes.',
            a: 'A list of just the decisions, taken out of a long page. You do not need to read it all again.' } },
    { ja: { q: '会議の内容を、あとから正確に確認したい',
            a: 'Notionには、会議の音声から文字起こしと要点のまとめを自動で作成する機能があります（AI議事録）。エンジニアリングチームではすでに使っています。議事録を書き起こす工数そのものが減り、「言った・言わない」の確認もできます。' },
      en: { q: 'I want to check exactly what was said in a meeting.',
            a: 'Notion can record a meeting and write out the text automatically. It also makes a short summary of the main points (AI Meeting Notes). The engineering team already uses this. You spend less time writing minutes, and you can check what was agreed.' } }
  ],

  recap4: [
    { ja: 'Notion AIは、言葉を選ばなくても、質問すれば答えを返します。',
      en: 'With Notion AI you ask a question instead of guessing the right search word.' },
    { ja: '答えられるのはNotionに書いてあることだけで、古ければ古いまま答えます。',
      en: 'It only answers from what is written, and if that is old, so is the answer.' },
    { ja: 'だからこそ、まずページを書くことが先です。',
      en: 'That is why writing the pages comes first.' }
  ],

  /* ---- Part 5 ---------------------------------------------------------- */

  objections: [
    { ja: { term: '「今のままで困っていない」',
            answer: '今問題なく回っているのは、経験や知識を持っている方が社内にいるからです。一方で、その知識や経験が特定の人に集中すると、引き継ぎのタイミングで負担が大きくなる可能性があります。その負担がかかるのは、たいてい今の担当者ではなく次の担当者です。今日の提案は、そのときのための準備です。' },
      en: { term: '"We are fine as we are."',
            answer: 'Things run smoothly today because the people with the knowledge and experience are here. At the same time, if that knowledge stays with only a few people, a handover can become a heavy load. That load usually falls on the next person rather than the current one. This proposal is preparation for that moment.' } },
    { ja: { term: '「移すのが大変では」',
            answer: '全部を移す提案ではありません。今日決めるのは、業務1つ分だけです。今あるExcelは、Excelのまま残して構いません。Notionのページから、そのファイルにリンクを貼れば済みます。作り直す必要はありません。' },
      en: { term: '"Moving everything sounds hard."',
            answer: 'We are not moving everything. Today we choose one task. Your Excel files can stay as Excel files. A Notion page can simply link to them. Nothing has to be made again.' } },
    { ja: { term: '「セキュリティは大丈夫か」',
            answer: 'ページごとに、見られる人と編集できる人を選べます。エンジニアリングチームがすでに業務で使っているので、社内のルールをそのまま使えます。契約の条件やデータの保存場所などの具体的な点は、エンジニアリングチームに確認してから、正確にお答えします。' },
      en: { term: '"Is it safe enough?"',
            answer: 'You choose who can read and who can change each page. Engineering already uses it for real work, so our existing internal rules apply. For details like contract terms and where the data is stored, I will check with engineering. I will give you an exact answer instead of guessing.' } },
    { ja: { term: '「英語のツールでは」',
            answer: '画面は日本語に切り替えられます。ページも日本語で書けますし、AIへの質問も日本語で構いません。英語を読む必要はありません。' },
      en: { term: '"Is it not an English tool?"',
            answer: 'The screen can be set to Japanese. You write pages in Japanese, and you ask the AI in Japanese. Nobody has to read English.' } }
  ],

  pilots: [
    { icon: 'A',
      ja: { title: '月次決算のチェックリスト',
            body: '毎月まったく同じ手順を繰り返すので、テンプレートの効果がいちばん早く見えます。日本の経理担当者が実際にNotionで運用している例があり、銀行照合・債権債務の確認・棚卸・経費精算をそのまま項目にしています。前月分を複製して使うので、毎月ゼロから作りません。1か月で結果が分かります。' },
      en: { title: 'The monthly close checklist',
            body: 'The same steps every month, so a template shows its value fastest. An accountant in Japan does exactly this in Notion. The items are bank reconciliation, receivables and payables, stock count, and expense settlement. Each month they copy the page from last month instead of starting again. One month is enough to see the result.' } },
    { icon: 'B',
      ja: { title: 'Shopifyの売上と入金の照合手順',
            body: '手順が担当者の頭の中にあって、まとまった形で書かれていない業務です。書き出す価値がいちばん高いところです。' },
      en: { title: 'Checking Shopify sales against payments received',
            body: 'The steps live in one person\'s head and have never been written down properly. This is the most valuable one to capture.' } },
    { icon: 'C',
      ja: { title: '新しく入る人向けの、最初の1ページ',
            body: '次に人が増えるときに、いちばん早く役に立ちます。分量が少ないので、今日から書き始められます。' },
      en: { title: 'The first page for a new person',
            body: 'It helps as soon as the next person joins. It is small, so you can start writing today.' } }
  ],

  pilotWeeks: [
    { ja: { title: '1週目 — 書き出す', body: '選んだ業務の手順を、1ページに書き出します。今あるExcelは作り直さず、リンクを貼るだけにします。' },
      en: { title: 'Week 1 — write it out', body: 'Put the steps on one page. Do not rebuild your Excel files — just link to them.' } },
    { ja: { title: '2〜3週目 — 実際に使う', body: '書いた手順どおりに仕事をしてみます。書いてある通りにできなかったところを、その場で直します。' },
      en: { title: 'Weeks 2–3 — actually use it', body: 'Do the work by following the page. Where it does not match, fix the page straight away.' } },
    { ja: { title: '4週目 — 決める', body: 'チームで見て、続けるかやめるかを決めます。やめる場合でも、書いた手順書は残ります。' },
      en: { title: 'Week 4 — decide', body: 'Look at it together and decide whether to keep going. Even if we stop, the written steps remain.' } }
  ]
};
