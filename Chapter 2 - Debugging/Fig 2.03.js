function getOpenTicketNumberByUser(userSysID) {
	var ticketNumber;
	var grTask = new GlideRecord('task');
	if (!userSysID) {
		throw new Error(
			'Invalid user sys_id passed in.'
		);
	}
	grTask.addActiveQuery();
	grTask.addQuery('opened_by', userSysID);
	grTask.query();
	while (grTask.next()) {
		ticketNumber = grTask.getValue('number');
	}
	return ticketNumber;
}
