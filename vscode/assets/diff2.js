// var => function scope
// let => block scope

function foo() {
  for (let x = 0; x < 5; x++) {
    console.log(x);
  }
  console.log("after block: " + x);
}

foo();