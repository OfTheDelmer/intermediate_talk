## Mocha

[http://mochajs.org/](http://mochajs.org/)

Unfortunately, using just assertions isn't a very organized way of testing and describing behavior. To deal with this we are going to use a set of tools that  help us organize our assertions and print better errors when they fail.



```
npm install -g mocha
mkdir test
subl test/test.js
```
It is also best practice to add your testing frameworks to your `package.json`.

```
npm install --save-dev mocha
```

We use `--save-dev` because it used only when developing our application, and `--save` will add it to our general list of dependencies, which would be weird because we should not need a testing framework to get our project running.

From here we will break down the example on Mocha's homepage. Let's paste the following into our `test/test.js` file.

`test/test.js`

```
// the assert library built into node
var assert = require("assert");

/*
   describe doesn't really do much,
   beyond running the code in the 
   function it's given
*/

/* 
  note we are using describe to
  group a set of tests all related
  to the Arrays
*/
describe('Array', function(){
  /*
     here we use a describe to
     indicate another group of 
     tests, but yet again it isn't
     doing anything really
  */

  /* 
    we are trying to describe a
    group of tests related to
    the Array#indexOf method
  */
  describe('#indexOf()', function(){
    /*
      the it method does all the work
      in mocha, it takes a message to 
      print if the test fails for a
      behavior
    */

    /* 
      here we are trying to that
      Array.indexof behaves well
      when values are not in the
      array.
    */
    it('should return -1 when the value is not present', function(){
      // We are using assert to throw errors if something is wrong
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
```



## Chai

You might be hating the how unintuitive using `assert` feels. Luckily, their are more intuitive libraries that stress readability that do what `assert` does.


[chai](http://chaijs.com/)

Here we see that Chai comes in three different flavors:

* should
* expect
* assert

The cool thing is that `assert` looks like what we've already been using, but our focus if going to be on using the `expect` library. This is because using `mocha` with `chai`'s expectations is going to look a lot like `Rspec` when we get to ruby.

To get `chai` installed we are going to run

```
$ npm install --save-dev chai
```

This saves it to our devDependencies list which isn't required to actually run or project. For documentation on how to write assertions with chai read the following, [chai api](http://chaijs.com/api/bdd/).
