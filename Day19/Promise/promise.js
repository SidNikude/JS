// Way 1

// let complete = true;

// let prom = new Promise(function(resolve, reject){
//     if (complete){
//         resolve("I am successful");
//     }
//     else
//     {
//         reject("I am failed");
//     }
// });

// console.log(prom);


// another way Way2 

// function prom(complete){
//     return new Promise(function(resolve, reject)
//     {
//         if(complete){
//             resolve("Successfully done");
//         }
//         else{
//             reject("Failed");
//         }
//     })
// }

// console.log(prom(true));


// Example 2
// let age = 19;
// let prom1 = new Promise(function(resolve, reject){
//     if(age>18)
//     {
//         resolve("You are above 18");
//     }
//     else{
//         reject("You are not eligible");
//     }
// });
// console.log(prom1);

