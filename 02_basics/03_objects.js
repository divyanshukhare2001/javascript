/* method 1 for creating object */
//singleton
//Object.create (aise banta hai singleton object)

/* singleton i guess wahi cheez hai jo hum string object & 
   number object banaate hai , and it is made using constructor */


/* method 2 for creating object */
//object literals

const mySym = Symbol("key1");
const sym2 = Symbol("key2");
// console.log(mySym===sym2);

const JsUser = {
    name:"divyanshu" , /* bts this name is considered as a string "name" , "age" , etc */
    age:18 , 
    [mySym] : "myKey1" , 
    [sym2] : "mykey2" , 
    /* this is syntax [mySym] , to include a symbol as a key in object
       without dis syntax mySym will be treated as a simple string */
    "full name":"divyanshu khare" , 
    location:"delhi" , 
    email:"div@gmail.com" , 
    isLoggedIn:false , 
    lastLoginDays: ["monday" , "friday"] , /* objects can also be 
                                             stored in objects */ 
    greeting3 : function(){
        `hello ji ${this.name}`
    }
};

/* 2 ways to access keys in objects */
// console.log(JsUser.name);
// console.log(JsUser["name"]);

/* accessing a property like this is beneficial for accessing such
   properties like "full name" as there is no any other way */
// console.log(JsUser["full name"]);

// console.log(typeof JsUser[mySym]);
// console.log(JsUser);

JsUser.email = "div@hamdard.in";
// console.log(JsUser["email"]);

//Object.freeze(JsUser);
/* after this Object.freeze() , we can not make changes to our properties of object , 
   it works similar to making everything private */

JsUser.email = "div@banyantree.in";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello JS user`);
}


JsUser.greeting2 = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log(JsUser.greeting3());

JsUser.bucket = 76;

console.log(JsUser.bucket);

/* propeties which i am adding from outside to the object and also getting
   permanent property of the object */
console.log(JsUser);