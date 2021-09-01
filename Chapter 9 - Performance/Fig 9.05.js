var inc, incAssignedToUser, grUser, assignID, incID;
var assignData = {};
var grIncident = new GlideRecord('incident');
grIncident.addEncodedQuery('some_query^assigned_to!=NULL');
grIncident.query();
while (grIncident.next()) {
	incID = grIncident.getValue('sys_id');
	assignID = grIncident.getValue('assigned_to');
	/*If the assignee has not been added to the
	assignData object, create it.*/
	if (!assignData[assignID]) {
		assignData[assignID] = {};
	}
	/*Create an object inside the assignee object in
	the assignData object, to hold the incident
	data (using the Incident() ES5 constructor)*/
	assignData[assignID][incID] = new Incident(grIncident);
}

grUser = new GlideRecord('sys_user');
grUser.addQuery('sys_id', 'IN', Object.keys(assignData));
grUser.query();
while (grUser.next()) {
	for (inc in assignData[grUser.getValue('sys_id')]) {
		//Check if property is enumerable
		if (assignData.hasOwnProperty(inc)) {
			incAssignedToUser = assignData[grUser.getValue('sys_id')][inc];
			//NOW do something with the user/incident pair
		}
	}
}

/**
 * @param grIncident {GlideRecord}
 * @constructor
 */
function Incident(grIncident) {
	this.sys_id = grIncident.getValue('sys_id');
	this.number = grIncident.getValue('number');
	//etc...
}
