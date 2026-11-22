import { R, EX, Q, topic } from './core.js';

export default [
  topic('limits', 'calculus', 'Limits & Continuity',
    'Understand limits, evaluate them algebraically, and connect continuity to limits.',
    [
      R`The limit $\lim_{x\to a}f(x)=L$ means $f(x)$ approaches $L$ as $x$ approaches $a$ from either side. The function need not be defined at $a$.`,
      R`If direct substitution gives $\frac00$, factor and cancel, rationalise, or use a known limit such as $\lim_{x\to0}\frac{\sin x}{x}=1$.`,
      'A function is continuous at $a$ when $f(a)$ exists, $\\lim_{x\\to a}f(x)$ exists, and the two are equal. Polynomials and rational functions (away from zero denominators) are continuous on their domains.',
    ],
    [
      ['Definition (intuitive)', R`\lim_{x\to a}f(x)=L`, 'x gets arbitrarily close to a, but never equals a.'],
      ['Important limit', R`\lim_{x\to0}\frac{\sin x}{x}=1`, 'Valid when x is in radians.'],
      ['At infinity', R`\lim_{x\to\infty}\frac{3x^2+1}{x^2+5}=3`, 'Compare leading terms.'],
    ],
    [
      EX('Cancel a factor', R`Evaluate $\lim_{x\to2}\frac{x^2-4}{x-2}$.`, [
        'Direct substitution gives $\\frac00$, so factor the numerator: $x^2-4=(x-2)(x+2)$.',
        R`Cancel $x-2$: the expression equals $x+2$ for $x\neq2$.`,
        'Now substitute: $2+2=4$.',
      ], R`4`),
      EX('Limit at infinity', R`Evaluate $\lim_{x\to\infty}\frac{3x^2+1}{x^2+5}$.`, [
        'Divide numerator and denominator by $x^2$.',
        R`We get $\frac{3+1/x^2}{1+5/x^2}$.`,
        'As $x\\to\\infty$, the $1/x^2$ terms go to 0, leaving 3.',
      ], R`3`),
    ],
    [
      Q(R`Evaluate $\lim_{x\to3}(2x+1)$.`, ['5', '7', '6', 'Does not exist'], 1, 'Polynomials allow direct substitution.', R`$2(3)+1=7$.`, 'Easy'),
      Q(R`Evaluate $\lim_{x\to0}\frac{\sin x}{x}$.`, ['0', '1', '∞', 'Undefined'], 1, 'This is a standard limit (radians).', R`$\lim_{x\to0}\frac{\sin x}{x}=1$.`, 'Easy'),
      Q(R`Evaluate $\lim_{x\to2}\frac{x^2-4}{x-2}$.`, ['0', '2', '4', '∞'], 2, 'Factor and cancel $x-2$.', R`$\frac{(x-2)(x+2)}{x-2}=x+2\to4$.`, 'Medium'),
      Q(R`Evaluate $\lim_{x\to\infty}\frac{5x^3-x}{2x^3+7}$.`, ['0', R`\frac52`, '∞', '5'], 1, 'Compare leading coefficients of equal-degree polynomials.', R`Both numerator and denominator have degree 3, so the limit is $\frac52$.`, 'Medium'),
    ], ['limit', 'continuity', 'indeterminate form'], 'A 0/0 result is not an answer — it means more algebra is needed.'),

  topic('derivatives', 'calculus', 'Derivatives & Rates of Change',
    'Understand the derivative as an instantaneous rate of change and a tangent slope.',
    [
      R`The derivative at $x=a$ is $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$, the limiting slope of secant lines as they become a tangent.`,
      'The derivative of a constant is 0 (constants do not change). For a linear function $f(x)=mx+c$, the derivative is the constant slope $m$.',
      R`If $s(t)$ is position, $s'(t)$ is velocity and $s''(t)$ is acceleration. Derivatives give instantaneous rates, while averages use differences over intervals.`,
    ],
    [
      ['Definition', R`f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}`, 'Limit of the difference quotient.'],
      ['Tangent line', R`y-f(a)=f'(a)(x-a)`, 'Point-slope form with slope $f\'(a)$.'],
    ],
    [
      EX('Derivative from first principles', R`Use the definition to find $f'(3)$ for $f(x)=x^2$.`, [
        R`$f'(3)=\lim_{h\to0}\frac{(3+h)^2-9}{h}$.`,
        R`Expand: $\frac{9+6h+h^2-9}{h}=\frac{6h+h^2}{h}=6+h$.`,
        'Let $h\\to0$: the derivative is 6.',
      ], R`f'(3)=6`),
      EX('Interpret a derivative', 'The position of a particle is $s(t)=t^2+2t$. Find its velocity at $t=3$.', [
        'Velocity is the derivative of position: $v(t)=s\'(t)=2t+2$.',
        'Evaluate at $t=3$: $v(3)=2(3)+2=8$.',
        'Units are distance per unit time.',
      ], R`v(3)=8`),
    ],
    [
      Q(R`What is $f'(x)$ for the constant function $f(x)=5$?`, ['0', '5', '1', 'Undefined'], 0, 'A constant does not change.', R`The derivative of any constant is 0.`, 'Easy'),
      Q(R`If $f(x)=3x+2$, what is $f'(x)$?`, ['0', '2', '3', '3x'], 2, 'The derivative of a linear function is its slope.', R`The slope of $3x+2$ is 3, so $f'(x)=3$.`, 'Easy'),
      Q(R`Using the definition, find $f'(2)$ for $f(x)=x^2$.`, ['2', '4', '6', '8'], 1, 'Use $\\lim_{h\\to0}\\frac{(2+h)^2-4}{h}=4+h$.', R`The limit is 4, so $f'(2)=4$.`, 'Medium'),
      Q(R`The tangent to $y=f(x)$ at $x=1$ has slope 3 and passes through $(1,2)$. What is its equation?`, ['y=3x−1', 'y=3x+1', 'y=x+2', 'y=2x+3'], 0, 'Use point-slope form $y-2=3(x-1)$.', R`$y-2=3x-3$, so $y=3x-1$.`, 'Medium'),
    ], ['derivative', 'tangent', 'velocity', 'difference quotient'], 'The derivative is a limit — not merely a formula to memorise.'),

  topic('differentiation-rules', 'calculus', 'Differentiation Rules',
    'Apply power, product, quotient and chain rules efficiently.',
    [
      R`Power rule: $\frac{d}{dx}x^n=nx^{n-1}$. Constant multiples and sums are differentiated term by term: $\frac{d}{dx}[cf(x)+g(x)]=cf'(x)+g'(x)$.`,
      R`Product rule: $(uv)'=u'v+uv'$. Quotient rule: $\left(\frac{u}{v}\right)'=\frac{u'v-uv'}{v^2}$.`,
      R`Chain rule: if $y=f(g(x))$, then $\frac{dy}{dx}=f'(g(x))\,g'(x)$ — differentiate the outside, then multiply by the derivative of the inside.`,
    ],
    [
      ['Power rule', R`\frac{d}{dx}x^n=nx^{n-1}`, 'Works for any real n.'],
      ['Product rule', R`(uv)'=u'v+uv'`, 'Not simply u′v′.'],
      ['Chain rule', R`\frac{d}{dx}f(g(x))=f'(g(x))g'(x)`, 'Outside derivative × inside derivative.'],
    ],
    [
      EX('Polynomial derivative', R`Differentiate $f(x)=3x^4-2x^2+7$.`, [
        R`$\frac{d}{dx}(3x^4)=12x^3$.`,
        R`$\frac{d}{dx}(-2x^2)=-4x$.`,
        R`The derivative of the constant 7 is 0, so $f'(x)=12x^3-4x$.`,
      ], R`f'(x)=12x^3-4x`),
      EX('Chain rule', R`Differentiate $y=(3x+1)^5$.`, [
        'Outer function: $u^5$ with derivative $5u^4$.',
        'Inner function: $u=3x+1$ with derivative 3.',
        R`Multiply: $\frac{dy}{dx}=5(3x+1)^4\cdot3=15(3x+1)^4$.`,
      ], R`15(3x+1)^4`),
    ],
    [
      Q(R`Find $\frac{d}{dx}x^7$.`, ['7x⁶', 'x⁶', '7x⁷', '6x⁶'], 0, 'Power rule: bring down 7 and reduce the exponent by 1.', R`$\frac{d}{dx}x^7=7x^6$.`, 'Easy'),
      Q(R`Differentiate $(2x+1)^3$.`, ['3(2x+1)²', '6(2x+1)²', '2(2x+1)³', '3(2x+1)³'], 1, 'Chain rule: multiply by the derivative of $2x+1$, which is 2.', R`$3(2x+1)^2\cdot2=6(2x+1)^2$.`, 'Easy'),
      Q(R`Find the derivative of $x e^x$.`, ['eˣ', 'x eˣ', 'eˣ(1+x)', 'eˣ(1−x)'], 2, 'Product rule with $u=x$, $v=e^x$.', R`$(xe^x)'=1\cdot e^x+x e^x=e^x(1+x)$.`, 'Medium'),
      Q(R`Differentiate $\ln x$.`, [R`\frac{1}{x}`, 'x', R`e^x`, R`-\frac{1}{x^2}`], 0, 'Standard derivative of the natural logarithm.', R`$\frac{d}{dx}\ln x=\frac{1}{x}$ for $x>0$.`, 'Medium'),
    ], ['power rule', 'product rule', 'quotient rule', 'chain rule'], 'The chain rule is the most frequently used rule in calculus — practise recognising the inner function.'),

  topic('derivative-applications', 'calculus', 'Applications of Derivatives',
    'Locate extrema, determine increasing and decreasing intervals, and solve optimisation problems.',
    [
      'A critical point occurs where $f\'(x)=0$ or $f\'(x)$ is undefined. If $f\'(x)>0$ the function is increasing; if $f\'(x)<0$ it is decreasing.',
      R`First derivative test: if $f'$ changes from positive to negative at $c$, $f(c)$ is a local maximum; if negative to positive, it is a local minimum. The second derivative test uses $f''(c)$: positive means minimum, negative means maximum.`,
      'For optimisation, write the quantity to optimise as a function of one variable, find critical points, then check endpoints or use a derivative test.',
    ],
    [
      ['Critical point', R`f'(c)=0\ \text{or}\ f'(c)\ \text{undefined}`, 'Candidate for a maximum or minimum.'],
      ['Second derivative test', R`f''(c)>0\Rightarrow\text{minimum};\quad f''(c)<0\Rightarrow\text{maximum}`, 'Use only when $f\'(c)=0$.'],
    ],
    [
      EX('Classify critical points', R`Find and classify the critical points of $f(x)=x^3-3x^2+2$.`, [
        R`$f'(x)=3x^2-6x=3x(x-2)$, so $f'(x)=0$ at $x=0$ and $x=2$.`,
        R`$f''(x)=6x-6$. At $x=0$, $f''=-6<0$: local maximum.`,
        'At $x=2$, $f\'\'=6>0$: local minimum.',
      ], R`x=0\text{ (max)},\quad x=2\text{ (min)}`),
      EX('Optimisation', 'A rectangle has perimeter 20. Find the dimensions that maximise its area.', [
        'Let sides be $x$ and $y$. Then $2x+2y=20$, so $y=10-x$.',
        'Area: $A=x(10-x)=10x-x^2$.',
        R`$A'=10-2x=0\Rightarrow x=5$, so $y=5$ and $A=25$.`,
      ], R`5\times5,\ \text{maximum area }25`),
    ],
    [
      Q(R`If $f'(x)=3x^2-12$, at which values is $x$ a critical point?`, ['x=2 only', 'x=±2', 'x=0', 'x=±4'], 1, 'Set $3x^2-12=0$.', R`$x^2=4$, so $x=\pm2$.`, 'Easy'),
      Q(R`Find the minimum value of $f(x)=x^2-4x$.`, ['−4', '0', '4', 'No minimum'], 0, 'Vertex occurs at $x=2$.', R`$f(2)=4-8=-4$; equivalently $f'(x)=2x-4=0$ gives $x=2$.`, 'Easy'),
      Q('If $f\'(x)>0$ on an interval, then $f$ is:', ['Decreasing', 'Constant', 'Increasing', 'Undefined'], 2, 'Positive derivative means positive slope.', R`A positive derivative means the function is increasing on that interval.`, 'Easy'),
      Q(R`For $f(x)=x^3$, what happens at $x=0$?`, ['Local maximum', 'Local minimum', 'Neither extremum', 'Undefined point'], 2, '$f\'(0)=0$ but check the sign either side.', R`$f'(x)=3x^2\ge0$ on both sides, so the derivative does not change sign: $x=0$ is not a local extremum (it is an inflection point).`, 'Hard'),
    ], ['critical points', 'maxima and minima', 'optimisation', 'second derivative'], 'Always check the sign change, not just $f\'(c)=0$.'),

  topic('integrals', 'calculus', 'Integrals & the Fundamental Theorem',
    'Find antiderivatives and evaluate definite integrals using the Fundamental Theorem of Calculus.',
    [
      R`An indefinite integral $\int f(x)\,dx=F(x)+C$ gives all antiderivatives of $f$: functions whose derivative is $f$. The constant $C$ is essential.`,
      R`The Fundamental Theorem of Calculus says $\int_a^b f(x)\,dx=F(b)-F(a)$ when $F'=f$. This connects area under a curve with antiderivatives.`,
      R`Power rule for integration: $\int x^n\,dx=\frac{x^{n+1}}{n+1}+C$ for $n\neq-1$. For $n=-1$, $\int\frac{1}{x}\,dx=\ln|x|+C$.`,
    ],
    [
      ['Power rule', R`\int x^n dx=\frac{x^{n+1}}{n+1}+C\quad(n\neq-1)`, 'Add 1 to the exponent, divide by the new exponent.'],
      ['Fundamental Theorem', R`\int_a^b f(x)dx=F(b)-F(a)`, 'F is any antiderivative of f.'],
    ],
    [
      EX('Indefinite integral', R`Evaluate $\int(3x^2+2x)\,dx$.`, [
        R`$\int3x^2\,dx=x^3$.`,
        R`$\int2x\,dx=x^2$.`,
        R`Combine: $x^3+x^2+C$.`,
      ], R`x^3+x^2+C`),
      EX('Definite integral', R`Evaluate $\int_1^3 2x\,dx$.`, [
        'An antiderivative of $2x$ is $x^2$.',
        R`$\int_1^3 2x\,dx=[x^2]_1^3=3^2-1^2$.`,
        'Compute: $9-1=8$.',
      ], R`8`),
    ],
    [
      Q(R`Evaluate $\int x^4\,dx$.`, [R`\frac{x^5}{5}+C`, '4x³+C', R`\frac{x^4}{4}+C`, 'x⁵+C'], 0, 'Add one to the exponent and divide.', R`$\int x^4dx=\frac{x^5}{5}+C$.`, 'Easy'),
      Q(R`Evaluate $\int_0^2 3x^2\,dx$.`, ['4', '8', '12', '24'], 1, 'Antiderivative is $x^3$.', R`$[x^3]_0^2=8-0=8$.`, 'Easy'),
      Q(R`Evaluate $\int \frac{1}{x}\,dx$.`, ['ln x + C', 'ln|x| + C', '−1/x² + C', 'x⁰/0 + C'], 1, 'The power rule fails for $n=-1$.', R`$\int\frac1x dx=\ln|x|+C$, defined for $x\neq0$.`, 'Medium'),
      Q('The Fundamental Theorem of Calculus allows us to evaluate a definite integral by:', ['Differentiating the integrand', 'Finding an antiderivative and subtracting endpoint values', 'Approximating with rectangles only', 'Solving a differential equation'], 1, 'Recall $\\int_a^b f=F(b)-F(a)$.', R`If $F'=f$, then $\int_a^b f(x)\,dx=F(b)-F(a)$.`, 'Medium'),
    ], ['antiderivative', 'definite integral', 'FTC'], 'For definite integrals, the constant C cancels out, so it may be omitted during computation.'),

  topic('integration-techniques', 'calculus', 'Integration Techniques',
    'Use substitution, integration by parts and partial fractions to integrate a wider range of functions.',
    [
      R`Substitution reverses the chain rule: if $u=g(x)$ and $du=g'(x)dx$, rewrite the integral in terms of $u$. Look for a function whose derivative also appears in the integrand.`,
      R`Integration by parts reverses the product rule: $\int u\,dv=uv-\int v\,du$. Choose $u$ using the LIATE guideline (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential).`,
      R`Partial fractions split a rational expression, for example $\frac{1}{x(x+1)}=\frac{1}{x}-\frac{1}{x+1}$, making each term easy to integrate.`,
    ],
    [
      ['Substitution', R`\int f(g(x))g'(x)dx=\int f(u)du`, 'Let $u=g(x)$.'],
      ['Integration by parts', R`\int u\,dv=uv-\int v\,du`, 'Choose u and dv carefully.'],
    ],
    [
      EX('Substitution', R`Evaluate $\int 2x\cos(x^2)\,dx$.`, [
        R`Let $u=x^2$, so $du=2x\,dx$.`,
        R`The integral becomes $\int\cos u\,du=\sin u+C$.`,
        'Substitute back: $\\sin(x^2)+C$.',
      ], R`\sin(x^2)+C`),
      EX('Integration by parts', R`Evaluate $\int x e^x\,dx$.`, [
        'Choose $u=x$ (so $du=dx$) and $dv=e^xdx$ (so $v=e^x$).',
        R`Apply $uv-\int v\,du=xe^x-\int e^xdx$.`,
        R`Result: $xe^x-e^x+C=(x-1)e^x+C$.`,
      ], R`(x-1)e^x+C`),
    ],
    [
      Q(R`Evaluate $\int 2x(x^2+1)^3\,dx$.`, [R`\frac{(x^2+1)^4}{4}+C`, '(x²+1)⁴+C', R`\frac{(x^2+1)^3}{3}+C`, '2(x²+1)⁴+C'], 0, 'Let $u=x^2+1$, so $du=2x\\,dx$.', R`$\int u^3du=\frac{u^4}{4}+C=\frac{(x^2+1)^4}{4}+C$.`, 'Medium'),
      Q(R`Using parts, evaluate $\int x\ln x\,dx$.`, [R`\frac{x^2}{2}\ln x-\frac{x^2}{4}+C`, R`x\ln x-x+C`, R`\frac{x^2}{2}\ln x+C`, R`x^2\ln x-\frac{x^2}{2}+C`], 0, 'Let $u=\\ln x$ and $dv=x\\,dx$.', R`$uv-\int v\,du=\frac{x^2}{2}\ln x-\int\frac{x}{2}dx=\frac{x^2}{2}\ln x-\frac{x^2}{4}+C$.`, 'Hard'),
      Q('The integration by parts formula is:', ['∫u dv = u′v − ∫v du', '∫u dv = uv − ∫v du', '∫u dv = uv + ∫v du', '∫u dv = u v′ − ∫u′v dx'], 1, 'It reverses the product rule.', R`$\int u\,dv=uv-\int v\,du$.`, 'Easy'),
      Q(R`Decompose $\frac{1}{x(x+1)}$ into partial fractions.`, [R`\frac{1}{x}+\frac{1}{x+1}`, R`\frac{1}{x}-\frac{1}{x+1}`, R`\frac{2}{x}-\frac{1}{x+1}`, R`\frac{1}{x^2}+\frac{1}{x}`], 1, 'Set $\\frac{A}{x}+\\frac{B}{x+1}$ and solve for A and B.', R`$1=A(x+1)+Bx$; setting $x=0$ gives $A=1$, $x=-1$ gives $B=-1$.`, 'Hard'),
    ], ['substitution', 'integration by parts', 'partial fractions'], 'If substitution does not simplify the integral, try integration by parts next.'),

  topic('integral-applications', 'calculus', 'Applications of Integrals',
    'Use integrals for areas, average values, displacement and volumes of solids.',
    [
      R`The area under $y=f(x)$ from $a$ to $b$ (when $f\ge0$) is $\int_a^b f(x)\,dx$. Between two curves $f$ above $g$, the area is $\int_a^b [f(x)-g(x)]\,dx$.`,
      R`The average value of $f$ on $[a,b]$ is $\frac{1}{b-a}\int_a^b f(x)\,dx$. If $v(t)$ is velocity, displacement is $\int_a^b v(t)\,dt$, while total distance integrates $|v(t)|$.`,
      R`Volume by disks about the x-axis: $V=\pi\int_a^b [f(x)]^2\,dx$.`,
    ],
    [
      ['Area between curves', R`A=\int_a^b\big(f(x)-g(x)\big)dx`, 'Upper function minus lower function.'],
      ['Average value', R`f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)dx`, 'Divide by interval length.'],
      ['Displacement', R`s(b)-s(a)=\int_a^b v(t)dt`, 'Signed area under velocity.'],
    ],
    [
      EX('Area under a line', R`Find the area under $y=2x$ from $x=0$ to $x=3$.`, [
        R`$A=\int_0^3 2x\,dx=[x^2]_0^3$.`,
        'Evaluate: $9-0=9$. (This is also a triangle with base 3 and height 6: $\\frac12(3)(6)=9$.)',
      ], R`9`),
      EX('Area between curves', R`Find the area between $y=x$ and $y=x^2$ from 0 to 1.`, [
        'On $[0,1]$, $x\\ge x^2$, so integrate $x-x^2$.',
        R`$A=\int_0^1(x-x^2)dx=\left[\frac{x^2}{2}-\frac{x^3}{3}\right]_0^1$.`,
        R`Result: $\frac12-\frac13=\frac16$.`,
      ], R`\frac16`),
    ],
    [
      Q(R`Find the area under $y=2x$ from 0 to 2.`, ['2', '4', '8', '16'], 1, '$[x^2]_0^2=4$.', R`$\int_0^2 2x\,dx=[x^2]_0^2=4$.`, 'Easy'),
      Q(R`Find the area between $y=x$ and $y=x^2$ on $[0,1]$.`, [R`\frac12`, R`\frac16`, R`\frac13`, '1'], 1, 'Integrate $x-x^2$.', R`$\frac12-\frac13=\frac16$.`, 'Medium'),
      Q(R`A particle has velocity $v(t)=t$ for $0\le t\le3$. Find its displacement.`, ['3', '4.5', '9', '13.5'], 1, 'Integrate t from 0 to 3.', R`$\int_0^3 t\,dt=[t^2/2]_0^3=9/2=4.5$.`, 'Medium'),
      Q(R`Find the average value of $f(x)=x$ on $[0,4]$.`, ['1', '2', '4', '8'], 1, 'Use $\\frac{1}{4}\\int_0^4 x\\,dx$.', R`$f_{\text{avg}}=\frac14\left[\frac{x^2}{2}\right]_0^4=\frac14(8)=2$.`, 'Medium'),
    ], ['definite integral', 'area', 'average value', 'displacement'], 'Sketch the curves to confirm which function is on top before subtracting.'),

  topic('differential-equations', 'calculus', 'Differential Equations',
    'Solve first-order separable equations and model exponential growth and decay.',
    [
      R`A differential equation relates a function to its derivatives. The order is the highest derivative present. A solution is a function, not a single number.`,
      R`Separable equations can be written as $\frac{dy}{dx}=f(x)g(y)$; separate variables: $\frac{1}{g(y)}dy=f(x)dx$, then integrate both sides and add a constant.`,
      R`The equation $\frac{dy}{dx}=ky$ has solution $y=Ce^{kx}$. With $y(0)=y_0$, we get $y=y_0e^{kx}$. Positive $k$ means growth; negative $k$ means decay.`,
    ],
    [
      ['Separable form', R`\frac{dy}{dx}=f(x)g(y)\ \Rightarrow\ \int\frac{dy}{g(y)}=\int f(x)dx`, 'Collect y terms with dy.'],
      ['Exponential model', R`y=Ce^{kt}`, 'Used for populations, radioactive decay and cooling.'],
    ],
    [
      EX('Separate and integrate', R`Solve $\frac{dy}{dx}=2x$.`, [
        R`Write $dy=2x\,dx$.`,
        R`Integrate: $y=x^2+C$.`,
        'Check by differentiating: $y\'=2x$.',
      ], R`y=x^2+C`),
      EX('Initial condition', R`Solve $\frac{dy}{dx}=3y$ with $y(0)=2$.`, [
        R`The general solution is $y=Ce^{3x}$.`,
        'Apply the condition: $y(0)=C=2$.',
        R`Particular solution: $y=2e^{3x}$.`,
      ], R`y=2e^{3x}`),
    ],
    [
      Q(R`Solve $\frac{dy}{dx}=3y$.`, ['y=3eˣ', 'y=Ce^{3x}', 'y=3x+C', 'y=e^{3x}+C'], 1, 'This is the standard exponential equation with k = 3.', R`The general solution is $y=Ce^{3x}$.`, 'Easy'),
      Q(R`Solve $\frac{dy}{dx}=\frac{x}{y}$.`, ['y=x+C', R`y^2=x^2+C`, R`y=\frac{x^2}{2}+C`, R`y=\frac{x^2}{2}`], 1, 'Separate: $y\\,dy=x\\,dx$.', R`Integrating gives $\frac{y^2}{2}=\frac{x^2}{2}+C$, which can be rewritten as $y^2=x^2+C'$.`, 'Medium'),
      Q('The order of the differential equation $y\'\' + 2y\' + y = 0$ is:', ['0', '1', '2', '3'], 2, 'Look for the highest derivative.', R`The highest derivative is $y''$, so the equation is second order.`, 'Easy'),
      Q(R`A population satisfies $P(t)=100e^{0.05t}$. What is the growth rate constant?`, ['0.05', '5', '100', '0.5'], 0, 'Compare with $P_0e^{kt}$.', R`In $P=P_0e^{kt}$, the constant $k=0.05$ (5% continuous growth).`, 'Medium'),
    ], ['separable equations', 'initial conditions', 'exponential growth'], 'Always check a proposed solution by differentiating it.'),
];
