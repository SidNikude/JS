function myPrompt() 
{
    var result = prompt("please enter your age");
    if (result == '' || result == null) 
    {
     console.log("invalid input");
    } 
    else if (result < 16) 
    {
     console.log('not eligible');
    }
    else 
    {
     console.log('you are eligible');
    }
}
myPrompt();