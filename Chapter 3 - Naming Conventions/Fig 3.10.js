var i;
var favoriteFoods = [
	'non-dairy beef',
	'evaporated water',
	'raw halibut',
	'banana and pickle sandwiches'
];
for (i = 0; i < favoriteFoods.length; i++) {
	if (i > 0) {
		msg += ' and '
	}
	msg += favoriteFoods[i];
}
