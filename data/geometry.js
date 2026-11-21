import { R, EX, Q, topic } from './core.js';

export default [
  topic('angles-lines', 'geometry', 'Angles & Lines',
    'Use angle relationships around points, on straight lines and across parallel lines.',
    [
      'Angles that add to 90° are complementary; angles that add to 180° are supplementary. Angles on a straight line sum to 180°, and angles around a point sum to 360°.',
      'Vertically opposite angles, formed when two lines cross, are equal. Adjacent angles sharing a straight side sum to 180°.',
      'For parallel lines cut by a transversal: corresponding angles are equal, alternate interior angles are equal, and co-interior angles sum to 180°.',
    ],
    [
      ['Complementary', R`\alpha+\beta=90^\circ`, 'Common in right triangles.'],
      ['Supplementary', R`\alpha+\beta=180^\circ`, 'Angles on a straight line.'],
      ['Parallel lines', 'Corresponding = equal; alternate interior = equal; co-interior = supplementary.', 'Only valid when lines are parallel.'],
    ],
    [
      EX('Parallel line angles', 'Two parallel lines are cut by a transversal. One angle is 110°. Find the other three angles at that intersection.', [
        'The angle vertically opposite 110° is also 110°.',
        'Adjacent angles form a straight line: $180°-110°=70°$.',
        'The angle opposite the 70° angle is also 70°.',
      ], R`110^\circ,\ 110^\circ,\ 70^\circ,\ 70^\circ`),
      EX('Angles on a line', R`Adjacent angles $(3x)^\circ$ and $(2x)^\circ$ lie on a straight line. Find $x$.`, [
        'Angles on a straight line sum to 180°.',
        R`$3x+2x=180\Rightarrow5x=180$.`,
        'Divide by 5: $x=36$, giving angles 108° and 72°.',
      ], R`x=36`),
    ],
    [
      Q('Find the supplement of 65°.', ['25°', '35°', '115°', '125°'], 2, 'Supplementary angles sum to 180°.', R`$180^\circ-65^\circ=115^\circ$.`, 'Easy'),
      Q('Two lines intersect and one angle is 42°. What is the vertically opposite angle?', ['42°', '48°', '138°', '180°'], 0, 'Vertically opposite angles are equal.', R`The opposite angle is also $42^\circ$.`, 'Easy'),
      Q('Parallel lines are cut by a transversal. A corresponding angle measures 78°. What is its corresponding partner?', ['12°', '78°', '102°', '180°'], 1, 'Corresponding angles are equal.', R`Corresponding angles are equal, so the angle is $78^\circ$.`, 'Easy'),
      Q(R`Two adjacent angles on a straight line are $(4x+10)^\circ$ and $(2x+20)^\circ$. Find $x$.`, ['15', '20', '25', '30'], 2, 'Their sum is 180°.', R`$4x+10+2x+20=180\Rightarrow6x=150\Rightarrow x=25$.`, 'Medium'),
    ], ['complementary', 'supplementary', 'parallel lines', 'transversal'], 'Draw a diagram and mark equal angles before calculating.'),

  topic('triangles', 'geometry', 'Triangles',
    'Apply the angle sum, exterior angle theorem, isosceles properties and triangle inequality.',
    [
      R`Interior angles of a triangle sum to $180^\circ$: $A+B+C=180^\circ$. An exterior angle equals the sum of the two opposite interior angles.`,
      'In an isosceles triangle, the angles opposite equal sides are equal. In an equilateral triangle all angles are 60°. Right triangles contain one 90° angle.',
      'The triangle inequality says that the sum of any two sides must exceed the third side. This determines whether three lengths can form a triangle.',
    ],
    [
      ['Angle sum', R`A+B+C=180^\circ`, 'Applies to every triangle.'],
      ['Exterior angle', R`\text{exterior}=A+B`, 'Where A and B are the remote interior angles.'],
      ['Triangle inequality', R`a+b>c`, 'Must hold for all three pairs of sides.'],
    ],
    [
      EX('Find a missing angle', 'A triangle has angles 50° and 60°. Find the third angle.', [
        'Interior angles sum to 180°.',
        'Known angles total $50°+60°=110°$.',
        'Third angle: $180°-110°=70°$.',
      ], R`70^\circ`),
      EX('Isosceles triangle', 'An isosceles triangle has vertex angle 40°. Find each base angle.', [
        'Base angles of an isosceles triangle are equal; call each $x$.',
        R`$x+x+40^\circ=180^\circ$, so $2x=140^\circ$.`,
        'Each base angle is 70°.',
      ], R`70^\circ\text{ each}`),
    ],
    [
      Q('A triangle has angles 45° and 65°. What is the third angle?', ['60°', '70°', '80°', '110°'], 1, 'Angles sum to 180°.', R`$180^\circ-(45^\circ+65^\circ)=70^\circ$.`, 'Easy'),
      Q('An equilateral triangle has each angle equal to:', ['30°', '45°', '60°', '90°'], 2, '180° divided by 3.', R`All three angles are equal, so each is $180^\circ/3=60^\circ$.`, 'Easy'),
      Q('Can sides of length 3, 4 and 8 form a triangle?', ['Yes', 'No', 'Only if right-angled', 'Cannot tell'], 1, 'Check whether the two shorter sides add to more than the longest.', R`$3+4=7<8$, violating the triangle inequality, so no triangle can be formed.`, 'Medium'),
      Q('An exterior angle of a triangle is 120° and one remote interior angle is 45°. Find the other remote interior angle.', ['30°', '45°', '60°', '75°'], 3, 'Exterior angle = sum of the two remote interior angles.', R`$120^\circ=45^\circ+x$, so $x=75^\circ$.`, 'Medium'),
    ], ['angle sum', 'isosceles', 'exterior angle', 'triangle inequality'], 'The longest side is always opposite the largest angle.'),

  topic('pythagorean-theorem', 'geometry', 'Pythagorean Theorem',
    'Use $a^2+b^2=c^2$ to find sides of right triangles and distances in the coordinate plane.',
    [
      R`In a right triangle, $a^2+b^2=c^2$, where $c$ is the hypotenuse (the side opposite the right angle). To find a leg, rearrange: $a=\sqrt{c^2-b^2}$.`,
      R`The distance between $(x_1,y_1)$ and $(x_2,y_2)$ comes from the theorem: $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.`,
      'Common Pythagorean triples include (3, 4, 5), (5, 12, 13), (8, 15, 17) and (7, 24, 25), plus their multiples.',
    ],
    [
      ['Pythagorean theorem', R`a^2+b^2=c^2`, 'Only for right triangles.'],
      ['Distance formula', R`d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}`, 'A coordinate version of the theorem.'],
    ],
    [
      EX('Find the hypotenuse', 'A right triangle has legs 9 cm and 12 cm. Find its hypotenuse.', [
        R`$c^2=9^2+12^2=81+144=225$.`,
        'Take the positive square root: $c=\\sqrt{225}=15$ cm.',
      ], R`15\text{ cm}`),
      EX('Find a missing leg', R`A right triangle has hypotenuse 13 and one leg 5. Find the other leg.`, [
        R`$b^2=13^2-5^2=169-25=144$.`,
        'So $b=12$. This is the (5, 12, 13) triple.',
      ], R`12`),
    ],
    [
      Q('A right triangle has legs 6 and 8. Find the hypotenuse.', ['10', '12', '14', '100'], 0, '$6^2+8^2=36+64=100$.', R`$c=\sqrt{100}=10$.`, 'Easy'),
      Q('A right triangle has hypotenuse 13 and one leg 12. Find the other leg.', ['1', '5', '7', '25'], 1, '$13^2-12^2=169-144=25$.', R`The other leg is $\sqrt{25}=5$.`, 'Easy'),
      Q(R`Find the distance between $(1,2)$ and $(4,6)$.`, ['3', '4', '5', '7'], 2, 'Differences are 3 and 4.', R`$d=\sqrt{3^2+4^2}=5$.`, 'Easy'),
      Q('Find the diagonal of a square with side length 7.', ['7', '14', R`7\sqrt{2}`, R`49\sqrt{2}`], 2, 'The diagonal is the hypotenuse of a right isosceles triangle.', R`$d=\sqrt{7^2+7^2}=\sqrt{98}=7\sqrt{2}$.`, 'Medium'),
    ], ['hypotenuse', 'distance formula', 'Pythagorean triples'], 'Check that the hypotenuse is the longest side before substituting.'),

  topic('quadrilaterals', 'geometry', 'Quadrilaterals',
    'Classify four-sided shapes and use their angle and area properties.',
    [
      'Every quadrilateral has interior angles summing to 360°. A parallelogram has opposite sides parallel and equal, opposite angles equal, and adjacent angles supplementary.',
      'Rectangles are parallelograms with right angles; rhombuses have four equal sides; squares have both properties. A trapezoid (trapezium) has at least one pair of parallel sides.',
      R`Areas: rectangle $bh$, parallelogram $bh$, triangle $\frac12bh$, trapezoid $\frac12(a+b)h$ where $a$ and $b$ are the parallel sides.`,
    ],
    [
      ['Angle sum', R`A+B+C+D=360^\circ`, 'Applies to all quadrilaterals.'],
      ['Trapezoid area', R`A=\frac12(a+b)h`, 'Average of parallel sides times height.'],
      ['Parallelogram', R`a=c,\quad b=d,\quad\alpha=\gamma`, 'Opposite sides and angles are equal, diagonals bisect each other, and adjacent angles are supplementary.'],
    ],
    [
      EX('Trapezoid area', 'A trapezoid has parallel sides 8 cm and 12 cm, and height 5 cm. Find its area.', [
        R`$A=\frac12(a+b)h=\frac12(8+12)(5)$.`,
        'Average of parallel sides: $(8+12)/2=10$.',
        'Area: $10\\times5=50$ cm².',
      ], R`50\text{ cm}^2`),
      EX('Parallelogram angles', 'One angle of a parallelogram is 70°. Find the other three angles.', [
        'Opposite angles are equal, so another angle is 70°.',
        'Adjacent angles are supplementary: $180°-70°=110°$.',
        'The fourth angle is opposite that one, so it is also 110°.',
      ], R`70^\circ,\ 110^\circ,\ 70^\circ,\ 110^\circ`),
    ],
    [
      Q('Three angles of a quadrilateral are 80°, 100° and 110°. Find the fourth.', ['60°', '70°', '80°', '90°'], 1, 'Angles sum to 360°.', R`$360^\circ-(80+100+110)^\circ=70^\circ$.`, 'Easy'),
      Q('In a parallelogram, one angle is 65°. What is the adjacent angle?', ['65°', '25°', '115°', '130°'], 2, 'Adjacent angles are supplementary.', R`$180^\circ-65^\circ=115^\circ$.`, 'Easy'),
      Q('Find the area of a parallelogram with base 9 cm and height 4 cm.', ['18 cm²', '26 cm²', '36 cm²', '72 cm²'], 2, 'Area = base × perpendicular height.', R`$A=9\times4=36\text{ cm}^2$.`, 'Easy'),
      Q('A trapezoid has bases 6 and 10 and height 3. Find its area.', ['24', '30', '48', '18'], 0, 'Use half the sum of the bases times the height.', R`$A=\frac12(6+10)(3)=24$.`, 'Medium'),
    ], ['parallelogram', 'trapezoid', 'angle sum'], 'Use the perpendicular height, not the slanted side, in area formulas.'),

  topic('circles', 'geometry', 'Circles',
    'Calculate circumference, area, arc length and sector area using $\\pi$.',
    [
      R`For a circle of radius $r$ and diameter $d=2r$: circumference $C=2\pi r=\pi d$ and area $A=\pi r^2$.`,
      R`An arc is a fraction of the circumference and a sector is a fraction of the area. For a central angle $\theta$ in degrees: arc length $=\frac{\theta}{360^\circ}(2\pi r)$ and sector area $=\frac{\theta}{360^\circ}(\pi r^2)$.`,
      'The area and circumference formulas are reversible: given the circumference, first divide by $2\\pi$ to find the radius.',
    ],
    [
      ['Circumference', R`C=2\pi r=\pi d`, 'Distance around the circle.'],
      ['Area', R`A=\pi r^2`, 'Space enclosed by the circle.'],
      ['Sector area', R`A_{\text{sector}}=\frac{\theta}{360^\circ}\pi r^2`, 'θ measured in degrees.'],
    ],
    [
      EX('Circumference and area', 'A circle has radius 5 cm. Find its circumference and area.', [
        R`$C=2\pi(5)=10\pi$ cm.`,
        R`$A=\pi(5)^2=25\pi$ cm².`,
        'Numerically (using $\\pi\\approx3.142$): about 31.4 cm and 78.5 cm².',
      ], R`C=10\pi\text{ cm},\quad A=25\pi\text{ cm}^2`),
      EX('Arc length', R`Find the length of a $60^\circ$ arc in a circle of radius 9.`, [
        R`The arc is $\frac{60}{360}=\frac16$ of the circumference.`,
        R`Circumference is $2\pi(9)=18\pi$.`,
        R`Arc length $=\frac16(18\pi)=3\pi$.`,
      ], R`3\pi`),
    ],
    [
      Q('Find the circumference of a circle with diameter 14.', ['7π', '14π', '28π', '196π'], 1, 'Circumference = π × diameter.', R`$C=\pi d=14\pi$.`, 'Easy'),
      Q('Find the area of a circle with radius 3.', ['3π', '6π', '9π', '12π'], 2, 'Area = πr².', R`$A=\pi(3)^2=9\pi$.`, 'Easy'),
      Q(R`Find the arc length of a $90^\circ$ arc with radius 4.`, ['π', '2π', '4π', '8π'], 1, 'One quarter of the circumference.', R`$\frac{90}{360}\cdot2\pi(4)=2\pi$.`, 'Medium'),
      Q(R`Find the area of a $120^\circ$ sector with radius 6.`, ['6π', '12π', '18π', '24π'], 1, 'One third of πr².', R`$\frac{120}{360}\cdot\pi(6)^2=12\pi$.`, 'Medium'),
    ], ['radius', 'diameter', 'arc', 'sector'], 'Keep answers in terms of π unless a decimal is requested.'),

  topic('area-perimeter', 'geometry', 'Area & Perimeter',
    'Compute perimeter and area of common plane figures and composite shapes.',
    [
      'Perimeter is the total distance around a shape; area measures the space it covers. Perimeter uses units (cm), area uses square units (cm²).',
      R`Key formulas: rectangle $A=bh,\ P=2(b+h)$; triangle $A=\frac12bh$; parallelogram $A=bh$; square $A=s^2,\ P=4s$; circle $A=\pi r^2,\ C=2\pi r$.`,
      'For composite figures, split the shape into familiar parts, find each area, then add or subtract as needed. Missing lengths can be found from the known sides.',
    ],
    [
      ['Rectangle', R`A=bh,\quad P=2b+2h`, 'b = base, h = height.'],
      ['Triangle', R`A=\frac12bh`, 'h is perpendicular to the base.'],
    ],
    [
      EX('Rectangle', 'A rectangle is 8 cm by 5 cm. Find its area and perimeter.', [
        'Area: $8\\times5=40$ cm².',
        'Perimeter: $2(8+5)=2(13)=26$ cm.',
      ], R`A=40\text{ cm}^2,\quad P=26\text{ cm}`),
      EX('Triangle area', 'A triangle has base 12 cm and perpendicular height 7 cm. Find its area.', [
        R`Use $A=\frac12bh$.`,
        R`$A=\frac12(12)(7)=6\times7=42$ cm².`,
      ], R`42\text{ cm}^2`),
    ],
    [
      Q('A square has side 9 cm. Find its area and perimeter.', ['A=18, P=36', 'A=81, P=36', 'A=36, P=81', 'A=81, P=18'], 1, 'Area = s², perimeter = 4s.', R`$A=9^2=81$ cm² and $P=4(9)=36$ cm.`, 'Easy'),
      Q('A triangle has base 10 and height 6. Find its area.', ['30', '60', '16', '32'], 0, 'Area = half base × height.', R`$A=\frac12(10)(6)=30$.`, 'Easy'),
      Q('A rectangle has area 48 cm² and length 8 cm. Find its width and perimeter.', ['6 cm, 28 cm', '6 cm, 14 cm', '12 cm, 40 cm', '8 cm, 32 cm'], 0, 'Width = area ÷ length.', R`$w=48/8=6$, so $P=2(8+6)=28$ cm.`, 'Medium'),
      Q('A rectangle measures 10 by 6. A square of side 2 is removed from one corner. Find the remaining area.', ['56', '60', '64', '52'], 0, 'Subtract the square from the rectangle.', R`$10\times6-2^2=60-4=56$.`, 'Medium'),
    ], ['perimeter', 'area', 'composite shapes'], 'Always label your answer with the correct units.'),

  topic('surface-area-volume', 'geometry', 'Surface Area & Volume',
    'Find surface areas and volumes of prisms, cylinders, pyramids, cones and spheres.',
    [
      'Volume measures space inside a 3D solid (cubic units); surface area measures the total area of its faces (square units).',
      R`Cuboid: $V=lwh$, $SA=2(lw+lh+wh)$. Prism: $V=(\text{area of cross-section})\times\text{length}$. Cylinder: $V=\pi r^2h$, $SA=2\pi r^2+2\pi rh$.`,
      R`Sphere: $V=\frac43\pi r^3$, $SA=4\pi r^2$. Pyramid/cone: $V=\frac13(\text{base area})h$; the $\frac13$ factor distinguishes them from prisms and cylinders.`,
    ],
    [
      ['Cuboid', R`V=lwh,\quad SA=2(lw+lh+wh)`, 'Six rectangular faces.'],
      ['Cylinder', R`V=\pi r^2h,\quad SA=2\pi r^2+2\pi rh`, 'Two circles plus the curved surface.'],
      ['Sphere', R`V=\frac43\pi r^3,\quad SA=4\pi r^2`, 'Depends only on radius.'],
    ],
    [
      EX('Cuboid', 'A cuboid measures 4 by 5 by 6. Find its volume and surface area.', [
        R`$V=4\times5\times6=120$.`,
        R`$SA=2(4\cdot5+4\cdot6+5\cdot6)=2(20+24+30)=2(74)=148$.`,
      ], R`V=120,\quad SA=148`),
      EX('Cylinder', 'A cylinder has radius 3 and height 10. Find volume and total surface area.', [
        R`$V=\pi(3)^2(10)=90\pi$.`,
        R`$SA=2\pi(3)^2+2\pi(3)(10)=18\pi+60\pi=78\pi$.`,
      ], R`V=90\pi,\quad SA=78\pi`),
    ],
    [
      Q('Find the volume of a cube with side 4.', ['16', '48', '64', '96'], 2, 'Volume = s³.', R`$V=4^3=64$.`, 'Easy'),
      Q('Find the total surface area of a cube with side 4.', ['16', '48', '64', '96'], 3, 'Six square faces: 6s².', R`$SA=6(4^2)=96$.`, 'Easy'),
      Q('A cylinder has radius 2 and height 5. Find its volume.', ['10π', '20π', '25π', '40π'], 1, 'Volume = πr²h.', R`$V=\pi(2)^2(5)=20\pi$.`, 'Easy'),
      Q('A triangular prism has cross-sectional area 12 and length 7. Find its volume.', ['19', '42', '84', '168'], 2, 'Volume = cross-section area × length.', R`$V=12\times7=84$.`, 'Medium'),
    ], ['volume', 'surface area', 'cylinder', 'sphere'], 'A cone or pyramid has one-third the volume of the corresponding prism with the same base and height.'),

  topic('coordinate-geometry', 'geometry', 'Coordinate Geometry',
    'Use the Cartesian plane to measure distance, find midpoints, slopes and line equations.',
    [
      R`The midpoint of $(x_1,y_1)$ and $(x_2,y_2)$ is $\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)$ — average the coordinates.`,
      R`Slope $m=\frac{y_2-y_1}{x_2-x_1}$. Parallel lines have equal slopes; perpendicular lines have slopes whose product is $−1$ (for non-vertical lines).`,
      R`The point-slope form of a line is $y-y_1=m(x-x_1)$; slope-intercept form is $y=mx+c$.`,
    ],
    [
      ['Midpoint', R`M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right)`, 'Average each coordinate.'],
      ['Slope', R`m=\frac{\Delta y}{\Delta x}`, 'Positive slopes rise to the right.'],
      ['Point-slope form', R`y-y_1=m(x-x_1)`, 'Use when a point and slope are known.'],
    ],
    [
      EX('Midpoint', R`Find the midpoint of $(-2,4)$ and $(6,-2)$.`, [
        'Average x: $(-2+6)/2=2$.',
        'Average y: $(4+(-2))/2=1$.',
        'The midpoint is $(2,1)$.',
      ], R`(2,1)`),
      EX('Equation of a line', 'Find the equation of the line through (1, 2) with slope 3.', [
        R`Use point-slope form: $y-2=3(x-1)$.`,
        'Expand: $y-2=3x-3$.',
        'Add 2: $y=3x-1$.',
      ], R`y=3x-1`),
    ],
    [
      Q(R`Find the distance between $(0,0)$ and $(5,12)$.`, ['5', '12', '13', '17'], 2, 'Use the distance formula.', R`$d=\sqrt{25+144}=\sqrt{169}=13$.`, 'Easy'),
      Q(R`Find the midpoint of $(2,3)$ and $(8,11)$.`, ['(5,7)', '(6,8)', '(4,5.5)', '(10,14)'], 0, 'Average each coordinate.', R`$((2+8)/2,(3+11)/2)=(5,7)$.`, 'Easy'),
      Q(R`Find the slope of the line through $(2,5)$ and $(6,13)$.`, ['1/2', '2', '4', '8'], 1, 'Rise 8, run 4.', R`$m=(13-5)/(6-2)=8/4=2$.`, 'Easy'),
      Q(R`Find the x-intercept of $y=2x+3$.`, ['3', '−3', R`\frac32`, R`-\frac32`], 3, 'Set y = 0 and solve.', R`$0=2x+3\Rightarrow x=-\frac32$.`, 'Medium'),
    ], ['Cartesian plane', 'slope', 'midpoint', 'intercepts'], 'A vertical line has undefined slope; a horizontal line has slope 0.'),

  topic('trigonometry', 'geometry', 'Trigonometry Basics',
    'Use sine, cosine and tangent in right triangles, plus special angles and the Pythagorean identity.',
    [
      R`For a right triangle and an acute angle $\theta$: $\sin\theta=\frac{\text{opposite}}{\text{hypotenuse}}$, $\cos\theta=\frac{\text{adjacent}}{\text{hypotenuse}}$, $\tan\theta=\frac{\text{opposite}}{\text{adjacent}}$ (SOH-CAH-TOA).`,
      R`Special values: $\sin30^\circ=\frac12$, $\cos60^\circ=\frac12$, $\sin45^\circ=\cos45^\circ=\frac{\sqrt2}{2}$, $\tan45^\circ=1$.`,
      R`The fundamental identity is $\sin^2\theta+\cos^2\theta=1$, and $\tan\theta=\frac{\sin\theta}{\cos\theta}$.`,
    ],
    [
      ['SOH-CAH-TOA', R`\sin\theta=\frac{O}{H},\quad\cos\theta=\frac{A}{H},\quad\tan\theta=\frac{O}{A}`, 'Label sides relative to θ.'],
      ['Pythagorean identity', R`\sin^2\theta+\cos^2\theta=1`, 'True for every angle θ.'],
    ],
    [
      EX('Find trig ratios', 'A right triangle has hypotenuse 13, opposite side 12 and adjacent side 5. Find sin, cos and tan of the angle.', [
        R`$\sin\theta=\frac{12}{13}$.`,
        R`$\cos\theta=\frac{5}{13}$.`,
        R`$\tan\theta=\frac{12}{5}$.`,
      ], R`\sin\theta=\frac{12}{13},\ \cos\theta=\frac{5}{13},\ \tan\theta=\frac{12}{5}`),
      EX('Find a side', R`In a right triangle, $\tan 30^\circ=\frac{1}{\sqrt3}$ and the adjacent side is 9. Find the opposite side.`, [
        R`$\tan30^\circ=\frac{\text{opposite}}{\text{adjacent}}$, so $\frac{1}{\sqrt3}=\frac{x}{9}$.`,
        R`Multiply: $x=\frac{9}{\sqrt3}=3\sqrt3$.`,
      ], R`3\sqrt{3}`),
    ],
    [
      Q(R`If $\sin\theta=\frac35$ and the hypotenuse is 10, find the opposite side.`, ['3', '5', '6', '8'], 2, 'Opposite = sin × hypotenuse.', R`$\text{opposite}=\frac35(10)=6$.`, 'Easy'),
      Q(R`Find the exact value of $\cos 60^\circ$.`, [R`\frac12`, R`\frac{\sqrt3}{2}`, R`\frac{\sqrt2}{2}`, '1'], 0, 'Special angle value.', R`$\cos60^\circ=\frac12$.`, 'Easy'),
      Q(R`Find the exact value of $\tan 45^\circ$.`, ['0', '1', R`\sqrt3`, R`\frac{1}{\sqrt3}`], 1, 'At 45° the legs are equal.', R`$\tan45^\circ=1$.`, 'Easy'),
      Q(R`If $\cos\theta=\frac{3}{5}$ and $\theta$ is acute, find $\sin\theta$.`, [R`\frac{4}{5}`, R`\frac{2}{5}`, R`\frac{3}{4}`, R`\frac{5}{4}`], 0, 'Use $\\sin^2\\theta+\\cos^2\\theta=1$.', R`$\sin\theta=\sqrt{1-\frac{9}{25}}=\sqrt{\frac{16}{25}}=\frac45$.`, 'Medium'),
    ], ['SOHCAHTOA', 'right triangle', 'special angles'], 'Make sure your calculator is in degree mode for degree problems.'),
];
