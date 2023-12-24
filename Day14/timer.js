// Synchronous
// function demo(){
//     console.log("Hello");
// }
// demo();
// console.log("Hi");

// Asynchronous
// There are different methods in Timer 
// 1. setTimeout()
// 2. clearTimeout()
// 3. setInterval()
// 4. clearInterval()

// -------------------------------------------------------
// 1) setTimeout()
// function will be executed after set period of time
// There are 2 parameter in setTimeout --> function, timer
// No need to give call to the function

// Way 1 -> By directly writing function in setTimeout

// console.log("Starting");

// setTimeout(function tut(){
//     console.log("Hello JS");
// }, 3000);

// console.log("Ending");

// Way 2 -> By giving function name in setTimeout

// console.log("Starting 1");

// function demo1(){
//     console.log("Hello JS 1");
// }

// setTimeout(demo1, 3000);
// console.log("Ending 1");

// Way 3 -> Using fat arrow

// console.log("Starting 2");

// setTimeout(()=>{
//     console.log("Hello JS");
// },3000);

// console.log("Ending 2");

// e.g
// console.log("Starting");
// setTimeout(()=>{
//     console.log("Hello JS");
// },0);
// console.log("Ending");

// O/P -->
// Starting
// Ending
// Hello JS


// -------------------------------------------------------
// 2) setInterval()
// function will be executed again and again after set period of time
// there are two parameter in setInterval --> function, timer
// No need to give call to the function

// console.log("Starting");
// setInterval(() => {
//     console.log("Hello JS");
// }, 2000);
// console.log("Ending");

// -----------------------------------------
// 3) clearInterval()

// case 1
// In this case below the clearInterval method will not allow the setInterval method to run as it will clear the setInterval method.

// console.log("Starting");
// const a = setInterval(() => {
//     console.log("Hello JS");
// }, 2000);
// console.log("Ending");
// clearInterval(a);

// O/P -->
// Starting
// Ending


// case 2
// Whenever you want to run the clearInterval method you need to take help from setTimeout method as it will help to run the clearInterval mehod after certain period of time.

// The clearInterval method won't allow the setInterval method to run but if you run the clearInterval method after certain period of time using setTimeout then you will get the desired output i.e "Hello JS".

// console.log("Starting");

// const b = setInterval(() => {
//     console.log("Hello JS");
// }, 2000);

// console.log("Ending");

// setTimeout(()=>{
//     clearInterval(b);
// },8000);

// O/P =>
// Starting
// Ending
// Hello JS
// Hello JS
// Hello JS 

// -----------------------------------------------------
//  4) setImmediate
// Its execution is similar to that of normal function.
// It doesn't run after set period of time but runs just like a normal code.
// function demo(){
//     console.log("Hello World");
// }
// demo();

// setImmediate(()=>{
//     console.log("Hello Js");
// }, 3000)

// O/P -->
// Hello World
// Hello Js




