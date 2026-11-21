# Mathazion

A complete, interactive math learning website. It covers **75 topics across 10 branches of mathematics**, with **150 step-by-step worked examples**, **300 practice questions** (hints + full solutions) and **192 formulas**. Everything works offline — including math typesetting — and progress is saved in the browser.

## Features

- **Ten mathematical branches:** foundations, algebra, geometry & trigonometry, calculus, statistics & probability, number theory, discrete math, linear algebra, applied math and advanced topics.
- **Consistent topic pages:** key ideas → formulas → worked examples revealed one step at a time → practice questions with instant checking → quick reference and related topics.
- **Three difficulty levels** for questions: Easy, Medium and Hard.
- **Mixed practice mode:** customise the area and length (5–20 questions), then work through a shuffled set with running score and a final results screen.
- **Searchable formula sheet** with copy-to-clipboard LaTeX.
- **Global search** (press `/` anywhere) across topics, concepts and formulas.
- **Progress tracking** with completed topics and answer statistics stored in `localStorage`.
- **Light/dark theme**, responsive layout and keyboard-friendly controls.
- **Local KaTeX** — no CDN or internet connection required at runtime.

## Run locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Then open `http://localhost:8000/`. Because the site uses ES modules, it must be served over HTTP rather than opened as a `file://` page.

## Project structure

```
index.html          App shell, header, search dialog
styles.css          Design system and all component styles
app.js              Hash router, pages, interactions, progress tracking
data/core.js        Shared helpers (categories, question/example/topic builders)
data/*.js           Topic library, one file per branch of mathematics
data/index.js       Combines all topics and computes library statistics
vendor/katex/       Locally vendored KaTeX for math rendering
scripts/audit.mjs   Content integrity checker
```

## Adding a topic

Topics use one shared shape, so the UI renders new content automatically:

```js
topic('topic-id', 'category-id', 'Title', 'Short summary',
  ['First key idea with $math$', 'Second key idea'],
  [['Formula name', R`x^2+y^2=z^2`, 'Optional note']],
  [EX('Example title', R`Prompt $2+2$`, [R`Step one`, R`Step two`], R`4`]),
  [Q(R`Question?`, ['A', 'B', 'C', 'D'], 1, 'Hint', 'Full solution', 'Easy')],
  ['tag one', 'tag two'], 'Good-to-know tip')
```

Use the `R` template tag for LaTeX so backslashes stay intact. Then:

```bash
node scripts/audit.mjs
```

The audit checks topic ids, category ids, example/question counts, choice integrity, balanced math delimiters and KaTeX syntax before the site ships.
