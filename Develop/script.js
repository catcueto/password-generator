// Assignment Code
// This variable targets the generate id
var generateBtn = document.querySelector("#generate");
// This function defines generate Password
function generatePassword() {
  console.log("Hola, bola! This is working");

  // MY CODE
  // STEP 1 : PROMPT THE USER FOR THE PASSWORD CRITERIA//
  // a) Password length: 8 < 128 characters
  var passwordLength = window.prompt(
    "Please enter the number of characters you would like your password to have. It must be between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    return "Invalid password length. Click the burgundy button below to restart the generator.";
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

  // If user selects [CANCEL] for all the prompts...
  if (!lowerCase && !upperCase && !numbers && !symbols) {
    // return this...
    return "You didn't select the required character criteria. Try again! :)";
  }

  // STEP 2: VALIDATE THE INPUT
  // create empty string
  var charSet = "";
  console.log(charSet);
  // THIS IS WHERE WE DEFINE OUR VARIABLES
  // If our lowerCase value(s) is selected [OK], then console.log...
  if (lowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
    console.log("Lower-case character(s) has been added");
  }
  if (upperCase) {
    //  // If our upper-case values(s) is selected [OK], then console.log...

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

  //returns the length of variable charSet
  var charLength = charSet.length;

  // STEP 3: GENERATING RANDOM PASSWORD BASED ON CRITERIA ABOVE
  var newPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    // Math.floor rounds a number DOWN to the nearest integer
    // Math.random creates a number between 0 and 1
    var character = Math.floor(Math.random() * charLength);
    // charAt gets the first character in a string
    newPassword += charSet.charAt(character);
  }

  // STEP 4: DISPLAY RANDOMIZED PASSWORD ON SCREEN
  // Need to return function to display something
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
