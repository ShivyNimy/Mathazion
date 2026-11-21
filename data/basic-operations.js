import { R, EX, Q, topic } from './core.js';

export default [
  topic('addition', 'foundations', 'Addition',
    'Add whole numbers confidently, including carrying, and understand the rules that make addition work.',
    [
      'Addition combines quantities. The numbers being added are called addends, and the result is the sum: $48+27=75$.',
      R`When a column adds to 10 or more, write down the ones digit and carry the tens digit to the next column. Always start with the ones column.`,
      R`Addition is commutative ($a+b=b+a$) and associative ($(a+b)+c=a+(b+c)$), and adding zero changes nothing.`,
    ],
    [
      ['Commutative law', R`a+b=b+a`, 'Changing the order does not change the sum.'],
      ['Associative law', R`(a+b)+c=a+(b+c)`, 'Changing the grouping does not change the sum.'],
      ['Identity', R`a+0=a`, 'Zero is the additive identity.'],
    ],
    [
      EX('Add two-digit numbers', R`Calculate $48+27$.`, [
        R`Add the ones: $8+7=15$. Write down 5 and carry 1 ten.`,
        R`Add the tens: $4+2+1=7$ tens.`,
        'The sum is 75.',
      ], R`75`),
      EX('Add with regrouping', R`Calculate $1{,}256+3{,}789$.`, [
        R`Ones: $6+9=15$, write 5 and carry 1.`,
        R`Tens: $5+8+1=14$, write 4 and carry 1.`,
        R`Hundreds: $2+7+1=10$, write 0 and carry 1. Thousands: $1+3+1=5$.`,
      ], R`5{,}045`),
    ],
    [
      Q(R`Calculate $48+27$.`, ['65', '75', '85', '715'], 1, '8 + 7 = 15, so carry 1 ten.', R`$48+27=75$.`, 'Easy'),
      Q(R`Calculate $398+147$.`, ['445', '535', '545', '645'], 2, 'Add the ones: 8 + 7 = 15.', R`$398+147=545$.`, 'Medium'),
      Q(R`Calculate $1{,}256+3{,}789$.`, ['4,945', '5,045', '5,145', '4,045'], 1, 'Work column by column from the right.', R`The sum is $5{,}045$.`, 'Medium'),
      Q('Which property says $26+14=14+26$?', ['Associative law', 'Commutative law', 'Identity law', 'Distributive law'], 1, 'The order of the addends changes.', R`The commutative law says $a+b=b+a$.`, 'Easy'),
    ], ['addends', 'sum', 'carrying', 'commutative'], 'Estimate first: 48 + 27 is about 50 + 30 = 80, so 75 is sensible.'),

  topic('subtraction', 'foundations', 'Subtraction',
    'Subtract whole numbers with borrowing, and check every answer using addition.',
    [
      R`Subtraction finds the difference between two numbers or takes one quantity away: $72-38=34$. The number being subtracted from is the minuend; the number subtracted is the subtrahend.`,
      'When the top digit is smaller than the bottom digit in a column, borrow 1 from the next column to the left. If that column is zero, keep moving left until you find a digit you can borrow from.',
      R`Subtraction is the inverse of addition, so you can check: $a-b=c$ is correct exactly when $c+b=a$.`,
    ],
    [
      ['Inverse check', R`a-b=c\iff c+b=a`, 'Add the answer back to the number subtracted.'],
      ['Difference', R`72-38=34`, 'Check: difference + subtrahend = minuend.'],
    ],
    [
      EX('Subtract with borrowing', R`Calculate $523-278$.`, [
        R`Ones: 3 is smaller than 8, so borrow: $13-8=5$, leaving 1 ten.`,
        R`Tens: 1 is smaller than 7, so borrow from the hundreds: $11-7=4$.`,
        R`Hundreds: $4-2=2$. The difference is 245.`,
      ], R`245`),
      EX('Borrow across zeros', R`Calculate $4{,}002-1{,}756$.`, [
        'Borrow from the thousands: 4 thousands becomes 3, the hundreds and tens become 9, and the ones become 12.',
        R`Now subtract: $12-6=6$, $9-5=4$, $9-7=2$, $3-1=2$.`,
      ], R`2{,}246`),
    ],
    [
      Q(R`Calculate $72-38$.`, ['34', '44', '26', '46'], 0, 'Borrow from the tens: 12 − 8 = 4.', R`$72-38=34$ because $34+38=72$.`, 'Easy'),
      Q(R`Calculate $500-236$.`, ['264', '274', '364', '266'], 0, 'Borrow across the zeros.', R`$500-236=264$.`, 'Medium'),
      Q(R`Calculate $3{,}041-1{,}578$.`, ['1,463', '1,563', '1,373', '2,463'], 0, 'Borrow across the zero in the tens place.', R`$3{,}041-1{,}578=1{,}463$.`, 'Medium'),
      Q(R`Why is $84-29=55$ correct?`, ['Because $55+29=84$', 'Because $84+29=55$', 'Because $55-29=84$', 'Because $29-55=84$'], 0, 'Use the inverse operation.', R`The check is $55+29=84$, so the subtraction is correct.`, 'Easy'),
    ], ['subtrahend', 'difference', 'borrowing', 'inverse operation'], 'Unlike addition, subtraction is not commutative: $8-3\neq3-8$.'),

  topic('multiplication', 'foundations', 'Multiplication',
    'Understand multiplication as repeated addition and use long multiplication accurately.',
    [
      R`Multiplication is repeated addition: $4\times3=3+3+3+3=12$. The numbers multiplied are factors and the result is the product.`,
      R`The distributive law $a(b+c)=ab+ac$ is the idea behind long multiplication: split one factor into tens and ones, multiply separately, then add.`,
      R`Multiplication is commutative ($a\times b=b\times a$), and $a\times0=0$, $a\times1=a$.`,
    ],
    [
      ['Repeated addition', R`4\times3=3+3+3+3=12`, 'Four groups of three.'],
      ['Distributive law', R`a(b+c)=ab+ac`, 'Split into friendly parts.'],
      ['Zero and one', R`a\times0=0,\quad a\times1=a`, 'Useful shortcut facts.'],
    ],
    [
      EX('Two-digit multiplication', R`Calculate $23\times14$.`, [
        R`Split 14 into 10 and 4: $23\times10=230$ and $23\times4=92$.`,
        'Add the partial products: $230+92=322$.',
      ], R`322`),
      EX('Multiplication with a zero', R`Calculate $306\times27$.`, [
        R`$306\times20=6{,}120$ and $306\times7=2{,}142$.`,
        R`Add: $6{,}120+2{,}142=8{,}262$.`,
      ], R`8{,}262`),
    ],
    [
      Q(R`Calculate $7\times8$.`, ['54', '56', '63', '48'], 1, 'Recall the 7 times table.', R`$7\times8=56$.`, 'Easy'),
      Q(R`Calculate $34\times6$.`, ['184', '204', '210', '244'], 1, '$30\\times6=180$ and $4\\times6=24$.', R`$180+24=204$.`, 'Easy'),
      Q(R`Calculate $125\times12$.`, ['1,250', '1,500', '1,400', '1,625'], 1, '$125\\times10=1{,}250$ and $125\\times2=250$.', R`$1{,}250+250=1{,}500$.`, 'Medium'),
      Q('Which equation shows the distributive law?', ['6×7 = 7×6', '3×(4+5) = 3×4 + 3×5', '(2×3)×4 = 2×(3×4)', '9×1 = 9'], 1, 'The bracket is expanded over addition.', R`$3(4+5)=3\cdot4+3\cdot5=27$.`, 'Medium'),
    ], ['factors', 'product', 'times table', 'partial products'], 'Check with estimation: 306 × 27 is about 300 × 30 = 9,000, so 8,262 is reasonable.'),

  topic('division', 'foundations', 'Division',
    'Divide by sharing or grouping, interpret remainders, and check answers with multiplication.',
    [
      R`Division shares a quantity into equal groups: $84\div6=14$ means 84 shared into 6 groups gives 14 in each. The number being divided is the dividend, the number dividing is the divisor, and the result is the quotient.`,
      R`When the divisor does not divide exactly, the amount left over is the remainder. The division algorithm is $a=bq+r$ with $0\le r<b$.`,
      R`Division is the inverse of multiplication: $a\div b=q$ means $b\times q=a$. Division by zero is undefined because no number multiplied by 0 gives a non-zero dividend.`,
    ],
    [
      ['Division algorithm', R`a=bq+r,\quad0\le r<b`, 'Dividend = divisor × quotient + remainder.'],
      ['Inverse check', R`a\div b=q\iff bq=a`, 'Multiply the quotient by the divisor.'],
      ['Special cases', R`0\div b=0,\quad a\div0\text{ is undefined}`, 'Never divide by zero.'],
    ],
    [
      EX('Exact division', R`Calculate $84\div6$.`, [
        'Ask: 6 times what number is 84?',
        R`$6\times14=84$, so the quotient is 14.`,
      ], R`14`),
      EX('Division with a remainder', R`Calculate $145\div8$.`, [
        R`$8\times18=144$, which is 1 less than 145.`,
        'So the quotient is 18 with remainder 1.',
        R`Check: $18\times8+1=145$.`,
      ], R`18\text{ remainder }1`),
    ],
    [
      Q(R`Calculate $63\div7$.`, ['7', '9', '8', '10'], 1, '7 times table: 7 × 9 = 63.', R`$63\div7=9$.`, 'Easy'),
      Q(R`Calculate $96\div4$.`, ['24', '26', '22', '34'], 0, '4 × 24 = 96.', R`$96\div4=24$.`, 'Easy'),
      Q(R`Calculate $157\div5$.`, ['31 remainder 2', '30 remainder 7', '32 remainder 2', '31 remainder 1'], 0, '$5\\times31=155$, leaving 2.', R`$157=5\times31+2$, so the answer is 31 remainder 2. A remainder must be smaller than 5.`, 'Medium'),
      Q('Why is division by zero undefined?', ['It always gives zero', 'No number times zero gives a non-zero dividend', 'It equals the dividend', 'It is the same as multiplying by zero'], 1, 'Think of division as the inverse of multiplication.', R`If $a\div0=q$, we would need $0\times q=a$, impossible for $a\neq0$.`, 'Medium'),
    ], ['dividend', 'divisor', 'quotient', 'remainder'], 'Always check that the remainder is smaller than the divisor.'),
];
