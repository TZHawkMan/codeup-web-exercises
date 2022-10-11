(function() {

// if / else statement : in addition ot the if statement , the else will block will run if the conditions is not met
    if ("1") {
        //conditions evaluates to true, run this code
        console.log("condition evaluate to true");
    } else {
        //condition evaluates to false, run this code
        console.log("conditions evaluate is false");
    }

// create 2 variables, one for password, one for username.
// create 2 more variables , userUsername and userPassword hat prompt the user to enter in their credentials.
// create an if statement and log to the console if the user enters in the correct information
// if the username matches the user, and the password matches the user password, log to the console that they have successfully logged in. otherwise, log to the console that the credentials are incorrect.
// exmaple : username = "jayman" , password = "password1"
    let username = "hawk";
    let password = "123";


    let userUsername = prompt(" What is your username");
    let userPassword = prompt("what is your password?");

    if (username === userUsername && password === userPassword) {
        console.log("You are logged in!");

    } else {
        console.log("invalid entry");
    }

//if /else if/ else
    //if(condition){
    //if condition evaluates to true, run this code,

    //}else if (condition){
    //if the second condition is met, run this code
//} else { // if no condition is met, run this code.


let menu = prompt ("please choose an items:\n1.cheeseburger\n2.chicken sandwich\n3.chili cheese fries\n4 philly cheesesteak");
switch (menu){
    case '1':
        alert ("The cheeseburger costs:$5.99");
        break;
    case'2':
        alert("the chicken sandwich is $4.99");
        break;
    case '3':
        alert ("the chili cheese fry is $2.99");
        break;
    case '4':
        alert ("The philly cheesesteak has mushrooms is $7.99");
        break;
    default:
        alert ("sorry, that item is not on the menu")
}



















})();