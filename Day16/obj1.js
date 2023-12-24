// Object--> 
// Object is real time entities .
// entity means it has states and behaviour.
// states-> properties (eg-student -. name,rollno,age,loc,etc...)
// behaviour--> (dancing,talking,reading,walking) 
// Object is non primitive datatype.
// Object can store the data in key and value pair.
// Object is defined by {}
// to combine all datatypes in Object.

// CRUD Operation

// let obj1 = {
//     name: "Siddhant",
//     rollNo: 21
// }

// 1) READ / access the the object 
// there are two ways to access/read the object.

//  1.  .dot notation
// console.log(obj1.name);

//  2. square bracket notation
// console.log(obj1["name"]);

// 2) UPDATE
// 1. MODIFY to modify the properties value of object using  .dot notation as well as square bracket notation.

// obj1.name = "SID";
// console.log(obj1);
// obj1["rollNo"]=25;


// 2. Add to adding new properties in Object.

// obj1.location = "Phaltan";
// obj1["country"] = "Bharat";
// console.log(obj1);

// 3. to delete the properties and values of object.

// delete obj1.rollNo;
// console.log(obj1);
// delete obj1["name"];
// console.log(obj1);


// -----------------------------------------------------------------------------------------

// to check properties presnt or not in object.
// will return true if satisfies the condition else will return false.
// console.log("name" in obj1);

// -----------------------------------------------------------------------------------------
// How many way to create Object.-->

// 1.direct Object-->
// let obj2 = {};
// obj2.name="Sid";
// obj2["rollNo"]=21;
// console.log(obj2);


// 2.using new keywords->
// let obj3 = new Object();
// obj3.name = "Sid";
// obj3["Education"] = "B.tech";
// console.log(obj3);

// 3.using Object.assign()-->
// let obj4 = {
//     fname: "Sid",
//     lname: "Nikude",
// }

// let obj5 = {
//     rollNo: 21
// }

// let obj6 = Object.assign(obj4,obj5);
// console.log(obj6);

// 4. using Object.create()-->

// 1.
// let obj7 = Object.create({
//     fname: "Siddhant",
//     lname: "Nikude"
// });
// console.log(obj7); // {} ==> empty object is returned

// 2.
// let obj8 = Object.create({});
// obj8.name = "Sid";
// obj8["rollNo"] = 21;
// console.log(obj8);


// 5.using construtor function.-->

// function Student (name, rollNo){
//   this.name = name;
//   this.rollNo = rollNo;
// }
// let stud = new Student("Siddhant", 21);
// console.log(stud);


// ------------------------------------------------------------------------------------

// OBJECT METHODS -->

// 1.Object.assign();
// 2.Object.create({});
// 3.Object.entries();   --> will return array of key value pair of object.
// 4.Object.freeze();
// 5.Object.seal();
// 6.Object.keys();-->  will return keys of object in array
// 7.Object.values();-->will return values of object in array
// 8.for..in()--> it is used to itearate overall properties/keys of object.



// 1.Object.assign()->
// let obj1 = {a:10, b:20};
// let obj2 = {b:30, c:40};
// let obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

// 2.Object.create()->
// 3.Object.entries()--> will return array of key value pair of object.

// let obj9 = {
//     fname: "Sid",
//     lname: "Nikude"
// }

// console.log(Object.entries(obj9));
// console.log(Object.entries(obj9)[0]);
// console.log(Object.entries(obj9)[1]);

// 4.Object.freeze()-->
// will prevents(to stop something from happening) internal modification as well as addiing and deleting the properties of object.

// let obj10 = {
//         fname: "Sid",
//         lname: "Nikude"
//     }
// Object.freeze(obj10);
// obj10.rollNo = 21;
// console.log(obj10);
// delete obj10["fname"];
// console.log(obj10);


// 5.Object.seal()--> 
// will prevents adding and deleting properties but it allows internal modification.

// let obj11 = {
//     fname: "Sid",
//     lname: "Nikude"
// }
// Object.seal(obj11);
// obj11.rollNo = 21;
// console.log(obj11);
// delete obj11["fname"];
// console.log(obj11);
// Updation ==> possible
// obj11.fname = "Supriya";
// console.log(obj11);

// 6.Object.keys()-->
// will return keys of object in array.

// let obj12 = {
//     fname: "Sid",
//     lname: "Nikude"
// }

// console.log(Object.keys(obj12));

// 7.Object.values()->
// will return values of object in array

// let obj13 = {
//     fname: "Sid",
//     lname: "Nikude"
// }
// console.log(Object.values(obj13));


// 8.for..in()-->
// it is used to iterate overall properties/keys of object.


// let obj14 = {
//     fname: "Sid",
//     lname: "Nikude"
// }

// for (const lname in obj14) {
//     console.log(obj14);
// }

// for()-->
// let obj15 = {
//     fname: "Sid",
//     lname: "Nikude"
// }
// for (let index = 0; index < Object.keys(obj15).length; index++) {
//     const element = obj15[Object.keys(obj15)[index]];
//      console.log(element);
// }




// --------------------------------------Object .create problem-------------------------------

// 2.Object.create()->
// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"

