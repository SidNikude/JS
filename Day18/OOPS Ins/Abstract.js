class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
        if(this.constructor == Animal){
            throw new Error(`can't create a instance of Abstract class`);
        }
    }

    makeSound(){
        throw new Error(`Abstract method doesn't have an implementation`);
    }
}


// -------------- Dog -----------------

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age)
        this.breed = breed;
    }

    makeSound(){
        return `woof`;
    }
}

// ------------- Cat ---------------------

class Cat extends Animal {
    constructor(name, age, weight){
        super(name, age);
        this.weight = weight;
    }

    makeSound(){
        return `meow`;
    }
}


const myDog = new Dog("Rex", 2, "German Shepard");

const myCat = new Cat("Whiskers", 5, "5 Kg");

console.log(myCat.makeSound());

// const myAnimal = new Animal("Barney", 3);
// ---> can't instantiate anymore

// myAnimal.makeSound();
// ----> this will give us an error since makeSound() method isn't available

// ----> Abstract method doesn't have an implementation

