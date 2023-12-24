// Navigations:

//  If we want to navigate from one page to another;
//  We can use JS for naviagtion  OR navigation are achivable using JS

// Browser has history, which stores the enire navigation journey. 

// There are few common methods:
//  1. window.location.href : This property returns the current URL or can be used to navigate to new URL.
//  2. window.location.assign(): This method is used toi navigate to new URL
//  3. window.location.replace(): This is similar to assign() "but it replaces the current URL" in the browser history
//  4. window.history.go():THis method is used to navigate to a specific page/screen/url in the browser history.it accepts +ne and -ne integer as a parameter.
//  5. window.history.back(): This method is used to navigateto previous page in the browser history.
//  6. window.history.forward(): This method is used to navigateto next page in the browser history.

// -------------------------------- Code below here ---------------------------
// 1.
// returns the current URL
window.location.href // =>'http://127.0.0.1:5500/Day9/demo.html' 

//Navigate to a new URl
window.location.href = "https://retail.onlinesbi.sbi/personal/faq.html";

// 2.
window.location.assign("https://retail.onlinesbi.sbi/personal/faq.html");

// 3. 
window.location.replace(); ===> Cannot do

// 4.
window.history.go(2); ===> Cannot do

// 5.
window.history.back(); ===> Cannot do

// 6.
window.history.forward(); ===> Cannot do