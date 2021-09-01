if (!needsRepairOrReplacement()) {
	g_form.showFieldMsg(
		'additional_info',
		'Please clarify what action is required',
		'info',
		False
	);
}

function needsRepairOrReplacement() {
	return (
		g_form.getValue('needs_repair') !== '' ||
		g_form.getValue('needs_replacement') !== ''
	);
}
