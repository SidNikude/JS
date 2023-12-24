console.log("-----------------------------------------------------------------");
// Method 1
const calculate = (a,b,operation)=>{
    return operation(a,b);
};

const addition = calculate(3,4,function (num1, num2){
    return num1+num2;
});
console.log(addition);

// Method 2
const subtraction = (a,b) => a-b;
const subResult = calculate(8,3,subtraction);
console.log(subResult);

// Method 3
function multiply(a,b) {
    return a * b;
}
const myResult = calculate(3, 2,multiply);
console.log(myResult);






