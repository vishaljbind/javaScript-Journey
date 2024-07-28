const accountId = 1223
let accountEmail = "anand@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"

 //accountId = 2
 accountEmail = "andy@gmail.com"
 accountCity = "Delhi"
 
let accountState;

 /* Prefer not to use var 
 Because of issue in block scope and fuctional scope 
 ̥*/
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

