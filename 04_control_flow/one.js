/* if */

const isUserLoggedIn = true;

if(isUserLoggedIn){
    //statement
}

/* < , > , <= , >= , == , != , === , !== */

if(2 !== "2"){
    console.log("executed");
}

const temperature = 67;

if(temperature<50){
    console.log(`temperature is less than 50`);
}
else{
    console.log(`temperature is more than 50`);
}

const balance = 1000;

/* a single line statement does not require curly braces */
if (balance>500) console.log("test");

/* this syntax of writing multiple line of code without curly 
braces is never recommended , although it works */

//if (balance>500) console.log("test"),
//console.log("test2"); 

if (balance<500) {
    console.log(`less than 500`);
}
else if (balance>500) {
    console.log(`greater than 500`);
    
}
else{
    console.log(`equals to 500`);
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}