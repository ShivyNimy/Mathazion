import { R, EX, Q, topic } from './core.js';

export default [
  topic('complex-numbers', 'advanced', 'Complex Numbers',
    'Work with $i$, perform arithmetic on complex numbers, and find conjugates and moduli.',
    [
      R`The imaginary unit satisfies $i^2=-1$. A complex number $z=a+bi$ has real part $a$ and imaginary part $b$. Complex numbers extend the reals so every polynomial has a root.`,
      'Add and subtract by combining real and imaginary parts. Multiply using the distributive law and replace $i^2$ with $−1$. Divide by multiplying numerator and denominator by the conjugate.',
      R`The conjugate of $a+bi$ is $a-bi$, and the modulus is $|z|=\sqrt{a^2+b^2}$. The polar form is $z=r(\cos\theta+i\sin\theta)$.`,
    ],
    [
      ['Imaginary unit', R`i^2=-1`, 'Hence i³ = −i and i⁴ = 1.'],
      ['Modulus', R`|a+bi|=\sqrt{a^2+b^2}`, 'Distance from the origin in the complex plane.'],
      ['Conjugate', R`\overline{a+bi}=a-bi`, 'Product with original gives a² + b².'],
    ],
    [
      EX('Multiply complex numbers', R`Compute $(2+i)(3-i)$.`, [
        'Expand: $6-2i+3i-i^2$.',
        'Replace $i^2=-1$: $6+i+1$.',
        'Combine: $7+i$.',
      ], R`7+i`),
      EX('Find a modulus', R`Find $|3+4i|$.`, [
        R`$|3+4i|=\sqrt{3^2+4^2}=\sqrt{9+16}$.`,
        R`$\sqrt{25}=5$.`,
      ], R`5`),
    ],
    [
      Q('What is the value of $i^2$?', ['1', '−1', 'i', '0'], 1, 'By definition of the imaginary unit.', R`$i^2=-1$.`, 'Easy'),
      Q(R`Expand $(1+i)^2$.`, ['1', '2i', '1 + 2i', '−2i'], 1, '$1 + 2i + i² = 1 + 2i − 1$.', R`$(1+i)^2=2i$.`, 'Easy'),
      Q(R`Find the conjugate of $3-4i$.`, ['−3−4i', '3+4i', '−3+4i', '4−3i'], 1, 'Change the sign of the imaginary part.', R`$\overline{3-4i}=3+4i$.`, 'Easy'),
      Q(R`Find $|5-12i|$.`, ['7', '13', '17', '√119'], 1, 'Square and add 25 + 144.', R`$|5-12i|=\sqrt{25+144}=13$.`, 'Medium'),
    ], ['imaginary unit', 'complex arithmetic', 'modulus', 'conjugate'], 'Treat i like a variable during expansion, then simplify $i^2$ to −1.'),

  topic('polar-parametric', 'advanced', 'Polar & Parametric Equations',
    'Convert between Cartesian and polar coordinates and work with parametrically defined curves.',
    [
      R`A polar point is $(r,\theta)$ where $r$ is the distance from the origin and $\theta$ is the angle from the positive x-axis. The conversions are $x=r\cos\theta$, $y=r\sin\theta$, $r=\sqrt{x^2+y^2}$ and $\tan\theta=\frac{y}{x}$.`,
      'In parametric equations, both coordinates depend on a third variable $t$ (a parameter): $x=f(t)$, $y=g(t)$. Eliminating $t$ often reveals a familiar Cartesian curve.',
      R`For parametric curves, $\frac{dy}{dx}=\frac{dy/dt}{dx/dt}$ when $dx/dt\neq0$.`,
    ],
    [
      ['Cartesian from polar', R`x=r\cos\theta,\quad y=r\sin\theta`, 'Use trigonometry on the radius.'],
      ['Polar radius', R`r=\sqrt{x^2+y^2}`, 'Always non-negative.'],
      ['Parametric derivative', R`\frac{dy}{dx}=\frac{g'(t)}{f'(t)}`, 'Chain rule.'],
    ],
    [
      EX('Polar to Cartesian', R`Convert $(r,\theta)=\left(2,\frac{\pi}{3}\right)$ to Cartesian coordinates.`, [
        R`$x=2\cos\frac{\pi}{3}=2\cdot\frac12=1$.`,
        R`$y=2\sin\frac{\pi}{3}=2\cdot\frac{\sqrt3}{2}=\sqrt3$.`,
      ], R`(1,\sqrt3)`),
      EX('Eliminate the parameter', R`A curve is given by $x=t^2$, $y=t$. Identify its Cartesian equation.`, [
        'From $y=t$, substitute into $x=t^2$.',
        'This gives $x=y^2$, a parabola opening to the right.',
      ], R`x=y^2`),
    ],
    [
      Q('In polar coordinates, $x$ equals:', ['r sin θ', 'r cos θ', 'r tan θ', 'r²'], 1, 'Adjacent over hypotenuse.', R`$x=r\cos\theta$.`, 'Easy'),
      Q(R`The polar point $(3,\frac{\pi}{2})$ in Cartesian form is:`, ['(3,0)', '(0,3)', '(0,−3)', '(−3,0)'], 1, 'Angle π/2 points straight up.', R`$x=3\cos(\pi/2)=0$, $y=3\sin(\pi/2)=3$.`, 'Easy'),
      Q(R`The polar form of the Cartesian point $(1,1)$ has $r=$:`, ['1', R`\sqrt2`, '2', R`\frac{\sqrt2}{2}`], 1, 'Use $r=\\sqrt{x^2+y^2}$.', R`$r=\sqrt{1+1}=\sqrt2$ (with $\theta=\pi/4$).`, 'Easy'),
      Q(R`If $x=t^2$ and $y=t^3$, find $\frac{dy}{dx}$.`, [R`\frac32 t`, R`\frac{2}{3t}`, R`3t^2`, '2t'], 0, 'Divide $dy/dt$ by $dx/dt$.', R`$\frac{dy}{dx}=\frac{3t^2}{2t}=\frac32t$ for $t\neq0$.`, 'Medium'),
    ], ['polar coordinates', 'parametric equations', 'conversion'], 'Sketch a rough plot to check that your converted point lies in the right quadrant.'),

  topic('conic-sections', 'advanced', 'Conic Sections',
    'Recognise and work with circles, parabolas, ellipses and hyperbolas from their equations.',
    [
      R`Circle: $(x-h)^2+(y-k)^2=r^2$ has centre $(h,k)$ and radius $r$. Parabola: $y^2=4ax$ opens right with focus $(a,0)$ and directrix $x=-a$.`,
      R`Ellipse: $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ has semi-axes $a$ and $b$; if $a>b$, the major axis has length $2a$. Hyperbola: $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ has asymptotes $y=\pm\frac{b}{a}x$.`,
      'A conic is the locus of points whose distance from a focus bears a fixed ratio (eccentricity) to the distance from a directrix: circle e = 0, ellipse 0 < e < 1, parabola e = 1, hyperbola e > 1.',
    ],
    [
      ['Circle', R`(x-h)^2+(y-k)^2=r^2`, 'Centre (h, k), radius r.'],
      ['Parabola', R`y^2=4ax`, 'Focus (a, 0).'],
      ['Ellipse', R`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1`, 'Semi-axes a and b.'],
    ],
    [
      EX('Read a circle', R`Find the centre and radius of $(x-1)^2+(y+2)^2=9$.`, [
        'Compare with $(x-h)^2+(y-k)^2=r^2$.',
        'Here $h=1$, $k=-2$ and $r^2=9$.',
        'Centre $(1,-2)$ and radius 3.',
      ], R`\text{Centre }(1,-2),\quad r=3`),
      EX('Parabola focus', R`Find the focus of $y^2=8x$.`, [
        R`Compare with $y^2=4ax$: $4a=8$, so $a=2$.`,
        'The focus is $(a,0)=(2,0)$.',
      ], R`(2,0)`),
    ],
    [
      Q(R`Find the radius of $x^2+y^2=25$.`, ['5', '25', '12.5', '625'], 0, 'The right side is r².', R`$r^2=25$, so $r=5$.`, 'Easy'),
      Q(R`Find the focus of $y^2=12x$.`, ['(3,0)', '(6,0)', '(12,0)', '(0,3)'], 0, '4a = 12, so a = 3.', R`$a=3$, so the focus is $(3,0)$.`, 'Easy'),
      Q(R`For the ellipse $\frac{x^2}{25}+\frac{y^2}{9}=1$, what is the length of the major axis?`, ['5', '9', '10', '25'], 2, 'a = 5, so the major axis is 2a.', R`The semi-major axis is 5, so the major axis is 10.`, 'Medium'),
      Q(R`The asymptotes of $\frac{x^2}{9}-\frac{y^2}{4}=1$ are:`, [R`y=\pm\frac23x`, R`y=\pm\frac32x`, 'y = ±6x', 'y = ±2x'], 0, 'For a hyperbola, y = ±(b/a)x.', R`Here $a=3$, $b=2$, so $y=\pm\frac23x$.`, 'Medium'),
    ], ['circle', 'parabola', 'ellipse', 'hyperbola', 'focus'], 'Complete the square to identify a conic when the equation is not in standard form.'),

  topic('infinite-series', 'advanced', 'Sequences & Infinite Series',
    'Work with arithmetic and geometric sequences, partial sums and convergence of series.',
    [
      R`An arithmetic sequence has constant difference $d$: $a_n=a_1+(n-1)d$, and $S_n=\frac n2(a_1+a_n)$. A geometric sequence has constant ratio $r$: $a_n=a_1r^{n-1}$.`,
      R`A geometric series converges when $|r|<1$, with $\sum_{n=0}^{\infty}ar^n=\frac{a}{1-r}$. If $|r|\ge1$, the series diverges (except for the trivial zero series).`,
      R`The harmonic series $\sum\frac1n$ diverges even though its terms tend to zero. The nth-term test says: if $a_n\not\to0$, the series diverges; but $a_n\to0$ alone does not guarantee convergence.`,
    ],
    [
      ['Arithmetic sum', R`S_n=\frac n2(a_1+a_n)`, 'Average of first and last times n.'],
      ['Geometric sum (finite)', R`S_n=a\frac{1-r^n}{1-r}`, 'For r ≠ 1.'],
      ['Geometric sum (infinite)', R`S_\infty=\frac{a}{1-r}`, 'Only when |r| < 1.'],
    ],
    [
      EX('Infinite geometric series', R`Evaluate $\sum_{n=0}^{\infty}\left(\frac12\right)^n$.`, [
        'Here $a=1$ and $r=\\frac12$, so $|r|<1$ and the series converges.',
        R`$S=\frac{a}{1-r}=\frac{1}{1-1/2}=2$.`,
      ], R`2`),
      EX('Arithmetic sum', R`Find $3+7+11+\cdots$ to 10 terms.`, [
        R`$a_1=3$, $d=4$, so $a_{10}=3+9(4)=39$.`,
        R`$S_{10}=\frac{10}{2}(3+39)=5(42)=210$.`,
      ], R`210`),
    ],
    [
      Q(R`Evaluate $\sum_{n=1}^{\infty}\left(\frac13\right)^n$.`, [R`\frac13`, R`\frac12`, '1', R`\frac32`], 1, 'First term is 1/3 and ratio is 1/3.', R`$S=\frac{1/3}{1-1/3}=\frac12$.`, 'Medium'),
      Q('Find the 5th term of the geometric sequence 2, 6, 18, ...', ['54', '81', '162', '486'], 2, 'Ratio is 3; use $a_5 = 2·3^4$.', R`$a_5=2\times3^4=162$.`, 'Easy'),
      Q('The harmonic series $\\sum 1/n$:', ['Converges to 1', 'Converges to e', 'Diverges', 'Converges conditionally'], 2, 'Partial sums grow without bound, very slowly.', R`The harmonic series diverges, despite its terms approaching zero.`, 'Medium'),
      Q(R`For which r does $\sum_{n=0}^{\infty}ar^n$ converge?`, ['|r| < 1', '|r| ≤ 1', 'r > 0', 'r must be an integer'], 0, 'The ratio must be strictly between −1 and 1.', R`An infinite geometric series converges exactly when $|r|<1$.`, 'Easy'),
    ], ['arithmetic sequence', 'geometric series', 'convergence', 'partial sums'], 'Always check $|r|<1$ before using the infinite geometric sum formula.'),

  topic('multivariable-calculus', 'advanced', 'Multivariable Calculus',
    'Take partial derivatives, compute gradients and evaluate double integrals.',
    [
      R`For $f(x,y)$, the partial derivative $\frac{\partial f}{\partial x}$ differentiates with respect to x while treating y as a constant, and similarly for y.`,
      R`The gradient $\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$ points in the direction of steepest increase, and its magnitude gives the maximum rate of change.`,
      R`A double integral $\int_a^b\int_c^d f(x,y)\,dy\,dx$ is evaluated one variable at a time, working from the inside out.`,
    ],
    [
      ['Partial derivative', R`\frac{\partial}{\partial x}(x^2y^3)=2xy^3`, 'Treat y as constant.'],
      ['Gradient', R`\nabla f=\left(f_x,f_y\right)`, 'Direction of steepest ascent.'],
      ['Double integral', R`\int_a^b\int_c^d f(x,y)\,dy\,dx`, 'Integrate inner variable first.'],
    ],
    [
      EX('Partial derivatives', R`If $f(x,y)=x^2y+3y^2$, find $f_x$ and $f_y$.`, [
        R`Treat $y$ as constant: $f_x=2xy+0=2xy$.`,
        R`Treat $x$ as constant: $f_y=x^2+6y$.`,
      ], R`f_x=2xy,\quad f_y=x^2+6y`),
      EX('Double integral', R`Evaluate $\int_0^1\int_0^1 xy\,dy\,dx$.`, [
        R`Inner integral: $\int_0^1 xy\,dy=x\left[\frac{y^2}{2}\right]_0^1=\frac x2$.`,
        R`Outer integral: $\int_0^1\frac x2\,dx=\left[\frac{x^2}{4}\right]_0^1=\frac14$.`,
      ], R`\frac14`),
    ],
    [
      Q(R`Find $f_x$ for $f(x,y)=x^3y^2$.`, ['3x²y²', '2x³y', '3x² + 2y', 'x³y²'], 0, 'Treat y as a constant.', R`$f_x=3x^2y^2$.`, 'Easy'),
      Q(R`Find $\frac{\partial}{\partial y}e^{xy}$.`, [R`xe^{xy}`, R`ye^{xy}`, R`e^{xy}`, R`xye^{xy}`], 0, 'Chain rule: derivative of xy with respect to y is x.', R`$\frac{\partial}{\partial y}e^{xy}=xe^{xy}$.`, 'Easy'),
      Q('The gradient vector points in the direction of:', ['Steepest decrease', 'Steepest increase', 'Zero change', 'The origin'], 1, 'Gradient encodes the direction of maximum increase.', R`$\nabla f$ points in the direction of steepest increase of f.`, 'Easy'),
      Q(R`Evaluate $\int_0^1\int_0^1 x\,dy\,dx$.`, ['1/4', '1/2', '1', '2'], 1, 'Integrate y first: $x·1 = x$.', R`$\int_0^1 x\,dx=\frac12$.`, 'Medium'),
    ], ['partial derivatives', 'gradient', 'double integral'], 'When taking a partial derivative, every other variable is treated as a constant.'),
];
