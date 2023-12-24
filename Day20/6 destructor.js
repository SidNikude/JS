// JS Destructuring

// Js structureing
// allows you to extract values from arrays or objects and assign them to variables using a concise syntax.

// It's a convenient way to extract specific data from Complex data structures and simplify your code.

// Distructuring is a powerful feature, its widely used in modern JavaScript frameworks and libraries, such as react and Vue.js, to extract props and state variables.

//----------------------- Destructuring Arrays --------------------

// const myArray = [1, 2, 3];

// const [a, b, c] = myArray;

// console.log(a); // Output : 1
// console.log(b); // Output : 2
// console.log(c); // Output : 3

// Here a, b and c are separate variables.

//---------------- Destructuring Objects -------------

// const myObj = {name: "CodeBustler", age: 27 };

// const { name, age } = myObj;

// console.log(name);
// Output: 'CodeBustler'

// console.log(age);
// Output: 27

// Here name and age are separate variables.

// ------------- Nested Object ---------------
// const myObj ={
//     name: "Arjun",
//     age: 27,
//     address: {
//         city: "Gulbarga",
//         state: "KA"
//     }
// };

// const {name, age, address: {city, state}} = myObj;

// console.log(name); // Arjun
// console.log(age); // 27
// console.log(city); // Gulbarga
// console.log(state); // KA

// -------------- Default Values Array -------------
// const myArray = [1, 2];
// const [a, b, c = 3] = myArray;

// console.log(a); // Output: 1
// console.log(b); // Output: 2
// console.log(c); // Output: 3

// -------------- Default Values Object -------------

// const myObj = { name: "Codebustler"};

// const { name, age = 27 } = myObj;

// console.log(name); // Output: 'Codebustler'
// console.log(age); // Output: 27

