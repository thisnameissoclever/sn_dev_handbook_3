var TimeZoneUtils = Class.create();
TimeZoneUtils.prototype = {
	
	/**
	 * Upon initialization, you can pass in a GlideDateTime object you've already created and set to a specific time.
	 * The reference to this object will be used, and your GDT will be modified in-place. Alternatively, you may choose
	 * not to specify a parameter upon initialization, and a new GlideDateTime object will be created, used, and returned
	 * with the current time in the specified time-zone.
	 *
	 * @param {GlideDateTime} [gdt] - A reference to the (optional) GlideDateTime object to be modified IN-PLACE.
	 * If not specified, a new one will be generated, and a reference returned.
	 */
	initialize: function(gdt) {
		if (gdt) {
			this.gdt = gdt;
		} else {
			this.gdt = new GlideDateTime();
		}
	},
	
	/**
	 * Get the GlideDateTime object (as a reference).
	 * This will return a *reference* to the GlideDateTime object. Note that because of JavaScript's
	 * pass-by-reference jive, you should expect that if you set a variable using this method, then
	 * call another method which modifies the GDT object referenced in this class, you will be modifying
	 * the object to which your variable is a reference! In other words, your variable will be modified *in-place*.
	 * @returns {*|GlideDateTime}
	 */
	getGDT: function() {
		return this.gdt;
	},
	
	/* OTHER STUFF HERE - THIS IS JUST AN EXAMPLE */
	
	type: 'TimeZoneUtils'
};
