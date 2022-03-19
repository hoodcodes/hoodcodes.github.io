[Home](../) > [Go](./)

# Free Code Camp Go Course Notes

There is a very good 7+ hour course(2019) on Go by Beau Carnes with FreeCodeCamp.org:

- [Golang in 7 hours (No Ads)](https://www.freecodecamp.org/news/go-golang-course/)
- [YouTube link](https://www.youtube.com/watch?v=YS4e4q9oBaU)

These are my notes from going through the course.

⭐️ Course Contents ⭐️
[(0:00:00) Introduction](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=0s)
[(0:16:57) Setting Up a Development Environment](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1017s)
[(0:35:48) Variables](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=2148s)
[(0:57:05) Primitives](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=3425s)
[(1:26:29) Constants](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=5189s)
[(1:47:53) Arrays and Slices](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=6473s)
[(2:17:20) Maps and Structs](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=8240s)
[(2:48:00) If and Switch Statements](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=10080s)
[(3:21:17) Looping](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=12077s)
[(3:41:34) Defer, Panic, and Recover](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=13294s)
[(4:03:57) Pointers](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=14637s)
[(4:21:30) Functions](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=15690s)
[(4:57:59) Interfaces](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=17879s)
[(5:33:57) Goroutines](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=20037s)
[(6:05:10) Channels](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=21910s)

**Notes by Section**

**[(0:00:00) Introduction](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=0s)**

**[(0:16:57) Setting Up a Development Environment](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=1017s)**

**[(0:35:48) Variables](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=2148s)**

Compile time errors on variables are raise when they are not utilized. All variables must be used.

There are 3 ways to declare and initialize a variable.
`:=` is assignment and type inferrence

Shadow variables: Inner block scope for a var name which has another var of same name outside of the block. Innermost scope takes precedence

Lowercase var names. 2 rules

- Declared at the package level = these are scoped to the package. Not exposed publicly.
- Uppercase variables becomes publicly exposed
- Vars scoped inside blocks are private to the block

Length of var name should indicate the lifespan of the var. make them as short as possible.

- looping variables can be: i, x (single letter)
- longer name if used more widely

Acronyms are all uppercase in variable names, for readability. e.g var name: useHTTP, documentURL

Casing - don’t use underscores. Pascal or camel casing fine

Type conversions. More of a function call.

There are no implicit type conversions

- destinationtype(variable)
- Use strconv package for strings

**[(0:57:05) Primitives](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=3425s)**

`boolean` - is its own type

numeric:

- integer numbers
  signed - 8 bit thru 64
  unsigned 8 bit thru 32
  arithmetic operations
  bitwise operations
  cannot mix types of different types
- floating point numbers

complex numbers

Text types

- strings

- `rune`

**[(1:26:29) Constants](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=5189s)**

Naming Convention

keyword: `const`

- Named the same way we name variables, so we do not automatically have these values exported

must be assigned at compile time

constants can be shadowed

`iota` - kind of like an enumeration - where you can have a block of constants set with incrementing integer values

- using the first value to(0) be an error value allows you to know if a value has been not been assigned to a constant yet

`_` (the underscore) - Go’s only write only variable.

Typed Constants

Untyped Constants

Enumerated constants

Enumeration Expressions

**[(1:47:53) Arrays and Slices](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=6473s)**

**[(2:17:20) Maps and Structs](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=8240s)**

**[(2:48:00) If and Switch Statements](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=10080s)**

**[(3:21:17) Looping](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=12077s)**

**[(3:41:34) Defer, Panic, and Recover](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=13294s)**

**[(4:03:57) Pointers](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=14637s)**

**[(4:21:30) Functions](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=15690s)**

**[(4:57:59) Interfaces](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=17879s)**

**[(5:33:57) Goroutines](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=20037s)**

**[(6:05:10) Channels](https://www.youtube.com/watch?v=YS4e4q9oBaU&t=21910s)**
