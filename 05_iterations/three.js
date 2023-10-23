/* for of loop */

 const arr = [1 , 2 , 3 , 4 , 5];

 for (const iterator of arr) {
    //console.log(iterator);
 }

 const greetings = "Hello World!";
 for (const greet of greetings) {
    //console.log(`Each letter is ${greet}`);
 }


 /* Maps */

 const map = new Map();
 map.set('IN' , 'India');
 map.set('USA' , 'United States of America');
 map.set('Fr' , 'France');
 map.set('IND' , 'India');
 
 //console.log(map);

 const myObj = {
    user: "divyanshu",
    username:"div_khare",
    user: "divyanshu"
 }

 //console.log(myObj);

 for (const key of map) {
    //console.log(key);
 }

 for (const [key , value] of map) {
    //console.log(key  , ':-' , value);
 }


/* An object is not iterable through a for-of loop  */

 for (const [key , value] of myObj) {
    console.log(key  , ':-' , value);
 }