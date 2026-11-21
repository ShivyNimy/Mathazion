import { R, EX, Q, topic } from './core.js';

export default [
  topic('vectors', 'linear-algebra', 'Vectors',
    'Represent vectors, compute magnitude, dot products and unit vectors, and interpret geometry.',
    [
      R`A vector has magnitude and direction. In components, $\mathbf{v}=(v_1,v_2,\dots,v_n)$. Add or subtract vectors component-wise and multiply by a scalar component-wise.`,
      R`Magnitude in 2D: $\|\mathbf{v}\|=\sqrt{v_1^2+v_2^2}$. A unit vector in the same direction is $\hat{\mathbf{v}}=\frac{\mathbf{v}}{\|\mathbf{v}\|}$.`,
      R`The dot product $\mathbf{u}\cdot\mathbf{v}=\sum u_iv_i$ gives $\mathbf{u}\cdot\mathbf{v}=\|\mathbf{u}\|\|\mathbf{v}\|\cos\theta$. If the dot product is zero, the vectors are perpendicular.`,
    ],
    [
      ['Magnitude', R`\|\mathbf v\|=\sqrt{v_1^2+v_2^2}`, 'Generalises the distance formula.'],
      ['Dot product', R`\mathbf u\cdot\mathbf v=u_1v_1+u_2v_2+\cdots`, 'A scalar result.'],
      ['Unit vector', R`\hat{\mathbf v}=\frac{\mathbf v}{\|\mathbf v\|}`, 'Has length 1.'],
    ],
    [
      EX('Magnitude and unit vector', R`For $\mathbf{v}=(3,4)$, find $\|\mathbf{v}\|$ and the unit vector in its direction.`, [
        R`$\|\mathbf v\|=\sqrt{3^2+4^2}=\sqrt{25}=5$.`,
        R`Unit vector: $\frac{1}{5}(3,4)=\left(\frac35,\frac45\right)$.`,
      ], R`\|\mathbf v\|=5,\quad \hat{\mathbf v}=\left(\frac35,\frac45\right)`),
      EX('Dot product', R`Compute $(1,2,3)\cdot(4,-5,6)$.`, [
        'Multiply matching components: $1(4)+2(-5)+3(6)$.',
        'Simplify: $4-10+18=12$.',
      ], R`12`),
    ],
    [
      Q(R`Find the magnitude of $(-2,3)$.`, ['1', '5', R`\sqrt{13}`, '13'], 2, 'Square, add, then take the square root.', R`$\sqrt{4+9}=\sqrt{13}$.`, 'Easy'),
      Q(R`Compute $(2,1)\cdot(3,-4)$.`, ['2', '10', '−2', '−10'], 0, '$2×3 + 1×(−4) = 6 − 4$.', R`The dot product is 2.`, 'Easy'),
      Q('Vectors (1, 0) and (0, 1) are:', ['Parallel', 'Perpendicular', 'Equal', 'Opposite'], 1, 'Compute their dot product.', R`$(1,0)\cdot(0,1)=0$, so they are perpendicular.`, 'Easy'),
      Q(R`Find $(1,2)+(3,-1)$.`, ['(4,1)', '(4,3)', '(−2,3)', '(3,−2)'], 0, 'Add corresponding components.', R`$(1+3,\ 2+(-1))=(4,1)$.`, 'Easy'),
    ], ['magnitude', 'dot product', 'unit vector', 'perpendicular'], 'A dot product of zero is the algebraic test for perpendicularity.'),

  topic('matrices', 'linear-algebra', 'Matrices',
    'Understand matrix dimensions, addition, scalar multiplication, transpose and multiplication.',
    [
      R`An $m\times n$ matrix has $m$ rows and $n$ columns. Entry $a_{ij}$ is in row $i$, column $j$. Matrices of the same size add entry-by-entry.`,
      R`Scalar multiplication multiplies every entry: $kA$. The transpose $A^T$ swaps rows and columns.`,
      R`For multiplication $AB$, the $(i,j)$ entry is the dot product of row $i$ of $A$ with column $j$ of $B$. This requires the number of columns of $A$ to equal the number of rows of $B$; the result is $m\times p$ if $A$ is $m\times n$ and $B$ is $n\times p$.`,
    ],
    [
      ['Entry-wise addition', R`(A+B)_{ij}=a_{ij}+b_{ij}`, 'Matrices must have the same dimensions.'],
      ['Matrix product', R`(AB)_{ij}=\sum_k a_{ik}b_{kj}`, 'Row by column.'],
      ['Identity matrix', R`AI=IA=A`, 'I has 1s on the diagonal and 0s elsewhere.'],
    ],
    [
      EX('Add and scale matrices', R`If $A=\begin{pmatrix}2&1\\3&4\end{pmatrix}$ and $B=\begin{pmatrix}1&-1\\0&2\end{pmatrix}$, find $A+B$ and $2A$.`, [
        R`$A+B=\begin{pmatrix}3&0\\3&6\end{pmatrix}$ by adding corresponding entries.`,
        R`$2A=\begin{pmatrix}4&2\\6&8\end{pmatrix}$ by doubling each entry.`,
      ], R`A+B=\begin{pmatrix}3&0\\3&6\end{pmatrix},\quad 2A=\begin{pmatrix}4&2\\6&8\end{pmatrix}`),
      EX('Matrix multiplication', R`Compute $\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}5&6\\7&8\end{pmatrix}$.`, [
        R`Top-left: $1(5)+2(7)=19$. Top-right: $1(6)+2(8)=22$.`,
        R`Bottom-left: $3(5)+4(7)=43$. Bottom-right: $3(6)+4(8)=50$.`,
      ], R`\begin{pmatrix}19&22\\43&50\end{pmatrix}`),
    ],
    [
      Q('A 3 × 2 matrix has how many entries?', ['3', '5', '6', '9'], 2, 'Multiply the dimensions.', R`$3\times2=6$ entries.`, 'Easy'),
      Q(R`Find the transpose of $\begin{pmatrix}1&2\\3&4\end{pmatrix}$.`, [R`\begin{pmatrix}1&3\\2&4\end{pmatrix}`, R`\begin{pmatrix}2&1\\4&3\end{pmatrix}`, R`\begin{pmatrix}4&3\\2&1\end{pmatrix}`, 'Same matrix'], 0, 'Swap rows and columns.', R`Rows become columns: $\begin{pmatrix}1&3\\2&4\end{pmatrix}$.`, 'Easy'),
      Q('Matrix multiplication AB is defined when:', ['A has as many rows as B has columns', 'A has as many columns as B has rows', 'Both are square', 'Both have the same dimensions'], 1, 'The inner dimensions must match.', R`If A is $m\times n$ and B is $n\times p$, then AB is defined and is $m\times p$.`, 'Medium'),
      Q(R`If $I$ is the identity matrix, what is $AI$?`, ['0', 'I', 'A', 'Aᵀ'], 2, 'Identity leaves a matrix unchanged.', R`$AI=A$ (when the dimensions are compatible).`, 'Easy'),
    ], ['matrix', 'transpose', 'scalar multiplication', 'matrix product'], 'Matrix multiplication is not commutative: generally $AB\\neq BA$.'),

  topic('determinants', 'linear-algebra', 'Determinants',
    'Compute determinants and use them to test invertibility and solve systems.',
    [
      R`For a $2\times2$ matrix $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the determinant is $\det A=ad-bc$.`,
      R`For a $3\times3$ matrix, expand along a row: $\det A=a_{11}(a_{22}a_{33}-a_{23}a_{32})-a_{12}(\cdots)+a_{13}(\cdots)$, with alternating signs.`,
      'A square matrix is invertible exactly when $\\det A\\neq0$. Geometrically, $|\\det A|$ is the area (or volume) scaling factor of the linear transformation represented by $A$.',
    ],
    [
      ['2 × 2 determinant', R`\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc`, 'Positive diagonals minus negative diagonals.'],
      ['Invertibility', R`\det A\neq0\iff A\text{ is invertible}`, 'Zero determinant means singular.'],
    ],
    [
      EX('2 × 2 determinant', R`Find $\det\begin{pmatrix}3&2\\1&4\end{pmatrix}$.`, [
        R`Compute $ad-bc=3(4)-2(1)$.`,
        'Simplify: $12-2=10$.',
      ], R`10`),
      EX('Test invertibility', R`Is $\begin{pmatrix}2&4\\1&2\end{pmatrix}$ invertible?`, [
        R`$\det=2(2)-4(1)=0$.`,
        'Since the determinant is zero, the matrix is singular (not invertible).',
      ], R`\text{Not invertible}`),
    ],
    [
      Q(R`Find $\det\begin{pmatrix}1&2\\3&4\end{pmatrix}$.`, ['−2', '2', '10', '−10'], 0, 'ad − bc.', R`$1(4)-2(3)=-2$.`, 'Easy'),
      Q(R`Find $\det\begin{pmatrix}5&1\\2&3\end{pmatrix}$.`, ['13', '17', '−13', '7'], 0, '5 × 3 − 1 × 2.', R`$15-2=13$.`, 'Easy'),
      Q('A square matrix is invertible if and only if:', ['Its determinant is zero', 'Its determinant is non-zero', 'Its trace is zero', 'It has only positive entries'], 1, 'Non-zero determinant means full rank.', R`$\det A\neq0$ is exactly the invertibility condition.`, 'Easy'),
      Q(R`What is $\det(I)$ for the $n\times n$ identity matrix?`, ['0', '1', 'n', 'n!'], 1, 'Identity has 1s on the diagonal and 0s elsewhere.', R`The determinant of any identity matrix is 1.`, 'Medium'),
    ], ['determinant', 'singular matrix', 'invertible'], 'A zero determinant means the rows or columns are linearly dependent.'),

  topic('eigenvalues', 'linear-algebra', 'Eigenvalues & Eigenvectors',
    'Find eigenpairs using the characteristic equation and understand their meaning.',
    [
      R`A non-zero vector $\mathbf{v}$ is an eigenvector of $A$ if $A\mathbf{v}=\lambda\mathbf{v}$ for some scalar $\lambda$, called the eigenvalue. The vector's direction is unchanged by the transformation; only its length (and possibly sign) changes.`,
      R`Eigenvalues satisfy $\det(A-\lambda I)=0$, the characteristic equation. For a $2\times2$ matrix, this is a quadratic in $\lambda$.`,
      'Useful facts: the sum of the eigenvalues equals the trace (sum of diagonal entries), and the product equals the determinant. A diagonal matrix has its diagonal entries as eigenvalues.',
    ],
    [
      ['Eigen equation', R`A\mathbf v=\lambda\mathbf v,\quad\mathbf v\neq0`, 'v is scaled, not rotated.'],
      ['Characteristic equation', R`\det(A-\lambda I)=0`, 'Solve for λ.'],
    ],
    [
      EX('Diagonal matrix', R`Find the eigenvalues of $A=\begin{pmatrix}3&0\\0&-1\end{pmatrix}$.`, [
        'For a diagonal matrix, the eigenvalues are the diagonal entries.',
        'Check: $A(1,0)^T=3(1,0)^T$ and $A(0,1)^T=-1(0,1)^T$.',
      ], R`\lambda=3\text{ and }\lambda=-1`),
      EX('Solve the characteristic equation', R`Find the eigenvalues of $\begin{pmatrix}2&1\\1&2\end{pmatrix}$.`, [
        R`$\det(A-\lambda I)=(2-\lambda)^2-1=\lambda^2-4\lambda+3$.`,
        R`Factor: $(\lambda-3)(\lambda-1)=0$.`,
      ], R`\lambda=3\text{ and }\lambda=1`),
    ],
    [
      Q(R`A non-zero vector v satisfies $A\mathbf v=5\mathbf v$. What is the eigenvalue?`, ['0', '1', '5', 'A'], 2, 'Compare with $A\\mathbf{v}=\\lambda\\mathbf{v}$.', R`The scaling factor $\lambda=5$ is the eigenvalue.`, 'Easy'),
      Q(R`Find the eigenvalues of $\begin{pmatrix}4&0\\0&-2\end{pmatrix}$.`, ['4 and 2', '4 and −2', '2 and −4', 'Only 4'], 1, 'Diagonal entries are the eigenvalues.', R`The eigenvalues are 4 and −2.`, 'Easy'),
      Q('Eigenvalues of a square matrix are found by solving:', ['det(A − λI) = 0', 'A + λI = 0', 'trace(A) = λ', 'det(A) = λ'], 0, 'The characteristic equation.', R`Non-trivial solutions to $(A-\lambda I)\mathbf{v}=0$ require $\det(A-\lambda I)=0$.`, 'Medium'),
      Q(R`If a 2 × 2 matrix has trace 5 and one eigenvalue 2, what is the other eigenvalue?`, ['2', '3', '5', '7'], 1, 'Eigenvalues sum to the trace.', R`$\lambda_1+\lambda_2=5$, so the other eigenvalue is 3.`, 'Medium'),
    ], ['eigenvector', 'eigenvalue', 'characteristic equation', 'trace'], 'Eigenvectors are never the zero vector, even though $A\\mathbf{0}=λ\\mathbf{0}$ is always true.'),

  topic('vector-spaces', 'linear-algebra', 'Vector Spaces & Basis',
    'Understand span, linear independence, basis and dimension with concrete examples.',
    [
      'A vector space is a set of vectors closed under addition and scalar multiplication. $\\mathbb{R}^n$ is the standard example, but polynomials and functions also form vector spaces.',
      R`The span of a set of vectors is all possible linear combinations. Vectors are linearly independent if no vector can be written as a combination of the others; equivalently, $\sum c_i\mathbf{v}_i=0$ forces all $c_i=0$.`,
      'A basis is a linearly independent set that spans the space. The dimension is the number of vectors in any basis. $\\mathbb{R}^n$ has dimension $n$.',
    ],
    [
      ['Span', R`\operatorname{span}\{\mathbf v_1,\dots,\mathbf v_k\}=\left\{\sum c_i\mathbf v_i\right\}`, 'All linear combinations.'],
      ['Independence test', R`c_1\mathbf v_1+\cdots+c_k\mathbf v_k=0\Rightarrow c_i=0\ \forall i`, 'Only the trivial combination gives zero.'],
      ['Dimension', R`\dim\mathbb{R}^n=n`, 'Number of basis vectors.'],
    ],
    [
      EX('A basis for the plane', R`Show that $(1,0)$ and $(0,1)$ form a basis for $\mathbb{R}^2$.`, [
        R`Any $(a,b)=a(1,0)+b(0,1)$, so they span $\mathbb R^2$.`,
        R`If $c_1(1,0)+c_2(0,1)=(0,0)$, then $(c_1,c_2)=(0,0)$, so they are independent.`,
        'They span and are independent, hence a basis.',
      ], R`\text{Standard basis of }\mathbb R^2`),
      EX('Detect dependence', R`Are $(1,2)$ and $(2,4)$ linearly independent?`, [
        'Notice $(2,4)=2(1,2)$.',
        'One vector is a scalar multiple of the other, so the set is linearly dependent.',
      ], R`\text{Linearly dependent}`),
    ],
    [
      Q(R`What is $\dim\mathbb{R}^3$?`, ['1', '2', '3', '9'], 2, 'The standard basis has three vectors.', R`$\dim\mathbb{R}^3=3$.`, 'Easy'),
      Q('A basis is a set of vectors that is:', ['Linearly independent only', 'Spanning only', 'Both spanning and linearly independent', 'All non-zero and perpendicular'], 2, 'Both conditions are required.', R`A basis spans the space and is linearly independent.`, 'Easy'),
      Q(R`Are $(1,0)$ and $(2,0)$ linearly independent?`, ['Yes', 'No', 'Only over ℂ', 'Cannot tell'], 1, 'One is a multiple of the other.', R`$(2,0)=2(1,0)$, so the vectors are dependent.`, 'Medium'),
      Q('Can a single non-zero vector form a basis for $\\mathbb{R}^3$?', ['Yes', 'No', 'Only if it is a unit vector', 'Only if it has three entries'], 1, 'One vector spans at most a line.', R`A basis of $\mathbb R^3$ needs three independent vectors; one vector spans only a line.`, 'Medium'),
    ], ['span', 'basis', 'dimension', 'linear independence'], 'A basis gives exactly one way to express each vector in the space.'),

  topic('linear-transformations', 'linear-algebra', 'Linear Transformations',
    'Represent transformations by matrices and understand kernel, image and composition.',
    [
      R`A transformation $T$ is linear if $T(\mathbf u+\mathbf v)=T(\mathbf u)+T(\mathbf v)$ and $T(c\mathbf v)=cT(\mathbf v)$. Every linear transformation from $\mathbb{R}^n$ to $\mathbb{R}^m$ can be written as $T(\mathbf x)=A\mathbf x$ for an $m\times n$ matrix $A$.`,
      R`The kernel (null space) is the set of vectors mapped to zero; the image (range) is the set of all outputs. The rank–nullity theorem says $\operatorname{rank}(A)+\operatorname{nullity}(A)=n$.`,
      'Common examples: rotations, reflections, scalings and projections. Composing transformations corresponds to multiplying their matrices (in reverse order of application).',
    ],
    [
      ['Matrix form', R`T(\mathbf x)=A\mathbf x`, 'Columns of A are images of basis vectors.'],
      ['Kernel', R`\ker T=\{\mathbf x:A\mathbf x=\mathbf 0\}`, 'A subspace of the domain.'],
      ['Rank–nullity', R`\operatorname{rank}(A)+\operatorname{nullity}(A)=n`, 'For an m × n matrix.'],
    ],
    [
      EX('Rotation by 90°', R`The matrix $R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ rotates vectors 90° anticlockwise. Find the image of $(1,0)$.`, [
        R`Multiply: $R\begin{pmatrix}1\\0\end{pmatrix}=\begin{pmatrix}0\cdot1+(-1)\cdot0\\1\cdot1+0\cdot0\end{pmatrix}=\begin{pmatrix}0\\1\end{pmatrix}$.`,
        'The point (1, 0) moves to (0, 1), as expected for a quarter turn.',
      ], R`(0,1)`),
      EX('Find the matrix', 'Find the matrix of $T(x,y)=(x+y,\\,x-y)$.', [
        R`$T(1,0)=(1,1)$ is the first column; $T(0,1)=(1,-1)$ is the second.`,
        R`So $A=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$.`,
      ], R`\begin{pmatrix}1&1\\1&-1\end{pmatrix}`),
    ],
    [
      Q(R`The reflection across the x-axis is represented by:`, [R`\begin{pmatrix}1&0\\0&-1\end{pmatrix}`, R`\begin{pmatrix}-1&0\\0&1\end{pmatrix}`, R`\begin{pmatrix}0&1\\1&0\end{pmatrix}`, R`\begin{pmatrix}0&-1\\1&0\end{pmatrix}`], 0, 'x stays the same, y changes sign.', R`$(x,y)\mapsto(x,-y)$ gives the matrix with diagonal 1, −1.`, 'Easy'),
      Q(R`If $T(x,y)=(2x,3y)$, what is $T(1,1)$?`, ['(2,3)', '(5,5)', '(2,2)', '(3,3)'], 0, 'Apply the rule to each coordinate.', R`$T(1,1)=(2\cdot1,3\cdot1)=(2,3)$.`, 'Easy'),
      Q('A linear transformation always preserves:', ['Lengths', 'Angles', 'Vector addition and scalar multiplication', 'Orientation'], 2, 'That is the definition of linearity.', R`By definition, $T(u+v)=T(u)+T(v)$ and $T(cv)=cT(v)$; lengths and angles need not be preserved.`, 'Medium'),
      Q(R`If an $m\times n$ matrix has rank 2 and $n=5$, what is its nullity?`, ['2', '3', '5', '7'], 1, 'Use rank + nullity = n.', R`$\text{nullity}=5-2=3$.`, 'Medium'),
    ], ['linear map', 'kernel', 'image', 'rank-nullity'], 'The columns of a transformation matrix tell you where the basis vectors go.'),
];
