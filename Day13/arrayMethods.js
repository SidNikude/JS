// JavaScript Array Methods


// Array length
// Array toString()
// Array pop()
// Array push()
// Array shift()
// Array unshift()
// Array join()
// Array delete()
// Array concat()
// Array flat()
// Array splice()
// Array slice()


// 1) JavaScript Array length
// The length property returns the length (size) of an array:
console.log("----------------------------------------- length method -----------------------------------------");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
let length1 = fruits.length;
console.log("Length of fruits array is : " + length1);

let company = ["IBM", "Infosys", "Tech Mahindra"];
console.log(company);
let length2 = company.length;
console.log("Length of company array is : " + length2);

// 2) JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.
console.log("----------------------------------------- toString() method -----------------------------------------");
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let ans1 = fruits1.toString();
console.log(ans1);
console.log("Datatype of string of array is : " + typeof (ans1));

let number = [125, 108, 963, 571, 314];
let ans2 = number.toString();
console.log(ans2);
console.log("Datatype of number of array is : " + typeof (ans2));

// NOTE
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.join(" * ");

// Result:

// Banana * Orange * Apple * Mango


// 3) Array pop()
// The pop() method removes the last element from an array:

console.log("----------------------------------------- pop() method -----------------------------------------");
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original array : " + fruits2);
let poppedFruit = fruits2.pop(); // The pop() method returns the value that was "popped out":
console.log("Popped element : " + poppedFruit);
console.log("After popping : " + fruits2);

// 4) Array push() method 
console.log("----------------------------------------- pop() method -----------------------------------------");
let company1 = ["IBM", "Infosys", "Tech Mahindra"];
console.log("Original array : " + company1);
let pushedElement = company1.push("Jio");
console.log("After push method : " + company1);



// 5) Array shift() method
console.log("----------------------------------------- Array shift() method -----------------------------------------");
let company2 = ["IBM", "Infosys", "Tech Mahindra"];
console.log("Original array : " + company2);
let shiftedElement = company2.shift();
console.log("Shifted element : " + shiftedElement);
console.log("After shift method : " + company2);

// 6) Array unshift() method
console.log("----------------------------------------- Array unshift() method -----------------------------------------");
let company3 = ["IBM", "Infosys", "Tech Mahindra"];
console.log("Original array : " + company3);
let addedElement = company3.unshift("JIO");
console.log("After unshift method : " + company3);

// 7) Array join() method 
console.log("----------------------------------------- Array join() method -----------------------------------------");
let company4 = ["IBM", "Infosys", "Tech Mahindra"];
console.log("Original array : " + company4);
console.log("After join() method " + company4.join("--") );


// 8) Array delete()
console.log("----------------------------------------- Array delete() method -----------------------------------------");
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original array : " + fruits3);
deletedElement = delete fruits3[0];
console.log(deletedElement); // true
console.log("After delete() method : " + fruits3);

// Warning !
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.


// 9) Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
console.log("----------------------------------------- Array concat() method -----------------------------------------");

let company5 = ["IBM", "Infosys", "Tech Mahindra"];
console.log("1st array : " + company5);
let company6 = ["Oracle", "Amazon"];
console.log("2nd array : " + company6);
console.log("Concatinated output : " + company5.concat(company6));


// Example (Merging Three Arrays)
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);


// 10) Array flat()
// Flattening an array is the process of reducing the dimensionality of an array.
// The flat() method creates a new array with sub-array elements concatenated to a specified depth.

console.log("----------------------------------------- Array flat() method -----------------------------------------");
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

// 11) Array splice()
// The splice() method adds new items to an array.

console.log("----------------------------------------- Array splice() method -----------------------------------------");
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let splice1 = fruits4.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits4);
let splice2 = fruits4.splice(0,1);
console.log(fruits4);


// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

// 12) Array slice()
// The slice() method slices out a piece of an array into a new array.
// This example slices out a part of an array starting from array element 1 ("Orange"):

console.log("----------------------------------------- Array slice() method -----------------------------------------");
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits5.slice(1);
console.log(citrus);

// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits6.slice(3);
console.log(citrus1);
// This example slices out a part of an array starting from array element 3 ("Apple"):



