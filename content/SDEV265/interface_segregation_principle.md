---
title: Interface Segregation Principle
course: SDEV265
---

- [Interface Segregation Principle](#interface-segregation-principle)
  - [Example](#example)

# Interface Segregation Principle

"Clients should not be forced to depend upon interfaces that they do not use."

Clients = classes that use the interface.

Keep interfaces lean - kind of like Single Responsibility Principle for interfaces.

## Example

```python
import abc

class Sendable(abc.ABC):
    @abstractmethod
    def email_document(self):
        pass

    @abstractmethod
    def fax_document(self):
        pass

class EStatement(Sendable):
    # This makes sense here
    def email_document(self):
        # Do email things
        return

    # This does not make sense for an e-statement, but we are forced to implement it
    def fax_document(self):
        raise NotImplementedError('This document cannot be faxed.')
```

How would we fix this?

- Split the interface into two separate interfaces

```python
class Emailable(abc.ABC):
    @abstractmethod
    def email_document(self):
        pass

class Faxable(abc.ABC):
    @abstractmethod
    def fax_document(self):
        pass

# No need to implement the Faxable interface
class EStatement(Emailable):
    # ...
```
