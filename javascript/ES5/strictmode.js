"use strict";
function foo() {
  console.log(this); //this will log "undefined"
}
foo();
