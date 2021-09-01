var food;
var favoriteFoods = [
	'non-dairy beef',
	'evaporated water',
	'raw halibut',
	'banana and pickle sandwiches'
];
var msg = 'I like...';
for (food = 0; food < favoriteFoods.length; food++) {
	if (food > 0) {
		msg += ' and '
	}
	msg += favoriteFoods[food];
}
console.log(msg + '!');
