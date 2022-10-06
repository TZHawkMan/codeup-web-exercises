alert ("welcome to my website!")

let userInput = prompt ('What is your favorite color?') ;
console.log ('The user entered: ' +userInput);

alert (userInput +" is my favorite color too!");

//question 1
let mermaid = prompt ("how many days did you borrow it?");
let brotherbear = prompt ("how many days did you borrow it?")
let hercules = prompt ("how many days did you borrow it?")

let pricePerDay = 3;
let totalCost = (mermaid + brotherbear + hercules) * pricePerDay;

//question 2
let googlePay = prompt("How much does Google pay?");
let amazonPay = prompt("How much does amazon pay?");
let facebookpay = prompt("How much does Facebook pay?");

let googlehours = prompt ("How many hours did you work at google?");
let amazonhours = prompt ("How many hours did you work at amazon?");
let facebookhours = prompt ("How many hours did you work at facebook?");

let payment = ( googlePay * googlehours) + (amazonPay * amazonhours) + (facebookpay * facebookhours);
alert("your payment is " + payment)
// question 3
let isfull = confirm ("is the class full");
let hasConflict = confirm("do you have a conflict with your schedule?")
alert (!isfull && !hasConflict)

//question 4
let itemsbought = prompt ("How many items did you buy?");
let offer = confirm ("has the offer expired?");
let ispremium = confirm ("are you a premium member  ?")
alert((parseFloat(itemsbought)> 2 || ispremium)&& !offer);