
  const form = document.getElementById('form')
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
  });
  const setError = (element, message) => {
      const inputControl = element.parentElement;
      const errorDisplay = inputControl.querySelector('.error');

      errorDisplay.innerText = message;
      inputControl.classList.add('error');
      inputControl.classList.remove('success');
  }

  const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');;
  }

  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



  const validateInputs = () => {
    const firstNameValue = document.getElementById("first-name").value.trim();
    console.log(firstName)
    const lastNameValue = document.getElementById("last-name").value.trim();
    console.log(lastName)
    const emailValue = document.getElementById("email").value.trim();
    console.log(email)
    const passwordValue = document.getElementById("password").value.trim();
    console.log(password)

    if (firstNameValue === ''){
      setError(firstName, 'first name can not be empty');
    }else {
      setSuccess(firstName);
    }

    if (lastNameValue === ''){
      setError(lastName,'last name can not be empty');
    } else {
      setSuccess(lastName);
    }

    if(emailValue === ''){
      setError(email,'email is required');
    } else if (!isValidEmail(emailValue)){
      setError(email, 'Looks like this is not an email');
    }else {
      setSuccess(email);
    }

    if (passwordValue === ''){
      setError(password,'password can not be empty');
    }else if (passwordValue.length < 8){
      setError(password, 'password must be atleast 8 characters');

    }else {
      setSuccess(password);
    }
   }


  
  