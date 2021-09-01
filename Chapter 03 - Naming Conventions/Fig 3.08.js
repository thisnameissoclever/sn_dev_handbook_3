function Person(firstName, ageInYears, heightInCm, gender) {
	this.firstName = firstName;
	this.ageInYears = ageInYears;
}
function Family(lastName, parents, children) {
	this.lastName = lastName;
	this.parents = parents;
	this.children = children;
}

var homerSimpson = new Person('Homer', 42);
var margeSimpson = new Person('Marge', 41);
var lisaSimpson = new Person('Lisa', 8);
var bartSimpton = new Person('Bart', 7);
var maggieSimpson = new Person('Maggie', 1);

var theSimpsons = new Family(
	'Simpson',
	[homerSimpson, margeSimpson], //parents
	[lisaSimpson, bartSimpton, maggieSimpson] //children
);

for (var p in theSimpsons) {
	if (theSimpsons.hasOwnProperty(p)) {
		console.log('This property is a(n) ' + typeof theSimpsons[p]);
	}
}
