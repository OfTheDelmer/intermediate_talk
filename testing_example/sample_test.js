var assert = require("assert");
var colors = require("colors");

assert.equal(1,1);
try {
  assert.equal(1, 2, "1 should equal 1");
} catch (error) {
  console.log(error.message.red);
}
try {
  assert.equal(1, 3, "1 should equal 2");
} catch (error){
  console.log(error.message.red);
}