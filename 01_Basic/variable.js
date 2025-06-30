const accountId = 12345
let accountEmail = "Nkumar49575@gmail.com"
var accountPassword = "120987" /* perfer not to use var becouse of issue 
in block scope and functional scope */
acccountCity = "Bihar"
let accountState;

//accountId = 4567  // We can not change the constant value

console.log(accountId);

accountEmail = "nitesh123@gmail.com"
accountPassword ="2233454"
acccountCity ="up"

console.log([accountEmail, accountPassword,acccountCity, accountState])