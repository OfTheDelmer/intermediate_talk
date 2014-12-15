var expect = require("chai").expect;

// write some code for our construtor
function Pet(name, age) {
  this.name = name;
  this.age = age;
  this.fetch = function (item){
    console.log(this.name, "FETCHED:", item);
  }
}
// then write some tests

describe("Pet", function(){
  describe("properties", function () {
    var newPet = new Pet("killer", 2);
    it("has a name", function () {
      expect(newPet.name).to.equal("killer");
    });
    it("has an age", function () {
      expect(newPet.age).to.equal(2);
    });
  });
  describe("#fetch", function () {
    var newPet = new Pet("killer", 2);
    it("should be able to fetch", function () {
      expect(newPet.fetch).to.not.equal(undefined);
      expect(typeof newPet.fetch).to.equal("function");
    })
  });
});