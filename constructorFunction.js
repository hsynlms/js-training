// constructor function example
function ConstructorFunction() {
  this.executed = true;
  this.information = {
    "name": "constructorFunction",
    "desc": "my constructor function example"
  };

  // will run in 500 miliseconds, async
  setTimeout(function() {
    console.log(this.information); // result ?
  }, 500);
}

// execute the function
var example = new ConstructorFunction();
