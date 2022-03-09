[Home](../) > [C#](../csharp/)

# C# Version 1 Reference

## Reference Links

- [The history of C#](https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history)

## Framework Release:

## Notable News

## What's New

- Classes
- Structs
- Interfaces
- Events
- Properties
- Delegates
- Operators and expressions
- Statements
- Attributes

## New Feature Examples

### Hashtable vs Dictionary

hashtable is a loosely typed key-value pair collection, meaning you can put in any object. The dictionary is strongly typed however, and must be declared when initialized.  
http://net-informations.com/faq/general/dictionary.htm

hashtables are slower (boxing / unboxing needed for value types) than Dictionary.

hashtables support multiple reader threads with a single writer thread. So hashtables are thread safe! Dictionaries not thread safe. you could still use Dictionary in a thread safe manner by implementing your own syncronization (holy crap no).

### Delegates

- Think of it as creating a method signature so that a method can be passed around as parameters to other methods. It defines what the method looks like that the receiving method will work with.
- A delegate is a named type that defines a particular type of method.
- A delegate is not the same thing as an anonymous function though. an anonymous function is a piece of code, while a delegate is a pointer

**Code example:**

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MyLibrary;

namespace DelegateApp {

  /// <summary>
  /// A class to define a person
  /// </summary>
  public class Person {
    public string Name { get; set; }
    public int Age { get; set; }
  }

  class Program {
    //Our delegate
    public delegate bool FilterDelegate(Person p);

    static void Main(string[] args) {

      //Create 4 Person objects
      Person p1 = new Person() { Name = "John", Age = 41 };
      Person p2 = new Person() { Name = "Jane", Age = 69 };
      Person p3 = new Person() { Name = "Jake", Age = 12 };
      Person p4 = new Person() { Name = "Jessie", Age = 25 };

      //Create a list of Person objects and fill it
      List<Person> people = new List<Person>() { p1, p2, p3, p4 };
      DisplayPeople("Children:", people, IsChild);
      DisplayPeople("Adults:", people, IsAdult);
      DisplayPeople("Seniors:", people, IsSenior);

      Console.Read();
    }

    /// <summary>
    /// A method to filter out the people you need
    /// </summary>
    /// <param name="people">A list of people</param>
    /// <param name="filter">A filter</param>
    /// <returns>A filtered list</returns>
    static void DisplayPeople(string title, List<Person> people, FilterDelegate filter) {
      Console.WriteLine(title);

      foreach (Person p in people) {
        if (filter(p)) {
          Console.WriteLine("{0}, {1} years old", p.Name, p.Age);
        }
      }

      Console.Write("\n\n");
    }

    //==========FILTERS===================
    static bool IsChild(Person p) {
      return p.Age <= 18;
    }

    static bool IsAdult(Person p) {
      return p.Age >= 18;
    }

    static bool IsSenior(Person p) {
      return p.Age >= 65;
    }
  }
}
```

### Sealed Classes

- sealed classes canNOT be used as a base class. (this could make them slightly faster with some run-time optimzations)
- therefore - it canNOT be an abstract class.
- they prevent derivation.
- you could mark a derived method that is overriding a virtual method on a base class as sealed, and that will negate the virtual aspect of the member for any further derived class.

```csharp
public class D : C
{
    public sealed override void DoWork() { }
}
```
