// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* Big letters array */
const bigLetters = ['A', 'B', 'C', 'D', "E", 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
console.log(bigLetters);

/* Small letters array */
const smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(smallLetters);

/* Special characters array */
const specialLetters = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '?'];
console.log(specialLetters);

/* Numbers array */
const numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(numArr);

function validateLength(userLength) {
  return false;
}

function generatePassword () {
  var passlength = prompt("Enter password length 8-128 characters")

    console.log(passlength);

    if (validateLength(passlength)) {

    } else {
      alert("You have entered an invalid password length")
      return '';
    }

    /* does not do anything yet */
  return newPass;
};



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
