import { R, EX, Q, topic } from './core.js';

export default [
  topic('implicit-related-rates', 'calculus', 'Implicit Differentiation & Related Rates',
    'Differentiate curves not solved for y and connect changing quantities with the chain rule.',
    [
      'Implicit differentiation differentiates both sides of an equation with respect to $x$, treating $y$ as a function of $x$. Whenever you differentiate a term containing $y$, multiply by $dy/dx$.',
      R`For example, $\frac{d}{dx}(y^3)=3y^2\frac{dy}{dx}$. After differentiating, collect the $dy/dx$ terms and solve for them.`,
      'Related rates use the same idea with time: write an equation connecting quantities, differentiate with respect to $t$, then substitute known rates and values.',
    ],
    [
      ['Implicit power rule', R`\frac{d}{dx}(y^n)=ny^{n-1}\frac{dy}{dx}`, 'Chain rule factor appears.'],
      ['Circle example', R`x^2+y^2=25\Rightarrow y'=-\frac xy`, 'Differentiate both sides.'],
      ['Related rates', R`2x\frac{dx}{dt}+2y\frac{dy}{dt}=0`, 'Differentiate with respect to time.'],
    ],
    [
      EX('Find a slope implicitly', R`For $x^2+y^2=25$, find $\frac{dy}{dx}$ at $(3,4)$.`, [
        R`Differentiate: $2x+2y\,y'=0$.`,
        R`So $y'=-\frac{x}{y}$; at $(3,4)$, $y'=-\frac34$.`,
      ], R`-\frac34`),
      EX('Ladder related rate', 'A 10 m ladder rests against a wall. Its foot moves away at 2 m/s. How fast is the top sliding down when the foot is 6 m from the wall?', [
        R`Let $x^2+y^2=100$. When $x=6$, $y=8$.`,
        R`Differentiate: $2x x'+2y y'=0$, so $y'=-\frac{x x'}{y}=-\frac{6(2)}{8}=-1.5$ m/s. The top moves downward.`,
      ], R`1.5\text{ m/s downward}`),
    ],
    [
      Q(R`For $x^2+y^2=25$, find $\frac{dy}{dx}$ at $(3,4)$.`, [R`\frac34`, R`-\frac34`, R`\frac43`, R`-\frac43`], 1, 'Differentiate implicitly: 2x + 2y y′ = 0.', R`$y'=-x/y=-3/4$.`, 'Medium'),
      Q('When differentiating $y^3$ with respect to x, we get:', ['3y²', '3y² y′', '3y² x′', 'y³'], 1, 'Treat y as a function of x.', R`$\frac{d}{dx}(y^3)=3y^2y'$.`, 'Easy'),
      Q('Related rates problems begin by:', ['Guessing the answer', 'Writing an equation linking the quantities', 'Ignoring units', 'Taking a square root'], 1, 'Then differentiate with respect to time.', R`A relationship equation must be differentiated with respect to $t$.`, 'Easy'),
      Q(R`If a ladder's top has $y'=-1.5$ m/s, the top is:`, ['Rising', 'Falling', 'Stationary', 'Accelerating'], 1, 'Negative height rate means decreasing height.', R`The negative sign means the height is decreasing, so the top is sliding down.`, 'Easy'),
    ], ['implicit differentiation', 'related rates', 'chain rule'], 'A negative related rate usually just means the quantity is decreasing.'),

  topic('lhopital', 'calculus', 'L’Hôpital’s Rule',
    'Evaluate indeterminate limits by differentiating the numerator and denominator.',
    [
      R`A limit giving $\frac00$ or $\frac\infty\infty$ is indeterminate. L’Hôpital’s Rule says $\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}$, provided the latter limit exists.`,
      'Apply the rule only after confirming an indeterminate form. It may need to be applied more than once.',
      'Other indeterminate forms such as $0\cdot\\infty$ or $\\infty-\\infty$ can often be rewritten as a fraction first.',
    ],
    [
      ['L’Hôpital’s Rule', R`\lim\frac fg=\lim\frac{f'}{g'}`, 'Only for 0/0 or ∞/∞.'],
      ['Standard result', R`\lim_{x\to0}\frac{\sin x}{x}=1`, 'Differentiate to cos x / 1.'],
    ],
    [
      EX('Use the rule', R`Evaluate $\lim_{x\to0}\frac{\sin x}{x}$.`, [
        R`Substitution gives $\frac00$, so apply the rule.`,
        R`$\lim_{x\to0}\frac{\cos x}{1}=\cos0=1$.`,
      ], R`1`),
      EX('Limit at infinity', R`Evaluate $\lim_{x\to\infty}\frac{\ln x}{x}$.`, [
        R`Both numerator and denominator tend to infinity.`,
        R`Differentiate: $\lim_{x\to\infty}\frac{1/x}{1}=0$.`,
      ], R`0`),
    ],
    [
      Q('L’Hôpital’s Rule applies directly to forms:', ['0/0 and ∞/∞', '1/0 and 0/1', '0 and ∞', 'Any limit'], 0, 'Those are the indeterminate fraction forms.', R`The rule is stated for $\frac00$ and $\frac\infty\infty$.`, 'Easy'),
      Q(R`Find $\lim_{x\to0}\frac{\sin x}{x}$.`, ['0', '1', '∞', 'Undefined'], 1, 'Differentiate numerator and denominator.', R`The limit is $\cos0/1=1$.`, 'Easy'),
      Q(R`Find $\lim_{x\to\infty}\frac{\ln x}{x}$.`, ['0', '1', '∞', 'e'], 0, 'Derivative ratio is 1/x.', R`$\lim_{x\to\infty}1/x=0$.`, 'Medium'),
      Q('Before applying L’Hôpital, you should:', ['Always differentiate twice', 'Check that the form is indeterminate', 'Take a square root', 'Assume the answer is 1'], 1, 'Otherwise the rule does not apply.', R`Check first that substitution produces $0/0$ or $\infty/\infty$.`, 'Easy'),
    ], ['Lhopital', 'indeterminate forms', 'limits'], 'If substitution gives a determinate value, just use it — no L’Hôpital needed.'),

  topic('taylor-series', 'calculus', 'Taylor & Maclaurin Series',
    'Approximate functions with polynomial series centred at a chosen point.',
    [
      R`The Taylor series of $f$ about $x=a$ is $f(x)=\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n$. A Maclaurin series is a Taylor series with $a=0$.`,
      R`Useful Maclaurin series: $e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$, $\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots$, and $\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots$.`,
      'More terms usually improve accuracy near the centre. Taylor polynomials are the basis of many numerical approximations.',
    ],
    [
      ['Taylor series', R`\sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n`, 'Centred at a.'],
      ['Exponential', R`e^x=1+x+\frac{x^2}{2!}+\cdots`, 'All derivatives are eˣ.'],
      ['Sine', R`\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots`, 'Only odd powers.'],
    ],
    [
      EX('Expand e to the x', 'Find the first three non-zero terms of the Maclaurin series for $e^x$.', [
        R`All derivatives of $e^x$ at 0 equal 1.`,
        R`Terms: $1+x+\frac{x^2}{2!}=1+x+\frac{x^2}{2}$.`,
      ], R`1+x+\frac{x^2}{2}`),
      EX('Approximate sine', R`Use $\sin x\approx x-\frac{x^3}{6}$ to estimate $\sin(0.1)$.`, [
        R`$\sin(0.1)\approx0.1-\frac{0.001}{6}$.`,
        R`That is $0.1-0.000167\approx0.099833$.`,
      ], R`\approx0.09983`),
    ],
    [
      Q('A Maclaurin series is centred at:', ['x = 1', 'x = 0', 'x = π', 'Any a'], 1, 'Maclaurin means a = 0.', R`A Maclaurin series is a Taylor series with centre 0.`, 'Easy'),
      Q(R`The first four terms of $e^x$ are:`, ['1 + x + x² + x³', '1 + x + x²/2 + x³/6', 'x + x³ + x⁵', '1 − x²/2 + x⁴/24'], 1, 'Divide by factorials.', R`$e^x=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots$.`, 'Easy'),
      Q(R`The first non-zero term of $\sin x$ is:`, ['1', 'x', 'x²', 'x³/6'], 1, 'Sine is odd.', R`$\sin x=x-\frac{x^3}{3!}+\cdots$.`, 'Easy'),
      Q('Adding more Taylor terms generally:', ['Reduces accuracy', 'Improves accuracy near the centre', 'Changes the centre', 'Has no effect'], 1, 'The polynomial matches more derivatives.', R`More terms match more derivatives at the centre, improving local accuracy.`, 'Medium'),
    ], ['Taylor series', 'Maclaurin', 'polynomial approximation'], 'Series are most accurate near their centre — check how far x is from a.'),

  topic('convergence-tests', 'calculus', 'Convergence Tests for Series',
    'Decide whether an infinite series converges using standard tests.',
    [
      R`The nth-term test: if $a_n$ does not approach 0, the series diverges. But $a_n\to0$ alone does not prove convergence.`,
      R`Geometric series $\sum ar^n$ converge when $|r|<1$. A p-series $\sum\frac1{n^p}$ converges when $p>1$.`,
      R`Ratio test: if $L=\lim\left|\frac{a_{n+1}}{a_n}\right|$, then $L<1$ gives convergence, $L>1$ divergence, and $L=1$ is inconclusive. The integral and comparison tests are also useful.`,
    ],
    [
      ['Nth-term test', R`a_n\not\to0\Rightarrow\sum a_n\text{ diverges}`, 'Quick first check.'],
      ['p-series', R`\sum\frac1{n^p}\text{ converges iff }p>1`, 'Harmonic series has p = 1.'],
      ['Ratio test', R`L<1\Rightarrow\text{converges}`, 'L > 1 diverges.'],
    ],
    [
      EX('Classify a p-series', R`Does $\sum_{n=1}^{\infty}\frac1{n^2}$ converge?`, [
        R`This is a p-series with $p=2$.`,
        'Since $2>1$, the series converges.',
      ], R`\text{Converges}`),
      EX('Apply the ratio test', R`Test $\sum_{n=0}^{\infty}\frac{1}{n!}$.`, [
        R`$a_{n+1}/a_n=\frac{n!}{(n+1)!}=\frac{1}{n+1}$.`,
        R`The limit $L=0<1$, so the series converges.`,
      ], R`\text{Converges by the ratio test}`),
    ],
    [
      Q('The harmonic series $\\sum 1/n$:', ['Converges to 1', 'Converges to e', 'Diverges', 'Converges conditionally'], 2, 'p = 1 is not greater than 1.', R`The harmonic series diverges.`, 'Easy'),
      Q(R`The p-series $\sum 1/n^p$ converges when:`, ['p < 1', 'p = 1', 'p > 1', 'p = 0'], 2, 'p must exceed 1.', R`Convergence occurs exactly when $p>1$.`, 'Easy'),
      Q(R`In the ratio test, $L<1$ means the series:`, ['Diverges', 'Converges', 'Is inconclusive', 'Is geometric'], 1, 'Terms shrink fast enough.', R`$L<1$ implies absolute convergence.`, 'Medium'),
      Q('If the terms $a_n$ do not tend to zero, the series:', ['Must converge', 'Must diverge', 'Might converge', 'Is a p-series'], 1, 'Nth-term test for divergence.', R`If $a_n\not\to0$, then $\sum a_n$ cannot converge.`, 'Easy'),
    ], ['convergence', 'p-series', 'ratio test', 'nth term test'], 'The nth-term test can only prove divergence, never convergence.'),

  topic('vector-calculus', 'advanced', 'Vector Calculus',
    'Work with scalar and vector fields through gradient, divergence, curl and line integrals.',
    [
      R`A scalar field assigns a number to each point; a vector field assigns a vector. The gradient $\nabla f$ of a scalar field points in the direction of steepest increase.`,
      R`For $\mathbf F=(P,Q,R)$, divergence is $\nabla\cdot\mathbf F=\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}$ and curl is $\nabla\times\mathbf F$.`,
      'Divergence measures net outward flow from a point; curl measures local rotation. Line integrals accumulate a field along a curve, and Green’s, Stokes’ and divergence theorems connect these ideas.',
    ],
    [
      ['Gradient', R`\nabla f=\left(f_x,f_y,f_z\right)`, 'Steepest ascent.'],
      ['Divergence', R`\nabla\cdot\mathbf F=P_x+Q_y+R_z`, 'Outward flow density.'],
      ['Curl', R`\nabla\times\mathbf F`, 'Local rotation.'],
    ],
    [
      EX('Divergence and curl', R`For $\mathbf F=(x,y,z)$, find the divergence and curl.`, [
        R`Divergence $=1+1+1=3$.`,
        'The mixed partials match, so the curl is the zero vector.',
      ], R`\nabla\cdot\mathbf F=3,\quad\nabla\times\mathbf F=\mathbf0`),
      EX('Find a gradient', R`Find $\nabla f$ for $f(x,y,z)=x^2y+z$.`, [
        R`$f_x=2xy$, $f_y=x^2$, $f_z=1$.`,
        R`So $\nabla f=(2xy,x^2,1)$.`,
      ], R`(2xy,x^2,1)`),
    ],
    [
      Q('The gradient of a scalar field points in the direction of:', ['Steepest decrease', 'Steepest increase', 'Zero change', 'The origin'], 1, 'Gradient property.', R`$\nabla f$ points toward the greatest rate of increase.`, 'Easy'),
      Q(R`The divergence of $\mathbf F=(x,y,z)$ is:`, ['0', '1', '3', 'x+y+z'], 2, 'Sum the partial derivatives.', R`$1+1+1=3$.`, 'Easy'),
      Q('Curl measures a vector field’s:', ['Total mass', 'Local rotation', 'Length', 'Average value'], 1, 'Curl interpretation.', R`Curl describes local spinning or rotation.`, 'Easy'),
      Q('A line integral integrates a field:', ['Over a volume', 'Along a curve', 'At a single point', 'Over a surface only'], 1, 'By definition of line integral.', R`A line integral accumulates values along a path.`, 'Easy'),
    ], ['vector fields', 'gradient', 'divergence', 'curl', 'line integrals'], 'Divergence is a scalar; curl is a vector.'),

  topic('laplace-transforms', 'advanced', 'Laplace Transforms',
    'Transform differential equations into algebraic equations and invert the results.',
    [
      R`The Laplace transform of $f(t)$ is $F(s)=\int_0^{\infty}e^{-st}f(t)\,dt$. It converts functions of $t$ into functions of $s$.`,
      R`Common transforms: $\mathcal L\{1\}=\frac1s$, $\mathcal L\{t\}=\frac1{s^2}$, and $\mathcal L\{t^n\}=\frac{n!}{s^{n+1}}$.`,
      R`Derivatives transform as $\mathcal L\{f'(t)\}=sF(s)-f(0)$, which is why differential equations become algebraic. The inverse transform recovers $f(t)$.`,
    ],
    [
      ['Definition', R`F(s)=\int_0^{\infty}e^{-st}f(t)\,dt`, 's is a parameter.'],
      ['Power rule', R`\mathcal L\{t^n\}=\frac{n!}{s^{n+1}}`, 'For n ≥ 0.'],
      ['Derivative', R`\mathcal L\{f'(t)\}=sF(s)-f(0)`, 'Includes initial value.'],
    ],
    [
      EX('Transform a function', R`Find $\mathcal L\{t\}$.`, [
        R`Use $\mathcal L\{t^n\}=\frac{n!}{s^{n+1}}$ with $n=1$.`,
        R`This gives $\frac{1!}{s^2}=\frac1{s^2}$.`,
      ], R`\frac1{s^2}`),
      EX('Solve a differential equation', R`Solve $y'=y$, $y(0)=1$ using Laplace transforms.`, [
        R`Transform: $sY(s)-1=Y(s)$, so $(s-1)Y=1$.`,
        R`Thus $Y=\frac1{s-1}$, whose inverse transform is $y=e^t$.`,
      ], R`y=e^t`),
    ],
    [
      Q(R`The Laplace transform is defined by:`, [R`\int_0^{\infty}e^{-st}f(t)dt`, R`\int e^{st}f(t)dt`, R`\frac{df}{dt}`, R`\sum f(t)`], 0, 'Integral definition.', R`$F(s)=\int_0^{\infty}e^{-st}f(t)\,dt$.`, 'Easy'),
      Q(R`Find $\mathcal L\{1\}$.`, ['0', R`\frac1s`, 's', '1'], 1, 'Use n = 0.', R`$\mathcal L\{1\}=1/s$.`, 'Easy'),
      Q(R`Find $\mathcal L\{t^2\}$.`, [R`\frac1{s^2}`, R`\frac2{s^3}`, R`\frac{1}{s^3}`, R`\frac{2}{s^2}`], 1, 'Use n! / s^(n+1).', R`$\mathcal L\{t^2\}=2!/s^3=2/s^3$.`, 'Medium'),
      Q('Laplace transforms are useful because they:', ['Make equations longer', 'Turn differential equations into algebraic ones', 'Only work for constants', 'Replace integration with differentiation'], 1, 'The derivative property is key.', R`Derivatives become multiplication by s, simplifying differential equations.`, 'Easy'),
    ], ['Laplace transform', 'inverse transform', 'differential equations'], 'Remember the initial value term when transforming a derivative.'),

  topic('rings-fields', 'advanced', 'Rings & Fields',
    'Understand algebraic structures with two operations, including rings, integral domains and fields.',
    [
      'A ring is a set with addition and multiplication where addition forms an abelian group, multiplication is associative, and multiplication distributes over addition. A ring with commutative multiplication is a commutative ring.',
      'A ring with a multiplicative identity 1 is a unital ring. An integral domain is a commutative ring with no zero divisors, so $ab=0$ implies $a=0$ or $b=0$.',
      'A field is a commutative ring with $1\\neq0$ in which every non-zero element has a multiplicative inverse. Examples include $\\mathbb{Q}$, $\\mathbb{R}$ and $\\mathbb{C}$.',
    ],
    [
      ['Ring', 'Addition is an abelian group; multiplication is associative and distributive.', '$\\mathbb{Z}$ is a ring.'],
      ['Integral domain', R`ab=0\Rightarrow a=0\text{ or }b=0`, 'No zero divisors.'],
      ['Field', R`a\neq0\Rightarrow \exists a^{-1}`, 'Every non-zero element invertible.'],
    ],
    [
      EX('Is Z a field?', 'Determine whether the integers form a field.', [
        '$\\mathbb{Z}$ is a commutative ring with identity 1.',
        'But 2 has no integer inverse: $\\frac12\\notin\\mathbb{Z}$.',
      ], R`\mathbb Z\text{ is a ring but not a field}`),
      EX('Compare Q and matrices', 'Classify $\\mathbb{Q}$ and $2\\times2$ matrices under usual operations.', [
        '$\\mathbb{Q}$ is a field: every non-zero rational has an inverse.',
        'Matrices form a non-commutative ring; many non-zero matrices have no inverse.',
      ], R`\mathbb Q\text{ is a field; matrices form a noncommutative ring}`),
    ],
    [
      Q('In a ring, addition must form:', ['A group', 'A field', 'A vector space', 'A semigroup'], 0, 'An abelian group to be precise.', R`Additive structure of a ring is an abelian group.`, 'Easy'),
      Q('A field requires every non-zero element to have:', ['A square root', 'A multiplicative inverse', 'A logarithm', 'A determinant'], 1, 'Division is possible except by zero.', R`Fields allow division by non-zero elements.`, 'Easy'),
      Q('The integers are not a field because:', ['Addition is not associative', '2 has no integer inverse', 'There is no zero', 'Multiplication is not closed'], 1, 'Inverses generally leave Z.', R`Only ±1 have integer multiplicative inverses.`, 'Medium'),
      Q('Matrix multiplication is generally:', ['Commutative', 'Non-commutative', 'Undefined', 'Associative only for 2×2'], 1, 'AB ≠ BA in general.', R`Matrices form a non-commutative ring under addition and multiplication.`, 'Easy'),
    ], ['ring', 'field', 'integral domain', 'abstract algebra'], 'A field is a ring where division by non-zero elements is always possible.'),

  topic('differential-geometry', 'advanced', 'Differential Geometry Intro',
    'Study curves and surfaces with calculus: curvature, arc length and tangent planes.',
    [
      R`A space curve can be written as $\mathbf r(t)=(x(t),y(t),z(t))$. Its arc length from $a$ to $b$ is $\int_a^b\|\mathbf r'(t)\|\,dt$.`,
      R`Curvature measures how quickly a curve changes direction: $\kappa=\frac{\|\mathbf r'\times\mathbf r''\|}{\|\mathbf r'\|^3}$. A circle of radius $R$ has curvature $1/R$.`,
      R`For a surface $z=f(x,y)$, the tangent plane at $(x_0,y_0,z_0)$ is $z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$.`,
    ],
    [
      ['Arc length', R`L=\int_a^b\|\mathbf r'(t)\|dt`, 'Integrate speed.'],
      ['Curvature', R`\kappa=\frac{\|\mathbf r'\times\mathbf r''\|}{\|\mathbf r'\|^3}`, 'Rate of turning.'],
      ['Tangent plane', R`z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)`, 'Linear approximation.'],
    ],
    [
      EX('Curvature of a circle', R`Find the curvature of a circle of radius 3.`, [
        R`A circle of radius $R$ has curvature $\kappa=1/R$.`,
        R`With $R=3$, $\kappa=\frac13$.`,
      ], R`\kappa=\frac13`),
      EX('Tangent plane', R`Find the tangent plane to $z=x^2+y^2$ at $(1,2,5)$.`, [
        R`$f_x=2x$ gives 2 at $x=1$; $f_y=2y$ gives 4 at $y=2$.`,
        R`Plane: $z-5=2(x-1)+4(y-2)$, so $z=2x+4y-5$.`,
      ], R`z=2x+4y-5`),
    ],
    [
      Q(R`The curvature of a circle with radius 3 is:`, ['3', R`\frac13`, '9', '1'], 1, 'Curvature is reciprocal of radius.', R`$\kappa=1/3$.`, 'Easy'),
      Q(R`The tangent plane formula uses:`, ['Only f(x,y)', 'Partial derivatives fₓ and fᵧ', 'The determinant of f', 'The integral of f'], 1, 'Linear approximation in two variables.', R`It uses the partial derivatives at the point.`, 'Easy'),
      Q(R`Arc length of a parametric curve is:`, [R`\int\|\mathbf r'(t)\|dt`, R`\int \mathbf r(t)dt`, R`\mathbf r'\times\mathbf r''`, R`\|\mathbf r(t)\|`], 0, 'Integrate the speed.', R`$L=\int_a^b\|\mathbf r'(t)\|\,dt$.`, 'Medium'),
      Q('A sphere has Gaussian curvature that is:', ['Zero', 'Positive', 'Negative', 'Undefined'], 1, 'Classical surface type.', R`A sphere has positive Gaussian curvature.`, 'Medium'),
    ], ['curvature', 'arc length', 'tangent plane', 'surfaces'], 'Curvature is large for sharply bending curves and small for gentle ones.')
];
