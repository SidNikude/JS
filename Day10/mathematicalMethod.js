// Mathematical methods
// The syntax for Math any methods is : Math.method(number)

// Number to Integer
// There are 4 common methods to round a number to an integer:

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)


// 1. Math.round() : rounds a number to the nearest integer
// Math.round(x) returns the nearest integer:
console.log("--------------------------------------------------");
console.log("Math.round() Method");
console.log(Math.round(12.6129)); // 13
console.log(Math.round(12.5129)); // 13
console.log(Math.round(12.4929)); // 12

// 2. Math.floor(): returns largest integer less than or eaqual to a given number
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log("--------------------------------------------------");
console.log("Math.floor() Method ");
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.4)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(-4.2)); // -5
// console.log("");


// 3. Math.ceil(): returns the value of x rounded up to its nearest integer: 
console.log("--------------------------------------------------");
console.log("Math.ceil() Method ");
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.4)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.ceil(-4.2)); // -4

// 4. Math.trunc() : rounds a number to the nearest integer
// Math.trunc(x) returns the nearest integer:
console.log("--------------------------------------------------");
console.log("Math.trunc() Method");
console.log(Math.trunc(12.6129)); // 12
console.log(Math.trunc(12.5129)); // 12
console.log(Math.trunc(12.4929)); // 12