function howAreYa(myName) {
	var response;
	var greeting = 'Hello, ' + myName;
	var question = 'How are ya?';
	
	console.log(greeting);
	response = prompt(question);
	console.log('You said: ' + response);
}
