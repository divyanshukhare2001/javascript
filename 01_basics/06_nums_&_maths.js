const score = 400;

const anotherScore = new Number(100);

//console.log(`${score}\n${anotherScore}`);
// console.log(anotherScore);

// console.log(typeof score);
// console.log(typeof anotherScore);

// console.log(anotherScore.toString().length);
// console.log(anotherScore.toFixed(2));            /* op => 100.00 */
/* it restricts the no. of decimal to 2 places */

const otherNumber = 184.9876;
//console.log(otherNumber.toPrecision(5));
 /* toPrecision() refers to precision of all digits before and after
    decimal */

const hundreds = 10000000;
console.log(hundreds.toLocaleString("en-IN"));



/* +++++++++++++++++++++++++++++++Math++++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.36));   /* removes decimal , and rounds of the number */
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(-4,5,0,3));
// console.log(Math.max(-4,55,9,4));

console.log(Math.random()); /* it generates random no b/w [0,1) */
console.log(Math.random()*10 +1);/* for making its min = 1 */
console.log(Math.floor(Math.random()*10 +1));/* for removing all decimal values */

const min = 1;
const max = 6;

console.log(Math.floor(Math.random()* (max-min)) + min);
/* IMPORTANT FORMULA for getting values in a particular range */
