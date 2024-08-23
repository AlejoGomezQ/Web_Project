document.getElementById('Signin-Form').addEventListener('submit', function(event) {
    event.preventDefault();

    let signinContainer = document.getElementById('signin-container');

   
    let passwordInput = document.getElementById('password');
    let passwordValue = passwordInput.value;
    let confirmPassword = document.getElementById('confirm-password');
    let confirmPassValue = confirmPassword.value;

    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value;

    let nameInput = document.getElementById('name');
    let nameValue = nameInput.value;
    let nameError = document.getElementById('nameError');

    let lastnameInput = document.getElementById('lastname');
    let lastnameValue = lastnameInput.value;
    let lastnameError = document.getElementById('lastnameError');

  
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');
    let confirmPassError = document.getElementById('confirmPasswordError');

   
    let formIsValid = true;

    
    let emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  
    if(nameValue.length < 1){
        nameError.style.display = 'block';
        nameInput.classList.add('input-error');
        formIsValid = false;
    } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('input-error');
    }

 
    if(lastnameValue.length < 1) {
        lastnameError.style.display = 'block';
        lastnameInput.classList.add('input-error');
        formIsValid = false;
    } else {
        lastnameError.style.display = 'none';
        lastnameInput.classList.remove('input-error');
    }

    
    if (!emailPattern.test(emailValue)) {
        emailError.style.display = 'block';
        emailInput.classList.add('input-error');
        formIsValid = false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('input-error');
    }

   
    if (passwordValue.length < 6) {
        passwordError.style.display = 'block';
        passwordInput.classList.add('input-error');
        formIsValid = false;
    } else {
        passwordError.style.display = 'none';
        passwordInput.classList.remove('input-error');
    }

    
    if (confirmPassValue !== passwordValue) {
        confirmPassError.style.display = 'block';
        confirmPassword.classList.add('input-error');
        formIsValid = false;
    } else {
        confirmPassError.style.display = 'none';
        confirmPassword.classList.remove('input-error');
    }
    if(formIsValid = false){
        signinContainer.style.height('800px');
    }

    
    if (formIsValid) {
        window.location.href = 'index.html'; 
    }
});
