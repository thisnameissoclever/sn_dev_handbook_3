changeState('incident', 3, 'some_query');
changeState('problem', 4, 'some_other_query');
changeState('change_request', 5, 'third_query');

/**
 * Update the state of all records in the provided table, which match the provided encoded query.
 * @param {string} tableName - The name of the table to run this operation against
 * @param {string|number} newState - The new value for the state field. This may be an integer or string, depending on the value expected by the table provided.
 * @param {string} [encodedQuery] - A string containing the encoded query to filter the records on which to perform this operation. If no query is provided, ALL records in the table will be modified.
 * @return {number} - The number of records on which this operation was performed.
 */
function changeState(tableName, newState, encodedQuery) {
	var grRecord = new GlideRecord(tableName);
	if (encodedQuery) {
		grRecord.addEncodedQuery(encodedQuery);
	}
	
	grRecord.setValue('state', newState); //set state to work in progress
	grRecord.updateMultiple();
	
	return grRecord.getRowCount();
}