function Student(fname, lname){
    this.fname = fname;
    this.lname = lname;

    this.getFullName = function(){
        console.log(`My name is ${this.fname} ${this.lname}`);
    }
}

let stud1 = new Student("Sid", "Nikude");
stud1.getFullName();