if (typeof gel !== 'undefined') {
	try {
		var priorityElement = gel("incident.priority");
		setPriorityBackgroundColor(priorityElement);
	} catch(ex) {
		console.warn('Unable to get priority element or set element color. Using alternative handling');
		alternateIndicatePriority('some message'); //optional
	}
} else {
	alternateIndicatePriority('some other message');
}
