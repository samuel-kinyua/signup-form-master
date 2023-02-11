
function checkForBlank() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var isValid = true;

  // check if first name is empty
  if (firstName === "") {

    document.getElementById("first-name-message").innerHTML = "First name is required";
    isValid = false;
  } else {
    document.getElementById("first-name-message").innerHTML = "";
  }

  // check if last name is empty
  if (lastName === "") {
    document.getElementById("last-name-message").innerHTML = "Last name is required";
   
    isValid = false;
  } else {
    document.getElementById("last-name-message").innerHTML = "";
  }

  // check if email is empty or invalid
  if (email === "") {
    document.getElementById("email-message").innerHTML = "Email is required";
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById("email-message").innerHTML = "Invalid email address";
    isValid = false;
  } else {
    document.getElementById("email-message").innerHTML = "";
  }

  // check if password is empty
  if (password === "") {
    document.getElementById("password-message").innerHTML = "Password is required";
    isValid = false;
  } else {
    document.getElementById("password-message").innerHTML = "";
  }

  return isValid;
}

function isValidEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[
if (fname == '' || fname == Number){
    alert("please enter your first name")

}
return false;
}
