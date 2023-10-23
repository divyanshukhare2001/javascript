const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   //console.log(key);
}

for (const key in myObject) {
   // console.log(`${key} is shortcut for ${myObject[key]}`);
 }


 const programming = ['js' , 'cpp' , 'java' , 'py'];
 
 for (const key in programming) {
   //console.log(key);
 }

 for (const key in programming) {
   // console.log(`${programming[key]} is at ${key} index`);
  }


  const map = new Map();
 map.set('IN' , 'India');
 map.set('USA' , 'United States of America');
 map.set('Fr' , 'France');

/* map is not iterable through a for-in loop */

 for (const key in map) {
  console.log(key);
 }