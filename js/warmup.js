
(function(){
"use strict"

//Warm-up: 2022.10.11
//
// Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

function NumFive (randomNum){
    if (typeof randomNum !=="string"){
        console.log ("this is not a number");
        return 0;

    }else { randomNum = parseInt( randomNum);
    return randomNum * 5;
    }

}




//Warm-up 2022.10.13
// Write a function named "inBetween" that accepts three inputs: min, max, num, and returns a boolean determining whether or not the "num" parameter is in between the min and max numbers.
//
// EX:
// inBetween(1, 10, 5) returns true
// inBetween(25, 26, 25) returns false
// inBetween(0, 1, 0.5) returns true

function inBetween(min,max,num){
    if(min < num && num< max){
        return true;

    }else{
        return false;
    }

}
console.log (inBetween(25,26,25));

// function inBetween(min,max,num){
// let boolean;
//    if(num < max && num > min){
//        boolean = true;
//        return ture;
 //   }else {
 //       return false;
  //  }

// Warm-Up 2022.10.17:
//
// Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.
//
    let arr = [true, "Icon", 25, "66", false, 0];
    function typePrinter(arr) {
        for (let i =0; i < arr.length; i++){
            console.log (typeof arr[i]);

        }
    }
    typePrinter (arr)
})()