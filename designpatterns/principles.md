[Home](../) > [Design Patterns](./)

# Software Engineering Principles

TODO: expand these notes

### Reference Links

- [MSDN: Object-Oriented Programming](https://docs.microsoft.com/en-us/dotnet/articles/csharp/programming-guide/concepts/object-oriented-programming)

### SOLID

S.O.L.I.D (is an acronym for the first five object-oriented design(OOD) principles by Robert C. Martin, popularly known as Uncle Bob)

- SRP: Single responsibility principle. A class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class)

- O/C: Open/closed principle - “software entities … should be open for extension, but closed for modification.” ... which simply means that a class should be easily extendable without modifying the class itself.

- LSP: Liskov substitution principle. (introduced by Barbara Liskov in a 1987 keynote address) - “objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.” Use of Subclasses should not break things.

  - Liskov's notion of a behavioral subtype defines a notion of substitutability for objects; that is, if S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program (e.g. correctness).

- ISP: Interface segregation principle - “many client-specific interfaces are better than one general-purpose interface.”

- DIP: Dependency inversion principle - one should “depend upon abstractions, [not] concretions.” This principle allows for decoupling

How they are related and complement each other?

- OOD - Object Oriented Design - 4 pillars

  - encapsulation
  - inheritance: The ability to enable objects to share common functionality of the parent object. Inheritance promotes the reuse of existing objects code elements. Conventional use of Inheritance is Class based. The Derived Child Class “Is A” a variation of its Parent Class. In reality, most programming inheritance structures are really a “Behaves Like” relationship more that an “Is A” relationship.

  - interfaces
  - polymorphism: Polymorphism enables an object to perform an operation the way that it wants to. For example, all vehicles have a method for starting their engine, but a car starts differently than a rocket. Both are vehicles, but perform the start action in a different way. A key term associated with Polymorphism is Overloading.

- Dry - Do Not Repeat Yourself
- Kiss - Keep It Simple (1960 Navy principle to avoid unnecessary complexity)
- Yagni - You Ain’t Gonna Need It.
- Better software requirements - get the needed clarity to be successful
- Separation of concerns - keep your applications modular, avoid
- Code reuseability

### Dependency Injection

Types of Dependency Injection: <todo: create examples >

- Constructor
- Interface
- Setter
- Parameter -

What is DI? taking object creation and moving it outside an object and allow the object to focus on what it is supposed to be doing.
