import { CATEGORIES } from './core.js';
import foundations from './foundations.js';
import algebra from './algebra.js';
import geometry from './geometry.js';
import calculus from './calculus.js';
import statistics from './statistics.js';
import numberTheory from './number-theory.js';
import discrete from './discrete.js';
import linearAlgebra from './linear-algebra.js';
import applied from './applied.js';
import advanced from './advanced.js';
import further from './further.js';

export { CATEGORIES };

export const TOPICS = [
  ...foundations, ...algebra, ...geometry, ...calculus, ...statistics,
  ...numberTheory, ...discrete, ...linearAlgebra, ...applied, ...advanced, ...further,
];

export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map(t => [t.id, t]));
export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

export const STATS = {
  topics: TOPICS.length,
  categories: CATEGORIES.length,
  examples: TOPICS.reduce((n, t) => n + t.examples.length, 0),
  questions: TOPICS.reduce((n, t) => n + t.questions.length, 0),
  formulas: TOPICS.reduce((n, t) => n + t.formulas.length, 0),
};

export function topicsInCategory(categoryId) {
  return TOPICS.filter(t => t.category === categoryId);
}
