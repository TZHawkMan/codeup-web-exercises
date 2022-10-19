(function() {
"use strict"

//2.Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(x){
    let y = 1
    while (y <= 10){
        console.log(x + "*" + y + "=" + (x*y));
        y++
    }
}

showMultiplicationTable(7)





//3.Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.
for (let  y = 0 ; y < 10; y++){
    var myNum = Math.floor((Math.random() * (200 - 20))+20);
    if (myNum % 2 === 0){
        console.log (myNum + " even number")
    }else {
        console.log(myNum + " odd number")
    }
}




//4.Create a for loop that uses console.log to create the output shown below.
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     7777777
//     88888888
//     999999999
for (let x =1; x< 10; x++){
    let str = x.toString().repeat(x)

console.log(x.toString().repeat(x));}


//5.Create a for loop that uses console.log to create the output shown below.
//     100
//     95
//     90
//     85
//     80
//     75
//     70
//     65
//     60
//     55
//     50
//     45
//     40
//     35
//     30
//     25
//     20
//     15
//     10
//     5

for (let x = 100; x >=5; x-=5){
    console.log(x);
}
















})()