function Pet(name, breed, age, weight) {

  this.name = name;
  this.breed = breed;
  this.age  = age;
  this.weight = weight;

}

Pet.prototype.sleep = function () {
    return "ZzzZZzz";
};


module.exports = Pet;