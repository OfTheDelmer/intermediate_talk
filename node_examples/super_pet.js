var Pet = require("./pet.js");

function SuperPet(name, age, superPower) {
  this.name = name;
  this.age = age;
  this.superPower = superPower;
}

// inheritance
SuperPet.prototype = new Pet();

SuperPet.prototype.crimeFight = function() {
  return "Fighting crime with " + this.superPower;
};

module.exports = SuperPet;