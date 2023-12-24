// ES6 Rest Operator

// Rest parameter is a feature introduced in ES6 that allows functions to accept and indefinite number of arguments as an array.

// It is denoted by three dots (...) followed by a parameter name.

// Note : The rest parameter has to be the last argument, as its job is to collect all the remaining arguments into an array.

// -------------- Example 1 ------------------
// const greetPeople = (greetings, ...names)=>{
//     names.forEach((name)=>{
//         console.log(`${greetings}, ${name}!`);
//     });
// };

// greetPeople("Hello", "Arjun", "Bheem", "Nakul");

// O/P -->
// Hello, Arjun!
// Hello, Bheem!
// Hello, Nakul!


// -------------- Example 2 ------------------

// function printNumbers(...numbers){
//     console.log(numbers);
// }

// printNumbers(1, 2, 3, 4, 5);
// O/P --->  [ 1, 2, 3, 4, 5 ]

// printNumbers(10, 20);
// O/P --->  [ 10, 20 ]

// printNumbers();
// O/P ---> [] // Empty array if no arg

// -------------- Example 3 ------------------

// function fun(...input){
//     let sum = 0;
//     for (let i of input){
//         sum += i;
//     }
//     return sum;
// }
// console.log(fun(1,2)); // 3
// console.log(fun(1, 2, 3)); // 6
// console.log(fun(1, 2, 3, 4, 5)); // 15


//  Key points :

// Variable Arguments : The rest oprator allows a function to accept an arbitrary number of arguments as an array.

// Empty Rest Parameter : If no arguments are passed to the function, the rest parameter will be an empty array.
//  No limitations on the Number of Arguments.

// Optional Usage : The rest parameter can be used alongside other named parameters, but it should be the last parameter in the function's parameter list.

// Array-Like Object : When the function is called, the rest parameter collects all the remaining arguments into an array-like object called the "arguments" object.

