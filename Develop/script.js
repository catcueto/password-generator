// Assignment Code
// This variable targets the generate id
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// USE THIS AS GUIDELINES
// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }

// MY CODE
// This function definepus generate Password
function generatePassword() {
  console.log("Hola, bola! This is working");

  // STEP 1 : PROMPT THE USER FOR THE PASSWORD CRITERIA//
  // a) Password length: 8 < 128 characters
  var passwordLength = window.prompt(
    "Please enter the number of characters you would like your password to have. It must be between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return "Invalid password length. Click the burgundy button below to restart the generator";
  } else {
    console.log("Valid password length selected");
  }

  // b) PROMPTS TO CONFIRM INCLUSION (OR NOT) OF LOWERCASE, UPPERCASE, NUMERIC, AND SPECIAL CHARs
  // Using Window confirm method to display an OK button + Cancel button
  var lowerCase = confirm(
    "Would you like to include LOWERCASE letters in your password?"
  );
  var upperCase = confirm(
    "Would you like to include UPPERCASE letters in your password?"
  );
  var numbers = confirm(
    "Would you like to include NUMERIC characters in your password?"
  );
  var symbols = confirm(
    "Would you like to include SPECIAL characters in your password?"
  );

  // c) Variabels should include lowercase, uppercase, numbers, and special characters

  // create empty strings
  var charSet = "";
  // If user selects [CANCEL] for all the prompts...
  if (!lowerCase && !upperCase && !numbers && !symbols) {
    return "You didn't select the required character criteria. Try again! :)";
  }

  // THIS IS WHERE WE DEFINE OUR VARIABLES
  // If our lowerCase variable is selected [OK], then console.log...
  if (lowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
    console.log("Lower-case character(s) has been added");
  }
  if (upperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("Upper-case character has been added");
  }
  if (numbers) {
    charSet += "0123456789";
    console.log("Numeric value(s) has been added");
  }
  if (upperCase) {
    charSet += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    console.log("Special character(s) has been added");
  }
  var newPassword = "";
}

// STEP 2: VALIDATE THE INPUT
console.log(charSet);
//returns the length of variable charSet
var charLength = charSet.length;

// STEP 3
// define all possible variables for characters
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numbers = "0123456789";
// var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Window pprompt - returns input value if the user click "OK", otherwise null

//   var paswordLength = function (min, max) {
//     8, 128;
//     var password = "";
//   };

//   for (var = 0, i <= passwordLength; i++){
//     var randomNumber = Math.floor(Math.random()* chars.length);
//     password += chars.substring(randomNumber, randomNumber+1)
//   }
//   return "hiya";
// }
