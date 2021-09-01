function onChange(control, oldValue, newValue, isLoading, isTemplate) {
	if (isLoading || newValue === '') {
		return;
	}
	
	var assigneeMgrID = g_form.getValue('manager');
	var watchList = g_form.getValue('watch_list');
	debugger;
	//If watch list has anything in it, split it into an array;
	// otherwise, replace with a blank array.
	watchList = (watchList ? watchList.split(',') : []);
	
	//If manager is empty or already on watch list, halt and do nothing.
	if (!assigneeMgrID || watchList.indexOf(assigneeMgrID) >= 0) {
		return;
	}
	
	watchList.push(assigneeMgrID);
	//Add manager to watch list array
	g_form.setValue('watch_list', watchList.join(','));
	//update watch list field
}