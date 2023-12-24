// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is a JavaScript object that links producing code and consuming code



// Promise is used to overcome callback hell.

// Callback hell given below

// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
    
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// Promise is a solution of callback hell.
// Promise is used for parallel execution.
// More structured, readable.
// It is a constructor.

// Syntax ->
// let promise = new Promise((resolve, reject)=>{
//             Code to be executed
//            }) 

// Resolve and reject is predefined by JS.
// resolve(value) --> When execution is done successfully.
// reject(error) --> When execution is failed/ error occured.

// Promise is a object which returns constructor.

// Promise has 2 properties
// 1. state
    // 1. Pending --> When object is created or operation going on.
    // 2. fulfilled --> When resolve is called
    // 3. rejected --> When reject is called

// 2. result --> Initially undefined

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(10);
//     }, 1000);
// });

// let promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject("error");
//     }, 2000);
// });

// console.log(promise, promise1);

// Promise methods
// promise.then((resolve)=>{
//     console.log(resolve);
// });

// promise1.catch((err)=>{
//     console.log(err);
// });


