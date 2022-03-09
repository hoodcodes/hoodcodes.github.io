[Home](../) > [C#](../csharp/)

# LINQ

### Reference Links

### Notes

The return type of a LINQ query is IEnumerable<t> or IQueryable<t>

Generally, LINQ to Objects, LINQ to XML, LINQ to DataSets, and all that works on in-memory CLR objects return IEnumerable<T>. For LINQ to SQL, LINQ to Entities which work on Expression Trees to generate SQL commands, the return type is IQueryable<T>.

LINQ to Objects - available for objects that implement IEnumerable/IEnumerable<T>.

LINQ - provides commone pattern for accessing data -

- more concise and readable than foreach loops
- provides filtering, ordering and grouping
- can improve performance
