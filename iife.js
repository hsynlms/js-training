// immediately invoked function expression example (iife)
(function(name) {
  var whoisTheTrainer = function() {
    return "The trainer name is " + name;
  };

  console.log(whoisTheTrainer());
})("Huseyin Elmas");

// console.log(whoisTheTrainer()); // result ?
