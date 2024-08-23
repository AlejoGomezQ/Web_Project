
document.getElementById('loginForm').addEventListener('submit', function(event) {
    
    event.preventDefault();
    
  
    var emailInput = document.getElementById('email');
    var emailValue = emailInput.value;
    var emailError = document.getElementById('emailError');

    
    var passwordInput = document.getElementById('password');
    var passwordValue = passwordInput.value;
    var passwordError = document.getElementById('passwordError');

    

    
    var emailPattern = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

   
    var formIsValid = true;

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

    
    if (formIsValid) {
        document.getElementById('login-button').addEventListener('click', function(event){
            window.location.href = 'index.html';
        });
    }
});

