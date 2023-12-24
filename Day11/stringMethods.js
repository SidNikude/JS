// 1)JavaScript String Length
// The length property returns the length of a string:

console.log("------------------length Method --------------------------- ");
let a = "Hello World";
console.log(a.length);

let b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(b.length);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// Note
// JavaScript counts positions from zero.

// First position is 0.

// Second position is 1.

// 2)JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

console.log("------------------------------slice() Method -------------------------------------- ");
// Example
// Slice out a portion of a string from position 7 to position 13:

let c = "Apple, Banana, Kiwi";
let partC = c.slice(7, 13);
console.log(partC);

let d = "Hello World"; // length = 11 , index = 0 - 10 
console.log(d.slice(0,3)); // 0 -> 2 => Hel
console.log(d.slice(1,3)); // 1 -> 2 => el
console.log(d.slice(0,5)); // 0 -> 4 => Hello

// The -ve value indexing starts from the end of a string with -1 value and decreases as -2, -3, -4 and so on towards the start of a string. 
console.log(d.slice(-5)); // World        
console.log(d.slice(-10)); // ello World



// 3)JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

console.log("------------------------------ substring() Method -------------------------------------- ");
let e = "Namaste World!"
console.log(e.substring(0,7)); // Namaste
console.log(e.substring(1,3)); // am



// 4)JavaScript String substr()
// substr() is similar to slice().

// The difference is that the second parameter specifies the length of the extracted part.

console.log("------------------------------substr() Method -------------------------------------- ");

let f = "Apple, Banana, Kiwi";
let g = f.substr(7, 6);
console.log(g);

let h = "Apple, Banana, Kiwi";
let i = h.substr(7);
console.log(i);

// 5)JavaScript replace() method
// Replacing String Content
// The replace() method replaces a specified value with another value in a string:


console.log("------------------------------replace() Method -------------------------------------- ");
let j = "Please visit Microsoft!";
let k = j.replace("Microsoft", "MDN web docs");
console.log(k);

let l = j.replace("Micro", "Macro");
console.log(l);


// Note
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set.

// By default, the replace() method is case sensitive.



let m = "Please visit Microsoft and Microsoft!";
let n = m.replace(/Microsoft/g, "MDN web docs");
console.log(n);
// To replace all matches, use a regular expression with a /g flag (global match):



// 6)JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():

// DO LATER 
//  ??????????????????????????????????????????????????

// 7)JavaScript String toUpperCase()
// A string is converted to upper case with toUpperCase():

console.log("------------------------------toUpperCase() Method -------------------------------------- ");
let o = "Hello World!";
let p = o.toUpperCase();
console.log(p);


// 8)JavaScript String toLowerCase()
// A string is converted to lower case with toLowerCase():

console.log("------------------------------toLowerCase() Method -------------------------------------- ");
let q = "Hello World!";
let r = q.toLowerCase();
console.log(r);

// 9)JavaScript String concat()
// concat() joins two or more strings:

console.log("------------------------------concat() Method -------------------------------------- ");
let s = "This is Microsoft";
let t = "This is MDN web docs";
let u = "This is Oracle";
let v = s.concat(" " + t).concat(" " + u);
console.log(v);

w = "Hello" + " " + "World!";
x = "Hello".concat(" ", "World!");
console.log(x);

console.log("------------------------------trim () Method -------------------------------------- ");

let y = "          Hello World!          ";
let z = y.trim();
console.log(z);

console.log("------------------------------trimStart () Method -------------------------------------- ");
let a1 = "          Hello World!          ";
let a2 = a1.trimStart();
console.log("Before trimming");
console.log(a1);
console.log("After trimming");
console.log(a2);


console.log("------------------------------trimEnd () Method -------------------------------------- ");
let a3 = "          Hello World!          ";
console.log("Before trimming");
console.log(a3);
let a4 = a3.trimEnd();
console.log("After trimming");
console.log(a4);


// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

console.log("------------------------------padStart () Method -------------------------------------- ");


let a5 = "Hello World!";
let a6 = a5.padStart(20, "HI");
console.log("Length is : " + a6.length);
console.log(a6);

let a7 = "5";
let a8 = a7.padStart(6,"0");
console.log(a8);


console.log("------------------------------padEnd () Method -------------------------------------- ");


let a9 = "Hello World!";
let a10 = a9.padEnd(20, "HI");
console.log("Length is : " + a10.length);
console.log(a10);

let a11 = "5";
let a12 = a11.padEnd(6,"0");
console.log(a12);


// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]

// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:

console.log("------------------------------charAt () Method -------------------------------------- ");
let a13 = "HELLO WORLD";
let a14 = a13.charAt(0);
console.log(a14);
let a15 = a13.charAt(4);
console.log(a15);

// JavaScript String charCodeAt()
// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// The method returns a UTF-16 code (an integer between 0 and 65535).

console.log("------------------------------charCodeAt () Method -------------------------------------- ");

let a16 = "HELLO WORLD";
let a17 = a16.charCodeAt(0);
console.log(a17);


// Property Access
// ECMAScript 5 (2009) allows property access [ ] on strings:
console.log("------------------------------Property Access Method -------------------------------------- ");

let a18 = "HELLO WORLD";
let a19 = a18[0];
console.log(a19);


// JavaScript String split()
console.log("------------------------------String split() Method -------------------------------------- ");
let a20 = "Hello,World!,Hello";
let a21 = a20.split(",");
console.log(a21);



