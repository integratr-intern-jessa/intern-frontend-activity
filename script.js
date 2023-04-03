function validate()
{
  var fname = document.registration_form.fname;
  var lname = document.registration_form.lname;
  var uname = document.registration_form.uname;
  if (fname.value.length <= 0)
  {
    alert("First Name is required");
    fname.focus();
    return false;
  }
  if (fname.value.length <= 0)
  {
    alert("Last Name is required");
    lname.focus();
    return false;
  }
  if (uname.value.length <= 0)
  {
    alert("User Name is required");
    uname.focus();
    return false;
  }
  return false;
}

function verifyPassword()
{
	var pass = document.getElementById("pass").value;
	var password = document.getElementById("confirmpass").value;
	const Uppercaseletters = /^(?=.*[A-Z]).*$/;
	const Lowercaseletters = /^(?=.*[a-z]).*$/;
	const Number = /^(?=.*[0-9]).*$/;
	const Symbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;

	if (pass.length < 12)
	{
		document.getElementById("message").innerHTML = "**Password length must be atleast 12 characters";
		return false;
	}
	else if (!Uppercaseletters.test(password))
	{
		alert("**Password should contain uppercase letters.");
	}
	else if (!Lowercaseletters.test(password))
	{
		alert("**Password should contain lowercase letters.");
	}
	else if (!Number.test(password))
	{
		alert("**Password should contain a numbers.");
	}
	else if (!Symbol.test(password))
	{
		alert("**Password should contain symbols.");
	}
	else if (password == "")
	{
		alert("**Please make sure your passwords match.");
	}
	else 
	{
		alert("**Successfully regsitered!")
	}
}