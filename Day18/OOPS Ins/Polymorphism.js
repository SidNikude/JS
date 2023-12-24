class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    makeSound(){
        return `some nice sound made`;
    }
}

// ----------- Dog ----------------

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    makeSound(){
        return `Woof`
    }
}

// --------------------- Cat -----------------

 class Cat extends Animal {
    constructor(name, age, weight){
        super(name, age);
        this.weight = weight;
    }

    makeSound(){
        return `Meow`
    }
 }

// ------------ Creating Objects --------------

const myDog = new Dog ("Rex", 2, "German Shepard");
const myCat = new Cat ("Whiskers", 5, "5 kg");

console.log(myDog.makeSound());
console.log(myCat.makeSound());


// O/P --->
// Woof
// Meow