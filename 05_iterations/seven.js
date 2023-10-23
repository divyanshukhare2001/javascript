/* map() */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = nums.map( (num) => num + 10  );
//console.log(newNum);

const array = [];
const newNum1 = nums.map( (num) => {
      if (num>5){
        array.push(num);
        return num; /* newNum will have undefined for num not satisfying the condition
                       and will contain the values for num that satisfy the conditions */
      }
} );
// console.log(array);
// console.log(newNum1);


/* chaining */

const newNum2 = nums.map( (val) => val*10 )
                    .map( (val) => val+1 )
                    .filter( (val) => val>40 );

console.log(newNum2);                    