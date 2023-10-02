//let score = 35
let score = "35abs"

//console.log(typeof score);

/*type conversion*/

 let scoreInNumber = Number(score)

//  console.log(typeof scoreInNumber);
//  console.log(scoreInNumber);

 /* here if string(score) has only digits den it will be converted 
    to a number from Number() , but if string has any alphabet then
    it will be converted to NaN i.e not a number but its datatype 
    will be shown as number only
    
    => in case of null , its number conversion will become 0
    
    => in case of boolean , number conversion = 0/1
    
    => in case of undefined , number conversion = Nan*/


    // let isLoggedIn = "divyanshu"
    // let booleanIsLoggedIn = Boolean(isLoggedIn)

    // console.log(booleanIsLoggedIn);
    // console.log(typeof booleanIsLoggedIn);

    /* 1=> true, 0 => false
       "" => false , "divyanshu"  => true */

       let someNumber = 20
       let stringNumber = String(someNumber)

       console.log(stringNumber);
       console.log(typeof stringNumber);