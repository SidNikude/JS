
class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getInfo(){
        return (
            `The name of the animal is ${this.name} and age is ${this.age}`
        )
    }
}

// ----- Dog ---------------
class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    bark(){
        return "woof";
    }
}

// ----- Cat ---------------

class Cat extends Animal{
    constructor(name, age, weight){
        super(name, age);
        this.weight = weight;
    }
}

// --- creating object for Dog ----
const myDog = new Dog ("Rex", 2, "German Shepard");
console.log(myDog.getInfo());
console.log(myDog.breed);
console.log(myDog.bark());


// --- creating object for Cat ----
const myCat = new Cat ("Whiskers", 5, "5 Kg");
console.log(myCat.getInfo());
console.log(myCat.weight);

// O/P --->
// The name of the animal is Rex and age is 2
// German Shepard
// woof
// The name of the animal is  Whiskers and age is 5
// 5 Kg

