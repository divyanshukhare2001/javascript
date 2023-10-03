const name = "divyanshu";
const repoCount = 50;

//console.log(name + repoCount + " value");  /* this method is outdated of printing strings */

console.log(`hello my name is ${name} & my repocount is : ${repoCount}`);

let name1 = new String("Imran");

// console.log(typeof name);
 //console.log(typeof name1);


let name2 = name1;

//  console.log(name2);

name2 ="saif";
// console.log(name2);
// console.log(name1);

// console.log(name[0]);
// console.log(name1[0]);

// console.log(name1.__proto__);
// console.log(name.__proto__);

// console.log(name1.toUpperCase());
// console.log(name1);

// console.log(name.charAt(2));
// console.log(name.indexOf('d'));

const newString = name.substring(0,4);
//console.log(newString);

const anotherString = name.slice(-6,-4);
//console.log(anotherString);

const naam = "    hitesh     ";
const anotherNaam = naam.trim();

// console.log(naam);
// console.log(anotherNaam);

const url = "divyanshu.in/divyanshu%20khare";
console.log(url.replace("%20" , "-"));

console.log(url.includes("divyanshu"));
console.log(url.includes("imran"));

const newName = "divyanshu khare";
console.log(newName.split(''));