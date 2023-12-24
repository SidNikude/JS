var test = 10;
var testStr = "10";
var sum = test + testStr;
console.log(sum); // 1010
console.log(typeof sum); // string

console.log('------------------1-----------------------------------------');
var test3 = 10 + '10' - 5; 
       // = 10 + '10' = 1010 // string
       // = 1010 - 5 = 1005 // string - number => number
console.log(test3); // 1005
console.log(typeof test3); // number


console.log('-------------------2----------------------------------------');
var test4 = '10' - 'five';
console.log("'10' - 'five'");
console.log(test4); //NAN = NOT a Number
console.log(typeof (test4)); // number


console.log('--------------------3---------------------------------------');
var test4 = '10' - '5';
console.log(test4); // 5
console.log(typeof test4); // number


console.log('---------------------4--------------------------------------');
var test5 = true + false; // 1
   // binary  1  +  0
console.log(test5);
console.log(typeof test5); 

console.log('---------------------5--------------------------------------');

var test6 = true + true;
   //binary   1 +   1; // 2
console.log(test6);
console.log(typeof test6); 

console.log('---------------------6--------------------------------------');

var test7 = true + 4; // 5
//binary  =  1   + 4; 
console.log(test7);
console.log(typeof test7); 


console.log('---------------------7--------------------------------------');

var test8 = true + '4'; // true4 ->> concat
console.log(test8);
console.log(typeof test8); 