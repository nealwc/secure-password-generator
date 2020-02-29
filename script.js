// while loop to prompt for correct length until the correct length is given

var i = 0

while (i < 1) {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
        console.log(passwordLength);
        alert("Your password meets all the required criteria");
        i++;
    }
    else {
        alert("Your password please chose again.")
    }
}

alert("Your password must include at least a lowercase, uppercase, numeric or special characters.")

var i = 0

while (i < 1) {
    
    var confirmLowercase = confirm("Do you want to include lowercase characters in your password?");
    var confirmUppercase = confirm("Do you want to include uppercase characters in your password?");
    var confirmNumeric = confirm("Do you want to include numeric characters in your password?");
    var confirmSpecial = confirm("Do you want to include special characters in your password?");
    if (confirmLowercase === true || confirmUppercase === true || confirmNumeric === true || confirmSpecial === true) {
        console.log(confirmLowercase);
        console.log(confirmUppercase);
        console.log(confirmNumeric);
        console.log(confirmSpecial);
        alert("Good jorb");
        i++;
    }
    else {
        alert("Choose again.")
    }
}

var lowercase = ["abcdefghijklmnopqrstuvwxyk"];
var test = lowercase.split("");
for(i = 0; i < 6; i++) {
    console.log(test);
}
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numberic = ["0123456789"]
var special = ["~!@#$%^&*()_+-=[]\{}|;':,./<>?"]

for (i = 0; i < passwordLength; i++) {        
    
    password = randomCharString.charAt(Math.floor(Math.random() * Math.floor((randomCharString.length) - 1)));        
}
    
function geratePassword() {

}

// <!-- GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page -->


