var MyTaskStates = Class.create();
MyTaskStates.prototype = {
	initialize: function() {
		this.DRAFT = -1;
		this.NEW = 1;
		this.WORK_IN_PROGRESS = 2;
		this.ON_HOLD = 3;
		this.PENDING = 4;
		this.COMPLETE = 7;
		this.CANCELLED = 8;
	},
	
	type: 'MyTaskStates'
};
