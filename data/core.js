// Shared helpers for the Mathazion topic library.
// R is String.raw: it lets topic authors write LaTeX naturally, e.g. R`\frac{a}{b}`.
export const R = String.raw;

export const CATEGORIES = [
  { id: 'foundations', name: 'Foundations & Arithmetic', short: 'Foundations', icon: '🧮', blurb: 'Numbers, fractions, percentages and the rules that underpin all of mathematics.', color: '#5b7cfa' },
  { id: 'algebra', name: 'Algebra', short: 'Algebra', icon: '🔤', blurb: 'Expressions, equations, functions, polynomials and the logic of symbolic manipulation.', color: '#8b5cf6' },
  { id: 'geometry', name: 'Geometry & Trigonometry', short: 'Geometry', icon: '📐', blurb: 'Shapes, angles, measurement, coordinates and the relationships inside triangles.', color: '#ef7d4e' },
  { id: 'calculus', name: 'Calculus', short: 'Calculus', icon: '📈', blurb: 'Limits, derivatives, integrals and the mathematics of continuous change.', color: '#0fa58b' },
  { id: 'statistics', name: 'Statistics & Probability', short: 'Statistics', icon: '🎲', blurb: 'Data, chance, distributions and making sense of uncertainty.', color: '#d946a6' },
  { id: 'number-theory', name: 'Number Theory', short: 'Number Theory', icon: '🔢', blurb: 'Primes, divisibility, remainders and the hidden structure of integers.', color: '#e0a516' },
  { id: 'discrete', name: 'Discrete Mathematics', short: 'Discrete Math', icon: '🧩', blurb: 'Logic, sets, proof, graphs and the mathematics of finite structures.', color: '#3b9ae1' },
  { id: 'linear-algebra', name: 'Linear Algebra', short: 'Linear Algebra', icon: '🧝', blurb: 'Vectors, matrices, determinants and the geometry of linear systems.', color: '#14b8a6' },
  { id: 'applied', name: 'Applied Mathematics', short: 'Applied Math', icon: '🧭', blurb: 'Money, motion, rates, units and optimisation in the real world.', color: '#f2715b' },
  { id: 'advanced', name: 'Advanced Topics', short: 'Advanced', icon: '🚀', blurb: 'Complex numbers, conics, series and a first look at higher-dimensional calculus.', color: '#6366f1' },
];

// Q(prompt, choices, answerIndex, hint, solution, difficulty)
export const Q = (prompt, choices, answerIndex, hint, solution, difficulty = 'Medium') =>
  ({ prompt, choices, answerIndex, hint, solution, difficulty });

// EX(title, prompt, steps, answer, note?)
export const EX = (title, prompt, steps, answer, note = '') =>
  ({ title, prompt, steps, answer, note });

// Every topic keeps the same shape so the UI can render all of them identically.
export const topic = (id, category, title, summary, ideas, formulas, examples, questions, tags = [], tip = '') =>
  ({ id, category, title, summary, ideas, formulas, examples, questions, tags, tip });
