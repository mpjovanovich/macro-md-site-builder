---
title: Error Handling and Input Validation
course: SDEV140
---

- [Error Handling and Input Validation](#error-handling-and-input-validation)
  - [Exception Handling](#exception-handling)
    - [VS Code Exception Settings](#vs-code-exception-settings)
    - [Try / Except Blocks](#try--except-blocks)
      - [General Syntax](#general-syntax)
      - [The Exception Object](#the-exception-object)
    - [Types of Exceptions](#types-of-exceptions)
  - [Validation](#validation)
    - [Data Type Validation](#data-type-validation)
    - [Data Range Validation](#data-range-validation)
    - [Data Format Validation](#data-format-validation)

# Error Handling and Input Validation

**Validation** is the process of ensuring that data is correct and useful.

**Exception handling** is the process of responding to errors that occur during program execution.

These often go hand-in-hand.

## Exception Handling

Exceptions are a concept in many programming languages.

When a runtime error occurs, an exception is **thrown**.

The exception is either **caught** by an exception handler or the program crashes.

### VS Code Exception Settings

- In VS Code, you can enable or disable exception breaking
- This will cause the debugger to stop when any exception is thrown
- Useful to see exactly where error is occurring

![VS Code Exception Settings](images/vs_code_exception_settings.png)

### Try / Except Blocks

_Also called a `try` / `catch` block in some languages._

- Use a `try` block to contain code that might cause an exception
- Use an `except` block to handle the exception
- The except block keeps the program from crashing

We might use and except block to:

- Log the error
- Display an error message to the user
- Attempt to recover from the error

#### General Syntax

```python
x = 1
y = 0

try:
    # Code that might cause an exception
    print(x / y)
except:
    # What to do if an exception occurs
    print("This is a description of the error...")
```

#### The Exception Object

When an exception occurs, an **exception object** is created.

This object contains information about the exception.

```python
try:
    print(1 / 0)
except Exception as e:
    print(e)
```

### Types of Exceptions

We can choose to handle specific types of exceptions. Useful when:

- We want to handle different exceptions differently
- We want to ignore certain exceptions
- We want to handle some exceptions and let others crash the program
- We want the program to **fail gracefully**
  - Close the program in a controlled manner
  - Take above actions before closing
  - Release resources (e.g. close files, network connections, etc.)

```python
try:
    ## Will throw a ZeroDivisionError
    print(1 / 0)

    ## Will throw a ValueError
    print(int("abc"))

    ## Will throw a FileNotFoundError
    file = open("does_not_exist.txt")

    ## Will throw a NameError - no handler so program will crash
    print(variable_does_not_exist)

except ZeroDivisionError:
    print("Cannot divide by zero.")

except ValueError:
    print("Invalid value.")

except FileNotFoundError:
    print("File not found.")
```

## Validation

- **Data Type Validation**: Ensuring that data is the correct type
- **Data Range Validation**: Ensuring that data is within a certain range
- **Data Format Validation**: Ensuring that data is in the correct format

### Data Type Validation

- Use exception handling with built-in conversion function
  - e.g. `int()`, `float()`, `str()`, `bool()`, etc.

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    ## Handle invalid input
    print("Invalid number.")
```

### Data Range Validation

- Use a conditional statement

```python
number = int(input("Enter a number between 1 and 10: "))
if number < 1 or number > 10:
    ## Handle invalid input
    print("Invalid number.")
```

```python
pet_type = input("Enter a pet type for sitting service (dog, cat): ")
if pet_type != "dog" and pet_type != "cat":
    ## Handle invalid input
    print("Invalid pet type.")
```

### Data Format Validation

- Use a conditional statement, regular expression, or exception handling
  - e.g. `mm/dd/yyyy`, `mm/dd/yy`, `mm-dd-yyyy`, `mm-dd-yy`, etc.

```python
date = input("Enter a date in the format mm/dd/yyyy: ")
if len(date) != 10 or date[2] != "/" or date[5] != "/":
    ## Handle invalid input
    print("Invalid date.")
else:
    ## Convert to a date object
    date = datetime.strptime(date, "%m/%d/%Y")
```
