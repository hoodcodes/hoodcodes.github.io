[Home](../) > [Other](./)

# Currying

currying: the act of transforming an n-ary function to a unary function. When you have a function with multiple arguments, they are broken down into a series of functions that take parts of the arguments.

`const sum = (x, y) => x + y`

Becomes:

`x => y => x + y`
