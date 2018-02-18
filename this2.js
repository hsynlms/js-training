// this keyword example
var obj = {
  nodeVersion: "8.9.4",
  which: function() {
    return this.nodeVersion;
  }
};

// execute the function within the object
console.log(obj.which()); // result ?
