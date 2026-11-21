// Content integrity checks for the Mathazion library.
import { TOPICS, CATEGORIES, CATEGORY_BY_ID, STATS } from '../data/index.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const katex = require('../vendor/katex/katex.min.js');

const problems = [];
const allStrings = [];
const addStrings = (...xs) => xs.forEach(x => typeof x === 'string' && allStrings.push(x));

const ids = new Set();
for (const t of TOPICS) {
  if (ids.has(t.id)) problems.push(`Duplicate topic id: ${t.id}`);
  ids.add(t.id);
  if (!CATEGORY_BY_ID[t.category]) problems.push(`${t.id}: unknown category ${t.category}`);
  if (!t.summary || t.ideas.length < 2 || t.formulas.length < 2) problems.push(`${t.id}: thin content`);
  if (t.examples.length < 2) problems.push(`${t.id}: only ${t.examples.length} examples`);
  if (t.questions.length < 4) problems.push(`${t.id}: only ${t.questions.length} questions`);

  addStrings(t.summary, t.tip, ...t.ideas, ...t.tags);
  t.formulas.forEach(([label, latex, note]) => addStrings(label, latex, note));
  t.examples.forEach((e, i) => {
    addStrings(e.title, e.prompt, e.answer, e.note, ...e.steps);
    if (e.steps.length < 2) problems.push(`${t.id} example ${i}: too few steps`);
  });
  t.questions.forEach((q, i) => {
    addStrings(q.prompt, q.hint, q.solution, ...q.choices);
    if (q.choices.length !== 4) problems.push(`${t.id} Q${i}: ${q.choices.length} choices`);
    if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.choices.length)
      problems.push(`${t.id} Q${i}: bad answerIndex ${q.answerIndex}`);
    if (new Set(q.choices).size !== q.choices.length) problems.push(`${t.id} Q${i}: duplicate choices`);
    if (!q.solution) problems.push(`${t.id} Q${i}: missing solution`);
  });
}

for (const s of allStrings) {
  if (s.includes('\\$')) problems.push(`Escaped currency dollar: ${s.slice(0, 90)}`);
  const dollars = (s.match(/(?<!\\)\$/g) || []).length;
  if (dollars % 2 !== 0) problems.push(`Unbalanced math delimiters (${dollars}): ${s.slice(0, 110)}`);
  // Render every inline math span to catch LaTeX syntax errors.
  for (const m of s.matchAll(/(?<!\\)\$([^$]+?)(?<!\\)\$/g)) {
    const expr = m[1];
    try {
      katex.renderToString(expr, { throwOnError: true, strict: false, trust: false });
    } catch (err) {
      problems.push(`KaTeX: ${String(err.message).slice(0, 80)} :: ${JSON.stringify(m[0])}`);
    }
  }
}

console.log(`Topics: ${STATS.topics} | categories: ${STATS.categories} | examples: ${STATS.examples} | questions: ${STATS.questions} | formulas: ${STATS.formulas}`);
console.log(problems.length ? `FOUND ${problems.length} PROBLEM(S):\n` + [...new Set(problems)].join('\n') : 'All content checks passed.');
process.exit(problems.length ? 1 : 0);
