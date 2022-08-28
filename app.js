/*program 01
// write a ts program to find maximum between two numbers
var userInput:any = prompt ("Enter the Value");
var num:number = 15;
if (userInput > num) {
    console.log(userInput+ "is greater than 15");
    
} else {
    console.log(userInput+ "is smaller than 15");
    
}

// program 02
// write a ts program to find maximum between two numbers
// var userInput1:any =prompt()


// program 03
// write a ts program to check wheather number is negative , positive or zero

var userInput1:any = prompt("Enter the Number")

if (userInput1 > 0) {
    console.log(userInput1+ "is positive");
}
else if (userInput1 == 0) {
    console.log("Number is zero");
}
else{
    console.log(userInput1+ "is negative");
}

// program 04
// write a ts program to check wheather number is divisible by 5 and 11 or not

var userInput2:any =prompt("Enter the number")
if (userInput2 % 5 == 0) {
    console.log(userInput2+ "is divisible by 5");
}
else if (userInput2 % 11 == 0) {
    console.log(userInput2+ " is divisible by 11");
}
else{
    console.log(userInput2+ " is not divisible");
}

// program 05
// write a ts program to check wheather number is even or odd
var userInput3:any = prompt("Enter the number")

if (userInput3 % 2 == 0){
    console.log(userInput3+ " is even");
}
else{
    console.log(userInput3+ " is odd");
}

// program 06
// write a ts program to check wheather a year is leap or not
var userInput4:any = prompt("Enter the year")
if (userInput4 % 4 == 0) {
    console.log(userInput4+ " is leap year");
}
else{
    console.log(userInput4+ " is not leap year");
}

// program 07
// write a ts program to check wheather a character is alphabet or not

var userInput5:any = prompt("Enter the character")

if ( userInput5 >= "a" &&  userInput5 <= "z") {
    console.log( userInput5+ " is alphabet");
}

// program 08
// write a ts program to input any character and check whether it is vowel and consonent

var userInput6:any = prompt("Enter the character")

if (userInput6 == "a") {
    console.log(userInput6+ " is vowel");
}
else if (userInput6 == "e") {
    console.log(userInput6+ " is vowel");
}
else if (userInput6 == "i") {
    console.log(userInput6+ " is vowel");
}
else if (userInput6 == "o") {
    console.log(userInput6+ " is vowel");
}
else if (userInput6 == "u") {
    console.log(userInput6+ " is vowel");
}
else{
    console.log(userInput6+ " is consonent");
}

// program 09
// write a ts program to input any character and check whether a character is alphabet , digit or special character

var userInput7:any = prompt("Enter the character")

if (userInput7 >= "a" && userInput7 <= "z") {
    console.log(userInput7+ " is alphabet");
}
else if (userInput7 >= 0 && userInput7 <= 9) {
    console.log(userInput7+ " is digit");
}
else{
    console.log(userInput7+ " is special character");
}

// program 10
// write a ts program to input any character and check whether a character is uppercase or lowercase

var userInput8:any = prompt("Enter the character")

if (userInput8 >= "A" && userInput8 <= "Z") {
    console.log(userInput8+ " is uppercase");
}
else{
    console.log(userInput8+ " is lowercase");
}

// program 11
// write a ts program to input weak number and print day of weak

var userInput9:any = prompt("Enter number of day of weak")

if (userInput9 == 1) {
    console.log("Monday");
}
else if (userInput9 == 2) {
    console.log("Tuesday");
}
else if (userInput9 == 3) {
    console.log("Wednesday");
}
else if (userInput9 == 4) {
    console.log("Thursday");
}
else if (userInput9 == 5) {
    console.log("Friday");
}
else if (userInput9 == 6) {
    console.log("Saturday");
}
else{
    console.log("Sunday");
}

// program 12
// write a ts program to input month number and print days of month

var userInput10:any = prompt("Enter the Month number")

if (userInput10 == 1) {
    console.log("Days in January => 31");
}
else if (userInput10 == 3) {
    console.log("Days in March => 31");
}
else if (userInput10 == 5) {
    console.log("Days in May => 31");
}
else if (userInput10 == 7) {
    console.log("Days in July => 31");
}
else if (userInput10 == 8) {
    console.log("Days in August => 31");
}
else if (userInput10 == 10) {
    console.log("Days in October => 31");
}
else if (userInput10 == 12) {
    console.log("Days in December => 31");
}
else if (userInput10 == 4) {
    console.log("Days in April => 30");
}
else if (userInput10 == 6) {
    console.log("Days in June => 30");
}
else if (userInput10 == 9) {
    console.log("Days in September => 30");
}
else if (userInput10 == 11) {
    console.log("Days in November => 30");
}
else{
    console.log("Days in February => 28/29");
}

// program 14
// write a ts program to input angles of a triangle and check whether triangle is valid or not

var angleA:any = prompt("Enter the value of A")
var angleB:any = prompt("Enter the value of B")
var angleC:any = prompt("Enter the value of C")


if (+angleA + +angleB + +angleC == 180) {
    console.log("Triangle is valid");
}
else{
    console.log("Triangle is not valid");
}

// program 15
// write a ts program to input angles of a triangle and check whether triangle is equiletral , isoceles or scalene

var angleX:any = prompt("Enter the value of X")
var angleY:any = prompt("Enter the value of Y")
var angleZ:any = prompt("Enter the value of Z")

if (angleX == angleY || angleZ ) {
    console.log("Triangle is equiletral");
}
else if (angleX == angleY && angleX == angleZ && angleY ==angleZ ) {
    console.log("Triangle is isoscales");
}
else{
    console.log("Triangle is scalene");
}*/
// program 16
/* write a ts program to input marks of five subjects Physics , Chemistry , Biology , Mathematrics , and Computer
// calculate percentage and give grading them
var Phy:any = prompt("Enter the marks of Physics");
var Chem:any = prompt("Enter the marks of Chemistry");
var Maths:any= prompt("Enter the marks of Mathematics");
var Bio:any = prompt("Enter the marks of Biology");
var Comp:any = prompt("Enter the marks of Computer");

var totalNumber:any = 500
var obtainedeNumber:any = +Phy + +Chem + +Maths + +Bio + +Comp
var average:any = obtainedeNumber / 5
console.log(average)

if (average >= 90) {
    console.log(" You have got grade A");
}
else if (average >= 80 && average < 90) {
    console.log(" You have got grade B");
}
else if (average >= 70 && average < 80) {
    console.log(" You have got grade C");
}
else if (average >= 60 && average < 70) {
    console.log(" You have got grade D");
}
else if (average >= 40 && average < 60) {
    console.log(" You have got grade E");
}
else {
    console.log(" You have got grade F");
}*/
// program 16
// write a ts program to input marks of five subjects Physics , Chemistry , Biology , Mathematrics , and Computer
// calculate percentage and give grading them
