var i, grRecord, stateChange, stateChangeDetails = [ //An array of objects
	{
		table_name: 'incident',
		encoded_query: 'some_query',
		state_value:   3
	},
	{
		table_name: 'problem',
		encoded_query: 'some_other_query',
		state_value:   4
	},
	{
		table_name: 'change_request',
		encoded_query: 'yet_a_third_query',
		state_value:   5
	}
];

for (i = 0; i < stateChangeDetails.length; i++) {
	stateChange = stateChangeDetails[i];
	grRecord = new GlideRecord(stateChange.table_name);
	grRecord.addEncodedQuery(stateChange.encoded_query);
	grRecord.query();
	while (grRecord.next()) {
		//set state to work in progress
		grRecord.setValue('state', stateChange.state_value);
		grRecord.update();
	}
}