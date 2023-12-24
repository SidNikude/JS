// Spread Opeator (...) :
// The spread operator is denoted by three dots (...) and is used to expand elements from an array or properties from an object into another array or object.

// ------------- Example ----------------
// const colors = ['purple', 'blue', 'green'];
// const morecolors = ['black', 'white'];

// const allcolors = [...colors, ...morecolors];
// console.log(allcolors); 

// O/P -->
// [ 'purple', 'blue', 'green', 'black', 'white' ]

// ============ Example of Array using spread operator : ===============

// ----------- Copying an array : ---------------

// const colors = ['purple', 'blue', 'green'];
// const copiedArray = [...colors];

// console.log(copiedArray); 

// O/P -->
// [ 'purple', 'blue', 'green' ]


// ----------- Adding elements to an existing array: --------------
// const colors = ['purple', 'blue', 'green'];

// const newArray = [...colors, 'black', 'white'];

// console.log(newArray);

// O/P -->
// [ 'purple', 'blue', 'green', 'black', 'white' ]


// ------------ Creating a copy of an array and modifying it: ----------

// const originalArray = [10, 20, 30];
// const modifiedArray = [...originalArray];
// modifiedArray[1] = 25;

// console.log(originalArray);
// console.log(modifiedArray);

// O/P -->

// [ 10, 20, 30 ]
// [ 10, 25, 30 ]


// ============ Example of Objects using spread operator : ===============

// ------------- Cloning an object : -------------
// const originalObject = {name: 'David', age: 35};
// const clonedObject = {...originalObject};

// console.log(clonedObject);

// O/P -->
// { name: 'David', age: 35 }

// ------------- Merging objects : -------------
// const personInfo = {name: 'David', age: 35};
// const additionalInfo = {occupation: 'Doctor', country: 'Canada'};

// const mergedObject = {...personInfo, ...additionalInfo};

// console.log(mergedObject);

// O/P -->
// { name: 'David', age: 35, occupation: 'Doctor', country: 'Canada' }


// --------------- Adding new properties to an object ---------------

// const person = {name: 'David', age: 35};
// const updatedPerson = {...person, occupation: 'Doctor', country: 'canada'};

// console.log(updatedPerson);

// O/P -->
// { name: 'David', age: 35, occupation: 'Doctor', country: 'canada' }