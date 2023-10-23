const coding = ["js" , "ruby" , "java" , "python" , "cpp"];

coding.forEach( function (item) {
    // console.log(item);
} )


coding.forEach( (value) => {
   // console.log(value);
} )


/* Directly passing a function as a parameter to forEach loop */

function printMe(item){
    //console.log(item);
}

coding.forEach(printMe);


/* a name can be given for there 3 parameters used below */
coding.forEach( (item ,index , array) => {
     console.log(item ,index , array);
} )

const myCoding = [
    {
        language: "javascript",
        extension: "js"
    },
    {
        language: "python",
        extension: "py"
    },
    {
        language: "cPlusPlus",
        extension: "cpp"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.language);
} )