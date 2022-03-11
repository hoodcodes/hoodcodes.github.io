[Home](../)

# Design Patterns Reference

- [Other Principles](./principles.md)
- [Model-View Patterns](./modelviewpatterns.md)

### Reference Links

- [Design Patterns(Wikipedia)](https://en.wikipedia.org/wiki/Design_Patterns)
- [YouTube 13min Composition over Inheritance](https://www.youtube.com/watch?v=pQm-BqK2fhc)

### Overview

1. Creational
2. Structural
3. Behavioral

### Creational

- Abstract Factory Pattern: Create instances of classes belonging to different families
- Builder Pattern: Separate representation and object construction. For when you want to control creation.
  - Example: When you want to have a unique id attached at creation time.
  - used heavily in Asp.Net Core in the startup.cs file
  - Can use it in testing. specifically for building test data.
  - similar to the Factory Pattern but the interface is much more flexible.
  - utilizes chaining.
- Factory Method Pattern: Create instances of derived classes
- Prototype Pattern: Clone or copy initialized instances
- Singleton Pattern: Class with only one single possible instance
  - Example: Enforcing a single Database connection

### Structural

- Adapter Pattern: Match interfaces of classes with different interfaces
- Bridge Pattern:: Separate implementation and object interfaces
  - Example: Different database implementations
- Composite: Simple and composite objects tree
- Decorator: Dynamically add responsibilities to objects
- Facade: Class that represents subclasses and subsystems
  - Example: Expose a small set of functionality, keeping it simple.
- Flyweight: Minimize memory usage by sharing as much data as possible with similar objects
- Proxy: Object that represents another object

### Behavioral

- Chain of Responsibility: Pass requests between command and processing objects within a chain of objects
- Command: Encapsulate a method call as an object containing all necessary information
- Interpreter: Include language elements and evaluate sentences in a given language
- Iterator: Give sequential access to elements in a collection
- Mediator: Encapsulates and simplifies communication between objects
- Memento: Undo modifications and restore an object to its initial state
- Observer: Notify dependent objects of state changes
- State: Change object behavior depending on its state
- Strategy: Encapsulate algorithms within a class and make them interchangeable

  - Example: Notification strategy
  - The Strategy Pattern encapsulates a family of algorithms (behaviors), enabling one to be selected at runtime.
  - Strategy is not a magic anti-switch solution. What it does do is modularize your code. You no longer have business logic isolated. You have options for how you create your concrete classes (see Factory Patterns for example). Your infrastructure code is clean
  - Examples of Strategies in action:

    - Extract content from various types of documents(pdf, docx, txt, image)
    - Delete duplicate files between 2 directories (various exclusions as different strategies)
    - Validation of incoming data
    - Billing Strategies for a bar that serves during and outside of a Happy Hour
    - Drawing different types of shapes (circle, square…)
    - Sorting algorithms (quick sort, bubble sort…)
    - Return text in a different language (hello world English, Spanish, French…)
    - Compression algorithms for files

- Template Method: Define an algorithm skeleton and delegate algorithm steps to subclasses so that they may be overridden
- Visitor: Add new operations to classes without modifying them

### Other Patterns

The **Repository Pattern** as well as the **Unit of Work Pattern** - allows to create an abstraction layer between the data access layer and the business logic layer of an application

**Repository** - where we are able to create the data access logic in a separate class. It has the responsibility of persisting the application’s business model.

**Unit of Work** - handles the transactions during data manipulation using the Repository Pattern. Unit of work is referred to as a single transaction that involves multiple operations.
