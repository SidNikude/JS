// ------------------- Normal function ----------------------
function demo() {
    console.log("Hello World");
}
demo();

// ------------------------ Arrow function -----------------
const demo1 = ()=>{
    console.log("Hello World");
}
demo1();

// --------------------------- Function Expression ---------------------
const demo2 = function () {
    console.log("Hello World");
}
demo2();

// ----------------- IIFE function -------------------------
(
    function demo3() {
        console.log("Hello");
    }
)();

// ------------------------- Default Parameter ---------------

function demo4(a,b=10){
    console.log(a*b);
}
demo4(5); // 50
demo4(5,5); //25

