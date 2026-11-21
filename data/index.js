import { CATEGORIES } from './core.js';
import basicOperations from './basic-operations.js';
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
import coverageCore from './coverage-core.js';
import coverageMore from './coverage-more.js';
import coverageAdvanced from './coverage-advanced.js';
import coverageFinal from './coverage-final.js';

export { CATEGORIES };

export const TOPICS = [
  ...basicOperations, ...foundations, ...algebra, ...geometry, ...calculus, ...statistics,
  ...numberTheory, ...discrete, ...linearAlgebra, ...applied, ...advanced, ...further, ...coverageCore, ...coverageMore, ...coverageAdvanced, ...coverageFinal,
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
