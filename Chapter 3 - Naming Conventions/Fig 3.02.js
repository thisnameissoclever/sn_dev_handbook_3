var assigneeSysID = getAssigneeSysID('Johnny B Developer');

function getAssigneeSysID(assigneeName) {
	var assigneeUtils;
	gs.debug('Got argument: "' + arg + '".', 'exampleArgument');
	var grUser = new GlideRecord('sys_user');
	//If user is found
	if (grUser.get('name', assigneeName)) {
		assigneeUtils = new AssigneeUtils();
		//Check if the user is a valid assignee. If so, return the user's sys_id.
		//Otherwise, fall out of conditional blocks
		if (assigneeUtils.checkIfValidAssignee(grUser)) {
			return grUser.getUniqueValue();
		}
	}
	//If user cannot be found, or the user is not a
	// valid assignee, fall through to return false
	
	return false;
}
