// Character set for potential password options
var uniChr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_",
"-", "=", "+", "`", "~", "[", "]", "{", "}", ";", ":", "'", '"', "|", "<",
">", ",", ".", "?", "/", "//", ""];

var lowCrh = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppChr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numChr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];


function passwordOptions() {
  var leng = parseFloat(prompt("How long do you want your desired password to be?"), 10);
  
  //Checks to see if provided length is correct data type
  if (Number.isNaN(leng)) {
    alert("Password length must be provided as a digit");
    return null;
  }

  //Checks to see if password length is witin acceptable standards
  if ((leng < 8) || (leng > 128)) {
    alert("Password length not within acceptable character limit of 8 - 128");
    return null;
  };

  //Storage variables for various charcter options
  var hasUnique = confirm("Would you like unique characters in your password?");
  var hasLower = confirm("Would you like lower case characters in your password?");
  var hasUpper = confirm("Would you like upper case characters in your password?")
  var hasNum = confirm("Would you like numerical chaarcters in your password?");

  //check for special characters, reseting if none are found
  if (hasUnique === false && hasLower === false && hasUpper === false && hasNum === false) {
    alert("Password must contain at least one special character type")
    return null;
  };

  //Creates a password object that stores Boolieans for special characters and length
  var potenPass = {
    leng: leng, hasUnique: hasUnique, hasLower: hasLower, hasUpper: hasUpper, hasNum: hasNum
  };

  return potenPass;

};

//Function to get random element from within an array
function getRandom(arr) {
  var randArry = Math.floor(Math.random() * arr.length);
  var randEle = arr[randArry];

  return randEle;
}

function generatePassword() {
  var choices = passwordOptions();

  //Variable to store password as it's being built
  var final = [];
  //List of desired characters for our password
  var desChr = [];
  var finChr = [];

  //Checks to see if object exsists, terminates if not
  if (!choices) 
  return null;

  //Updates desChr to include desired characters and adds a random character to an auto-include list
  if (choices.hasUnique) {
    desChr = desChr.concat(uniChr);
    finChr.push(getRandom(uniChr));
  }
  if (choices.hasLower) {
    desChr = desChr.concat(lowCrh);
    finChr.push(getRandom(lowCrh));
  }
  if (choices.hasUpper) {
    desChr = desChr.concat(uppChr);
    finChr.push(getRandom(uppChr));
  }
  if (choices.hasNum) {
    desChr = desChr.concat(numChr);
    finChr.push(getRandom(numChr));
  }

  //Gets a random character from our desired character list and adds it to our final password
  for (var i = 0; i < choices.leng; i++) {
    var potenChr = getRandom(desChr);

    final.push(potenChr);
  };

  //Adds at least one guarenteed random character from out auto-include list 
  for (var x = 0; x < finChr.length; x++) {
    final[x] = finChr[x];
  };

  //
  return final.join('');
};

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
