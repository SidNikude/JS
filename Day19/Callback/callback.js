// callback()-->
// synchronous callback.
//  function test(){
//     console.log("hello");
//  }
//   function result(callback){
//     console.log("Hello this Callback function");
//     callback();
//  }
//   result(test);

  // asynchronous callback function
// console.log("Start");
// setTimeout(() => {
//     console.log("hello js");
// },5000);
// console.log("Ending");

// callback hell-> nested callback function
//  setTimeout(() => {
//      setTimeout(() => {
//           setTimeout(() => {
            
//           },);
//      },);
//  },);
