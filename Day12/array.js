let arr1 = [1, 2, 3, 4, 5] // array number
let arr2 = ["one", "two", "three", "four"] //array of string
let arr3 = [{ "one": 1 }, { "two": 2 }, { "three": 3 }] //array of object
let arr4 = [[1, 2], [3, 4], [5, 6]] //array with-in array
let arr5 = [true, false, true, false] //array of boolean
let arr6 = [1, "one", [1, 2], true, { "three": 3 }, null, undefined] // array contain elements of different types

console.log('arr1', arr1);
console.log('arr2', arr2);
console.log('arr3', arr3);
console.log('arr4', arr4);
console.log('arr5', arr5);
console.log('arr6', arr6);

let contact = [
    { primaryNum: '99999999987' },
    { altNumber: '89269636487' }
   ]
   
   console.log('contacts: ', contact);
   console.log('contacts: access 0th index element ', contact[0]);
   console.log('contacts: access 0th index element if object get value with key ', contact[0].primaryNum); // when we write key we get value . i.e in this case .primaryNum gives => 99999999987
   
   console.log('contacts: access 1st index element ', contact[1]);
   console.log('contacts: access 1st index element if object get value with key ', contact[1].altNumber);