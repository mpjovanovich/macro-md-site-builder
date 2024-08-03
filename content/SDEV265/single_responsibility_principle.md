---
title: Single Responsibility Principle
course: SDEV265
---

- [Single Responsibility Principle](#single-responsibility-principle)
  - [Refactoring for Single Responsibility](#refactoring-for-single-responsibility)
  - [Command Query Separation](#command-query-separation)

# Single Responsibility Principle

"A class should have only one reason to change."

We are usually referring to:

- Functions
- Classes

But it can also apply to:

- Packages
- Services
- ...

## Refactoring for Single Responsibility

_Examples:_

Messy function to refactor:

```python
# Creates a database connection
# Fetches user from db
# Fetches user preference from db
def fetch_user_preference(user_id, preference_name):
    db = get_db()
    user_row = db.query('SELECT * FROM users WHERE id = ?', user_id)
    user = new User(user_row)
    if preference_name in user['preferences']:
        return user['preferences'][preference_name]
    else:
        raise ValueError('Preference not found')
```

Even small functions can be refactored:

```python
# Deposits money into account
# Returns new balance
def deposit(account, amount):
    account.balance += amount
    return account.balance
```

## Command Query Separation

**Command Query Separation** (CQS) is a design principle that states that a method should either be a command that performs an action or a query that returns data, but not both.

Commands: Change the state of the system and do not return data

Queries: Return data and do not change the state of the system

```python
class Account:
    def __init__(self, balance):
        self.balance = balance

    ## Command
    def deposit(self, amount):
        self.balance += amount

    ## Command
    def withdraw(self, amount):
        self.balance -= amount

    ## Query
    def get_balance(self):
        return self.balance

    ## Query
    def validate_pending_withdrawal(self, amount):
        return self.balance >= amount
```
