---
title: Dependency Inversion Principle
course: SDEV265
---

- [Dependency Inversion Principle](#dependency-inversion-principle)
  - [Example](#example)

# Dependency Inversion Principle

"High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions."

A **dependency** is when one class or package uses another class or package.

Abstractions here refers to interfaces or abstract base classes.

## Example

```python
class CustomButton1:
    def handle_click(self):
        pass

class CustomButton2:
    def handle_click(self):
        pass

class LoginForm:
    def __init__(self):
        # Direct reference to CustomButton - dependency
        self.button = CustomButton1()
```

**Dependencies:**

```
CustomButton1 <-- LoginForm
```

What if we later want to use CustomButton2? We would have to change the LoginForm class.

**_Fix:_**

```python
## This is the abstraction.
## High-level module
class Button:
    @abstractmethod
    def handle_click(self):
        pass

## Lower-level module
class CustomButton1(Button):
    def handle_click(self):
        # Do handle click things
        return

## Lower-level module
class CustomButton2(Button):
    def handle_click(self):
        # Do handle click things
        return

## Lower-level module
class LoginForm:
    # Let's now pass in the button when we create the LoginForm
    def __init__(self, button: Button):
        self.button = button
```

**Dependencies:**

```
Button <-- CustomButton1, CustomButton2
Button <-- LoginForm
```

Our Button abstraction is "bridge" between modules
