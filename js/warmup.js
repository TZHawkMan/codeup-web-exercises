
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


// warm-up 2022.10.20
//
// Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
// Ex:
// average(["6", 5, 3, 2, 9])                       // returns 5
// average([true, 6, 9, 3, 10])                     // returns false
// average([{name: "Codey the Duck}, 10, 3, false]) // returns false
// average([1, 2, 3, 4, 5])                         // returns 3
// average(["5.5", "five", 3, 6, 7])                // returns false


    let average = [ 1,2,3,4,5];
    average.forEach(function(average){
console.log ("the average number is " + average + ".")
    })
//stack overflow answer that only return average:
    const averages = array => array.reduce((a, b) => a + b) / array.length;
    console.log(averages([1,2,3,4,5]))
// instructor answer:
    function averag(input){
        let sum = 0;
        for(let i = 0; i< input.length;i++){
            if (isNumeric(input[i])) {
                sum +=parseFloat(input[i]);

            }else{ return false
            }
        }
    }












































})()