var grIncident = new GlideRecord('incident');
grIncident.addActiveQuery();
grIncident.addQuery('state', '3');
grIncident.query();
while (grIncident.next()) {
	gs.print('Incident ' + grIncident.getValue('number') + ' is in state 3.');
}
