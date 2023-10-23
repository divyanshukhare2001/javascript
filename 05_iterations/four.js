/* for-in loop */

/* for-in loop is used to iterarte over an object */

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   //console.log(key); /* syntax for printing key in objects */
   //console.log(myObject[key]); /* syntax for printing values in objects */
}

for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
 }


 const programming = ['js' , 'cpp' , 'java' , 'py'];
 
 for (const key in programming) {
   //console.log(key);  
   /* In case of for-in index number will be printed of an array
                         with this syntax */

    // console.log(programming[key]); /* syntax for printing values in array with for-in loop */                 
 }

 for (const key in programming) {
   // console.log(`${programming[key]} is at ${key} index`);
  }


  const map = new Map();
 map.set('IN' , 'India');
 map.set('USA' , 'United States of America');
 map.set('Fr' , 'France');

/* map is not iterable through a for-in loop */

//  for (const key in map) {
//   console.log(key);
//  }