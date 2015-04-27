var expect = require("chai").expect;
var SuperPet = require("../super_pet.js");
var Pet = require("../pet.js");

describe("SuperPet", function () {
  describe("Prototype", function () {
    it("should be an instance of a Pet", function () {
      expect(SuperPet.prototype).to.be.an.instanceof(Pet);
    });
  });
});