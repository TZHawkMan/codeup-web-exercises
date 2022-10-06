"use strict";
//function - a reusable block of code that performs a specified  task,usually taking an input and producing an output.

// functions we have bein exposed to
//console.log, prompt() alert() confirm(). startsWith(), Number()

//can accept a number of arguments,
//someFunction(arguments)

//Arguments are OPTIONAL
// prompt ("What did you have for breakfast?"

// storing the return value of the prompt to our variable named littlemermaid

//let littleMermaid = prompt("123");

//storing the return value of parseInt to our variable name littleMermaidDays
//let littleMermaid = parseInt(littleMermaid);

//executing functions- definition vs Execution

// definition is called the name of the functions without()

//console log (parseInt);
//Performing the function when used with ()/
//console. log (parseInt("11"));

//defining function
// Arguments are value we pass to a funcitons when we executing.
//parameters are placeholders for our function definition.
function add(num,num2){
    //return the output of num + num2
    return num + num2
    console.log(add)
}
console.log(add("5","5"));

let ten = add ("3","7");
console. log(ten)
//arrow function expression
const addition = (num, num2) => num + num2;


console.log(addition(6,4))

//anonymous function
let increment = function(x){
    return x+1;
};
let two =increment(1);
console.log(two)
console.log(addition(two, 6));

function shout(message){
    alert(message.toUpperCase() + "!!!")

}
shout("codeup");

// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.
function returnFive() {
    return 5;
}
console.log(returnFive())


// Write a function, isFive, that takes in an input and returns the boolean value true if the passed argument is the number 5 or the string "5". Return false otherwise.

function isFive(x){
    return (x === 5 || x == "5");
}
console.log (isFive("5"));



// how many inputs should the function have?1
// what are the data types for the inputs?number or string
// what is the data type of the output/return value?boolean


// Write a function, isShortWord, that takes in a string and returns the boolean value true if the passed argument is shorter than 5 characters. Return false otherwise.

function isShortWord(number){
    return (number.length< 5)
}
//another way to do it
// const is shortword =(string) => string.length<5;
console.log (isShortWord("elephant"))

// how many inputs?1
// what data type for inputs?string
// what is the return type?boolean


// Write a function, isSameLength, that takes in two string inputs and returns the boolean value true if the passed arguments are the same length. Return false otherwise.
function isSameLength(x,y){
    return (x.length === y.length);
}
console.log (isSameLength("hello","water"));
// How many inputs?2
// What type of input?string,string
// What type of output?boolean

//function scope

let globalVar = "Hello, I am global!";

function test() {
    let localVar = "Hello, I am local!";
    console.log(globalVar)
    console.log(localVar)

    function test2() {
        let localChild = "Hello, I am locally, local."

        console.log(localVal);
        test2();

    }
}