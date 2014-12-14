# Prototypical Inheritance
## Tips

### Copying the Prototype

	function Person(name){
		this.name = name;
	}
	
	Person.prototype.greet = function(){	
		return "Hello! My name is " + this.name;
	}
	
	function Student(name){
		// masks all the constructor properties
		Person.call(this);
		this.name = name;
	};
	
	var Intermediary = function(){};
	// Copy just the prototype
	Intermediary.prototype = Person.prototype;
	Student.prototype = new Intermediary;

* Turn this inheritance process into a function called `inherits`.
* Create a new `Student`. What's the constructor name of the new student?

This is an interesting idea of copying one objects prototype and returning an instance of a copy. 

* How could we in general take an object and do this process with it?

		function createObject(protoObj){
			function Intermediary(){}
			Intermediary.prototype = obj;
			return new Intermediary();
		}


* Let's use this createObject.
* What would we have to change with `createObject` to have it properly update the constructor property.






