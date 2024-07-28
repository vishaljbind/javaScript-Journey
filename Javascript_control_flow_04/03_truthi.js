const userEmail = "anand@gmail.com" //" " , []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values 
// false, 0, -0, BigInt0n, "", null, undefined, NaN

// truthy values
// true, 1, -1, BigInt1n, " ", [], {},"0", 'false', function(){}

const arr = []
if(arr.length === 0){
    console.log("Array is empty");
}

const myObj = {}
if (Object.keys(myObj).length === 0) {
    console.log("object is empty");
}

// Nullish coalescing operator (??): null safety

let name = null
console.log(name ?? "anand");

let name1 = "anand"
console.log(name1 ?? "anand");


// Terniary Operator

let age = 23
let isEligible = age >= 18 ? "Eligible" : "Not Eligible"
console.log(isEligible);

let isEligible1 = age >= 18 ? "Eligible" : "Not Eligible" + " and you are " + (18 - age) + " years away from being eligible"
console.log(isEligible1);