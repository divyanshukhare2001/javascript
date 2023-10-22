// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//for duplication : shift+alt and down arrow

const month = 3;

switch (month) {
    case 1:
        console.log("january");
        break;
    
    case 2:
            console.log("february");
            break;
            
    case 3:
        console.log("march");
        break;

    default:
        console.log("default");
        break;
}

/* if break is not used then after the accepted case
   all the further cases will get executed except the default case */


   const month1 = "feb";

   switch (month1) {
       case "jan":
           console.log("january");
           break;
       
       case "feb":
               console.log("february");
               break;
               
       case "mar":
           console.log("march");
           break;
   
       default:
           console.log("default");
           break;
   }   