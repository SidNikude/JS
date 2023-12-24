var student = {};
student.id = '123'; //OR student['id'] = '123';
student.name = 'John'; //OR student['name]='John';
student.division = 'A';

console.log('student: ', student);

 student.name = 'Rahul';

console.log('After updating name value in student: ', student);

student.firstName = student.name;
delete student.name;
console.log('student: ', student);

var student1 = {
 name: 'Rahul',
 rollNo: 24,
 city: 'Pune',
 study: function () {
  console.log('Rahul studys well');
 },
 getDetails: function () {
  return 'Name: ' + this.name + ' Roll No.: '+ this.rollNo + ' City: '+ this.city
 }
}

console.log('student1: ', student1);
console.log('Student getDetails is: ',student1.getDetails());