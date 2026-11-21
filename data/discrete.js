import { R, EX, Q, topic } from './core.js';

export default [
  topic('logic-truth-tables', 'discrete', 'Logic & Truth Tables',
    'Use propositions, logical connectives, truth tables and De Morgan\'s laws.',
    [
      'A proposition is a statement that is either true (T) or false (F). Connectives combine propositions: $\\wedge$ (and), $\\vee$ (or), $\\neg$ (not) and $\\to$ (implies).',
      R`$p\wedge q$ is true only when both are true. $p\vee q$ is true when at least one is true. The implication $p\to q$ is false only when $p$ is true and $q$ is false.`,
      R`De Morgan's laws: $\neg(p\wedge q)\equiv\neg p\vee\neg q$ and $\neg(p\vee q)\equiv\neg p\wedge\neg q$. A tautology is always true, such as $p\vee\neg p$.`,
    ],
    [
      ['Conjunction', R`p\wedge q`, 'True only if both are true.'],
      ['Implication', R`p\to q\equiv\neg p\vee q`, 'False only for T → F.'],
      ['De Morgan', R`\neg(p\wedge q)\equiv\neg p\vee\neg q`, 'Negation flips ∧ and ∨.'],
    ],
    [
      EX('Build a truth table', 'Construct the truth table for $p\\to q$.', [
        'List all four combinations: TT, TF, FT, FF.',
        'Implication is false only when p is true and q is false.',
        'The remaining rows are true (an implication with a false hypothesis is true by default).',
      ], R`\begin{array}{c c|c}p&q&p\to q\\ T&T&T\\ T&F&F\\ F&T&T\\ F&F&T\end{array}`),
      EX('Apply De Morgan', R`Simplify $\neg(p\wedge(q\vee\neg q))$.`, [
        R`$q\vee\neg q$ is a tautology — always true.`,
        R`So the expression becomes $\neg(p\wedge T)=\neg p$.`,
      ], R`\neg p`),
    ],
    [
      Q(R`The negation of $p\wedge q$ is:`, [R`\neg p\wedge\neg q`, R`\neg p\vee\neg q`, 'p ∧ q', R`p\vee q`], 1, 'Apply De Morgan\'s law.', R`$\neg(p\wedge q)\equiv\neg p\vee\neg q$.`, 'Easy'),
      Q(R`The implication $p\to q$ is false when:`, ['p is false, q is true', 'Both are true', 'p is true, q is false', 'Both are false'], 2, 'Only one row of the truth table is false.', R`$p\to q$ is false precisely when $p$ is true and $q$ is false.`, 'Easy'),
      Q(R`Simplify $p\vee F$.`, ['p', 'F', 'T', R`\neg p`], 0, 'Or with false leaves the proposition unchanged.', R`$p\vee F\equiv p$ (identity law).`, 'Easy'),
      Q(R`Which expression is a tautology?`, [R`p\wedge\neg p`, R`p\vee\neg p`, 'p → F', R`p\wedge F`], 1, 'A tautology is always true.', R`$p\vee\neg p$ is always true, so it is a tautology.`, 'Medium'),
    ], ['propositions', 'truth table', 'De Morgan', 'tautology'], 'Implications that start with a false hypothesis are considered true — this often feels surprising.'),

  topic('set-theory', 'discrete', 'Set Theory',
    'Use set notation, Venn diagrams, operations and the inclusion–exclusion principle.',
    [
      R`A set is a collection of distinct objects. We write $x\in A$ if x belongs to A. The empty set is $\varnothing$; the universal set is $U$.`,
      R`Operations: $A\cup B$ (union, elements in either), $A\cap B$ (intersection, elements in both), $A\setminus B$ (difference, in A but not B), and $A^c$ (complement, in U but not A).`,
      R`Inclusion–exclusion: $|A\cup B|=|A|+|B|-|A\cap B|$. The subtraction removes double-counting.`,
    ],
    [
      ['Union', R`A\cup B=\{x:x\in A\text{ or }x\in B\}`, 'Inclusive "or".'],
      ['Intersection', R`A\cap B=\{x:x\in A\text{ and }x\in B\}`, 'Elements common to both.'],
      ['Inclusion–exclusion', R`|A\cup B|=|A|+|B|-|A\cap B|`, 'Avoids counting overlap twice.'],
    ],
    [
      EX('Set operations', R`If $A=\{1,2,3,4\}$ and $B=\{3,4,5\}$, find $A\cup B$, $A\cap B$ and $A\setminus B$.`, [
        'Union: combine all elements, without repeats: $\\{1,2,3,4,5\\}$.',
        'Intersection: elements in both: $\\{3,4\\}$.',
        'Difference: elements of A that are not in B: $\\{1,2\\}$.',
      ], R`A\cup B=\{1,2,3,4,5\},\ A\cap B=\{3,4\},\ A\setminus B=\{1,2\}`),
      EX('Inclusion–exclusion', 'In a class of 30, 18 study maths, 14 study physics and 8 study both. How many study at least one?', [
        R`Add the two groups: $18+14=32$.`,
        'Subtract the 8 counted twice: $32-8=24$.',
      ], R`24\text{ students}`),
    ],
    [
      Q(R`If $A=\{1,3,5\}$ and $B=\{2,3,4\}$, find $A\cap B$.`, ['{1,2}', '{3}', '{1,2,3,4,5}', '∅'], 1, 'Intersection means common elements.', R`Only 3 appears in both sets.`, 'Easy'),
      Q(R`If $|A|=20$, $|B|=15$ and $|A\cap B|=5$, find $|A\cup B|$.`, ['30', '35', '40', '25'], 0, 'Use inclusion–exclusion.', R`$20+15-5=30$.`, 'Easy'),
      Q(R`If $U=\{1,2,3,4,5\}$ and $A=\{2,4\}$, find $A^c$.`, ['{1,3,5}', '{2,4}', 'U', '∅'], 0, 'Complement contains elements of U not in A.', R`$A^c=\{1,3,5\}$.`, 'Easy'),
      Q('Two sets are disjoint if:', ['Their union is empty', 'Their intersection is empty', 'They have the same size', 'One contains the other'], 1, 'Disjoint sets share no elements.', R`$A\cap B=\varnothing$ means the sets are disjoint.`, 'Easy'),
    ], ['union', 'intersection', 'complement', 'Venn diagram'], 'Draw a Venn diagram whenever sets overlap — it makes inclusion–exclusion obvious.'),

  topic('mathematical-induction', 'discrete', 'Mathematical Induction',
    'Prove statements about all positive integers using a base case and an inductive step.',
    [
      'Induction proves a statement $P(n)$ for every positive integer. Step 1: prove the base case (usually $n=1$). Step 2: assume $P(k)$ is true (the inductive hypothesis) and prove $P(k+1)$.',
      'The inductive step must actually use the assumption. Once both steps hold, the statement follows for all $n\\ge1$, like a chain of dominoes.',
      R`A classic result is $\sum_{i=1}^n i=\frac{n(n+1)}{2}$; another is $\sum_{i=1}^n(2i-1)=n^2$.`,
    ],
    [
      ['Base case', R`P(1)\text{ is true}`, 'Start the domino chain.'],
      ['Inductive step', R`P(k)\Rightarrow P(k+1)`, 'Assume for k, prove for k + 1.'],
    ],
    [
      EX('Prove the sum formula', R`Prove $\sum_{i=1}^n i=\frac{n(n+1)}{2}$.`, [
        R`Base case: $n=1$ gives $1=\frac{1\cdot2}{2}$.`,
        R`Assume $\sum_{i=1}^k i=\frac{k(k+1)}{2}$.`,
        R`Then $\sum_{i=1}^{k+1}i=\frac{k(k+1)}{2}+(k+1)=(k+1)\left(\frac k2+1\right)=\frac{(k+1)(k+2)}{2}$, which is the formula for $n=k+1$.`,
      ], R`\text{True for all }n\ge1`),
      EX('Odd numbers', R`Prove $\sum_{i=1}^n(2i-1)=n^2$.`, [
        R`Base case: $2(1)-1=1=1^2$.`,
        R`Assume the sum to $k$ equals $k^2$.`,
        R`Add the next odd number: $k^2+2(k+1)-1=k^2+2k+1=(k+1)^2$.`,
      ], R`\text{True for all }n\ge1`),
    ],
    [
      Q('The first step in an induction proof is usually to:', ['Assume P(k)', 'Prove the base case', 'Prove P(k+1) directly', 'Take a limit'], 1, 'You must establish the starting case.', R`First prove the base case, typically $n=1$.`, 'Easy'),
      Q('In the inductive step we assume:', ['P(k) is true', 'P(n) is false', 'The result holds for all n already', 'Nothing'], 0, 'That assumption is the inductive hypothesis.', R`We assume $P(k)$ and use it to prove $P(k+1)$.`, 'Easy'),
      Q(R`For the sum formula, adding $(k+1)$ to $\frac{k(k+1)}{2}$ gives:`, [R`\frac{(k+1)(k+2)}{2}`, R`\frac{k(k+2)}{2}`, R`(k+1)^2`, R`\frac{k^2+k+1}{2}`], 0, 'Factor out $k+1$.', R`$\frac{k(k+1)+2(k+1)}{2}=\frac{(k+1)(k+2)}{2}$.`, 'Medium'),
      Q('Induction proves a statement for:', ['A few sample values', 'All positive integers (after both steps)', 'Only even integers', 'All real numbers'], 1, 'The domino effect continues indefinitely.', R`Once the base case and inductive step are established, $P(n)$ holds for every positive integer.`, 'Medium'),
    ], ['proof', 'inductive hypothesis', 'base case'], 'Never assume the conclusion in the inductive step — assume only the k case.'),

  topic('graph-theory', 'discrete', 'Graph Theory Basics',
    'Describe graphs with vertices, edges and degrees, and use the handshaking lemma and tree properties.',
    [
      'A graph consists of vertices (nodes) and edges connecting them. The degree of a vertex is the number of edges incident to it; a loop counts twice.',
      R`The handshaking lemma states $\sum_{v}\deg(v)=2|E|$, because every edge contributes 2 to the total degree. Consequently, the number of odd-degree vertices is even.`,
      'A tree is a connected graph with no cycles. A tree with $n$ vertices has exactly $n-1$ edges. A graph has an Eulerian circuit if it is connected and every vertex has even degree.',
    ],
    [
      ['Handshaking lemma', R`\sum_{v\in V}\deg(v)=2|E|`, 'Total degree is twice the edge count.'],
      ['Tree property', R`|E|=|V|-1`, 'Connected and acyclic.'],
      ['Complete graph', R`|E|=\binom n2=\frac{n(n-1)}{2}`, 'Every pair of vertices is connected.'],
    ],
    [
      EX('Handshaking lemma', 'A graph has degrees 3, 2, 2, 1 and 2. How many edges does it have?', [
        'Sum the degrees: $3+2+2+1+2=10$.',
        'Divide by 2: $|E|=10/2=5$.',
      ], R`5\text{ edges}`),
      EX('Complete graph', R`How many edges does $K_4$ have?`, [
        R`Every pair of the 4 vertices is connected: $\binom42$.`,
        R`$\binom42=\frac{4\times3}{2}=6$.`,
      ], R`6\text{ edges}`),
    ],
    [
      Q('In a graph, the sum of all vertex degrees equals:', ['|E|', '2|E|', '|V|', '2|V|'], 1, 'Each edge is counted at both endpoints.', R`The handshaking lemma gives $\sum\deg(v)=2|E|$.`, 'Easy'),
      Q(R`How many edges does the complete graph $K_5$ have?`, ['5', '10', '20', '25'], 1, 'Choose 2 vertices from 5.', R`$\binom52=10$.`, 'Easy'),
      Q('A tree has 8 vertices. How many edges does it have?', ['6', '7', '8', '9'], 1, 'Use $E=V-1$.', R`$E=8-1=7$.`, 'Easy'),
      Q('A connected graph has an Eulerian circuit exactly when:', ['All degrees are even', 'All degrees are odd', 'It is a tree', 'It has no cycles'], 0, 'You must be able to enter and leave every vertex in pairs.', R`Connected with every vertex of even degree is the Eulerian circuit condition.`, 'Medium'),
    ], ['vertices', 'edges', 'degree', 'trees'], 'A graph with an odd number of odd-degree vertices cannot exist — check your degree sums.'),
];
