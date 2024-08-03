---
title: Software Architectural Patterns
course: SDEV265
---

- [Software Architectural Patterns](#software-architectural-patterns)
  - [Layered Architectures](#layered-architectures)
    - [Monolithic Architecture](#monolithic-architecture)
    - [Multi-tier Architecture](#multi-tier-architecture)
      - [Three-tier Architecture Example](#three-tier-architecture-example)
  - [Service Architectures](#service-architectures)
    - [Service-oriented Architecture (SOA)](#service-oriented-architecture-soa)
    - [Microservices](#microservices)
    - [Summary](#summary)

# Software Architectural Patterns

## Layered Architectures

**Layered architecture**: Layers of modules that communicate with adjacent layers. Each layer may be composed of multiple modules.

### Monolithic Architecture

**Monolithic architecture**: Single-tiered software application in which the user interface and data access code are combined into a single program from a single platform.

Best used when:

- Application is small
- Application is simple
- Application is not expected to grow

### Multi-tier Architecture

**n-tier architecture**: A specific type of layered architecture with n layers. Each layer communicates with adjacent layers.

#### Three-tier Architecture Example

~~fig(100){https://miro.medium.com/v2/resize:fit:640/format:webp/1*4jyJN40XarxOInJvA9zEVw.jpeg}

- Presentation layer
  - User interface
  - "View" logic
  - Collect user input and display output
- Business logic layer
  - Application logic
- Data access layer
  - Database access

_Scenario:_

If I have a web form to collect user account creation data, round trip through layers might be:

- Presentation layer
  - HTML form
- Business logic layer
  - Validate fields
  - Hash password
  - Create instance of user class
- Data access layer
  - Establish connection to database
  - Insert user into database
- Business logic layer
  - Send confirmation email
  - Redirect to confirmation page
- Presentation layer
  - Confirmation page

No - too complex for this course

## Service Architectures

\*Paradigms below are not mutually exclusive from those above.

\*Advanced topic - We will not go into detail, just cover briefly.

### Service-oriented Architecture (SOA)

**Service-oriented architecture (SOA)**: Design pattern where services are provided to other components via a communication protocol over a network.

Allows services to communicate with each other across different platforms and languages by standardizing data exchange protocols and interfaces.

Each service is a self-contained unit, but may perform multiple functions.

Services are larger in scope (relative to microservices), e.g.:

### Microservices

**Microservices**: Architectural style that structures an application as a collection of small, autonomous services.

Each service represents a single business function, and behave like a "mini-application" with its own data storage, processing, and communication.

### Summary

Difference in focus:

| Microservices                                        | SOA                                 |
| ---------------------------------------------------- | ----------------------------------- |
| Small, autonomous services                           | Larger services                     |
| Decoupled from implementation details in rest of app | More tightly coupled (relatively)   |
| Independent                                          | Interdependent (relatively)         |
| Single business function                             | Multiple related business functions |
