/* making object through a constructor */
const instagram = new Object();
console.log(instagram);

/* making object through literals */
const tinderUser = {
    id : "123abc" , 
    name : "sunny" , 
    email : "sunny@mail.com"
}

/* difference between object through literals & constructor is that
   constructor one is singleton object whereas literal one is 
   non-singleton object , that is it rest everything is same */


/*nesting inside objects*/

const user = {
    email : "some@gmail.com" , 
    fullName : {
         actualName : {
            first : "divyanshu" , 
            last : "khare"
         }
    }
}

// console.log(user.fullName.actualName.first);


/* merging objects */

const obj1 = {1 : "a" , 2 : "b"};
const obj2 = {3 : "c" , 4 : "d"};

//const obj3 = {obj1 , obj2};

const obj3 = Object.assign(obj1 , obj2);

/* this function merges the obj2 to obj1 hence manipulating obj1
   i.e obj1 here acts as target object which will get manipulated
   and obj2 is acting as source which wont be manipulated */
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

const obj5 = {div : "a" , khare : "b"};
const obj6 = {gannu : "c" , veenu : "d"};

const obj7 = Object.assign({} , obj5 , obj6);
/* here the empty object {} , acts as the target object hence none of the 
   other objects are manipulated as they are acting as source now */

// console.log(obj5);
// console.log(obj6);
// console.log(obj7);


/* using spread operators for merging */

const obj8 = {...obj5 , ...obj6};
// console.log(obj8);
/* spread operator also does not manipulate the actual objects */


const users = [
    {
        id: "1" , 
        email: "a@mail"
    } , 
    {
        id: "2" , 
        email: "b@mail"
    } ,
    {
        id: "3" , 
        email: "c@mail"
    } ,
    {
        id: "4" , 
        email: "d@mail"
    } ,
]

users[1].id



console.log(tinderUser);
console.log(Object.keys(tinderUser));  /* this returns an array of 
                                           all keys in object */
console.log(Object.values(tinderUser)); 

console.log(Object.entries(tinderUser));
/* this returns the array of each property and its value in object */

console.log(tinderUser.hasOwnProperty("signIn"));