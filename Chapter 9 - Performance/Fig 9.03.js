var grUser;
var grIncident = new GlideRecord('incident');
grIncident.addEncodedQuery('some_query'); //include a query param for 'assigned_to not blank'
grIncident.query();
while (grIncident.next()) {
	grUser = new GlideRecord('sys_user');
	if (grUser.get(grIncident.getValue('assigned_to'))) {
		//do something with the user
	}
}
