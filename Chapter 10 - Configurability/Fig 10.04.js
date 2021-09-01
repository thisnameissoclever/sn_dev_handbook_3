/**
 * @param {string} firstName - The greetee's first name.
 * @param {string} [lastName=] - The greetee's last name.
 * @return {string} - The greeting, as a string.
 */
function sayHi(firstName, lastName) {
	var greeting = 'Hello, ' + firstName;
	if (lastName) {
		greeting += ' ' + lastName;
	}
	greeting += '!';
	return greeting;
}
