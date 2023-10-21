 /* this -> it refers to correct context */

 let demo = function(){
    console.log("helloDemo");
 }

//  console.log(demo);/* it will not execute the function
//                    as bracket () is not made */
//  demo();/* this will execute the function */

const user = {
    username: "divyanshu",
    price: 999,

    welcomeMessage: function(){
        console.log(`hello ${this.username} , welcome to website`);
        console.log(this);
    }

    
}

// user.welcomeMessage();
// user.username = "imran";
// user.welcomeMessage();

/* when we console.log(this) in code environment then it will give {} i.e
   an empty object as output , but when we do this in browser the 
   a windows object will be given as output because for a browser 
   the global object is windows */

// console.log(this);

function chai(){
    let username = "divyanshu";
    console.log(1);
    console.log(this);
    console.log(this.username);/* o/p=>undefined */
    /* this does not works same with context to functions
    as it works with context to an object */
}

  chai();

const chai2 = function(){
    let username = "divyanshu";
    console.log(2);
    console.log(this);
    console.log(this.username);/* o/p=>undefined */
}

  chai2();

/* Arrow Function */
const chai3 = () =>  {
    let username = "divyanshu";
    console.log(3);
    console.log(this);
    console.log(this.username); /* o/p => undefined */
}

 chai3();

/* Basic Arrow Function (explicit) */
const addTwo = (num1 , num2) => {
    return num1 + num2;
}

console.log(addTwo(3,4));

/* Implicit Return Arrow Function (no need to use return keyword & curly brackets) */

/* method 1 */
const addTwo2 = (num1,num2) => num1+num2 
console.log(addTwo2(4,4));

/* method 2 */
const addTwo3 = (num1,num2) => (num1+num2)
console.log(addTwo3(5,5));

/* usecase of implicit arrow function with parenthesis :-
     suppose in this case we want to return an object */
const addTwo4 = (num1,num2) => ({username: "divyanshu"})
console.log(addTwo4(5,5));

