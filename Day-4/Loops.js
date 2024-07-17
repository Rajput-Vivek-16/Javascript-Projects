//-------------------------------------- For Loop -----------------

// Print numbers from 1 to 10 using a for loop
for (let i = 1; i <= 10; ++i) {
    console.log(i); // Output: 1 2 3 4 5 6 7 8 9 10
}

// Print the multiplication table of 5 using a loop
for (let i = 1; i <= 10; ++i) {
    console.log(`5 * ${i} = ${5 * i}`); 
    // Output: 
    // 5 * 1 = 5
    // 5 * 2 = 10
    // 5 * 3 = 15
    // 5 * 4 = 20
    // 5 * 5 = 25
    // 5 * 6 = 30
    // 5 * 7 = 35
    // 5 * 8 = 40
    // 5 * 9 = 45
    // 5 * 10 = 50
}



//-------------------------------------- While Loop ----------------

// Calculate the sum of numbers from 1 to 10 using a while loop
var number = 1;
let sum = 0;
while (number <= 10) {
    sum += number;
    number++;
}
console.log(sum); // Output: 55

// Print numbers from 10 to 1 using a while loop
let num = 10;
while (num > 0) {
    console.log(num); // Output: 10 9 8 7 6 5 4 3 2 1
    num--;
}



//----------------------------------- Do-While Loop ----------------

// Print numbers from 1 to 5 using a do-while loop
let n = 1;
do {
    console.log(n); // Output: 1 2 3 4 5
    n++;
} while (n <= 5);

// Calculate the factorial of a number using a do-while loop
var number = 5;
let factorial_value = 1;
do {
    factorial_value *= number;
    number--;
} while (number > 0);
console.log(`Factorial of 5 is ${factorial_value}`); // Output: Factorial of 5 is 120



//---------------------------------- Nested Loops ------------------

// Print left triangle using a nested for loop
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row); 
    // Output:
    // * 
    // * * 
    // * * * 
    // * * * * 
    // * * * * * 
}

// Print left triangle using a for loop
let row = '';
for (let i = 1; i <= 5; i++) {
    row += '* ';
    console.log(row); 
    // Output:
    // * 
    // * * 
    // * * * 
    // * * * * 
    // * * * * * 
}



//---------------------------- Loop Control Statements --------------

// Print 1 to 10, but skip the loop when the number is 5 using the continue statement
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); 
    // Output: 1 2 3 4 6 7 8 9 10
}

// Print 1 to 10, but stop the loop when the number is 7 using the break statement
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i); 
    // Output: 1 2 3 4 5 6
}
