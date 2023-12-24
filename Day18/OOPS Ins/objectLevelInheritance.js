const person = {
    name: 'Siddhant',
    age: 22,
    getDetails: function () {
     return `Hello, I am ${this.name} and my age is ${this.age}`
    }
   }
   
   const student = {
    rollNo: 108,
    div: 'A',
    __proto__: person  //pair
   }
   console.log('student', student);
   
   console.log(student.rollNo);
   console.log(student.div);
   console.log(student.name);
   console.log(student.age);
   console.log(student.getDetails());

// O/P --->
// student { rollNo: 108, div: 'A' }
// 108
// A
// Siddhant
// 22
// Hello, I am Siddhant and my age is 22