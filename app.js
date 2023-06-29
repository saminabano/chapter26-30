//chapter26-30
//q1 Write a program that takes a positive integer from user &
//display the following in your browser.
// number...
var number=prompt("write a positive integer") ;
var number1=Math.round(number);
var number2=Math.floor(number);
var number3=Math.ceil(number);
document.write("<br>","number:",number,"<br>","round of value :",number1,"<br>","floor value :",number2,"<br>","ceil value :",number3);

//q2 2. Write a program that takes a negative floating point
//number from user & display the following in your browser.

var number=prompt("write a negative integer") ;
var number1=Math.round(number);
var number2=Math.floor(number);
var number3=Math.ceil(number);
document.write("<br>","number:",number,"<br>","round of value :",number1,"<br>","floor value :",number2,"<br>","ceil value :",number3);
//Write a program that displays the absolute value of a
//number.
var number=prompt("enter a number")
var absulutV=Math.abs(number);
document.write("<br>","The absolut value of a ",number, " is :",absulutV);

//q4 Write a program that simulates a dice using random()
//method of JS Math class. Display the value of dice in your
//browser.:

for(i=0;i<6;i++){
var bigDecimal = Math.random();
 var improvedNum = (bigDecimal * 6);
 var numberOfStars = Math.ceil(improvedNum);
 document.write("<br>","random dice value",numberOfStars);}

 //q5 Write a program that simulates a coin toss using random()
//method of JS Math class. Display the value of coin in your
//browser
//Q5
for (i = 0; i<2; i++){ 
    var bigDecimal = Math.random();
     var improvedNum = (bigDecimal * 2)+1;
     var numberOfStars = Math.floor(improvedNum); 
     if(numberOfStars==1){
     var toss="Heads";
    }
    else{
     var toss="Tails";
    }
    document.write("<br>","Random coin toss: ", toss, "<br>");
}

//q6
var random = Math.random();
var multiply = (random*100 )+1 ;
var final = Math.floor(multiply);
document.write("Random Number between 1 and 100 is ", final);

//q7
//Write a program that asks the user about his weight. Parse
var data=prompt("enter your weight in kilograms");
var age=parseFloat(data);
document.write("<br>","The weight of the user is" ,age, "kilograms");

//Q8Write a program that stores a random secret number from
var random=Math.random();
var multiply=(random*10)+1;
var final= Math.floor(multiply);

var user = prompt("Enter a Number from one to ten");
if(user==final){
    document.write("<br>","Congratulations");
}
else {
    document.write("<br>","Sorry");
}
    