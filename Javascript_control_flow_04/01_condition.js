// # control flow
// <, >, <=, >=, ==, !=, ===
const isUserLoggedIn = true
if (isUserLoggedIn) {
    console.log(`you logged in`);
}

const temperature = 30

if (temperature < 35) {
    console.log("room temperature");
} else {
    console.log("not room temperature");
}

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`power is ${power}`);
}

// console.log(`power is ${power}`);

const balance = 2000
if (balance < 500) {
    console.log("less than");
} else if (balance > 1000) {
    console.log("greater than");
} else {
    console.log("less than 3000");
}


const userLoggedIn  = true
const debitCard = true
if (userLoggedIn && debitCard) {
    console.log(`allow to buy course`);
}

const loggedInFromGoogle = false
const loggedInFromEmail = true
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log(`loggedIN`);
}