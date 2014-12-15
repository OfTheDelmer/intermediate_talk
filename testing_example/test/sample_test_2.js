var assert = require("assert");
var expect = require("chai").expect;

var myArr = [1,2,3];

describe("Array", function () {
  describe("the indexOf method", function (){
    it("should return the index of a number in an arr", function (){
      expect(2).to.equal(myArr.indexOf(3));
    });

    it("should return -1 if a number is not in the arr", function () {
      expect(-1).to.equal(myArr.indexOf(9));
    });
  });
});