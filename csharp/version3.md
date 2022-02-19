[Home](../)

# C# Version 3 Reference

## Reference Links

## Framework Release:

- .Net Framework 3.0/3.5

## Notable News

## What's New

- Implicitly typed local variables
- Object and collection initializers
- Auto-Implemented properties
- Anonymous Types
- Extension methods
- Query Expressions
- Lambda Expressions
- Expression trees
- Extension Methods
- Partial Methods

## New Feature Examples

### LINQ

This is LINQ (using query syntax):

```csharp
var _results = from item in _List
                where item.Value == 1
                select item;
```

This is also LINQ (using method syntax):

```csharp
var _Results = _List.Where(x => x.Value == 1);
```
