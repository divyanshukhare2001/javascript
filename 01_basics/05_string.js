const name = "divyanshu";
const repoCount = 50;

//console.log(name + repoCount + " value");  /* this method is outdated of printing strings */

//console.log(`hello my name is ${name} & my repocount is : ${repoCount}`);

let name1 = new String("Imran");

// console.log(typeof name);
//  console.log(typeof name1);


// console.log(name1);

let name2 = name1;

// console.log(name2);
 //console.log(typeof name2);

name2="saif";
// console.log(name2);
// console.log(name1);

// console.log(name[0]);
// console.log(name1[0]);
// console.log(name2[0]);

// console.log(name1.__proto__);
// console.log(name.__proto__);

// console.log(name1.toUpperCase());
// console.log(name1);

// console.log(name.charAt(2));
// console.log(name.indexOf('d'));

console.log(name.length); /* gives string length */

const newString = name.substring(0,4);   /* [,) */
console.log(newString);

const anotherString = name.slice(-6,-4);    /* [,) */
console.log(anotherString);


let short = name.slice(4,8);
console.log(short);


/* difference between substring() and slice() is
The substring() method swaps its two arguments if indexStart is greater
than indexEnd, meaning that a string is still returned. The slice()
method returns an empty string if this is the case.
 
const text = "Mozilla";
console.log(text.substring(5, 2)); // "zil"
console.log(text.slice(5, 2)); // ""

*/

const naam = "    hitesh     ";
const anotherNaam = naam.trim();
/* but this trim won't work for spaces in b/w the characters of a string */

// console.log(naam);
// console.log(anotherNaam);

const url = "divyanshu.in/divyanshu%20khare";
//console.log(url.replace("%20" , "-"));

// console.log(url.includes("divyanshu"));
// console.log(url.includes("imran"));

const newName = "divyanshu khare";
console.log(newName.split(""));
console.log(newName.split(" "));



/* strings are originally primitive datatype in javascript but in primitive
datatypes we can not use function/methods but with string we can use them

this is because during runtime string(primitive) --> string(object) */