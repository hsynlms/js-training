// closure example
function x() {
  var value = "defined by function -> x";

  var y = function() {
    var value = "defined by function -> y";
  };

  // execute the function
  y();

  // return value
  return value;
}

// execute the function and put the returned value into the console
console.log(x()); // result ?
