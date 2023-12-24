// ----------- Curring Function ------------------

// Curring is a concept of functional programming, where a function with multiple arguments transformed into a sequence of functions.
// Each of these functions are nested into each other.
// These functions allow you to create new functions while partially passing the arguments.

// ----------------- Normal Function ---------------

const  add1 = (a,b)=> {
    return a + b ;
}
console.log(add1 (12, 12));  // output : 24

// ---------------- Curring Function ------------------------

const add = x => {
    return y => {
        return x + y;
    }
};

const addByTwo = add(2);

console.log(addByTwo(2));  // 4
console.log(addByTwo(5));  // 7