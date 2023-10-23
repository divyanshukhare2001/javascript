const myNums = [1,2,3];

const myTotal = myNums.reduce( function (acc , currVal){
             console.log(`accumulator: ${acc}  current value: ${currVal}  total: ${acc+currVal}`);
             return acc + currVal;
}, 0 )

console.log(myTotal);

const myTotal1 = myNums.reduce( (acc,curr) => acc+curr , 0 );

console.log(myTotal1);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,current) => acc + current.price , 0 )

console.log(totalPrice);