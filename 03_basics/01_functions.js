function sayMyName(){
    console.log("d");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

//sayMyName();
//console.log(`******************`);

const name = function sayMyName1(){
    console.log("d");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

//name();

function addTwoNumbers1(number1 , number2){
       console.log(number1 + number2);
}

const value1 = addTwoNumbers1(2,6);
console.log(`value: ${value1}`);

function addTwoNumbers2(number1 , number2){
    let result =  number1 + number2;
    console.log("function2");
    return result;
}

const value2 = addTwoNumbers2(2,2);
console.log(`value: ${value2}`);

function loginUserMessage(username){ 
    if(  !username/*username === undefined*/){
        console.log("please enter a username");
        return;
    }
    return `${username} has just logged in`;
}

console.log(loginUserMessage("divyanshu"));
console.log(loginUserMessage());



/* *********** REST OPERATOR *************** */

function calculateCartPrice(num1){
    return num1;
}

console.log(calculateCartPrice(300 , 67 , 757));
/* in this case , only the first argument given will be printed as
   we only have defined 1 parameter in function , this is a very common
   case when we add items in cart where we do not know the number of items
   that will be passed in function before-hand
   
   in this case we require to use REST operator */


function calculateCartPrice1(...num1){
    return num1;
}

/* rest operator(...) packs all the passed arguments in an array to print it  
   thus making it possible to pass all these parameters*/
console.log(calculateCartPrice1(300 , 67 , 757));

function calculateCartPrice2(val1 , val2 , ...num1){
    return num1;
}

/* here 300 will go to val1 , 67 will go to val2 and 757 , 800 will 
make up the array of num1 */
console.log(calculateCartPrice2(300 , 67 , 757 , 800));


/* we can change the value of properties of a constant object as well */
const user = {
    username: "divyanshu",
    price: 199
}

console.log(user);

user.price = 800;

console.log(user);

function handlingObject(any){
    console.log(`username is ${any.username} & price is ${any.price}`);
}

handlingObject(user);

/* passing an object directly with on the spot creation of it while
   calling the function */
handlingObject({
    username: "aftab",
    price: 999
})

/* passing array to a function */

const myNewArray = [100,200,300,400];
/* an array declared as constant can also be altered/changed */
/* REASON -> this is because the array on whole is constant but not 
   its content , so the variable myNewArray is now fixed as a array
   in the memory location thus it will always remain a array , we can not
   change myNewArray to a string/number/object like shown in line 128
   & 129 */
myNewArray[0] = 500;
console.log(myNewArray);

myNewArray = "divyanshu";
console.log(myNewArray);

function return2ndElement(anyArray){
    return anyArray[1];
}

console.log(return2ndElement(myNewArray));