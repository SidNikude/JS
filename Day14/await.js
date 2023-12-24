// ---------------- Normal function -------------------
// function test(){
//     console.log("2 : Message");
//     console.log("3 : Message");
//     console.log("4 : Message");
// }

// console.log("1 : Message");
// test();
// console.log("5 : Message");

// ---------------- await function -------------------

async function test(){
    await console.log("2 : Message");
    console.log("3 : Message");
    console.log("4 : Message");
}

console.log("1 : Message");
test();
console.log("5 : Message");

// O/P --->
// 1 : Message
// 2 : Message
// 5 : Message
// 3 : Message
// 4 : Message
