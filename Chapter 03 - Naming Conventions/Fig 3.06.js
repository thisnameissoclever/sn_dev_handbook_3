var grOpenIncident = new GlideRecord('incident');
grOpenIncident.addActiveQuery(); //Get only open Incidents
grOpenIncident.query();
//etc...
