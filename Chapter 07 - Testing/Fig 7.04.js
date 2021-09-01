try {
	doSomething()
} catch(ex) {
	gs.logWarning('Handled exception: ' + ex.message, 'MyScriptInclude.thisMethod');
}
