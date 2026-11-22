import { R, EX, Q, topic } from './core.js';

export default [
  topic('integers-negative', 'foundations', 'Integers & Negative Numbers',
    'Work with negative numbers on the number line and master the sign rules for all four operations.',
    [
      R`Integers are $\dots,-3,-2,-1,0,1,2,3,\dots$. They extend whole numbers to the left of zero. On the number line, numbers increase as you move right, so $-5<-2<0<3$.`,
      R`Absolute value is distance from zero: $|-7|=7$ and $|7|=7$. To compare negative numbers, remember that the one farther from zero on the left is smaller.`,
      'Adding a negative is subtraction; subtracting a negative is addition. When multiplying or dividing, same signs give a positive result and different signs give a negative result.',
    ],
    [
      ['Absolute value', R`|-7|=7`, 'Distance is always non-negative.'],
      ['Same signs', R`(-4)(-6)=24`, 'A negative times a negative is positive.'],
      ['Different signs', R`(-18)\div3=-6`, 'A negative divided by a positive is negative.'],
    ],
    [
      EX('Add and subtract integers', R`Evaluate $-7+12$ and $-6-(-10)$.`, [
        R`$-7+12$: the signs differ, so subtract magnitudes $12-7=5$; the positive number has larger magnitude, so the answer is $+5$.`,
        R`$-6-(-10)=-6+10=4$ because subtracting a negative is adding.`,
      ], R`-7+12=5,\quad -6-(-10)=4`),
      EX('Multiply and divide', R`Evaluate $(-4)(-6)$ and $-18\div3$.`, [
        'Same signs multiply to a positive: $(-4)(-6)=24$.',
        'Different signs divide to a negative: $-18\\div3=-6$.',
      ], R`24\text{ and }-6`),
    ],
    [
      Q(R`Calculate $-8+3$.`, ['−11', '−5', '5', '11'], 1, 'Subtract magnitudes: 8 − 3 = 5, keep the sign of the larger.', R`$-8+3=-5$.`, 'Easy'),
      Q(R`Calculate $-6-(-10)$.`, ['−16', '4', '−4', '16'], 1, 'Subtracting a negative is adding.', R`$-6+10=4$.`, 'Medium'),
      Q(R`Calculate $(-7)(-5)$.`, ['−35', '35', '−12', '12'], 1, 'Negative times negative is positive.', R`$(-7)(-5)=35$.`, 'Easy'),
      Q('Order −3, −7, 0 and 2 from least to greatest.', ['−7, −3, 0, 2', '−3, −7, 0, 2', '0, 2, −3, −7', '−7, 0, −3, 2'], 0, 'The farther left on the number line, the smaller.', R`$-7<-3<0<2$.`, 'Medium'),
    ], ['negative numbers', 'absolute value', 'integer operations'], 'Use a number line when sign rules feel confusing — it never lies.'),

  topic('estimation-rounding', 'foundations', 'Estimation & Rounding',
    'Round numbers to a chosen place value and use estimation to check calculations quickly.',
    [
      'To round, look at the digit immediately to the right of the place you want. If it is 5 or more, round up; otherwise keep the digit and replace the following digits with zeros (or drop them for decimals).',
      'Estimation means replacing numbers with nearby friendly values before calculating. It gives a quick check on whether an exact answer is reasonable.',
      'Rounding too early in a multi-step calculation can change the final answer, so estimate first and calculate exactly afterwards.',
    ],
    [
      ['Rounding rule', 'Next digit ≥ 5 → round up; otherwise round down.', 'Apply to the requested place value.'],
      ['Estimated sum', R`398+147\approx400+150=550`, 'Exact answer is 545, so the estimate is sensible.'],
    ],
    [
      EX('Round to a place value', 'Round 4,678 to the nearest hundred.', [
        'The hundreds digit is 6; the digit to its right is 7.',
        'Since 7 ≥ 5, round 6 up to 7.',
        'Replace the following digits with zeros: 4,700.',
      ], R`4{,}700`),
      EX('Estimate a product', R`Estimate $29\times41$.`, [
        'Round 29 to 30 and 41 to 40.',
        R`$30\times40=1{,}200$.`,
        'The exact product is 1,189, so the estimate is close.',
      ], R`\approx1{,}200`),
    ],
    [
      Q('Round 6,482 to the nearest thousand.', ['6,000', '6,500', '7,000', '6,480'], 0, 'The hundreds digit is 4, so round down.', R`6{,}482\approx6{,}000`, 'Easy'),
      Q('Round 0.086 to two decimal places.', ['0.08', '0.09', '0.1', '0.086'], 1, 'The third decimal digit is 6, so round up.', R`0.086\approx0.09`, 'Easy'),
      Q(R`Estimate $198+53$.`, ['200', '250', '300', '251'], 1, 'Use 200 + 50.', R`$200+50=250$; the exact sum is 251.`, 'Easy'),
      Q(R`Estimate $51\times19$.`, ['500', '1,000', '1,500', '2,000'], 1, 'Use 50 × 20.', R`$50\times20=1{,}000$; the exact product is 969.`, 'Medium'),
    ], ['rounding', 'estimation', 'place value'], 'Estimation answers should be close, not exact — use them as a reasonableness check.'),

  topic('word-problems', 'foundations', 'Problem Solving & Word Problems',
    'Translate real-world situations into calculations and check that your answer makes sense.',
    [
      'Read the problem twice. Identify what is given, what is asked, and which operation connects them. Keywords help: "total" often means add, "left" often means subtract, "each" often means multiply or divide.',
      'Multi-step problems are solved one step at a time. Record an intermediate result clearly so you do not lose track.',
      'Finish by checking units and reasonableness. If a question asks for boxes of 5 and your answer is 3.4 boxes, interpret the remainder appropriately.',
    ],
    [
      ['Total', 'combine parts → add', '“altogether”, “in total”'],
      ['Difference', 'compare or find what remains → subtract', '“left”, “how many more”'],
      ['Equal groups', 'groups × size → multiply; total ÷ groups → divide', '“each”, “per”, “shared equally”'],
    ],
    [
      EX('Two-step word problem', 'A shop has 24 apples. It sells 9 and packs the rest into boxes of 5. How many boxes are needed?', [
        'Find the apples left: $24-9=15$.',
        'Divide into boxes of 5: $15\\div5=3$.',
        'Check: $3\\times5=15$ apples packed, plus 9 sold = 24.',
      ], R`3\text{ boxes}`),
      EX('Translate into algebra', 'Three notebooks cost ₹75 each and a pen costs ₹20. Find the total cost.', [
        R`Notebooks: $3\times75=225$.`,
        'Add the pen: $225+20=245$.',
      ], R`₹245`),
    ],
    [
      Q('Seven bags contain 8 marbles each. If 3 marbles are given away, how many remain?', ['56', '53', '59', '24'], 1, '$7\\times8=56$, then $56-3$.', R`$56-3=53$ marbles.`, 'Easy'),
      Q('A number plus 12 equals 30. What is the number?', ['18', '42', '12', '30'], 0, 'Work backwards: $30-12$.', R`The number is 18.`, 'Easy'),
      Q('144 students are split into 6 equal teams. How many are in each team?', ['12', '24', '36', '48'], 1, 'Divide 144 by 6.', R`$144\\div6=24$ students per team.`, 'Easy'),
      Q('A train travels at 60 km/h for 2.5 hours. How far does it travel?', ['120 km', '150 km', '180 km', '62.5 km'], 1, 'Distance = speed × time.', R`$60\times2.5=150$ km.`, 'Medium'),
    ], ['word problems', 'translating', 'multi-step problems'], 'Always write the units in your final answer.'),

  topic('rational-expressions', 'algebra', 'Rational Expressions',
    'Simplify, multiply, divide and solve expressions with polynomials in the numerator and denominator.',
    [
      R`A rational expression is a fraction with polynomials, such as $\frac{x^2-9}{x+3}$. The denominator cannot be zero, so excluded values must be stated.`,
      'Simplify by factoring the numerator and denominator and cancelling common factors. Never cancel terms that are not factors.',
      'To solve a rational equation, multiply both sides by the common denominator, then solve the resulting equation and check that no excluded value appeared.',
    ],
    [
      ['Multiplication', R`\frac ab\cdot\frac cd=\frac{ac}{bd}`, 'Factor first, then cancel.'],
      ['Division', R`\frac ab\div\frac cd=\frac ab\cdot\frac dc`, 'Multiply by the reciprocal.'],
      ['Domain', R`\frac{1}{x-5}: x\neq5`, 'Exclude zero denominators.'],
    ],
    [
      EX('Simplify by factoring', R`Simplify $\frac{x^2-9}{x+3}$.`, [
        R`Factor the numerator: $x^2-9=(x-3)(x+3)$.`,
        R`Cancel $x+3$, leaving $x-3$.`,
        R`The original expression excludes $x=-3$.`,
      ], R`x-3,\quad x\neq-3`),
      EX('Solve a rational equation', R`Solve $\frac{2}{x}+\frac{1}{3}=1$.`, [
        R`Multiply every term by $3x$: $6+x=3x$.`,
        R`Then $2x=6$, so $x=3$.`,
        'Check: $x=3$ is allowed because no denominator becomes zero.',
      ], R`x=3`),
    ],
    [
      Q(R`Simplify $\frac{x^2-4}{x-2}$.`, ['x+2', 'x−2', 'x²+4', 'x²−4'], 0, 'Factor $x^2-4$ first.', R`$\frac{(x-2)(x+2)}{x-2}=x+2$, with $x\neq2$.`, 'Easy'),
      Q(R`What is the domain of $\frac{1}{x-5}$?`, ['x > 5', 'x ≠ 5', 'x ≥ 5', 'All real numbers'], 1, 'The denominator cannot be zero.', R`$x-5\neq0$, so $x\neq5$.`, 'Easy'),
      Q(R`Simplify $\frac{2x}{3}\cdot\frac{9}{4x}$.`, [R`\frac32`, R`\frac{3x}{2}`, R`\frac23`, '6'], 0, 'Multiply and cancel $x$.', R`$\frac{18x}{12x}=\frac32$ for $x\neq0$.`, 'Medium'),
      Q(R`Solve $\frac{3}{x-1}=6$.`, [R`\frac32`, '2', '7', '−1'], 0, 'Multiply by $x-1$: $3=6(x-1)$.', R`$6x-6=3$, so $x=\frac32$.`, 'Medium'),
    ], ['algebraic fractions', 'domain', 'clearing denominators'], 'Always check solutions in the original equation — excluded values can creep in.'),

  topic('radical-equations', 'algebra', 'Radical Expressions & Equations',
    'Simplify square-root expressions and solve equations containing radicals.',
    [
      R`$\sqrt{a^2}=|a|$ and $\sqrt{ab}=\sqrt a\,\sqrt b$ for non-negative $a,b$. To simplify a radical, pull out perfect-square factors.`,
      'To solve a radical equation, isolate the radical, raise both sides to the appropriate power, and solve. Squaring can introduce extraneous solutions, so always substitute back.',
      R`Fractional exponents are radicals: $a^{m/n}=\sqrt[n]{a^m}$.`,
    ],
    [
      ['Product rule', R`\sqrt{ab}=\sqrt a\sqrt b`, 'Pull out perfect squares.'],
      ['Absolute value', R`\sqrt{x^2}=|x|`, 'Not simply x when x may be negative.'],
      ['Solve by squaring', R`\sqrt{x+3}=5\Rightarrow x+3=25`, 'Then check the solution.'],
    ],
    [
      EX('Simplify radical expressions', R`Simplify $\sqrt{50}+\sqrt{8}$.`, [
        R`$\sqrt{50}=\sqrt{25\cdot2}=5\sqrt2$.`,
        R`$\sqrt8=\sqrt{4\cdot2}=2\sqrt2$.`,
        R`Add like radicals: $5\sqrt2+2\sqrt2=7\sqrt2$.`,
      ], R`7\sqrt2`),
      EX('Solve a radical equation', R`Solve $\sqrt{x+3}=5$.`, [
        R`Square both sides: $x+3=25$.`,
        'So $x=22$.',
        R`Check: $\sqrt{22+3}=\sqrt{25}=5$.`,
      ], R`x=22`),
    ],
    [
      Q(R`Simplify $\sqrt{18}$.`, [R`3\sqrt2`, R`2\sqrt3`, R`9\sqrt2`, R`6\sqrt3`], 0, '18 = 9 × 2.', R`$\sqrt{18}=3\sqrt2$.`, 'Easy'),
      Q(R`Solve $\sqrt{x-1}=4$.`, ['15', '17', '16', '5'], 1, 'Square both sides: $x-1=16$.', R`$x=17$, and $\sqrt{16}=4$.`, 'Easy'),
      Q(R`Solve $\sqrt{2x+3}=5$.`, ['11', '14', '25', '22'], 0, 'Square: $2x+3=25$.', R`$2x=22$, so $x=11$.`, 'Medium'),
      Q('Why must you check solutions after squaring both sides?', ['Squaring can create extra solutions', 'Squaring always loses solutions', 'It is only a formality', 'Because radicals are negative'], 0, 'Squaring is not reversible for all values.', R`Squaring can introduce extraneous solutions that do not satisfy the original equation.`, 'Medium'),
    ], ['radicals', 'square roots', 'extraneous solutions'], 'Check every solution in the original equation, not the squared version.'),

  topic('sequences-series', 'algebra', 'Sequences & Series',
    'Work with arithmetic and geometric sequences and calculate their terms and sums.',
    [
      R`An arithmetic sequence adds a constant difference $d$: $a_n=a_1+(n-1)d$. A geometric sequence multiplies by a constant ratio $r$: $a_n=a_1r^{n-1}$.`,
      R`Finite sums are $S_n=\frac n2(a_1+a_n)$ for arithmetic sequences and $S_n=a_1\frac{1-r^n}{1-r}$ for geometric sequences with $r\neq1$.`,
      'A sequence is a list; a series is the sum of its terms. An infinite geometric series converges only when $|r|<1$.',
    ],
    [
      ['Arithmetic nth term', R`a_n=a_1+(n-1)d`, 'Constant difference.'],
      ['Geometric nth term', R`a_n=a_1r^{n-1}`, 'Constant ratio.'],
      ['Arithmetic sum', R`S_n=\frac n2(a_1+a_n)`, 'Average of ends times n.'],
    ],
    [
      EX('Arithmetic sequence', 'For 3, 7, 11, …, find the 10th term and the sum of the first 10 terms.', [
        R`$a_1=3$, $d=4$, so $a_{10}=3+9(4)=39$.`,
        R`$S_{10}=\frac{10}{2}(3+39)=5(42)=210$.`,
      ], R`a_{10}=39,\quad S_{10}=210`),
      EX('Geometric sequence', 'For 2, 6, 18, …, find the 6th term and the sum of the first 5 terms.', [
        R`$a_1=2$, $r=3$, so $a_6=2\cdot3^5=486$.`,
        R`$S_5=2\frac{1-3^5}{1-3}=242$.`,
      ], R`a_6=486,\quad S_5=242`),
    ],
    [
      Q('Find the 5th term of 2, 5, 8, …', ['11', '14', '17', '20'], 1, 'Difference is 3: $2+4(3)$.', R`$a_5=14$.`, 'Easy'),
      Q('Find the common ratio of 3, 6, 12, 24, …', ['2', '3', '6', '1/2'], 0, 'Each term is twice the previous.', R`$r=2$.`, 'Easy'),
      Q('Find 1 + 2 + 3 + … + 10.', ['45', '50', '55', '100'], 2, 'Arithmetic sum with $a_1=1$, $a_{10}=10$.', R`$S_{10}=\frac{10}{2}(11)=55$.`, 'Easy'),
      Q(R`Find the sum of the infinite geometric series $1+\frac12+\frac14+\cdots$.`, ['1', '2', R`\frac32`, 'It diverges'], 1, 'Use $S_\\infty=\\frac{a}{1-r}$ with $a=1,r=\\frac12$.', R`$S=\frac{1}{1-1/2}=2$.`, 'Medium'),
    ], ['arithmetic sequence', 'geometric sequence', 'series'], 'A geometric sequence grows or decays by a constant factor, not a constant amount.'),

  topic('function-inverses', 'algebra', 'Function Inverses & Transformations',
    'Find inverse functions and describe how graphs shift, reflect and stretch.',
    [
      R`The inverse $f^{-1}$ reverses $f$: if $f(a)=b$, then $f^{-1}(b)=a$. To find it, write $y=f(x)$, swap $x$ and $y$, then solve for $y$.`,
      R`The graph of $f^{-1}$ is the reflection of $f$ in the line $y=x$. Only one-to-one functions have inverses that are functions.`,
      R`Transformations: $f(x)+k$ shifts up by $k$, $f(x-h)$ shifts right by $h$, $-f(x)$ reflects in the x-axis, and $af(x)$ stretches vertically by factor $a$.`,
    ],
    [
      ['Inverse steps', 'Write y = f(x) → swap x and y → solve for y.', 'Reflects in y = x.'],
      ['Translation', R`g(x)=f(x-h)+k`, 'Right h, up k.'],
      ['Composition', R`(f\circ g)(x)=f(g(x))`, 'Apply g first.'],
    ],
    [
      EX('Find an inverse', R`Find $f^{-1}(x)$ for $f(x)=2x+3$.`, [
        R`Write $y=2x+3$ and swap: $x=2y+3$.`,
        R`Solve: $2y=x-3$, so $y=\frac{x-3}{2}$.`,
      ], R`f^{-1}(x)=\frac{x-3}{2}`),
      EX('Describe a transformation', R`How is $g(x)=(x-2)^2+1$ related to $y=x^2$?`, [
        R`The $(x-2)$ shifts the graph right by 2.`,
        'The $+1$ shifts it up by 1.Vertex moves from $(0,0)$ to $(2,1)$.',
      ], R`\text{Right 2 and up 1}`),
    ],
    [
      Q(R`Find the inverse of $f(x)=3x+2$.`, [R`\frac{x-2}{3}`, '3x−2', R`\frac{x+2}{3}`, R`\frac x3+2`], 0, 'Swap x and y, then solve.', R`$x=3y+2\Rightarrow y=\frac{x-2}{3}$.`, 'Easy'),
      Q(R`The graph of $y=(x-4)^2$ is $y=x^2$ shifted:`, ['Right 4', 'Left 4', 'Up 4', 'Down 4'], 0, 'Inside bracket shifts horizontally, opposite sign.', R`$x-4$ moves the graph right by 4.`, 'Easy'),
      Q(R`If $f(x)=x^2$ and $g(x)=x+1$, find $f(g(3))$.`, ['10', '16', '9', '8'], 1, '$g(3)=4$, then $f(4)=16$.', R`$f(g(3))=4^2=16$.`, 'Medium'),
      Q(R`The inverse of $f(x)=x^3$ is:`, [R`\sqrt{x}`, R`\sqrt[3]{x}`, '−x³', '3x'], 1, 'Undo cubing with a cube root.', R`$f^{-1}(x)=\sqrt[3]{x}$.`, 'Medium'),
    ], ['inverse function', 'transformations', 'composition'], 'A horizontal shift goes the opposite way to the sign inside the bracket.'),

  topic('similarity-congruence', 'geometry', 'Similarity & Congruence',
    'Distinguish congruent and similar figures and use scale factors to find missing lengths.',
    [
      'Congruent figures have exactly the same shape and size — corresponding sides and angles are equal. Similar figures have the same shape but possibly different sizes — corresponding angles are equal and sides are proportional.',
      'Triangles are similar by AA (two matching angles), SSS (all sides proportional) or SAS (two sides proportional with equal included angle).',
      'The scale factor is the ratio of corresponding lengths. Areas scale by the square of the scale factor; volumes scale by its cube.',
    ],
    [
      ['Similar triangles', R`\frac ab=\frac cd`, 'Corresponding sides are proportional.'],
      ['Scale factor', R`k=\frac{\text{new length}}{\text{original length}}`, 'Area factor = k², volume factor = k³.'],
    ],
    [
      EX('Find a missing side', 'Two similar triangles have sides 4, 6, 8 and 6, x, 12. Find x.', [
        'The scale factor is $12/8=1.5$.',
        'So $x=6\\times1.5=9$.',
      ], R`x=9`),
      EX('Shadow problem', 'A 1.5 m person casts a 2 m shadow while a tree casts a 10 m shadow. Find the tree’s height.', [
        'The triangles are similar, so height/shadow is the same: $\\frac{1.5}{2}=\\frac{h}{10}$.',
        'Thus $h=1.5\\times5=7.5$ m.',
      ], R`7.5\text{ m}`),
    ],
    [
      Q(R`In similar triangles with sides 4, 6, 8 and 6, x, 12, find x.`, ['8', '9', '10', '12'], 1, 'Scale factor is 1.5.', R`$x=6\times1.5=9$.`, 'Easy'),
      Q('A side of length 5 is enlarged to 15. What is the scale factor?', ['1/3', '3', '10', '20'], 1, 'New length ÷ original length.', R`$k=15/5=3$.`, 'Easy'),
      Q('Congruent figures always have:', ['Equal areas only', 'Equal sides and equal angles', 'The same orientation', 'Proportional but unequal sides'], 1, 'Congruent means identical shape and size.', R`Corresponding sides and angles are equal.`, 'Easy'),
      Q('Two triangles with two pairs of equal angles are similar by:', ['SSS', 'SAS', 'AA', 'HL'], 2, 'Two angles determine the third.', R`AA similarity: equal angles force proportional sides.`, 'Medium'),
    ], ['similar triangles', 'scale factor', 'congruent figures'], 'Similarity preserves angles; congruence preserves both angles and lengths.'),

  topic('polygons-angle-sums', 'geometry', 'Polygons & Angle Sums',
    'Calculate interior and exterior angles of polygons, including regular polygons.',
    [
      R`An $n$-sided polygon can be split into $n-2$ triangles, so its interior angles sum to $(n-2)\times180^\circ$.`,
      R`The exterior angles of any convex polygon add to $360^\circ$. For a regular $n$-gon, each interior angle is $\frac{(n-2)180^\circ}{n}$ and each exterior angle is $\frac{360^\circ}{n}$.`,
      R`The number of diagonals in an $n$-gon is $\frac{n(n-3)}{2}$.`,
    ],
    [
      ['Interior angle sum', R`(n-2)\times180^\circ`, 'Split into triangles.'],
      ['Regular interior angle', R`\frac{(n-2)180^\circ}{n}`, 'Divide the sum by n.'],
      ['Exterior angle sum', R`360^\circ`, 'True for every convex polygon.'],
    ],
    [
      EX('Pentagon angles', 'Find the interior angle sum and each interior angle of a regular pentagon.', [
        R`Sum: $(5-2)\times180^\circ=540^\circ$.`,
        R`Each angle: $540^\circ/5=108^\circ$.`,
      ], R`540^\circ\text{ total},\ 108^\circ\text{ each}`),
      EX('Count diagonals', R`How many diagonals does a hexagon have?`, [
        R`Use $\frac{n(n-3)}{2}$ with $n=6$.`,
        R`$\frac{6\times3}{2}=9$ diagonals.`,
      ], R`9`),
    ],
    [
      Q('The interior angles of a quadrilateral sum to:', ['180°', '270°', '360°', '540°'], 2, 'A quadrilateral splits into 2 triangles.', R`$(4-2)\times180^\circ=360^\circ$.`, 'Easy'),
      Q('Each interior angle of a regular hexagon is:', ['60°', '90°', '120°', '135°'], 2, '$720° ÷ 6$.', R`$(6-2)180/6=120^\circ$.`, 'Easy'),
      Q('The interior angle sum of an octagon is:', ['720°', '900°', '1080°', '1440°'], 2, '$(8-2)×180°$.', R`6\times180^\circ=1080^\circ`, 'Medium'),
      Q(R`How many diagonals does a decagon have?`, ['35', '45', '90', '100'], 0, 'Use $n(n-3)/2$ with n = 10.', R`$10\times7/2=35$.`, 'Medium'),
    ], ['polygon', 'interior angles', 'exterior angles', 'diagonals'], 'Exterior angles add to 360° no matter how many sides the polygon has.'),

  topic('circle-theorems', 'geometry', 'Circle Theorems',
    'Use angle relationships involving chords, tangents, arcs and cyclic quadrilaterals.',
    [
      'The angle at the centre of a circle is twice the angle at the circumference subtending the same arc.',
      'An angle in a semicircle is always 90°. Angles subtended by the same chord at the circumference are equal.',
      'Opposite angles of a cyclic quadrilateral sum to 180°. A tangent is perpendicular to the radius at the point of contact.',
    ],
    [
      ['Centre vs circumference', R`\theta_{\text{centre}}=2\theta_{\text{circumference}}`, 'Same arc.'],
      ['Semicircle', R`\angle=90^\circ`, 'Angle in a semicircle.'],
      ['Cyclic quadrilateral', R`A+C=180^\circ`, 'Opposite angles.'],
    ],
    [
      EX('Centre and circumference', 'An angle at the centre is 80°. Find the angle at the circumference subtending the same arc.', [
        'The circumference angle is half the centre angle.',
        'So the angle is $80°\\div2=40°$.',
      ], R`40^\circ`),
      EX('Cyclic quadrilateral', 'One angle of a cyclic quadrilateral is 110°. Find the opposite angle.', [
        'Opposite angles in a cyclic quadrilateral sum to 180°.',
        'So the opposite angle is $180°-110°=70°$.',
      ], R`70^\circ`),
    ],
    [
      Q('The angle in a semicircle is always:', ['45°', '60°', '90°', '180°'], 2, 'Thales’ theorem.', R`The angle in a semicircle is $90^\circ$.`, 'Easy'),
      Q('A central angle is 120°. The angle at the circumference on the same arc is:', ['60°', '120°', '240°', '30°'], 0, 'Divide by 2.', R`$120^\circ/2=60^\circ$.`, 'Easy'),
      Q('One angle of a cyclic quadrilateral is 75°. Its opposite angle is:', ['75°', '105°', '15°', '90°'], 1, 'Opposite angles sum to 180°.', R`$180^\circ-75^\circ=105^\circ$.`, 'Medium'),
      Q('A tangent to a circle is:', ['Parallel to the radius at contact', 'Perpendicular to the radius at contact', 'Equal to the diameter', 'Always horizontal'], 1, 'Radius meets tangent at 90°.', R`The tangent is perpendicular to the radius at the point of contact.`, 'Medium'),
    ], ['circle theorems', 'arc', 'tangent', 'cyclic quadrilateral'], 'Draw the radius to the tangent point — it often reveals a right angle.'),

  topic('geometric-transformations', 'geometry', 'Geometric Transformations',
    'Translate, reflect, rotate and dilate points and shapes on the coordinate plane.',
    [
      'A translation slides every point by the same vector: $(x,y)\\to(x+a,y+b)$. Reflections flip across a line; rotations turn around a point; dilations resize by a scale factor from a centre.',
      R`Reflection in the x-axis: $(x,y)\to(x,-y)$. Reflection in the y-axis: $(x,y)\to(-x,y)$.`,
      R`A 90° anticlockwise rotation about the origin sends $(x,y)\to(-y,x)$. A dilation from the origin with factor $k$ sends $(x,y)\to(kx,ky)$.`,
    ],
    [
      ['Translation', R`(x,y)\to(x+a,y+b)`, 'Slide by vector (a, b).'],
      ['Reflection in x-axis', R`(x,y)\to(x,-y)`, 'y changes sign.'],
      ['90° rotation', R`(x,y)\to(-y,x)`, 'Anticlockwise about the origin.'],
    ],
    [
      EX('Translate a point', R`Translate $(3,-2)$ by the vector $(-4,5)$.`, [
        R`New x: $3+(-4)=-1$.`,
        R`New y: $-2+5=3$.`,
      ], R`(-1,3)`),
      EX('Rotate a point', R`Rotate $(2,3)$ by 90° anticlockwise about the origin.`, [
        R`Use $(x,y)\to(-y,x)$.`,
        'So $(2,3)\\to(-3,2)$.',
      ], R`(-3,2)`),
    ],
    [
      Q(R`Reflect $(4,-1)$ in the x-axis.`, ['(−4,−1)', '(4,1)', '(−4,1)', '(1,4)'], 1, 'Change the sign of y.', R`$(4,-1)\to(4,1)$.`, 'Easy'),
      Q(R`Translate $(2,5)$ by $(3,-2)$.`, ['(5,3)', '(−1,7)', '(6,10)', '(2,3)'], 0, 'Add the vector to the point.', R`$(2+3,5-2)=(5,3)$.`, 'Easy'),
      Q(R`Rotate $(1,2)$ by 90° anticlockwise about the origin.`, ['(−2,1)', '(2,−1)', '(−1,2)', '(1,−2)'], 0, 'Use (−y, x).', R`$(1,2)\to(-2,1)$.`, 'Medium'),
      Q(R`Dilate $(3,4)$ from the origin by scale factor 2.`, ['(5,6)', '(6,8)', '(1.5,2)', '(3,8)'], 1, 'Multiply both coordinates by 2.', R`$(6,8)$.`, 'Medium'),
    ], ['translation', 'reflection', 'rotation', 'dilation'], 'Translations, reflections and rotations preserve shape and size; dilations change size.'),

  topic('unit-circle-radians', 'geometry', 'Unit Circle & Radians',
    'Use radian measure, the unit circle and exact trigonometric values for special angles.',
    [
      R`One radian is the angle subtended by an arc equal in length to the radius. Since a full circle has circumference $2\pi r$, a full turn is $2\pi$ radians: $180^\circ=\pi$ radians.`,
      R`On the unit circle, a point at angle $\theta$ has coordinates $(\cos\theta,\sin\theta)$. This gives exact values such as $\cos\frac\pi3=\frac12$ and $\sin\frac\pi6=\frac12$.`,
      R`Arc length is $s=r\theta$ when $\theta$ is in radians. Angles repeat every $2\pi$ radians.`,
    ],
    [
      ['Degree–radian conversion', R`180^\circ=\pi\text{ rad}`, 'Multiply degrees by π/180.'],
      ['Unit circle point', R`(x,y)=(\cos\theta,\sin\theta)`, 'Radius 1.'],
      ['Arc length', R`s=r\theta`, 'θ must be in radians.'],
    ],
    [
      EX('Convert and locate', R`Convert $60^\circ$ to radians and find the point on the unit circle.`, [
        R`$60^\circ\times\frac{\pi}{180^\circ}=\frac\pi3$.`,
        R`The point is $\left(\cos\frac\pi3,\sin\frac\pi3\right)=\left(\frac12,\frac{\sqrt3}{2}\right)$.`,
      ], R`\frac\pi3\text{ rad},\quad\left(\frac12,\frac{\sqrt3}{2}\right)`),
      EX('Arc length', R`Find the arc length when $r=5$ and $\theta=\frac\pi4$.`, [
        R`Use $s=r\theta$.`,
        R`$s=5\cdot\frac\pi4=\frac{5\pi}{4}$.`,
      ], R`\frac{5\pi}{4}`),
    ],
    [
      Q(R`How many radians is $180^\circ$?`, [R`\frac\pi2`, R`\pi`, '2π', '90'], 1, 'Half a turn is π radians.', R`$180^\circ=\pi$ radians.`, 'Easy'),
      Q(R`Find $\cos\frac\pi2$.`, ['0', '1', '−1', R`\frac{\sqrt2}{2}`], 0, 'Point at (0, 1).', R`$\cos\frac\pi2=0$.`, 'Easy'),
      Q(R`Find $\sin\frac\pi6$.`, [R`\frac12`, R`\frac{\sqrt3}{2}`, R`\frac{\sqrt2}{2}`, '1'], 0, 'Special angle value.', R`$\sin\frac\pi6=\frac12$.`, 'Easy'),
      Q(R`Find the arc length with $r=4$ and $\theta=\frac\pi2$.`, ['π', '2π', '4π', '8π'], 1, 'Use $s=r\\theta$.', R`$s=4\cdot\frac\pi2=2\pi$.`, 'Medium'),
    ], ['radians', 'unit circle', 'arc length', 'special angles'], 'Set your calculator to radians when angles are given in terms of π.'),

  topic('trig-identities', 'geometry', 'Trigonometric Identities',
    'Use and prove fundamental trig identities, including double-angle formulas.',
    [
      R`The Pythagorean identity is $\sin^2\theta+\cos^2\theta=1$. Dividing by $\cos^2\theta$ gives $1+\tan^2\theta=\sec^2\theta$.`,
      R`Reciprocal identities: $\csc\theta=\frac1{\sin\theta}$, $\sec\theta=\frac1{\cos\theta}$, $\cot\theta=\frac1{\tan\theta}$. Quotient identity: $\tan\theta=\frac{\sin\theta}{\cos\theta}$.`,
      R`Double-angle formulas: $\sin2\theta=2\sin\theta\cos\theta$ and $\cos2\theta=\cos^2\theta-\sin^2\theta=2\cos^2\theta-1$.`,
    ],
    [
      ['Pythagorean', R`\sin^2\theta+\cos^2\theta=1`, 'True for every θ.'],
      ['Quotient', R`\tan\theta=\frac{\sin\theta}{\cos\theta}`, 'Define tangent.'],
      ['Double angle', R`\sin2\theta=2\sin\theta\cos\theta`, 'Useful in equations.'],
    ],
    [
      EX('Find cosine from sine', R`If $\sin\theta=\frac35$ and θ is acute, find $\cos\theta$.`, [
        R`$\cos^2\theta=1-\sin^2\theta=1-\frac9{25}=\frac{16}{25}$.`,
        R`Since θ is acute, $\cos\theta=\frac45$.`,
      ], R`\frac45`),
      EX('Solve a trig equation', R`Solve $2\cos\theta=1$ for $0^\circ\le\theta<360^\circ$.`, [
        R`Divide by 2: $\cos\theta=\frac12$.`,
        'Cosine is positive in quadrants I and IV: $\\theta=60^\\circ$ or $300^\\circ$.',
      ], R`60^\circ\text{ or }300^\circ`),
    ],
    [
      Q(R`The value of $\sin^2\theta+\cos^2\theta$ is:`, ['0', '1', '2', 'tan θ'], 1, 'Fundamental identity.', R`$\sin^2\theta+\cos^2\theta=1$.`, 'Easy'),
      Q(R`Which is equal to $\tan\theta$?`, [R`\frac{\cos\theta}{\sin\theta}`, R`\frac{\sin\theta}{\cos\theta}`, 'sin θ + cos θ', '1 − cos θ'], 1, 'Quotient identity.', R`$\tan\theta=\frac{\sin\theta}{\cos\theta}$.`, 'Easy'),
      Q(R`The double-angle formula for $\sin2\theta$ is:`, ['sin θ cos θ', '2 sin θ cos θ', 'sin²θ + cos²θ', '2 sin²θ'], 1, 'Standard identity.', R`$\sin2\theta=2\sin\theta\cos\theta$.`, 'Medium'),
      Q(R`Solve $\sin\theta=\frac12$ for $0^\circ\le\theta<360^\circ$.`, ['30° only', '30° and 150°', '60° and 120°', '150° only'], 1, 'Sine positive in quadrants I and II.', R`$\theta=30^\circ$ or $150^\circ$.`, 'Medium'),
    ], ['trig identities', 'double angle', 'trig equations'], 'Sketch the unit circle to remember which quadrants give positive values.'),

  topic('law-of-sines-cosines', 'geometry', 'Law of Sines & Cosines',
    'Solve non-right triangles using the sine rule, cosine rule and the area formula.',
    [
      R`The law of sines: $\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$. Use it when you know an angle and its opposite side, plus one other side or angle.`,
      R`The law of cosines: $c^2=a^2+b^2-2ab\cos C$. It generalises Pythagoras and is used when two sides and the included angle are known, or when all three sides are known.`,
      R`The area of a triangle can be found with $A=\frac12ab\sin C$ when two sides and the included angle are known.`,
    ],
    [
      ['Law of sines', R`\frac{a}{\sin A}=\frac{b}{\sin B}`, 'Opposite pairs.'],
      ['Law of cosines', R`c^2=a^2+b^2-2ab\cos C`, 'Included angle formula.'],
      ['Area', R`A=\frac12ab\sin C`, 'Two sides and included angle.'],
    ],
    [
      EX('Use the cosine rule', 'Two sides of a triangle are 5 and 6 with included angle 60°. Find the third side.', [
        R`$c^2=5^2+6^2-2(5)(6)\cos60^\circ$.`,
        R`$\cos60^\circ=\frac12$, so $c^2=25+36-30=31$.`,
      ], R`c=\sqrt{31}`),
      EX('Find a triangle area', R`If $a=8$, $b=5$ and $C=60^\circ$, find the area.`, [
        R`$A=\frac12(8)(5)\sin60^\circ=20\cdot\frac{\sqrt3}{2}$.`,
        R`So $A=10\sqrt3$.`,
      ], R`10\sqrt3`),
    ],
    [
      Q(R`The law of sines states:`, [R`\frac{a}{\sin A}=\frac{b}{\sin B}`, R`a^2=b^2+c^2`, R`\sin A=a`, R`A=\frac12bh`], 0, 'Match sides with opposite angles.', R`The sine rule relates sides to the sines of their opposite angles.`, 'Easy'),
      Q(R`The cosine rule is:`, [R`c^2=a^2+b^2-2ab\cos C`, R`c^2=a^2+b^2+2ab`, R`c=a+b`, R`c^2=a^2-b^2`], 0, 'Reduces to Pythagoras when C = 90°.', R`$c^2=a^2+b^2-2ab\cos C$.`, 'Easy'),
      Q(R`If $a=3$, $b=4$ and $C=60^\circ$, find $c^2$.`, ['13', '25', '37', '5'], 0, '$9+16−24×0.5$.', R`$c^2=9+16-12=13$.`, 'Medium'),
      Q(R`The area formula using two sides and the included angle is:`, [R`\frac12ab\sin C`, R`ab\cos C`, R`\frac12 a^2`, R`2ab\sin C`], 0, 'Standard area formula.', R`$A=\frac12ab\sin C$.`, 'Medium'),
    ], ['sine rule', 'cosine rule', 'non-right triangles', 'triangle area'], 'The cosine rule becomes Pythagoras when the included angle is 90°.')
];
