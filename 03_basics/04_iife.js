// Immediately Invoked Function Expressions (IIFE)

/* Use of iife:-
   1) Jaise hi function likha waise hi turant usko execute karwaana hai
   
   2) global scope se kuch bhi pollution nahi aaye */


(function chai(){
    /* named iife */
    console.log(`DB CONNECTED`);
})();

/* semicolon(;) is used to explicitly end the iife function
   or else it wont stop itself thus second iife in the code wont be executed */

( () => {
    /* un-named iife i.e (Arrow function) */
    console.log(`DB CONNECTED TWO`);
} )();  

( (name) => {
    /* how to pass a parameter to a un-named iife */
    console.log(`DB CONNECTED TWO ${name}`);
} )("divyanshu"); 