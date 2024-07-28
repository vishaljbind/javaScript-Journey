// Math.PI = 5
// console.log(Math.PI);

// how we can change the value of Math.PI = 3.14 in javascript ?

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const newObj  = {
    name: "anand",
    age: 20,
    isLoggedOn: true,

    signIn: function login() {
        console.log("not work");
    }
}
console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

Object.defineProperty(newObj, 'name' , {
    // writable: true,
    enumerable: true, // if false then we can't iterate in loop over object ?
    
})

console.log(Object.getOwnPropertyDescriptor(newObj, "name"));

for (let [key, value] of Object.entries(newObj)) {

    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
    
}