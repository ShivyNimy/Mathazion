import { R, EX, Q, topic } from './core.js';

export default [
  topic('unit-conversion', 'applied', 'Units & Dimensional Analysis',
    'Convert between units using conversion factors and check answers with dimensional analysis.',
    [
      'A conversion factor is a fraction equal to 1, such as $\\frac{1000\\,\\text{m}}{1\\,\\text{km}}$. Multiply by it so the unwanted unit cancels.',
      R`Common conversions: $1\text{ km}=1000\text{ m}$, $1\text{ m}=100\text{ cm}$, $1\text{ L}=1000\text{ mL}$, $1\text{ kg}=1000\text{ g}$, $1\text{ hour}=3600\text{ s}$.`,
      'For squared or cubed units, square or cube the conversion factor: $1\\,\\text{m}^2=10{,}000\\,\\text{cm}^2$, not 100 cm².',
    ],
    [
      ['Conversion chain', R`65\frac{\text{km}}{\text{h}}\times\frac{1000\text{ m}}{1\text{ km}}\times\frac{1\text{ h}}{3600\text{ s}}\approx18.1\frac{\text{m}}{\text{s}}`, 'Units cancel like algebraic factors.'],
      ['Area conversion', R`1\text{ m}^2=(100\text{ cm})^2=10{,}000\text{ cm}^2`, 'Square the linear factor.'],
    ],
    [
      EX('Speed conversion', R`Convert $72\text{ km/h}$ to $\text{m/s}$.`, [
        R`$72\frac{\text{km}}{\text{h}}=72\times\frac{1000\text{ m}}{3600\text{ s}}$.`,
        'Simplify: $72\\times\\frac{5}{18}=20$ m/s.',
      ], R`20\text{ m/s}`),
      EX('Area conversion', R`Convert $2.5\text{ m}^2$ to $\text{cm}^2$.`, [
        R`$1\text{ m}=100\text{ cm}$, so $1\text{ m}^2=100^2=10{,}000\text{ cm}^2$.`,
        R`$2.5\times10{,}000=25{,}000\text{ cm}^2$.`,
      ], R`25{,}000\text{ cm}^2`),
    ],
    [
      Q(R`Convert $5\text{ km}$ to metres.`, ['50 m', '500 m', '5000 m', '0.005 m'], 2, 'Multiply by 1000.', R`$5\times1000=5000$ m.`, 'Easy'),
      Q(R`Convert $72\text{ km/h}$ to $\text{m/s}$.`, ['20 m/s', '7.2 m/s', '200 m/s', '2 m/s'], 0, 'Multiply by 1000/3600.', R`$72\times\frac{1000}{3600}=20$ m/s.`, 'Easy'),
      Q(R`Convert $2.5\text{ L}$ to millilitres.`, ['25 mL', '250 mL', '2500 mL', '0.0025 mL'], 2, '1 litre = 1000 mL.', R`$2.5\times1000=2500$ mL.`, 'Easy'),
      Q(R`How many square centimetres are in $0.1\text{ m}^2$?`, ['10', '100', '1000', '10000'], 2, '1 m² = 10,000 cm².', R`$0.1\times10{,}000=1000\text{ cm}^2$.`, 'Medium'),
    ], ['conversion factors', 'SI units', 'dimensional analysis'], 'Write units in your working — if they do not cancel correctly, the setup is wrong.'),

  topic('financial-math', 'applied', 'Financial Mathematics',
    'Calculate simple and compound interest, discounts and percentages in money problems.',
    [
      R`Simple interest: $I=Prt$, where $P$ is principal, $r$ the annual rate as a decimal, and $t$ time in years. The total is $A=P+I$.`,
      R`Compound interest: $A=P\left(1+\frac{r}{n}\right)^{nt}$ for $n$ compoundings per year; with annual compounding $A=P(1+r)^t$.`,
      'For a discount of $d\\%$, sale price = original × (1 − d/100). To reverse a discount, divide by (1 − d/100), not multiply.',
    ],
    [
      ['Simple interest', R`I=Prt`, 'Linear growth.'],
      ['Compound interest', R`A=P(1+r)^t`, 'Exponential growth.'],
      ['Discount', R`\text{sale}=P(1-d)`, 'd is the discount rate as a decimal.'],
    ],
    [
      EX('Simple interest', 'Find the interest on 1000 at 5% per year for 3 years, and the total amount.', [
        R`$I=Prt=1000(0.05)(3)=150$.`,
        'Total amount: $1000+150=1150$.',
      ], R`I=150,\ A=1150`),
      EX('Compound interest', 'Find the amount after 2 years if 1000 is invested at 6% compounded annually.', [
        R`$A=1000(1+0.06)^2=1000(1.1236)$.`,
        'The amount is 1123.60; the interest earned is 123.60.',
      ], R`A=1123.60`),
    ],
    [
      Q('Find the simple interest on 500 at 4% per year for 2 years.', ['20', '40', '80', '540'], 1, 'Use I = Prt.', R`$I=500(0.04)(2)=40$.`, 'Easy'),
      Q('An investment of 1000 earns 10% in one year. What is the final amount?', ['1010', '1100', '1200', '100.10'], 1, '10% of 1000 is 100.', R`$A=1000(1.10)=1100$.`, 'Easy'),
      Q('An item priced at 80 is discounted by 20%. What is the sale price?', ['16', '60', '64', '72'], 2, 'Pay 80% of the original.', R`$80(0.80)=64$.`, 'Easy'),
      Q('Find the amount after 2 years if 1000 is invested at 8% compounded annually.', ['1160', '1166.40', '1200', '1080'], 1, 'Use A = P(1 + r)².', R`$A=1000(1.08)^2=1166.40$.`, 'Medium'),
    ], ['interest', 'compound growth', 'discount', 'principal'], 'Convert percentages to decimals before substituting into formulas.'),

  topic('exponential-growth-decay', 'applied', 'Exponential Growth & Decay',
    'Model populations, radioactive decay and half-life with exponential functions.',
    [
      R`Exponential growth or decay has the form $N(t)=N_0e^{kt}$: $k>0$ means growth, $k<0$ decay. For a fixed percentage rate per period, use $N=N_0(1+r)^t$.`,
      R`Doubling time: $t=\frac{\ln 2}{k}$. Half-life: $t_{1/2}=\frac{\ln 2}{|k|}$. After $m$ half-lives, the remaining fraction is $\left(\frac12\right)^m$.`,
      'Exponential growth eventually outpaces linear growth because the rate of change is proportional to the current amount.',
    ],
    [
      ['Continuous model', R`N(t)=N_0e^{kt}`, 'N₀ is the initial amount.'],
      ['Doubling time', R`t=\frac{\ln 2}{k}`, 'Independent of the starting amount.'],
      ['Half-life decay', R`N=N_0\left(\frac12\right)^{t/t_{1/2}}`, 'Used in radioactive dating.'],
    ],
    [
      EX('Population growth', 'A population of 1000 grows at 3% per year. Estimate the population after 5 years.', [
        R`$N=1000(1.03)^5$.`,
        R`$(1.03)^5\approx1.159$, so $N\approx1159$.`,
      ], R`\approx1159`),
      EX('Half-life', 'A 80 g sample has a half-life of 10 years. How much remains after 30 years?', [
        'Thirty years is three half-lives.',
        R`Remaining fraction $=\left(\frac12\right)^3=\frac18$.`,
        'Amount: $80/8=10$ g.',
      ], R`10\text{ g}`),
    ],
    [
      Q('A population of 500 doubles every 10 years. What is it after 20 years?', ['750', '1000', '1500', '2000'], 3, 'Two doubling periods.', R`$500\times2^2=2000$.`, 'Easy'),
      Q('After 3 half-lives, what fraction of a sample remains?', ['1/3', '1/6', '1/8', '1/9'], 2, 'Halve three times.', R`$(1/2)^3=1/8$.`, 'Easy'),
      Q(R`A quantity decays by 10% each year. Starting from 100 g, how much remains after 2 years?`, ['80 g', '81 g', '90 g', '98 g'], 1, 'Multiply by 0.9 twice.', R`$100(0.9)^2=81$ g.`, 'Easy'),
      Q(R`If $N(t)=N_0e^{kt}$ doubles in 5 years, what is $k$?`, [R`\frac{\ln 2}{5}`, '2/5', '5 ln 2', R`e^{5}`], 0, 'Set $e^{5k}=2$ and take logs.', R`$5k=\ln2$, so $k=\frac{\ln2}{5}\approx0.139$.`, 'Medium'),
    ], ['growth rate', 'half-life', 'doubling time', 'exponential model'], 'A constant percentage change produces exponential, not linear, growth.'),

  topic('motion-work-rates', 'applied', 'Motion, Work & Rates',
    'Solve distance–time problems, relative motion and combined work rates.',
    [
      R`The fundamental motion relation is $d=vt$ (distance = speed × time), so $v=\frac{d}{t}$ and $t=\frac{d}{v}$. For motion toward each other, relative speed is the sum; for motion in the same direction, it is the difference.`,
      R`If a worker completes a job in $t$ hours, their rate is $\frac{1}{t}$ jobs per hour. Combined rates add: two workers with rates $1/a$ and $1/b$ finish together in $\frac{ab}{a+b}$ hours.`,
      'For equal distances at two speeds, the average speed is the harmonic mean $\\frac{2v_1v_2}{v_1+v_2}$, not the arithmetic mean.',
    ],
    [
      ['Motion', R`d=vt`, 'Keep units consistent.'],
      ['Combined work', R`T=\frac{1}{\frac1a+\frac1b}=\frac{ab}{a+b}`, 'a and b are individual completion times.'],
      ['Average speed', R`v_{\text{avg}}=\frac{2v_1v_2}{v_1+v_2}`, 'For equal distances.'],
    ],
    [
      EX('Distance and speed', 'A train travels at 60 km/h for 2.5 hours. How far does it go?', [
        R`$d=vt=60\times2.5$.`,
        'Compute: $60\\times2=120$ plus $60\\times0.5=30$, giving 150 km.',
      ], R`150\text{ km}`),
      EX('Combined work', 'Pipe A fills a tank in 6 hours and pipe B in 4 hours. How long together?', [
        R`Rates: $\frac16+\frac14=\frac{2}{12}+\frac{3}{12}=\frac5{12}$ tank per hour.`,
        R`Time $=\frac{1}{5/12}=\frac{12}{5}=2.4$ hours.`,
      ], R`2.4\text{ hours}`),
    ],
    [
      Q('A car travels 120 km in 2 hours. What is its average speed?', ['40 km/h', '60 km/h', '120 km/h', '240 km/h'], 1, 'Speed = distance ÷ time.', R`$v=120/2=60$ km/h.`, 'Easy'),
      Q('Two workers take 4 and 6 hours alone. How long together?', ['2 hours', '2.4 hours', '5 hours', '10 hours'], 1, 'Add rates 1/4 + 1/6.', R`Rate $=5/12$, so time $=12/5=2.4$ hours.`, 'Medium'),
      Q('Two cars start 200 km apart and drive toward each other at 40 and 60 km/h. When do they meet?', ['1 hour', '2 hours', '4 hours', '5 hours'], 1, 'Closing speed = 40 + 60 = 100 km/h.', R`$t=200/100=2$ hours.`, 'Easy'),
      Q('A journey covers equal distances at 40 km/h and 60 km/h. The average speed is:', ['50 km/h', '48 km/h', '52 km/h', '100 km/h'], 1, 'Use the harmonic mean for equal distances.', R`$v=\frac{2(40)(60)}{40+60}=\frac{4800}{100}=48$ km/h.`, 'Hard'),
    ], ['speed', 'relative motion', 'work rate', 'average speed'], 'Add rates, not times, when people or machines work together.'),

  topic('optimization', 'applied', 'Optimization & Linear Programming',
    'Maximise or minimise a quantity subject to constraints using vertices of the feasible region.',
    [
      'A linear programming problem has an objective function such as $P=3x+2y$ and constraints like $x+y\\leq4$, $x\\geq0$, $y\\geq0$. The constraints define a feasible region.',
      R`If a linear objective attains a maximum or minimum on a bounded polygonal region, it does so at a vertex. Evaluate the objective at each corner point and choose the best value.`,
      'For unconstrained optimisation of a single-variable function, use derivatives: find critical points and classify them (see Applications of Derivatives).',
    ],
    [
      ['Objective function', R`P=ax+by`, 'The quantity to maximise or minimise.'],
      ['Vertex test', R`P_{\max}=\max_{v\in\text{vertices}}P(v)`, 'Evaluate P at every corner of the feasible region; a linear objective attains its extreme at a vertex.'],
    ],
    [
      EX('Maximise a linear objective', R`Maximise $P=3x+2y$ subject to $x+y\le4$, $x\ge0$, $y\ge0$.`, [
        'Feasible vertices: $(0,0)$, $(4,0)$ and $(0,4)$.',
        R`Evaluate: $P(0,0)=0$, $P(4,0)=12$, $P(0,4)=8$.`,
        'The maximum is 12 at $(4,0)$.',
      ], R`P_{\max}=12\text{ at }(4,0)`),
      EX('Compare vertices', R`Maximise $P=2x+3y$ at $(0,0),(3,0),(0,2),(2,1)$.`, [
        R`Values: $0,\ 6,\ 6,\ 2(2)+3(1)=7$.`,
        'The largest value is 7.',
      ], R`P_{\max}=7\text{ at }(2,1)`),
    ],
    [
      Q('In linear programming, the objective function is the quantity that we:', ['Constraint', 'Maximise or minimise', 'Graph as a region', 'Always set to zero'], 1, 'It is the goal of the problem.', R`The objective is the quantity being optimised.`, 'Easy'),
      Q(R`For $P=3x+2y$, what is $P$ at $(2,3)$?`, ['9', '12', '13', '15'], 1, 'Substitute x = 2, y = 3.', R`$P=3(2)+2(3)=12$.`, 'Easy'),
      Q(R`Which point satisfies $x+y\le4$, $x\ge0$, $y\ge0$?`, ['(3,2)', '(5,0)', '(2,1)', '(−1,3)'], 2, 'Check each constraint.', R`$(2,1)$ gives $3\le4$ with both coordinates non-negative; the others fail.`, 'Medium'),
      Q('A bounded linear programming maximum occurs:', ['Only at the origin', 'At a vertex of the feasible region', 'Always in the interior', 'At every point equally'], 1, 'Linear functions are optimised at corner points.', R`For a bounded polygonal region, an extremum occurs at a vertex.`, 'Medium'),
    ], ['linear programming', 'constraints', 'feasible region', 'objective'], 'Sketch the feasible region first; the optimal point is often obvious from the picture.'),
];
