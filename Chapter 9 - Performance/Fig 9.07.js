var grStaleIncident = new GlideRecord('incident');
grStaleIncident.addEncodedQuery('active=true^state=2^sys_updated_onRELATIVELE@dayofweek@ago@30');
//state 7 is 'Closed'
grStaleIncident.setValue('state', '7');
grStaleIncident.updateMultiple();
