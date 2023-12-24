// 3. logical operator
// Logical AND: &&
// Logical  OR: ||
// Logical NOT: !

num1 = 20;
num2 = 9;

// ---------------------------- Logical AND: && ---------------------------
console.log("---------------------------- Logical AND: && ---------------------------");
console.log((num1 == 20) && (num2 == 9)); // true && true => true
console.log((num1 == 20) && (num2 == 20)); // true && false => false
console.log((num1 == 9) && (num2 == 9)); // false && true => false
console.log((num1 == 9) && (num2 == 20)); // false && false => false

// ---------------------------- Logical  OR: || ---------------------------
console.log("---------------------------- Logical  OR: || ---------------------------");
console.log((num1 == 20) || (num2 == 9)); // true || true => true
console.log((num1 == 20) || (num2 == 20)); // true || false => true
console.log((num1 == 9) || (num2 == 9)); // false || true => true
console.log((num1 == 9) || (num2 == 20)); // false || false => false

// ---------------------------- Logical NOT: ! ----------------------------
console.log("---------------------------- Logical NOT: ! ---------------------------");
console.log(!(num1 == 20)); // !(true) => false
console.log(!(num1 == 9)); // !(false) => true
