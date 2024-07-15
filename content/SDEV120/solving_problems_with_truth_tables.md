---
layout: base
title: Solving Problems with Truth Tables
course: SDEV120
---

- [Solving Problems with Truth Tables](#solving-problems-with-truth-tables)

# Solving Problems with Truth Tables

**_Determine the number of rows needed._**

Number of rows = 2<sup>n</sup> where n is the number of variables

- 1 variable = 2<sup>1</sup> = 2 rows
- 2 variables = 2<sup>2</sup> = 4 rows
- 3 variables = 2<sup>3</sup> = 8 rows
- 4 variables = 2<sup>4</sup> = 16 rows
- ...

**_Follow the algorithm below until you hit the last T/F alternating column._**

- Fill first column with top half T and bottom half F. Move to the next column.
- For each block of consecutive T or F in the previous column fill the next column with half T and half F
- Repeat until you hit the last T / F alternating column

_Example_

| A   | B   | C   |
| :-- | :-- | :-- |
| T   | T   | T   |
| T   | T   | F   |
| T   | F   | T   |
| T   | F   | F   |
| F   | T   | T   |
| F   | T   | F   |
| F   | F   | T   |
| F   | F   | F   |

**_Fill in the last column with the logical expression that you are trying to solve for. Leave placeholder columns in between._**

_Example_

If trying to find the truth table for ¬A ∧ B ∨ C:

| A   | B   | C   |     | ¬A ∧ B ∨ C |
| :-- | :-- | :-- | :-- | ---------: |
| T   | T   | T   |     |            |
| T   | T   | F   |     |            |
| T   | F   | T   |     |            |
| T   | F   | F   |     |            |
| F   | T   | T   |     |            |
| F   | T   | F   |     |            |
| F   | F   | T   |     |            |
| F   | F   | F   |     |            |

Be sure each row starts with T and not F.

**_Fill in the placeholder columns with the intermediate results of the logical expression. Do this in the order that the expression is evaluated, one binary operation at a time (or unary operation in the case of "not")._**

| A   | B   | C   | ¬A  | ¬A ∧ B | ¬A ∧ B ∨ C |
| :-- | :-- | :-- | :-- | :----- | ---------: |
| T   | T   | T   |     |        |            |
| T   | T   | F   |     |        |            |
| T   | F   | T   |     |        |            |
| T   | F   | F   |     |        |            |
| F   | T   | T   |     |        |            |
| F   | T   | F   |     |        |            |
| F   | F   | T   |     |        |            |
| F   | F   | F   |     |        |            |

**_Fill in the rows one at a time with the results of the logical expressions. Done this way you are always comparing one row in the table to another row in the table. The final row will be the result of the full logical expression._**

|  A  |  B  |  C  | ¬A  | ¬A ∧ B | ¬A ∧ B ∨ C |
| :-: | :-: | :-: | :-: | :----: | :--------: |
|  T  |  T  |  T  |  F  |   F    |     T      |
|  T  |  T  |  F  |  F  |   F    |     F      |
|  T  |  F  |  T  |  F  |   F    |     T      |
|  T  |  F  |  F  |  F  |   F    |     F      |
|  F  |  T  |  T  |  T  |   T    |     T      |
|  F  |  T  |  F  |  T  |   T    |     T      |
|  F  |  F  |  T  |  T  |   F    |     T      |
|  F  |  F  |  F  |  T  |   F    |     F      |
