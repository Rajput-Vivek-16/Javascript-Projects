## Loop in JavaScript

**Definition:** A loop is a programming construct that repeats a block of code as long as a specified condition is true. Loops are essential for automating repetitive tasks and efficiently handling collections of data.

### For Loop

**Definition:** The `for` loop is used to repeat a block of code a known number of times. It consists of three parts: initialization, condition, and increment/decrement.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    // Code to be executed
}
```

**Example:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}
```

### While Loop

**Definition:** The `while` loop repeats a block of code as long as the specified condition is true. It is suitable when the number of iterations is not known beforehand.

**Syntax:**
```javascript
while (condition) {
    // Code to be executed
}
```

**Example:**
```javascript
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}
```

### Do-While Loop

**Definition:** The `do-while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once. The condition is evaluated after the execution of the code block.

**Syntax:**
```javascript
do {
    // Code to be executed
} while (condition);
```

**Example:**
```javascript
let i = 0;
do {
    console.log(i); // Output: 0 1 2 3 4
    i++;
} while (i < 5);
```

### Nested Loops

**Definition:** Nested loops are loops within loops. The inner loop is executed completely for each iteration of the outer loop.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    for (initialization; condition; increment/decrement) {
        // Code to be executed
    }
}
```

**Example:**
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
        // Output:
        // i = 1, j = 1
        // i = 1, j = 2
        // i = 1, j = 3
        // i = 2, j = 1
        // i = 2, j = 2
        // i = 2, j = 3
        // i = 3, j = 1
        // i = 3, j = 2
        // i = 3, j = 3
    }
}
```

### Loop Control Statements

**Definition:** Loop control statements are used to change the execution flow of loops. Common control statements include `break` and `continue`.

#### Break Statement

**Definition:** The `break` statement terminates the loop immediately and transfers control to the statement following the loop.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    if (condition) {
        break;
    }
    // Code to be executed
}
```

**Example:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i); // Output: 0 1 2 3 4
}
```

#### Continue Statement

**Definition:** The `continue` statement skips the current iteration of the loop and proceeds to the next iteration.

**Syntax:**
```javascript
for (initialization; condition; increment/decrement) {
    if (condition) {
        continue;
    }
    // Code to be executed
}
```

**Example:**
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Output: 0 1 2 3 4 6 7 8 9
}
```

These definitions and syntax examples cover the most common types of loops and their control statements in JavaScript.