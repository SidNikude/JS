function divide(a,b){
    return new Promise(function(resolve,reject){
        let c = a/b;
        setTimeout(() => {
            
        if(c){
            resolve(`Your answer : ${c}`);
        }
        else{
            reject("Failed to calculate");
        }
    }, 2000);
    })
};

divide(2,5).then((result)=>{console.log(result);}).catch((result)=>{result});