var buttonEl = document.querySelector("#button");
var userPassword = document.querySelector("#userPassword");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var passwordInputs = [];
var newPassword = "";

buttonEl.addEventListener("click", function generatePassword() {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters",
    "enter character amount");
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
        alert("Please include at least one of the characters");
        return;
    }
if (confirmLowercase === true) {
    passwordInputs.push(lowercase);
    console.log(passwordInputs);
}
if (confirmUppercase === true) {
    passwordInputs.push(uppercase);
    console.log(passwordInputs);
}
if (confirmNumeric === true) {
    passwordInputs.push(numeric);
    console.log(passwordInputs);
}
if (confirmSpecial === true) {
    passwordInputs.push(special)
    console.log(passwordInputs);
}

for (i = 0; i < passwordInputs.length; i++) {
    if (i === 0) {
        for (j = 0; j < ( passwordLength - passwordInputs.length + 1 ); j++) {
            console.debug("lengths", passwordLength, passwordInputs.length);

            var character = passwordInputs[0].charAt(Math.floor(Math.random() * passwordInputs[0].length)); 
            newPassword = newPassword.concat(character);       
        }
    } else {
        var character = passwordInputs[i].charAt(Math.floor(Math.random() * passwordInputs[i].length));
        newPassword = newPassword.concat(character);
    }
}
console.log("newPassword", newPassword);
userPassword.textContent = newPassword
})

generatePassword();

userPassword.appendChild(newPassword);

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
