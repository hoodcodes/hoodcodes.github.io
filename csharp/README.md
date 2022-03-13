[Home](../) > [Languages](../languages/)

<p align="center">
  <img src="assets/logo.png" alt="c#" width="100"/>
</p>

# C Sharp Reference

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Versions

- [Version 1 (.Net Framework 1.0)](version1.md)
- [Version 2 (.Net Framework 2.0)](version2.md)
- [Version 3 (.Net Framework 3.0/3.5)](version3.md)
- [Version 4 (.Net Framework 4)](version4.md)
- [Version 5 (.Net Framework 4.5)](version5.md)
- [Version 6 (.Net Framework 4.6)](version6.md)
- [Version 7 (.Net Core 2)](version7.md)
- [Version 8 (.Net Core 3)](version8.md)
- [Version 9 (.Net 5)](version9.md)
- [Version 10 (.Net 6)](version10.md)

### The .Net Framework Evolution

- .NET Framework
- .NET Core
- .NET Standard
- .NET

### C# Fundamentals

- CLR Common Language Runtime: The CLR manages your application - memory management - operating system and hardware independence - Language independence
- Takes the "intermediate instructions" (MSIL) inside an executable, after it has been compiled, and transforms them into native instructions that work on the real hardware where the program is running.
- FCL Framework Class Library A library of functionality to build applications
- It is the FCL that you will interact with on a day to day basis, because it's the FCL that contains reusable software that you use to build applications.
  - BCL Base Class Library A subset of the FCL (contained in the FCL).
- csc.exe The C# compiler. Takes your C# code and transforms it into MSIL (MS Intermediate Language), aka an assembly.
- MSIL defines instructions for the CLR. Its then the CLR's job to transform those instructions into instructions that the CPU will understand.
- C# is strongly typed and case sensitive
- Class Is a blueprint for creating objects Can also be used to type a variable - A Variable can refer to any object of the same type
- Classes are references types Variables hold a pointer value
- Classes have access modifiers as well: KEYWORD VISIBILITY Public Everywhere Private Only in the same class Internal Only in the same assembly (default)
- Constructor A special method used when we create an instance of the class using the "new" keyword.
- Encapsulation Enclosing or hiding details
- You typically want to encapsulate your data inside of an object (class), or in other words keep it hidden/non-accessible. Encapsulation can also be the concept of "surrounding" something... putting information together, into a single context and one place.
- Access Modifiers
  - Public can be accessed outside of class
  - Private only accessible from code inside the same class
- If an access modifier is not explicity specified, the default is Private.
- Statics Use static members of a class without creating an instance.
- Static is a keyword that you can apply to a method or field.
- Assemblies Are the files the C# compiler creates for us, and inside of an assembly is the code we've written for our application.
- Assemblies are .exe or .dll files
  - Contain metadata about all types inside

EXE (executable)
Is a file that you can execute directly by double-clicking on the file in Windows, or using the name of the file from the command line.

DLL (Dynamic Link Library)
Unlike an exe, dlls can not be executed directly but another program can load a dll and use the code inside. One reason to put code inside of a DLL is when you are writing code that you want to re-use in multiple applications. A good example of re-use is the .Net Framework itself.

Global Assembly Cache (GAC) A central location to store assemblies for a machine
Reference Type Variables store a reference to an object

### Using `dotnet new` custom templates

At the CLI, run the following to see the list of custom templates available with the `dotnet new` command:

```sh
dotnet new --list
```

Interesting side note: You can create your own templates as well.

#### Reference Links for dotnet custom templates

- [.Net Default Templates](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new-sdk-templates)
- [Custom Templates for dotnet new](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates)
- [Create a WedApi with dotnet custom template](https://dotnettutorials.net/lesson/creating-asp-net-core-web-api-project-using-net-core-cli/)

You can create practically any type of project using the default templates for .Net.

### Creating a WebApi in C# Steps

1. run `dotnet new webapi <projectName>`
2. run `cd <projectName>`
3. Add a gitignore by running `dotnet new gitignore`
4. run `dotnet build`
5. run `dotnet run`
6. In a browser, navigate to the URL suggested and append `/swagger` to the end. Example:
   1. ` https://localhost:7212/swagger`
   2. Click `Try it out` button. Then copy the `Request URL` and paste it into Postman on a new GET request and click `Send`.
   3. You should receive a `200` Response with JSON data in the Body

run `Ctrl+C` in the Terminal to shut down the webapi.

### Reference Links

- [ZetCode - Jan Bodnar - fantastic reference site (with tutorials as well) for C#, Go, Java, JavaScript, Python, heck all the things...](https://zetcode.com/)
- [Awesome C#](https://github.com/danperor/awesome-csharp)
- [eShop on Containers Github Repo](https://github.com/dotnet-architecture/eShopOnContainers) /Excellent. A Cross-platform .NET sample microservices and container based application that runs on Linux Windows and macOS. Powered by .NET 6, Docker Containers and Azure Kubernetes Services. Supports Visual Studio, VS for Mac and CLI based environments with Docker CLI, dotnet CLI, VS Code or any other code editor.

### Random Nuggets

- [Proper way to re-throw exception](https://stackoverflow.com/questions/178456/what-is-the-proper-way-to-rethrow-an-exception-in-c)
- [C# Jagged Arrays](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/jagged-arrays)
- [Knowing When to Use Override and New Keywords (C# Programming Guide) | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/knowing-when-to-use-override-and-new-keywords)
- Difference between WCF vs Web API
  - **WCF**
    - uses XML
    - enables use of other protocols for higher performant processes (named pipes, TCP, UDP).
    - one way messaging, msg queues, duplex communications
  - **Web API**
    - uses HTTP
    - provides all HTTP features (request/response headers, caching, versioning, content formats, URI’s)
    - great for providing services to broad range of clients - mobile, tablet, browsers,
- Using Directive vs using() statement: <TODO>
- Boxing vs UnBoxing: <TODO>
- Yield - 2 forms of use:
  - `yield return` - used to return the current iteration of a foreach statement or linq query. the position is retained for the next time the iterator function is called.
  - `yield break` - used to end the iteration. like when there are no more values in an enumeration.
- Structs
  - structs are value types. they cannot be inherited from for that reason, as all value types are sealed.
  - structs can implement interfaces.
- Interfaces
  - Interfaces contain methods, properties, events, indexers. Members are automatically public and can NOT contain access modifiers. Members can NOT be static.
  - They do NOT contain: constants, fields, operators, instance constructors, finalizers or types.
  - When a class implements an interface, the class or struct must implement all members.

### Popular .Net Interfaces

- ISerialize
- IDisposable - for resources requiring cleanup, used with using
- IEnumerable<T> and IEnumerable - for use with foreach and LINQ
- IComparable<T> and ICompare<T> - for generalized sorting
- IEquatable<T> and IEqualityComparer<T> - for generalized equality
- ICollection IList<T> - mutable collections
- IDictionary<T,K> - lookup collections
- IQueryable<T> - lets you execute requests against queriable data sources

### Common Collection Types and FYIs

http://geekswithblogs.net/BlackRabbitCoder/archive/2011/06/16/c.net-fundamentals-choosing-the-right-collection-class.aspx has provided me much of the information.

The motivation to be more familiar with the collections available from the .Net BCL is so you can apply the proper container for the problem one is solving that results in more performant code.

What is an Associative Collection? They store a value in the collection by providing a key that is used to add/remove/lookup an item. Think key/value pairs.

All collections are based on the ICollection Interface.

IList

- Array

  - Manage a collection of variables. - are always a reference type, and are type safe - have a fixed size (specified upon creation) - are always 0 based

- ArrayList
  - are not fixed size - contains list of objects, so not type safe - they are boxed and unboxed, which is inefficient
- List<T> (replacing ArrayList) (Non-Associative Collection)
  - Lookup Efficiency: Index: O(1) Value: O(n)
  - leverages generics (is type-safe version of ArrayList) - no boxing or unboxing, improved performance - will generate compile-time errors if wrong type added, helpful

ICollection

- Queue<T> First in, First Out (Non-Associative Collection)

  - Lookup Efficiency: Front: O(1)

- ConcurrentQueue<T>
- Stack<T> List in, First Out (Non-Associative Collection)

  - Lookup Efficiency: Top: O(1)

- ConcurrentStack<T>
- LinkedList<T> (Non-Associative Collection)
  - Lookup Efficiency: Value: O(n)

Concurrent Collections (.Net 4.0) - when you have multi-threaded read/write access to a collection

- ConcurrentQueue (FIFO)
- ConcurrentStack (LIFO)
- ConcurrentBag unordered collection of objects, helpful for when a thread may be a reader and writer

IDictionary

- HashTable
- SortedList
- Dictionary<Tkey, TValue> (replacing Hashtable) (Associative Collection)
  - Lookup Efficiency: Key: O(1)
- SortedDictionary<TKey, TValue> (Associative Collection)
  - Lookup Efficiency: Key: O(log n)
- SortedList<Tkey, TValue> (Associative Collection)
  - Lookup Efficiency: Key: O(log n)
- ConcurrentDictionary<TKey, TValue>
- KeyedCollection<TKey, TValue> - unique - behaves like a list and a dictionary because it is a list of values with keys embedded within the values.

Others -

- NameValueCollection
- OrderedDictionary
- StringCollection
- StringDictionary
- BitArray
- BitVector32
- HybridDictionary
- HashSet<T> (Non-Associative Collection)

  - Lookup Efficiency: Key: O(1)

- SortedSet<T> (Non-Associative Collection)
  - Lookup Efficiency: Key: O(log n)

### Types of Searches and the best Collections for them:

- First In, First Out - Queues
- Last In, First Out - Stacks
- Sorts - SortedList & SortedList<TKey, TValue> are sorted versions of the Hashtable and Dictionary<TKey, TValue)

Indexes of all Collections are zero-based, except Array - which allows arrays that are not zero-based.

### LINQ

[LINQ Reference](./linq.md)

### Abstract and Virtual Classes

- [C# Corner: Abstract Class & Interface: Two Villains of Every Interview - Part 1](https://www.c-sharpcorner.com/UploadFile/d0e913/abstract-class-interface-two-villains-of-every-interview/)
- [Abstract Class & Interface: Two Villains of Every Interview - Part 2](https://www.c-sharpcorner.com/UploadFile/d0e913/abstract-class-interface-two-villains-of-every-interview756/)

Why do we want abstract Classes? To provide default functionality and to add abstract methods.

Abstract classes can NOT be instantiated. they have no implementation so their method definition is followed by a semicolon:

```csharp
public abstract class A
{
public abstract void DoWork(int i);
}
```

Derived classes must implement all abstract methods.

An abstract class can have non-abstract methods, and this aids in making code more DRY - less code duplication. And if these methods needed updating in the future, you would just update in one place on the abstract class.

Virtual: when an abstract class inherits a virtual method from a base class, the abstract class can override the virtual method with an abstract method. Virtual forces derived classes to provide new implementations for virtual methods.

Example of use of Virtual:

```csharp
// compile with: /target:library
public class D
{
    public virtual void DoWork(int i)
    {
        // Original implementation.
    }
}

public abstract class E : D
{
    public abstract override void DoWork(int i);
}

public class F : E
{
    public override void DoWork(int i)
    {
        // New implementation.
    }
}
```

### Generics

Generics refers to the technique of writing the code for a class without specifying the data type(s) that the class works on.

You specify the data type when you declare an instance of a generics class. This allows a generics class to be specialized for many different data types while only having to write the class once.

A great example are the many collection classes in .NET. Each collection class has it's own implementation of how the collection is created and managed. But they use generics to allow their class to work with collections of any type.

- Use generic types to maximize code reuse, type safety, and performance.
- The most common use of generics is to create collection classes.

Generics allow you to delay the specification of the data type of programming elements in a class or a method, until it is actually used in the program. In other words, generics allow you to write a class or method that can work with any data type. It helps you to maximize code reuse, type safety, and performance.

### Access Modifiers

An access modifier defines the scope and visibility of a class member.

- public: The type or member can be accessed by any other code in the same assembly or another assembly that references it.
- private: The type or member can only be accessed by code in the same class.
- protected: The type or member can only be accessed by code in the same class or in a derived class.
- internal: The type or member can be accessed by any code in the same assembly, but not from another assembly.
- protected internal: The type or member can be accessed by any code in the same assembly, or by any derived class in another assembly.

### Other C# General Knowledge

**Enums** - An enum creates a value type. Its a good way to create 'named constants'. The underlying data type is int by default (zero based, but can set to 1 based or any other integer).

**Fields** (variables) & **Properties** - are all about state (managing the state of your data/objects)

**Methods** - define behavior - always have a return type - void if no value returned - always has 0 or more parameters - use "params" keyword to accept a variable number of parameters (compiler will take all of the values and package them up in an array and pass that array to the method "params" parameter) - params is always the last parameter of a method - the method "signature" consists of the name of the method plus the number & types of the parameters that the method takes.

**Delegate** - A delegate is a type that defines a method signature, and can provide a reference to any method with a compatible signature. You can invoke (or call) the method through the delegate. Delegates are used to pass methods as arguments to other methods. - is a type that references methods (that means you can create variables that encapsulate executable code) - you can invoke the variable just like you would invoke a method. - delegates can create variables that point at methods that have the same signature & return type

**Events** - normal .net convention says to always pass 2 parameters: 1. the sender of the event 2. the arguments (or all of the needed information/data) - Events enable a class or object to notify other classes or objects when something of interest occurs. The class that sends (or raises) the event is called the publisher and the classes that receive (or handle) the event are called subscribers.
ex: static void OnNameChanged(object sender, NameChangedEventArgs args) { // do whatever }

**Using statement** - will make sure that an object is properly disposed and resources are freed, even if there is an exception. Behind the scenes, the c# compiler will essentially setup a try/finally to make sure that the object is always disposed of (properly closed/displosed). This ensures that your data is fully flushed out to disk, and files will be unlocked. - the only managed resource in .net is "memory". It keeps track of what you are using and tries to clean up what you are not (similar to removing files from your harddrive to reclaim room). Other resources are unmanaged-resources (like a data file, streams and/or database connections). - if you need to do exception handling, then you would use a try/catch/finally block instead.

**Abstract Class** - is a class that you cannot instantiate, because it is not fully implemented. - CAN have some implementation details. - It uses the "abstract" keyword in the Type definition. To instantiate any type of Abstract class, you will need to derive (inherit) from it and provide an implementation for any abstract members. This would then create a "Concrete Type", or a type that you can instantiate.

**Abstract Types & Concrete Types** - You cannot instantiate Abstract types. - You can only instantiate Concrete types

**Interface** (an API for an object) - contain no implementation details, defines only the signatures of methods, events & properties. - Any object that implements an Interface is guarenteed to have the members an interface describes. - An interface represents a contract, in that a class that implements an interface must implement every aspect of that interface exactly as it is defined.

One HUGE difference between Abstract and Interface classes: - when I define a class, I can only inherit from a single base class. But I can implement as many interfaces as I'd like (can inherit 1 interface, or 100)! Can also inherit from 1 base class AND implement multiple interfaces.

SO, the interface is the ultimate abstraction, because an Interface allow you to define the API your software needs without defining any of the implementation details. And because any class or struct can inherit any interface, interfaces are extremely flexible.
LINQ stands for "Language Integrated Query"
