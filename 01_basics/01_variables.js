const accountId = 12345;
let accountMail = "mail@mail.com";
var accountBalance = "550";

accountCity = "delhi";

// accountId = 54321;    this is not allowed as accountId is constant
accountMail = "js@mail.com";
accountBalance = "500";

let accountState;

console.log(accountId);
console.table([accountId , accountMail , accountBalance , accountCity , accountState]);


/* never use var keyword bcoz of issue in block scope & functional scope */