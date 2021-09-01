(function calculatedFieldValue(current) {
	
	var userName, updatedDate;
	if (current.sys_created_on.nil()) {
		return '';
	}
	var grUser = new GlideRecord('sys_user');
	if (grUser.get(gs.getUserID())) {
		userName = grUser.getDisplayValue();
		updatedDate = current.getValue('sys_updated_on');
		return 'Record updated by ' + userName + ' on ' + updatedDate + '.';
	}
})(current);
