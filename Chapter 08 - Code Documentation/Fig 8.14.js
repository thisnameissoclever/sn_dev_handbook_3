//Group: ServiceNow Dev Team
var assignmentGroup = 'fe7204496fd15e00b7e659212e3ee4e1';
//Assignee: John D Smith
var assignee = '536968cd6f9b21008ca61e250d3ee4d1';
var incidentQuery = 'active=true^assignment_group=' + assignmentGroup + '^additional_assignee_listLIKE' + assignee;

gr.addEncodedQuery(incidentQuery);
