[Home](../)

# Python Reference

- [Python for the C# Developer YouTube 78min](https://www.youtube.com/watch?v=6TSvV2rsQHg)
- [full 9 hour course Python for .Net Developers](https://training.talkpython.fm/courses/explore_dotnet/python-for-dotnet-developers)

### Highlights

- Created:
- Created By:
- Characteristics:

### Summary Description

### Installing Python

### Your First Python Program

`python hello.py`

### My Notes from the above YouTube [Python for the C# Developer](https://www.youtube.com/watch?v=6TSvV2rsQHg)

The shape of a program: python defines code blocks (aka suites) using whitespace and colons
(c# uses curly braces)

methods are defined with: def

return values are dynamic so we do not define the return value

we import dependencies like this: import random
(in c#: using statements such as using System;)

for loops are like foreach in c# e.g. for d in days:
python: for n in numbers:
c#: foreach (var n in numbers)

arrays are declared a little differently:
python: numbers = [1, 2, 3, 4, 5]
c#: int[] numbers = new[]{1, 2, 3, 4, 5};

python scripts do not have an entry point so we do this:

scoping of variables is to the method, not the block! so a variable declared in a for loop inside a method, would be accessible outside of the for loop inside the method. but NOT outside the method

everyting is an object in python (just like c#)

inheritance is declared slightly differently: class Document(object)
(c#: class Document: object )

you express operators and built in items is with double underbars:
def **str**(self):

lambda expressions: slightly different, use keyword lambda and a colon
python: numbers = find_numbers(lambda n: n % 11 == 0)
c#: IEnumerable<int> nums = FindNumbers(n => n % 11 == 0)

LINQ: you can do it in python - it is a little different:
use if instead of where
put sort outside of block so it is more efficient (sorting on filtered set instead of entire initial set)

package mgmt:  
python: pip install pymongo
c#: (Nuget) Install-Package mongoscharpdriver

SQLAlchemy - allows you to write LINQ like queries for databases like Entity Framework for C#

JIT Compilation
C Python is interpreted
pypy is 5x faster (but doesn’t support as many libraries as regular python)
IronPython - compiles and runs on the .Net platform. Can expose your python libraries to c# and vice versa.

Summary:
Python is simple, concise and readable
Python often has equivalent features to c#
PyCharm (JetBrains) is most popular IDE for python
python is lightweight in memory use compared to c#

python does not have a concept similar to generics. But it is not quite as necessary due to the dynamic nature of the language. You don’t get the checks (type safety) from generics, but u get flexibility.
