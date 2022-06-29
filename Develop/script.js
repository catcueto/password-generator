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
// This function defines generate Password
function generatePassword() {
  console.log("Hola, bola! This is working");

  // STEP 1 : PROMPT THE USER FOR THE PASSWORD CRITERIA//
  // a) Password length: 8 < 128 characters
  var passwordLength = window.prompt(
    "Please enter the number of characters you would like your password to have. It must be between 8 and 128 characters"
  );
  // b) Variabels should include lowercase, uppercase, numbers, and special characters

  // STEP 2: VALIDATE THE INPUT

  // define all possible variables for characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // create empty strings
  var newPassword = "";
  var chars = "";
}
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
