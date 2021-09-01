/**
 * @param {string} firstName - The greetee's first name.
 * @param {string} [lastName="Smith"] - The greetee's last name.
 * @return {string} - The greeting, as a string.
 */
function sayHi(firstName, lastName) {
	var greeting;
	if (typeof lastName == 'undefined' || !lastName) {
		lastName = 'Smith';
	}
	greeting = 'Hello, ' + firstName + ' ' + lastName + '!';
	return greeting;
}
