/* filter() */

const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

/* for-each loop does not returns anything but 'undefined */

// const value = coding.forEach( (item) => {
//       // console.log(item);
//       return item;
// } )

// console.log(value);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = nums.filter( (number) => number>4  );

//console.log(newNums);

/* but if we had opened scope i.e curly braces in arrow function then
   we had to use return keyword */

   const newNums1 = nums.filter( (number) => {
    return number>4
 } );

//console.log(newNums1);

/* getting values using for-each loop */

const numsArray = [];
nums.forEach( (value) => {
    if(value > 4){
        numsArray.push(value);
    }
} )

//console.log(numsArray);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre == 'History' );

   userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == 'History' 
} );

  console.log(userBooks);