// Get references to number buttons
const doubleZero = document.querySelector(".double-zero");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

// Get references to operation buttons
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const remainder = document.querySelector(".percent");
const decimal = document.querySelector(".dot");

// Get references to input and control buttons
const userInput = document.querySelector('#userInput');
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");
const output = document.querySelector(".output");


// Function to insert value into the input field when a number button is clicked
function insertValue(data) {
    return function () {
        userInput.value += data;
    }
}

// Function to validate and update the input field when an operation button is clicked
function validate(data) {
    let previousInput = userInput.value;
    let length = userInput.value.length;
    let lastChar = userInput.value.slice(length - 1);
    // Check if the last character is an operator
    if ("+-*/.%".includes(lastChar)) {
        // If the same operator is clicked consecutively, do nothing
        if (data === lastChar) {
            userInput.value += '';
        } else {
            // Replace the last operator with the new one
            userInput.value = previousInput.slice(0, -1) + data;
        }
    } else {
        // Append the operator to the input
        userInput.value += data;
    }
};

// Function to evaluate the input expression and display the result
function evaluateExpression() {
    try {
        let result = eval(userInput.value);
        // Check if the result is valid
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid result");
        }
        // Display the result
        userInput.value = result;
    } catch (error) {
        // Display an error message for invalid expressions
        userInput.value = "Error";
    }
}


// Add event listeners to number buttons
doubleZero.addEventListener('click', insertValue("00"));
zero.addEventListener('click', insertValue("0"));
one.addEventListener('click', insertValue("1"));
two.addEventListener('click', insertValue("2"));
three.addEventListener('click', insertValue("3"));
four.addEventListener('click', insertValue("4"));
five.addEventListener('click', insertValue("5"));
six.addEventListener('click', insertValue("6"));
seven.addEventListener('click', insertValue("7"));
eight.addEventListener('click', insertValue("8"));
nine.addEventListener('click', insertValue("9"));

// Add event listeners to operation buttons
add.addEventListener('click', () => { validate("+") });
subtract.addEventListener('click', () => { validate("-") });
multiply.addEventListener('click', () => validate("*"));
divide.addEventListener('click', () => { validate("/") });
remainder.addEventListener('click', () => { validate("%") });
decimal.addEventListener('click', () => { validate(".") });

// Add event listener to delete button
del.addEventListener("click", () => {
    userInput.value = userInput.value.slice(0, -1);
});

// Add event listener to clear button
clear.addEventListener("click", () => {
    userInput.value = "";
});

// Add event listener to output button to evaluate the expression
output.addEventListener("click", () => {
    evaluateExpression();
});


// Add event listener to handle keyboard input
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if ("0123456789".includes(key)) {
        // Prevent default action and append number to input field
        event.preventDefault();
        userInput.value += key;
    } else if (key === "c" || key === "C") {
        // Clear input field
        event.preventDefault();
        userInput.value = "";
    } else if (key === "Delete" || key === "Backspace") {
        // Delete the last character from input field
        userInput.value = userInput.value.slice(0, -1);
    } else if (key === "Enter") {
        // Evaluate the expression on pressing Enter
        try {
            userInput.value = eval(userInput.value);
        } catch (error) {
            userInput.value = "Error";
        }
    }
});
