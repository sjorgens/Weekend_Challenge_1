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

	//  Remove employee info from HTML
	$("#container").on('click', '.button', delEmployee);

});

////////////////  APPEND USER ENTRIES TO THE DOM  ///////////////////
function appendDom(object){
	$("#container").append("<div></div>");
	var $el = $("#container").children().last();

	$el.append("<p>First Name: " + object.employeefirstname + "<br>Last Name: " + object.employeelastname + "<br>Employee #: " + object.employeenumber + "<br>Title: " + object.employeejobtitle + "<br>Annual Salary: " + object.employeesalary + "<br><button class= 'button'>" + "Remove " + object.employeefirstname + " " + object.employeelastname + "</button>" + "</p>");

}

////////////////  CALCULATE TOTAL MONTHLY SALARIES  //////////////////
function calcSalary(empArray){
	var MonthlySalaries = 0;

	for (var i = 0; i < empArray.length; i++){
		MonthlySalaries += parseInt(empArray[i].employeesalary)/12;
	}
	return Math.round(MonthlySalaries);
}

////////  REMOVE THE BUTTON AND ITS PARENT ELEMENT FROM HTML  /////////
function delEmployee(){
	$(this).parent().remove();
}