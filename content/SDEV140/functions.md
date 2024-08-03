---
title: Functions and Modularity
course: SDEV140
---

- [Functions](#functions)
  - [Overview: Why Functions?](#overview-why-functions)
    - [Code Reuse](#code-reuse)
    - [Code Consistency](#code-consistency)
    - [Code Organization](#code-organization)
    - [Code Readability](#code-readability)
    - [Code Testability](#code-testability)
    - [Code Modularity / Portability](#code-modularity--portability)
  - [Function Definition](#function-definition)
  - [The Call Stack](#the-call-stack)
    - [Stack Data Structure](#stack-data-structure)
    - [Stack Frames](#stack-frames)
    - [Call Stack](#call-stack)
  - [Function Composition](#function-composition)
  - [Variable Scope](#variable-scope)
  - [Named Arguments](#named-arguments)
  - [Default Parameters](#default-parameters)
  - [Type Annotations](#type-annotations)
  - [The `main` Function](#the-main-function)

# Functions

## Overview: Why Functions?

### Code Reuse

- **Don't Repeat Yourself** (DRY) principle

### Code Consistency

- One version of a function for all callers.

### Code Organization

- Break up large programs into smaller, more manageable pieces.
- **Single responsibility principle**: function should have a single, well-defined responsibility / purpose.

### Code Readability

- Descriptive function names make code self-documenting.
- Usually start with a verb, except for boolean checks.

_Example Function Names_

User input:

- `get_user_input()`
- `get_user_input_as_int()`

Getters and setters:

- `get_account_balance()`
- `update_account_balance()`

Boolean checks:

- `is_user_logged_in()`
- `is_user_admin()`

Data processing:

- `calculate_tax()`
- `filter_items_by_user()`

### Code Testability

- Unit testing

### Code Modularity / Portability

- Functions can be used by other parts of the same program.
- Functions can be used by different programs.

## Function Definition

_Python_

```python
# Function signature
def function_name( parameter1, parameter2, ... ):
    # Function body
    return value
```

_C# / Java_

```csharp
// C# / Java style function signature
// Return type is bool, accepts two int parameters
// Uses curly braces for block of code instead of indentation
public bool FunctionName( int parameter1, int parameter2 )
{
    // Function body
    return value;
}
```

A **function signature** consists of:

- The keyword `def`
- The function name
- A list of parameters in parentheses; zero to many parameters
  - Parameter name
  - Parameter data type (in typed languages)
- A return type (in typed languages)
  - If function does not return a (useful) value we do not need `return` keyword.
    - We call this a **void function**.
    - Since all functions must return a value, function returns special value to signify "no return value"
    - `None`, `null`, `void`, etc.

A **function body** is a block of code that is executed when the function is called.

- Must be indented.
- One or more statements.

<p class="demo">Demo:</p>

m04_create_truth_table.py

## The Call Stack

### Stack Data Structure

LIFO (last in, first out) data structure.

<figure>
    <span>
        <img src="https://miro.medium.com/v2/resize:fit:640/1*lb-0r80YYhcnoVcQ3HY-1g.gif" style="">
    </span>
    <figcaption>
        <a href="https://medium.com/@todoroski97/data-structure-stack-17b80ed3bfa9">The Stack Data Structure</a>
    </figcaption>
</figure>

### Stack Frames

A stack frame:

- Represents the execution context of a single function call.
- Contains all data relevant to the function call.
- Exists only during the execution of a function call.

### Call Stack

The call stack:

- Keeps track of the sequence of function calls in a program
- Is composed of stack frames
- Exists for the lifetime of a program

**Stack overflow** = when the call stack grows too large, and the program runs out of memory.

## Function Composition

- We can say that functions are **composable**.
- We can use the output of one function as the input to another function.
- We can use the output of a function as the input to itself.

Two main ways that we see this:

```python
def f( x ):
    return x + 1

def g( x ):
    return x * 2

## Composition
print( f( g( 2 ) ) )
```

Or, function chaining:

```python
text = "   Hello, World!   "
result = text.strip().lower().replace("world", "Python").capitalize()
print(result)
```

## Variable Scope

**Variable scope** = the part of a program where a variable is visible.

Typically two types:

- **Global scope** = visible to entire program.
- **Local scope** = visible only within function.

```python
# Global scope
x = 10

def my_function():
    y = 20

    ## In scope: x, y
    print(x, y)


my_function()

## In scope: x
## Out of scope: y
print(x) # This works
print(y)  # NameError: name 'y' is not defined
```

## Named Arguments

Up until now we have used **positional arguments** - the order of arguments determines how they're "plugged in".

We can also pass **named arguments** to a function by name. Useful when function has many parameters.

```python
def greet( first_name, last_name ):
    print(f"Hello, {first_name} {last_name}!")

## All of these are equivalent
greet( "Billy", "Billy" )
greet( first_name="Billy", last_name="Billy" )
greet( last_name="Bornsen", first_name="Billy" )
```

## Default Parameters

We can provide default values for parameters.

Useful when most of the time we want to use the same value in function call.

```python
def greet( name="Jumping Jennifer" ):
    print(f"Hello, {name}!")

greet() # prints "Hello, Jumping Jennifer!"
greet("Dancing Denise") # prints "Hello, Dancing Denise!"
```

E.g.: the `print()` function has a default value for the `end` parameter.

```python
# Default implementation: print("Hello", end="\n")
# Let's change the default value of end to a space
print("Hello", end=" ")
print("Jumping Jennifer!")
```

If we have both default and non-default parameters, non-defaults must come first.

```python
def greet( name="Jumping Jennifer", greeting ):
    print(f"{greeting}, {name}!")

greet("Hello") # SyntaxError: non-default argument follows default argument
```

## Type Annotations

Python allows us to add type annotations to function parameters and return values.

```python
# greet function takes two string parameters and returns None (void function)
def greet( first_name: str, last_name: str ) -> None:
    print(f"Hello, {first_name} {last_name}!")
```

Type annotations are not enforced by Python, but can be used by linters.

**Linting** = static analysis of code to find errors before runtime.

VS Code, e.g., will provide warnings if you pass the wrong type to a function if type hints are present.

```python
def greet( first_name: str, last_name: str ) -> None:
    print(f"Hello, {first_name} {last_name}!")

greet( "Billy", "Bornsen" )
greet( 1, 2 ) # No error, but linters will warn
```

## The `main` Function

- Historically, the `main` function is the entry point of a program.
- In Python, the `main` function is not required, but is a common convention.
- Handles the setup and execution of a program, e.g. get user input, call other functions, etc.

```python
def main():
    x = getUserInput()
    y = doSomething(x)
    print(y)
    # etc. etc.

main()
```
