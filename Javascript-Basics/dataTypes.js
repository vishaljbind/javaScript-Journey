// # Primitive data type(call by value)
// String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3
const isAdmin = false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 2334424n
console.log(typeof bigNumber);

// # Non-Primitive type(reference)
// Array, Object, Functions

//is javascript statically type or dynamic type language ?

const player = ["Rohit", "Virat", "Surya"]
console.log(typeof player); // object

let myObj = {
    name: "anand",
    age: 23,
    email: "anand@gmail.com"
}
console.log(myObj);

const myFunction = function add() {
    console.log("Hello world!");
}

console.log(myFunction);

//*********************Memory*********************** */

// Stack (Primitive) , Heap (Non-primitive)

let myName = "anandprasadcom"
let anotherName = myName
anotherName = "andyTech"
console.log(myName);
console.log(anotherName);

let user1 = {
    name: "anand",
    age: 23,
    email: "anand@gmail.com",
    upi: "user@axis"
}

let user2 = user1

user2.email = "andy@gmail"
console.log(user1.email);
console.log(user2.email);