// 1.Arithmatic
//     Addition: +
//     Substraction: -
//     mulitpliction: *
//     Division: /
//     Modulus: %
//     Increment: ++ (Pre & post)
//     Decrement: -- (Pre & post)

a = 20;
b = 2;

console.log("Addition of a and b is " + (a+b));
console.log("Subtraction of a and b is " + (a-b));
console.log("Multiplication of a and b is " + (a*b));
console.log("Division of a and b is " + (a/b));
console.log("Modulus of a and b is " + (a%b));

// =========================PRE INCREMENT================================
console.log("PRE INCREMEN");
num1 = 2;
console.log("Number: " + num1 ); // 2
console.log("Number: " + (++num1)); // (1) + 2 => 3
console.log("Number: " + num1 ); // 3

// ========================POST INCREMENT=================================
console.log("POST INCREMENT");
num2 = 3;
console.log("Number: " + num2 ); // 3
console.log("Number: " + (num2++)); // =>3  // 3 + (1) 
console.log("Number: " + num2 ); // 4


// =========================PRE DECREMENT================================
console.log("PRE DECREMENT");
num3 = 2;
console.log("Number: " + num3 ); // 2
console.log("Number: " + (--num3)); // 2-1 => 1
console.log("Number: " + num3 ); // 1

// ========================POST DECREMENT=================================
console.log("POST DECREMENT");
num4 = 3;
console.log("Number: " + num4 ); // 3
console.log("Number: " + (num4--)); // =>3  // 3 - (1) 
console.log("Number: " + num4 ); // 2

