//Only allow admins to see my blue suede shoes
if (!gs.hasRole('admin')) {
	current.addQuery('material', '!=', 'Suede');
}
