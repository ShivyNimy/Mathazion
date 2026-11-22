import { R, EX, Q, topic } from './core.js';

export default [
  topic('data-displays', 'statistics', 'Data Displays & Graphs',
    'Read and choose appropriate charts, tables and plots for different kinds of data.',
    [
      'Categorical data (colour, subject) is best shown with bar charts or pie charts. Numerical data is shown with histograms, dot plots, box plots or stem-and-leaf diagrams.',
      R`In a pie chart, each category's angle is $\frac{\text{frequency}}{\text{total}}\times360^\circ$. In a histogram, bar area represents frequency and bins are often equal width.`,
      'Scatter plots show the relationship between two numerical variables: positive correlation rises, negative correlation falls, and no correlation looks random.',
    ],
    [
      ['Pie angle', R`\theta=\frac{f}{n}\times360^\circ`, 'f = category frequency, n = total.'],
      ['Relative frequency', R`\text{relative frequency}=\frac{f}{n}`, 'Often expressed as a percentage.'],
    ],
    [
      EX('Pie chart angle', 'In a survey, 25% of students chose football. What pie angle represents them?', [
        'Convert the percentage to a fraction: 25% = 0.25.',
        'Multiply by the full circle: $0.25\\times360°=90°$.',
      ], R`90^\circ`),
      EX('Read a frequency table', 'A class records test scores: 60–69: 4 students, 70–79: 9, 80–89: 7, 90–100: 5. How many scored at least 70?', [
        'Identify the relevant groups: 70–79, 80–89 and 90–100.',
        'Add frequencies: $9+7+5=21$.',
      ], R`21\text{ students}`),
    ],
    [
      Q(R`A category makes up 20% of a pie chart. What angle does its slice have?`, ['20°', '36°', '72°', '90°'], 2, '20% of 360°.', R`$0.20\times360^\circ=72^\circ$.`, 'Easy'),
      Q('Which graph is most suitable for comparing counts of different categories?', ['Histogram', 'Bar chart', 'Line graph', 'Scatter plot'], 1, 'Bar charts compare discrete categories.', R`A bar chart is designed for comparing categorical counts.`, 'Easy'),
      Q('A scatter plot shows points rising from left to right. This indicates:', ['Negative correlation', 'No correlation', 'Positive correlation', 'A pie chart'], 2, 'Rising pattern means both variables increase together.', R`An upward trend indicates positive correlation.`, 'Easy'),
      Q('In a histogram with equal-width bins, the height of a bar represents:', ['The mean', 'The frequency or relative frequency', 'The median', 'The range'], 1, 'Height encodes how many observations fall in the bin.', R`Bar height shows the frequency (or relative frequency) of that interval.`, 'Medium'),
    ], ['bar chart', 'pie chart', 'histogram', 'scatter plot'], 'A histogram is for numerical intervals; a bar chart is for separate categories.'),

  topic('central-tendency', 'statistics', 'Mean, Median & Mode',
    'Calculate and compare measures of centre, including weighted means and the effect of outliers.',
    [
      R`The mean is $\bar{x}=\frac{\sum x_i}{n}$ — the sum of values divided by how many there are. It uses every value and is sensitive to outliers.`,
      'The median is the middle value when data are ordered. For an even number of values, average the two middle ones. The mode is the most frequent value; data can have no mode or several modes.',
      'For skewed data with extreme values, the median is usually a better measure of centre than the mean.',
    ],
    [
      ['Mean', R`\bar{x}=\frac{\sum x_i}{n}`, 'Sum divided by count.'],
      ['Median position', R`\frac{n+1}{2}`, 'For n ordered values (odd n gives an actual data point).'],
      ['Weighted mean', R`\bar{x}_w=\frac{\sum w_ix_i}{\sum w_i}`, 'Used for grades with different weights.'],
    ],
    [
      EX('Mean, median and mode', 'Find all three for 2, 3, 3, 5, 8.', [
        R`Mean: $\frac{2+3+3+5+8}{5}=\frac{21}{5}=4.2$.`,
        'Ordered data are already given; the middle (third) value is 3, so the median is 3.',
        'The value 3 occurs twice, more than any other: the mode is 3.',
      ], R`\text{Mean}=4.2,\ \text{median}=3,\ \text{mode}=3`),
      EX('Weighted mean', 'A course has a test worth 60% (score 80) and a project worth 40% (score 90). Find the weighted average.', [
        R`Weighted sum: $0.6(80)+0.4(90)=48+36=84$.`,
        'Weights add to 1, so the weighted mean is 84.',
      ], R`84`),
    ],
    [
      Q(R`Find the mean of 4, 7, 9 and 12.`, ['7', '8', '9', '10'], 1, 'Add the numbers and divide by 4.', R`$(4+7+9+12)/4=32/4=8$.`, 'Easy'),
      Q(R`Find the median of 3, 5, 7, 9, 11.`, ['5', '6', '7', '9'], 2, 'Data are ordered; take the middle value.', R`The third of five values is 7.`, 'Easy'),
      Q(R`Find the mode of 2, 2, 4, 6, 6, 6.`, ['2', '4', '6', 'No mode'], 2, 'Look for the most frequent value.', R`6 appears three times, more than any other value.`, 'Easy'),
      Q('Five numbers have mean 12. Four of them sum to 48. What is the fifth?', ['8', '10', '12', '16'], 2, 'Total sum = mean × count.', R`Total $=5\times12=60$, so the fifth number is $60-48=12$.`, 'Medium'),
    ], ['average', 'outlier', 'weighted mean'], 'An extreme outlier pulls the mean but barely moves the median.'),

  topic('probability-basics', 'statistics', 'Probability Basics',
    'Work with sample spaces, theoretical probability, complements and equally likely outcomes.',
    [
      R`Probability is a number from 0 to 1: $P(E)=\frac{\text{favourable outcomes}}{\text{total possible outcomes}}$ when all outcomes are equally likely.`,
      R`All probabilities in a sample space add to 1, so $P(\text{not }E)=1-P(E)$. Events are mutually exclusive if they cannot occur at the same time.`,
      'For two fair dice there are $6\\times6=36$ equally likely ordered outcomes; six of them sum to 7.',
    ],
    [
      ['Classical probability', R`P(E)=\frac{n(E)}{n(S)}`, 'Requires equally likely outcomes.'],
      ['Complement', R`P(E')=1-P(E)`, 'Useful for "at least one" questions.'],
    ],
    [
      EX('Rolling a die', 'A fair die is rolled. Find the probability of an even number.', [
        'Sample space: $\\{1,2,3,4,5,6\\}$ — six outcomes.',
        'Favourable: $\\{2,4,6\\}$ — three outcomes.',
      ], R`P(\text{even})=\frac36=\frac12`),
      EX('Drawing a card', 'A card is drawn from a standard 52-card deck. Find the probability it is a heart.', [
        'There are 13 hearts in a deck.',
        R`$P(\text{heart})=\frac{13}{52}=\frac14$.`,
      ], R`\frac14`),
    ],
    [
      Q('A fair coin is tossed. What is the probability of heads?', ['0', '1/4', '1/2', '1'], 2, 'Two equally likely outcomes.', R`$P(H)=\frac12$.`, 'Easy'),
      Q('A bag has 3 red and 5 blue marbles. One is drawn at random. Find P(red).', ['3/5', '3/8', '5/8', '1/8'], 1, 'Favourable over total.', R`$P(\text{red})=\frac{3}{3+5}=\frac38$.`, 'Easy'),
      Q('If the chance of rain is 0.7, what is the chance it does not rain?', ['0.3', '0.7', '1.7', '0.07'], 0, 'Use the complement rule.', R`$P(\text{no rain})=1-0.7=0.3$.`, 'Easy'),
      Q('Two fair dice are rolled. What is the probability the sum is 7?', ['1/12', '1/6', '1/9', '1/36'], 1, 'Six outcomes sum to 7 out of 36.', R`Outcomes (1,6),(2,5),(3,4),(4,3),(5,2),(6,1): $\frac6{36}=\frac16$.`, 'Medium'),
    ], ['sample space', 'complement', 'equally likely'], 'Probabilities must always be between 0 and 1 — use this to catch errors.'),

  topic('compound-events', 'statistics', 'Compound Events',
    'Combine probabilities using the addition and multiplication rules for independent events.',
    [
      R`For mutually exclusive events, $P(A\cup B)=P(A)+P(B)$. In general, $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ so overlap is not counted twice.`,
      R`For independent events, $P(A\cap B)=P(A)P(B)$. Independence means one event does not affect the other's probability — it is different from mutually exclusive.`,
      R`For "at least one" with independent trials, use the complement: $P(\text{at least one})=1-P(\text{none})$.`,
    ],
    [
      ['Addition rule', R`P(A\cup B)=P(A)+P(B)-P(A\cap B)`, 'Subtract the overlap once.'],
      ['Multiplication rule', R`P(A\cap B)=P(A)P(B\mid A)`, 'Simplifies to P(A)P(B) if independent.'],
      ['At least one', R`P(\text{at least one})=1-P(\text{none})^n`, 'For n identical independent trials.'],
    ],
    [
      EX('Two coins', 'Two fair coins are tossed. Find the probability of getting two heads.', [
        'Sample space: HH, HT, TH, TT — four equally likely outcomes.',
        'Only HH is favourable.',
      ], R`P(HH)=\frac14`),
      EX('At least one head', 'Two fair coins are tossed. Find the probability of at least one head.', [
        'Use the complement: no heads means TT.',
        R`$P(TT)=\frac14$, so $P(\text{at least one head})=1-\frac14=\frac34$.`,
      ], R`\frac34`),
    ],
    [
      Q('Two fair dice are rolled. Find the probability both show 6.', ['1/6', '1/12', '1/36', '1/2'], 2, 'Independent events: multiply probabilities.', R`$\frac16\times\frac16=\frac1{36}$.`, 'Easy'),
      Q(R`If $P(A)=0.3$, $P(B)=0.4$ and A, B are mutually exclusive, find $P(A\cup B)$.`, ['0.1', '0.12', '0.7', '0.9'], 2, 'Add probabilities for mutually exclusive events.', R`$P(A\cup B)=0.3+0.4=0.7$.`, 'Easy'),
      Q(R`If A and B are independent with $P(A)=0.6$ and $P(B)=0.5$, find $P(A\cap B)$.`, ['0.1', '0.3', '1.1', '0.8'], 1, 'Multiply for independent events.', R`$0.6\times0.5=0.3$.`, 'Easy'),
      Q('A coin is tossed three times. Find the probability of at least one head.', ['1/8', '3/8', '7/8', '1/2'], 2, 'Complement: no heads in three tosses.', R`$P(\text{no heads})=(1/2)^3=1/8$, so the answer is $1-1/8=7/8$.`, 'Medium'),
    ], ['independent events', 'mutually exclusive', 'addition rule', 'complement'], '"Independent" concerns probabilities; "mutually exclusive" concerns whether events can happen together.'),

  topic('conditional-probability', 'statistics', 'Conditional Probability',
    'Compute conditional probabilities, work with dependent events and apply Bayes\' thinking.',
    [
      R`Conditional probability is written $P(A\mid B)$ — the probability of A given B has occurred. It equals $\frac{P(A\cap B)}{P(B)}$ when $P(B)>0$.`,
      R`For events without replacement, probabilities change after each draw. For example, drawing two red marbles from 4 red and 3 blue without replacement has probability $\frac47\times\frac36=\frac27$.`,
      R`Bayes' theorem: $P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}$. It reverses a conditional probability using prior information.`,
    ],
    [
      ['Conditional probability', R`P(A\mid B)=\frac{P(A\cap B)}{P(B)}`, 'The given event goes in the denominator.'],
      ['Bayes\' theorem', R`P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}`, 'Useful with test results and diagnostics.'],
    ],
    [
      EX('Without replacement', 'A bag holds 4 red and 3 blue marbles. Two are drawn without replacement. Find P(both red).', [
        R`First draw: $P(R_1)=\frac47$.`,
        R`After removing one red, 3 red remain out of 6: $P(R_2\mid R_1)=\frac36$.`,
        R`Multiply: $\frac47\times\frac36=\frac{12}{42}=\frac27$.`,
      ], R`\frac27`),
      EX('Use the formula', R`If $P(A\cap B)=0.2$ and $P(B)=0.5$, find $P(A\mid B)$.`, [
        R`Apply $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$.`,
        R`Compute $\frac{0.2}{0.5}=0.4$.`,
      ], R`0.4`),
    ],
    [
      Q(R`If $P(A\cap B)=0.15$ and $P(B)=0.3$, find $P(A\mid B)$.`, ['0.15', '0.2', '0.5', '0.45'], 2, 'Divide the joint probability by P(B).', R`$P(A\mid B)=0.15/0.3=0.5$.`, 'Easy'),
      Q('A bag has 5 green and 5 yellow balls. Two are drawn without replacement. Find P(second is green given first was green).', ['1/2', '4/9', '5/9', '1/4'], 1, 'After one green is removed, 4 green remain out of 9.', R`$P=\frac49$.`, 'Easy'),
      Q(R`If $P(B\mid A)=P(B)$, then A and B are:`, ['Mutually exclusive', 'Independent', 'Complementary', 'Impossible'], 1, 'Conditioning does not change the probability.', R`If knowing A does not change $P(B)$, the events are independent.`, 'Medium'),
      Q('A bag has 4 red and 3 blue marbles. Two are drawn without replacement. Find P(both blue).', ['1/7', '1/4', '3/28', '9/49'], 0, 'Multiply 3/7 by 2/6.', R`$\frac37\times\frac26=\frac6{42}=\frac17$.`, 'Medium'),
    ], ['conditional probability', 'without replacement', 'Bayes theorem'], 'The event after the word "given" becomes the denominator.'),

  topic('probability-distributions', 'statistics', 'Probability Distributions',
    'Work with discrete and continuous distributions, expected value, the binomial model and the normal curve.',
    [
      R`A probability distribution assigns probabilities to all possible values, with $\sum P(X=x)=1$. Expected value is $E(X)=\sum xP(X=x)$ — the long-run average.`,
      R`A binomial experiment has n independent trials, each with success probability p. The number of successes has $P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$.`,
      R`The normal distribution is symmetric and bell-shaped. About 68% of data lie within 1 standard deviation of the mean, 95% within 2, and 99.7% within 3.`,
    ],
    [
      ['Expected value', R`E(X)=\sum xP(X=x)`, 'Long-run weighted average.'],
      ['Binomial probability', R`P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}`, 'n trials, k successes.'],
      ['Z-score', R`z=\frac{x-\mu}{\sigma}`, 'Number of standard deviations from the mean.'],
    ],
    [
      EX('Expected value', 'Find the expected value when a fair die is rolled.', [
        R`$E(X)=\sum_{k=1}^{6}k\cdot\frac16=\frac{1+2+3+4+5+6}{6}$.`,
        'The sum is 21, so $E(X)=21/6=3.5$.',
      ], R`E(X)=3.5`),
      EX('Binomial probability', 'A fair coin is flipped 5 times. Find the probability of exactly 2 heads.', [
        R`$n=5,\ k=2,\ p=\frac12$, and $\binom52=10$.`,
        R`$P(X=2)=10\left(\frac12\right)^2\left(\frac12\right)^3=\frac{10}{32}=\frac5{16}$.`,
      ], R`\frac5{16}`),
    ],
    [
      Q('What is the expected value of a fair six-sided die roll?', ['3', '3.5', '4', '6'], 1, 'Average of 1 through 6.', R`$(1+2+3+4+5+6)/6=3.5$.`, 'Easy'),
      Q('A fair coin is flipped 3 times. Find P(exactly 3 heads).', ['1/8', '3/8', '1/2', '1/4'], 0, 'Only one outcome out of eight.', R`$\binom33(1/2)^3=1/8$.`, 'Easy'),
      Q('For a normal distribution, approximately what percentage lies within 2 standard deviations of the mean?', ['68%', '95%', '99.7%', '50%'], 1, 'Use the empirical rule.', R`About 95% of observations lie within two standard deviations.`, 'Easy'),
      Q(R`If $X\sim\text{Binomial}(4,0.2)$, find $P(X=0)$.`, ['0.2', '0.8', '0.4096', '0.16'], 2, 'All four trials must fail: $0.8^4$.', R`$P(X=0)=\binom40(0.2)^0(0.8)^4=0.4096$.`, 'Medium'),
    ], ['expected value', 'binomial', 'normal distribution', 'z-score'], 'A binomial model requires fixed trials, two outcomes, constant p and independence.'),

  topic('combinatorics', 'statistics', 'Counting & Combinatorics',
    'Count outcomes with factorials, permutations, combinations and the multiplication principle.',
    [
      R`The factorial $n!=n(n-1)\cdots2\cdot1$, with $0!=1$. The multiplication principle: if one task has $a$ ways and another has $b$ ways, doing both has $ab$ ways.`,
      R`Order matters for permutations: $^nP_r=\frac{n!}{(n-r)!}$. Order does not matter for combinations: $^nC_r=\binom{n}{r}=\frac{n!}{r!(n-r)!}$.`,
      'To decide which formula to use, ask: would swapping two chosen items create a different outcome? If yes, use permutations; otherwise combinations.',
    ],
    [
      ['Factorial', R`n!=n(n-1)(n-2)\cdots1`, '0! = 1 by convention.'],
      ['Permutation', R`{}^nP_r=\frac{n!}{(n-r)!}`, 'Order matters.'],
      ['Combination', R`\binom nr=\frac{n!}{r!(n-r)!}`, 'Order does not matter.'],
    ],
    [
      EX('Combinations', 'How many ways can a committee of 3 be chosen from 8 people?', [
        'Order does not matter, so use combinations.',
        R`$\binom83=\frac{8!}{3!5!}=\frac{8\times7\times6}{3\times2\times1}=56$.`,
      ], R`56`),
      EX('Permutations', 'How many ways can 4 books be arranged on a shelf?', [
        'Order matters, so this is a permutation of all 4 items.',
        R`$4!=4\times3\times2\times1=24$.`,
      ], R`24`),
    ],
    [
      Q(R`Evaluate $6!$.`, ['36', '120', '720', '216'], 2, '6 × 5 × 4 × 3 × 2 × 1.', R`$6!=720$.`, 'Easy'),
      Q(R`Evaluate $\binom82$.`, ['16', '28', '56', '64'], 1, '8 × 7 divided by 2.', R`$\binom82=\frac{8\times7}{2}=28$.`, 'Easy'),
      Q(R`Evaluate $\,{}^5P_3$.`, ['10', '20', '60', '120'], 2, '5 × 4 × 3.', R`$\,{}^5P_3=\frac{5!}{2!}=60$.`, 'Medium'),
      Q('A code uses 3 different letters from the alphabet with no repeats. How many codes are possible?', ['26³', '26 × 25 × 24', '26C3', '26 + 25 + 24'], 1, 'Order matters and no letter repeats.', R`$26\times25\times24=15{,}600$ (a permutation).`, 'Medium'),
    ], ['factorial', 'permutation', 'combination', 'counting principle'], 'Committees and teams are combinations; passwords, rankings and arrangements are permutations.'),
];
