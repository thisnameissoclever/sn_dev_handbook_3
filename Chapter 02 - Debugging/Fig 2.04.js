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
	grTask.setLimit(2);
	grTask.query();
	if (grTask.next()) {
		ticketNumber = grTask.getValue('number');
		if (grTask.hasNext()) {
			//In our system, users should
			// only have one open task!
			gs.error(
				'User with sys_id ' + userSysID +
				' has more than one open ticket!'
			);
		}
	}
	return ticketNumber;
}
