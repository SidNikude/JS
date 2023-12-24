// Call, Apply, Bind 

// ************************************** call **********************************************
// let name1 = {
//     firstname: "Siddhant",
//     lastname: "Nikude",
//     printFullName: function (){
//         console.log(this.firstname + " " + this.lastname); 
//     }
// }
// name1.printFullName();

// O/P ----> Siddhant Nikude

// ------------------------------------------------------------------------------------------

// let name2 = {
//     firstname: "Sid",
//     lastname: "Nikude",
//     printFullName: function (){   // ---> Not the efficient way to write a code
//         console.log(this.firstname + " " + this.lastname); 
//     }
// }

// name2.printFullName();

// O/P ----> Sid Nikude

// ----------------------------------------------------------------------------------------------


// ================== call ----- i.e function borrowing ----- =============
// It is useful when borrowing function from other objects.
// The first parameter is reference to this variable.

// let name1 = {
//     firstname: "Siddhant",
//     lastname: "Nikude",
//     printFullName: function (){
//         console.log(this.firstname + " " + this.lastname); 
//     }
// }

// let name3 = {
//     firstname: "Supriya",
//     lastname: "Nikude",
// }

// function borrowing ----> call accepts 1 parameter and that refers to where the this in function should be pointing i.e name3 object.

// name1.printFullName.call(name3);

// O/P ----> Supriya Nikude

// =====================================================================================

// When we need to reuse function, we don't usually write it inside the object but write it outside and pass the object as an argument.

// let printFullName2 = function() {
//     console.log(this.firstname + " " + this.lastname);
// }

// let name3 = {
//     firstname: "Supriya",
//     lastname: "Nikude",
// }

// printFullName2.call(name3);

// O/P ----> Supriya Nikude


// ==================== using call with 1 parameter to the function  =====================

// let name1 = {
//     firstName: "Sid",
//     lastName: "Nikude"
// }

// let printFullName = function (hometown) {
//     console.log(this.firstName + " " + this.lastName + " is from " + hometown);
// }
// printFullName.call(name1, "Phaltan");

// O/P ---> Sid Nikude is from Phaltan


// let name2 = {
//     firstName: "Supriya",
//     lastName: "Nikude"
// }
// printFullName.call(name2, "Birdev Nagar");

// O/P ---> Supriya Nikude is from Birdev Nagar


// =================== using call with 2 parameter to the function ==========================

// let name1 = {
//     firstName: "Sid",
//     lastName: "Nikude"
// }

// let printFullName = function (hometown, state) {
//     console.log(this.firstName + " " + this.lastName + " is from " + hometown + " " + state);
// }
// printFullName.call(name1, "Phaltan", "MH");

// O/P ---> Sid Nikude is from Phaltan MH

// let name2 = {
//     firstName: "Supriya",
//     lastName: "Nikude"
// }
// printFullName.call(name2, "Birdev Nagar", "Maharashtra");

// O/P ---> Supriya Nikude is from Birdev Nagar Maharashtra


// ************************************** apply **********************************************

// let name1 = {
//     firstName: "Sid",
//     lastName: "Nikude"
// }

// let printFullName = function (hometown, state){
//     console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
// }

// let name2 = {
//     firstName: "Supriya",
//     lastName: "Nikude"
// }

// printFullName.apply(name1, ["Phaltan", "MH"]);
// printFullName.apply(name2, ["Birdev Nagar", "Maharashtra"]);

// O/P ---->
// Sid Nikude Phaltan MH
// Supriya Nikude Birdev Nagar Maharashtra


// ************************************** bind **********************************************


let name1 = {
    firstName: "Sid",
    lastName: "Nikude"
}

let printFullName = function (hometown, state){
    console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state);
}

let printComplete = printFullName.bind(name1, "Phaltan", "Maharashtra");
console.log(printComplete); // It will return a method
printComplete(); // Output is printed and whenever this method is invoked it will print output.

// O/P --->
// Sid Nikude Phaltan Maharashtra

