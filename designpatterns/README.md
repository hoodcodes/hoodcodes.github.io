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
- Template Method: Define an algorithm skeleton and delegate algorithm steps to subclasses so that they may be overridden
- Visitor: Add new operations to classes without modifying them
