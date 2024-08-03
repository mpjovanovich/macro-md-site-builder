---
title: Basic State Management
course: SDEV264
---

- [Basic State Management](#basic-state-management)
  - [Data Binding](#data-binding)
  - [One-way Data Binding](#one-way-data-binding)
  - [Two-way Data Binding](#two-way-data-binding)
  - [State Hooks](#state-hooks)

# Basic State Management

**State** is the set of data that describes the application at a point in time; like a snapshot.

Examples of state:

- Current text in a text input
- Current user that is logged in
- Validity of a form field (maybe show a red border if invalid)
- Whether a modal window is open or closed

## Data Binding

**Data binding** is the process of connecting data to a view.

## One-way Data Binding

- The default behavior in React
- Data flows from parent to child.
- Child can read data, but not change (mutate) it.

Example:

```jsx
// Imports not shown

// The App component is the parent.
// The TextInput component is the child.
// TextInput cannot change the value of the text variable.
const App = () => {
    let text = 'Hey.'
    <TextInput value={text} />
}
```

## Two-way Data Binding

- Developer must implement
- Data flows in both directions: parent to child and child to parent
- Parent and child can change data

## State Hooks

**State hooks** are used to create stateful components in React.

- Imported from the `react` library
- `useState` function returns an array with two elements:
  - A variable to hold the state
  - A function to update the state (a setter function)

```jsx
// Other imports not shown
import { useState } from "react";

const App = () => {
  // By convention we cell the setter "set[VariableName]"
  const [text, setText] = useState("Hey.");

  // Will be called when the "ChangeText" event is triggered
  const handleChangeText = (text: string) => {
    setText(text);
  };

  return <TextInput value={text} onChangeText={handleChangeText} />;
};
```

**Other Examples:**

[Snack: Two-way Data Binding](https://snack.expo.dev/@mpjovanovich/two-way-data-binding)

[Snack: State Playground](https://snack.expo.dev/@mpjovanovich/state-playground)
