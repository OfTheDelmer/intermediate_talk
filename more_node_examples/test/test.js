var expect = require("chai").expect;


describe("Array", function () {

  describe("#indexOf", function () {

    it("should return -1 if missing", function () {

      var arr = ["jack", "jill", "jane"];
      expect(arr.indexOf("john")).to.equal(-1);

    })

  })

});