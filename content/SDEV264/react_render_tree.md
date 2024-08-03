---
title: The Render Tree
course: SDEV264
---

# The Render Tree

- [The Render Tree](#the-render-tree)
  - [Updating the Render Tree](#updating-the-render-tree)
  - [Optimized Rendering](#optimized-rendering)
  - [State Hoisting](#state-hoisting)

Recall that in HTML we have a Document Object Model (DOM) tree.

- Hierarchical structure of elements
- Elements are **nodes** in the tree.

```jsx
<App>
    <InspirationGenerator>
        <FancyText />
        <Copyright />
    </InspirationGenerator>
    <FancyText />
<App>
```

The jsx above would render a tree like this:

~~fig(75){https://react.dev/_next/image?url=%2Fimages%2Fdocs%2Fdiagrams%2Frender_tree.dark.png&w=640&q=75}

React native uses the operating system's native rendering engine to render the user interface.

## Updating the Render Tree

- Render tree does not update automatically (as we saw with text input example).
- Changing **state** in a React component triggers a re-render of the component.
  - Updating a text input
  - Changing output text
  - Hiding / showing elements
  - Changing styles

## Optimized Rendering

- React Native will attempt to optimize rendering.
- Only re-render:
  - Components with changed state
  - Child components of changed components

[Snack: Render Tree Optimization](https://snack.expo.dev/@mpjovanovich/rendertreeoptimization)

## State Hoisting

Sometimes we need to share state between components.

**Lifting state up** or **state hoisting** is the process of moving state from a child component to a parent component.

When to hoist state:

- When a parent component needs to know about state changes in a child component, e.g.
- When a child component needs to know about state changes in a parent component
- When child components need to share state

[Snack: State Hoisting](https://snack.expo.dev/@mpjovanovich/statehoisting)
