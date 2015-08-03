function Pet(name, age) {

  this.name = name || "Fido";
  this.age = age;
  this.sleeping = false;
  this.hungry = true;
  this.tricks = [];
}

// sleep, eat
Pet.prototype.sleep = function () {
  this.sleeping = true;
  console.log("zzzz-ZZZZZ-zzzz");
}

Pet.prototype.eat = function () {
  this.hungry = false;
  console.log("num-num-nom");
}

Pet.prototype.perform = function () {
  var numOfTricks = this.tricks.length;
  var randTrick = Math.floor(numOfTricks*Math.random());
  return this.tricks[randTrick];
}

Pet.prototype.learn = function (trick) {

}
module.exports = Pet;






