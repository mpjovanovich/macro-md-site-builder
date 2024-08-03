---
title: File Parsing
course: SDEV140
---

- [File Parsing](#file-parsing)
  - [Validating Data](#validating-data)
  - [Cleaning Data](#cleaning-data)
  - [Example: Manually Parsing a CSV File](#example-manually-parsing-a-csv-file)
    - [Scenario](#scenario)
    - [Useful Functions](#useful-functions)
  - [Third Party Libraries](#third-party-libraries)

# File Parsing

**File parsing** is the process of extracting and transforming data from a file into a usable format.

We should not trust data in a file to conform to our expectations.

## Validating Data

**Data validation** is the process of ensuring that data is correct and useful.

- Check for empty lines
- Check for missing fields
- Check data types
- Check data ranges
- Check for invalid characters
- Check for bad data formats

## Cleaning Data

Data should be validated and cleaned.

- **Trim** / **strip** whitespace
  - Remove tabs, spaces, and newlines from the beginning and end of a string
  - These terms are used interchangeably depending on the programming language
- **Normalize** / **standardize** data
  - Convert data to a consistent format
  - For example,
    - Convert all text to lowercase for case-insensitive comparisons
    - Convert dates to a consistent format
    - ...
- Remove **duplicates**

## Example: Manually Parsing a CSV File

Suppose we have a CSV file with the following data:

### Scenario

Suppose we have a CSV file with the following data:

```csv
Name,Email,Phone
Alice,alice@mail.ez,555-555-1234
Bob,bob@mail,555-555-5678
Alice,alice@mail.ez,555-555-1234
Jane, jane@mail.ez,555-555-9012
Tom,tom@mail.ez,

Zane,zane@mail.ez,555-3456
```

What are some potential issues with this data?

### Useful Functions

| Function     | Description                                              |
| ------------ | -------------------------------------------------------- |
| `strip()`    | Remove whitespace from the beginning and end of a string |
| `split()`    | Split a string into a list of strings using a delimiter  |
| `len()`      | Get the length of a string or list                       |
| `contains()` | Check if a string contains a substring                   |

## Third Party Libraries

Many programming languages have third-party libraries that can help with file parsing.

- Python: `csv`, `pandas`, `openpyxl`, `xlrd`...

No need to reinvent the wheel. Use these libraries when appropriate.
