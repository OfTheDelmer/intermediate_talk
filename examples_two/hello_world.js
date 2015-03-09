
// module.exports = {};

var bar = function () {
  console.log("Goodbye!");
};


module.exports.salutation = bar;

module.exports.foo = function () {
  console.log("Hello World Again!");
};