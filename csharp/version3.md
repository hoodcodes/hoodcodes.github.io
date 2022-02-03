# C# Version 3 Reference

LINQ

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
