(function executeRule(current, previous /*null when async*/) {
	current.addQuery('u_material', '!=', 'Suede').addOrCondition('u_material', 'NULL');
})(current, previous);
