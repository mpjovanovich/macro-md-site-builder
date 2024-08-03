---
title: Listov Substitution Principle
course: SDEV265
---

- [Liskov Substitution Principle](#liskov-substitution-principle)
  - [Example 1](#example-1)
  - [Example 2](#example-2)

# Liskov Substitution Principle

"Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it."

In other words, a subclass should be able to replace its superclass without breaking the program. We should not violate expectations about:

- Return types
- Exceptions
- Preconditions
- Postconditions

## Example 1

Poor class design: badly implemented method override

```python
# Superclass
class StampCollection:

    def __init__(self, stamps):
        self.stamps = stamps

    # Return stamp if found, else return None
    def find_stamp(self, stamp_name):
        for stamp in self.stamps:
            if stamp == stamp_name:
                return stamp
        return None


# Subclass
class HolidayStampCollection(StampCollection):
    default_holiday_stamp = "Happy Holidays!"

    def __init__(self, stamps):
        super().__init__(stamps)

    # Bad:
    # Return stamp if found, else return default holiday stamp
    def find_stamp(self, stamp_name):
        for stamp in self.stamps:
            if stamp == stamp_name:
                return stamp
        # This breaks the Liskov Substitution Principle by violating the
        # expectations of the superclass about what to do if the stamp is not
        # found.
        return self.default_holiday_stamp


# Our program
def get_renamed_stamp(stamp_collection: StampCollection, stamp_name: str,
                      new_stamp_name: str):
    stamp = stamp_collection.find_stamp(stamp_name)
    # We should raise an error if the stamp is not found
    if stamp == None:
        raise ValueError("Stamp not found")
    stamp = new_stamp_name
    return stamp


def main():
    holiday_stamps = HolidayStampCollection(["Christmas", "New Year's", "Valentine's Day"])
    stamps = StampCollection(["Train", "Flag", "Nostalgic Child"])

    try:
        print(get_renamed_stamp(stamps, "Boat", "Ship"))
    except ValueError as e:
        print(e)

    try:
        # We should have failed, but instead it acted as if it found "X-day" and renamed it to "Y-day"
        print(get_renamed_stamp(holiday_stamps, "X-day", "Y-day"))
    except ValueError as e:
        print(e)

main()
```

How to fix?

- Don't override the method in the subclass unless guaranteed to behave the same as superclass.

## Example 2

Poor class design: "one size fits all" base class

```python
# Superclass
class Account:
    def __init__(self, balance: int):
        self.balance = balance

    # This doesn't make sense for all accounts, so it should not be here
    def get_reward_balance(self):
        return None

# Subclass
class SilverAccount(Account):
    def __init__(self, balance: int, reward_points: int):
        super().__init__(balance)
        self.reward_points = reward_points

    def get_reward_balance(self):
        return self.balance * 0.03

# Subclass
class GoldAccount(Account):
    def __init__(self, balance: int, reward_points: int):
        super().__init__(balance)
        self.reward_points = reward_points

    def get_reward_balance(self):
        return self.balance * 0.05

# Our Program
# This function should be able to work with any Account object
def apply_reward(account: Account):
    reward = account.get_reward_balance()
    # Will fail for basic_account - reward will be None
    account.balance = account.balance + reward
    # For debugging
    print(f"New balance: {account.balance}")

def main():
    gold_account = GoldAccount(100, 50)
    silver_account = SilverAccount(100, 50)
    basic_account = Account(100)

    apply_reward(gold_account)
    apply_reward(silver_account)
    apply_reward(basic_account)

main()
```

How would we fix this?

- We could move the `get_reward_balance` method to each of the subclasses, or better yet...
- Move the `get_reward_balance` method to a separate interface or abstract base class.

```python
import abc

# Python way to define interfaces
class RewardsAccount(abc.ABC):
    @abc.abstractmethod
    def get_reward_balance(self):
        pass

class SilverAccount(Account, RewardsAccount):
    # ...

def apply_reward(account: RewardsAccount):
    # ...
```
