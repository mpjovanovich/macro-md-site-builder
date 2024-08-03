---
title: File I/O
course: SDEV140
---

- [File I/O](#file-io)
  - [What is a file?](#what-is-a-file)
  - [Loading a File](#loading-a-file)
  - [Saving a File](#saving-a-file)
  - [File Access Modes](#file-access-modes)
  - [Checking for file Existence](#checking-for-file-existence)
  - [File I/O Functions in Python](#file-io-functions-in-python)
  - [Context Managers](#context-managers)
  - [Reading: Line by Line vs Entire File](#reading-line-by-line-vs-entire-file)
    - [Whole File](#whole-file)
    - [Line by Line](#line-by-line)
  - [Writing](#writing)

# File I/O

**I/O** = Input/Output

**File I/O** = reading from and writing to files.

## What is a file?

A file is a collection of data. It can be stored:

- On **disk** (e.g., hard drive, USB drive)
  - Permanent storage
  - Usually only updated periodically or at the end of a transaction
- In **memory** (e.g., RAM)
  - Temporary storage
  - Updated frequently, whenever the data in the file changes

## Loading a File

**Loading** a file means copying the file's contents from disk to memory.

- Files cannot be manipulated directly on disk; must be loaded first.

## Saving a File

**Saving** a file means copying the file's contents from memory to disk.

- First update the contents in memory, then save the updated contents to disk.

## File Access Modes

When opening a file, you must specify the **access mode**:

| Mode | Description | If file doesn't exist | If file exists            |
| ---- | ----------- | --------------------- | ------------------------- |
| `r`  | Read-only   | Raises an error       | Opens file for read       |
| `w`  | Write-only  | Creates a new file    | Overwrites existing file  |
| `a`  | Append      | Creates a new file    | Appends to existing file  |
| `r+` | Read/write  | Raises an error       | Opens file for read/write |
| `w+` | Read/write  | Creates a new file    | Overwrites existing file  |
| `a+` | Read/write  | Creates a new file    | Appends to existing file  |

## Checking for file Existence

We can also check if a file exists using the `os` module:

```python
import os

some_file = "file.txt"

if os.path.exists(some_file):
    print("File exists")
else:
    print("File does not exist")
```

## File I/O Functions in Python

Several Python functions useful for file I/O:

| Function        | Description                               |
| --------------- | ----------------------------------------- |
| \*`open()`      | Opens a file for reading or writing       |
| \*`read()`      | Reads the entire file into a string       |
| `readline()`    | Reads a single line from the file         |
| \*`readlines()` | Reads all lines from the file into a list |
| \*`write()`     | Writes a string to the file               |
| `writelines()`  | Writes a list of strings to the file      |
| `close()`       | Closes the file                           |

\*In my experience these are the most commonly used

## Context Managers

A **context manager** is a construct that helps to properly allocate and release resources properly.

Used when you need to "check out" a resource, use it, then release it.

- Not specific to Python; many languages have similar constructs.
- Not specific to file I/O, also:
  - Network connections
  - Database connections
  - Threads
  - ...
- Keyword is usually `with`.

```python
with open("file.txt", "r") as file:
    data = file.read()
    print(data)
```

This is equivalent to:

```python
file = open("file.txt", "r")
data = file.read()
print(data)
file.close()
```

Context managers are preferred because they will automatically clean up if:

- An exception occurs
- The program closes unexpectedly

## Reading: Line by Line vs Entire File

When reading a file, you can read the entire file at once or read it line by line.

### Whole File

File contents will be copied to memory all at once.

Use only when you need to whole file in memory. E.g.:

- Searching and replacing text
- Counting words
- ...

Not practical for very large files; too much memory usage.

### Line by Line

Only one line is copied to memory at a given time.

Prefer this method unless otherwise needed or very small file.

E.g., reading a log file line by line.

```python
## File will be closed automatically when the block is exited,
## So no need to call close.
with open("file.txt", "r") as file:
    ## Pythonese way of reading a file line by line;
    ## No need to call readline() in a loop.
    for line in file:
        print(line)
```

## Writing

Writing to a file is similar to reading:

```python
with open("file.txt", "w") as file:
    # Note the newline character!
    file.write("First line\n")
    file.write("Secondline")
```

- Don't forget the newline character (`\n`) at the end of a write() call if you want a new line.
