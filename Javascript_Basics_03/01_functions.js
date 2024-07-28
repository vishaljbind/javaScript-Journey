function sayMyName() {
    console.log("anand");
}

// sayMyName()

// function add(num1, num2) {  // => undefined
// console.log(num1 + num2);
// }

function add(num1, num2) {
    return num1 + num2;
}
 const result = add(3, 4)
 console.log("Result: ",result); 

 function loginMessage(username = "sammy") {
    if (username === undefined) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
 }

//  console.log(loginMessage("anand"));
console.log(loginMessage())

function calculateCarPrice(...num1) { // rest operator
    return num1
}
console.log(calculateCarPrice(200,300,400));

const user = {
    name: "anand",
    price: 199
}

function hanObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// hanObject(user)
hanObject({
    name: "suraj",
    price: 299
})

const myArr = [200,300,400]
function returnValue(getarray) {
    return getarray[1]
}
// console.log(returnValue(myArr));
console.log(returnValue([200,300,400]));