createHRCase(current);

function createHRCase(current) {
	var hrFieldName, hrFieldValue, hrCaseID, hrCaseNumber;
	/**
	 * Key: field name on the sn_hr_core_case table.
	 * Value: Value to put into the field in the key.
	 * @type {{}}
	 */
	var fieldMap = {
		'hr_service' : '607e03320b30220097432da0d5673a23', //Some generic HR service
		'short_description' : current.getValue('short_description'),
		'description' : 'Transferred from Incident ' +
			current.getValue('number') + '\n' + current.getValue('description'),
		'skills' : 'b0370019f22120047a2d126c42e706f', //"HR"
		'parent' : current.getUniqueValue()
	};
	var grHRCase = new GlideRecord('sn_hr_core_case');
	
	grHRCase.initialize();
	for (hrFieldName in fieldMap) {
		if (!fieldMap.hasOwnProperty(hrFieldName)) {
			//Avoid iterating into inherited/prototype properties
			continue;
		}
		hrFieldValue = fieldMap[hrFieldName];
		grHRCase.setValue(hrFieldName, hrFieldValue);
	}
	grHRCase.insert(); //Ignores ACLs
	
	gs.addInfoMessage('HR case ' + grHRCase.getValue('number') + ' created.');
}
