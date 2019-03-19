//********JS for Clock*******//
'use strict'
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
//***Checks the time for minutes***//
    m = checkTime(m);
//***Checks the time for seconds***//
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//******Registration******//
function confirmform(myForm) {
//RegEx for validating name field. Name can only have alphabets
//minimum 2 letters and maximum 32 letters
//only white spaces are allowed
var regexLetter = /^([a-zA-Z\s]{2,32})$/;
//email regular expression
var regexEmail=/^[a-zA-Z0-9._]+@([a-zA-Z0-9.]+\.)+[a-zA-Z0-9.]{2,4}$/;

var regexNumber=/^([0-9-+]{11})$/;

//checks if the name field has been left blank
if (myForm.txtFirstName.value=="") {
	alert("Please Enter Your First Name");
	myForm.txtFirstName.focus( );
	return false;
}

//checks if the name field has less than 2 letters or if it is not alphabet
if(!regexLetter.test(myForm.txtFirstName.value)){
	alert('Invalid First Name! Please enter atleast 2 alphabets');
	myForm.txtFirstName.focus( );
	return false;
}

//checks if the email address is valid
	if(!regexEmail.test(myForm.txtemail.value)) {
	alert("Please Enter Valid Email Address");
	myForm.txtemail.focus( );
	return false;
}

//Checks if 11 numbers are entered
if(!regexNumber.test(myForm.txtNumber.value)) {
	alert('Please Enter At Least 11 numbers for your contact number');
	myForm.txtNumber.focus( );
	return false;
}	

}
