var ExampleExtendedScript = Class.create();
ExampleExtendedScript.prototype = Object.extendsObject(ExampleScriptInclude, {
	
	overrideMe: function() {
		return 'Thanks for overriding me!';
	},
	
	overrideMsg: 'Thanks for not overriding me!',
	
	type: 'ExampleExtendedScript'
});
