var add =function(number1, number2){
 return number1 + number2;
};
var subtract = function(number1, number2){
  return number1 - number2;
};
var multiply = function(number1, number2){
  return number1*number2;
};
var division = function(number1, number2){
  return number1/number2;
};
var remainder = function(number1, number2){
  return number1 % number2;
};
var power = function(number1, number2){
  return Math.pow(number1,number2);
};

  $(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      var result = add(number1, number2);
      $("#output").text(result);
    });
  });


  //alert("The subtraction of the two is " + add(number1, number2) + ".");
  // alert("The multiply of the two is " + multiply(number1, number2) + ".");
  // alert("The division of the two is " + division(number1, number2) + ".");
  // alert("The remainder of the two is " + remainder(number1, number2) + ".");
  // alert("The power of the two is " + power(number1, number2) + ".");
