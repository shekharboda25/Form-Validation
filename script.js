An event when the form is submitted should also be handled in detail so that it behaves correctly when the user makes an attempt to send the form. In the case when the user clicks on submit, the form should not be sent and event.preventDefault should be called. 

const form = document.getElementById('myForm');

const fullNameInput = document.getElementById('fullName');

const emailInput = document.getElementById('email');

const phoneNumberInput = document.getElementById('phoneNumber');

const passwordInput = document.getElementById('password');

const confirmPasswordInput = document.getElementById('confirmPassword');



The event listener method takes two parameters, first the event which needs to be listened to and the second is a callback function that is invoked when the event such as on click occurs. 

form.addEventListener('submit', (event) => {\n\n\n event.preventDefault(); 

form.addEventListener('submit', (event) => {

    event.preventDefault(); 

    Firstly let’s assume that the user did not enter the required fields correctly, let’s say it was the full name. And we just need to validate whether the full name has minimum five characters or not. So in this input field if there are more than 5 characters we display the error message and also add a class. If the input is empty then we remove the class and keep the error text also empty. 
    if (!validateFullName(fullNameInput.value)) {

        fullNameError.textContent = 'Full Name must be at least 5 characters';

        fullNameInput.classList.add('is-invalid');

    } else {

        fullNameError.textContent = '';

        fullNameInput.classList.remove('is-invalid');

    }



Now, let’s check all the fields one by one, starting from the full name, then moving on to the email address, and phone number. 

if (validateFullName(fullNameInput.value) && 

    validateEmail(emailInput.value) && 

    validatePhoneNumber(phoneNumberInput.value) && 

    validatePassword(passwordInput.value) && 

    validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {

        form.submit();

        }

});

// Validation functions

function validateFullName(name) {

    return name.length >= 5;

}

function validateEmail(email) {

    return email.includes('@');

}

function validatePhoneNumber(phoneNumber) {

    return phoneNumber.length === 10 && phoneNumber !== '123456789';

}

function validatePassword(password) {

    return password.length >= 8 && password !== 'password' && password !== 'name of the user';

}

function validateConfirmPassword(password, confirmPassword) {

    return password === confirmPassword;

}

