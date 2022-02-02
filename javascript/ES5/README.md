# JavaScript ES5 Features & Examples

## _Overview of new additions in ES5_

#### New Features

##### Using "strict mode"

_Read More:_ [Strict Mode](https://www.w3schools.com/js/js_strict.asp)

It would be best to use strict mode. Here are some of the main benefits, although the link above gives more exhaustive list:

- Prevents undeclared variables.
  - Previously, if you mistyped a variable name, the result was simply a new 'global' variable being declared, which introduces bugs. Global variables by the way, are a no-no. There does not need to be global variable declarations in your app, and if you do require them then that situation probably points to poor design anyway.
  - example:

```javascript
"use strict";
foo = 123; //result will be an error
```

- Prevents assigning values to a non-writable property. In normal JavaScript you will not get an error message, but strict mode will throw an error.

```javascript
"use strict";
const foo = {
  get bar() {
    return "baz";
  },
};
foo.bar = "qux"; //this will cause an error
```

- Deleting a variable is not allowed

```javascript
"use strict";
var foo = "bar";
delete foo; //this will cause an error
```

- Deleting a variable or function is not allowed

```javascript
"use strict";
var foo = 5;
delete foo; //this will cause an error
function bar(a1) {}
delete bar; //this will cause an error
```

- Duplicating a parameter name is not allowed

```javascript
"use strict";
function foo(x1, x1) {} //this will cause an error
```

- The `this` keyword behaves differently. The `this` keyword refers to the object that called the function. If the object is not specified, functions in strict mode will return `undefined` and functions in normal mode will return the global object(window);

```javascript
"use strict";
function foo() {
  console.log(this); //this will log "undefined"
}
foo();
```

- Future Proof - Keywords reserved for future JS versions can NOT be used as variable names
  - Implements
  - interface
  - let
  - package
  - private
  - protected
  - public
  - static
  - yield
  -

###### JSON support

JSON is a format for creating JavaScript objects, and it uses JavaScript syntax.

- Data is in name/value pairs.
- Data is separated by commas.
- Curly braces hold objects.
- Square brackets hold arrays.

JSON Example:

```json
{
  "name": "John Doe",
  "profession": "cat herder",
  "awards": [
    "2005 Cat Herder Maricopa County Champion",
    "2008 Cat Herder National Champion"
  ],
  "favorite cat": "Sphynx"
}
```

#### String.trim()

#### Array.isArray()

#### Array iteration methods

#### Trailing commas for object literals

## _Topics:_

#### Operators

#### Control Flow: if...else

#### Control Flow:

#### Control Flow:

#### Control Flow:

#### Control Flow:

#### Arrays:

#### Arrays:

#### Arrays:

#### Arrays:

#### Arrays:

#### Arrays:

#### Arrays:

#### Arrays:

#### Functions:

#### Functions:

#### Functions:

#### Functions:

#### Functions:

#### Functions:

#### Functions:

#### Functions:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Objects:

#### Prototypes:

#### Prototypes:

#### Prototypes:

#### Prototypes:

#### Prototypes:

#### Prototypes:

#### Prototypes:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

#### Prototypical Inheritance:

###
