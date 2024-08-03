---
title: UML
course: SDEV120
---

- [Unified Modeling Language (UML)](#unified-modeling-language-uml)
  - [Background](#background)
  - [What is UML?](#what-is-uml)
  - [Do We Really Need to Know All This?](#do-we-really-need-to-know-all-this)
  - [Type of Information in UML](#type-of-information-in-uml)
  - [When to Use UML](#when-to-use-uml)
  - [Diagram Classifications](#diagram-classifications)
    - [Structural Diagrams](#structural-diagrams)
    - [Behavioral Diagrams](#behavioral-diagrams)
    - [Use Case Diagram](#use-case-diagram)
      - [Description](#description)
      - [Key components](#key-components)
    - [Class Diagram](#class-diagram)
      - [Description](#description-1)
      - [Key components](#key-components-1)
    - [Sequence Diagram](#sequence-diagram)
      - [Description](#description-2)
      - [Key components](#key-components-2)
    - [State Diagram](#state-diagram)
      - [Description](#description-3)
      - [Key components](#key-components-3)
    - [Activity Diagram](#activity-diagram)
      - [Description](#description-4)
      - [Key components](#key-components-4)
    - [Hybrids](#hybrids)
      - [Swimlane Diagram](#swimlane-diagram)
      - [Custom](#custom)

~~fig(80){images/uml_guys.png}

# Unified Modeling Language (UML)

Reference: [UML Diagrams](https://drawio-app.com/blog/uml-diagrams)

## Background

Prior to UML...

- Different notations and diagrams
- Everyone confused

Now, with UML...

- Created by Grady Booch, Ivar Jacobson, and James Rumbaugh in 1997

## What is UML?

_Not_ a programming language

- Set of diagrams and notations used to model software systems.
- Universal, culture invariant, and so much fun!

**_Hooray standards!_**

## Do We Really Need to Know All This?

Per [IBM: An introduction to the Unified Modeling Language](https://developer.ibm.com/articles/an-introduction-to-uml/):

> The most useful, standard UML diagrams are: use-case diagram, class diagram, sequence diagram, statechart diagram, activity diagram, component diagram, and deployment diagram.

Different domains use some more than others.

## Type of Information in UML

Shows system defined at different scopes in varying levels of detail.

- Roles of people
- Hardware components
- Software components
- Functionality
- Data
- Response to events
- etc.

## When to Use UML

- Planning new systems / functionality
- Documenting existing systems
- Training new team members
- Communicating with stakeholders

## Diagram Classifications

~~fig(70){https://drawio-app.com/wp-content/uploads/2018/10/UMLdiagrams.png}

#### Description

- Represent functionality, actors, and how these relate to each other in the context of a system.
- "High level" scope; not much detail.
- Useful for planning new functionality.
- Useful for communicating with stakeholders.

#### Key components

- Actors
- Use cases
- Relationships between actors and use cases
  - \*Optionally, relationships between use cases (includes / extends)
- System boundaries

### Class Diagram

~~fig(70){https://drawio-app.com/wp-content/uploads/2018/01/Class-Diagram-Habit-Tracker-app.png}

#### Description

- Shows how entities (classes) in a system relate to each other.
- Classes contain self-describing attributes and methods.
- Connectors between classes show **cardinality**; how many of one class can be related to another class.
  - https://www.uml-diagrams.org/multiplicity.html
  - Also... Crow's feet notation.

| Multiplicity | Option | Cardinality                             |
| :----------- | :----- | :-------------------------------------- |
| 0..0         | 0      | Collection must be empty                |
| 0..1         |        | No instances or one instance            |
| 1..1         | 1      | Exactly one instance                    |
| 0..\*        | \*     | Zero or more instances                  |
| 1..\*        |        | At least one instance                   |
| 5..5         | 5      | Exactly 5 instances                     |
| m..n         |        | At least m but no more than n instances |

- Entities can be concrete or abstract. From above:
  - Concrete examples:
    - Person
    - ??? (what else?)
  - Abstract examples:
    - Comment
    - ??? (what else?)

#### Key components

- Classes
- Attributes
- Methods
- Relationships between classes (cardinality)
  <br>
  <span class="demo">walkthrough:</span> For dog walking service, how would I show…
- Dog walker and client (person)?
- Dogs that he/she is scheduled to walk?
- Relationships?
- Any other classes needed?

### Sequence Diagram

~~fig(70){https://drawio-app.com/wp-content/uploads/2018/02/drawio-sequence-checkin.png}

#### Description

- Shows interactions between objects in a system...
  - over time
  - for a specific use case

What has to happen before another thing happens? Who is involved?

#### Key components

- Actors
- Lifelines
- Messages
- Activation boxes

### State Diagram

~~fig(70){https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Turnstile_state_machine_colored.svg/1185px-Turnstile_state_machine_colored.svg.png}

#### Description

Shows states of a system and how it transitions between them.

#### Key components

- States
- Transitions

<p class="demo">Walkthrough:</p>

State diagram for a light with two switches - one at each end of a hallway.

- Assume light is off with both switches in the off position (initial state).

### Activity Diagram

~~fig(100){https://cdn-images.visual-paradigm.com/guide/uml/what-is-activity-diagram/04-activity-diagram-example-process-order.png}

#### Description

- Models the flow of control from one activity to another.
- Shows logic without implementation detail.

#### Key components

- Activities
- Transitions
- Branching / merging
- Forking / joining

### Hybrids

#### Swimlane Diagram

~~fig(60){https://img.officetimeline.com/website/Content/website/swimlane-diagram/swimlane-process-map-example.svg}

- Like an activity diagram... with swimlanes.
- Swimlanes show boundaries between actors / roles in system.

#### Custom

It’s useful to have a baseline knowledge of UML if you work with software at all. Even rough sketches can save valuable communication time.

Mix and match to suit your needs.
