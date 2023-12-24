class Student{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    getFullName(){
        console.log(`My name is ${this.fname} ${this.lname}`);
    }
}

let stud1 = new Student("Sid", "Nikude");
stud1.getFullName();