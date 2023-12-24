// What are Higher-Order Functions?
// A Higher-Order Function is a regular function that takes one or more functions as arguments and/or returns a function as a value from it.

// HOF function 
// 1) forEach()
// 2) filter()
// 3) map()
// 4) Find()

// Arrow function :
// Arrow functions were introduced in ES6.
// Arrow functions allow us to write shorter function syntax:
// let myFunction = (a, b) => a * b;

// Before Arrow:
// hello = function() {
//   return "Hello World!";
// }

// With Arrow Function:
// hello = () => {
//   return "Hello World!";
// }

// 1) forEach()
// forEach: Execeutes a provided funtion once for each array elements

console.log("--------------------------- forEach() ----------------------------------");

var carsCompany = ["Hyundai", "Audi", "BMW", "Suzuki", "Volvo", "Walkswangon", "Tata", "Kia"];
carsCompany.forEach((i)=> {  //arrow function OR fat-arrow function
console.log(i);
 });

// 2) filter()
console.log("--------------------------- filter() ----------------------------------");


var carsCompany1 = ["Hyundai", "Audi", "BMW", "Suzuki", "Volvo", "Walkswangon", "Tata", "Kia"];

var filteredArray1 = carsCompany1.filter(function (ele) {
 return ele.length < 6;
});
console.log("filteredArray 1", filteredArray1);


var filteredArray2 = carsCompany1.filter((ele) => ele.length < 6); //arrow function does not required return keyword
console.log("filteredArray 2", filteredArray2);

// 3) map()
console.log("--------------------------- map() ----------------------------------");

const array1 = [1, 4, 9, 16];
console.log("Original array : " + array1);
// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log("Output : " + map1);
// Expected output: Array [2, 8, 18, 32]

// 4) Find()
// Return value
// The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
console.log("--------------------------- Find() ----------------------------------");

var carsCompany2 = ["Hyundai", "Audi", "BMW", "Suzuki", "Volvo", "Walkswangon", "Tata", "Kia"];
var numbersArr = [1, 2, 3, 4, 5, 6];
const hyundai = carsCompany2.find((item) => item === 'Hyundai')
console.log('find the element from an array:', hyundai);

const findNum = numbersArr.find((item) => { return item == '4' });
console.log('findNum', findNum);


const array3 = [5, 12, 8, 130, 44];
const found = array3.find(element => element > 10);
console.log(found);







