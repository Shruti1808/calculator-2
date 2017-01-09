var add =function(number1,number2){
return number1 + number2;
};
var subtract = function(number1,number2){
  return number1 - number2;
};
var multiply = function(number1,number2){
  return number1*number2;
};
var division = function(number1,number2){
  return number1/number2;
};
var remainder=function(number1,number2){
  return number1 % number2;
};
var power=function(number1,number2){
  return Math.pow(number1,number2);
};

var result= var add + var subtract
var number1= parseInt(prompt("Enter a number:"));
var number2= parseInt(prompt("Enter another number:"));

alert("The sum of the two is" + add(number1, number2) + ".");
alert("The subtraction of the two is" + subtract(number1, number2) + ".");
alert("The multiply of the two is" + multiply(number1, number2) + ".");
alert("The division of the two is" + division(number1, number2) + ".");
alert("The remainder of the two is" + remainder(number1, number2) + ".");
alert("The power of the two is" + power(number1, number2) + ".");


// var result= "sum is: " + add(number1,number2)+" subtraction is   "+subtract(number1,number2)+" multiply is "+multiply(number1,number2)+" division is "+division(number1,number2)+" remainder is "+remainder(number1,number2)+" power is "+power(number1,number2);
//
// alert("the result of your calculation is "+result);
