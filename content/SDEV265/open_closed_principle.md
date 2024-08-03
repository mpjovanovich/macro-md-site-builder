---
title: Open/Closed Principle
course: SDEV265
---

- [Open/Closed Principle](#openclosed-principle)
  - [Abstract Base Classes](#abstract-base-classes)
  - [Interfaces](#interfaces)

# Open/Closed Principle

"Software entities should be open for extension but closed for modification."

In other words, you should be able to add new functionality to a module without changing its existing code.

## Abstract Base Classes

An **abstract base class** is a class that cannot be instantiated and is designed to be subclassed.

**Use Case:** When you want to provide some common functionality and also enforce that certain methods are implemented by all subclasses.

```python
import abc

class Employee():
    ## Common attributes for all employees
    def __init__(self, employee_id: int, first_name: str, last_name: str):
        self.employee_id = employee_id
        self.first_name = first_name
        self.last_name = last_name

    ## Abstract method
    ## There's no sensible implementation for this method in the base class
    @abc.abstractmethod
    def calculate_year_to_date_pay(self):
        pass

class HourlyEmployee(Employee):

    def __init__(self, employee_id: int, first_name: str, last_name: str,
                 hours_worked_current_year: float, hourly_rate: float):
        super().__init__(employee_id, first_name, last_name)
        self.hours_worked_current_year = hours_worked_current_year
        self.hourly_rate = hourly_rate

    # This method is required by the Employee base class
    def calculate_year_to_date_pay(self):
        return self.hours_worked_current_year * self.hourly_rate

class SalariedEmployee(Employee):

    def __init__(self, employee_id: int, first_name: str, last_name: str,
                 salary: float, pay_periods_per_year: int,
                 pay_periods_elapsed: int):
        super().__init__(employee_id, first_name, last_name)
        self.salary = salary
        self.pay_periods_per_year = pay_periods_per_year
        self.pay_periods_elapsed = pay_periods_elapsed

    # This method is required by the Employee base class
    def calculate_year_to_date_pay(self):
        return (self.salary /
                self.pay_periods_per_year) * self.pay_periods_elapsed

## This function takes any employee object
## We are therefore guaranteed that the calculate_year_to_date_pay method will exist
def summarize_employee(employee: Employee):
    print(f"Employee ID: {employee.employee_id}")
    print(f"Employee Name: {employee.first_name} {employee.last_name}")
    print(f"Year to date pay: ${employee.calculate_year_to_date_pay():.2f}")

# Create some employees
hourly_employee = HourlyEmployee(1, "John", "Doe", 100, 10)
salaried_employee = SalariedEmployee(2, "Jane", "Doe", 50000, 26, 2)

# We can plug in either of our employees because they inherit from Employee
summarize_employee(hourly_employee)
summarize_employee(salaried_employee)
```

## Interfaces

An **interface** is a _contract_ that specifies the methods that a class must implement.

**Use Case:** When you want to ensure that a class has certain properties or methods, but you don't care about the implementation.

Python does not have a built-in interface type, but we can use abstract base classes to create interfaces. Below is an example in TypeScript.

```typescript
/* ************************************************************
 * INTERFACES
 ************************************************************ */
// There is no implementation in an interface, only method signatures.
interface PaymentProcessor {
  // Property
  paymentMethod: string;
  // Method signature
  processPayment(amount: number): void;
}

/* ************************************************************
 * CLASSES
 ************************************************************ */
// This class implements the PaymentProcessor interface, so it needs to have a processPayment method.
class CreditCardPayment implements PaymentProcessor {
  // Interface property
  paymentMethod: string;

  constructor(private ownerName: string, private cardNumber: string) {
    this.paymentMethod = "Credit Card";
  }

  // Interface method
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via Credit Card.`);
  }

  // Additional methods - not part of interface; shown here to illustrate that a class can have
  // more than just the interface methods
  validateCard(): boolean {
    console.log("Validating card...");
    return true;
  }
}

// This class implements the PaymentProcessor interface, so it needs to have a processPayment method.
class PayPalPayment implements PaymentProcessor {
  // Interface property
  paymentMethod: string;

  constructor(private email: string) {
    this.paymentMethod = "PayPal";
  }

  // Interface method
  processPayment(amount: number): void {
    console.log(`Processing ${amount} via PayPal for ${this.email}.`);
  }

  // Additional methods - not part of interface; shown here to illustrate that a class can have
  // more than just the interface methods
  validateEmail(): boolean {
    console.log("Validating email...");
    return true;
  }
}

/* ************************************************************
 * PROGRAM LOGIC
 ************************************************************ */
// This function doesn't care what class is passed in, as long as that class implements the
// PaymentProcessor interface. This guarantees that the class has a processPayment method.
function initiatePayment(paymentMethod: PaymentProcessor, amount: number) {
  console.log("Payment started for " + paymentMethod.paymentMethod + ".");

  // Use the processPayment method from the interface.
  // We don't need to know which class was passed in.
  paymentMethod.processPayment(amount);

  // Do other stuff...
  console.log("Payment complete.");
}

// Create instances of payment methods
let ccPayment = new CreditCardPayment("John Doe", "1234567890123456");
let ppPayment = new PayPalPayment("john@example.com");

// Process payments
initiatePayment(ccPayment, 100);
initiatePayment(ppPayment, 200);
```
