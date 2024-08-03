---
title: Distributed Systems
course: SDEV265
---

- [Distributed Systems](#distributed-systems)
  - [Physical vs Logical Separation](#physical-vs-logical-separation)
  - [Advantages of Distributed Systems](#advantages-of-distributed-systems)
  - [Challenges of Distributed Systems](#challenges-of-distributed-systems)
  - [Case Study: Building a Distributed Application](#case-study-building-a-distributed-application)
  - [Case Study: Hadoop](#case-study-hadoop)

# Distributed Systems

A **distributed system** is a collection of independent computers that appear to the user as a single coherent system.

**Node**: A single computer in a distributed system.

Components of a distributed system may include:

- Web browsers
- Desktop applications
- Load balancers
- Firewalls
- File servers
- Web application servers (basic application logic)
- Specialzed services
- Databases
- Storage area networks / network-attached storage
- Backup systems
- Monitoring systems
- Security systems
- ...

## Physical vs Logical Separation

**Physical Components**: The actual hardware that makes up the system.

**Logical Components**: The software that runs on the hardware.

There is not a one-to-one relationship between physical and logical components.

Single node may be running:

- One or more web servers
- One or more services
- One or more database instances
- ...

What might be seen as the "web application" to the user is actually a collection of services running on different nodes.

## Advantages of Distributed Systems

- **Scalability**
  - Can add/remove nodes to upscale or downscale as needed.
- **Performance**
  - Load Balancing: Distributing requests across multiple nodes for higher throughput.
  - Caching: Storing frequently accessed data in memory for faster access.
  - Parallel Processing: Not limited to the resources of a single node.
  - Geographic Distribution: Can have nodes in different locations. Closer to a node = faster response time.
- **Cost-Effectiveness**
  - Can rent or purchase nodes as needed.
  - Not locked into a single vendor.
- **Security**
  - Can isolate sensitive data or services.
- **Fault Tolerance**
  - Redundancy: Can have multiple copies of data or services.
  - If one node fails, the system can continue to operate.
  - If one location fails, the system can continue to operate.

## Challenges of Distributed Systems

- **Latency**
  - The time it takes for a message to travel from one node to another.
  - Network latency can be unpredictable.
- **Reliability**
  - The ability of a system to continue operating in the face of failure.
  - Hardware failure, service crashes, network outages, etc.
- **Consistency**
  - The ability of a system to deliver messages in the correct order.
  - Multiple nodes may have different versions of shared data.
    - What happens if there is a database replication failure? (stale data)
    - What happens if two nodes try to update the same data at the same time? (race condition)
- **Security**
  - More attack vectors.
- **Transaction Management**
  - How to ensure that a transaction is completed successfully across multiple nodes, e.g.
    - Transfer money from one account to another.
    - Update a user's profile.
    - ...

## Case Study: Building a Distributed Application

[How to Distrubute Our System?](https://github.com/mpjovanovich/ivy_tech/blob/main/SDEV265_System_Software_Analysis_Project/distributed_architecture_exercise.drawio)

## Case Study: Hadoop

...
