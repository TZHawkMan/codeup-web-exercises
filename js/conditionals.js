 (function() {
     "use strict";

//
//     /* ########################################################################## */
//
//     /**
//      * TODO:
//      * Create a function named `analyzeColor` that accepts a string that is a color
//      * name as input. This function should return a message which relates to the
//      * color stated in the argument of the function. For colors you do not have
//      * responses written for, return a string stating so
//      * Example:
//      *
//      *  > analyzeColor('blue') // returns "blue is the color of the sky"
//      *  > analyzeColor('red') // returns "Strawberries are red"
//      *
//      *
//      *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//      *
//      * You should use an if-else-if-else block to return different messages.
//      *
//      * Test your function by passing various string literals to it and
//      * console.logging the function's return value
//      */
    prompt("what color do you like?")
    function analyzeColor(color){
        if (color === "red") {
          (alert("I like red color"));

        }else if (color ==="blue"){
            alert ( "I like blue color");
        }
        else alert( " I don't know that color");
    }

analyzeColor("red");

// console.log ("1");
// console.log ("2");
// let one = ("one1")
//     function functionOne (){
//   return console.log (6)
//     }
// console.log (one)
// console.log (functionOne)


//
//
//
//
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
//     let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let  randomColor = colors[Math.floor(Math.random() * colors.length)];
//     /**
//      * TODO:
//      * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//      * You should see a different message every time you refresh the page
      console.log (randomColor)
//
//     /**
//      * TODO:
//      * Comment out the code above, and refactor your function to use a switch-case statement
//      */function analyzeColor
function analyzeColor(color){
      switch( color ){
          case ("red"):
              return ("I like red color");
          case ("blue"):
              return ("I like blue color");
          default:
              return("I don't know that color");

      analyzeColor("red")
      }
 }
//     /**
//      * TODO:
//      * Prompt the user for a color when the page loads, and pass the input from the
//      * user to your `analyzeColor` function. Alert the return value from your
//      * function to show it to the user.
//      */
//
//     /* ########################################################################## */
//
//     /**
//      * TODO:
//      * Suppose there's a promotion in Walmart, each customer is given a randomly
//      * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//      * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//      * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//      * everything for free!.
//      *
//      * Write a function named `calculateTotal` which accepts a lucky number and total
//      * amount, and returns the discounted price.
//      *
//      * Example:
//      * calculateTotal(0, 100) // returns 100
//      * calculateTotal(4, 100) // returns 50
//      * calculateTotal(5, 100) // returns 0
//      *
//      * Test your function by passing it various values and checking for the expected
//      * return value.
//      */
function calculateTotal(luckyNum, totalAmount){
    if(luckyNum === 0){
        return totalAmount;

    }else if( luckyNum === 1){
        return totalAmount-(0.10* totalAmount);
    }else if (luckyNum === 2){
        return totalAmount-(0.25 * totalAmount);
    }else if (luckyNum === 3) {
        return totalAmount - (0.35 * totalAmount);
    }else if (luckyNum === 4) {
        return totalAmount - (0.50 * totalAmount);
    }else if (luckyNum === 5)  {
        return totalAmount - (1* totalAmount);

    }
}
//     /**
//      * TODO:
//      * Uncomment the line below to generate a random number between 0 and 5.
//      * (In this line of code, 0 is inclusive, and 6 is exclusive)
//      * Prompt the user for their total bill, then use your `calculateTotal` function
//      * and alerts to display to the user what their lucky number was, what their
//      * price before the discount was, and what their price after the discount is.
//      */
 //Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
let userBill = prompt("what is total amount?");
alert ("your lucky number is:" + luckyNumber = ". your total before discount: $" + userBill + '. Your total after the discount:$' +  calculateTotal( luckyNumber, userBill);)
//
//     /**
//      * TODO:
//      * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//      * would like to enter a number. If they click 'Ok', prompt the user for a
//      * number, then use 3 separate alerts to tell the user:
//      *
//      * - whether the number is even or odd
//      * - what the number plus 100 is
//      * - if the number is negative or positive
//      *
//      * Do *NOT* display any of the above information
//      * if the user enters a value that is not of the number data type.
//      * Instead, use an alert to inform them of the incorrect input data type.
//      *
//      *
//      * Can you refactor your code to use functions?
//      * HINT: The way we prompt for a value could be improved
//      */
//pseudo-code
//1.need to use a confirm
//2.need to use a prompt
//3. need to be a number data type
// if it is: alert if even or odd  , alert input + 100, alert positive or nagative.
// if it is not: alert incorrect data type
//4. if possible , refactor to function
//
function playgame(){


let doesUserConfirm = confirm("do you want to play a game?");
if (doesUserConfirm)
{
    let userNum = parseFloat(prompt("pick a number"));
    if(!isNaN(userNum)){

        alert (userNum % 2 === 0 ? "Number is even": "number is odd."}
        alert  (userNum > 0 ? "number is positive.": "number is negative."
            alert( "your number + 100 =" + (userNum + 100));
} else {
    alert ("sorry,what you entered is not a number!")
}
}
playgame();
//})();