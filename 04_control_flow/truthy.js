const userName = "";

if(userName){
    console.log("got user email");
}
else{
    console.log("Don't have user email");
}

/*
falsy values:

false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

truthy values:

"0" , 'false' , " " , [] , {} , function(){} 
*/

const userEmail = [];

if(userEmail.length === 0){
    console.log("Array is empty");
}

const userObject = {};

if (Object.keys(userObject).length === 0) {
    console.log("Object is empty");
}


/* Nullish Coalescing Operator (??) : null undefined */

/* this operator avoids null / undefined */

let val1;
//val1 = 5 ?? 10;  o/p => 5
// val1 = null ?? 10;   o/p => 10
// val1 = undefined ?? 90;   o/p => 90
// val1 = null ?? 10 ?? 20;   o/p => 10



console.log(val1);


/* Terniary Operator */

/* condition ? true : false */

const iceTeaPrice = 100;

iceTeaPrice <=80 ? console.log("price less than 80") : console.log("price more than 80");