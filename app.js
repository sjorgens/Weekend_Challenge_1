var array = [];
var totalMonthlySalaries = 0;

$(document).ready(function(){
	$("#employeeinfo").on('submit',function(event){
		event.preventDefault();

		var values = {};

		$.each($("#employeeinfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		})
		
		$("#employeeinfo").find("input[type=text]").val("");
		$("#employeeinfo").find("input[type=number]").val("");
		$("#employeefirstname").focus();

		// Append newly created Object to DOM
		appendDom(values);


		// Push newly created Object to global array
		array.push(values);

		// Calculate Totaly Monthly Salaries
		totalMonthlySalaries = calcSalary(array);

		// Report back to current user 'Total Monthly Cost of Salaries'
		alert("Current total monthly cost of salaries: $" + totalMonthlySalaries);
	});
});

////////////////  APPEND USER ENTRIES TO THE DOM  ///////////////////
function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>" + object.employeefirstname + ", " + object.employeelastname + ", " + object.employeenumber + ", " + object.employeejobtitle + ", " + object.employeesalary + "</p>");
	
	// $el.append("<p>" + object.employeefirstname + "</p>");
	// $el.append("<p>" + object.employeelastname + "</p>");
	// $el.append("<p>" + object.employeenumber + "</p>");
	// $el.append("<p>" + object.employeejobtitle + "</p>");
	// $el.append("<p>" + object.employeesalary + "</p>");
}

////////////////  CALCULATE TOTAL MONTHLY SALARIES  //////////////////
function calcSalary(empArray){
	var MonthlySalaries = 0;

	for (var i = 0; i < empArray.length; i++){
		MonthlySalaries += parseInt(empArray[i].employeesalary)/12;
	}
	return Math.round(MonthlySalaries);
}