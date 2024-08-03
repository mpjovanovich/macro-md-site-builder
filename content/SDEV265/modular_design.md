---
title: Modular Design
course: SDEV265
---

- [Modular Design](#modular-design)
  - [Benefits of Modular Design](#benefits-of-modular-design)
  - [Principles of Modular Design](#principles-of-modular-design)
    - [Cohesion](#cohesion)
    - [Coupling](#coupling)
  - [Strategies for Modular Design](#strategies-for-modular-design)
    - [Decomposition](#decomposition)

# Modular Design

**Modules** are self-contained units that can be combined to create a larger system. They can be reused in other systems, which can save time and effort.

- Services
- Packages

**Components** are the building blocks of a module. They can be classes, functions, or other modules.

- Classes
- Functions

## Benefits of Modular Design

- **Reusability**: Modules can be reused in other systems.
  - Internally (within the same system); we have multiple applications that use the same module.
    - Reporting module
    - Logging module
    - Data access module
    - UI component module
  - Externally (in other systems); we offer a module to other developers as a library.
- **Flexibility**: Modules can be combined in different ways to create different systems.
  - "Pick and choose" architecture
  - Only include the modules you need (reduce bloat)
  - Client can choose which modules to purchase
- **Maintainability**: Modules can be updated and maintained independently, possibly by different teams. Easier to track:
  - Bug fixes
  - Feature enhancements
  - Security patches
- **Testability**: Modules can be tested independently.
- **Security**: Modules can be secured independently.
  - Access control (who can use the module); e.g. devs working on UI don't need access to the data access module.

## Principles of Modular Design

### Cohesion

**Cohesion** is the degree to which the elements of a module belong together.

Does it "make sense" for these elements to be together?

Aim for _high cohesion_.

### Coupling

**Coupling** is the degree to which the elements of a module depend on another.

- **Loose coupling**: Modules are independent of each other.
- **Tight coupling**: Modules are dependent on each other.

If a dependency changes, will it affect / break my module?

Aim for _loose coupling_.

Bad example:

```python
class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

    # Do I belong here?
    # Why not - cohesion or coupling issue?
    def send_confirmation_email(self):
        # Send confirmation email
        return

    # What about me?
    # Why not - cohesion or coupling issue?
    def login(self):
        # Login user
        return

    def save(self):
        # Should I be here?
        # Why not - cohesion or coupling issue?
        db = Database()
        db.open()
        db.save(self)
        return
```

Good example:

```python
class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

class EmailUtility:
    def send_confirmation_email(self, user):
        # Send confirmation email
        return

class Authenticate:
    def login(self, user):
        # Login user
        return

class DatabaseUtility:
    def create_connection(self):
        # Create database connection
        return connection
```

## Strategies for Modular Design

For existing systems, consider reviewing the current design. Refactor where you find:

- Low cohesion
  - Classes with unrelated methods
  - Functions that do multiple things
- Tight coupling
  - Classes that depend on each other
- Repeated code

For new systems, we'd do our requirements analysis and attempt to identify boundaries between modules.

### Decomposition

**Modular decomposition** is the process of breaking down a complex system into smaller, more manageable modules.

**Functional decomposition** is the process of breaking down a complex system into smaller, more manageable subproblems.

These subproblems can inform the design of modules and components.

<p class="demo">Case Study:</p>

**Draw a House**

~~fig(100){https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVobh4pk3683ngLad6LwokRt7rOCFVO96phfT6GfbDvjq8DR6ncdroBkbUYWEMrCibIoY&usqp=CAU}

Reference:

~~fig(80){https://cis.temple.edu/~wangp/1057-PC/Figure/03-10.png}

Our problem:

| Level | Subproblems      |
| ----- | ---------------- |
| 1     | Draw a house     |
| 2     | Draw a door      |
| 3     | Draw a point     |
| 3     | Draw a rectangle |
| 4     | Draw a line      |

| Level | Subproblems      |
| ----- | ---------------- |
| 1     | Draw a house     |
| 2     | Draw a window    |
| 3     | Draw a rectangle |
| 4     | Draw a line      |
