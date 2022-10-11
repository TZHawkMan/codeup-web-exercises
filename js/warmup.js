
(function(){


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


})()