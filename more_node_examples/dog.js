var Pet = require("./pet");

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.hungry = true;
  this.sleeping = false;
  this.needsWalk = true;

}

// Complete the inheritance
Dog.prototype = new Pet()
Dog.prototype.constructor = Dog;

// And give a Dog a dogYears method
Dog.prototype.dogYears = function () {
  console.log("BLAH")
  return this.age*7;
}

module.exports = Dog;