function validateForm() {
	var fName, mName, lName, email;
	fName = document.getElementById("fName");
	mName = document.getElementById("mName");
	lName = document.getElementById("lName");
	email = document.getElementById("email");

	var valid = 0;


	if (fName.value.localeCompare("") == 0)
	{
		valid += 1;
		document.getElementById("fNameText").innerHTML = "*Please enter your first name.";
		fName.style.border = "solid red";
		fName.style.margin = "0px auto 0px"
	}
	else
	{
		document.getElementById("fNameText").innerHTML = "";
		resetStyle(fName);
	}
	if (mName.value.localeCompare("") == 0)
	{
		valid += 1;
		document.getElementById("mNameText").innerHTML = "*Please enter your middle initial.";
		mName.style.border = "solid red";
		mName.style.margin = "0px auto 0px"
	}
	else
	{
		document.getElementById("mNameText").innerHTML = "";
		resetStyle(mName);
	}
	if (lName.value.localeCompare("") == 0)
	{
		valid += 1;
		document.getElementById("lNameText").innerHTML = "*Please enter your last name.";
		lName.style.border = "solid red";
		lName.style.margin = "0px auto 0px"
	}
	else
	{
		document.getElementById("lNameText").innerHTML = "";
		resetStyle(lName);
	}
	if (email.value.localeCompare("") == 0)
	{
		valid += 1;
		document.getElementById("emailText").innerHTML = "*Please enter your email address.";
		email.style.border = "solid red";
		email.style.margin = "0px auto 0px"
	}
	else
	{
		document.getElementById("emailText").innerHTML = "";
		resetStyle(email);
		if (!ValidateEmail(email))
		{
			valid += 1;
		}
	}  

	console.log(valid);
	if (valid == 0)
	{
		alert("Success!");
	}
}

function ValidateEmail(mail) 
{
 if (mail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
  {
    return (true)
  }
  	document.getElementById("emailText").innerHTML = "*Please enter a VALID email address."
    return (false)
}

function resetStyle(text)
{
	text.style.border = "none";
	text.style.margin = "18px auto 0px"
}