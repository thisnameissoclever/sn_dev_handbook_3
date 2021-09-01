validateRecord(record);

function validateRecord(record) {
	var recordIsValid = record.isValid() && record.active;
	if (recordIsValid) {
		updateRecord(record);
	}
}
function updateRecord(record) {
	if (record.update('something')) {
		return true;
	}
}
