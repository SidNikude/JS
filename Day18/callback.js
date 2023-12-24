// A callback is a function passed as an argument to another function.



// function
function greet(name, callback){
    console.log("Hi" + " " + name);
    callback();
}

// callback function
function callMe(){
    console.log("I am a callback function");
}

// passing function as an argument
greet("SID", callMe);





