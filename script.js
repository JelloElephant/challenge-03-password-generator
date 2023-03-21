var uniChr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
"-", "=", "+", "`", "~", "[", "]", "{", "}", ";", ":", "'", '"', "|", "<",
">", ",", ".", "?", "/", "//", ""];

var lowCrh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numChr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];

var generateBtn = document.querySelector("#generate");


function passwordOptions() {
  //Ask for users desired password length
  var leng = parseFloat(prompt("How long do you want your desired password to be?"), 10);
  
  //Checks to see if provided length is correct data type
  if (Number.isNaN(leng)) {
    alert("Password length must be provided as a digit");
    return null;
  }

  //Checks to see if password length is witin acceptable standards
  if ((leng < 8) || (leng > 129)) {
    alert("Password length not within acceptable character limit of 8 - 128");
    return null;
  };
};

function generatePassword() {
  var choices = passwordOptions();

  var final = [];

  var desChr = [];
  var finChr = [];
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
