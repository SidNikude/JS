// ES6 features

// =============== 1) let and const =========================

// ------------- case 1 var -----------------
// In case of var redeclaration and reassignment both are possible.

var a ; // Declaration
a = 25 ; // Initialisation
var b = 10; // Declaration + initialisation

// redeclaration
var a ; // No error as redeclaration is possible in case of var.

// reassignment
a = 20; // No error as reassignment is possible in case of var.

// ------------- case 2 let -----------------

let c ; // Declaration
c = 20; // Initialisation

// redeclaration
// let c ; // error as redeclaration is not possible in case of let.

// reassignment
c = 10 ; // No error as reassignment is possible in case of let.

// ------------- case 3 const -----------------
const d = 35; // No error as declare + initialise

// const d ; // Declaration --> Error as you need to decalre + initialise in const
// d = 35 ; // Initialisation --> Error as you need to decalre + initialise in const

// redeclaration
// const d ; // Error as redeclaration is not possible in case of const.

// reassignment
// d = 25 ; // Error as reassignment is not possible in case of const.