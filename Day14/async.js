// ----------------------------- Normal function --------------------------

// function test(){
//     return "Hello";
// }
// console.log(test());

// -------------------- async function syntax --------------------------------

// async function test1(){
//     return "Hello";
// }
// console.log(test1()); //It will return promise


// -------------------- async function and .then method ------------------

// async function test1(){
//     return "Hello";
// }

// console.log(test1()); // It will return promise

// test1().then((result)=>{
//     console.log(result);
// });

// O/P -->
// promise // async returns promise
// Hello // because .then method on promise state changed to fullfilled will return value


// --------------------- Storing async function into variable -------------------------

// let test = async function () {
//     return "Hello";
// }

// console.log(test());
// test().then((result)=>{
//     console.log(result);
// });


// ------------------------ async function arrow syntax -----------------------

let test1 = async ()=>{
    return "Hello";
}

console.log(test1());
test1().then((result)=>{
    console.log(result);
});