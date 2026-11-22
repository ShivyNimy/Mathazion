import { R, EX, Q, topic } from './core.js';

export default [
  topic('set-theory-operations', 'foundations', 'Set Theory',
    'Use sets, intervals, subsets and Venn diagrams to describe collections precisely.',
    [
      'A set is a collection of distinct objects. If $x$ belongs to $A$, write $x\\in A$. The empty set $\\varnothing$ contains no elements.',
      R`Common operations are $A\cup B$ (union), $A\cap B$ (intersection), $A\setminus B$ (difference), and $A^c$ (complement). The universal set $U$ contains everything under discussion.`,
      R`A subset satisfies $A\subseteq B$ when every element of $A$ is in $B$. De Morgan’s laws say $(A\cup B)^c=A^c\cap B^c$ and $(A\cap B)^c=A^c\cup B^c$.`,
    ],
    [
      ['Union', R`A\cup B=\{x:x\in A\text{ or }x\in B\}`, 'Inclusive “or”.'],
      ['Intersection', R`A\cap B=\{x:x\in A\text{ and }x\in B\}`, 'Elements in both.'],
      ['Complement', R`A^c=U\setminus A`, 'Everything outside A.'],
    ],
    [
      EX('Operate on sets', R`If $A=\{1,2,3\}$ and $B=\{3,4,5\}$, find $A\cup B$ and $A\cap B$.`, [
        R`Union collects all distinct elements: $\{1,2,3,4,5\}$.`,
        R`Intersection keeps only the common element $\{3\}$.`,
      ], R`A\cup B=\{1,2,3,4,5\},\quad A\cap B=\{3\}`),
      EX('Apply De Morgan', R`If $U=\{1,2,3,4\}$, $A=\{1,2\}$ and $B=\{2,3\}$, verify $(A\cup B)^c=A^c\cap B^c$.`, [
        R`First $A\cup B=\{1,2,3\}$, so $(A\cup B)^c=\{4\}$.`,
        R`Also $A^c=\{3,4\}$ and $B^c=\{1,4\}$, whose intersection is $\{4\}$.`,
      ], R`\{4\}=\{4\}`),
    ],
    [
      Q(R`If $A=\{1,2,3\}$ and $B=\{3,4\}$, then $A\cap B$ is:`, ['{1,2}', '{3}', '{1,2,3,4}', '∅'], 1, 'Intersection means common elements.', R`Only 3 is in both sets.`, 'Easy'),
      Q(R`The complement of $A$ is written:`, ['A ∪ B', 'A ∩ B', 'Aᶜ', 'A × B'], 2, 'Complement notation.', R`$A^c=U\setminus A$.`, 'Easy'),
      Q(R`De Morgan’s law states $(A\cap B)^c$ equals:`, ['Aᶜ ∪ Bᶜ', 'Aᶜ ∩ Bᶜ', 'A ∪ B', 'A − B'], 0, 'Swap intersection and union.', R`$(A\cap B)^c=A^c\cup B^c$.`, 'Medium'),
      Q('A set with no elements is called:', ['Universal', 'Empty', 'Infinite', 'Subset'], 1, 'Standard terminology.', R`The empty set is denoted $\varnothing$ or $\{\}$.`, 'Easy'),
    ], ['sets', 'union', 'intersection', 'Venn diagrams'], 'Use a Venn diagram to visualise set operations.'),

  topic('cartesian-products-relations', 'discrete', 'Cartesian Products & Relations',
    'Build ordered pairs and describe relationships between sets mathematically.',
    [
      R`The Cartesian product $A\times B$ is the set of all ordered pairs $(a,b)$ with $a\in A$ and $b\in B$. If $|A|=m$ and $|B|=n$, then $|A\times B|=mn$.`,
      'A relation from $A$ to $B$ is any subset of $A\\times B$. A relation on $A$ is a subset of $A\\times A$.',
      'A relation may be reflexive, symmetric, antisymmetric or transitive. An equivalence relation is reflexive, symmetric and transitive; a partial order is reflexive, antisymmetric and transitive.',
    ],
    [
      ['Cartesian product', R`A\times B=\{(a,b):a\in A,b\in B\}`, 'Ordered pairs.'],
      ['Equivalence relation', 'Reflexive, symmetric, transitive.', 'Equality is an example.'],
      ['Partial order', 'Reflexive, antisymmetric, transitive.', 'Divisibility is an example.'],
    ],
    [
      EX('Compute a product', R`If $A=\{1,2\}$ and $B=\{a,b\}$, find $A\times B$.`, [
        'Pair each element of A with each element of B.',
        R`$A\times B=\{(1,a),(1,b),(2,a),(2,b)\}$.`,
      ], R`\{(1,a),(1,b),(2,a),(2,b)\}`),
      EX('Classify equality', 'Show that equality on integers is an equivalence relation.', [
        'Reflexive: $a=a$ for every integer.',
        'Symmetric: $a=b$ implies $b=a$; transitive: $a=b$ and $b=c$ imply $a=c$.',
      ], R`\text{Equality is an equivalence relation}`),
    ],
    [
      Q(R`If $|A|=3$ and $|B|=2$, then $|A\times B|$ is:`, ['5', '6', '9', '1'], 1, 'Multiply the sizes.', R`$|A\times B|=3\cdot2=6$.`, 'Easy'),
      Q('A relation from A to B is a subset of:', ['A ∪ B', 'A ∩ B', 'A × B', 'Aᶜ'], 2, 'Relations consist of ordered pairs.', R`A relation from $A$ to $B$ is a subset of $A\times B$.`, 'Easy'),
      Q('An equivalence relation must be:', ['Reflexive, symmetric, transitive', 'Only symmetric', 'Only transitive', 'Reflexive and antisymmetric'], 0, 'Three defining properties.', R`An equivalence relation is reflexive, symmetric and transitive.`, 'Medium'),
      Q('The relation “divides” on positive integers is a:', ['Equivalence relation', 'Partial order', 'Function', 'Empty relation'], 1, 'It is reflexive, antisymmetric and transitive.', R`Divisibility is a classic partial order.`, 'Medium'),
    ], ['Cartesian product', 'relations', 'equivalence', 'partial order'], 'Order matters in ordered pairs: (a,b) is not the same as (b,a).'),

  topic('combinatorics-counting', 'discrete', 'Advanced Counting Techniques',
    'Count arrangements systematically with inclusion–exclusion, generating functions and recurrences.',
    [
      R`Inclusion–exclusion corrects overcounting: $|A\cup B|=|A|+|B|-|A\cap B|$, with alternating sums for more sets.`,
      R`The number of non-negative integer solutions to $x_1+\cdots+x_k=n$ is $\binom{n+k-1}{k-1}$ — the stars and bars formula.`,
      'Generating functions encode a sequence as coefficients of a power series; multiplying series corresponds to combining choices. The pigeonhole and multiplication principles underlies these methods.',
    ],
    [
      ['Inclusion–exclusion', R`|A\cup B|=|A|+|B|-|A\cap B|`, 'Avoid double counting.'],
      ['Stars and bars', R`\binom{n+k-1}{k-1}`, 'Nonnegative solutions.'],
    ],
    [
      EX('Inclusion–exclusion', 'In a class, 20 study algebra, 15 study geometry and 8 study both. How many study at least one?', [
        R`Add the groups: $20+15-8$.`,
        'Subtract those counted twice: 27 study at least one.',
      ], R`27`),
      EX('Stars and bars', R`How many non-negative solutions are there to $x+y+z=5$?`, [
        R`Here $n=5$ and $k=3$, so use $\binom{5+3-1}{3-1}=\binom72$.`,
        R`$\binom72=21$ solutions.`,
      ], R`21`),
    ],
    [
      Q('Inclusion–exclusion subtracts:', ['Elements in neither set', 'Elements in both sets', 'All elements', 'Only set A'], 1, 'Intersection was counted twice.', R`We subtract $|A\cap B|$ to avoid double counting.`, 'Easy'),
      Q(R`Stars and bars gives the number of solutions to $x_1+x_2+x_3=4$ as:`, ['C(4,3)', 'C(6,2)', 'C(5,3)', 'C(6,3)'], 1, 'Use C(n+k−1,k−1).', R`$\binom{4+3-1}{3-1}=\binom62=15$.`, 'Medium'),
      Q('A generating function encodes a sequence as:', ['Exponents only', 'Coefficients of a power series', 'Matrix entries', 'Set intersections'], 1, 'Sequences become coefficient sequences.', R`The coefficient of $x^n$ represents the nth term.`, 'Medium'),
      Q('The multiplication principle says to multiply counts for:', ['Mutually exclusive choices', 'Independent sequential choices', 'Overlapping sets', 'Empty sets'], 1, 'Count by product rule.', R`Multiply when choices are made in sequence.`, 'Easy'),
    ], ['inclusion-exclusion', 'stars and bars', 'generating functions'], 'When sets overlap, subtract the intersection to avoid double counting.'),

  topic('graph-theory-traversals', 'discrete', 'Graph Theory: Traversals & Cycles',
    'Model networks with vertices, edges, degree counts, paths and traversals.',
    [
      'A graph $G=(V,E)$ has vertices $V$ and edges $E$. The degree of a vertex is the number of incident edges; in a simple graph the sum of all degrees equals $2|E|$.',
      'A path visits vertices via edges; a cycle returns to its start. A connected graph has a path between every pair of vertices.',
      'An Euler circuit uses every edge exactly once and exists when all vertices have even degree. A Hamiltonian cycle visits every vertex exactly once.',
    ],
    [
      ['Handshaking lemma', R`\sum_{v\in V}\deg(v)=2|E|`, 'Each edge counted twice.'],
      ['Euler circuit', 'All vertices have even degree.', 'Connected graph.'],
      ['Tree', R`|E|=|V|-1`, 'Connected and acyclic.'],
    ],
    [
      EX('Check an Euler circuit', 'A connected graph has degrees 2, 2, 2 and 4. Does it have an Euler circuit?', [
        'Check each vertex degree: all are even.',
        'A connected graph with all even degrees has an Euler circuit.',
      ], R`\text{Yes, an Euler circuit exists}`),
      EX('Count edges of a tree', 'A tree has 12 vertices. How many edges does it have?', [
        R`A tree with $n$ vertices has $n-1$ edges.`,
        R`So it has $12-1=11$ edges.`,
      ], R`11`),
    ],
    [
      Q(R`In any graph, the sum of degrees equals:`, ['|E|', '2|E|', '|V|', '2|V|'], 1, 'Handshaking lemma.', R`$\sum\deg(v)=2|E|$.`, 'Easy'),
      Q('A connected graph with all vertices of even degree has:', ['An Euler circuit', 'A Hamiltonian cycle only', 'No cycles', 'Only isolated vertices'], 0, 'Euler’s theorem.', R`Such a graph has an Euler circuit.`, 'Medium'),
      Q(R`A tree with 8 vertices has how many edges?`, ['6', '7', '8', '9'], 1, 'Use n − 1.', R`A tree has $8-1=7$ edges.`, 'Easy'),
      Q('A Hamiltonian cycle visits every:', ['Edge exactly once', 'Vertex exactly once and returns', 'Vertex twice', 'Edge twice'], 1, 'Difference from Euler paths.', R`A Hamiltonian cycle visits each vertex exactly once before returning.`, 'Medium'),
    ], ['graphs', 'degree', 'Euler', 'Hamiltonian', 'trees'], 'Trees are the minimal connected graphs: n vertices, n − 1 edges.'),

  topic('induction-proofs', 'discrete', 'Induction Proof Techniques',
    'Prove statements about all natural numbers using a base case and an inductive step.',
    [
      'To prove $P(n)$ for all $n\\ge1$: prove a base case such as $P(1)$, then assume $P(k)$ and prove $P(k+1)$. This is the principle of mathematical induction.',
      'Strong induction assumes $P(1),\\ldots,P(k)$ to prove $P(k+1)$. It is useful when the next case depends on several earlier cases.',
      'Induction is a proof method, not guesswork: always verify the base case and show exactly where the induction hypothesis is used.',
    ],
    [
      ['Base case', 'Verify the statement at the starting value.', 'Usually n = 1.'],
      ['Inductive hypothesis', 'Assume P(k) is true.', 'Then prove P(k+1).'],
      ['Sum formula', R`1+2+\cdots+n=\frac{n(n+1)}2`, 'Classic induction example.'],
    ],
    [
      EX('Prove a sum formula', R`Prove that $1+2+\cdots+n=\frac{n(n+1)}2$.`, [
        R`Base: $n=1$ gives $1=1\cdot2/2$, true.`,
        R`Assume the formula for $k$. Adding $k+1$ gives $\frac{k(k+1)}2+(k+1)=\frac{(k+1)(k+2)}2$, which is the formula for $k+1$.`,
      ], R`\text{True for all }n\ge1`),
      EX('Prove divisibility', 'Prove that $2^n>n$ for all $n\\ge1$.', [
        R`Base: $2^1=2>1$.`,
        'Inductive step: $2^{k+1}=2\\cdot2^k>2k\\ge k+1$ for $k\\ge1$.',
      ], R`\text{True for all }n\ge1`),
    ],
    [
      Q('Induction begins by proving:', ['Only P(k+1)', 'A base case', 'The conclusion', 'Nothing'], 1, 'Start at n = 1 or another value.', R`Verify a base case first.`, 'Easy'),
      Q('In the inductive step we assume:', ['P(k) is true', 'P(k+1) is true', 'P is false', 'Nothing'], 0, 'Then prove P(k+1).', R`Assume $P(k)$ and prove $P(k+1)$.`, 'Easy'),
      Q(R`The induction proof of $1+\cdots+n=\frac{n(n+1)}2$ needs:`, ['Only a base case', 'Only an assumption', 'A base and inductive step', 'A graph'], 2, 'Both parts are essential.', R`A valid induction proof has both a base case and an inductive step.`, 'Medium'),
      Q('Strong induction assumes:', ['Only P(k)', 'P(1) through P(k)', 'No cases', 'Only P(k+1)'], 1, 'Useful for recurrences.', R`Strong induction assumes all earlier cases up to k.`, 'Medium'),
    ], ['induction', 'proof', 'strong induction', 'natural numbers'], 'Skipping the base case is the most common induction mistake.'),

  topic('complex-arithmetic', 'algebra', 'Complex Number Arithmetic',
    'Extend the real numbers with i² = −1 and work in the complex plane.',
    [
      R`A complex number is $z=a+bi$, where $i^2=-1$. Its real part is $a$ and imaginary part is $b$. The conjugate is $\overline z=a-bi$.`,
      R`The modulus is $|z|=\sqrt{a^2+b^2}$ and $|z|^2=z\overline z$. Arguments describe the angle of $z$ in the complex plane.`,
      R`Polar form is $z=r(\cos\theta+i\sin\theta)=re^{i\theta}$. De Moivre’s theorem gives $(\cos\theta+i\sin\theta)^n=\cos(n\theta)+i\sin(n\theta)$.`,
    ],
    [
      ['Imaginary unit', R`i^2=-1`, 'Foundation of complex numbers.'],
      ['Modulus', R`|a+bi|=\sqrt{a^2+b^2}`, 'Distance from origin.'],
      ['De Moivre', R`(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta`, 'Powers in polar form.'],
    ],
    [
      EX('Add and multiply', R`If $z_1=2+3i$ and $z_2=1-i$, find $z_1+z_2$ and $z_1z_2$.`, [
        R`Sum: $(2+1)+(3-1)i=3+2i$.`,
        R`Product: $2-2i+3i-3i^2=5+i$.`,
      ], R`3+2i,\quad5+i`),
      EX('Use De Moivre', R`Compute $(\cos 30^\circ+i\sin 30^\circ)^3$.`, [
        'Apply De Moivre with angle 30° and n = 3.',
        R`Result $=\cos90^\circ+i\sin90^\circ=i$.`,
      ], R`i`),
    ],
    [
      Q(R`The value of $i^2$ is:`, ['1', '−1', '0', 'i'], 1, 'Definition of i.', R`By definition $i^2=-1$.`, 'Easy'),
      Q(R`The conjugate of $3-4i$ is:`, ['3 + 4i', '−3 − 4i', '−3 + 4i', '3 − 4i'], 0, 'Change the imaginary sign.', R`$\overline{3-4i}=3+4i$.`, 'Easy'),
      Q(R`The modulus of $3+4i$ is:`, ['5', '7', '25', '12'], 0, 'sqrt(3² + 4²).', R`$\sqrt{9+16}=5$.`, 'Easy'),
      Q(R`By De Moivre, $(\cos 30^\circ+i\sin 30^\circ)^3$ equals:`, ['1', 'i', '−1', '−i'], 1, 'Triple the angle.', R`$\cos90^\circ+i\sin90^\circ=i$.`, 'Medium'),
    ], ['complex numbers', 'conjugates', 'De Moivre', 'polar form'], 'Treat i² as −1 when simplifying products.'),

  topic('polynomials-advanced', 'algebra', 'Polynomials & Root Theorems',
    'Analyse polynomial roots with division, the remainder theorem and factoring techniques.',
    [
      R`The remainder theorem says the remainder when $P(x)$ is divided by $x-c$ is $P(c)$. If $P(c)=0$, then $x-c$ is a factor (factor theorem).`,
      R`For a polynomial with integer coefficients, the rational root theorem lists possible rational roots as $\pm\frac{\text{factor of constant}}{\text{factor of leading coefficient}}$.`,
      'A polynomial of degree n has at most n real roots (counting multiplicity). Synthetic division is a compact way to divide by $x-c$.',
    ],
    [
      ['Remainder theorem', 'Remainder of P(x) ÷ (x − c) is P(c).', 'Evaluate, do not divide fully.'],
      ['Factor theorem', R`P(c)=0\Rightarrow(x-c)\mid P(x)`, 'Root means factor.'],
      ['Rational roots', R`\pm\frac{\text{factor of }a_0}{\text{factor of }a_n}`, 'Candidate list only.'],
    ],
    [
      EX('Use the remainder theorem', R`Find the remainder when $P(x)=x^3-2x+5$ is divided by $x-2$.`, [
        R`The remainder is $P(2)=8-4+5$.`,
        R`That equals 9.`,
      ], R`9`),
      EX('Factor using a root', R`Given $x=1$ is a root of $x^3-x^2-2x+2$, factor the polynomial.`, [
        'Divide by $x-1$ to obtain $x^2-2$.',
        R`So the factorization is $(x-1)(x^2-2)=(x-1)(x-\sqrt2)(x+\sqrt2)$.`,
      ], R`(x-1)(x-\sqrt2)(x+\sqrt2)`),
    ],
    [
      Q('The remainder when $P(x)$ is divided by $x-c$ is:', ['P(0)', 'P(c)', 'P(1)', 'c'], 1, 'Remainder theorem.', R`It equals $P(c)$.`, 'Easy'),
      Q(R`If $P(3)=0$, then which is a factor?`, ['x + 3', 'x − 3', '3x', 'x² − 3'], 1, 'Factor theorem.', R`$(x-3)$ divides $P(x)$.`, 'Easy'),
      Q('A polynomial of degree 5 has at most how many real roots?', ['3', '4', '5', '10'], 2, 'Degree bound.', R`At most 5 real roots, counting multiplicity.`, 'Easy'),
      Q('Synthetic division is a shortcut for dividing by:', ['x + c only', 'x − c', 'Any quadratic', 'A constant'], 1, 'Uses the root c.', R`Synthetic division divides by a linear factor $x-c$.`, 'Medium'),
    ], ['polynomials', 'remainder theorem', 'factor theorem', 'roots'], 'To find a remainder, evaluate the polynomial — no long division required.'),

  topic('polar-parametric-calculus', 'calculus', 'Calculus of Polar & Parametric Curves',
    'Differentiate and integrate curves described by parameters or polar coordinates.',
    [
      R`For a parametrically defined curve $x=x(t)$, $y=y(t)$, the slope is $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ when $dx/dt\\neq0$.`,
      R`A polar curve has $r=f(\theta)$, with $x=r\cos\theta$ and $y=r\sin\theta$. Its area is $A=\frac12\int_\alpha^\beta r^2\,d\theta$.`,
      R`Parametric arc length is $\int_a^b\sqrt{(x')^2+(y')^2}\,dt$. These formulas extend ordinary calculus to non-function curves.`,
    ],
    [
      ['Parametric slope', R`\frac{dy}{dx}=\frac{dy/dt}{dx/dt}`, 'Chain rule ratio.'],
      ['Polar area', R`A=\frac12\int_\alpha^\beta r^2d\theta`, 'Radial sweep.'],
      ['Parametric arc length', R`\int_a^b\sqrt{(x')^2+(y')^2}\,dt`, 'Speed integral.'],
    ],
    [
      EX('Parametric slope', R`For $x=t^2$, $y=t^3$, find $\frac{dy}{dx}$ at $t=2$.`, [
        R`$dx/dt=2t$ and $dy/dt=3t^2$.`,
        R`So $dy/dx=\frac{3t}{2}$; at $t=2$, the slope is 3.`,
      ], R`3`),
      EX('Polar area', R`Find the area enclosed by the circle $r=2$ between $\theta=0$ and $\theta=\pi$.`, [
        R`Use $A=\frac12\int_0^\pi 4\,d\theta$.`,
        R`This equals $\frac12\cdot4\pi=2\pi$.`,
      ], R`2\pi`),
    ],
    [
      Q(R`For parametric curves, $\frac{dy}{dx}$ equals:`, ['dy/dt + dx/dt', R`\frac{dy/dt}{dx/dt}`, R`\frac{dx/dt}{dy/dt}`, 'dy/dx = 0'], 1, 'Use the chain rule.', R`Divide the two parametric derivatives.`, 'Easy'),
      Q(R`Polar area is given by:`, [R`\int r\,d\theta`, R`\frac12\int r^2d\theta`, R`\int r^2d\theta`, R`\pi\int r\,d\theta`], 1, 'Standard polar area formula.', R`$A=\frac12\int r^2\,d\theta$.`, 'Medium'),
      Q(R`For a polar curve, $x$ equals:`, ['r sin θ', 'r cos θ', 'r tan θ', 'r² cos θ'], 1, 'Coordinate conversion.', R`$x=r\cos\theta$ and $y=r\sin\theta$.`, 'Easy'),
      Q('Parametric equations are useful for curves that:', ['Are straight lines only', 'Fail the vertical line test', 'Have no derivatives', 'Are functions only'], 1, 'They can trace loops and multi-valued paths.', R`Parametric curves can represent paths that are not single-valued functions of x.`, 'Medium'),
    ], ['parametric', 'polar', 'arc length', 'area'], 'Parametric curves can trace paths that are not functions of x.'),

  topic('conic-equations', 'algebra', 'Conic Sections from Equations',
    'Recognise and analyse circles, parabolas, ellipses and hyperbolas from equations.',
    [
      R`A circle with centre $(h,k)$ and radius $r$ satisfies $(x-h)^2+(y-k)^2=r^2$.`,
      R`A parabola has standard form $(x-h)^2=4p(y-k)$ or $(y-k)^2=4p(x-h)$; its focus is $p$ units from the vertex.`,
      R`An ellipse has $\frac{(x-h)^2}{a^2}+\frac{(y-k)^2}{b^2}=1$ and a hyperbola has a minus sign. Completing the square reveals a conic’s centre and axes.`,
    ],
    [
      ['Circle', R`(x-h)^2+(y-k)^2=r^2`, 'Centre (h,k).'],
      ['Parabola', R`(x-h)^2=4p(y-k)`, 'Vertex (h,k).'],
      ['Ellipse', R`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1`, 'Sum of squares = 1.'],
    ],
    [
      EX('Identify a circle', R`Find the centre and radius of $x^2+y^2-4x+2y-4=0$.`, [
        R`Complete the square: $(x-2)^2+(y+1)^2=9$.`,
        R`Centre is $(2,-1)$ and radius is 3.`,
      ], R`\text{Centre }(2,-1),\ r=3`),
      EX('Parabola focus', R`Find the focus of $(x-1)^2=8(y+2)$.`, [
        R`Compare with $(x-h)^2=4p(y-k)$: $4p=8$, so $p=2$.`,
        R`Vertex is $(1,-2)$, so focus is $(1,0)$.`,
      ], R`(1,0)`),
    ],
    [
      Q(R`The circle $(x-1)^2+(y+2)^2=25$ has radius:`, ['2', '5', '25', '10'], 1, 'Radius squared is 25.', R`The radius is $\sqrt{25}=5$.`, 'Easy'),
      Q(R`In $(x-h)^2=4p(y-k)$, the vertex is:`, ['(h,k)', '(0,0)', '(4p,0)', '(h+p,k)'], 0, 'Standard form centre point.', R`The vertex is $(h,k)$.`, 'Easy'),
      Q(R`Which equation represents an ellipse?`, ['x² + y² = 9', R`\frac{x^2}{9}+\frac{y^2}{4}=1`, R`\frac{x^2}{9}-\frac{y^2}{4}=1`, 'y = x²'], 1, 'Sum of fractions equals 1.', R`An ellipse has plus signs and equals 1.`, 'Medium'),
      Q('Completing the square helps to:', ['Delete terms', 'Find a conic’s centre and radius/axes', 'Solve triangles', 'Differentiate a curve'], 1, 'Rewrite in standard form.', R`Completing the square reveals standard conic form.`, 'Medium'),
    ], ['conic sections', 'circle', 'parabola', 'ellipse', 'hyperbola'], 'A minus sign between squared terms signals a hyperbola.'),

  topic('coordinate-geometry-3d', 'geometry', '3D Coordinate Geometry',
    'Locate points, measure distances and describe planes in three dimensions.',
    [
      R`A point in space is $(x,y,z)$. The distance between $(x_1,y_1,z_1)$ and $(x_2,y_2,z_2)$ is $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$.`,
      R`The midpoint is $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)$. A plane has equation $ax+by+cz=d$, with normal vector $(a,b,c)$.`,
      'A sphere with centre $(h,k,l)$ and radius $r$ satisfies $(x-h)^2+(y-k)^2+(z-l)^2=r^2$. Vectors make 3D geometry compact.',
    ],
    [
      ['Distance', R`d=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}`, '3D Pythagorean theorem.'],
      ['Plane', R`ax+by+cz=d`, 'Normal vector (a,b,c).'],
      ['Sphere', R`(x-h)^2+(y-k)^2+(z-l)^2=r^2`, 'Centre and radius.'],
    ],
    [
      EX('Find a distance', R`Find the distance between $(1,2,3)$ and $(4,6,8)$.`, [
        R`Differences are $3$, $4$, $5$.`,
        R`Distance $=\sqrt{9+16+25}=\sqrt{50}=5\sqrt2$.`,
      ], R`5\sqrt2`),
      EX('Find a midpoint', 'Find the midpoint of $(2,0,4)$ and $(6,8,10)$.', [
        R`Average coordinates: $(4,4,7)$.`,
        R`That point is equidistant from both endpoints.`,
      ], R`(4,4,7)`),
    ],
    [
      Q(R`The distance between $(0,0,0)$ and $(1,2,2)$ is:`, ['3', '5', R`\sqrt5`, '9'], 0, 'sqrt(1 + 4 + 4).', R`$\sqrt{1+4+4}=3$.`, 'Easy'),
      Q('A normal vector to the plane $2x-y+3z=5$ is:', ['(2,−1,3)', '(5,0,0)', '(1,1,1)', '(2,1,3)'], 0, 'Coefficients of x, y, z.', R`The normal vector is $(2,-1,3)$.`, 'Easy'),
      Q(R`The midpoint of $(0,0,0)$ and $(4,6,8)$ is:`, ['(2,3,4)', '(4,6,8)', '(1,1,1)', '(8,12,16)'], 0, 'Average each coordinate.', R`Each coordinate is halved: $(2,3,4)$.`, 'Easy'),
      Q(R`The sphere $(x-1)^2+y^2+(z+2)^2=9$ has radius:`, ['3', '9', '1', '2'], 0, 'Radius squared is 9.', R`The radius is $\sqrt9=3$.`, 'Medium'),
    ], ['3D geometry', 'coordinates', 'planes', 'spheres'], 'The plane’s normal vector is perpendicular to every direction in the plane.'),

  topic('markov-chains', 'statistics', 'Markov Chains',
    'Model systems that move between states using transition probabilities.',
    [
      R`A Markov chain satisfies the Markov property: the next state depends only on the current state, not on the full history. Probabilities are stored in a transition matrix $P$.`,
      R`If the current state row vector is $v$, the next distribution is $vP$. After $n$ steps it is $vP^n$. Entries in each row of a stochastic matrix sum to 1.`,
      'A steady-state vector $\\pi$ satisfies $\\pi P=\\pi$. Regular chains converge to this distribution regardless of the starting state.',
    ],
    [
      ['Markov property', 'Future depends only on the present state.', 'Memoryless process.'],
      ['Transition matrix', R`p_{ij}=\Pr(i\to j)`, 'Entry giving probability of moving from state i to j; rows sum to 1.'],
      ['Steady state', R`\pi P=\pi`, 'Long-run distribution.'],
    ],
    [
      EX('Advance the chain', R`From state A, a chain moves to A or B with probabilities 0.8 and 0.2. What are the probabilities after two steps?`, [
        R`Transition matrix $P=\begin{pmatrix}0.8&0.2\\0.5&0.5\end{pmatrix}$ (from A or B).`,
        R`Starting from A, $vP^2=(0.74,0.26)$ after two steps.`,
      ], R`(0.74,0.26)`),
      EX('Find a steady state', R`For $P=\begin{pmatrix}0.8&0.2\\0.5&0.5\end{pmatrix}$, solve $\pi P=\pi$.`, [
        'Let $\\pi=(a,b)$ with $a+b=1$.',
        R`The equation $0.2a=0.5b$ with $a+b=1$ gives $a=5/7$, $b=2/7$.`,
      ], R`\pi=\left(\frac57,\frac27\right)`),
    ],
    [
      Q('The Markov property says the future depends only on:', ['The entire history', 'The current state', 'The first state', 'Random guessing'], 1, 'Memoryless property.', R`Only the current state matters.`, 'Easy'),
      Q('Rows of a transition probability matrix sum to:', ['0', '1', 'The number of states', 'The number of steps'], 1, 'They form probability distributions.', R`Each row sums to 1.`, 'Easy'),
      Q(R`After n steps, the distribution is:`, ['vP', 'vPⁿ', 'P + n', 'nvP'], 1, 'Matrix powers track steps.', R`The distribution is $vP^n$.`, 'Medium'),
      Q('A steady-state vector satisfies:', ['Pπ = 0', 'πP = π', 'π + P = 1', 'P = I'], 1, 'Invariant distribution.', R`A steady state is unchanged by the transition: $\pi P=\pi$.`, 'Medium'),
    ], ['Markov chains', 'transition matrix', 'steady state', 'stochastic processes'], 'Check that transition rows sum to 1 before using the matrix.'),

  topic('nonparametric-statistics', 'statistics', 'Nonparametric Statistics',
    'Use rank-based and distribution-free methods when normality assumptions fail.',
    [
      'Nonparametric methods do not assume a specific population distribution. They are useful for small samples, ordinal data or strongly skewed data.',
      'The sign test uses the direction of differences; the Wilcoxon signed-rank test also uses their magnitudes. The Mann–Whitney U test compares two independent groups.',
      'The Kruskal–Wallis test extends comparison to several groups. These tests often use ranks rather than raw values and are more robust to outliers.',
    ],
    [
      ['Sign test', 'Counts positive and negative differences.', 'Ignores magnitudes.'],
      ['Mann–Whitney U', 'Compares ranks from two independent samples.', 'Alternative to two-sample t-test.'],
      ['Kruskal–Wallis', 'Compares three or more independent groups by ranks.', 'Alternative to one-way ANOVA.'],
    ],
    [
      EX('Apply a sign test', 'Of 12 paired differences, 9 are positive and 3 negative. What does the sign test count?', [
        'Ignore zero differences and count signs.',
        'The test statistic is the smaller count: 3 negatives out of 12.',
      ], R`3\text{ negative signs out of 12}`),
      EX('Rank data', 'Rank the values 5, 1, 5, 3 for a rank-based test.', [
        'Order them: 1, 3, 5, 5.',
        'Ranks are 1, 2, 3.5, 3.5; tied values share the average rank.',
      ], R`1,2,3.5,3.5`),
    ],
    [
      Q('Nonparametric methods are useful when:', ['Data are certainly normal', 'Distribution assumptions are doubtful', 'Sample size is infinite', 'Variance is known'], 1, 'Distribution-free approaches.', R`They avoid strict distributional assumptions.`, 'Easy'),
      Q('The sign test uses:', ['Only signs of differences', 'Exact magnitudes', 'Means only', 'Variances only'], 0, 'Positive or negative direction.', R`It counts positive and negative differences.`, 'Easy'),
      Q('The Mann–Whitney U test compares:', ['One sample to a constant', 'Two independent groups', 'Three paired groups', 'Only variances'], 1, 'Rank-sum comparison.', R`It compares two independent samples using ranks.`, 'Medium'),
      Q('Tied observations in rank tests receive:', ['The smallest rank', 'The average of their ranks', 'Zero', 'The largest rank'], 1, 'Standard tie handling.', R`Ties share the average of the ranks they occupy.`, 'Medium'),
    ], ['nonparametric', 'rank tests', 'sign test', 'Mann-Whitney'], 'Rank-based tests are robust to outliers because magnitudes matter less.'),

  topic('time-series', 'advanced', 'Time Series',
    'Analyse data observed over time using trends, seasonality and smoothing.',
    [
      'A time series is a sequence of observations indexed by time. Components include trend, seasonality, cyclic variation and irregular noise.',
      R`A moving average smooths data by averaging neighbouring observations: $\\hat y_t=\frac{y_{t-1}+y_t+y_{t+1}}{3}$ for a 3-period centred average.`,
      'Exponential smoothing uses $\\hat y_{t+1}=\\alpha y_t+(1-\\alpha)\\hat y_t$, where $\\alpha$ controls responsiveness. Decomposition separates trend, seasonal and residual parts.',
    ],
    [
      ['Components', 'Trend, seasonality, cycles and noise.', 'Describe patterns over time.'],
      ['Moving average', R`\hat y_t=\frac{y_{t-1}+y_t+y_{t+1}}3`, 'Smooths fluctuations.'],
      ['Exponential smoothing', R`\hat y_{t+1}=\alpha y_t+(1-\alpha)\hat y_t`, 'Weights recent data more.'],
    ],
    [
      EX('Compute a moving average', 'For values 4, 6, 8, find the centred 3-period average of the middle value.', [
        R`Average the neighbours: $(4+6+8)/3$.`,
        'That equals 6.',
      ], R`6`),
      EX('Apply exponential smoothing', R`If $\alpha=0.2$, the last forecast was 50 and the actual value is 60, find the next forecast.`, [
        R`Use $\hat y_{t+1}=0.2(60)+0.8(50)$.`,
        R`This is $12+40=52$.`,
      ], R`52`),
    ],
    [
      Q('Seasonality in a time series refers to:', ['Random noise', 'Regular patterns at fixed intervals', 'The long-term direction only', 'Missing data'], 1, 'Repeating short-term patterns.', R`Seasonality repeats over known periods such as months.`, 'Easy'),
      Q(R`A 3-period centred moving average of $a,b,c$ is:`, ['a + b + c', R`\frac{a+b+c}{3}`, '3(a+b+c)', 'b only'], 1, 'Average the three values.', R`The centred moving average is $(a+b+c)/3$.`, 'Easy'),
      Q(R`In exponential smoothing, a larger \alpha:`, ['Ignores recent data', 'Responds more to recent data', 'Always increases the forecast', 'Removes seasonality'], 1, 'Alpha is the smoothing constant.', R`Larger $\alpha$ gives more weight to the latest observation.`, 'Medium'),
      Q('Decomposition separates a series into:', ['Only two numbers', 'Trend, seasonal and residual parts', 'Only random noise', 'Only the mean'], 1, 'Classical decomposition.', R`Decomposition separates trend, seasonal effects and residuals.`, 'Medium'),
    ], ['time series', 'trend', 'seasonality', 'smoothing'], 'Moving averages lag behind sharp turns in a series.'),

  topic('optimization-linear-programming', 'applied', 'Linear Programming & Optimization',
    'Maximise or minimise a linear objective subject to linear constraints.',
    [
      'A linear programming problem maximises or minimises an objective function $Z=ax+by$ subject to linear inequalities. The inequalities form a feasible region.',
      'The corner point theorem says an optimum occurs at a vertex of the feasible region (if one exists). Graph the constraints, find vertices, and evaluate $Z$ at each.',
      'For larger problems, the simplex method moves between vertices. Integer programming adds whole-number restrictions; sensitivity analysis examines how changes affect the solution.',
    ],
    [
      ['Objective function', R`Z=ax+by`, 'Quantity to optimise.'],
      ['Feasible region', 'Set satisfying all constraints.', 'Intersection of half-planes.'],
      ['Corner point theorem', 'An optimum occurs at a vertex.', 'Check all vertices.'],
    ],
    [
      EX('Maximise on a region', R`Maximise $Z=3x+2y$ subject to $x\ge0$, $y\ge0$, $x+y\le4$.`, [
        R`Corner points are $(0,0)$, $(4,0)$ and $(0,4)$.`,
        R`Values of Z are 0, 12 and 8, so the maximum is 12 at $(4,0)$.`,
      ], R`Z=12\text{ at }(4,0)`),
      EX('Minimise a cost', 'A product uses x units of A and y of B. Constraints give vertices (0,2), (2,0) and (1,1). Cost is $C=3x+5y$. Find the cheapest.', [
        R`Evaluate: $C(0,2)=10$, $C(2,0)=6$, $C(1,1)=8$.`,
        R`The minimum cost is 6 at $(2,0)$.`,
      ], R`6`),
    ],
    [
      Q('In linear programming, the objective function is:', ['Always quadratic', 'Linear', 'Exponential', 'A constraint'], 1, 'Standard form.', R`The objective is a linear function of the variables.`, 'Easy'),
      Q('The feasible region is the set of points:', ['Maximising Z', 'Satisfying all constraints', 'On the axes only', 'Outside all inequalities'], 1, 'Constraint intersection.', R`It is the intersection of all constraint regions.`, 'Easy'),
      Q('An optimal solution of a bounded LP occurs at a:', ['Midpoint of an edge', 'Corner point', 'Random point', 'The origin always'], 1, 'Corner point theorem.', R`An optimum occurs at a vertex of the feasible region.`, 'Medium'),
      Q('The simplex method moves between:', ['Circles', 'Vertices of the feasible region', 'Random samples', 'Derivatives'], 1, 'Iterative vertex search.', R`Simplex walks from vertex to vertex improving the objective.`, 'Medium'),
    ], ['linear programming', 'optimization', 'feasible region', 'simplex'], 'Always check every corner point — intuition can miss the optimum.'),

  topic('root-finding-numerical', 'applied', 'Numerical Root-Finding & Integration',
    'Approximate roots, integrals and solutions when exact methods are impractical.',
    [
      'The bisection method repeatedly halves an interval containing a sign change. It always converges but can be slow.',
      R`Newton’s method uses the iteration $x_{n+1}=x_n-\frac{f(x_n)}{f^{\prime}(x_n)}$ and usually converges quickly near a simple root. The secant method avoids derivatives by using a difference quotient.`,
      R`Numerical integration includes the trapezoidal rule $T=\frac h2[f(x_0)+2f(x_1)+\cdots+f(x_n)]$ and Simpson’s rule. Error analysis estimates accuracy.`,
    ],
    [
      ['Bisection', 'Halve an interval with a sign change.', 'Guaranteed convergence.'],
      ['Newton method', R`x_{n+1}=x_n-\frac{f(x_n)}{f^{\prime}(x_n)}`, 'Fast near a root.'],
      ['Trapezoidal rule', R`\frac h2\left(f_0+2f_1+\cdots+f_n\right)`, 'Approximates area.'],
    ],
    [
      EX('Apply bisection', R`For $f(x)=x^2-2$, start with $[1,2]$ and do one bisection step.`, [
        R`$f(1)=-1$ and $f(2)=2$; the midpoint is $1.5$.`,
        R`$f(1.5)=0.25>0$, so the root lies in $[1,1.5]$.`,
      ], R`[1,1.5]`),
      EX('Newton iteration', R`Use one Newton step for $f(x)=x^2-5$ starting at $x_0=2$.`, [
        R`$f(2)=-1$ and $f'(2)=4$.`,
        R`$x_1=2-(-1)/4=2.25$.`,
      ], R`2.25`),
    ],
    [
      Q('Bisection requires an interval where f:', ['Is positive', 'Changes sign', 'Is constant', 'Has a derivative'], 1, 'Intermediate value theorem.', R`A sign change guarantees a root in the interval.`, 'Easy'),
      Q(R`Newton’s method iteration is:`, [R`x_{n+1}=x_n-\frac{f(x_n)}{f^{\prime}(x_n)}`, R`x_{n+1}=x_n+f(x_n)`, R`x_{n+1}=\frac{x_n}{2}`, R`x_{n+1}=f(x_n)`], 0, 'Newton formula.', R`Use the function and its derivative.`, 'Medium'),
      Q('The trapezoidal rule approximates an integral using:', ['Rectangles only', 'Trapezoids', 'Circles', 'Derivatives'], 1, 'Name gives the shape.', R`It sums trapezoid areas under the curve.`, 'Easy'),
      Q('A risk of Newton’s method is:', ['Guaranteed divergence', 'Convergence to the wrong root if the start is poor', 'No calculations needed', 'Only working for quadratics'], 1, 'Sensitive to initial guess.', R`Newton’s method depends strongly on the starting value.`, 'Medium'),
    ], ['numerical methods', 'bisection', 'Newton', 'trapezoidal rule'], 'Bisection is slow but reliable; Newton is fast but needs a good start.'),

  topic('fractals-chaos', 'advanced', 'Fractals & Chaos',
    'Explore self-similar sets, fractal dimension and sensitive dependence on initial conditions.',
    [
      'A fractal is a set with self-similar detail at different scales. The Koch snowflake and Sierpiński triangle are classic examples built by repeated rules.',
      R`Self-similar dimension is $D=\frac{\log N}{\log(1/r)}$, where $N$ is the number of copies scaled by factor $r$. The Sierpiński triangle has dimension $\log3/\log2\approx1.585$`,,
      'Chaotic systems are deterministic yet highly sensitive to initial conditions. The logistic map $x_{n+1}=rx_n(1-x_n)$ shows period doubling as $r$ increases.',
    ],
    [
      ['Self-similar dimension', R`D=\frac{\log N}{\log(1/r)}`, 'Counts scaled copies.'],
      ['Sierpiński dimension', R`\frac{\log3}{\log2}\approx1.585`, 'Between a line and a plane.'],
      ['Logistic map', R`x_{n+1}=rx_n(1-x_n)`, 'Classic chaotic system.'],
    ],
    [
      EX('Koch curve dimension', R`The Koch curve is made of 4 copies scaled by $r=1/3$. Find its dimension.`, [
        R`Use $D=\log4/\log3$.`,
        R`That is approximately 1.262.`,
      ], R`D=\frac{\log4}{\log3}\approx1.262`),
      EX('Iterate the logistic map', R`Using $r=2$, $x_0=0.5$, find $x_1$ and $x_2$.`, [
        R`$x_1=2(0.5)(0.5)=0.5$.`,
        R`So $x_2=0.5$ again; this is a fixed point.`,
      ], R`x_1=x_2=0.5`),
    ],
    [
      Q('Fractals show similar patterns at:', ['Only one scale', 'Different scales', 'Only large scales', 'No scales'], 1, 'Self-similarity.', R`Self-similar detail repeats at different scales.`, 'Easy'),
      Q(R`For N copies scaled by r, fractal dimension is:`, [R`\frac{\log N}{\log(1/r)}`, 'N × r', 'log(Nr)', 'N/r'], 0, 'Similarity dimension formula.', R`$D=\log N/\log(1/r)$.`, 'Medium'),
      Q('Chaos is characterised by sensitivity to:', ['Final answers', 'Initial conditions', 'Units only', 'Graph colour'], 1, 'Butterfly effect.', R`Small changes in initial conditions produce large differences.`, 'Easy'),
      Q(R`The logistic map is:`, [R`x_{n+1}=rx_n(1-x_n)`, R`x_{n+1}=rx_n`, R`x_{n+1}=\sin x_n`, R`x_{n+1}=x_n^2`], 0, 'Population model.', R`The logistic map is $x_{n+1}=r x_n(1-x_n)$.`, 'Medium'),
    ], ['fractals', 'chaos', 'dimension', 'logistic map'], 'Fractal dimension can be non-integer, between familiar geometric dimensions.'),
];
