---
title: Encapsulation
course: SDEV140
---

- [Encapsulation](#encapsulation)
  - [Access Modifiers](#access-modifiers)
  - [Pythonic Guidelines - Controlling Access](#pythonic-guidelines---controlling-access)
  - [Summary](#summary)
- [Basics - Examples](#basics---examples)
  - [Example 1: Maintaining State](#example-1-maintaining-state)
  - [Example 2: Objects as Properties](#example-2-objects-as-properties)

# Encapsulation

Primary purposes of **encapsulation** are to:

- Bundle the data (properties) and methods (functions) that operate on the data into a single unit.
- Prevent direct access to the data from outside the class.

_Example_:

- Class = `BankAccount`
- Methods that users of class should see (friendly public interface / API):
  - `transfer_to_account()`
- Methods that users of class should not see (internal "banky" implementation details):
  - `_negotiate_routing_channel()`
  - `_await_confirmation_code()`
  - `_log_transaction()`
  - `_send_confirmation_email()`

## Access Modifiers

**_Note:_ We are discussing general OOP principles here. Python does not have access modifiers. It instead uses naming conventions to indicate access.**

- We can control access to properties and methods using **access modifiers**.
  - Also called **visibility modifiers**.
- Access modifiers are typically implemented as keywords that go before the property or method.

| Modifier  | Description                                          |
| --------- | ---------------------------------------------------- |
| public    | Accessible from anywhere.                            |
| protected | Accessible from within the class and any subclasses. |
| private   | Accessible only from within the class.               |

_C# Example_:

```csharp
class Person
{
    // Private property
    private string name;

    // Public method
    public void DoSomething()
    {
        // Access the name property
        Console.WriteLine(this.name);
    }
}
```

## Pythonic Guidelines - Controlling Access

~~fig(25){https://miro.medium.com/v2/1*ls5qApmZPtUIV3Z_wll7Fw.png}

Per [PEP 8 - Designing for Inheritance](https://peps.python.org/pep-0008/#designing-for-inheritance)...

- Pythonic way of implementing public:
  - "Public attributes should have no leading underscores."
- Pythonic way of implementing protected:
  - "Use one leading underscore only for non-public methods and instance variables."
- Pythonic way of implementing private:
  - "If your class is intended to be subclassed, and you have attributes that you do not want subclasses to use, consider naming them with double leading underscores and no trailing underscores. This invokes Python’s name mangling algorithm, where the name of the class is mangled into the attribute name."
  - Not nearly as common as public and protected.
- "If in doubt, choose non-public."

_Python Example_:

```python
class Person:
    # Public property
    name = 'Bob'

    # Protected property
    _age = 30

    # Private property
    __ssn = '123-45-6789'

    # Public method
    def do_something(self):
        print(self.name)

    # Protected method
    def _do_something(self):
        print(self._age)

    # Private method
    def __do_something(self):
        print(self.__ssn)
```

## Summary

Public is what the "outside" world is meant to see.

Protected is what subclasses are meant to see.

Private is what only the class itself is meant to see.

# Basics - Examples

## Example 1: Maintaining State

- We can keep track of the state of an object using properties.

```python
# Define the class:
class BankAccount:
    # CONSTRUCTOR
    def __init__(self, initial_balance = 0):
        # We don't want the user to directly access the balance property,
        # so we make it non-public by prefixing it with an underscore.
        self._balance = initial_balance

    # PUBLIC METHODS
    def deposit(self, amount):
        if amount > 0:
            self._balance += amount
            print(f"Deposited ${amount}. New balance: ${self._balance}")
        else:
            print("Invalid deposit amount. Please deposit a positive amount.")

    def withdraw(self, amount) -> None:
        if amount <= 0:
            print("Invalid withdrawal amount. Amount must be greater than 0.")
        elif amount > self._balance:
            print("Insufficient funds.")
        else:
            self._balance -= amount
            print(f"Withdrew ${amount}. New balance: ${self._balance}")

    # We still want the user to be able to view the balance - just not change it.
    # We can accomplish this by creating a getter method that returns the value of the balance property.
    def get_balance(self) -> float:
        return self._balance

# Use the class:
account = BankAccount(initial_balance=1000)
print(f"Initial balance: ${account.get_balance()}")
account.deposit(500)
account.withdraw(200)
account.withdraw(1000)  # Should fail due to insufficient funds
print(f"Final balance: ${account.get_balance()}")
```

## Example 2: Objects as Properties

- We can use objects as properties of other objects.

```python
# Define the class:
class Person:
    # CONSTRUCTOR
    def __init__(
        self,
        first_name,
        last_name,
        father = None,
        mother = None
    ):
        # Initialize properties to the values passed to the constructor
        self.first_name = first_name
        self.last_name = last_name
        self.father = father
        self.mother = mother

        # Initialize children property as an empty list
        self.children = []

    # PUBLIC METHODS
    def add_child(self, child):
        self.children.append(child)

    def print_info(self):
        # Print the name
        father = 'N/A'
        mother = 'N/A'
        if self.father != None:
            father = self.father._get_full_name()
        if self.mother != None:
            mother = self.mother._get_full_name()
        print(
            f"Name: {self._get_full_name()}, Father: {father}, Mother: {mother}"
        )

        # Print children
        if len(self.children) > 0:
            print("Begin Children:")
            for child in self.children:
                print("  ", end="")
                child.print_info()
            print("End Children")

    # PROTECTED METHODS
    def _get_full_name(self):
        return self.first_name + " " + self.last_name

# Create parents
father = Person("John", "Doe")
mother = Person("Jane", "Doe")

# Create children
child1 = Person("Bobby", "Beebop", father, mother)
child2 = Person("Charles", "Beebop", father, mother)
child3 = Person("Davey", "Beebop", father, mother)

# Add children to father
father.add_child(child1)
father.add_child(child2)
father.add_child(child3)

# Print father's info
father.print_info()
```
