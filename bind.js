// function bind operation example
function myFunc() {
  return this;
}

// define a fake context
var ctx = {
  hello: "world"
};

// execute the function
console.log(myFunc.bind()()); // result ?

console.log("\n---\n");
console.log(myFunc.bind({})()); // result ?

console.log("\n---\n");
console.log(myFunc.bind(ctx)()); // result ?
