//store data => Session Storage

// syntax: setItem("key", "value")


// The four important queries/code to be executed in case of session storage.
// 1. set data in the session storage
// 2. get data from the session storage
// 3. Remove specific data from sessionstorage
// 4. Remove all data from sessionstorage

//  Syntax is as follows : IMPORTANT
// 1. window.sessionstorage.setItem("Key","Value");
// 2. window.sessionstorage.getItem("Key");
//    OR 
//    sessionstorage.getItem("Key");
// 3. sessionstorage.remove();
// 4. sessionstorage.clear();

window.sessionStorage.setItem("name","SID"); // 1
window.sessionStorage.setItem("Designation","ASE"); // 1
window.localStorage.getItem("name"); // 2
window.localStorage.getItem("Designation"); // 2
// window.sessionStorage.removeItem("name"); // 3
// window.sessionStorage.removeItem("Designation"); // 3
// window.sessionStorage.clear(); // 4
