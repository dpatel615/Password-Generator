// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword () {
 console.log(" Enter the password to generate  ");
// prompt the user for the password criteria
 let  passwordLenght = prompt("Enter the password with criteria: 8 to 128 charater");
// a.password lenght 8 to 128
    if ( passwordLenght < 8 || passwordLenght < 128) {
      alert("please start again and enter a number between 8 and 128");
} else {
  // set the variable passwordlenght to a number datatype to use later to reference an array lenght
  passwordLenght = (passwordLenght*1);
}
// b. lowercase , uppercase, special charaters, numbers
  upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  lowerCase = ["a", "b","c" , "d" , 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  specialCharater =  [' ','!','"','#','$','%','&','\'','(',')','*','+',',','-','\.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
  number = ['0','1','2','3','4','5','6','7','8','9'];

 // generate password by criteria
     passwordchoose = new array ();

     if (upperCase === true){
       passwordchoose.push.apply(passwordchoose,upperCase)
     }
     if (lowerCase === true) {
       passwordchoose.push.apply(passwordchoose,lowerCase)
     }
     if (specialCharater === true) {
       passwordchoose.push.apply(passwordchoose,specialCharater)
     }
     if (number === true){
       passwordchoose.push.apply(passwordchoose,number)
     }



// display the password on page    





  return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
