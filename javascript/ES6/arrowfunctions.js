//  JavaScript Arrow Function Expressions Reference

//  An Arrow Function Expression is a compact alternative to traditional function expressions.
//  But it is limited and cannot be used in all situations

/*  
Limitations
 * does not have its own bindings to this or super.
 * should not be used as methods.
 * does not have new.target keyword.
 * not suitable for call, apply and bind methods, which generally rely on establishing a scope.
 * can not be used as constructors.
 * can not use yield, within its body.
*/

// traditional anonymous function expression
const myNewNumber = function (a) {
  return a + 100;
};
console.log(myNewNumber(1));

// arrow function expression alternative
const getES6NewNumber = (a) => a + 100;
console.log(getES6NewNumber(2));
