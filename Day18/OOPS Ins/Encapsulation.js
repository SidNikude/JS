
class Animal {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    getInfo() {
        return `The name of the animal is ${this.name} and age is ${this.age}`;
    }
}


// -------------- Cat ---------------

class Cat extends Animal {
    #weight; // ---> Mark as private
    constructor(name, age, weight){
        super(name, age);
        this.#weight = weight;
    }

    getWeight() {
        return this.#weight;
    }

    setWeight(weight) {
        this.#weight = weight;
    }
}


const myCat = new Cat ("Whiskers", 5, "5 Kg");
console.log(myCat.getWeight());
myCat.setWeight("6 Kg");
console.log(myCat.getWeight());


// O/P --->

// 5 Kg
// 6 Kg















// -------------- Dog ---------------

// class Dog extends Animal {
//     constructor(name, age, breed){
//         super(name, age);
//         this.breed = breed;
//     }

//     bark(){
//         return `woof`;
//     }
// }



