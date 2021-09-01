var msg = '';
var parent = new ExampleScriptInclude();
var child = new ExampleExtendedScript();

msg += '\n==Parent Script==\n' +
	'Let\'s override this: \n\t' + parent.overrideMe() + '\n' +
	'Don\'t override this: \n\t' + parent.dontOverrideMeBro() + '\n';

msg += '\n==Extended/Child Script==\n' +
	'Now that it\'s overridden: \n\t' + child.overrideMe() + '\n' +
	'This method wasn\'t overridden, but the property it uses was: \n\t' + child.dontOverrideMeBro() + '\n';

gs.print(msg);
