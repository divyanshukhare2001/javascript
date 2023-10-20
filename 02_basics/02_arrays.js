const marvelHeroes = ["iron_man" , "spider_man" , "loki"];
const dcHeroes = ["wonder_woman" , "batman" , "flash"];

//  marvelHeroes.push(dcHeroes); /* dcHeroes gets pushed to marvel as an array */
//  console.log(marvelHeroes);

 /* ways to combine arrays */

 /* 1) concat operator */

 const allHeroes = marvelHeroes.concat(dcHeroes);
 //console.log(allHeroes);

  /* 2) spread operator */

  const allHeroes2 = [...marvelHeroes , ...dcHeroes];
  //console.log(allHeroes2);

  /* spread operator is better than concat , bcoz we can merge more than
     more than 2 arrays withg this */


     const anotherArr = [1,2,3,[4,5],6,7,[1,2,[3,4,5]]];
     const actualAnotherArr = anotherArr.flat(Infinity);
     
     /* this function spreads all the inner array to a single array */
     //console.log(actualAnotherArr);


     console.log(Array.isArray("divyanshu"));

     console.log(Array.from("divyanshu" ));

     console.log(Array.from({name:"divyanshu"})); /* interesting case ,
                                                  aage dekhenge about it */

     let score1 = 100;
     let score2 = 200;
     let score3 = 300;

     console.log(Array.of(score1,score2,score3));

     let name = "div";
let indian = true;
let age = 18;
console.log(Array.of(name , indian , age));

