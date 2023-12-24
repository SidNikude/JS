//-------------------------------------------- EXAMPLE 1 ------------------------------------
// Way 1
// let name = {
//     firstName: "Siddhant",
//     lastName: "Nikude",
//     printFullName: function(){
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// let name2 = {
//     firstName: "Sid",
//     lastName: "Nikude",
// }

// Function borrowing
// name.printFullName.call(name2); // Sid Nikude 

// -------------------------------------- EXAMPLE 1 -----------------------------------
// Way 2
// let name = {
//     firstName: "Siddhant",
//     lastName: "Nikude",
// }

// let printFullName =  function(){
//         console.log(this.firstName + " " + this.lastName);
//     }

// let name2 = {
//     firstName: "Sid",
//     lastName: "Nikude",
// }

// Printing result
// printFullName.call(name); // Siddhant Nikude
// printFullName.call(name2); // Sid Nikude

//--------------------------------------------- EXAMPLE 2 -------------------------------------

// let name = {
//     firstName: "Siddhant",
//     lastName: "Nikude",
// }

// let printFullName =  function(hometown){
//         console.log(this.firstName + " " + this.lastName + " " + hometown);
//     }

// let name2 = {
//     firstName: "Sid",
//     lastName: "Nikude",
// }

// Printing result
// printFullName.call(name, "Phaltan"); // Siddhant Nikude Phaltan
// printFullName.call(name2, "Pune"); // Sid Nikude Pune 
// If you don't pass anything for hometown parameter it will return undefined. e.g given below 
// printFullName.call(name); // Siddhant Nikude undefined 


//--------------------------------------------- EXAMPLE 3 -------------------------------------

// let name = {
//     firstName : "Siddhant",
//     lastName : "Nikude"
// }

// let name2 = {
//     firstName : "Sid",
//     lastName : "Nikude"
// }

// let printFullName = function(hometown,state){
//     console.log(this.firstName + " " + this.lastName + " " + hometown + ", " + state);
// }

// call --->
// In call method we pass the argument individually comma seperated

// printFullName.call(name, "Phaltan" , "Maharashtra"); // Siddhant Nikude Phaltan, Maharashtra
// printFullName.call(name2, "Pune" , "Maharashtra"); // Sid Nikude Pune, Maharashtra

// apply --->
// In apply method we pass the second argument as an array list.

// printFullName.apply(name, ["Phaltan" , "Maharashtra"]); // Siddhant Nikude Phaltan, Maharashtra
// printFullName.apply(name2, ["Pune" , "Maharashtra"]); // Sid Nikude Pune, Maharashtra

// bind --->
// In bind method we can store the result.
// It will return a function which you can invoke later.

let name = {
    firstName : "Siddhant",
    lastName : "Nikude"
}

let name2 = {
    firstName : "Sid",
    lastName : "Nikude"
}

let printFullName = function(hometown,state){
        console.log(this.firstName + " " + this.lastName + " " + hometown + ", " + state);
    }

let printMyName = printFullName.bind(name, "Phaltan" , "Maharashtra");
let printMyName2 = printFullName.bind(name2, "Pune" , "Maharashtra");
// console.log(printMyName); // [Function: bound printFullName] ---> function is returned
// console.log(printMyName2); // [Function: bound printFullName] ---> function is returned
// console.log(printMyName()); // Siddhant Nikude Phaltan, Maharashtra undefined ---> Wrong output/ wrong invokation
// console.log(printMyName2()); // Sid Nikude Pune, Maharashtra undefined ---> Wrong output/ wrong invokation

// ----------------- Correct way below ----------------------------
// printMyName(); // Siddhant Nikude Phaltan, Maharashtra
// printMyName2(); // Sid Nikude Pune, Maharashtra


// The difference between call and bind is 
// bind gives you a copy which can be invoked later rather than directly invoking it




