//=============================================== 1
//Write a function called average that takes two numbers as parameters
//and returns their average.
//average(4, 6); ==> 5
//average(2, 3); ==> 2.5

function average(num1, num2) {
   // TODO: your code here
   var av= (num1+num2)/2;
   return av;
}
//=============================================== 2
//Write a function called get10thChar that takes a string as parameter
//and returns the 10th character of an input string.
//Note: assume all input strings will have at least 10 characters
//get10thChar("abcdefghijk");  ==>  "j"
//get10thChar("HelloWorld");  ==>   "d"

function get10thChar(str) {
   // TODO: your code here
   return str.charAt(9); // its return th 11th
}
console.log(get10thChar(helloworldddd));
//=============================================== 3
//Write a function called coffeeLover that takes a boolean value as parameter
//and returns the string "Enjoy a cup for free!" if the input is true, or "Take a look at our other drinks!" if the input is false.
//coffeeLover(true);   ==> "Enjoy a cup for free!"
//coffeeLover(false);  ==> "Take a look at our other drinks!"

function coffeeLover(value) {
   // TODO: your code here
   if(value === true){
   return "Enjoy a cup for free!";
 }
 return "Take a look at our other drinks!";
}

//=============================================== 4
//Write a function called getLengthOfTwoWords that takes two strings as parameters
//and returns the sum of their lengths.
//getLengthOfTwoWords('some', 'words'); ==> 9
//getLengthOfTwoWords('Hello', 'World'); ==> 10

function getLengthOfTwoWords(word1, word2) {
  // TODO: your code here
  var s1=word1.length;
  var s2=word2.length;
  return s1+s2;
}


//=============================================== 5
//Write a function called introduceMe that takes a string and a number as parameters
//and returns a string saying your name and how many pets you currently have.
//introduceMe("Alex", 2); ==>"Hi I am Alex and I have 2 pet(s)"
//introduceMe("Sam", 0); ==>"Hi I am Sam and I have 0 pet(s)"

function introduceMe(name, numPets) {
  // TODO: your code here
  return "Hi I am "+name+ " and I have "+numPets +" pets(s)";  /// missing some spaces
}
//=============================================== 6
//Write a function called wasItFunny that takes a boolean input as parameter
//and returns "meh" if the input was false, and "HAHAHA" if the input was true.
//wasItFunny(true);  ==> "HAHAHA"
//wasItFunny(false); ==> "meh"

function wasItFunny(response) {
    // TODO: your code here
    if(response=== false){
    return  "meh";
  }
   if(response=== true){
    return  "HAHAHA";
  }

}

//=============================================== 7
//Write a function called isWordLong that takes a string as parameter
//and returns true if the string is longer than 15 characters, 
//and false if the string is less than or equal to 15 characters. 
//You can assume that the input string will only contain letters.
//isWordLong('absentmindedness'); ==> true
//isWordLong('aerodynamics');     ==>  false

function isWordLong(word) {
   // TODO: your code here
   if(word.length>15){
   return true;
 }
  if(word.length<=15){
   return false;
 }

}

//=============================================== 8
//Write a function called executiveSummary that takes an email (string)  as parameter
//and returns the entire email If the email is less than 15 characters long Or the first character of given string is "U" letter, otherwise returns empty string.
//executiveSummary('URGENT: the lobby is rapidly filling up with popcorn.Send help.');   ==> "URGENT: the lobby is rapidly filling up with popcorn.Send help."
//executiveSummary('OhGreat!');  ==> "OhGreat!"
//executiveSummary("the lobby is rapidly filling up with popcorn.Send help."); ==> ""

function executiveSummary(email) {
   // TODO: your code here
   if(email.length<15 || email[0]=="U"){
   return email;
 }
 return "" ///space not empty
}

//=============================================== 9

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/

function drawTriangle() {
  // TODO: your code here

 

}

//=============================================== 10
//Write a function called sumOdd that takes two numbers as parameters and 
//returns the sum of all odd numbers starting from num1 to num2.



function sumOdd(number1, number2) {
   // TODO: your code here
   //
}

//=============================================== 11
//Short Answer Theoretical Questions:
//In your own words, no more than 3 sentences, answer the following: 
//What is Function parameter?
//Write your answer here...  the parameter takes the value sent by function argument
//What is function argument?
//Write your answer here... the argument that we send to a function when it's invoked
//What is function signature?
//Write your answer here... i don't know
//What is a variable?
//Write your answer here... it could be numbers,strings and boolean 


                                                           //Good Luck :))