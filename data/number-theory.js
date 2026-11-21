import { R, EX, Q, topic } from './core.js';

export default [
  topic('divisibility-primes', 'number-theory', 'Divisibility & Prime Numbers',
    'Test divisibility quickly, factor integers and understand why primes are the building blocks.',
    [
      'A number divides another if the division leaves no remainder. Useful tests: divisible by 2 if even; by 3 if the digit sum is a multiple of 3; by 4 if the last two digits are divisible by 4; by 5 if it ends in 0 or 5; by 9 if the digit sum is a multiple of 9; by 10 if it ends in 0.',
      'A prime number has exactly two positive divisors: 1 and itself. A composite number has more. The number 1 is neither prime nor composite.',
      'The Fundamental Theorem of Arithmetic says every integer greater than 1 factors uniquely into primes, up to ordering.',
    ],
    [
      ['Divisibility by 3 or 9', R`n\equiv(\text{sum of digits})\pmod 3`, 'Sum the digits; if the sum is divisible by 3 (or 9), so is the number.'],
      ['Prime factorisation', R`360=2^3\times3^2\times5`, 'Unique for every integer > 1.'],
    ],
    [
      EX('Apply divisibility rules', 'Is 252 divisible by 3, 4 and 9?', [
        'Digit sum: $2+5+2=9$, which is divisible by 3 and by 9.',
        'Last two digits: 52 = 4 × 13, so it is divisible by 4.',
      ], R`252\text{ is divisible by }3,\ 4\text{ and }9`),
      EX('Prime factorisation', 'Write 360 as a product of primes.', [
        R`Divide by 2 repeatedly: $360=2\times180=2^2\times90=2^3\times45$.`,
        R`Factor 45: $45=3^2\times5$.`,
        R`Combine: $360=2^3\times3^2\times5$.`,
      ], R`2^3\times3^2\times5`),
    ],
    [
      Q('Which of these numbers is prime?', ['51', '57', '59', '63'], 2, 'Test factors up to the square root of each number.', R`59 has no divisors other than 1 and 59. The others are divisible by 3, 3 and 7 respectively.`, 'Easy'),
      Q('Is 123,456 divisible by 3?', ['Yes', 'No', 'Only if even', 'Cannot tell'], 0, 'Add the digits.', R`Digit sum $=1+2+3+4+5+6=21$, a multiple of 3, so 123,456 is divisible by 3.`, 'Easy'),
      Q('Write 84 as a product of primes.', ['2² × 3 × 7', '2 × 3 × 14', '4 × 21', '2³ × 7'], 0, 'Divide by the smallest prime repeatedly.', R`$84=2^2\times3\times7$ is the unique prime factorisation.`, 'Medium'),
      Q('Which number is divisible by 4?', ['7314', '7312', '7310', '7311'], 1, 'Check the last two digits.', R`The last two digits of 7312 are 12, which is divisible by 4.`, 'Easy'),
    ], ['prime', 'composite', 'divisibility rules', 'factorisation'], 'You only need to test prime factors up to $\\sqrt{n}$ when checking whether n is prime.'),

  topic('gcd-lcm', 'number-theory', 'GCD & LCM',
    'Find greatest common divisors and least common multiples using factors or the Euclidean algorithm.',
    [
      R`The greatest common divisor $\gcd(a,b)$ is the largest positive integer dividing both numbers. The least common multiple $\operatorname{lcm}(a,b)$ is the smallest positive integer that both numbers divide.`,
      'The Euclidean algorithm repeatedly replaces $(a,b)$ with $(b,a\\bmod b)$ until the remainder is 0; the last non-zero remainder is the gcd.',
      R`For positive integers, $\gcd(a,b)\cdot\operatorname{lcm}(a,b)=ab$. Prime factorisations give $\gcd$ as the product of the smaller powers and $\operatorname{lcm}$ as the product of the larger powers.`,
    ],
    [
      ['Euclidean algorithm', R`\gcd(a,b)=\gcd(b,a\bmod b)`, 'Repeat until the remainder is zero.'],
      ['Product relation', R`\gcd(a,b)\cdot\operatorname{lcm}(a,b)=|ab|`, 'Useful for finding one from the other.'],
    ],
    [
      EX('Euclidean algorithm', R`Find $\gcd(48,180)$.`, [
        R`$180=3\times48+36$ (remainder 36).`,
        R`$48=1\times36+12$ (remainder 12).`,
        R`$36=3\times12+0$, so the last non-zero remainder is 12.`,
      ], R`\gcd(48,180)=12`),
      EX('LCM from factors', R`Find $\operatorname{lcm}(12,18)$.`, [
        R`$12=2^2\times3$ and $18=2\times3^2$.`,
        'Take the largest power of each prime: $2^2$ and $3^2$.',
        R`$\operatorname{lcm}=4\times9=36$.`,
      ], R`36`),
    ],
    [
      Q(R`Find $\gcd(24,36)$.`, ['6', '12', '18', '24'], 1, 'Largest number dividing both.', R`Factors common to both include 1, 2, 3, 4, 6, 12; the greatest is 12.`, 'Easy'),
      Q(R`Find $\operatorname{lcm}(8,12)$.`, ['24', '48', '96', '20'], 0, 'List multiples of 12 until one is divisible by 8.', R`The smallest common multiple is 24.`, 'Easy'),
      Q(R`If $\gcd(12,18)=6$, find $\operatorname{lcm}(12,18)$.`, ['18', '24', '36', '216'], 2, 'Use gcd × lcm = ab.', R`$\operatorname{lcm}=12\times18/6=36$.`, 'Medium'),
      Q(R`Find $\operatorname{lcm}(4,6,9)$.`, ['24', '36', '54', '72'], 1, 'Use prime factorisations: 2², 2·3, 3².', R`Largest powers: $2^2\times3^2=36$.`, 'Medium'),
    ], ['Euclidean algorithm', 'greatest common factor', 'least common multiple'], 'GCD and LCM problems become easy once you write the prime factorisations.'),

  topic('modular-arithmetic', 'number-theory', 'Modular Arithmetic',
    'Work with remainders, congruences and repeating patterns such as last digits.',
    [
      R`We write $a\equiv b\pmod n$ when $a$ and $b$ leave the same remainder on division by $n$, equivalently when $n\mid(a-b)$.`,
      'Congruences can be added, subtracted and multiplied: if $a\\equiv b$ and $c\\equiv d$ (mod $n$), then $a+c\\equiv b+d$ and $ac\\equiv bd$ (mod $n$).',
      R`Powers often cycle. For example, powers of 7 end in 7, 9, 3, 1, then repeat every 4, so $7^{100}$ ends in 1 because $100$ is divisible by 4.`,
    ],
    [
      ['Congruence', R`a\equiv b\pmod n\iff n\mid(a-b)`, 'Same remainder modulo n.'],
      ['Remainder', R`a=nq+r,\quad0\le r<n`, 'r is a mod n.'],
    ],
    [
      EX('Reduce a number', R`Find the remainder when 17 is divided by 5, and state $17\pmod 5$.`, [
        R`$17=3\times5+2$, so the remainder is 2.`,
        R`Therefore $17\equiv2\pmod5$.`,
      ], R`2`),
      EX('A last-digit pattern', 'Find the last digit of $7^{100}$.', [
        'Compute the cycle: $7^1$ ends in 7, $7^2$ in 9, $7^3$ in 3, $7^4$ in 1.',
        'The pattern repeats every 4 exponents.',
        'Since $100=4\\times25$, $7^{100}$ ends in the fourth element: 1.',
      ], R`1`),
    ],
    [
      Q(R`Find $38\bmod 7$.`, ['3', '4', '5', '2'], 0, '$38 = 5×7 + 3$.', R`$38\equiv3\pmod7$.`, 'Easy'),
      Q(R`Find $(15\times8)\bmod 6$.`, ['0', '2', '3', '4'], 0, '$15\\times8=120$, divisible by 6.', R`$120\equiv0\pmod6$.`, 'Easy'),
      Q('Using clock arithmetic (mod 12), what is 9 + 7?', ['16', '4', '6', '2'], 1, '$16-12=4$.', R`$9+7=16\equiv4\pmod{12}$.`, 'Easy'),
      Q(R`Find the smallest positive $x$ with $x\equiv3\pmod5$ and $x\equiv2\pmod3$.`, ['8', '13', '18', '23'], 0, 'List numbers congruent to 3 mod 5: 3, 8, 13...', R`$8\bmod5=3$ and $8\bmod3=2$, so $x=8$.`, 'Medium'),
    ], ['congruence', 'remainder', 'clock arithmetic'], 'Reduce intermediate results modulo n to keep numbers small.'),

  topic('number-bases', 'number-theory', 'Number Bases',
    'Convert between binary, decimal and hexadecimal, and understand place value in any base.',
    [
      R`In base $b$, the digit positions represent powers of $b$. For example, $1011_2=1\cdot2^3+0\cdot2^2+1\cdot2+1=11_{10}$.`,
      'To convert a decimal number to another base, repeatedly divide by the new base and read the remainders from bottom to top.',
      'Hexadecimal uses digits 0–9 and A–F for 10–15. Each hex digit corresponds to four binary digits (a nibble), which is why it is common in computing.',
    ],
    [
      ['Binary to decimal', R`(d_nd_{n-1}\dots d_0)_2=\sum d_i2^i`, 'Sum powers of two where bits are 1.'],
      ['Decimal to binary', R`45_{10}=101101_2`, 'Repeatedly divide by 2 and read the remainders upwards; the last remainder is the leading bit.'],
    ],
    [
      EX('Binary to decimal', R`Convert $1011_2$ to decimal.`, [
        R`$1\cdot2^3+0\cdot2^2+1\cdot2^1+1\cdot2^0$.`,
        R`$=8+0+2+1=11$.`,
      ], R`1011_2=11_{10}`),
      EX('Decimal to binary', R`Convert $45_{10}$ to binary.`, [
        'Divide repeatedly by 2: 45÷2 = 22 r1; 22÷2 = 11 r0; 11÷2 = 5 r1; 5÷2 = 2 r1; 2÷2 = 1 r0; 1÷2 = 0 r1.',
        'Read remainders from last to first: 101101.',
      ], R`45_{10}=101101_2`),
    ],
    [
      Q(R`Convert $1101_2$ to decimal.`, ['11', '13', '15', '26'], 1, '8 + 4 + 0 + 1.', R`$8+4+1=13$.`, 'Easy'),
      Q(R`Convert $27_{10}$ to binary.`, ['11011', '11101', '10111', '10011'], 0, 'Repeated division by 2.', R`$27=16+8+2+1=11011_2$.`, 'Medium'),
      Q(R`Convert hexadecimal $1A_{16}$ to decimal.`, ['16', '26', '30', '10'], 1, 'A represents 10.', R`$1\times16+10=26$.`, 'Medium'),
      Q(R`What is $1111_2$ in decimal?`, ['7', '11', '15', '31'], 2, '8 + 4 + 2 + 1.', R`$1111_2=15_{10}$.`, 'Easy'),
    ], ['binary', 'hexadecimal', 'base conversion'], 'Binary digits map directly to powers of two, starting at $2^0$ on the right.'),
];
