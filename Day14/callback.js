// Callback -> A function which is passed as an argument to another function.

// Below are some examples of synchronous callback
// e.g 1)

// function demo() {
//         console.log("JS");
//     }
    
//     function res(callback) {
//             console.log("Hello");
//             callback();
// }
// res(demo);

// O/P -->
// Hello
// JS


// e.g 2)

// function mul(a, b) {
//     console.log(a*b);
// }

// function res(callback, a, b) {
//     callback(a, b);
// }

// res(mul, 2, 5);
// O/P -->
// 10

// Note : Asynchronous callback can be done using timer function

// e.g 3)

// function demo( callback, a, b) {
//     callback(a, b);
//     console.log("JS");
// }

// function result(v1, v2) {
//     console.log("Hello");
//     console.log(v1*v2);
// }

// demo(result, 2 , 10);

// O/P -->
// Hello
// 20
// JS

// Below are some examples of Asynchronous callback

// e.g 1)

// console.log("Starting");
// setTimeout(()=>{
//     console.log("Hello JS");
// }, 3000);
// console.log("Ending");

// O/P -->
// Starting
// Ending
// Hello JS


