---
title: Abstraction
course: SDEV140
---

- [Abstraction](#abstraction)
  - [Interfaces](#interfaces)
    - [Usage](#usage)
  - [Abstract Classes and Methods](#abstract-classes-and-methods)
    - [Usage](#usage-1)

# Abstraction

Primary purposes of **abstraction** are to:

- Hide the complexity of the system from the user.
- Segregate interfaces from implementation.

## Interfaces

**Interface**: The set of public methods and properties that a class provides.

**Implementation**: The actual code that performs the operations.

An interface defines a **contract** between the class and the outside world. The class promises to provide the methods and properties defined in the interface.

We may speak of interface as:

- General sense: The set of methods and properties that a class provides.
- Specific sense: A language construct that defines a contract between the class and the outside world (keyword `Interface`).

### Usage

A class may implement zero to many interfaces.

**A note on Python**: Python does not have a built-in `Interface` keyword. Instead, we use abstract classes and methods (discussed below) to define interfaces.

_Example_:

\*TypeScript programming language

Interface

```typescript
interface IDatabase {
  connect(): void;
  disconnect(): void;
  execute_query(query: string): void;
}
```

Implementation

```typescript
class MySQLDatabase implements IDatabase {
  connect(): void {
    // Connect to MySQL database
  }

  disconnect(): void {
    // Disconnect from MySQL database
  }

  execute_query(query: string): void {
    // Execute query on MySQL database
  }
}
```

## Abstract Classes and Methods

**Abstract**: Cannot be directly instantiated or used.

**Concrete**: Can be directly instantiated or used.

- Abstract base classes

  - Are only used as a base class for other classes.
  - May contain abstract methods or properties.
  - May contain concrete methods or properties.

- Abstract methods
  - May only by defined in an abstract class.
  - _Must be implemented in a derived class by overriding them in the derived class._

### Usage

A class may (usually) inherit from one and only one abstract base class.

```python
from abc import ABC, abstractmethod

## Abstract base class
class Shape(ABC):
    def __init__(self, name):
        self._name = name

    ## Concrete method
    def print_name(self):
        print(f"Name: {self._name}")

    ## Abstract methods - must be implemented in derived classes
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Circle(Shape):
    def __init__(self, name, radius):
        ## Call parent class constructor
        ## super = 'Shape'
        super().__init__(name)

        ## Private attributes
        self.__PI = 3.14159
        self.__radius = radius

    ## Override abstract methods
    def area(self):
        return self.__PI * self.__radius ** 2

    def perimeter(self):
        return 2 * self.__PI * self.__radius

class Rectangle(Shape):
    def __init__(self, name, width, height):
        ## Call parent class constructor
        ## super = 'Shape'
        super().__init__(name)

        ## Private attributes
        self.__width = width
        self.__height = height

    ## Override abstract methods
    def area(self):
        return self.__width * self.__height

    def perimeter(self):
        return 2 * (self.__width + self.__height)
```
