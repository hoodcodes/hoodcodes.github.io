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
