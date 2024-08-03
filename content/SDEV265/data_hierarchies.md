---
title: Data Hierarchies
course: SDEV265
---

- [Data Hierarchies](#data-hierarchies)
  - [Software (Code)](#software-code)
  - [Database](#database)
  - [Data Architectures](#data-architectures)

# Data Hierarchies

Data hierarchies are used to organize data in a structured way. This is useful for understanding how data is related and how it can be accessed.

## Software (Code)

- **Application**
  - **Module**, package, library
    - **Namespace**
      - **Class**
        - **Methods** and **properties**

## Database

- **System**
  - **Database**
    - **Schema**
      - **Table**, relation
        - **Row**, tuple, record
          - **Column**, attribute, field

## Data Architectures

Application architectures vary widely:

- An application may use several databases.
- An application may be broken into services that are dedicated to specific tasks.
- A database may be used by several applications.
- A database may communicate with other databases.
  se.

We will cover more on this later in the cour
