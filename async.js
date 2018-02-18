// how async works in javascript example
function myFunc() {
  // declare some inner variables
  var max = 9999999999;
  var total = 0;

  // print async function execution start time
  console.log("async function start timestamp: " + Date.now()); // result ?
  
  // run an async function after 1000 miliseconds (1sec)
  setTimeout(function() {
    // print async function executed time
    console.log("async function executed timestamp: " + Date.now()); // result ?
  }, 1000);

  for (var i = 0; i < max; i++) {
    total += i;
  }
}

// execute the function
myFunc();
