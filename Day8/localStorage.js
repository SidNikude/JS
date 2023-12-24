// store data in local storage
// JS is already been provided with built in funcitons to store data
// Local storage values can be seen in inspect=>application.
// Queries/codes can be passed in the console tab i.e inspect=>console as well as can be passed from js file.

// i.e/syntax to store data ==> window.localStorage.setItem("key","value");
// The value has to be passed in key and value pair.
// They have to be passed enclosed in string format .

// The four important queries/code to be executed in case of local storage.
// 1. set data in the local storage
// 2. get data from the local storage
// 3. Remove specific data from localstorage
// 4. Remove all data from localstorage

//  Syntax is as follows : IMPORTANT
// 1. window.localStorage.setItem("Key","Value");
// 2. window.localStorage.getItem("Key");
//    OR 
//    localStorage.getItem("Key");
// 3. localStorage.remove();
// 4. localStorage.clear();



window.localStorage.setItem("name","Siddhant"); // 1
window.localStorage.setItem("Designation","Full stack developer"); // 1
window.localStorage.getItem("name"); // 2 
window.localStorage.getItem("Designation"); // 2
// window.localStorage.removeItem("name"); // 3
// window.localStorage.removeItem("Designation"); // 3
// localStorage.clear(); // 4