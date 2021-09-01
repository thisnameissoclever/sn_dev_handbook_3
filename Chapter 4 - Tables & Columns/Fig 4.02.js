var currentState = parseInt(current.getValue('state'));
if (currentState === new MyTaskStates().ON_HOLD ||
	currentState === new MyTaskStates().PENDING) {
	//do something when task is on hold
}
