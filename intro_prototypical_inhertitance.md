# Prototypical Inheritance
## Tips

| Objectives |
| :---- |
| Apply constructors and prototypes together to implement inheritance between objects in Javascript |
| To examine lookup in the prototype chain and articulate certain advantages via diagrams |

![Darth Prototype](https://38.media.tumblr.com/tumblr_m1wwr3Bvyj1qgbp1jo1_500.gif)
## Related Topics

* Prototypal Inheritance
* Javascript Prototypes
* Special Functions:
	* Apply
	* Call


## Overall Goal

* Reduce code complexity
* Encourage code reuse
* Model the world around us 


## Classical Inheritance

### A Prototype In JS Review

In javascript we don't have classes. We have prototypes

	function Person(name){
		this.name = name
	}
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

* Why do we use the prototype?
* What is a `hasOwnProperty`?
* What is a `prototypeProperty`?
* How do we create a new `Person`?


### Static Method/Property Review

Here is a static method and property

```
	function Person(name){
		this.name = name
		Person.all.push(name);
	}

	Person.all = [];
	Person.count = function(){
		return Person.all.length;
	};
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

```

### Inheriting Via Prototypes -- Classical Pattern

Given the following prototype let's create a student.

```
	function Person(name){
		this.name = name
	}
	
	Person.prototype.greet = function(){
		return "Hello, my name is " + this.name;
	};

	function Student(name, course){
		this.name = name;
		this.course = course;
	};

	Student.prototype = new Person();
	Student.prototype.constructor = Student;
```

Play with the above example. Create a new `Student`.

* What's inherited?
	* the `greet` method
* Why set the `Student.prototype.constructor`?
	* when we say `Student.prototype = new Person();` it breaks the constructor property.


### Exercises:

* Try adding study method on the `Student` prototype that returns "Maybe later".
* Try creating a `Table` constructor that takes `numberOfLegs` and `shape`.
	* Add a `putOn` method that takes a string and pushes it into an array of `items`. For example I could say `table.putOn("plates")` for a new table, and the `table.items` would be `["plates"]`.
* Try creating a `LawnTable` also takes `numberOfLegs` and `shap`, and inherits from `Table`.
	* Add a `unfold` method to the `LawnTable` prototype that sets a property `ready` to `true`.
	* Add a `foldup` method to the `LawnTable` prototype that sets a property `ready` to be `false`.
 


### Pitfals--Side Effects

When we inherit in JS we have to watch out for in the wild.

```	
	function Person(name){
		this.name = name;
		this.friends = [];
	}
	
	Person.prototype.addFriend = function(name){
		this.friends.push(new Person(name));
	};
	
	function Student(name){
		this.name = name;
	};
	
	Student.prototype = new Person()
	Student.prototype.constructor = Student;

```
* Create two students and add different  friends to each. What 
	* What happens after adding a friend?



One quick solution or best practice to avoid problems like these is to always avoid initializing properties with array and object values in the constructor if possible. The alternative is to just add check to each method to check if the value is defined.

The above example might become:

```	
	function Person (name) {
		this.name = name;
	}
	
	Person.prototype.addFriend = function (name) {
		this.friends = this.friends || [];
		this.friends.push(new Person(name));
	};
	
	function Student(name){
		this.name = name;
	};
	
	Student.prototype = new Person()
	Student.prototype.constructor = Student;

```



### `call` and `apply`

Example 1:

```
var getAge = function(friend) {
	return friend.age;
}

var john = { name: "john", age: 21 };
getAge(john)

```

rewritten using `this`

```
var getAge = function() {
	return this.age;
}

var john = { name: "john", age: 21 };
getAge.call(john)

```

Example 2:

```
var setAge = function(friend, newAge) {
	friend.age = newAge;
}

var john = { name: "john", age: 21 };
setAge(john, 12)

```

rewritten using `this`

```
var setAge = function(newAge) {
	this.age = newAge;
}

var john = { name: "john", age: 21 };
setAge.call(john, 12)

```

	
	
### Calling on a solution

Let's talk about using `call` or `apply` to set the `this` context for a function before it is run.

	function Person(name){
		this.name = name;
		this.friends = [];
	}
	
	Person.prototype.addFriend = function(name){
		this.friends.push(new Person(name));
	};
	
	function Student(name){
		// masks all the constructor properties
		Person.call(this);
		this.name = name;
	};
	
	Student.prototype = new Person()
	Student.prototype.constructor = Student;



Unfortunately, this breaks the **Law of Demeter** or **Priniciple of Least Knowledge**, which is that modular units should have a very limited knowledge of the other units they are tied to.



