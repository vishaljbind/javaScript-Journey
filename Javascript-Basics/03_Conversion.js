let score = "33abc"  // => NaN
//let score = null => 0
//let score = true => 1
//let score = 1

console.log( typeof score)
console.log(typeof(score))

let valueNumber = Number(score)

console.log(valueNumber)
console.log(typeof valueNumber)

let isLoggedIn = 1 // => true
//let isLoggedIn = ""  => false
//let isLoggedIn = "anand" => true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//************************Operations******************** */

// let num1 = 10
// let negNum1 = - num1
// console.log(negNum1)
// let num2 = 20

// console.log(num1 + num2)
// console.log(num1 - num2)

// console.log(num1 * num2)

// console.log(num1 / num2)

// console.log(num1 % num2)

// console.log(num1 ** num2)


let str1 = "hello"
let str2 = "anand"
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");

let num1, num2, num3

let gameCounter = 100

console.log(++gameCounter)
