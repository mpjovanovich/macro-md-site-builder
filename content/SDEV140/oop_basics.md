---
title: Object Oriented Programming
course: SDEV140
---

- [Object Oriented Programming](#object-oriented-programming)
  - [Basics](#basics)
    - [Example Classes](#example-classes)
  - [Creating a Class in Python](#creating-a-class-in-python)
    - [Pythonic Guidelines - Class Names](#pythonic-guidelines---class-names)
  - [Instantiating an Object](#instantiating-an-object)
  - [Accessing Properties and Methods](#accessing-properties-and-methods)
    - [The `self` Keyword](#the-self-keyword)
  - [Constructors](#constructors)

# Object Oriented Programming

## Basics

- **Object Oriented Programming (OOP)** is a programming paradigm where we model real-world objects
- **Classes** are blueprints used to create objects.
- **Objects** are **instances** of a class.
- **Methods** are functions inside a class.
- **Properties** are variables inside a class.
- **State** is the current collective value of an object's properties.

### Example Classes

| Class       | Object (Variable Name) | Properties              | Methods                             |
| ----------- | ---------------------- | ----------------------- | ----------------------------------- |
| Car         | myCar                  | { make, model, year }   | getMake(), printYear()              |
| Book        | myBook                 | { title, author, year } | getTitle(), getAuthor(), getYear()  |
| BankAccount | myAccount              | { balance }             | getBalance(), deposit(), withdraw() |
| Order       | myOrder                | { items, total }        | getItems(), getTotal()              |

## Creating a Class in Python

- We use the `class` keyword to create a class.

```python
# Define the Person class
class Person:
    # Properties
    name = 'Bob'

    # Methods
    do_something():
        pass
```

### Pythonic Guidelines - Class Names

~~fig(25){https://miro.medium.com/v2/1*ls5qApmZPtUIV3Z_wll7Fw.png}

- Per [PEP 8 - Class Names](https://www.python.org/dev/peps/pep-0008/#class-names).
  - Class names are
    - PascalCase
    - nouns
  - Property names are
    - snake_case
    - nouns
  - Method names are
    - snake_case
    - verbs

## Instantiating an Object

- To create an **instance** of a class, we use parentheses after the class name.
- We will see shortly that this is because we're actually calling a method.

```python
# Create two instances (variables) of the Person class
person1 = Person()
person2 = Person()
```

## Accessing Properties and Methods

- We use the **dot operator** to access properties and methods of an object.
- We can also use the `dir()` function to see all properties and methods of an object.

```python
person1 = Person()

# Call method
person1.do_something()

# Access property
print(person1.name)
```

### The `self` Keyword

- The `self` keyword refers to the current object.
- We use it to access properties and methods inside the class.
- When calling a method, we do not need to pass `self` as an argument.

```python
# Define the Person class
class Person:
    name = 'Bob'

    def do_something(self):
        # Access the name property of the current object
        print(self.name)

# Create an instance of the Person class
person1 = Person()

# Call the do_something method
# No need to pass any arguments.
person1.do_something()
```

## Constructors

- A **constructor** is a special method that is called when an object is created.
- The constructor is used to initialize the object.
- In Python, the constructor is always called `__init__()`.
- The constructor is optional.
- The first argument must be `self`.
- Since it's a function, we can define and pass other parameters to initialize the object.

```python
# Class definition
class Person:
    # Constructor
    def __init__(self, name) -> None:
        # Initialize the name property
        self.name = name

    def do_something(self) -> None:
        print(self.name)

# Create an instance of the Person class
person1 = Person('Bob')
```
