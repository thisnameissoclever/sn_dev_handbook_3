function Instance(name, url, production) {
	this.name = name;
	this.url = url;
	this.production = production;
}
var myInstances = {
	'dev': new Instance('dev', 'http://sndev.service-now.com/', false),
	'test': new Instance('test', 'http://sntest.service-now.com/', false),
	'prod': new Instance('prod', 'http://sn.service-now.com/', true)
};
var snInstance;
for (snInstance in myInstances) {
	if (myInstances.hasOwnProperty(snInstance) && myInstances[snInstance].production === true) {
		console.log('The production instance URL is: ' + myInstances[snInstance].url);
	}
}
