function Pet(name, age) {
  // adds properties
  this.name = name;
  this.age = age;
}

Pet.prototype.walk = function () {
  return "Walking!";
}

var fluffers =  new Pet("fluffers", 10);

console.log(fluffers);

module.exports = Pet;