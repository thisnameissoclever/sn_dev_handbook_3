function sayHello() {
	alert('Hello, ' + myName + '!');
}

/* AUTHOR'S NOTE
Fig. 1.01: An impure function
	The above function is "impure" because it accesses a variable (myName) that
	 is not declared within the scope itself. Therefore, this function DEPENDS on
	 being executed from within a very specific scope, in which this variable
	 exists and is set.
 */