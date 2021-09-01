function getTransformedFieldVals(grIncident) {
	var sourceFieldName, targetFieldName, sourceFieldVal;
	var mappedValues = {};
	var gsEval = new GlideScopedEvaluator();
	var grExportMap = new GlideRecord(
		'x_13231_hb3_rec_sc_inc_export_map'
	);
	grExportMap.addActiveQuery();
	grExportMap.query();
	while (grExportMap.next()) {
		sourceFieldName = grExportMap.getValue('source_field_name');
		targetFieldName = grExportMap.getValue('target_field_name');
		sourceFieldVal = grIncident.getValue(sourceFieldName);
		//If scripted transform isn't necessary, just set
		// target value from source value & continue.
		if (grExportMap.getValue('use_transform') != '1') {
			mappedValues[targetFieldName] = sourceFieldVal;
			continue; //Continue to next loop iteration.
		}
		mappedValues[targetFieldName] = gsEval.evaluateScript(
			grExportMap, //GR for map record
			'transform_script', //Script field,
			{ //Variables to be accessible within the script
				'current': grIncident,
				'sourceFieldName': sourceFieldName,
				'sourceFieldValue': sourceFieldVal,
				'targetFieldName': targetFieldName
			}
		);
	}
	return mappedValues;
}
