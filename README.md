# Intermediate JS
## Functions, Objects, and All That


|  Objectives  |
| :--- |
| Learn the Functional Fundamentals of Javascript |
| Learn the Object Oriented aspects of Javascript |
| Learn basic design patterns and testing with Javascript |

## JS Functions

Any discussion of javascript starts with an introduction to functions, because some might add that in JS functions come first, i.e. **first class functions**.

### Local Scope

A functions local scope is the all the world of variables defined within a function, the body, and shadow variables outside of the functions body.

```

var name = "john";
var foo = function () {
	// exists only in the body
	var name = "jane";
};
foo();
console.log(name);

```

### Lexical Scope

Lexical scope is the ability of a function to lookup variables not defined locally in its body.

```
var name = "john";

var foo = function () {
	name = "jane";
};

foo();
console.log(name);

```

### Question

* you might be aware that functions take parameters, but what scope do they fall under?

##  Parameters

When we define parameters they are listed in the definition of the function, and their respective values are made available in the local scope of the function. A functions parameters name will act like local variables and shadow variables outside of scope.


```

var name = "john";

var foo = function  (name) {
	name = "jane";
};

foo(name);
console.log(name);

```

It is important to note that this is the same. The parameter is just the name for it's arguments value when called.

```
var name = "john";

var foo = function  (blah) {
	blah = "jane";
};

foo(name);
console.log(name);

```


It is important to note here that values are passed into functions as arguments, and not a reference to the value. Let's focus on the idea that the value was passed into the function. This is called **pass by value**. The above example can be re-written with it's value.

```
var name = "john";

var foo = function  (blah) {
	blah = "jane";
};

foo("john");
console.log(name);

```

## Defining Functions

There are a few ways to define functions.


### Function Declaration

A function declaration is a [named function](http://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/).

```
function greet() {
	console.log("hello");
}
greet();
```

Note here how we put a name before the parameter list that we can use to call the function.

### Function Expressions

A function expression is a variable whose value is an unnamed function.

```
var greet = function () {
	console.log("hello");
};

greet();

```


### Functions As Values

In the above example of function expressions we noted how we had a variable whose value is an anonymous function, which would lead us to believe that functions can be used like values, i.e. used as arguments passed to functions.


```

var greet = function () {
	console.log("hello");
};

var shakeHands = function () {
	console.log("shakes hand");
};

var introduce = function (actOne, actTwo) {
	actOne();
	actTwo();
};

introduce(greet, shakeHands);

```

## Exercises

* Make a `fullName` function that takes a `firstName` and `lastName` and returns the concatenation of their values.
* Make a `randomize` function that chooses a random number in a range. Hint: use `MDN` to lookup `Math.floor` and `Math.random`.

## Higher Order Functions

The idea of a higher order function is a function that either does one of the following:

* A function that takes another function as an argument.
* A function that returns another function.