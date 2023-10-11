/* method 1 for creating object */
//singleton
//Object.create

/* method 2 for creating object */
//object literals

const mySym = Symbol("key1");

const JsUser = {
    name:"divyanshu" , /* bts this name is considered as a string "name" , "age" , etc */
    age:18 , 
    [mySym] : "myKey1" , 
    /* this is syntax [mySym] , to include a symbol as a key in object */
    "full name":"divyanshu khare" , 
    location:"delhi" , 
    email:"div@gmail.com" , 
    isLoggedIn:false , 
    lastLoginDays: ["monday" , "friday"] , 
    
};

console.log(JsUser.name);
console.log(JsUser["name"]);

/* accessing a property like this is beneficial for accessing such
   properties like "full name" as there is no any other way */
console.log(JsUser["full name"]);

console.log(JsUser[mySym]);

JsUser.email = "div@hamdard.in";
console.log(JsUser["email"]);

//Object.freeze(JsUser);
/* after this Object.freeze() , we can not make changes to our properties of object , 
   it works similar to making everything private */

JsUser.email = "div@banyantree.in";
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`hello JS user`);
}


JsUser.greeting2 = function(){
    console.log(`hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());