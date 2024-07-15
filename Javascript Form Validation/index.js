// Function to display error messages
const displayError = function (id, error) {
    let element = document.querySelector(`#${id}`);
    element.innerText = error;
};

// Name validation function
const validateName = function () {
    let name = document.forms['signup-form']['username'].value;
    if (name.length < 5) {
        displayError('name-error', "Name must be more than 4 characters");
        return false;
    } else {
        displayError("name-error", "");
        return true;
    }
};

// Email validation function
const validateEmail = function () {
    let email = document.forms['signup-form']['Email'].value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        displayError("email-error", "Please enter a valid email address");
        return false;
    } else if (email.length > 40) {
        displayError("email-error", "Email must be less than 40 characters");
        return false;
    } else if (email.length === 0) {
        displayError("email-error", "Fill Email ID");
        return false;
    } else {
        displayError("email-error", "");
        return true;
    }
};

// Phone Number validation function
const validatePhoneNumber = function () {
    let phoneNumber = document.forms['signup-form']['phoneNumber'].value;

    if (isNaN(phoneNumber)) { // Check if phone number is a number
        displayError("phoneNumber-error", "Phone Number must be a number");
        return false;
    } else if (phoneNumber.length !== 10) { // Check if phone number length is 10 digits
        displayError("phoneNumber-error", "Phone Number must be a 10-digit number");
        return false;
    } else {
        displayError("phoneNumber-error", "");
        return true;
    }
};

// Password validation function
const validatePassword = function () {
    let phoneNumber = document.forms['signup-form']['phoneNumber'].value;
    let name = document.forms['signup-form']['username'].value;
    let password = document.forms['signup-form']['password'].value;
    if (password === name || password === phoneNumber || password === "123456789") {
        displayError("password-error", "Password must be strong");
        return false;
    } else if (password.length < 8) {
        displayError("password-error", "Password must be at least 8 characters");
        return false;
    } else {
        displayError("password-error", "");
        return true;
    }
};

// Confirm password validation function
const validateConfirmPassword = function () {
    let password = document.forms['signup-form']['password'].value;
    let confirmPassword = document.forms['signup-form']['confirmPassword'].value;
    if (confirmPassword !== password) {
        displayError("confirmPassword-error", "Passwords must match");
        return false;
    } else {
        displayError("confirmPassword-error", "");
        return true;
    }
};

// Function to switch the visibility of a password between visible and hidden states
function togglePasswordVisibility(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}

// Main form validation function
const validateForm = function () {
    let returnVal = true;

    // Run individual validation functions
    if (!validateName()) returnVal = false;
    if (!validateEmail()) returnVal = false;
    if (!validatePhoneNumber()) returnVal = false;
    if (!validatePassword()) returnVal = false;
    if (!validateConfirmPassword()) returnVal = false;

    return returnVal;
};

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("#name").addEventListener('input', validateName);
    document.querySelector("#email").addEventListener('input', validateEmail);
    document.querySelector("#num").addEventListener('input', validatePhoneNumber);
    document.querySelector("#password").addEventListener('input', validatePassword);
    document.querySelector("#confirmPassword").addEventListener('input', validateConfirmPassword);
});
