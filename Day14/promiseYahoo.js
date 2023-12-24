// Yahoo Baba

// ============ Promise using function syntax ===================== 
// let a = true;

// let prom = new Promise(function(resolve, reject){
//     if(a){
//         resolve("I am successful");
//     }
//     else{
//         reject("I am rejected");
//     }
// });

// console.log(prom);

// ==================== Promise using arrow syntax =====================================

// let a = true;

// let prom = new Promise((resolve, reject)=>{
//     if(a){
//         resolve("I am successful");
//     }
//     else{
//         reject("I am rejected");
//     }
// });

// console.log(prom);

// ========= Function using return promise and .then and .catch method =======================

// function prom(complete){
//     return new Promise(function (resolve, reject){
//         if(complete){
//             resolve("I am successful");
//         }
//         else{
//             reject("You are failed");
//         }
//     })
// }

// let  onFullfillment = (result)=>{
//     console.log(result);
// }

// let onRejection = (err)=>{
//     console.log(err);
// }

// prom(true).then(onFullfillment);
// prom(true).catch(onRejection);

// ================================

// function prom(complete){
//     return new Promise(function (resolve, reject){
//         console.log("Fetching data. please wait"); // This is done only to learn the pending state of promise
//         setTimeout(()=>{    
//             if(complete){
//                 resolve("I am successful");
//             }
//             else{
//                 reject("You are failed");
//             }
//         }, 3000)
//     })
// }

// let  onFullfillment = (result)=>{
//     console.log(result);
// }

// let onRejection = (err)=>{
//     console.log(err);
// }

// --------------------------
// prom(true).then(onFullfillment);
// prom(true).catch(onRejection);

// If you run above two lines you will get O/P as following
// O/P -->
// Fetching data. please wait
// Fetching data. please wait
//  I am successful

// ----run 1st -----

// ---------------------------------------------

// To overcome above repetation of (Fetching data. please wait) we use .then and .catch chaining
// prom(true).then(onFullfillment).catch(onRejection);
// O/P -->
// Fetching data. please wait
//  I am successful

// ----- run 2nd -------


// ================================================

function prom(complete){
    return new Promise((resolve, reject)=>{
        console.log("Please wait. Fetching data");
        setTimeout(()=>{
            if(complete){
                resolve("I am successful");
            }
            else{
                reject("I am rejected");
            }
        }, 3000);
    })
}
prom(false).then((result)=>{console.log(result);}).catch((error)=>{console.log(error);});

// O/P -->
// Please wait. Fetching data
// I am rejected