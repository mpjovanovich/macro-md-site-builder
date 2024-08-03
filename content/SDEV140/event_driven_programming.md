---
title: Event Driven Programming
course: SDEV140
---

- [Event Driven Programming](#event-driven-programming)
  - [The Producer Consumer Pattern](#the-producer-consumer-pattern)
  - [Events](#events)
  - [Event Loop](#event-loop)
  - [GUI Development](#gui-development)
  - [JavaScript Examples](#javascript-examples)
  - [Writing an Event Loop in Python](#writing-an-event-loop-in-python)

# Event Driven Programming

## The Producer Consumer Pattern

The **producer-consumer pattern** is used when two parts of a system need to communicate.

They communicate via a **queue** or **buffer**:

~~fig(80){https://iximiuz.com/nodejs-writable-streams-distilled/kdpv.gif}

- **Producer**: Generates data
- **Consumer**: Consumes data

## Events

The **event driven programming** paradigm is based on the producer-consumer pattern.

- **Event**: Something that happens
  - Clicking a button
  - Moving the mouse
  - Pressing a key
  - Loading a page
  - Closing a window
  - etc.
- **Event Queue**: List of events that have happened
  - Events are added to the queue as they happen
  - Events are removed from the queue as they are processed
- **Event Listener**: Function that waits for an event to happen
  - The "glue" between the event and the event handler
  - If we are listening we are **subscribed** to the event
  - If we are not listening we are **unsubscribed** to the event
- **Event Handler**: Function that runs in response to an event
  - Usually a dedicated function in code

## Event Loop

The **event loop** is a loop that runs through the entire lifetime of a program.

The process goes like this:

1. Some event happens and drops an entry into the **event queue**.
2. Event loop checks the event queue and picks off the event.
3. Event loop checks for a registered event handler function.
4. If a handler is found, the handler function is called.
5. Repeat... forever... until the program is closed.

## GUI Development

Event driven programming is a common paradigm in GUI development, where we need to respond to user input.

- **CLI**: Command Line Interface
  - Text entered into a terminal (what we've been doing)
- **GUI**: Graphical User Interface
  - Windows, images, icons, buttons, etc.

## JavaScript Examples

The web browser has an event loop running that listens for events like:

| Event       | Description                          |
| ----------- | ------------------------------------ |
| `click`     | User clicks on an element            |
| `mouseover` | User moves the mouse over an element |
| `mouseout`  | User moves the mouse off an element  |
| `focus`     | User focuses on an element           |
| `keydown`   | User presses a key                   |
| `load`      | Page has finished loading            |
| `close`     | Window is closed                     |

In JavaScript, we can add event listeners to elements in the DOM (Document Object Model) to listen for these events.

_mouseover_

```javascript
// Get the header element for this section
const h2Examples = document.getElementById("javascript-examples");

// When the mouse is over the header, change text to all caps
h2Examples.addEventListener("mouseover", function (e) {
  e.target.innerText = e.target.innerText.toUpperCase();
});

// When the mouse leaves the header, change text to all lowercase
h2Examples.addEventListener("mouseout", function (e) {
  e.target.innerText = "JavaScript Examples";
});
```

_click:_

```javascript
// Get all h2 elements on the page
const h2Elements = document.getElementsByTagName("h2");

// Loop through all h2 elements and add an event listener
for (let i = 0; i < h2Elements.length; i++) {
  h2Elements[i].addEventListener("click", function (e) {
    // e.target is the element that was clicked
    // print the text of the element that was clicked
    alert(e.target.innerText);
  });
}
```

## Writing an Event Loop in Python

We can simulate an event loop in Python using a `while` loop and a list of events. We will:

- Create a dictionary of events and functions to handle those events
- Create a loop that continually listens for events and calls the appropriate event handler
- (Normally this loop would be running in the background for the full time the program is running)

[Python Event Loop](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV140_Intro_Software_Development/python_event_loop_noargs.py)

[Python Event Loop with Arguments](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV140_Intro_Software_Development/python_event_loop_args.py)
