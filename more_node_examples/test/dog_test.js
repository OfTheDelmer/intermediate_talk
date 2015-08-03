var expect = require("chai").expect;
var Dog = require("../dog.js");
var Pet = require("../pet.js");

describe("Dog", function () {

  describe("hasOwnProperties", function () {
    var dog;

    beforeEach(function () {
      dog = new Dog();
    })

    it("should include name", function () {
      expect(dog).to.have.ownProperty("name");
    })

    it("should include age", function () {
      expect(dog.hasOwnProperty("age")).to.equal(true);
    })

    it("should include breed", function () {
      expect(dog.hasOwnProperty("name")).to.equal(true);
    })

  });

  describe("prototype chain", function () {

    it("should inherit from Pet", function () {
      var dog = new Dog();
      expect(dog instanceof Pet).to.equal(true);
    })

  })


  describe("#dogYears", function () {
    it("should print age in dog years", function () {
      var dog = new Dog("sparky", 7);
      expect(dog.dogYears()).to.equal(49);
    })

    it("should console.log something", function () {
      var log = console.log;
      var called = false; 
      
      console.log = function () {
        called = true;
        log.apply(console, arguments);
      }

      var dog = new Dog("", 7);
      dog.dogYears();
      expect(called).to.equal(true)

    })


  })

});