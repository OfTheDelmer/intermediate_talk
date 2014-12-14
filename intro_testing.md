# Testing and NPM


## Intro to NPM

*NPM* is called the **Node Package Manager** it will be helping us install packages and libraries that we can use to build our Node projects. To get started do the following:

* Go into a new project folder, `mkdir new_project` and `cd new_project`.
* Initialize a new Node project using a special command `npm init`.
* Just hit enter for `name`, `version`, `description`, et cetera. You don't need to know what all these mean just yet.
* Look inside your current directory and you should now have a `package.json` file. If you `cat package.json` you'll see that it just looks like a js object. Hence the name `package.json`.

Let's install your first package. 

```
$ npm install --save colors

```

If you `cat package.json` you should now see the following or something similar.

```
	...
		"dependencies": {
			colors: "^0.6.2"
		} 
	...
```

If you `ls .` you should also see `node_modules` which is where the `colors` module was saved to after we installed. Let's use the colors module. Enter the node REPL and try the following:

```
var colors = require("colors");
console.log("This is cool".cyan);
console.log("This is cooler".red)

```

> Note: `require("somePackageName")` is a method used by node for importing code from external libraries, so you can use it in your projects. If the package you try to require isn't installed this won't work.

Get back to terminal, `.exit` in node. Note how we said the `node_modules` folder was where everything was saved after we installed it. Let's try removing it.

```
rm -rf node_modules/
```

It's gone. You shouldn't have just listened to me say that. What are you going to do now? What did we install again? What was the package called?  **Okay, wait a moment**... type the following into terminal


```
npm install
```
Now if  you `ls` the folder should be back with everything you installed. This is because in our `package.json` we have the following:

```
	...
		"dependencies": {
			colors: "^0.6.2"
		} 
	...
```

NPM reads that and attempts to install "colors" because it's listed as a dependency of the project you're working on. The only reason it was added here is because we said `npm install --save colors`. If you say `npm install colors` NPM won't record your package as a dependency, so if you lose your `node_modules` folder, good luck fixing that mistake.

## Making Assertions

Let's move away from the incredible world of NPM for a moment and focus our attention back on testing. How would we test if one thing equals another?

```
console.log(1 === 1);
```

That's a start, but actually there is a `console` method called `assert` that will raise errors when statements aren't true.


```
console.assert(1 === 1)

console.assert(1 === 2)
```

Raising errors is useful because it allows people designing testing software to exit a procedure if it fails part of a test, so that they can continue testing other things.


However, what happens when we want to assert the equality between objects or arrays?

```
console.assert([1,2] === [1,2]);
// errors out
console.assert({name: "foo"} === {name: "foo"});
// errors out
```

We need some simple set of methods for testing objects. Luckily node has this package built into it, [ASSERTION TESTING](http://nodejs.org/api/assert.html), as well as other [things](http://nodejs.org/api/).

```
var assert = require("assert");
assert.equal(1, 1);
assert.equal(1, 2);
```

You can use `assert.deepEqual` to test the equality of things based on their similarity rather than their references.

```
assert.deepEqual([1,2,3], [1,2,3]);
assert.deepEqual([1,2,3], [1,2,4]);
```


