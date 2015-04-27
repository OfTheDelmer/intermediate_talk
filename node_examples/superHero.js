
function SuperHero(firstName, lastName) {
  this.first = firstName;
  this.lastName = lastName;
}

SuperHero.prototype.superPunch = function() {
  return "WHAM!";
};

var spiderMan = new SuperHero("Peter", "Parker");

console.log(spiderMan.superPunch())