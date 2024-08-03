---
title: Inheritance
course: SDEV140
---

- [Inheritance](#inheritance)
  - [Base Class](#base-class)
  - [Derived Class](#derived-class)
  - [Why use a Derived Class?](#why-use-a-derived-class)
  - [Why use Inheritance?](#why-use-inheritance)
  - [Inheritance Example](#inheritance-example)

# Inheritance

- One of the "three pillars of OOP"
- **Inheritance** is the idea of extending functionality from an existing class.

## Base Class

The class from which other classes inherit is called the:

- **Base class**
- **Parent class**
- **Superclass**

Typically more general in terms of functionality.

## Derived Class

The class that inherits from another class is called the:

- **Derived class**
- **Child class**
- **Subclass**

Typically more specialized in terms of functionality.

## Why use a Derived Class?

- Override properties/methods from base class.
- Add new properties/methods specific to derived class.

## Why use Inheritance?

- Override properties/methods from base class.
- Add new properties/methods specific to derived class.

## Inheritance Example

```python
class Quadrilateral:
    def __init__(self, side1, side2, side3, side4):
        ## Protected attributes
        self._side1 = side1
        self._side2 = side2
        self._side3 = side3
        self._side4 = side4

    def perimeter(self):
        return self._side1 + self._side2 + self._side3 + self._side4

class Rectangle(Quadrilateral):
    ## Call parent class constructor
    ## super = 'Quadrilateral'
    def __init__(self, width, height):
        super().__init__(width, height, width, height)
        self.__width = width
        self.__height = height

    def area(self):
        return self.__width * self.__height

class Square(Quadrilateral):
    ## Call parent class constructor
    ## super = 'Quadrilateral'
    def __init__(self, side):
        super().__init__(side, side, side, side)

    def area(self):
        return self._side1 ** 2

## Create instances of derived classes
r = Rectangle(5, 10)
s = Square(5)

print(f"Rectangle area: {r.area()}")
print(f"Rectangle perimeter: {r.perimeter()}")
print(f"Square area: {s.area()}")
print(f"Square perimeter: {s.perimeter()}")
```
