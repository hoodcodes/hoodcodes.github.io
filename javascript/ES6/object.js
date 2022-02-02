// ES6 has cleaner syntax for method declaration
// 2 ways to call object members ( Dot syntax and [''] )

//*****   Function Declarations & Function Expressions  *****/

//ES5 way:

/* function declarations (aka named functions) 
are 'hoisted' to the top of your code, and can thus be called before it is declared in the code.
*/
function fullName(first, last) {
  return first + " " + last;
}

console.log("full name is: " + fullName("John", "Doe"));

/* function expressions (aka anonymous functions) 
can be stored in a variable. We end these statements with a semicolon
*/

var legalName = function (first, middle, last) {
  return first + " " + middle + " " + last;
};

console.log("legal name is: " + legalName("John", "Vincent", "Doe"));

/* Which type of function is preferred?

*/

//ES6:

/*You can still use the ES5 function types above, but with ES6 you have
arrow functions providing a simplified structure - giving you a more 
concise way to write function expressions
*/

//*****   Calling Object Members   *****/
const car = {
  make: "Toyota",
  model: "Landcruiser",
  honk: function () {},
  forward() {},
  reverse() {},
};

//if you know your member invocation, use dot notation
car.honk();

//if you are determining member syntax at runtime, use ['']
const targetMember = "model";
car[targetMember.value] = "FJ Cruiser";
