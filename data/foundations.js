import { R, EX, Q, topic } from './core.js';

export default [
  topic('number-system', 'foundations', 'Number Systems & Place Value',
    'Understand what numbers mean, how they are classified, and how place value makes arithmetic possible.',
    [
      R`The decimal system is base 10: each position is ten times the one to its right. In $3047.52$, the $7$ is worth $7\times 10=70$, while the $5$ is worth $\frac{5}{10}$.`,
      R`Natural numbers $\mathbb{N}=\{1,2,3,\dots\}$, integers $\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}$, rationals $\mathbb{Q}$ are fractions of integers, and irrationals such as $\sqrt{2}$ and $\pi$ cannot be written as fractions. Together, rationals and irrationals form the real numbers $\mathbb{R}$.`,
      R`On the number line, values increase to the right. Absolute value $|x|$ is distance from zero, so $|-4|=4$ and $-4< -1 < 2$.`,
    ],
    [
      ['Expanded form', R`3047.52=3\times10^3+0\times10^2+4\times10+7+\frac{5}{10}+\frac{2}{100}`, 'Each digit is multiplied by the value of its position.'],
      ['Rational number', R`x=\frac{p}{q},\quad p,q\in\mathbb{Z},\ q\neq 0`, 'Terminating and repeating decimals are rational.'],
      ['Absolute value', R`|x|=\begin{cases}x & x\ge 0\\ -x & x<0\end{cases}`, 'Always non-negative.'],
    ],
    [
      EX('Read a decimal', R`Write $3047.52$ in expanded form and name the value of the digit $5$.`, [
        R`Split the number at the decimal point: $3047 + 0.52$.`,
        R`$3047 = 3\times 10^3 + 4\times 10 + 7$.`,
        R`$0.52 = \frac{5}{10}+\frac{2}{100}$.`,
        'The digit 5 is in the tenths column, so it is worth 0.5.',
      ], R`3\times10^3+4\times10+7+\frac{5}{10}+\frac{2}{100}`),
      EX('Order real numbers', R`Order $-\frac{1}{2},\ -0.6,\ 0.3,\ -1.2$ from least to greatest.`, [
        R`Convert to decimals: $-\frac{1}{2}=-0.5$.`,
        'Place them on a number line: -1.2, -0.6, -0.5, 0.3.',
        R`Remember that $-0.6 < -0.5$ because $-0.6$ is farther from zero on the negative side.`,
      ], R`-1.2 < -0.6 < -\frac{1}{2} < 0.3`),
    ],
    [
      Q(R`What is the value of the digit $7$ in $3.472$?`, [R`7`, R`\frac{7}{10}`, R`\frac{7}{100}`, R`\frac{7}{1000}`], 2, 'Count two places to the right of the decimal point.', R`The 7 is in the hundredths column: $\frac{7}{100}=0.07$.`, 'Easy'),
      Q('Which of these numbers is irrational?', ['0.75', '−3', R`\sqrt{2}`, R`\frac{22}{7}`], 2, 'An irrational number cannot be written as a ratio of integers.', R`$\sqrt{2}$ has a non-terminating, non-repeating decimal expansion, so it is irrational. The others are rational.`, 'Easy'),
      Q(R`Round $47{,}865$ to the nearest thousand.`, ['47,000', '47,900', '48,000', '50,000'], 2, 'Look at the hundreds digit, which is 8.', R`The hundreds digit is $8\ge 5$, so $47{,}865$ rounds up to $48{,}000$.`, 'Easy'),
      Q(R`If $-2 < x \le 3$ and $x$ is an integer, how many values can $x$ take?`, ['4', '5', '6', 'Unlimited'], 1, 'List the integers from -1 through 3.', R`The integers are $-1,0,1,2,3$ — five values. Note that $-2$ is excluded but $3$ is included.`, 'Medium'),
    ], ['place value', 'real numbers', 'integers', 'rounding'], 'A number is rational if its decimal eventually terminates or repeats.'),

  topic('order-of-operations', 'foundations', 'Order of Operations',
    'Use PEMDAS/BODMAS to evaluate expressions unambiguously, including brackets and exponents.',
    [
      'The priority order is: Parentheses (brackets), Exponents (orders), Multiplication and Division (left to right), Addition and Subtraction (left to right).',
      'Multiplication does not automatically come before division, and addition does not automatically come before subtraction. Work left to right within each pair.',
      'A minus sign in front of a power applies after the power: $−3^2 = −9$, but $(−3)^2 = 9$.',
    ],
    [
      ['PEMDAS', 'Parentheses → Exponents → Multiplication/Division → Addition/Subtraction', 'Mnemonic for the order of operations.'],
      ['Grouping symbols', R`( ) \; [ ] \; \{ \} \; \text{fraction bars}`, 'Evaluate innermost groupings first.'],
    ],
    [
      EX('Mixed operations', R`Evaluate $3+4\times 2^2-6\div 3$.`, [
        'No parentheses; evaluate the exponent: $2^2=4$.',
        'Multiply and divide from left to right: $4\\times4=16$ and $6\\div3=2$.',
        'Add and subtract: $3+16-2$.',
      ], R`17`),
      EX('Nested grouping', R`Evaluate $\frac{(5-2)^2+8}{4}$.`, [
        'Parentheses first: $5-2=3$.',
        'Square: $3^2=9$.',
        'Add in the numerator: $9+8=17$.',
      ], R`\frac{17}{4}=4.25`),
    ],
    [
      Q(R`Evaluate $8+2\times 3^2$.`, ['30', '26', '90', '66'], 1, 'The exponent is evaluated before multiplication.', R`$3^2=9$, then $2\times9=18$, then $8+18=26$.`, 'Easy'),
      Q(R`Evaluate $(12-4)\div 2^2$.`, ['4', '1', '2', '16'], 2, 'Do the parentheses and exponent before dividing.', R`$(12-4)=8$ and $2^2=4$, so $8\div4=2$.`, 'Easy'),
      Q(R`Evaluate $24\div(3+3)\times 2$.`, ['8', '2', '16', '12'], 0, 'Multiplication and division are worked left to right.', R`$24\div6=4$, then $4\times2=8$.`, 'Medium'),
      Q(R`What is the value of $-3^2$?`, ['9', '−9', '−6', '6'], 1, 'The exponent belongs to 3, not to −3.', R`$-3^2=-(3\times3)=-9$. Parentheses would be needed for $(-3)^2=9$.`, 'Medium'),
    ], ['PEMDAS', 'BODMAS', 'exponents'], 'Write each step on a new line; most order-of-operations mistakes come from doing too much at once.'),

  topic('fractions', 'foundations', 'Fractions',
    'Add, subtract, multiply and divide fractions; simplify results and convert between forms.',
    [
      R`A fraction $\frac{a}{b}$ means $a$ equal parts out of $b$; $b$ cannot be zero. To add or subtract, rewrite the fractions with a common denominator: $\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}$.`,
      R`Multiplication is straightforward: $\frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd}$. For division, multiply by the reciprocal: $\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}$.`,
      R`A fraction is in lowest terms when the numerator and denominator share no common factor. Improper fractions such as $\frac{11}{4}$ can be written as mixed numbers $2\frac{3}{4}$.`,
    ],
    [
      ['Addition', R`\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}`, 'A common denominator is required.'],
      ['Multiplication', R`\frac{a}{b}\times\frac{c}{d}=\frac{ac}{bd}`, 'Cancel common factors before multiplying when possible.'],
      ['Division', R`\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}`, 'Flip the second fraction, then multiply.'],
    ],
    [
      EX('Unlike denominators', R`Evaluate $\frac{2}{3}+\frac{1}{4}$.`, [
        'The least common denominator of 3 and 4 is 12.',
        R`$\frac{2}{3}=\frac{8}{12}$ and $\frac{1}{4}=\frac{3}{12}$.`,
        R`$\frac{8}{12}+\frac{3}{12}=\frac{11}{12}$.`,
      ], R`\frac{11}{12}`),
      EX('Divide fractions', R`Evaluate $\frac{5}{6}\div\frac{10}{21}$.`, [
        'Change division to multiplication by the reciprocal: $\\frac{5}{6}\\times\\frac{21}{10}$.',
        R`Cancel: $\frac{21}{6}=\frac{7}{2}$ and $\frac{5}{10}=\frac{1}{2}$.`,
        R`$\frac{1}{2}\times\frac{7}{2}=\frac{7}{4}$.`,
      ], R`\frac{7}{4}=1\frac{3}{4}`, 'Cancelling before multiplying keeps the numbers small.'),
    ],
    [
      Q(R`Evaluate $\frac{3}{4}+\frac{5}{6}$.`, [R`\frac{8}{10}`, R`\frac{19}{12}`, R`\frac{4}{5}`, R`\frac{11}{12}`], 1, 'The least common denominator of 4 and 6 is 12.', R`$\frac{9}{12}+\frac{10}{12}=\frac{19}{12}=1\frac{7}{12}$.`, 'Easy'),
      Q(R`Evaluate $\frac{7}{8}-\frac{1}{3}$.`, [R`\frac{13}{24}`, R`\frac{6}{5}`, R`\frac{1}{2}`, R`\frac{19}{24}`], 0, 'Use 24 as the common denominator.', R`$\frac{21}{24}-\frac{8}{24}=\frac{13}{24}$.`, 'Easy'),
      Q(R`Evaluate $\frac{2}{5}\div\frac{6}{7}$.`, [R`\frac{7}{15}`, R`\frac{12}{35}`, R`\frac{15}{7}`, R`\frac{3}{10}`], 0, 'Multiply by $\\frac{7}{6}$.', R`$\frac{2}{5}\times\frac{7}{6}=\frac{14}{30}=\frac{7}{15}$.`, 'Medium'),
      Q(R`Write $0.375$ as a fraction in simplest form.`, [R`\frac{3}{10}`, R`\frac{3}{8}`, R`\frac{37}{100}`, R`\frac{1}{4}`], 1, 'Write it as $\\frac{375}{1000}$, then divide top and bottom by 125.', R`$0.375=\frac{375}{1000}=\frac{3}{8}$.`, 'Medium'),
    ], ['common denominator', 'reciprocal', 'mixed number'], 'Never add denominators. Only the numerators combine once the denominators match.'),

  topic('decimals', 'foundations', 'Decimals',
    'Operate confidently with decimals, convert to fractions, and round to a required precision.',
    [
      'Decimals are fractions with denominators of 10, 100, 1000 and so on. Align decimal points when adding or subtracting.',
      'For multiplication, multiply as whole numbers and then place the decimal point so the total number of decimal places is the sum of the decimal places in the factors.',
      'For division by a decimal, move the decimal point in both divisor and dividend until the divisor is a whole number.',
    ],
    [
      ['Terminating decimal', R`0.125=\frac{125}{1000}=\frac{1}{8}`, 'Finite number of digits after the point.'],
      ['Repeating decimal', R`0.\overline{3}=\frac{1}{3}`, 'A bar marks the repeating block.'],
      ['Rounding rule', R`3.14159\to3.142`, 'If the next digit is 5 or more, round up; round only once from the original number.'],
    ],
    [
      EX('Decimal multiplication', R`Evaluate $0.07\times 0.8$.`, [
        'Ignore the decimal points: $7\\times 8=56$.',
        'There are 2 decimal places in 0.07 and 1 in 0.8, so 3 in total.',
        R`Place the point: $0.056$.`,
      ], R`0.056`),
      EX('Divide by a decimal', R`Evaluate $4.5\div 0.9$.`, [
        'Multiply both numbers by 10 to make the divisor a whole number: $45\\div 9$.',
        'Compute $45\\div 9=5$.',
        'Check: $5\\times 0.9=4.5$.',
      ], R`5`),
    ],
    [
      Q(R`Evaluate $0.25\times 0.4$.`, ['1', '0.1', '0.01', '0.010'], 1, '$25\\times4=100$; count three decimal places.', R`$0.25\times0.4=0.100=0.1$.`, 'Easy'),
      Q(R`Evaluate $7.2\div 0.9$.`, ['0.8', '8', '80', '6.3'], 1, 'Multiply both numbers by 10 first.', R`$72\div9=8$.`, 'Easy'),
      Q(R`Write $0.125$ as a fraction in simplest form.`, [R`\frac{1}{8}`, R`\frac{1}{5}`, R`\frac{1}{4}`, R`\frac{125}{10}`], 0, 'Use 1000 as the denominator and simplify by 125.', R`$0.125=\frac{125}{1000}=\frac{1}{8}$.`, 'Medium'),
      Q(R`Round $3.14159$ to three decimal places.`, ['3.141', '3.142', '3.140', '3.15'], 1, 'The fourth decimal digit is 5.', R`The third decimal digit is 1 and the next digit is 5, so round up to $3.142$.`, 'Medium'),
    ], ['decimal places', 'rounding', 'terminating decimal'], 'Estimate first: $0.07\\times0.8$ must be a little more than $0.05$, so $0.056$ is sensible.'),

  topic('percentages', 'foundations', 'Percentages',
    'Calculate percentages, percentage change, and reverse percentages with confidence.',
    [
      R`Percent means "per hundred": $p\%=\frac{p}{100}$. To find $p\%$ of $A$, compute $\frac{p}{100}\times A$.`,
      R`Percentage change is $\frac{\text{new} - \text{original}}{\text{original}}\times100\%$. A positive result is an increase; a negative result is a decrease.`,
      'For a reverse percentage, the original is 100%. After a 20% increase the new value is 120% of the original, so divide by 1.20.',
    ],
    [
      ['Percent of a number', R`p\%\text{ of }A=\frac{p}{100}A`, 'Convert the percent to a decimal first.'],
      ['Percentage change', R`\frac{V_{\text{new}}-V_{\text{old}}}{V_{\text{old}}}\times100\%`, 'Always compare with the original value.'],
      ['Reverse percentage', R`\text{original}=\frac{\text{new}}{1\pm r}`, 'Use + for increases, − for decreases.'],
    ],
    [
      EX('Find a percentage', R`Find $18\%$ of $250$.`, [
        R`Convert: $18\%=\frac{18}{100}=0.18$.`,
        'Multiply: $0.18\\times250$.',
        'Since $0.18\\times100=18$, the result is $18\\times2.5=45$.',
      ], R`45`),
      EX('Reverse a discount', 'A jacket costs ₹64 after a 20% discount. Find the original price.', [
        'After a 20% discount, the sale price is 80% of the original.',
        R`So $0.80\times\text{original}=64$.`,
        'Divide: $64\\div0.80=80$.',
      ], R`₹80`, 'A common error is to add 20% of 64; that gives ₹76.80, which is wrong.'),
    ],
    [
      Q(R`Find $12\%$ of $150$.`, ['12', '18', '24', '15'], 1, '$0.12\\times150$.', R`$0.12\times150=18$.`, 'Easy'),
      Q('45 is what percentage of 60?', ['45%', '70%', '75%', '80%'], 2, 'Divide 45 by 60 and multiply by 100.', R`$\frac{45}{60}\times100\%=75\%$.`, 'Easy'),
      Q('Decrease 200 by 8%.', ['184', '192', '196', '216'], 0, '8% of 200 is 16.', R`$200-0.08(200)=200-16=184$.`, 'Easy'),
      Q('A population grows by 5% to 420. What was the original population?', ['399', '400', '415', '441'], 1, '420 is 105% of the original.', R`$\text{original}=420\div1.05=400$.`, 'Medium'),
    ], ['percent change', 'discount', 'reverse percentage'], 'Always state what the 100% is — the original value, not the changed value.'),

  topic('ratios-proportions', 'foundations', 'Ratios & Proportions',
    'Simplify ratios, share quantities in a given ratio, and solve direct and inverse proportion problems.',
    [
      R`A ratio compares quantities: $a:b$ is equivalent to the fraction $\frac{a}{b}$ (when comparing the same kind of quantity). Simplify by dividing by the greatest common factor.`,
      'To share an amount in the ratio $a:b$, divide by the total number of parts $a+b$, then multiply by each share.',
      'In direct proportion, $y=kx$ and $\\frac{y}{x}$ is constant. In inverse proportion, $xy=k$, so one quantity increases as the other decreases.',
    ],
    [
      ['Sharing a ratio', R`\text{share}_A=\frac{a}{a+b}T,\quad \text{share}_B=\frac{b}{a+b}T`, 'T is the total amount.'],
      ['Direct proportion', R`\frac{a}{b}=\frac{c}{d}\Rightarrow ad=bc`, 'Cross-multiply to solve.'],
      ['Inverse proportion', R`x_1y_1=x_2y_2`, 'Used for workers/time and speed/time problems.'],
    ],
    [
      EX('Share in a ratio', 'Share 600 in the ratio 2:3.', [
        'Total number of parts: $2+3=5$.',
        'One part is $600\\div5=120$.',
        'Shares: $2(120)=240$ and $3(120)=360$. Check: $240+360=600$.',
      ], R`240\text{ and }360`),
      EX('Direct proportion', 'If 5 notebooks cost ₹75, how much do 8 notebooks cost?', [
        'Cost per notebook: $75\\div5=15$.',
        'Eight notebooks cost $8\\times15=120$.',
        'Equivalently, $\\frac{75}{5}=\\frac{x}{8}$ gives $x=120$.',
      ], R`₹120`),
    ],
    [
      Q('Simplify the ratio 36:54.', ['2:3', '3:4', '6:9', '4:6'], 0, 'Divide both numbers by 18.', R`$\gcd(36,54)=18$, so $36:54=2:3$. Note 6:9 is equivalent but not fully simplified.`, 'Easy'),
      Q('Divide 84 in the ratio 3:4.', ['36 and 48', '42 and 42', '30 and 54', '28 and 56'], 0, 'There are 7 parts; one part is 12.', R`$84\div7=12$, giving $3(12)=36$ and $4(12)=48$.`, 'Easy'),
      Q('A map has scale 1:50,000. A distance of 3 cm on the map represents how far in reality?', ['150 m', '1.5 km', '15 km', '150 km'], 1, '3 cm becomes 150,000 cm.', R`$3\times50{,}000=150{,}000$ cm $=1{,}500$ m $=1.5$ km.`, 'Medium'),
      Q('If 6 workers finish a job in 10 days, how long will 15 workers take at the same rate?', ['25 days', '12 days', '4 days', '6 days'], 2, 'This is inverse proportion: $6\\times10=15\\times d$.', R`$d=\frac{60}{15}=4$ days.`, 'Medium'),
    ], ['ratio', 'scale', 'direct proportion', 'inverse proportion'], 'In inverse proportion, more workers means fewer days — sanity-check the direction of the answer.'),

  topic('exponents-roots', 'foundations', 'Exponents & Roots',
    'Master the laws of indices, negative and fractional powers, and simplification of radicals.',
    [
      R`An exponent counts repeated multiplication: $a^n=a\cdot a\cdots a$ ($n$ factors). The laws are $a^m a^n=a^{m+n}$, $\frac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$ and $(ab)^n=a^n b^n$.`,
      R`Negative powers mean reciprocals: $a^{-n}=\frac{1}{a^n}$. Fractional powers mean roots: $a^{1/n}=\sqrt[n]{a}$ and $a^{m/n}=\sqrt[n]{a^m}$.`,
      R`To simplify $\sqrt{n}$, factor out perfect squares: $\sqrt{72}=\sqrt{36\times2}=6\sqrt{2}$.`,
    ],
    [
      ['Product rule', R`a^m\cdot a^n=a^{m+n}`, 'Add exponents when multiplying like bases.'],
      ['Power rule', R`(a^m)^n=a^{mn}`, 'Multiply exponents when raising a power to a power.'],
      ['Fractional exponent', R`a^{m/n}=\sqrt[n]{a^m}`, 'Denominator = root, numerator = power.'],
    ],
    [
      EX('Combine powers', R`Simplify $2^3\times 2^4$.`, [
        'The bases are the same, so add exponents: $3+4=7$.',
        R`$2^7=2\times2\times2\times2\times2\times2\times2=128$.`,
      ], R`2^7=128`),
      EX('Fractional power', R`Evaluate $8^{2/3}$.`, [
        R`Rewrite as $\sqrt[3]{8^2}$ or $(\sqrt[3]{8})^2$.`,
        'The cube root of 8 is 2.',
        'Square it: $2^2=4$.',
      ], R`4`),
    ],
    [
      Q(R`Simplify $3^2\times 3^3$, leaving the answer as a single power.`, ['3⁶', '9⁵', '6³', '3⁵'], 3, 'Add the exponents: 2 + 3.', R`The bases match, so $3^2\times3^3=3^{2+3}=3^5$.`, 'Easy'),
      Q(R`Evaluate $(2^3)^2$.`, ['16', '64', '32', '256'], 1, 'Multiply the exponents: 3 × 2.', R`$(2^3)^2=2^6=64$.`, 'Easy'),
      Q(R`Evaluate $4^{-2}$.`, ['−16', '−8', R`\frac{1}{16}`, R`\frac{1}{8}`], 2, 'A negative exponent means reciprocal.', R`$4^{-2}=\frac{1}{4^2}=\frac{1}{16}$.`, 'Medium'),
      Q(R`Simplify $\sqrt{72}$.`, [R`6\sqrt{2}`, R`8\sqrt{2}`, R`12\sqrt{6}`, R`3\sqrt{8}`], 0, '72 = 36 × 2 and 36 is a perfect square.', R`$\sqrt{72}=\sqrt{36}\sqrt{2}=6\sqrt{2}$.`, 'Medium'),
    ], ['indices', 'radicals', 'fractional exponents'], 'A negative exponent never makes the number negative — it makes a reciprocal.'),
];
