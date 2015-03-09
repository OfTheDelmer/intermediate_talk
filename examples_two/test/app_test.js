console.log("TESTING!")

// var assert = require("assert");
var expect = require("chai").expect;

describe("Array", function () {
  describe("#indexOf", function () {
    it("should return -1 when a vaule is not present", function () {
      expect(-1).to.equal([1,2,3].indexOf(5));
    });
    it("should return the index of the value in the array", function (){
      expect(1).to.equal([4,5,6].indexOf(5))
    });
  });

  describe("#map", function () {
    it("should return an array of resulting values", function () {
      var results = [1,2,3].map(function (val) {
        return val*2;
      });
      expect([2,4,6]).to.eql(results);
    });
  });
});