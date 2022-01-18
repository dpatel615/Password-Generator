// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b","c" , "d" , 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharater =  [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','\.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var passwordLenght;
var upperCaseCheck;
var lowerCaseCheck;
var specialCharaterCheck;
var numberCheck;

function generateLenght () {
// prompt the user for the password criteria
   passwordLenght = prompt("Enter the password with criteria: 8 to 128 charater");
// a.password lenght 8 to 128
    if ( passwordLenght < 8 && passwordLenght < 128) {
      alert("please start again and enter a number between 8 and 128");
       generateLenght ();
} else { 
    alert("The next you will be ask what type of charaters you would like to inculded in password");
}
return passwordLenght;
}

function generateupperCase () {
  upperCaseCheck = prompt("Do you want to inculded uppercase Charaters in password yes(y)/no(n)?");

  if (upperCaseCheck === "yes" || upperCaseCheck === "y") {
    upperCaseCheck = true;

  } else if (upperCaseCheck === "no" || upperCaseCheck === "n") {
   upperCaseCheck = false;
 
 } else {
    alert("Please write yes/no!");
 }
  return upperCaseCheck;
}
function generatelowerCase () {
  
lowerCaseCheck = prompt(" Do you want to inculded lowecase charaters in you password yes(y)/no(n)?");
  
if (lowerCaseCheck === "yes" || lowerCaseCheck === "y") {
 lowerCaseCheck = true;
 

} else if (lowerCaseCheck === "no" || lowerCaseCheck === "n"){
  lowerCaseCheck = false;
 

}else {
  alert("please write yes/no!");
}
 return lowerCaseCheck;
}
 
function generatespecialCharater () {
  
  specialCharaterCheck = prompt("Do you want to inculded special charaters in your password yes(y)/ no(n)");

  if (specialCharaterCheck === "yes" || specialCharaterCheck === "y"){
    specialCharaterCheck = true;
  

  }else if (specialCharaterCheck === "no" || specialCharaterCheck === "n") {
    specialCharaterCheck = false;
    

  } else {
    alert("please write yes/no?");
  }
 return specialCharaterCheck;
}

function generatenumber () {
  
  numberCheck = prompt(" Do you want to included numbers in your password yes(y)/no(n) ? ");

  if ( numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
  

  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    

  } else {
    alert ("please enter yes or no");
  }
  return numberCheck;
}
 



function generatePassword() {
  generateLenght();
  console.log(passwordLenght);
  generateupperCase();
  console.log(upperCaseCheck);
  generatelowerCase();
  console.log(lowerCaseCheck);
  generatespecialCharater();
  console.log(specialCharaterCheck);
  generatenumber();
  console.log(numberCheck);

  var charater = " ";
  var password1 = " ";

  if (upperCaseCheck && lowerCaseCheck && specialCharaterCheck && numberCheck){
    charater += upperCase + lowerCase + specialCharater + number;

  } else if (upperCaseCheck && lowerCaseCheck && specialCharaterCheck) {
    charater += upperCase + lowerCaseCheck + specialCharater ;

  } else if (upperCaseCheck && specialCharater && numberCheck) {
    charater += upperCase + specialCharater + number ;

  } else if ( lowerCaseCheck && specialCharater && numberCheck) {
    charater += lowerCase + specialCharater + number;

  } else if (  upperCaseCheck && lowerCaseCheck) {
    charater += upperCase + lowerCase;

  } else if ( upperCaseCheck && specialCharaterCheck) {
    charater += upperCase + specialCharater;

  } else if (upperCaseCheck && numberCheck) {
    charater += upperCase + number;

  } else if (lowerCaseCheck && specialCharaterCheck) {
    charater += lowerCase + specialCharater;

  } else if (lowerCaseCheck && numberCheck) {
    charater += lowerCase + number;

  } else if (specialCharaterCheck && numberCheck){
    charater += specialCharater + number;

  }else if (upperCaseCheck) {
    charater += upperCaseCheck;

  } else if (lowerCaseCheck) {
    charater += lowerCase;

  } else if (specialCharaterCheck) {
    charater += specialCharater;

  } else if (numberCheck) {
    charater += number;

  } else {
     charater  === " ";
  }
  
  for( var i =0 ; i < passwordLenght ; i++ ) {
    password1 += charater.substring(Math.floor(Math.random ()* charater.Lenght )) ;
  }
 return password1;

}




  





  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
