/**
 * @param {string} firstName - The greetee's first name.
 * @param {string} [lastName="Smith"] - The greetee's last name.
 * @return {string} - The greeting, as a string.
 */
function sayHi(firstName, lastName) {
	var greeting;
	lastName = (typeof lastName == 'undefined') ? 'Smith' : lastName;
	greeting = 'Hello, ' + firstName + ' ' + lastName + '!';
	return greeting;
}
