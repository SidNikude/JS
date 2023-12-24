function confirmationbox() 
{
    var result = confirm("Do you want to continue?");
    if (result) {
     console.log('user choose to continue');
    } else {
     console.log('user choose NOT to continue');
    }
}
confirmationbox();