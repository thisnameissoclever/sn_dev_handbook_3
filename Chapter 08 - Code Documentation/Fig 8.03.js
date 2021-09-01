var milSeconds = 3200000; //3.2 million milliseconds
var weeks = getWeeksFromMS(milSeconds);

function getWeeksFromMS(milSeconds) {
	/*Multiply by 0.001 to get seconds, divide by 60 to
	get minutes, 60 again to get hours, then by 24 to
	get days, and by 7 to get weeks, which we return.*/
	return milSeconds * 0.001 / 60 / 60 / 24 / 7;
}
