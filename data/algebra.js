import { R, EX, Q, topic } from './core.js';

export default [
  topic('algebraic-expressions', 'algebra', 'Algebraic Expressions',
    'Translate words into algebra, expand brackets, collect like terms and evaluate expressions.',
    [
      'A term is a product of numbers and variables; like terms have exactly the same variable part. Only like terms can be combined: $3x+5x=8x$, but $3x+5y$ cannot be simplified.',
      'The distributive law $a(b+c)=ab+ac$ removes brackets. Watch the signs when a minus sign sits in front of a bracket.',
      'To evaluate an expression, substitute the given value and then apply the order of operations.',
    ],
    [
      ['Distributive law', R`a(b+c)=ab+ac`, 'Multiply each term inside the bracket.'],
      ['Like terms', R`3x+5x-2x=(3+5-2)x=6x`, 'Combine coefficients only.'],
    ],
    [
      EX('Simplify an expression', R`Simplify $3x+5-2x+7$.`, [
        'Group like terms: $(3x-2x)+(5+7)$.',
        'Combine coefficients: $3-2=1$, so $3x-2x=x$.',
        'Combine constants: $5+7=12$.',
      ], R`x+12`),
      EX('Expand and collect', R`Expand and simplify $4(2x-3)+5x$.`, [
        R`Distribute: $4\times 2x + 4\times(-3)=8x-12$.`,
        'Add the remaining term: $8x-12+5x$.',
        'Collect: $8x+5x=13x$.',
      ], R`13x-12`),
    ],
    [
      Q(R`Simplify $5a+3b-2a+b$.`, ['3a+4b', '7a+4b', '3a+3b', '5a+4b'], 0, 'Group the $a$ terms and the $b$ terms.', R`$(5a-2a)+(3b+b)=3a+4b$.`, 'Easy'),
      Q(R`Expand $3(2x+5)$.`, ['6x+5', '6x+15', '2x+15', '5x+8'], 1, 'Multiply 3 by each term inside the bracket.', R`$3(2x+5)=6x+15$.`, 'Easy'),
      Q(R`Evaluate $4x-7$ when $x=-2$.`, ['1', '−15', '15', '−1'], 1, 'Substitute −2 in place of x.', R`$4(-2)-7=-8-7=-15$.`, 'Easy'),
      Q(R`Simplify $2(x+3)-(x-4)$.`, ['x+10', 'x+2', '3x+2', 'x−1'], 0, 'The minus before the second bracket changes both signs inside.', R`$2x+6-x+4=x+10$.`, 'Medium'),
    ], ['like terms', 'expand brackets', 'substitution'], 'When a bracket has a minus sign in front, imagine a $−1$ multiplying every term inside.'),

  topic('linear-equations', 'algebra', 'Linear Equations',
    'Solve one-variable equations using inverse operations, including equations with brackets and fractions.',
    [
      R`A linear equation has the form $ax+b=c$ with $a\neq 0$. The goal is to isolate the variable by doing the same operation to both sides.`,
      'Undo addition and subtraction first, then multiplication and division. Expand brackets before collecting terms.',
      'Always substitute your answer back into the original equation to check it.',
    ],
    [
      ['General form', R`ax+b=c\quad\Longrightarrow\quad x=\frac{c-b}{a}`, 'a cannot be zero.'],
      ['Check', R`a\left(\frac{c-b}{a}\right)+b=c`, 'Substitute your solution back into the original equation to catch sign errors.'],
    ],
    [
      EX('Two-step equation', R`Solve $3x+7=22$.`, [
        'Subtract 7 from both sides: $3x=15$.',
        'Divide both sides by 3: $x=5$.',
        'Check: $3(5)+7=15+7=22$.',
      ], R`x=5`),
      EX('Brackets on both sides', R`Solve $4(x-2)=2x+10$.`, [
        'Expand: $4x-8=2x+10$.',
        'Subtract $2x$: $2x-8=10$.',
        'Add 8: $2x=18$, so $x=9$. Check: $4(7)=28$ and $18+10=28$.',
      ], R`x=9`),
    ],
    [
      Q(R`Solve $5x-9=26$.`, ['5', '7', '−7', '35'], 1, 'Add 9 to both sides, then divide by 5.', R`$5x=35$, so $x=7$.`, 'Easy'),
      Q(R`Solve $2(x+4)=3x-1$.`, ['9', '−9', '7', '3'], 0, 'Expand the bracket first: $2x+8=3x-1$.', R`Subtract $2x$ and add 1: $9=x$, so $x=9$.`, 'Medium'),
      Q(R`Solve $\frac{x-1}{4}=3$.`, ['11', '12', '13', '7'], 2, 'Multiply both sides by 4.', R`$x-1=12$, so $x=13$.`, 'Medium'),
      Q(R`Solve $3(2x-1)=4x+7$.`, ['5', '4', '−5', '10'], 0, 'Expand to $6x-3=4x+7$.', R`$2x=10$, so $x=5$.`, 'Medium'),
    ], ['solve for x', 'inverse operations', 'brackets'], 'Whatever you do to one side, do to the other.'),

  topic('linear-inequalities', 'algebra', 'Linear Inequalities',
    'Solve inequalities, reverse the sign when multiplying by a negative, and represent solution sets.',
    [
      R`Inequalities use $<$, $>$, $\leq$ and $\geq$. Solve them like equations, except that multiplying or dividing by a negative number reverses the inequality sign.`,
      R`For example, $-2x>8$ becomes $x<-4$ after dividing by $-2$. An open circle on a number line means the endpoint is excluded; a closed circle means it is included.`,
      'A compound inequality such as $-3<2x+1\\leq7$ is solved by performing each operation on all three parts.',
    ],
    [
      ['Sign reversal', R`ax>b,\ a<0\ \Longrightarrow\ x<\frac{b}{a}`, 'Flip the inequality when dividing by a negative.'],
      ['Interval notation', R`a<x\le b\ \Longleftrightarrow\ (a,b]`, 'Round bracket = excluded, square bracket = included.'],
    ],
    [
      EX('Negative coefficient', R`Solve $-2x>8$.`, [
        'Divide both sides by $−2$.',
        'Because $−2$ is negative, reverse $>$ to $<$.',
        R`$x<-4$. Check with $x=-5$: $-2(-5)=10>8$.`,
      ], R`x<-4`),
      EX('Compound inequality', R`Solve $-3\leq 2x+1<7$.`, [
        'Subtract 1 from all three parts: $-4\\leq2x<6$.',
        'Divide all parts by 2: $-2\\leq x<3$.',
        'The solution includes $−2$ but excludes 3.',
      ], R`-2\leq x<3\quad\text{or}\quad[-2,3)`),
    ],
    [
      Q(R`Solve $x+4>9$.`, ['x>5', 'x<5', 'x>13', 'x≥5'], 0, 'Subtract 4 from both sides.', R`$x>9-4=5$.`, 'Easy'),
      Q(R`Solve $-3x\leq 12$.`, ['x≤−4', 'x≥−4', 'x≤4', 'x≥4'], 1, 'Dividing by a negative number reverses the sign.', R`$x\geq\frac{12}{-3}=-4$.`, 'Easy'),
      Q(R`Solve $2x-1\geq 7$.`, ['x≥3', 'x≥4', 'x≤4', 'x>4'], 1, 'Add 1, then divide by 2.', R`$2x\geq8$, so $x\geq4$.`, 'Easy'),
      Q(R`Solve $1<2x-3\leq 7$.`, ['2<x≤5', '1<x≤5', '2≤x<5', '4<x≤10'], 0, 'Add 3 to all parts, then divide by 2.', R`$4<2x\leq10$, hence $2<x\leq5$.`, 'Medium'),
    ], ['inequality', 'interval notation', 'compound inequality'], 'Test a value from your solution interval to confirm the inequality is true.'),

  topic('systems-of-equations', 'algebra', 'Systems of Equations',
    'Solve two linear equations simultaneously by substitution and elimination, and recognise special cases.',
    [
      'A system of two linear equations asks for values that satisfy both equations at once. Geometrically, the solution is the point where the two lines cross.',
      R`Substitution: solve one equation for a variable and put that expression into the other equation. Elimination: add or subtract multiples of the equations so one variable cancels.`,
      R`If elimination gives a false statement such as $0=5$, there is no solution (parallel lines). If it gives $0=0$, there are infinitely many solutions (the same line).`,
    ],
    [
      ['Elimination setup', R`\begin{aligned}2x+3y&=7\\4x-3y&=5\end{aligned}\ \Rightarrow\ 6x=12`, 'Add the two equations: the y terms cancel.'],
      ['Substitution', R`y=mx+c\Rightarrow ax+m x+c=b`, 'Solve one equation for a variable and replace it in the other; best when a variable is already isolated.'],
    ],
    [
      EX('Substitution', R`Solve $y=2x+1$ and $3x+y=11$.`, [
        'Replace $y$ in the second equation: $3x+(2x+1)=11$.',
        'Collect: $5x+1=11$, so $5x=10$ and $x=2$.',
        'Find $y$: $y=2(2)+1=5$.',
      ], R`x=2,\ y=5`),
      EX('Elimination', R`Solve $2x+3y=7$ and $4x-3y=5$.`, [
        'Add the equations: $(2x+4x)+(3y-3y)=7+5$.',
        'This gives $6x=12$, so $x=2$.',
        'Substitute into the first: $4+3y=7$, so $y=1$. Check in the second: $8-3=5$.',
      ], R`x=2,\ y=1`),
    ],
    [
      Q(R`Solve $x+y=10$ and $x-y=4$.`, ['x=6, y=4', 'x=7, y=3', 'x=5, y=5', 'x=8, y=2'], 1, 'Add the equations to eliminate y.', R`Adding gives $2x=14$, so $x=7$ and $y=3$.`, 'Easy'),
      Q(R`Solve $y=3x$ and $x+y=12$.`, ['x=3, y=9', 'x=4, y=8', 'x=2, y=6', 'x=6, y=6'], 0, 'Substitute $3x$ for y in the second equation.', R`$4x=12$, so $x=3$, $y=9$.`, 'Easy'),
      Q(R`Solve $2x+y=7$ and $x-y=2$.`, ['x=2, y=3', 'x=3, y=1', 'x=4, y=−1', 'x=5, y=−3'], 1, 'Add the equations: $3x=9$.', R`$x=3$; then $3-y=2$, so $y=1$.`, 'Medium'),
      Q('How many solutions does the system $2x+4y=6$ and $x+2y=5$ have?', ['None', 'Exactly one', 'Infinitely many', 'Two'], 0, 'Multiply the second equation by 2 and compare.', R`Doubling gives $2x+4y=10$, which contradicts $2x+4y=6$. The lines are parallel, so there is no solution.`, 'Hard'),
    ], ['simultaneous equations', 'substitution', 'elimination'], 'Elimination is fastest when a variable has opposite coefficients.'),

  topic('polynomials', 'algebra', 'Polynomials',
    'Work with polynomial terms, degree, addition, subtraction and multiplication.',
    [
      R`A polynomial is a sum of terms $a_nx^n+\cdots+a_1x+a_0$ with whole-number exponents. The largest exponent is the degree; $a_n$ is the leading coefficient and $a_0$ is the constant term.`,
      'Add or subtract polynomials by combining like terms. Multiply polynomials by distributing every term of one expression over the other.',
      'Useful products: $(a+b)(a-b)=a^2-b^2$ and $(a+b)^2=a^2+2ab+b^2$.',
    ],
    [
      ['Difference of squares', R`(a+b)(a-b)=a^2-b^2`, 'The middle terms cancel.'],
      ['Perfect square', R`(a+b)^2=a^2+2ab+b^2`, 'Include the middle $2ab$ term!'],
    ],
    [
      EX('Add polynomials', R`Simplify $(3x^2+2x-5)+(x^2-4x+7)$.`, [
        'Group like terms: $(3x^2+x^2)+(2x-4x)+(-5+7)$.',
        'Combine: $4x^2-2x+2$.',
      ], R`4x^2-2x+2`),
      EX('Multiply binomials', R`Expand $(x+3)(x-2)$.`, [
        'First: $x\\cdot x=x^2$.',
        'Outer and inner: $x(-2)+3x=-2x+3x=x$.',
        'Last: $3(-2)=-6$.',
      ], R`x^2+x-6`),
    ],
    [
      Q('What is the degree of $4x^3-2x+1$?', ['1', '2', '3', '4'], 2, 'Look for the largest exponent.', R`The highest power is $x^3$, so the degree is 3.`, 'Easy'),
      Q(R`Expand $(2x-1)(x+4)$.`, ['2x²+7x−4', '2x²+8x−4', '2x²+7x+4', '3x²+3x−4'], 0, 'Use FOIL: First, Outer, Inner, Last.', R`$2x^2+8x-x-4=2x^2+7x-4$.`, 'Easy'),
      Q(R`Subtract $(x^2+3x)-(2x^2-x)$.`, ['x²+2x', '−x²+4x', '−x²+2x', '3x²+2x'], 1, 'Distribute the minus sign to the second bracket.', R`$x^2+3x-2x^2+x=-x^2+4x$.`, 'Medium'),
      Q(R`Expand $(x+2)^3$.`, ['x³+8', 'x³+4x²+8x+8', 'x³+6x²+12x+8', 'x³+2x²+4x+8'], 2, 'Use $(a+b)^3=a^3+3a^2b+3ab^2+b^3$.', R`$x^3+3x^2(2)+3x(4)+8=x^3+6x^2+12x+8$.`, 'Hard'),
    ], ['degree', 'leading coefficient', 'FOIL'], 'A polynomial does not allow variables in denominators or under radicals.'),

  topic('factoring', 'algebra', 'Factoring Polynomials',
    'Break polynomials into products using common factors, grouping, trinomials and special patterns.',
    [
      R`Factoring reverses expansion: $x^2+7x+12=(x+3)(x+4)$. First check for a greatest common factor (GCF), then look for patterns.`,
      R`For $x^2+bx+c$, find numbers with product $c$ and sum $b$. For $ax^2+bx+c$ with $a\neq1$, use the ac-method (split the middle term).`,
      R`Special forms: $a^2-b^2=(a-b)(a+b)$, $a^2+2ab+b^2=(a+b)^2$ and $a^3+b^3=(a+b)(a^2-ab+b^2)$.`,
    ],
    [
      ['Difference of squares', R`a^2-b^2=(a-b)(a+b)`, 'Both terms must be perfect squares.'],
      ['Quadratic trinomial', R`x^2+bx+c=(x+p)(x+q),\ pq=c,\ p+q=b`, 'Find p and q by inspection.'],
    ],
    [
      EX('Simple trinomial', R`Factor $x^2+7x+12$.`, [
        'Find two numbers whose product is 12 and sum is 7: 3 and 4.',
        'Write $(x+3)(x+4)$.',
        'Check by expanding: $x^2+4x+3x+12=x^2+7x+12$.',
      ], R`(x+3)(x+4)`),
      EX('Difference of squares', R`Factor $9x^2-25$.`, [
        R`Recognise $9x^2=(3x)^2$ and $25=5^2$.`,
        'Apply $a^2-b^2=(a-b)(a+b)$ with $a=3x$, $b=5$.',
      ], R`(3x-5)(3x+5)`),
    ],
    [
      Q(R`Factor $x^2+5x+6$.`, ['(x+1)(x+6)', '(x+2)(x+3)', '(x−2)(x−3)', '(x+5)(x+1)'], 1, 'Product 6, sum 5.', R`$2\times3=6$ and $2+3=5$, so $(x+2)(x+3)$.`, 'Easy'),
      Q(R`Factor $x^2-9$.`, ['(x−3)²', '(x+3)²', '(x−3)(x+3)', '(x−9)(x+1)'], 2, 'Use the difference of squares.', R`$x^2-3^2=(x-3)(x+3)$.`, 'Easy'),
      Q(R`Factor completely: $3x^2-12$.`, ['3(x²−4)', '3(x−2)(x+2)', '(3x−6)(x+2)', '3(x−4)(x+1)'], 1, 'Take out the common factor 3 first, then use difference of squares.', R`$3(x^2-4)=3(x-2)(x+2)$.`, 'Medium'),
      Q(R`Factor $2x^2+7x+3$.`, ['(2x+1)(x+3)', '(2x+3)(x+1)', '(2x−1)(x−3)', '(x+1)(2x+3)'], 0, 'Find numbers with product $2\\times3=6$ and sum 7: 6 and 1.', R`$2x^2+6x+x+3=2x(x+3)+1(x+3)=(2x+1)(x+3)$. Note option (2x+3)(x+1) expands to $2x^2+5x+3$.`, 'Hard'),
    ], ['GCF', 'trinomial', 'special products'], 'Always expand your factorisation mentally to verify the middle term.'),

  topic('quadratic-equations', 'algebra', 'Quadratic Equations',
    'Solve quadratics by factoring, completing the square and the quadratic formula; interpret the discriminant.',
    [
      R`A quadratic equation has the form $ax^2+bx+c=0$ with $a\neq0$. It can have 0, 1 or 2 real solutions.`,
      R`The quadratic formula is $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$. The discriminant $\Delta=b^2-4ac$ tells you the nature of the roots: $\Delta>0$ gives two real roots, $\Delta=0$ one repeated root, $\Delta<0$ no real roots.`,
      'Factoring is quickest when the expression factors easily; completing the square is useful for deriving the formula and for finding a vertex.',
    ],
    [
      ['Quadratic formula', R`x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}`, 'Works for every quadratic.'],
      ['Discriminant', R`\Delta=b^2-4ac`, 'Positive: two roots; zero: one; negative: none (real).'],
      ['Completing the square', R`x^2+px=\left(x+\frac p2\right)^2-\left(\frac p2\right)^2`, 'Add and subtract the same value.'],
    ],
    [
      EX('Solve by factoring', R`Solve $x^2-5x+6=0$.`, [
        'Factor: $(x-2)(x-3)=0$.',
        'By the zero product property, $x-2=0$ or $x-3=0$.',
        'Hence $x=2$ or $x=3$.',
      ], R`x=2\ \text{or}\ x=3`),
      EX('Use the formula', R`Solve $2x^2+3x-2=0$.`, [
        R`Here $a=2,\ b=3,\ c=-2$, so $\Delta=9-4(2)(-2)=25$.`,
        R`$x=\frac{-3\pm\sqrt{25}}{4}=\frac{-3\pm5}{4}$.`,
        R`The two roots are $\frac{2}{4}=\frac12$ and $\frac{-8}{4}=-2$.`,
      ], R`x=\frac12\ \text{or}\ x=-2`),
    ],
    [
      Q(R`Solve $x^2-7x+12=0$.`, ['x=2 or 6', 'x=3 or 4', 'x=−3 or −4', 'x=1 or 12'], 1, 'Find numbers with product 12 and sum −7.', R`$(x-3)(x-4)=0$, so $x=3$ or $x=4$.`, 'Easy'),
      Q(R`Solve $x^2-4=0$.`, ['x=2 only', 'x=4 or −4', 'x=2 or −2', 'No real roots'], 2, 'Use difference of squares.', R`$(x-2)(x+2)=0$, so $x=\pm2$.`, 'Easy'),
      Q(R`Solve $x^2+2x-3=0$ using the formula.`, ['x=1 or −3', 'x=3 or −1', 'x=1 or 3', 'x=−1 only'], 0, '$a=1,b=2,c=−3$; $\\Delta=4+12=16$.', R`$x=\frac{-2\pm4}{2}$, giving $x=1$ or $x=-3$.`, 'Medium'),
      Q(R`How many real roots does $x^2+4x+5=0$ have?`, ['Two', 'One', 'None', 'Infinitely many'], 2, 'Compute the discriminant $b^2-4ac$.', R`$\Delta=16-20=-4<0$, so the equation has no real roots.`, 'Medium'),
    ], ['quadratic formula', 'discriminant', 'zero product property'], 'If the discriminant is a perfect square, the quadratic usually factors nicely.'),

  topic('functions', 'algebra', 'Functions & Graphs',
    'Understand domain, range, function notation, linear graphs, slope and composition.',
    [
      R`A function assigns exactly one output to each input. We write $f(x)$ for the output. The domain is the set of allowed inputs; the range is the set of outputs produced.`,
      R`A linear function $f(x)=mx+c$ has slope $m$ and y-intercept $c$. Slope between two points is $m=\frac{y_2-y_1}{x_2-x_1}$.`,
      R`Composition $(f\circ g)(x)=f(g(x))$ applies $g$ first and then $f$. Only one-to-one functions have inverses that are also functions.`,
    ],
    [
      ['Function notation', R`f(x)=2x+1\Rightarrow f(3)=7`, 'Replace x by the input value.'],
      ['Slope', R`m=\frac{y_2-y_1}{x_2-x_1}`, 'Rise over run.'],
      ['Composition', R`(f\circ g)(x)=f(g(x))`, 'Work from the inside out.'],
    ],
    [
      EX('Evaluate and interpret', R`If $f(x)=2x^2-3x+1$, find $f(3)$.`, [
        'Substitute 3: $2(3)^2-3(3)+1$.',
        'Evaluate the power: $2(9)-9+1$.',
        'Multiply and combine: $18-9+1=10$.',
      ], R`f(3)=10`),
      EX('Find a domain and slope', 'Find the domain of $f(x)=\\frac{1}{x-2}$ and the slope through $(1,2)$ and $(4,8)$.', [
        R`The denominator cannot be zero, so $x\neq2$.`,
        R`Slope $m=\frac{8-2}{4-1}=\frac{6}{3}=2$.`,
      ], R`\text{Domain }\{x\in\mathbb{R}:x\neq2\},\quad m=2`),
    ],
    [
      Q(R`If $f(x)=3x+2$, find $f(-1)$.`, ['−1', '1', '5', '−5'], 0, 'Substitute −1 into the formula.', R`$3(-1)+2=-3+2=-1$.`, 'Easy'),
      Q(R`Find the domain of $f(x)=\sqrt{x-4}$.`, ['x>4', 'x≥4', 'x≤4', 'All real numbers'], 1, 'The radicand must be non-negative.', R`$x-4\geq0$, so $x\geq4$.`, 'Easy'),
      Q('Find the slope of the line through (1, 2) and (4, 8).', ['2', '3', '1/2', '6'], 0, 'Use rise over run.', R`$m=\frac{8-2}{4-1}=2$.`, 'Easy'),
      Q(R`If $f(x)=x^2$ and $g(x)=x+1$, find $f(g(2))$.`, ['5', '9', '3', '25'], 1, 'First find $g(2)=3$, then square it.', R`$g(2)=3$ and $f(3)=3^2=9$.`, 'Medium'),
    ], ['domain', 'range', 'slope', 'composition'], 'A graph represents a function if every vertical line crosses it at most once.'),

  topic('logarithms', 'algebra', 'Logarithms',
    'Convert between exponential and logarithmic form and use the laws of logs to solve equations.',
    [
      R`The logarithm $\log_b a=c$ asks "to what power must $b$ be raised to get $a$?" It is equivalent to $b^c=a$, where $b>0$, $b\neq1$ and $a>0$.`,
      R`Laws: $\log_b(MN)=\log_b M+\log_b N$, $\log_b(M/N)=\log_b M-\log_b N$, and $\log_b(M^n)=n\log_b M$.`,
      R`The natural logarithm $\ln x$ uses base $e\approx2.718$. The change-of-base formula is $\log_b a=\frac{\ln a}{\ln b}$.`,
    ],
    [
      ['Definition', R`\log_b a=c\iff b^c=a`, 'Read as "log base b of a".'],
      ['Product law', R`\log_b(MN)=\log_b M+\log_b N`, 'Turns multiplication into addition.'],
      ['Change of base', R`\log_b a=\frac{\ln a}{\ln b}`, 'Useful for calculator work.'],
    ],
    [
      EX('Evaluate a logarithm', R`Evaluate $\log_2 8$.`, [
        'Ask: $2^?=8$.',
        R`Since $8=2^3$, the answer is 3.`,
      ], R`\log_2 8=3`),
      EX('Solve an exponential equation', R`Solve $2^x=32$.`, [
        R`Write 32 as a power of 2: $32=2^5$.`,
        'Since the bases match, the exponents are equal: $x=5$.',
        R`Alternatively, $x=\log_2 32=5$.`,
      ], R`x=5`),
    ],
    [
      Q(R`Evaluate $\log_3 27$.`, ['3', '9', '27', '13.5'], 0, '$27=3^3$.', R`$\log_3 27=3$.`, 'Easy'),
      Q(R`Simplify $\log 2+\log 5$.`, ['log 7', 'log 10', '10', 'log 2.5'], 1, 'Use the product law.', R`$\log(2\times5)=\log 10=1$ (for base 10).`, 'Easy'),
      Q(R`Solve $5^x=125$.`, ['2', '3', '5', '25'], 1, 'Write 125 as a power of 5.', R`$125=5^3$, so $x=3$.`, 'Easy'),
      Q(R`Evaluate $\log_8 2$.`, ['4', '3', R`\frac{1}{3}`, R`\frac{1}{4}`], 2, 'Ask: $8^?=2$, and $8=2^3$.', R`$8^{1/3}=2$, so $\log_8 2=\frac13$.`, 'Medium'),
    ], ['log', 'ln', 'exponential equations'], 'Logs are only defined for positive arguments and bases not equal to 1.'),
];
