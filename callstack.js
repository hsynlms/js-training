// callstack example
function a() {
  // define an inner function
  var b = function() {
    // define an inner function
    function c() {
      debugger; // result ?
    }

    // execute the function
    c();
  };

  // execute the function
  b();
}

// execute the function
a();
