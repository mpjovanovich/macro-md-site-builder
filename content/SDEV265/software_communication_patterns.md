---
title: Software Communication Patterns
course: SDEV265
---

- [Software Communication Patterns](#software-communication-patterns)
  - [Types of Communication](#types-of-communication)
    - [Inter-Thread Communication (ITC)](#inter-thread-communication-itc)
    - [Inter-Process Communication (IPC)](#inter-process-communication-ipc)
    - [Inter-Service Communication (ISC)](#inter-service-communication-isc)
  - [Communication Patterns](#communication-patterns)
    - [Request-Response](#request-response)
    - [Broadcast](#broadcast)
    - [Publish-Subscribe](#publish-subscribe)
      - [Push](#push)
      - [Pull](#pull)

# Software Communication Patterns

**Software Communication Patterns** are design patterns that describe how software components communicate with each other.

## Types of Communication

### Inter-Thread Communication (ITC)

Usually managed by the operating system.

- **Synchronization**: Ensuring that threads do not interfere with each other.
- **Locks**: Ensuring that only one thread can access a resource at a time.

### Inter-Process Communication (IPC)

May be managed by the OS, middleware, or the application itself.

**Middleware**: Software that connects different software components.

- **Message Passing**: Sending messages between processes.
- **Shared Memory**: Allowing processes to access the same memory.
- **Sockets**: Sending data over a network.
- **Pipes**: Sending data between processes on the same machine.

### Inter-Service Communication (ISC)

Communication between services in a distributed system.

- **RESTful APIs**: Sending data via HTTP requests.
  - Unidirectional: Client sends a request to the server.
- **WebSockets**: Real-time communication between services.
  - Bidirectional: Client and server can send messages to each other.

---

<p class="demo">Demo:</p>

[Chat application with RESTful calls and WebSockets](https://github.com/mpjovanovich/ivy_solutions/blob/main/SDEV264/ClassMessenger/app.html)

**To Test:**

1. Start the server.
2. Expose the server via ngrok.
3. Students download the html file.
4. Students edit file, plugging in ngrok URL their Username.
5. Students open the html file in a browser and chat.

---

## Communication Patterns

### Request-Response

Client sends a request to the server and waits for a response.

- Syncronous communication.
- Foundation of the HTTP protocol.

### Broadcast

Server sends messages to all clients.

- E.g. streaming video, channel driven chat.

### Publish-Subscribe

Event-driven architecture. Clients subscribe to topics and receive messages when they are published.

- E.g. JavaScript event listeners, push notifications.

May be implemented as either:

#### Push

Server pushes messages to clients. Clients actively listen for messages.

_Pros_:

- Real-time communication.
- Less latency.

_Cons_:

- More resources (server must maintain connections).
- More complexity.

#### Pull

Clients pull messages from the server. Periodically check for new messages.

_Pros_:

- Less resources (server only sends messages when requested).
- Simple.

_Cons_:

- More latency (messages not be immediately available)

---

<p class="demo">Demo:</p>

[Calc Service Load Balancing](https://github.com/mpjovanovich/ivy_tech/tree/main/SDEV265_System_Software_Analysis_Project/distributed_demo/scrambler.html)

Client (Web App)

API Gateway (Routes to Services)

Multiple Calc Services

**To Test:**

1. Run API Gateway and single instance of calc service.
2. Expose API endpoint via ngrok.
3. Have students all submit their name at once via html form.
4. Boot up multiple instances of calc service.
5. Restart API Gateway to route to multiple instances.
6. Have students all submit their name at once via html form.
7. Note the source of the response - from different instances of the calc service.

---
