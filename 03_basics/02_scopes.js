var c = 300;
let a = 50;

if(true){
    let a = 10;
    const b = 20;
    //var c = 30;
    c=45;
    //console.log(`inner: ${a}`);
}

/* the problem with var was that of block scope
i.e if something was declared or initialed inside a block scope with var 
then outside the scope also it will be counted/same
like in case of variable c */

// console.log(`outer: ${a}`);
// console.log(b);
// console.log(c);

/* Notes: scope in browser i.e when we go to
inspect->console there it is different than 
in the code environment in node */

function one(){
    const username = "divyanshu";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

// one();

if(true){
    const username = "divyanshu";
    if(username === "divyanshu") {
        const website = " youtube";
        //console.log(username + website);
        // console.log(username.concat(website));
        // let added = username.concat(website);
        // console.log(added);
    }
    //console.log(website);
}

//console.log(username);

// +++++++++++++++++++++ interesting ++++++++++++

/* When function is declared directly , den it can be called before its initialisation also
but when a function is declared and stored into a variable then it can not be colled before
its initialisation and if done then it will throw an error */

console.log(addone(5));
function addone(num){
    return num + 1;
}

// const plus1 = addone(5);
// console.log(plus1);

console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}
//console.log(addTwo(5));