const array = [1,2,3,4,"divyanshu", true];
/* elements of array can be heterogenous */

const myArr = [1 , 2 , 3 , 4 , 5];

const myHeroes = ["iron-man" , "thor" , "wanda"];

const myArr2 = new Array(5,4,3,2);

// console.log(typeof myArr,typeof myArr2);
// console.log(myArr[2] , myArr2[0]);

//console.log(myArr);

/* Array methods */

 myArr.push(6);

//console.log(myArr);
 myArr.push(7);

//console.log(myArr);
 myArr.pop();
//console.log(myArr);

//myArr.unshift(9);  /* it adds an element in front of array */
/* demerit of unshift operator is that it is a time consuming operation
   , as in case of large number of elements , we need to shift all of them */

//myArr.shift(); /* it removes an element from front of array */

// console.log(myArr.includes(9)); /* o/p => true/false */
// console.log(myArr);

const newArr = myArr.join();
/* this changes array to a string type */
// console.log(myArr);
// console.log(newArr);
// newArr.push(15);  /* as newArr has become a string object now so
//                      .push() function will not work with it */
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof myArr2);


//slice & splice operator

console.log("A ",myArr);

const slicedArr = myArr.slice(1,3);  /* Range -> [1,3) */

console.log("slice-array ",slicedArr);
/* slice operation does not manipulates the original array */

console.log("B ",myArr);

const splicedArr = myArr.splice(1,3); /* Range -> [1,3] */

console.log("splice-array ",splicedArr);
/* slice operation does manipulates the original array */
console.log("C ",myArr);