if (!g_form.getValue('needs_repair') && !g_form.getValue('needs_replacement')) {
	g_form.showFieldMsg(
		'additional_info',
		'Please clarify what action is required',
		'info',
		false
	);
}
