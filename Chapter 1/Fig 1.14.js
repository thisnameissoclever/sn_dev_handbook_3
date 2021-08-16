var me = {
	name : 'Tim',
	age : 30,
	coolness : 'Extreme to the max'
};

changeCoolness(me);
console.log('I\'m this cool: ' + me.coolness);

function changeCoolness(person) {
	var actualCoolnessLevel = 'Total doofus';
	person.coolness = actualCoolnessLevel;
}