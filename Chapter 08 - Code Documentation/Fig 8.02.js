var milSeconds = 3200000;
var weeks = getWeeksFromMS(milSeconds);
function getWeeksFromMS(milSeconds) {
	var seconds = milSeconds * 0.001;
	var minutes = seconds / 60;
	var hours = minutes / 60;
	var days = hours / 24;
	var weeks = days / 7;
	return weeks;
}
