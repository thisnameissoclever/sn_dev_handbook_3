var grUser, assignIDs = [];
var grInc = new GlideRecord('incident');
grInc.addEncodedQuery('some_query^asigned_to!=NULL');
grInc.query();
while (grInc.next()) {
	//This condition keeps the array values unique
	if (assignIDs.indexOf(grInc.getValue('assigned_to') < 0)) {
		assignIDs.push(grInc.getValue('assigned_to'));
	}
}

grUser = new GlideRecord('sys_user');
grUser.addQuery('sys_id', 'IN', assignIDs);
/*Include any other query params here, such as if you
only want to return active users.
Note that it is more efficient to add those query
params here, rather than via dot-walking on the
Incident table query, because dot-walking inside
of one query effectively results in a separate
query on the dot-walked table (which we're doing
here, anyway!)*/
grUser.query();
while (grUser.next()) {
	//NOW do something with the assignee records
}
