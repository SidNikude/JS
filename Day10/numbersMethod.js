Methods

// 1. tofixed() :formats a number with a specified number of decimal places
console.log("using tofixed() Method ");
let a = 12.1234;
console.log(a.toFixed(3)); // 12.123
console.log(a.toFixed(4)); // 12.1234
console.log("------------------------------------------------");

//2.toPrecision(): formats a number to a specified length
console.log("using toPrecision() Method ");

let b = 35.12345;
console.log(b.toPrecision(1)); // 4e+1
console.log(b.toPrecision(2)); // 35
console.log(b.toPrecision(3)); // 35.1
console.log(b.toPrecision(4)); // 35.12
console.log("------------------------------------------------");

// 3. toString(): convert number into string
console.log("using toString() Method ");

let c = 29.1234;
console.log(c.toString());
console.log(typeof (c.toString())); // string
console.log("------------------------------------------------");

//4. parseInt() : parses a string and return an integer value
console.log("using parseInt Method ");

let d = "49.1234";
console.log(d);
console.log(typeof (d));
console.log(parseInt(d));
console.log(typeof (parseInt(d)));
console.log("------------------------------------------------");

//5. parseFloat(): parses a string and returns an floating-point number
console.log("using parseFloat Method ");

let e = "49.1234";
console.log(e);
console.log(typeof (e));
console.log(parseFloat(e));
console.log(typeof (parseFloat(e)));
console.log("------------------------------------------------");
