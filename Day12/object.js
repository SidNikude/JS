// syntax: { key1: value1, key2: value2} 
let a = 10; // 10 value assigned to 'a' variable 

let emptyObj = {}; //empty object
console.log('object obj: ', emptyObj, 'Data Type', typeof emptyObj);
console.log('-------------------------------------------------');

let person = {
 firstName: 'john',
 lastName: 'Walker',
 age: 25,
 address: null
};  // object is assigned to 'person' variable

console.log('person object: ', person, 'Data type: ', typeof person);
console.log('-------------------------------------------------');

let person2 = {
 firstName: 'john',
 lastName: 'Walker',
 age: 25,
 address: null,
 getName: function () {  //getName function
  return 'John walker';
 },
 sequence: [1, 2, 3, 4, 5] // array also can be defined inside object
}; // object with function defined inside it

//how to access value from object

console.log('firstName from person2 object:', person2.firstName); // john
console.log('lastName from person2 object:', person2.lastName); // walker
let fullName = person2.getName();
console.log('get full name from getName function:', fullName); // Jhon walker
console.log('Array from person2 object', person2.sequence); // [1,2,3,4,5]
console.log('-------------------------------------------------');

let compareP1P2 = person.firstName == person2.firstName; // 'john' == 'john';
console.log('compareP1P2: ', compareP1P2);

console.log('-------------------------------------------------');

let student = {
 firstName: 'John',
 lastName: 'Walker',
 middleName: 'M',
 dob: '1995-01-12',// YYYY-MM-DD
 address: 'Washington lno 1, street 12',
 rollNo: '10',
 contact: [
  { primaryNum: '99999999987' },
  { altNumber: '89269636487' }
 ], //array of object
 // primaryContact:'',
 // altContact:'',
 division: 'A',
 std: 'IX',
 schoolName: 'Bethesda School',
 gender: 'M'
};
// console.log(student.contact);