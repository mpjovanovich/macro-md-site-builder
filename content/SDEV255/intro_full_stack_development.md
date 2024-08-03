---
title: Intro to Full Stack Development
course: SDEV255
---

- [Intro to Full Stack Development](#intro-to-full-stack-development)
  - [The Client-Server Model](#the-client-server-model)
  - [Request / Response Cycle](#request--response-cycle)
    - [Front-end vs. Back-end](#front-end-vs-back-end)
    - [Hardware Components and Tiered Architectures](#hardware-components-and-tiered-architectures)
    - [Web Design vs. Web Development](#web-design-vs-web-development)
- [Development Environments](#development-environments)
  - [Local Development Environment](#local-development-environment)
- [Technology Stack](#technology-stack)
  - [The XAMPP Stack](#the-xampp-stack)
    - [Web Browser](#web-browser)
    - [JavaScript](#javascript)
    - [Apache](#apache)
    - [PHP](#php)
    - [MariaDB](#mariadb)
    - [SQL](#sql)
    - [Summary of the Stack](#summary-of-the-stack)

# Intro to Full Stack Development

A **web application** is a program that:

- Runs on a web server
- May be accessed through a web browser, mobile app, desktop app
- Can have multiple instances (copies of the app) running at the same time
- May be accessed by multiple users at the same time

## The Client-Server Model

~~fig(20){https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png}

- JavaScript is (clasically) a **client-side** programming language.
- Client side code runs in the browser.
- Does not make a round trip to the server to run code.

### Apache

<figure class="left">
    <span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo476xT8nc-rNy8Ov3FDHElDBcCL5PReEsiEmBPyxEnhJC1ij-kUrvmTmr1KuY_5M324&usqp=CAU" style="">
    </span>
</figure>

- Apache is a **web server**.
- A web server is a program that listens for requests from clients and sends responses.

### PHP

<figure class="left">
    <span>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png" style="width: 30%;">
    </span>
</figure>

PHP = **PHP: Hypertext Preprocessor**

- PHP is a **server-side** programming language.
- The program that runs PHP is called the **PHP interpreter**.
- The PHP interpreter runs on a web server.

### MariaDB

- MariaDB is a **database server**.
- Just like a web server, but fetches data from DB instead of files.
- Predecessor to MySQL.
  - MySQL is owned by Oracle.
  - MariaDB is open source.

### SQL

SQL = **Structured Query Language**

- SQL is a **language** for interacting with databases.
- SQL is used to create, read, update, and delete data in a database.
- SQL is not a database or a database database server; SQL interacts with a database server.

### Summary of the Stack

XAMPP:

| Component                 | What is it? | Where does it run? | Client or Server? |
| ------------------------- | ----------- | ------------------ | ----------------- |
| Browser                   | A program   | Operating system   | Client            |
| JavaScript                | A language  | Browser            | Client            |
| Apache (web server)       | A program   | Operating system   | Server            |
| PHP Interpreter           | A program   | Web server         | Server            |
| PHP                       | A language  | PHP Interpreter    | Server            |
| MariaDB (database server) | A program   | Operating system   | Server            |
| SQL                       | A language  | Database server    | Server            |

<p class="demo">Review:</p>

- What comprises the "application" the developer writes relative to the stack, vs. what's the infrastructure that's just chosen?
