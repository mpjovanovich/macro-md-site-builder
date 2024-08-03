---
title: Loops
course: SDEV140
---

- [Loops](#loops)
  - [Why Loops?](#why-loops)
  - [Pseudocode](#pseudocode)
- [Definite Loops](#definite-loops)
  - [`for` Loops](#for-loops)
    - [The range() Function](#the-range-function)
    - ["C style" Syntax](#c-style-syntax)
    - [Changing the Step](#changing-the-step)
    - [Off by One Errors](#off-by-one-errors)
- [Indefinite Loops](#indefinite-loops)
  - [`while` Loops](#while-loops)
- [Nested Loops](#nested-loops)
- [Controlled Loops with "break" and "continue"](#controlled-loops-with-break-and-continue)
  - [Break](#break)
  - [Continue](#continue)

# Loops

## Why Loops?

~~fig(70){https://timmousk.com/wp-content/uploads/2022/03/2-6.jpg}

- Loops are commonly used to:
  - repeat a block of code
  - iterate over a collection of data
- Loops can run zero to infinite times depending on the condition and inputs.
- **Iteration** = one execution of the loop body.

## Pseudocode

```
while some_condition == True:
    # loop body
```

```
for some_start_value to some_end_value:
    # loop body
```

```
for each item in some_collection:
    # loop body
```

# Definite Loops

Used when we know in advance how many times we want to iterate.

## `for` Loops

Used when we know exactly how many times the loop should run.

- Initialize loop control variable.
- Test loop control variable.
- Alter loop control variable.
- Test until the entry condition is false.

Python doesn't have a traditional `for` loop; most languages do.

### The range() Function

```python
## There are three "overloads" for the range function, so we can
## Write a python loop in different ways. These are all the same:
for i in range( 0, 10, 1 ):
      ## do some work ten times
for i in range( 0, 10 ):
      ## do some work ten times
for i in range( 10 ):
	## do some work ten times
```

- Range returns a list of numbers.
- We can then iterate over the list.
- The i is optional.
  - ```python
    for _ in range( 10 ):
        ## do some work ten times
    ```

<p class="demo">Demos:</p>

[Harmonic Series](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/harmonic_series_loop.py)

[Print Multiples](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/print_multiples.py)

### "C style" Syntax

Many languages use "C style" syntax for loops, as shown below.

For this reason I require that you call the range function shown above with all three arguments.

```cpp
#include <stdio.h>

int main() {

    /////////////////////////////////////////
    // Prints numbers 0-9
    /////////////////////////////////////////
    for (int i = 0; i < 10; i++) {
        // A print statement in C
        printf("%d\n", i);
    }

    return 0;
}
```

### Changing the Step

- The **counter** does not have to increment / decrement by one.
- We can change the **step size**.

```python
for i in range( 10, 101, 10 ):
    ## do some work using the numbers 10, 20, ..., 100
```

### Off by One Errors

- Be mindful of the inclusiveness of the range function.
- **Start inclusive** and **end exclusive**.
- [start, end)
- When using while, also be mindful of < vs <= and > vs >=.

```python
## Prints 0-9
for i in range( 0, 10, 1 ):
    print( i )
```

```python
## Prints 0-9
i = 0
while i < 10:
    print( i )
    i += 1
```

# Indefinite Loops

Used when we don't know how many times the loop should run.

## `while` Loops

```python
while some_condition == True:
    ## do some work
```

<p class="demo">Demos:</p>

[Calculate Exponents](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/calculate_exponents.py)

# Nested Loops

- A **nested loop** is a loop inside another loop.
- The inner loop is executed completely for each iteration of the outer loop.
- The loop body is offset by indenting the code block for the body

```python
## Outer loop
for i in range( 10 ):
    ## Inner loop
    for j in range( 10 ):
        print( i, j )
```

- We don't have to use i and j, but it's a convention

<p class="demo">Walkthrough:</p>

What is the output of this program?

```python
# OUTER LOOP
for i in range( 0, 2, 1 ):
    # This statement is in the outer loop
    print( "Outer loop started: " + str(i) )

    # INNER LOOP
    for j in range( 0, 2, 1 ):
        # This statement is part of the inner loop
        print( "Inner loop started: " + str(j) )
        # Do some work...
        print( "Inner loop complete: " + str(j) )

    # We can have more code in the outer loop after the
    # inner loop has finished.
    print( "Outer loop complete: " + str(i) )
```

Tracking variables:

| Outer, i | Inner, j | x   |
| -------- | -------- | --- |
| 0        | 0        | 0   |
| ...      | ...      | ... |

<p class="demo">Walkthrough:</p>

What is the output of this program?

```python
x = 0

# OUTER LOOP
for i in range( 0, 3, 1 ):
    x += i
    print( f"i = {i}, j = --, x = {x}" )

    # INNER LOOP
    for j in range( 0, 3, 1 ):
        x += j
        print( f"i = {i}, j = {j}, x = {x}" )
```

# Controlled Loops with "break" and "continue"

## Break

We can "short-circuit" a loop using the `break` statement.

This will immediately exit the loop, much like a `return` statement exits a function.

```python
## Will only print 0-4
for i in range( 10 ):
    if i == 5:
        break
    print( i )
```

Example scenario:

- Searching for a value in a list. Once you've found the value, you don't need to keep searching. We will cover this when we do arrays.

## Continue

We can skip the rest of the loop body but not break out of the whole loop using the `continue` statement.

```python
## Will skip 5
for i in range( 10 ):
    if i == 5:
        continue
    print( i )
```

Example scenario:

- Loop through a course roster and print all students except those who have withdrawn. You'd use a `continue` statement to skip the withdrawn students.

<p class="demo">Demos:</p>

[Name Sentinal](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV120_Computing_Logic/name_sentinal.py)
