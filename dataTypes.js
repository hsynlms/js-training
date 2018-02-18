// declaring some different kind of variables
var number = 1;
var float = 2.5;
var string = "Huseyin";

var obj = {
  key: "value"
};

var arr = [
  "no",
  "woman",
  "no",
  "cry"
];

var func = function() {
  return "I am a function";
};

// check each typeof
console.log(typeof number); // result ?
console.log(typeof float); // result ?
console.log(typeof string); // result ?
console.log(typeof obj); // result ?
console.log(typeof arr); // result ?
console.log(typeof func); // result ?

console.log("\n---");

console.log(typeof null); // result ?

console.log("---\n");

console.log(typeof obj.key); // result ?
console.log(typeof func()); // result ?
