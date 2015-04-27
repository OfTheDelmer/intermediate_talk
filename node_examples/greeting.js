var colors = require("colors");

console.log("hello world".red.underline);

// initially an empty object, {}
module.exports.greet = function (name) {
  console.log(name.red.underline);
};

// What gets exposed is the module.exports object