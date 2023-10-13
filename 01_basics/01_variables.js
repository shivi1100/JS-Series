const accountId = 145665
let accountEmail = "shivi@gmail.com"
var accountPassword = "1234"
accountCity = "Jabalpur"
let accountState;

// accountId = 2 not allowed
console.log(accountId);
/*
prefer not to use var
because of issue in block scope nad functional scope
*/
accountEmail = "s@gmail.com"
accountPassword = "253"
accountCity = "Chennai"

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])