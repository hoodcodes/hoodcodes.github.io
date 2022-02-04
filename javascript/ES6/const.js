// const => block scope
// use const by default,
// only use let when you need to reassign a variable

const a = 5;
a = 2; //TypeError: Assignment to constant variable.

console.log(a);
