//    3. nested "if ...else" Statement: ( if ..else ladder)
//         if(condition1) 
//             {
//             // block of code to be executed if condition1 is satisfied
//             } 
//         else if(condition2)
//             {
//             // block of code to be executed if condition2 is satisfied
//             } 
//         else if(condition3)
//             {
//             // block of code to be executed if condition3 is satisfied
//             } 
//         else 
//             {
//             // block of code to be executed if all conditions are not satisfied
//             }

var v = 3;
if (v == 1)
    {
        console.log("Value is 1 ");
    }
else if (v == 2)
    {
        console.log("Value is 2 ");
    }
else if (v == 3)
    {
        console.log("Value is 3 ");
    }
else if (v == 4)
    {
        console.log("Value is 4 ");
    }
else
    {
        console.log("Default case ");
    }