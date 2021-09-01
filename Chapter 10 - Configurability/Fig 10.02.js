(function executeRule(current, previous /*null when async*/) {
	
	var lastSelectedCategory = current.getValue('category');
	gs.getSession().putClientData(
		'last_selected_category',
		lastSelectedCategory
	);
	
})(current, previous);
