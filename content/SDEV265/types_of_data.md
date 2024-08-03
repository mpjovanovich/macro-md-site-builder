---
title: Types of Data
course: SDEV265
---

- [Types of Data](#types-of-data)
  - [Structured Data](#structured-data)
    - [Advantages:](#advantages)
    - [Disdvantages:](#disdvantages)
  - [Unstructured Data](#unstructured-data)
    - [Advantages:](#advantages-1)
    - [Disadvantages:](#disadvantages)
  - [Semi-Structured Data](#semi-structured-data)
    - [Advantages:](#advantages-2)
    - [Disadvantages:](#disadvantages-1)
- [Data Formats](#data-formats)
  - [Delimited](#delimited)
  - [XML (eXtensible Markup Language)](#xml-extensible-markup-language)
  - [JSON (JavaScript Object Notation)](#json-javascript-object-notation)

## Types of Data

### Structured Data

**Structured data** is data that conforms to a standard format.

E.g.:

- Relations (tables)
- XML
- JSON
- CSV

Typically stored in a **relational database**.

#### Advantages:

- Works well with SQL
- Clear schema; expectations are known
- Integrity constraints can be enforced (prevent invalid data from entering the system)
- Can be optimized for high performance
- Meets transactional requirements well

#### Disdvantages:

- Not flexible
- Not scalable
- Not suitable for all types of data

### Unstructured Data

**Unstructured data** is data that does not conform to a standard format.

E.g.:

- Text files
- Images
- Videos
- Audio

Typically stored in a **NoSQL database**; designed to handle unstructured data.

#### Advantages:

- Flexible. Typically this is raw data that can be transformed into structured data if needed.

#### Disadvantages:

- Not easily searchable.

### Semi-Structured Data

**Semi-structured data** is data that has some structure, but there is no formal schema.

- E.g.:
  - \*XML
  - \*JSON
  - \*CSV

\*When no schema is enforced

Can be stored in a **NoSQL database** or a **relational database**.

#### Advantages:

- More flexible than structured data
- Can be queried
- Can be indexed

#### Disadvantages:

- "Jack of all trades, master of none" plight.

## Data Formats

### Delimited

Fields are separated by a **delimiter** character.

- CSV (Comma Separated Values)
- TSV (Tab Separated Values)
- Pipe delimited
- ~ delimited
- ... you get the idea

E.g.:

```
id|first_name|last_name|email
32|mike|jovanovich|mjovanovich@ivytech.edu
```

Often used for data exchange. Example:

[ERCOT EDI 820: Data Exchange Format for Texas Utility Payments](https://www.ercot.com/files/docs/2017/04/11/2017_I145-820_02_Examples_V40_W_bai_file_format.doc)

### XML (eXtensible Markup Language)

- Semi-structured.
- Hierarchical - can have child entities and sets.
- Self documenting.
- Structure can be enforced (via XSD).
- Made up of nodes and attributes.
- May have namespace qualifiers - provide some level of validation (confirm data integrity).
- Used to be the main technology for web services. Not anymore.
- Is an aging technology.

E.g.:

```xml
<person>
  <id>32</id>
  <first_name>mike</first_name>
  <last_name>jovanovich</last_name>
  <email>mjovanovich@ivytech.edu</email>
</person>
```

### JSON (JavaScript Object Notation)

\*JavaScript is in the name, but it is now a ubiquitous data format.

- Semi-structured.
- Hierarchical - can have child entities and sets.
- Self documenting.
- Primary technology underlying modern web services (APIs)

E.g.:

```json
{
  "id": 32,
  "first_name": "mike",
  "last_name": "jovanovich",
  "email": "mjovanovich@ivytech.edu"
}
```
