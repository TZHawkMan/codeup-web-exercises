
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
let numberToSkip = 27;
for (let x=1; x<=50; x++){
    console.log("loop counter is: " + x);
    if (x === numberToSkip){
        console.log("Yikes! Skipping number: " + x);
    break;
    }

}