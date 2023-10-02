/* primitive datatype */

/* => 7 in total (number , string , boolean , null , undefined , symbol , BigInt)
   these datatypes are always pass by value */

/* Reference (non-primitive) datatype */

/* => 3 in total (array , objects , functions) */


let country;
//console.log(country);

country = 91;
//console.log(country);

country = "india";
//console.log(country);

/* Javascript is a dynamic typing language.
   When you declare a variable, 
   you do not need to specify what type this variable is. */


   const Id = Symbol('123');
   const anotherId = Symbol('123');
   //console.log(Id === anotherId);  /* o/p => false */   
   /* symbols are used to make each components as unique */


   const bigNumber = 5555555555555555555555555555555555555555555n; /* n at last is used to make BigInt */
   //console.log(bigNumber);

   let superheroes = ["fuddu_fardeen" , "afim_aftab" , "ali_boss" , "Divyu_pool"]; /* dis is array */

   let myObj = {
      name: "divyanshu",   /* dis is object */
      age: 18
   }

   console.log(superheroes);
   console.log(myObj);


   const myFunction = function(){
    console.log("hello world");
   }

  console.log(myFunction);

  /* Using typeof function

   datatype            return type
   
   number                number
   string                string
   null                  object
   boolean               boolean
   symbol                symbol
   undefined             undefined
   array                 object
   object                object
   function              object-function*/



   /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


   /* stack (primitve)  heap (reference) */

   let email1 = "divyanshu@email.com";
   let email2 = email1;
   email2 = "div@email1.com";

   console.table([email1,email2]);


   let obj1 = {
      name:"divyanshu",
      college:"jamia hamdard"
   }

   let obj2 = obj1;

   obj2.name = "imran";
   /* dis will also change name in obj1 as obj1 is passed by reference
      to obj2 */

   console.log(obj1);
   console.log(obj2);