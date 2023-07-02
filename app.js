 //chapter 30---34
   //Q1 Write a program that displays current date and time in
//your browser. 
var toDayDate=new Date();
console.log(toDayDate);
 
//Q2Write a program that alerts the current month in words.
//For example December.
var monthName=["january","february","march","april","may","june","july","august","september","october","november","december"]
var now=new Date();
var month=now.getMonth();
var nameOfMon=monthName[month];
alert("current month : " + nameOfMon);
//Q3Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show
//Sun.
var currentDay = new Date();

var date = currentDay.toString();
var final = date.slice(0,3);
alert("Today is " + final);
//Q 4 Write a program that displays a message “It’s Fun day” if
//its Saturday or Sunday today.

 var dayName=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
 var now=new Date();
 var newDay= now.getDay();
 if(newDay === 0 || newDay === 0){
    alert("It's fun Day");
 } 
else{
    alert("It's not fun Day");
}
//Q 5Write a program that shows the message “First fifteen
//days of the month” if the date is less than 16th of the month
//else shows “Last days of the month”.
for(i=0;i<15;i++);{
var date=new Date();
var month=date.getMonth();
if(month===15){
    var c=15;
document.write("<br>","first fifteen days of the month,c")
}
    else{
        var c=16;
    }
    document.write("<br>","last month of the day",c)

}
// Q 6 Write a program that determines the minutes sinc........
var now=new Date();
var elapsed = new Date("jan 1 , 1970");
var  minToDay=now.getMinutes();
var elapsedMin = elapsed.getMinutes();
var difMin = elapsedMin - minToDay;

document.write("<br>","elapsed min since jan 1 ,1970 :",difMin);

//Q7 Write a program that tests whether it's before noon and
//alert “Its AM” else “its PM”.

var now=new Date();
var set=now.getHours();
    if(set < 12){
        alert("it's AM");
    }
    else{
        alert("It's PM");
    }
    //Q 8
 var laterdate = new Date('December 31, 2020, 00:00:00');
 document.write("<br> Later Date:", laterdate);
    //Q9

    var current = new Date();
    var ramadan = new Date('June 18, 2015');
    var e = current.getTime() - ramadan.getTime();
    var h = Math.floor(e/(1000*60*60*24));
    document.write("<br>", h,"days have passed sinces Ramadan 2015");
    // Q10
var ref = new Date();
var beginning = new Date('Jan 01, 2015, 00:00:00');
var diff = ref.getTime() - beginning.getTime();
var h = Math.floor(diff/1000);
document.write("<br>","on reference date",ref,"<br>",h, "seconds have passsed since the beginning of 2015")
    //Q 11Create a Date object for the current date and time.
//Extract the hours, reset the date object an hour ahead .....

  var toDayDate=new Date();
  document.write("<br>","current date :" , toDayDate);
  var currentHour=toDayDate.getHours();
  toDayDate.setHours(currentHour+1);
  document.write("<br>","1 Hour ago it was",toDayDate);
  //Q12 Write a program that creates a date object and show the
//date in an alert box that is reset to 100 years back?

var now = new Date();
var nowYear = now.getFullYear();
now.setFullYear(nowYear - 100);
alert("100 yeats back it was :" + now);

//q13
var d = new Date();
var e = d.getFullYear();
var f = prompt("Enter your Age");
var g = e - f;
document.write("<br> Your birth year is ", g);

//q14
var a = prompt("Write Your Name");
var b = prompt("Enter no of units consumed");
var c = new Date;
var d = c.getMonth();
var e = b*23;
document.write("<br> Customer Name: ",a);
document.write("<br> Current Month", d);
document.write("<br> No. of units: ",b);
document.write("<br> Charge per unit: 23");
document.write("<br> Amount Payable (Within Due Date): ", e);
document.write("<br> Late payment surcharge: 500");
document.write("<br> Amount Payable(After due date:" , e+500 );

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
    