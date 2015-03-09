var Pet = require("../pet.js");
var expect = require("chai").expect;


describe("Pet", function () {
  describe("attributes", function () {
    it("should include a name", function () {
      var lassy = new Pet("lassy");
      expect("lassy").to.equal(lassy.name);
    });

    it("should include a breed", function () {
      var lassy = new Pet("lassy");
      expect("breed" in lassy).to.equal(true);
    });

    it("should include a age", function () {
      var lassy = new Pet("lassy");
      expect(lassy.hasOwnProperty("age")).to.equal(true);
    });

    it("should include a weight", function () {
      var lassy = new Pet("lassy");
      expect(lassy).to.haveOwnProperty("weight");
    });
  });

  describe("methods", function () {

    it("should respondTo sleep", function () {
      var lassy = new Pet();
      expect(lassy).to.respondTo("sleep");
    });

  })


});