# Notion proposal — accounting team

A 30-minute internal proposal: keeping our procedures and handover notes
in Notion, alongside Chatwork rather than instead of it.

日本語で表示されます。右上のボタンで English に切り替えられます。

## For editors

Do not edit this repository by hand. It is a generated build — the next
build overwrites everything here.

The source lives in `Taimatsu-org/HR-Training-repo` (`notion.html` and
`assets/js/notion-content.js`). Edit there, then:

```bash
python3 tools/build-public.py
cd ~/notion-proposal-build && git add -A && git commit && git push
```

The build strips the presenter notes, which ship inside the JavaScript in
the source copy and must never reach this one.
