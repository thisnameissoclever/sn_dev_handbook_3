var grIncident = new GlideRecord('incident');
var encodedQuery = 'some_encoded_query_here';
grIncident.addEncodedQuery(encodedQuery);
grIncident.query();
while (grIncident.next()) {
	grIncident.setValue('state', 3); //Set state to work in progress
	grIncident.update();
}

//lather, rinse, repeat
var grProblem = new GlideRecord('problem');
var encodedQuery = 'some_encoded_query_here';
grProblem.addEncodedQuery(encodedQuery);
grProblem.query();
while (grProblem.next()) {
	grProblem.setValue('state', 4); //set state to some other state
	grProblem.update();
}

//lather, rinse, repeat
var grChange = new GlideRecord('change_request');
var encodedQuery = 'some_encoded_query_here';
grChange.addEncodedQuery(encodedQuery);
grChange.query();
while (grChange.next()) {
	grChange.setValue('state', 5); //always specify what the integer corresponds to when setting state
	grChange.update();
}
//[and so on…]

/* AUTHOR'S NOTE
Fig. 1.03: Inefficiently written, non-"DRY" code
	Note that this code assumes that it's being run three different times or in three
	 different scopes, because the variable encodedQuery is re-declared (using the
	 keyword "var").
	"Declaring" a variable means to tell the scope engine that it exists, usually by
	 using the "var" keyword. This is different from "initializing" the variable,
	 which sets it to a value; however, both declaring and initializing can be done
	 on the same line. For example:
	var a = 'b';
	"var a;" declares the variable, and "a = 'b';" initializes it, but above,
	 we've done both on a single line.
	A single variable should never be declared twice in the same scope. This is one of
	 the reasons that you should avoid declaring variables inside of loops (such as
	 "while" loops); instead, hoisting your variable declarations to the top of your
	 function scope is ideal in most cases, even if they aren't initialized until the
	 first iteration of that loop.
 */