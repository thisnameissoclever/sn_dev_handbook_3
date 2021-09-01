var grIncident = new GlideRecord('incident');
grIncident.addActiveQuery();
grIncident.query();
while (grIncident.next()) {
	if (grIncident.getValue('state') === '3') {
		gs.print('Incident ' + grIncident.getValue('number') + ' is in state: 3.');
	}
}
