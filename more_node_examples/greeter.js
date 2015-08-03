var greet = function () {
  console.log("Hello world!");
}

greet();

var adios = function ADIOS() {
  console.log("GOOOODBYE")
};

// by default this is what is
//   exposed by node
module.exports = {};
module.exports.greet = greet;
module.exports.adios = adios;


// module.exports = greet;