// case 1

// function a() {
//     console.log(b);
// }
// var b = 10;
// a();

// O/P ---> 10

// case 2

// function a() {
//     function c() {
//         console.log(b);
//     }
//     c();
// }
// var b = 10;
// a();

// O/P ---> 10

// case 3

// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(b);
//     }
// }
// a();

// O/P ---> 10

// case 4 

// function a() {
//     var b = 10;
//     function c() {
        
//     }
//     c();
// }
// a();
// console.log(b);

// O/P ---> ReferenceError: b is not defined






