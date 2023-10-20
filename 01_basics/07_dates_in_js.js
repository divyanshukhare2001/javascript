let myDate = new Date();
//  console.log(myDate);
//  console.log(typeof myDate);     /* o/p => object */
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

/* following were the functions on date that are frequently used */

// console.log(typeof myDate);

/* setting customized date */

/* method 1 */
let myCreatedDate = new Date(2023,9,4);  /* yyy/mm//dd */
/* month starts from 0 in javascript */
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleString());

/* method 2 */    /* mujhe ye theek nahi laga */
let myCreatedDate2 = new Date("05-10-2023"); /* mm-dd-yyyy */
/* month starts from 1 in this case */
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate2.toLocaleDateString());
// console.log(myCreatedDate2.toLocaleString());


let myCreatedDateWithTime = new Date(2023,9,4,23,49);
//console.log(myCreatedDateWithTime.toLocaleTimeString());

let myTimeStamp = Date.now();
 /* The Date.now() static method returns the number of milliseconds
  elapsed since the epoch, which is defined as the midnight at the 
  beginning of January 1, 1970, UTC. */

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
/* .getTime gives the value of the time set in the date variable in
terms of the number of milliseconds elapsed since the epoch, which is
 defined as the midnight at the beginning of January 1, 1970, UTC. */

 /* this method of .getTime can be used for time comparisons */

 //console.log(Math.floor(Date.now()/1000));
 /* / by 1000 converts millisecond to seconds and Math.floor is used
      for removing decimal points */


      
let newDate = new Date();
//console.log(newDate.getMonth()); 
/* month starts from 0 in Js */

 //console.log(`date is: ${newDate.getDate()} \ntime is:${newDate.getTime()}`);

// console.log(myCreatedDate.getTime());
// console.log(newDate.getTime());
/* .getTime() gives time in milliseconds */


console.log(newDate.toLocaleString("default" , {
  weekday: "long" 
}));