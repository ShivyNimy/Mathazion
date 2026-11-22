import { R, EX, Q, topic } from './core.js';

export default [
  topic('variance-deviation', 'statistics', 'Variance & Standard Deviation',
    'Measure how spread out data are using variance, standard deviation and the range.',
    [
      'The range is the largest value minus the smallest. Variance measures the average squared distance from the mean; standard deviation is its square root, measured in the same units as the data.',
      R`Population variance: $\sigma^2=\frac{\sum(x_i-\mu)^2}{N}$. Sample variance: $s^2=\frac{\sum(x_i-\bar x)^2}{n-1}$, where $n-1$ gives an unbiased estimate.`,
      'A small standard deviation means values cluster near the mean; a large one means they are widely spread.',
    ],
    [
      ['Population variance', R`\sigma^2=\frac{\sum(x_i-\mu)^2}{N}`, 'Divide by N.'],
      ['Sample variance', R`s^2=\frac{\sum(x_i-\bar x)^2}{n-1}`, 'Divide by n − 1.'],
      ['Standard deviation', R`\sigma=\sqrt{\sigma^2}`, 'Same units as the data.'],
    ],
    [
      EX('Find the variance', 'Find the population variance and standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.', [
        'The mean is $40/8=5$.',
        R`Squared deviations: $9,1,1,1,0,0,4,16$, summing to 32.`,
        R`Variance $=32/8=4$, so standard deviation $=\sqrt4=2$.`,
      ], R`\sigma^2=4,\quad\sigma=2`),
      EX('Use the sample formula', 'Find the sample variance of 1, 2, 3, 4, 5.', [
        'Mean $=3$; squared deviations $4,1,0,1,4$ sum to 10.',
        R`Sample variance $=10/(5-1)=2.5$.`,
      ], R`s^2=2.5`),
    ],
    [
      Q(R`Find the mean of 2, 4, 6 and 8.`, ['4', '5', '6', '7'], 1, 'Add and divide by 4.', R`$(2+4+6+8)/4=5$.`, 'Easy'),
      Q(R`If the mean is 5, what is the squared deviation of 7?`, ['2', '4', '5', '49'], 1, 'Deviation is 2; square it.', R`$(7-5)^2=4$.`, 'Easy'),
      Q('A data set has variance 9. Its standard deviation is:', ['3', '9', '81', '4.5'], 0, 'Take the square root.', R`$\sqrt9=3$.`, 'Easy'),
      Q('Sample variance divides by n − 1 rather than n because:', ['It is simpler', 'It gives an unbiased estimate of population variance', 'Samples are always smaller', 'It avoids square roots'], 1, 'This is Bessel’s correction.', R`Using $n-1$ corrects the bias from estimating the mean from the same data.`, 'Medium'),
    ], ['variance', 'standard deviation', 'spread', 'range'], 'Variance uses squared units; standard deviation brings them back to the original units.'),

  topic('correlation-regression', 'statistics', 'Correlation & Regression',
    'Describe relationships between variables with scatter plots, correlation and a line of best fit.',
    [
      R`The correlation coefficient $r$ lies between −1 and 1. Values near 1 show strong positive linear correlation, near −1 strong negative correlation, and near 0 little linear correlation.`,
      R`The least-squares regression line is $\hat y=mx+c$. It minimises the sum of squared residuals, where a residual is $y-\hat y$.`,
      'Correlation does not imply causation: two variables can move together because of a third factor or coincidence.',
    ],
    [
      ['Correlation coefficient', R`-1\le r\le1`, 'Strength and direction of linear relationship.'],
      ['Regression line', R`\hat y=mx+c`, 'Predicts y from x.'],
      ['Residual', R`e=y-\hat y`, 'Observed minus predicted.'],
    ],
    [
      EX('Find a regression line', 'For x = 1, 2, 3, 4 and y = 2, 4, 5, 7, find the least-squares line.', [
        R`Means: $\bar x=2.5$, $\bar y=4.5$.`,
        R`$\sum(x-\bar x)(y-\bar y)=8$ and $\sum(x-\bar x)^2=5$, so $m=8/5=1.6$.`,
        R`$c=\bar y-m\bar x=4.5-1.6(2.5)=0.5$, giving $\hat y=1.6x+0.5$.`,
      ], R`\hat y=1.6x+0.5`),
      EX('Interpret correlation', 'Interpret r = 0.9 and r = −0.3.', [
        '$r=0.9$ indicates a strong positive linear relationship.',
        '$r=-0.3$ indicates a weak negative linear relationship.',
      ], R`\text{Strong positive; weak negative}`),
    ],
    [
      Q('A correlation coefficient of 1 means:', ['No relationship', 'Perfect positive linear relationship', 'Perfect negative relationship', 'The data are sorted'], 1, 'Endpoints of the r scale.', R`$r=1$ is a perfect positive linear relationship.`, 'Easy'),
      Q(R`The equation of a regression line is written:`, [R`\hat y=mx+c`, R`y=x^2+c`, R`\hat y=m/x`, R`y=mx^2`], 0, 'Linear model.', R`The least-squares line is $\hat y=mx+c$.`, 'Easy'),
      Q(R`A residual is:`, ['predicted − observed', 'observed − predicted', 'mean − observed', 'x − y'], 1, 'Difference between data and prediction.', R`$e=y-\hat y$.`, 'Medium'),
      Q('If two variables are strongly correlated, this proves:', ['One causes the other', 'No causation necessarily', 'The correlation is positive', 'The data are exact'], 1, 'Classic caution about correlation.', R`Correlation does not establish causation.`, 'Easy'),
    ], ['scatter plot', 'correlation', 'regression', 'residuals'], 'Always plot the data before trusting a correlation value — outliers can distort it.'),

  topic('sampling-design', 'statistics', 'Sampling & Experimental Design',
    'Choose samples that represent a population and recognise bias in studies.',
    [
      'The population is the whole group you want to learn about; a sample is the subset you actually observe. A random sample gives every member a known chance of selection and reduces bias.',
      'Stratified sampling splits the population into groups (strata) and samples from each, ensuring representation. Systematic sampling uses a fixed interval; convenience sampling often introduces bias.',
      'Larger samples usually give more precise estimates, but a biased large sample can still be wrong.',
    ],
    [
      ['Random sample', 'Every member has a known chance of selection.', 'Reduces selection bias.'],
      ['Stratified sample', 'Sample proportionally from each subgroup.', 'Improves representation.'],
      ['Margin of error', R`\text{error}\propto\frac{1}{\sqrt n}`, 'Bigger n gives smaller error.'],
    ],
    [
      EX('Identify the population', 'A researcher surveys 200 students from a university of 20,000 to estimate average study time.', [
        'Population: all 20,000 students.',
        'Sample: the 200 surveyed students.',
      ], R`\text{Population: 20,000 students; sample: 200 students}`),
      EX('Choose a method', 'A school wants opinions from each year group equally. Which sampling method is best?', [
        'Simple random sampling might under-represent a small year group.',
        'Stratified sampling by year group ensures each is represented proportionally.',
      ], R`\text{Stratified sampling by year group}`),
    ],
    [
      Q('The population in a study is:', ['The people surveyed', 'The whole group being studied', 'The sample average', 'The researcher'], 1, 'Population is the full group of interest.', R`The population is the entire group about which conclusions are drawn.`, 'Easy'),
      Q('In a random sample:', ['Only volunteers are chosen', 'Every member has a known chance of selection', 'The first 100 people are chosen', 'Only the largest group is used'], 1, 'This is the definition of random sampling.', R`Random sampling gives each member a known selection probability.`, 'Easy'),
      Q('Asking only your friends about a school policy is likely to cause:', ['Random sampling', 'Selection bias', 'Stratified sampling', 'A larger population'], 1, 'The sample is not representative.', R`Convenience samples often suffer from selection bias.`, 'Easy'),
      Q('Increasing sample size generally:', ['Increases bias', 'Reduces random error', 'Changes the population', 'Makes surveys unnecessary'], 1, 'Precision improves with n.', R`Larger samples reduce random sampling error, though they do not fix bias.`, 'Medium'),
    ], ['population', 'sample', 'random sampling', 'bias'], 'A large biased sample is still biased — sampling method matters more than size.'),

  topic('hypothesis-testing', 'statistics', 'Hypothesis Testing',
    'Set up null and alternative hypotheses, compute a test statistic and interpret a p-value.',
    [
      'The null hypothesis $H_0$ states no effect or no difference; the alternative $H_1$ states what we suspect. The significance level $\\alpha$ is the threshold for rejecting $H_0$, often 0.05.',
      R`For a mean with known standard deviation, $z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}$. The p-value is the probability of data at least as extreme as observed, assuming $H_0$ is true.`,
      'If p < α, reject $H_0$; otherwise fail to reject it. A Type I error rejects a true null; a Type II error fails to reject a false null.',
    ],
    [
      ['Test statistic', R`z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}`, 'How many standard errors from the claimed mean.'],
      ['Decision rule', 'p < α → reject H₀; otherwise fail to reject.', 'Never “prove” H₀.'],
    ],
    [
      EX('Compute a z statistic', R`Test $H_0:\mu=50$ with $\bar x=53$, $\sigma=10$, $n=25$.`, [
        R`Standard error $=\sigma/\sqrt n=10/5=2$.`,
        R`$z=(53-50)/2=1.5$.`,
        'At α = 0.05 (two-tailed), the critical value is 1.96, so we fail to reject $H_0$.',
      ], R`z=1.5`),
      EX('Interpret a p-value', 'A test gives p = 0.03 with α = 0.05. What is the conclusion?', [
        'Since $0.03<0.05$, reject the null hypothesis.',
        'The evidence supports the alternative at the 5% level.',
      ], R`\text{Reject }H_0`),
    ],
    [
      Q('The null hypothesis usually states:', ['No effect or no difference', 'The effect we hope to find', 'The sample is large', 'The data are normal'], 0, 'It is the default position.', R`$H_0$ is a statement of no effect or no difference.`, 'Easy'),
      Q(R`If $p<\alpha$, we:`, ['Reject H₀', 'Fail to reject H₀', 'Accept both hypotheses', 'Increase α'], 0, 'Small p-value means strong evidence against H₀.', R`Reject $H_0$ when the p-value falls below the significance level.`, 'Easy'),
      Q(R`The z statistic for a sample mean is:`, [R`\frac{\bar x-\mu_0}{\sigma/\sqrt n}`, R`\frac{\mu_0-\bar x}{n}`, R`\bar x-\mu_0`, R`\frac{\sigma}{\bar x}`], 0, 'Difference divided by standard error.', R`$z=\frac{\bar x-\mu_0}{\sigma/\sqrt n}$.`, 'Medium'),
      Q('A Type I error means:', ['Rejecting a true null', 'Failing to reject a false null', 'Using a small sample', 'Choosing α = 0.05'], 0, 'False positive.', R`A Type I error rejects $H_0$ when it is actually true.`, 'Medium'),
    ], ['null hypothesis', 'p-value', 'significance level', 'Type I error'], 'Failing to reject H₀ is not the same as proving H₀ true.'),

  topic('recurrence-relations', 'discrete', 'Recurrence Relations',
    'Define sequences recursively and find closed forms for common patterns.',
    [
      'A recurrence relation defines each term using previous terms. Initial conditions give the starting values; together they determine the whole sequence.',
      R`Arithmetic: $a_n=a_{n-1}+d$. Geometric: $a_n=r\,a_{n-1}$. Fibonacci: $F_n=F_{n-1}+F_{n-2}$ with $F_1=F_2=1$.`,
      'A closed form gives $a_n$ directly from n, without computing earlier terms. Finding one often involves spotting a pattern or solving a characteristic equation.',
    ],
    [
      ['Arithmetic recurrence', R`a_n=a_{n-1}+d`, 'Constant addition.'],
      ['Geometric recurrence', R`a_n=r a_{n-1}`, 'Constant multiplication.'],
      ['Fibonacci', R`F_n=F_{n-1}+F_{n-2}`, 'Two previous terms.'],
    ],
    [
      EX('Iterate a recurrence', R`If $a_1=3$ and $a_n=2a_{n-1}+1$, find the first four terms.`, [
        R`Start with $a_1=3$. Then $a_2=2(3)+1=7$ and $a_3=2(7)+1=15$.`,
        R`Finally $a_4=2(15)+1=31$`,
      ], R`3,\,7,\,15,\,31`),
      EX('Find a closed form', R`If $a_1=3$ and $a_n=2a_{n-1}$, find $a_n$.`, [
        'Each term doubles: $3,6,12,24,\\dots$',
        R`The closed form is $a_n=3\cdot2^{n-1}$.`,
      ], R`a_n=3\cdot2^{n-1}`),
    ],
    [
      Q(R`If $a_1=5$ and $a_n=a_{n-1}+3$, find $a_4$.`, ['11', '14', '17', '20'], 1, 'Add 3 three times.', R`$a_4=5+3(3)=14$.`, 'Easy'),
      Q(R`If $a_n=3a_{n-1}$, what is the common ratio?`, ['1/3', '3', '0', '9'], 1, 'Each term is 3 times the previous.', R`The ratio is 3.`, 'Easy'),
      Q('Using $F_1=F_2=1$, find $F_6$.', ['5', '8', '13', '6'], 1, 'Sequence: 1, 1, 2, 3, 5, 8.', R`$F_6=8$.`, 'Medium'),
      Q('A recurrence needs initial conditions because:', ['It otherwise has many possible sequences', 'It makes the sequence shorter', 'It removes the need for arithmetic', 'It guarantees a closed form'], 0, 'Starting values fix the sequence.', R`Initial conditions determine which particular sequence satisfies the recurrence.`, 'Medium'),
    ], ['recurrence', 'Fibonacci', 'closed form', 'initial conditions'], 'A recurrence is like a set of instructions; initial conditions tell you where to start.'),

  topic('boolean-algebra', 'discrete', 'Boolean Algebra',
    'Simplify logical expressions using Boolean laws and truth tables.',
    [
      'Boolean algebra works with truth values T (1) and F (0). The operations are AND ($\\wedge$), OR ($\\vee$) and NOT ($\\neg$).',
      R`De Morgan's laws: $\neg(p\wedge q)\equiv\neg p\vee\neg q$ and $\neg(p\vee q)\equiv\neg p\wedge\neg q$.`,
      'Useful identities include $p\\vee F\\equiv p$, $p\\wedge T\\equiv p$, $p\\vee\\neg p\\equiv T$ and double negation $\\neg(\\neg p)\\equiv p$.',
    ],
    [
      ['AND', R`p\wedge q`, 'True only when both are true.'],
      ['OR', R`p\vee q`, 'True when at least one is true.'],
      ['De Morgan', R`\neg(p\wedge q)\equiv\neg p\vee\neg q`, 'Flip the operator when negating.'],
    ],
    [
      EX('Simplify with De Morgan', R`Simplify $\neg(p\wedge q)\vee\neg p$.`, [
        R`De Morgan gives $(\neg p\vee\neg q)\vee\neg p$.`,
        R`Regroup: $(\neg p\vee\neg p)\vee\neg q\equiv\neg p\vee\neg q$.`,
      ], R`\neg p\vee\neg q`),
      EX('Evaluate an expression', R`Evaluate $(T\vee F)\wedge\neg F$.`, [
        R`$T\vee F=T$ and $\neg F=T$.`,
        'So the expression is $T\\wedge T=T$.',
      ], R`T`),
    ],
    [
      Q(R`The expression $p\wedge q$ is true when:`, ['p is true', 'q is true', 'Both are true', 'At least one is true'], 2, 'AND requires both.', R`Conjunction is true only when both operands are true.`, 'Easy'),
      Q(R`The value of $p\vee T$ is always:`, ['p', 'T', 'F', '¬p'], 1, 'OR with true is true.', R`$p\vee T\equiv T$.`, 'Easy'),
      Q(R`De Morgan's law says $\neg(p\vee q)$ equals:`, [R`\neg p\vee\neg q`, R`\neg p\wedge\neg q`, R`p\wedge q`, R`p\vee q`], 1, 'Flip OR to AND.', R`$\neg(p\vee q)\equiv\neg p\wedge\neg q$.`, 'Easy'),
      Q(R`The expression $\neg(\neg p)$ simplifies to:`, ['p', '¬p', 'T', 'F'], 0, 'Double negation.', R`$\neg(\neg p)\equiv p$.`, 'Easy'),
    ], ['Boolean algebra', 'logic gates', 'De Morgan', 'truth values'], 'Boolean algebra is the mathematical foundation of digital circuits.'),

  topic('pigeonhole-principle', 'discrete', 'Pigeonhole Principle',
    'Use counting to prove that two objects must share a property, without finding which ones.',
    [
      'If $n+1$ objects are placed into $n$ boxes, at least one box contains two or more objects. This is the pigeonhole principle.',
      R`General form: placing $m$ objects into $n$ boxes guarantees some box contains at least $\left\lceil\frac{m}{n}\right\rceil$ objects.`,
      'It is an existence argument: it proves something must happen but does not identify which box or object.',
    ],
    [
      ['Basic principle', 'n + 1 objects, n boxes → some box has ≥ 2.', 'A counting proof.'],
      ['General form', R`\left\lceil\frac mn\right\rceil`, 'Ceiling of m divided by n.'],
    ],
    [
      EX('Birth months', 'Show that among 13 people, two share a birth month.', [
        'There are 12 months (boxes) and 13 people (objects).',
        'Since $13>12$, some month contains at least 2 people.',
      ], R`\text{Two people share a birth month}`),
      EX('Sock colours', 'There are 21 socks in 10 colours. Show at least 3 socks have the same colour.', [
        'Think of 21 socks as objects and 10 colours as boxes.',
        R`By the general principle, some colour has at least $\lceil21/10\rceil=3$ socks.`,
      ], R`\text{At least 3 socks share a colour}`),
    ],
    [
      Q('Five socks are chosen from four colours. What must be true?', ['All colours appear', 'Two socks share a colour', 'No colour repeats', 'There are five colours'], 1, '5 objects into 4 boxes.', R`At least two socks have the same colour.`, 'Easy'),
      Q(R`If 25 objects go into 4 boxes, some box has at least:`, ['6', '7', '25', '4'], 1, 'Ceiling of 25/4 is 7.', R`$\lceil25/4\rceil=7$, so at least 7 objects share a box.`, 'Medium'),
      Q('The pigeonhole principle proves:', ['Which object is special', 'That some case must occur', 'The exact count in every box', 'A formula for all boxes'], 1, 'It is an existence proof.', R`It guarantees existence but does not identify the box.`, 'Easy'),
      Q('Among 367 people, at least two share a birthday because:', ['There are only 365 or 366 possible birthdays', 'People are born in the same year', 'Birthdays are random', 'There are 12 months'], 0, 'More people than days.', R`With at most 366 possible dates, 367 people force a shared birthday.`, 'Easy'),
    ], ['pigeonhole principle', 'counting argument', 'existence proof'], 'Look for "boxes" and "objects" — the hard part is usually choosing them.'),

  topic('diophantine-equations', 'number-theory', 'Diophantine Equations',
    'Solve equations whose solutions must be integers, using gcd conditions and modular reasoning.',
    [
      'A Diophantine equation asks for integer solutions only. The linear form is $ax+by=c$ with integers $a,b,c$.',
      R`The equation $ax+by=c$ has a solution exactly when $\gcd(a,b)$ divides $c$. If $(x_0,y_0)$ is one solution, all solutions are $x=x_0+\frac bg t$, $y=y_0-\frac ag t$ for integer $t$, where $g=\gcd(a,b)$.`,
      'Modular arithmetic gives quick impossibility tests: reduce the equation modulo a suitable number and look for contradictions.',
    ],
    [
      [' solvability condition', R`\gcd(a,b)\mid c`, 'gcd must divide the constant.'],
      ['General solution', R`x=x_0+\frac bg t,\quad y=y_0-\frac ag t`, 't is any integer.'],
    ],
    [
      EX('Solve a linear Diophantine equation', R`Solve $3x+5y=1$ in integers.`, [
        R`One solution is $x=2$, $y=-1$ because $3(2)+5(-1)=1$.`,
        R`Since $\gcd(3,5)=1$, all solutions are $x=2+5t$, $y=-1-3t$.`,
      ], R`x=2+5t,\ y=-1-3t`),
      EX('Show there is no solution', R`Show $4x+6y=7$ has no integer solutions.`, [
        R`$\gcd(4,6)=2$, but 2 does not divide 7.`,
        'The left side is always even, while the right side is odd.',
      ], R`\text{No integer solutions}`),
    ],
    [
      Q(R`The equation $ax+by=c$ is solvable in integers exactly when:`, [R`\gcd(a,b)\mid c`, 'a + b divides c', 'c is even', 'a divides b'], 0, 'The gcd condition is necessary and sufficient.', R`Solvability requires $\gcd(a,b)$ to divide $c$.`, 'Medium'),
      Q(R`Find an integer solution to $2x+3y=1$.`, ['x=1, y=1', 'x=−1, y=1', 'x=2, y=−1', 'x=0, y=0'], 1, 'Try small values.', R`$2(-1)+3(1)=1$.`, 'Easy'),
      Q(R`Why does $6x+9y=5$ have no integer solutions?`, ['gcd(6,9)=3 does not divide 5', '6 is even', '9 is larger than 5', 'x and y must be positive'], 0, 'Left side is a multiple of 3.', R`$\gcd(6,9)=3\nmid5$.`, 'Medium'),
      Q('A Diophantine equation requires solutions to be:', ['Real numbers', 'Integers', 'Positive only', 'Fractions'], 1, 'That is the defining feature.', R`Only integer solutions are allowed.`, 'Easy'),
    ], ['Diophantine', 'integer solutions', 'gcd condition'], 'Check the gcd condition first — it saves hunting for solutions that cannot exist.'),

  topic('fermat-euler', 'number-theory', 'Fermat & Euler Theorems',
    'Use Fermat’s little theorem and Euler’s theorem to simplify powers modulo n.',
    [
      R`Fermat's little theorem: if $p$ is prime and $p\nmid a$, then $a^{p-1}\equiv1\pmod p$. A useful consequence is $a^{p-2}\equiv a^{-1}\pmod p$.`,
      R`Euler's theorem generalises this: if $\gcd(a,n)=1$, then $a^{\varphi(n)}\equiv1\pmod n$, where $\varphi(n)$ is Euler's totient function.`,
      R`For a prime $p$, $\varphi(p)=p-1$; for $n=pq$ with distinct primes, $\varphi(n)=(p-1)(q-1)$.`,
    ],
    [
      ['Fermat', R`a^{p-1}\equiv1\pmod p`, 'p prime, p ∤ a.'],
      ['Euler', R`a^{\varphi(n)}\equiv1\pmod n`, 'gcd(a, n) = 1.'],
      ['Totient', R`\varphi(pq)=(p-1)(q-1)`, 'Distinct primes p, q.'],
    ],
    [
      EX('Apply Fermat', R`Find $3^6\bmod 7$.`, [
        '7 is prime and 7 does not divide 3.',
        R`Fermat's little theorem gives $3^6\equiv1\pmod7$`,
      ], R`1`),
      EX('Reduce a large power', R`Find $3^{100}\bmod7$.`, [
        R`Since $3^6\equiv1\pmod7$, reduce the exponent modulo 6: $100\equiv4\pmod6$.`,
        R`So $3^{100}\equiv3^4=81\equiv4\pmod7$.`,
      ], R`4`),
    ],
    [
      Q(R`If p is prime and p ∤ a, then $a^{p-1}\equiv$ ?`, ['0 mod p', '1 mod p', 'a mod p', 'p mod a'], 1, 'Fermat’s little theorem.', R`$a^{p-1}\equiv1\pmod p$.`, 'Easy'),
      Q(R`What is $\varphi(p)$ for prime p?`, ['p', 'p − 1', '1', '2p'], 1, 'All numbers 1 to p−1 are coprime.', R`$\varphi(p)=p-1$.`, 'Easy'),
      Q(R`Find $\varphi(12)$.`, ['2', '4', '6', '12'], 1, 'Coprime residues: 1, 5, 7, 11.', R`$\varphi(12)=4$.`, 'Medium'),
      Q(R`Find $2^{10}\bmod 11$.`, ['0', '1', '2', '10'], 1, 'Fermat with p = 11.', R`Since 11 is prime, $2^{10}\equiv1\pmod{11}$.`, 'Medium'),
    ], ['Fermat theorem', 'Euler theorem', 'totient', 'modular powers'], 'These theorems turn enormous powers into tiny modular calculations.'),

  topic('gaussian-elimination', 'linear-algebra', 'Gaussian Elimination',
    'Solve linear systems with row operations, echelon form and back substitution.',
    [
      'A system can be written as an augmented matrix. Row operations — swapping rows, multiplying a row by a non-zero scalar, and adding a multiple of one row to another — do not change the solution set.',
      'Gaussian elimination uses these operations to reach row echelon form, then back substitution finds the variables. Reduced row echelon form goes further, making each pivot the only non-zero entry in its column.',
      R`A row like $[0\ 0\mid5]$ means $0=5$, so the system is inconsistent (no solution).`,
    ],
    [
      ['Augmented matrix', R`\left[\begin{array}{cc|c}a&b&c\\d&e&f\end{array}\right]`, 'Coefficients plus constants.'],
      ['Row operations', 'Swap rows · scale a row · add a multiple of a row', 'Never operate on columns.'],
      ['Pivot', 'First non-zero entry in a row.', 'Used to eliminate below.'],
    ],
    [
      EX('Eliminate and back-substitute', R`Solve $2x+y=7$ and $x-y=2$.`, [
        R`From the second equation, $x=2+y$.`,
        R`Substitute: $2(2+y)+y=7\Rightarrow4+3y=7\Rightarrow y=1$, so $x=3$.`,
      ], R`x=3,\ y=1`),
      EX('Write an augmented matrix', R`Write the matrix for $3x+2y=8$, $x-y=1$.`, [
        'Row 1 contains coefficients 3, 2 and constant 8.',
        'Row 2 contains 1, −1 and constant 1.',
      ], R`\left[\begin{array}{cc|c}3&2&8\\1&-1&1\end{array}\right]`),
    ],
    [
      Q('Which is NOT an allowed row operation?', ['Swapping two rows', 'Multiplying a row by 3', 'Adding one row to another', 'Swapping two columns'], 3, 'Column swaps would change variable order.', R`Row operations only act on rows.`, 'Easy'),
      Q('A pivot is:', ['The last entry in a row', 'The first non-zero entry in a row', 'Always zero', 'The constant term'], 1, 'Leading non-zero entry.', R`The pivot is the first non-zero entry in a row.`, 'Easy'),
      Q(R`A row $[0\ 0\mid5]$ means the system:`, ['Has one solution', 'Has infinitely many solutions', 'Has no solution', 'Needs another pivot'], 2, 'The equation 0 = 5 is impossible.', R`This row represents $0=5$, so the system is inconsistent.`, 'Medium'),
      Q('After reaching row echelon form, we use:', ['Back substitution', 'Differentiation', 'Factoring', 'Square roots'], 0, 'Solve from the bottom row upward.', R`Back substitution solves the triangular system.`, 'Easy'),
    ], ['row reduction', 'augmented matrix', 'pivot', 'back substitution'], 'Use row operations only — changing columns changes the variables.'),

  topic('orthogonality-projections', 'linear-algebra', 'Orthogonality & Projections',
    'Use dot products to test perpendicularity, project vectors and build orthogonal bases.',
    [
      R`Two vectors are orthogonal when $\mathbf u\cdot\mathbf v=0$. The projection of $\mathbf u$ onto $\mathbf v$ is $\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v$.`,
      'An orthonormal basis consists of mutually perpendicular unit vectors. Coordinates in such a basis are found by dot products, which is why they are convenient.',
      R`Gram–Schmidt converts a linearly independent set into an orthogonal (or orthonormal) spanning set. Least-squares solutions are closely related to projections onto a subspace.`,
    ],
    [
      ['Orthogonality test', R`\mathbf u\cdot\mathbf v=0`, 'Perpendicular vectors.'],
      ['Projection', R`\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v`, 'Closest point on the line spanned by v.'],
    ],
    [
      EX('Project onto an axis', R`Project $\mathbf u=(3,4)$ onto $\mathbf v=(1,0)$.`, [
        R`$\mathbf u\cdot\mathbf v=3$ and $\mathbf v\cdot\mathbf v=1$.`,
        R`Projection $=3(1,0)=(3,0)$.`,
      ], R`(3,0)`),
      EX('Project onto a diagonal', R`Project $\mathbf u=(1,2)$ onto $\mathbf v=(1,1)$.`, [
        R`$\mathbf u\cdot\mathbf v=3$ and $\mathbf v\cdot\mathbf v=2$.`,
        R`Projection $=\frac32(1,1)=\left(\frac32,\frac32\right)$`,
      ], R`\left(\frac32,\frac32\right)`),
    ],
    [
      Q('Two vectors are orthogonal when their dot product is:', ['1', '0', '−1', 'Their length'], 1, 'Perpendicular test.', R`$\mathbf u\cdot\mathbf v=0$ means the vectors are perpendicular.`, 'Easy'),
      Q(R`Project $(2,5)$ onto $(0,1)$.`, ['(2,0)', '(0,5)', '(0,2)', '(2,5)'], 1, 'Keep only the vertical component.', R`The projection is $(0,5)$.`, 'Easy'),
      Q(R`The projection formula uses:`, [R`\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v`, R`\frac{\mathbf v\cdot\mathbf v}{\mathbf u\cdot\mathbf v}\mathbf u`, R`\mathbf u\cdot\mathbf v`, R`\mathbf u-\mathbf v`], 0, 'Scale v by the right amount.', R`$\operatorname{proj}_{\mathbf v}\mathbf u=\frac{\mathbf u\cdot\mathbf v}{\mathbf v\cdot\mathbf v}\mathbf v$.`, 'Medium'),
      Q('Gram–Schmidt produces:', ['An orthogonal basis', 'A singular matrix', 'A determinant', 'A scalar product'], 0, 'It orthogonalises a set of vectors.', R`Gram–Schmidt turns independent vectors into an orthogonal set.`, 'Medium'),
    ], ['orthogonal vectors', 'projection', 'Gram-Schmidt', 'orthonormal basis'], 'A projection is the closest point on the subspace to the original vector.')
];
