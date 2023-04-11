const form = document.querySelector('form');
const button = document.querySelector('button');

button.addEventListener('click', function(checkInputs) {
	checkInputs.preventDefault();

	const inputs = form.querySelectorAll('input');
	const inputValues = {};

	inputs.forEach(function(input) {
		inputValues[input.id] = input.value;
	});
	const required = ["firstname", "lastname", "username","password", "confirmpassword"];
	let isinputfieldValid = true;

	required.forEach(function(fieldName) {
		const fieldValues = inputValues[fieldName];

		if (!fieldValues || fieldValues.trim() === '') {
			alert(`The ${fieldName} must be filled.`);
			isinputfieldValid = false;
		}
	});

	if (isinputfieldValid) {
		const password = inputValues['password'];
		const confirmpassword = inputValues['confirmpassword'];
	
		if (password !== confirmpassword) {
		  alert('Password does not match.');
		  isinputfieldValid = false;
		}
		else if (password.length < 14 || !password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{14,}$/)) {
			alert('Password must contains: 14 characters, uppercase letter, lowercase letter, number, and symbol.');
			isinputfieldValid = false;
    }
	  }
	if (isinputfieldValid  ) {
		form.submit();
	}
});


var myInput = document.getElementById("password");
var length = document.getElementById("length");
var lowercase = document.getElementById("lowercase");
var uppercase = document.getElementById("uppercase");
var numbers = document.getElementById("numbers");
var symbol = document.getElementById("symbol");

myInput.onfocus =function(){
	document.getElementById("validation").style.display="block";
}

myInput.onblur = function(){
	document.getElementById("validation").style.display="none";
}

myInput.onkeyup = function(){

	var lowerCase = /[a-z]/g;

	if(myInput.value.match(lowerCase)){
		lowercase.classList.remove("invalid");
		lowercase.classList.add("valid");
	}
	else {
		lowercase.classList.remove("valid");
		lowercase.classList.add("invalid");
	}

	var upperCase = /[A-Z]/g;

	if(myInput.value.match(upperCase)){
		uppercase.classList.remove("invalid");
		uppercase.classList.add("valid");
	}
	else {
		uppercase.classList.remove("valid");
		uppercase.classList.add("invalid");
	}

	var Numbers = /[0-9]/g;

	if(myInput.value.match(Numbers)){
		numbers.classList.remove("invalid");
		numbers.classList.add("valid");
	}
	else {
		numbers.classList.remove("valid");
		numbers.classList.add("invalid");
	}

	var Symbols = /[!@#$%^&*]/g;

	if(myInput.value.match(Symbols)){
		symbol.classList.remove("invalid");
		symbol.classList.add("valid");
	}
	else {
		symbol.classList.remove("valid");
		symbol.classList.add("invalid");
	}


	if(myInput.value.length>=14){
		length.classList.remove("invalid");
		length.classList.add("valid");
	}
	else {
		length.classList.remove("valid");
		length.classList.remove("invalid");
	}

}