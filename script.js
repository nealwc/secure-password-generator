var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l" ,"m" ,"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "~!@#$%^&*()_+-=[]\{}|;':,./<>?";

var password = [];

function generatePassword() {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters");
    console.log(passwordLength);
    if (passwordLength < 8 || passwordLength >= 128) {
        alert("Your password must be between 8 and 128 characters, please chose again.");
        return; // exits func
    }
    var confirmLowercase = confirm("Do you want to include lowercase characters in your password?");
    var confirmUppercase = confirm("Do you want to include uppercase characters in your password?");
    var confirmNumeric = confirm("Do you want to include numeric characters in your password?");
    var confirmSpecial = confirm("Do you want to include special characters in your password?");
    console.log(confirmLowercase);
    console.log(confirmUppercase);
    console.log(confirmNumeric);
    console.log(confirmSpecial);
    if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
        alert("Please include at least one of the characters?");
        return;
    }
if (confirmLowercase === true) {
    password.push(lowercase);
    console.log(password);
}
if (confirmUppercase === true) {
    password.push(uppercase);
    console.log(password);
}
if (confirmNumeric === true) {
    password.push(numeric);
    console.log(password);
}
if (confirmSpecial === true) {
    password.push(special)
    console.log(password);
}
for (i = 0; i < passwordLength; i++) {
    // var a = ['a', 'b', 'c', 'd', 'e', 'f'];
    var newPassword = password[Math.floor(password.length * Math.random())];
    console.log(newPassword);
}
}
generatePassword();


// Run rest of code under here
// confirm types
// for loop to assign random value
// display final result on page


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
