var grAdminRole = new GlideRecord('sys_user_role');
grAdminRole.addQuery('name', 'admin');
grAdminRole.setLimit(1);
grAdminRole.query();
if (grAdminRole.next()) {
	grAdminRole.setValue('elevated_privilege', true);
	grAdminRole.update();
}
