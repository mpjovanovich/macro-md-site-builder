---
title: Polymorphism
course: SDEV140
---

- [Polymorphism](#polymorphism)
  - [Usage](#usage)

# Polymorphism

**Polymorphism**: Allows objects of different classes to be treated as objects of a common superclass.

Functions can accept an interface or base class as a parameter type, and accept any class that implements the interface or base class.

### Usage

_Example_:

\*TypeScript programming language

```typescript
interface IDatabase {
  connect(): void;
  disconnect(): void;
  execute_query(query: string): void;
}
```

- Functions that use the interface:
  - `fetch_setting(IDatabase db, string setting_name)`
  - `validate_credentials(IDatabase db, string username, string password)`

_Example_:

\*TypeScript programming language

```typescript
interface IFile {
  open(): void;
  close(): void;
  read(): string;
  write(data: string): void;
  delete(): void;
}
```

- Functions that use the interface:
  - `copy_file(IFile source, IFile destination)`
  - `move_file(IFile source, IFile destination)`
  - `delete_file(IFile file)`

_Example_:

\*Python programming language

```python
from abc import ABC, abstractmethod

## Abstract base class
class Shape(ABC):
    def __init__(self, name):
        ## Protected attribute
        self._name = name

    ## Concrete method
    def get_name(self):
        return self._name

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

```python
## Function that uses the Shape interface
## Does not care if the object is a Circle or Rectangle
def print_shape_info(shape: Shape):
    print(f"Name: {shape.get_name()}")
    print(f"Area: {shape.area()}")
    print(f"Perimeter: {shape.perimeter()}")

c = Circle("Circle", 5)
r = Rectangle("Rectangle", 5, 10)

print_shape_info(c)
print_shape_info(r)
```
