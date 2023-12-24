// Way1

// function prom2(age)
// {
//     console.log("Fetching data, please wait.");
//     return new Promise(function(resolve, reject){
//         setTimeout(function()
//         {
//             if(age>18)
//             {resolve("Age is above 18 ");}
//             else{reject("Not eligible");}
//         },3000)
//     })
// }
// function onFulfillment(result){
//     console.log(result);
// }
// function onRejection(reject){
//     console.log(reject);
// }

// prom2(20).then(onFulfillment).catch(onRejection);


// Way 2

function prom2(age)
{
    console.log("Fetching data, please wait.");
    return new Promise(function(resolve, reject){
        setTimeout(function()
        {
            if(age>18)
            {resolve("Age is above 18 ");}
            else{reject("Not eligible");}
        },3000)
    })
}


prom2(12).then((result)=>console.log(result))
    .catch((reject) =>console.log(reject));

