var ExampleScriptInclude = Class.create();
ExampleScriptInclude.prototype = {
	initialize: function() {
	},
	
	overrideMe: function() {
		return 'Override me!';
	},
	
	dontOverrideMeBro: function() {
		return this.overrideMsg;
	},
	
	overrideMsg: 'Don\'t override me, bro!',
	
	type: 'ExampleScriptInclude'
};
