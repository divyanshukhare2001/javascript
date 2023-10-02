// console.log( 2>1);  /* o/p=> true*/
// console.log(2!=2);  /* o/p=> false*/

// console.log("3" > 9);
// console.log("3" > null);
// console.log("007" < 5);
// console.log(5 > "1");
/* in these cases sting is being converted to number */

// console.log(null == 0);  /* o/p => false */
// console.log(null > 0);   /* o/p => false */
// console.log(null >= 0);  /* o/p => true */
/* equality(==) & comparisons(>,<,>=,<=) work differently
   comprisons convert null to a value i.e 0
   therefore null>=0 => true */

//    console.log(undefined == 0);  /* o/p => false */
//    console.log(undefined > 0);   /* o/p => false */
//    console.log(undefined >= 0);  /* o/p => false */


         /* '===' this does strict comparison i.e i even takes 
             datatypes into account */

             console.log("5" == 5);  /* o/p => true */
             console.log("5" === 5); /* o/p => false */