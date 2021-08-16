function Person(name, age, coolness) {
	this.name = name ? name : 'Bob'; //Default to Bob if falsy value was passed in
	this.age = Number(age); //Cast age to a number
	this.coolness = function(coolness) { //self-executing function to validate coolness value
		var actualCoolness = 'Total doof';
		if (coolness === actualCoolness) {
			return coolness;
		} else {
			return actualCoolness;
		}
	}(); //Adding "()" makes it an IIFE, which executes and returns the value, instead of setting the coolness property to the function itself.
}

var personMe = new Person('', '30', 'Extreme to the max');