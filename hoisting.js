// hosting example
var myVariable = 10;

function myFunc() {
  myVariable = 25;

  var myVariable;

  // log the variable value
  console.log(myVariable); // result ?
}

// execute the function
myFunc();

// log the variable value
console.log(myVariable); // result ?
