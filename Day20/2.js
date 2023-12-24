// ================= variable hoisting ======================

// JavaScript hoisting is a behaviour in which variable and function declaration are moved to the top of their containing scope during the compilation phase and before code is executed.

// This allows you to use variable and functions before they are actually declared in the code.

// =================== Hoisting of variable declaration theory ============================

// In the case of variable declarations, only the declaration is hoisted not the initialisation.

// This means that the variable name is brought to the top of scope, but its value is not assigned until the actual line of code where the variable is initialised.

// =================== Hoisting of variable declaration code ============================
// console.log(x); // undefined
// var x = 2;
// console.log(x); // 2

// Explanation
// In this example variable x is declared using var.
// During compilation, the declaration var x; is moved to the top of the scope.\
// The first console.log(x) prints undefined because the variable is declared but not yet assigned a value.
// The assignment x=2; happens later, and the second console.log(x); prints 2.


// =================== Hoisting of function declaration theory ============================
// Function declarations in JavaScript are hoisted to the top of their containing scope.
// This means that you can call a function before its actual declaration in the code, and it will still work as expected.

// =================== Hoisting of function declaration code ============================

// sayHello(); // Hello, World!

// function sayHello(){
//     console.log("Hello, World!");
// }

// In this example, the function sayHello is declared.
// During compilation, the entire function declaration is moved to the top of the scope.
// Calling sayHello() before its declaration works due to hoisting.

// =================== Function expression and hoisting theory ============================

// In JavaScript function expression are not hoisted in the same way that function declarations are.

// =================== Function expression and hoisting code ============================

// sayHello(); // Error : sayHello is not a function
// var sayHello = function (){
//     console.log("Hello, World!");
// }

// A variable sayHello is declared using var, but its assigned to a function expression.
// During compilation, only the variable declaration var sayHello; is hoisted, not the assignment.
// When sayHello() is called before the assignment, it throws an error since sayHello is not yet assigned as a function.

// =================== Block-scoped Variables and Hoisting theory ============================
// Variables declared using 'let' in JavaScript have block scope, which means they are only accessible within the block of code where they are defined.
// Unlike variables declared with 'var', 'let' variables are not hoisted to the top of their containing function or block scope. Instead, they are hoisted to the top of their respective block but remain in the "temporal dead zone" until they are actually declared.  

// =================== Block-scoped Variables and Hoisting code ============================
console.log(a) ; // Error : Cannot access 'a' before initialization
let a = 3;

// Variables declared with let and const are also hoisted, but they are not initialised (TDZ - Temporal Dead Zone) until the point of declaration.
// Trying to access such variables before declaration result in a reference error as shown in the example.


// ===================================================================================
// In both the var and let, the variable hoisting is done.
// But in let the value undefined is not assigned.

