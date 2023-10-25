/* Big letters array */
var bigLettersArr = ['A', 'B', 'C', 'D', "E", 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

/* Small letters array */
var smallLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

/* Special characters array */
var specialLettersArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '<', '>', '?'];

/* Numbers array */
var numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

/* length of password I want it to be */
var passGeneratorLength = 128;

/* answer array left blank */
var answerArr = [];
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  /* command takes you to createPrompts to see if it is true. If rightPrompts is true, it will activate the code for generatePassword. */
  var rightPrompts = createPrompts();
  /* get selector for the id "password" in index.html */
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

/* Code to generate a password */
function generatePassword () {
  var password = "";

  for (var i = 0; i < passGeneratorLength; i++) {
    /* create a var for a random character generator. Math.floor takes in all of the characters/numbers for the array that I have
    to create a password */
    var randomCharacters = Math.floor(Math.random() * answerArr.length);
    password = password + answerArr[randomCharacters];
  }
return password;
}

/* Question prompts for password generator */
function createPrompts () {
  answerArr = [];
  passGeneratorLength = parseInt(prompt("How many characters do you want for your password? (8 - 128 characters"));

  /* NaN = not a number. */
  if (isNaN(passGeneratorLength) || passGeneratorLength < 8 || passGeneratorLength > 128) {
    alert("Password length has to be between 8 - 128. Please enter the number again.");
    return false; 
  } 

  if (confirm("Would you like to include upper letters in your password?")) {
    answerArr = answerArr.concat(bigLettersArr); 
  }

  if (confirm("Would you like to include lowercase letters in your password?")) {
    answerArr = answerArr.concat(smallLettersArr); 
  }

  if (confirm("Would you like to include special letters in your password?")) {
    answerArr = answerArr.concat(specialLettersArr); 
  }

  if (confirm("Would you like to include numbers in your password?")) {
    answerArr = answerArr.concat(numArr); 
  }
  return true;
}