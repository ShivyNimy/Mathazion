import { TOPICS, CATEGORIES, CATEGORY_BY_ID, TOPIC_BY_ID, STATS } from './data/index.js';

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const app = $('#app');
const modal = $('#search-modal');
const searchInput = $('#global-search');

/* ------------------------------------------------------------------ *
 * Persistence & preferences
 * ------------------------------------------------------------------ */
const STORAGE_KEY = 'mathazion.progress.v1';
let stored = {};
try { stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {}; } catch { stored = {}; }
const progress = {
  completed: Array.isArray(stored.completed) ? stored.completed.filter(id => TOPIC_BY_ID[id]) : [],
  correct: Number(stored.correct) || 0,
  attempted: Number(stored.attempted) || 0,
  perTopic: stored.perTopic && typeof stored.perTopic === 'object' ? stored.perTopic : {},
};
function saveProgress() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* private browsing */ }
}
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $('#theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
  try { localStorage.setItem('mathazion.theme', theme); } catch { /* ignore */ }
}
setTheme(localStorage.getItem('mathazion.theme') === 'dark' ? 'dark' : 'light');

let toastTimer;
function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.hidden = true; }, 2400);
}

/* ------------------------------------------------------------------ *
 * Text + math rendering
 * ------------------------------------------------------------------ */
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function inlineHtml(text) {
  return escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}
function md(text) {
  if (text == null) return '';
  const parts = String(text).split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g);
  return parts.map(part => {
    if (part.startsWith('$$') && part.endsWith('$$') && part.length > 4) {
      return `<div class="math-display">${katex.renderToString(part.slice(2, -2), { displayMode: true, throwOnError: false })}</div>`;
    }
    if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
      return katex.renderToString(part.slice(1, -1), { throwOnError: false });
    }
    return inlineHtml(part);
  }).join('');
}
const catStyle = (cat) => `--cat:${CATEGORY_BY_ID[cat]?.color || 'var(--accent)'}`;
const difficultyClass = (d) => String(d || 'Medium').toLowerCase();

/* ------------------------------------------------------------------ *
 * Routing
 * ------------------------------------------------------------------ */
function getRoute() {
  const raw = (location.hash || '#/').slice(1);
  const [path, query = ''] = raw.split('?');
  const seg = path.split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  if (!seg.length) return { name: 'home', params };
  if (seg[0] === 'explore') return { name: 'explore', params };
  if (seg[0] === 'category' && CATEGORY_BY_ID[seg[1]]) return { name: 'explore', params, category: seg[1] };
  if (seg[0] === 'topic' && TOPIC_BY_ID[seg[1]]) return { name: 'topic', topic: TOPIC_BY_ID[seg[1]], params };
  if (seg[0] === 'practice') return { name: 'practice', params };
  if (seg[0] === 'formulas') return { name: 'formulas', params };
  return { name: 'notfound', params };
}

let lastRouteKey = '';
function render() {
  const route = getRoute();
  const key = JSON.stringify(route);
  let html = '';
  if (route.name === 'home') html = homePage();
  else if (route.name === 'explore') html = explorePage(route);
  else if (route.name === 'topic') html = topicPage(route.topic);
  else if (route.name === 'practice') html = practicePage();
  else if (route.name === 'formulas') html = formulasPage();
  else html = notFoundPage();
  app.innerHTML = html;
  updateNav(route);
  if (key !== lastRouteKey) {
    window.scrollTo(0, 0);
    lastRouteKey = key;
  }
  if (route.params?.get('s')) {
    requestAnimationFrame(() => document.getElementById(route.params.get('s'))?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
}
function updateNav(route) {
  const active = route.name === 'category' ? 'explore' :
    route.name === 'topic' ? 'explore' :
      ['explore', 'practice', 'formulas'].includes(route.name) ? route.name : '';
  $$('.main-nav a').forEach(a => a.classList.toggle('active', a.dataset.nav === active));
}
window.addEventListener('hashchange', render);

/* ------------------------------------------------------------------ *
 * Pages
 * ------------------------------------------------------------------ */
function homePage() {
  const featured = ['linear-equations', 'fractions', 'pythagorean-theorem', 'derivatives', 'probability-basics', 'complex-numbers']
    .map(id => TOPIC_BY_ID[id]).filter(Boolean);
  const percent = STATS.topics ? Math.round(100 * progress.completed.length / STATS.topics) : 0;
  return `
  <div class="hero">
    <div class="container hero-inner">
      <div class="hero-content">
        <span class="eyebrow">The math library that explains everything</span>
        <h1>Every math topic,<br><em>explained clearly.</em></h1>
        <p class="hero-lead">From fractions to calculus and linear algebra — ${STATS.topics} topics with ${STATS.examples} step-by-step examples and ${STATS.questions} practice questions. Learn at your own pace, right in your browser.</p>
        <div class="hero-search">
          <input id="hero-search-input" type="search" placeholder="Try “quadratic formula” or “derivatives”…" aria-label="Search topics" />
          <button class="btn btn-primary" type="button" data-action="hero-search">Search</button>
        </div>
        <div class="faint" style="font-size:12.5px">Popular: <a class="text-link" href="#/topic/quadratic-equations">quadratics</a> · <a class="text-link" href="#/topic/trigonometry">trigonometry</a> · <a class="text-link" href="#/topic/integrals">integrals</a></div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>${STATS.topics}</strong><span>topics</span></div>
          <div class="hero-stat"><strong>${STATS.examples}</strong><span>worked examples</span></div>
          <div class="hero-stat"><strong>${STATS.questions}</strong><span>practice questions</span></div>
          <div class="hero-stat"><strong>${STATS.formulas}</strong><span>key formulas</span></div>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-orb"><div class="hero-equation">e<sup>iπ</sup>+1=0</div></div>
        <div class="hero-float one">∫ x² dx = x³/3</div>
        <div class="hero-float two">a² + b² = c²</div>
        <div class="hero-float three">sin²θ + cos²θ = 1</div>
      </div>
    </div>
  </div>
  <div class="container page">
    <section class="section" style="margin-top:0">
      <div class="section-head">
        <div><span class="eyebrow">Browse by area</span><h2>Choose a branch of mathematics</h2><p>Every topic is written the same way: ideas, formulas, examples, then questions.</p></div>
        <a class="text-link" href="#/explore">See all topics →</a>
      </div>
      <div class="category-grid">
        ${CATEGORIES.map(c => `
          <a class="category-card" style="${catStyle(c.id)}" href="#/category/${c.id}">
            <span class="cat-count">${TOPICS.filter(t => t.category === c.id).length} topics</span>
            <span class="cat-icon" aria-hidden="true">${c.icon}</span>
            <h3>${escapeHtml(c.short)}</h3>
            <p>${escapeHtml(c.blurb)}</p>
          </a>`).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head">
        <div><span class="eyebrow">Great places to start</span><h2>Popular topics</h2></div>
        <a class="text-link" href="#/explore">Browse everything →</a>
      </div>
      <div class="topic-chips">
        ${featured.map(t => {
          const c = CATEGORY_BY_ID[t.category];
          return `<a class="topic-chip" href="#/topic/${t.id}"><span class="chip-icon">${c.icon}</span><span><strong>${escapeHtml(t.title)}</strong><small>${escapeHtml(c.short)} · ${t.examples.length} examples</small></span></a>`;
        }).join('')}
      </div>
    </section>

    <section class="section">
      <div class="section-head"><div><span class="eyebrow">How it works</span><h2>Built for actually understanding things</h2></div></div>
      <div class="feature-grid">
        <div class="card feature-card"><div class="feature-num">1</div><h3>Learn the idea</h3><p>Short, plain-English explanations and the formulas you actually need — with beautiful math typesetting.</p></div>
        <div class="card feature-card"><div class="feature-num">2</div><h3>Watch it work</h3><p>Reveal worked examples one step at a time, at your own speed. No skipping the tricky middle part.</p></div>
        <div class="card feature-card"><div class="feature-num">3</div><h3>Prove it to yourself</h3><p>Answer questions with hints and full solutions, then mix topics in Practice mode. Your progress stays saved.</p></div>
      </div>
    </section>

    ${progress.completed.length || progress.attempted ? `
    <section class="section">
      <div class="card progress-panel">
        <div class="progress-copy">
          <h3>Your progress</h3>
          <p>${progress.completed.length} of ${STATS.topics} topics marked complete · ${progress.correct} correct answers out of ${progress.attempted} attempts</p>
          <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
        </div>
        <a class="btn btn-primary" href="#/practice">Keep practising</a>
      </div>
    </section>` : ''}

    <div class="cta-band">
      <h2>Ready to sharpen your skills?</h2>
      <p>Pick a topic, or let Practice mode mix questions from across the library.</p>
      <a class="btn btn-primary" href="#/practice">Start a practice set →</a>
    </div>
  </div>`;
}

let explore = { category: 'all', q: '' };
function explorePage(route) {
  if (route.category) explore.category = route.category;
  if (route.params.has('category') && CATEGORY_BY_ID[route.params.get('category')]) explore.category = route.params.get('category');
  if (route.params.has('q')) explore.q = route.params.get('q');
  const list = filteredTopics();
  return `
  <div class="container page">
    <div class="explore-head">
      <div><span class="eyebrow">The whole library</span><h1>Explore ${STATS.topics} math topics</h1><p>Every topic includes ideas, formulas, worked examples and practice questions.</p></div>
      <a class="btn btn-outline" href="#/practice">Mixed practice →</a>
    </div>
    <div class="filter-bar">
      <label class="filter-input"><span aria-hidden="true">⌕</span><input id="explore-search" type="search" value="${escapeHtml(explore.q)}" placeholder="Filter topics by name, keyword or concept…" autocomplete="off" /></label>
      <div class="filter-pills">
        <button class="filter-pill ${explore.category === 'all' ? 'active' : ''}" data-action="filter-category" data-category="all">All · ${STATS.topics}</button>
        ${CATEGORIES.map(c => `<button class="filter-pill ${explore.category === c.id ? 'active' : ''}" data-action="filter-category" data-category="${c.id}">${c.icon} ${escapeHtml(c.short)}</button>`).join('')}
      </div>
    </div>
    <div id="topic-results">${topicResultsHtml(list)}</div>
  </div>`;
}
function filteredTopics() {
  const q = explore.q.trim().toLowerCase();
  return TOPICS.filter(t => {
    if (explore.category !== 'all' && t.category !== explore.category) return false;
    if (!q) return true;
    return [t.title, t.summary, t.tip, ...t.tags, ...t.ideas, ...t.formulas.map(f => f[0])]
      .join(' ').toLowerCase().includes(q);
  });
}
function topicResultsHtml(list) {
  if (!list.length) return `<div class="card empty-state"><strong>No topics found</strong>Try a different search term or category.</div>`;
  return `<div class="result-count">Showing ${list.length} topic${list.length === 1 ? '' : 's'}</div>
  <div class="topic-list">
    ${list.map(t => {
      const c = CATEGORY_BY_ID[t.category];
      const done = progress.completed.includes(t.id);
      return `<a class="card topic-card" style="${catStyle(t.category)}" href="#/topic/${t.id}">
        <div class="topic-card-head"><span class="cat-icon" aria-hidden="true">${c.icon}</span><h3>${escapeHtml(t.title)}</h3>${done ? '<span class="badge" style="margin-left:auto">✓ Done</span>' : ''}</div>
        <p class="topic-card-summary">${escapeHtml(t.summary)}</p>
        <div class="topic-meta"><span class="badge">${escapeHtml(c.short)}</span><span class="meta-item">${t.examples.length} examples</span><span class="meta-item">${t.questions.length} questions</span></div>
      </a>`;
    }).join('')}
  </div>`;
}

function topicPage(t) {
  const c = CATEGORY_BY_ID[t.category];
  const index = TOPICS.findIndex(x => x.id === t.id);
  const prev = TOPICS[index - 1];
  const next = TOPICS[index + 1];
  const related = TOPICS.filter(x => x.category === t.category && x.id !== t.id).slice(0, 3);
  const done = progress.completed.includes(t.id);
  const toc = [
    ['overview', 'Overview'], ['formulas', 'Key formulas'], ['examples', 'Worked examples'],
    ['practice', 'Practice questions'], ['takeaways', 'Quick reference'],
  ];
  return `
  <div class="container page">
    <div class="breadcrumbs"><a href="#/">Home</a><span>›</span><a href="#/category/${c.id}">${escapeHtml(c.short)}</a><span>›</span><span>${escapeHtml(t.title)}</span></div>
    <div class="topic-layout">
      <aside class="topic-sidebar">
        <nav class="card toc" aria-label="On this page">
          <h4>On this page</h4>
          ${toc.map(([id, label]) => `<a href="#/topic/${t.id}?s=${id}">${label}</a>`).join('')}
        </nav>
        <div class="card sidebar-progress">
          <strong>${done ? '✓ Completed' : 'Track your progress'}</strong>
          <p>${t.questions.length} questions to try in this topic.</p>
          <button class="btn ${done ? 'btn-soft' : 'btn-outline'} btn-sm btn-block" data-action="toggle-complete" data-topic="${t.id}">${done ? 'Mark as not done' : 'Mark complete'}</button>
        </div>
      </aside>
      <div class="topic-main">
        <header class="topic-hero">
          <div class="topic-meta-row"><span class="badge" style="${catStyle(t.category)}">${c.icon} ${escapeHtml(c.short)}</span>${t.tags.slice(0, 4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
          <h1>${escapeHtml(t.title)}</h1>
          <p class="topic-summary">${escapeHtml(t.summary)}</p>
          <div class="topic-actions">
            <button class="btn btn-primary" data-action="practice-topic" data-topic="${t.id}">Practice this topic →</button>
            <a class="btn btn-outline" href="#/formulas">Formula sheet</a>
            <button class="btn btn-outline" data-action="toggle-complete" data-topic="${t.id}">${done ? '✓ Completed' : 'Mark complete'}</button>
          </div>
        </header>

        <section class="content-section" id="overview">
          <h2><span class="sec-num">01</span> The key ideas</h2>
          <div class="idea-grid">
            ${t.ideas.map((idea, i) => `<div class="card idea-card"><span class="idea-num">${i + 1}</span><p>${md(idea)}</p></div>`).join('')}
          </div>
        </section>

        <section class="content-section" id="formulas">
          <h2><span class="sec-num">02</span> Formulas to remember</h2>
          <div class="formula-grid">
            ${t.formulas.map(([label, latex, note]) => `
              <div class="card formula-card"><strong>${escapeHtml(label)}</strong>
                <div class="formula-latex">${md(`$$${latex}$$`)}</div>
                ${note ? `<p class="formula-note">${md(note)}</p>` : ''}
              </div>`).join('')}
          </div>
        </section>

        <section class="content-section" id="examples">
          <h2><span class="sec-num">03</span> Worked examples</h2>
          ${t.examples.map((ex, i) => `
            <article class="card example-card" data-example="${i}" data-shown="0">
              <div class="example-head"><h3>Example ${i + 1} · ${escapeHtml(ex.title)}</h3><span class="badge">Step by step</span></div>
              <div class="example-prompt">${md(ex.prompt)}</div>
              <ol class="ex-steps">${ex.steps.map(s => `<li class="ex-step" hidden>${md(s)}</li>`).join('')}</ol>
              <div class="answer-box" hidden><small>Final answer</small>${md(ex.answer)}</div>
              ${ex.note ? `<p class="example-note" hidden>${md(ex.note)}</p>` : ''}
              <div class="example-actions">
                <button class="btn btn-soft btn-sm" data-action="example-step">Show step 1 →</button>
                <button class="link-button" data-action="example-all">Show full solution</button>
              </div>
            </article>`).join('')}
        </section>

        <section class="content-section" id="practice">
          <h2><span class="sec-num">04</span> Practice questions <span class="badge">${t.questions.length} questions</span></h2>
          ${t.questions.map((q, i) => questionCard(t, q, i, i + 1)).join('')}
        </section>

        <section class="content-section" id="takeaways">
          <h2><span class="sec-num">05</span> Quick reference</h2>
          ${t.tip ? `<div class="takeaway"><strong>Good to know</strong><div>${md(t.tip)}</div></div>` : ''}
          <div style="margin-top:22px">
            <h3 style="font-size:15px;margin:0 0 12px">Explore nearby topics</h3>
            <div class="related-grid">${related.map(r => `<a class="related-link" href="#/topic/${r.id}">${escapeHtml(r.title)} →</a>`).join('')}</div>
          </div>
        </section>

        <nav class="topic-nav" aria-label="Topic navigation">
          ${prev ? `<a href="#/topic/${prev.id}"><small>← Previous topic</small><strong>${escapeHtml(prev.title)}</strong></a>` : '<span></span>'}
          ${next ? `<a class="next" href="#/topic/${next.id}"><small>Next topic →</small><strong>${escapeHtml(next.title)}</strong></a>` : '<span></span>'}
        </nav>
      </div>
    </div>
  </div>`;
}

/* ------------------------------------------------------------------ *
 * Question component + checking
 * ------------------------------------------------------------------ */
function questionCard(topic, q, qIndex, number, context = 'topic') {
  const key = `${topic.id}:${qIndex}`;
  return `
  <article class="card question-card" data-qkey="${key}" data-topic="${topic.id}" data-qidx="${qIndex}" data-context="${context}" data-answered="false">
    <div class="q-head"><span class="badge ${difficultyClass(q.difficulty)}">${escapeHtml(q.difficulty)}</span><span class="q-number">QUESTION ${number}</span></div>
    <div class="q-prompt">${md(q.prompt)}</div>
    <div class="q-options">
      ${q.choices.map((choice, i) => `<button class="option" type="button" data-action="choose" data-choice="${i}">${md(choice)}</button>`).join('')}
    </div>
    <div class="q-actions">
      <button class="btn btn-primary btn-sm" type="button" data-action="check">Check answer</button>
      <button class="link-button" type="button" data-action="hint">💡 Show hint</button>
      <button class="link-button" type="button" data-action="solution">Show solution</button>
    </div>
    <div class="q-feedback" hidden></div>
  </article>`;
}

function getQuestion(card) {
  const topic = TOPIC_BY_ID[card.dataset.topic];
  const q = topic?.questions[Number(card.dataset.qidx)];
  return { topic, q };
}
function checkCard(card) {
  const { topic, q } = getQuestion(card);
  if (!q || card.dataset.answered === 'true') return;
  const selected = Number(card.dataset.selected);
  if (Number.isNaN(selected)) { toast('Choose an answer first'); return; }
  const correct = selected === q.answerIndex;
  card.dataset.answered = 'true';
  $$('.option', card).forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answerIndex) btn.classList.add('correct');
    else if (i === selected) btn.classList.add('wrong');
    else btn.classList.remove('selected');
  });
  if (!card.dataset.counted) {
    progress.attempted += 1;
    if (correct) progress.correct += 1;
    progress.perTopic[topic.id] = (progress.perTopic[topic.id] || 0) + (correct ? 1 : 0);
    card.dataset.counted = '1';
    saveProgress();
  }
  const feedback = $('.q-feedback', card);
  feedback.hidden = false;
  feedback.innerHTML = `
    <div class="feedback-line ${correct ? 'ok' : 'no'}">${correct ? '✓ Correct — nicely done!' : `✗ Not quite. The correct answer is ${md(q.choices[q.answerIndex])}.`}</div>
    ${card.dataset.context === 'practice' ? `<button class="btn btn-primary btn-sm" style="margin-top:12px" data-action="practice-next">Next question →</button>` : ''}`;
}

/* ------------------------------------------------------------------ *
 * Practice mode
 * ------------------------------------------------------------------ */
let practiceSetup = { category: 'all', count: 10 };
let practice = null;
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function startPractice({ category = 'all', count = 10, topicId = null } = {}) {
  let pool = [];
  for (const t of TOPICS) {
    if (topicId && t.id !== topicId) continue;
    if (!topicId && category !== 'all' && t.category !== category) continue;
    t.questions.forEach((q, i) => pool.push({ topic: t, q, index: i }));
  }
  pool = shuffle(pool).slice(0, Math.min(count, pool.length));
  practice = { items: pool, index: 0, score: 0, answered: false, selected: null, source: topicId || category, finished: false };
  if (!location.hash.startsWith('#/practice')) location.hash = '#/practice';
  else render();
}
function practicePage() {
  if (!practice) {
    return `<div class="container page">
      <div class="practice-intro">
        <span class="eyebrow">Mixed practice</span>
        <h1>Test yourself across every topic</h1>
        <p>${STATS.questions} questions from ${STATS.topics} topics. Pick an area, choose a length, and get instant feedback with full solutions.</p>
        <div class="card practice-setup">
          <span class="setup-label">Choose an area</span>
          <div class="setup-options">
            <button class="setup-option ${practiceSetup.category === 'all' ? 'active' : ''}" data-action="setup-category" data-category="all">All areas</button>
            ${CATEGORIES.map(c => `<button class="setup-option ${practiceSetup.category === c.id ? 'active' : ''}" data-action="setup-category" data-category="${c.id}">${c.icon} ${escapeHtml(c.short)}</button>`).join('')}
          </div>
          <span class="setup-label">Number of questions</span>
          <div class="setup-options">
            ${[5, 10, 15, 20].map(n => `<button class="setup-option ${practiceSetup.count === n ? 'active' : ''}" data-action="setup-count" data-count="${n}">${n} questions</button>`).join('')}
          </div>
          <div style="margin-top:26px;text-align:center"><button class="btn btn-primary" data-action="practice-start">Start practice →</button></div>
        </div>
      </div>
    </div>`;
  }
  if (practice.finished) {
    const pct = practice.items.length ? Math.round(100 * practice.score / practice.items.length) : 0;
    const sourceLabel = TOPIC_BY_ID[practice.source]?.title || CATEGORY_BY_ID[practice.source]?.short || 'All areas';
    return `<div class="container page">
      <div class="results-card card">
        <div class="score-ring" style="--score:${pct}"><span>${pct}%</span></div>
        <span class="eyebrow">${escapeHtml(sourceLabel)}</span>
        <h2>${pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort!' : 'Keep going — every attempt helps.'}</h2>
        <p>You got <strong>${practice.score}</strong> out of <strong>${practice.items.length}</strong> correct. Review the solutions, then try another set.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:22px">
          <button class="btn btn-primary" data-action="practice-retry">Try again</button>
          <button class="btn btn-outline" data-action="practice-reset">New setup</button>
        </div>
      </div>
    </div>`;
  }
  const item = practice.items[practice.index];
  const pct = Math.round(100 * practice.index / practice.items.length);
  return `<div class="container page">
    <div class="quiz-shell">
      <div class="quiz-top"><h1>Practice</h1><span class="badge">${practice.index + 1} / ${practice.items.length} · ${practice.score} correct</span></div>
      <div class="quiz-progress"><div style="width:${pct}%"></div></div>
      <div class="card quiz-card">
        <div class="topic-meta" style="margin-bottom:16px"><a class="tag" href="#/topic/${item.topic.id}">${escapeHtml(item.topic.title)}</a><span class="meta-item">${escapeHtml(item.q.difficulty)}</span></div>
        <div id="quiz-question">${questionCard(item.topic, item.q, item.index, practice.index + 1, 'practice')}</div>
        <div class="quiz-footer"><span class="faint" style="font-size:12.5px">${escapeHtml(CATEGORY_BY_ID[item.topic.category].short)}</span><button class="link-button" data-action="practice-quit">Exit practice</button></div>
      </div>
    </div>
  </div>`;
}

/* ------------------------------------------------------------------ *
 * Formula sheet
 * ------------------------------------------------------------------ */
let formulaQuery = '';
function filteredFormulas() {
  const q = formulaQuery.trim().toLowerCase();
  const rows = [];
  for (const t of TOPICS) {
    for (const f of t.formulas) {
      const haystack = [f[0], f[1], f[2] || '', t.title, t.summary].join(' ').toLowerCase();
      if (!q || haystack.includes(q)) rows.push({ topic: t, formula: f });
    }
  }
  return rows;
}
function formulaRowsHtml() {
  const rows = filteredFormulas();
  if (!rows.length) return `<div class="card empty-state"><strong>No formulas found</strong>Try a different word.</div>`;
  return `<div class="result-count">${rows.length} formula${rows.length === 1 ? '' : 's'} found</div>
  ${CATEGORIES.map(c => {
    const group = rows.filter(r => r.topic.category === c.id);
    if (!group.length) return '';
    return `<div class="formula-group"><h2><span style="font-size:22px">${c.icon}</span>${escapeHtml(c.short)} <span class="badge">${group.length}</span></h2>
      <div class="formula-rows">${group.map(({ topic, formula }) => `
        <div class="card formula-row">
          <div class="f-label">${escapeHtml(formula[0])}<small><a class="text-link" href="#/topic/${topic.id}">${escapeHtml(topic.title)}</a></small></div>
          <div class="f-math">${md(`$$${formula[1]}$$`)}</div>
          <button class="copy-btn" data-action="copy-formula" data-latex="${escapeHtml(formula[1])}">Copy</button>
        </div>`).join('')}</div></div>`;
  }).join('')}`;
}
function formulasPage() {
  return `<div class="container page">
    <div class="explore-head">
      <div><span class="eyebrow">Quick reference</span><h1>Formula sheet</h1><p>${STATS.formulas} essential formulas from across the library, searchable in one place.</p></div>
      <a class="btn btn-outline" href="#/explore">Browse topics →</a>
    </div>
    <div class="filter-bar"><label class="filter-input"><span aria-hidden="true">⌕</span><input id="formula-filter" type="search" value="${escapeHtml(formulaQuery)}" placeholder="Search formulas, e.g. “quadratic” or “area”…" autocomplete="off" /></label></div>
    <div id="formula-rows">${formulaRowsHtml()}</div>
  </div>`;
}
function notFoundPage() {
  return `<div class="container page"><div class="card empty-state" style="margin-top:60px"><strong>We couldn't find that page</strong><p>Let's get you back to the math.</p><a class="btn btn-primary" href="#/">Go home</a></div></div>`;
}

/* ------------------------------------------------------------------ *
 * Search
 * ------------------------------------------------------------------ */
function searchResultsHtml(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    return `<div class="search-empty">Start typing to search ${STATS.topics} topics and ${STATS.formulas} formulas.</div>`;
  }
  const matches = TOPICS.filter(t => [t.title, t.summary, t.tip, ...t.tags, ...t.ideas, ...t.formulas.map(f => f[0] + ' ' + f[1])]
    .join(' ').toLowerCase().includes(q)).slice(0, 9);
  if (!matches.length) return `<div class="search-empty">No topics match “${escapeHtml(query)}”.</div>`;
  return matches.map(t => {
    const c = CATEGORY_BY_ID[t.category];
    return `<a class="search-result" data-result style="${catStyle(t.category)}" href="#/topic/${t.id}">
      <span class="cat-icon" aria-hidden="true">${c.icon}</span>
      <span><strong>${escapeHtml(t.title)}</strong><small>${escapeHtml(c.short)} — ${escapeHtml(t.summary.slice(0, 90))}${t.summary.length > 90 ? '…' : ''}</small></span>
    </a>`;
  }).join('');
}
function openSearch(value = '') {
  modal.hidden = false;
  searchInput.value = value;
  $('#search-results').innerHTML = searchResultsHtml(value);
  setTimeout(() => { searchInput.focus(); searchInput.select(); }, 0);
}
function closeSearch() { modal.hidden = true; }

/* ------------------------------------------------------------------ *
 * Events
 * ------------------------------------------------------------------ */
document.addEventListener('click', (event) => {
  const el = event.target.closest('[data-action]');
  if (!el) {
    if (event.target === modal) closeSearch();
    return;
  }
  const action = el.dataset.action;
  const card = el.closest('.question-card');
  const example = el.closest('.example-card');

  if (action === 'hero-search') { openSearch($('#hero-search-input')?.value || ''); return; }
  if (action === 'filter-category') {
    explore.category = el.dataset.category;
    $$('.filter-pill').forEach(b => b.classList.toggle('active', b.dataset.category === explore.category));
    $('#topic-results').innerHTML = topicResultsHtml(filteredTopics());
    return;
  }
  if (action === 'setup-category') {
    practiceSetup.category = el.dataset.category; render(); return;
  }
  if (action === 'setup-count') {
    practiceSetup.count = Number(el.dataset.count); render(); return;
  }
  if (action === 'practice-start') {
    startPractice({ category: practiceSetup.category, count: practiceSetup.count }); return;
  }
  if (action === 'practice-topic') {
    startPractice({ topicId: el.dataset.topic, count: 10 }); return;
  }
  if (action === 'practice-retry') {
    startPractice({ category: practice.source, count: practice.items.length, topicId: TOPIC_BY_ID[practice.source] ? practice.source : null }); return;
  }
  if (action === 'practice-reset') { practice = null; render(); return; }
  if (action === 'practice-quit') { practice = null; location.hash = '#/'; return; }
  if (action === 'practice-next') {
    if (!practice) return;
    practice.index += 1;
    practice.answered = false;
    practice.selected = null;
    if (practice.index >= practice.items.length) practice.finished = true;
    render();
    return;
  }
  if (action === 'toggle-complete') {
    const id = el.dataset.topic;
    progress.completed = progress.completed.includes(id) ? progress.completed.filter(x => x !== id) : [...progress.completed, id];
    saveProgress();
    toast(progress.completed.includes(id) ? 'Topic marked complete ✓' : 'Topic removed from completed');
    render();
    return;
  }
  if (action === 'example-step' && example) {
    const steps = $$('.ex-step', example);
    const answer = $('.answer-box', example);
    const note = $('.example-note', example);
    if (example.dataset.shown === 'done') {
      steps.forEach(s => { s.hidden = true; });
      if (answer) answer.hidden = true;
      if (note) note.hidden = true;
      example.dataset.shown = '0';
      el.textContent = 'Show step 1 →';
      return;
    }
    const shown = Number(example.dataset.shown);
    if (shown < steps.length) {
      steps[shown].hidden = false;
      example.dataset.shown = String(shown + 1);
      el.textContent = example.dataset.shown === String(steps.length) ? 'Show final answer →' : `Show step ${shown + 2} →`;
    } else {
      if (answer) answer.hidden = false;
      if (note) note.hidden = false;
      example.dataset.shown = 'done';
      el.textContent = 'Hide solution';
    }
    return;
  }
  if (action === 'example-all' && example) {
    $$('.ex-step', example).forEach(s => { s.hidden = false; });
    const answer = $('.answer-box', example);
    const note = $('.example-note', example);
    if (answer) answer.hidden = false;
    if (note) note.hidden = false;
    example.dataset.shown = 'done';
    $('[data-action="example-step"]', example).textContent = 'Hide solution';
    return;
  }
  if (action === 'choose' && card) {
    if (card.dataset.answered === 'true') return;
    const choice = Number(el.dataset.choice);
    card.dataset.selected = String(choice);
    $$('.option', card).forEach((b, i) => b.classList.toggle('selected', i === choice));
    return;
  }
  if (action === 'check' && card) { checkCard(card); return; }
  if (action === 'hint') {
    const box = $('.hint-box', card || document);
    if (box) { box.hidden = !box.hidden; el.textContent = box.hidden ? '💡 Show hint' : 'Hide hint'; return; }
    const { q } = getQuestion(card);
    if (q) {
      let hint = $('.hint-box', card);
      if (!hint) {
        hint = document.createElement('div');
        hint.className = 'hint-box';
        $('.q-feedback', card).before(hint);
      }
      hint.innerHTML = `💡 Hint: ${md(q.hint)}`;
      el.textContent = 'Hide hint';
    }
    return;
  }
  if (action === 'solution') {
    const { q } = getQuestion(card);
    if (!q) return;
    let box = $('.solution-box', card);
    if (box) { box.hidden = !box.hidden; el.textContent = box.hidden ? 'Show solution' : 'Hide solution'; return; }
    box = document.createElement('div');
    box.className = 'solution-box';
    box.innerHTML = `<strong style="font-size:12px;color:var(--accent);text-transform:uppercase;letter-spacing:.08em">Full solution</strong><div style="margin-top:6px">${md(q.solution)}</div>`;
    $('.q-feedback', card).before(box);
    el.textContent = 'Hide solution';
    return;
  }
  if (action === 'copy-formula') {
    const text = el.dataset.latex;
    navigator.clipboard?.writeText(text).then(() => toast('Formula copied to clipboard')).catch(() => toast('Copy unavailable in this browser'));
    return;
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'global-search') {
    $('#search-results').innerHTML = searchResultsHtml(event.target.value);
  } else if (event.target.id === 'explore-search') {
    explore.q = event.target.value;
    $('#topic-results').innerHTML = topicResultsHtml(filteredTopics());
  } else if (event.target.id === 'formula-filter') {
    formulaQuery = event.target.value;
    $('#formula-rows').innerHTML = formulaRowsHtml();
  }
});
document.addEventListener('keydown', (event) => {
  const typing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
  if (event.key === '/' && !typing && modal.hidden) { event.preventDefault(); openSearch(); }
  else if (event.key === 'Escape' && !modal.hidden) closeSearch();
  else if (event.key === 'Enter' && document.activeElement?.id === 'global-search') {
    const first = $('[data-result]', modal);
    if (first) { closeSearch(); location.hash = first.getAttribute('href'); }
  }
});
$('#theme-toggle').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
$('#search-trigger').addEventListener('click', () => openSearch());
$('#close-search').addEventListener('click', closeSearch);

render();
