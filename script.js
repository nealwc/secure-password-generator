var buttonEl = document.querySelector("#button");
var userPassword = document.querySelector("#userPassword");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var passwordInputs = [];
var newPassword = "";

buttonEl.addEventListener("click", function generatePassword() {
    var passwordLength = prompt("Please choose a password length between 8 and 128 characters"); // determines size of password and validates
    if (passwordLength < 8 || passwordLength >= 128) {
        alert("Your password must be between 8 and 128 characters, please chose again.");
        return;
    }
    // 
    var confirmLowercase = confirm("Do you want to include lowercase characters in your password?");
    var confirmUppercase = confirm("Do you want to include uppercase characters in your password?");
    var confirmNumeric = confirm("Do you want to include numeric characters in your password?");
    var confirmSpecial = confirm("Do you want to include special characters in your password?");

    if (confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
        alert("Please include at least one of the characters");
        return;
    }
if (confirmLowercase === true) {
    passwordInputs.push(lowercase);
    // checks if user wants to include lowercase characters and adds to passwordInputs variable
}
if (confirmUppercase === true) {
    passwordInputs.push(uppercase);
    // checks if user wants to include uppercase characters and adds to passwordInputs variable
}
if (confirmNumeric === true) {
    passwordInputs.push(numeric);
    // checks if user wants to include numeric characters and adds to passwordInputs variable
}
if (confirmSpecial === true) {
    passwordInputs.push(special)
    // checks if user wants to include special characters and adds to passwordInputs variable
}

for (i = 0; i < passwordInputs.length; i++) { // uses password length to run for loop
    if (i === 0) {
        for (j = 0; j < ( passwordLength - passwordInputs.length + 1 ); j++) {
            var character = passwordInputs[0].charAt(Math.floor(Math.random() * passwordInputs[0].length)); 
            newPassword = newPassword.concat(character);       
        }
    } else {
        var character = passwordInputs[i].charAt(Math.floor(Math.random() * passwordInputs[i].length));
        newPassword = newPassword.concat(character);
    }
}
userPassword.textContent = newPassword 
})

generatePassword();

userPassword.appendChild(newPassword); // updates html with generated password
