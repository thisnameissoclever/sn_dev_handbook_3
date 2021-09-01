if (validateRecord(record)) {
	updateRecord(record);
}

function validateRecord(record) {
	return record.isValid() && record.getValue('active') === 'true';
}

function updateRecord(record) {
	if (record.update('reason for update')) {
		return true;
	}
	return false;
}
