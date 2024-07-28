// singleton
//Object.create()

//object literals

const mysym = Symbol("Key1")
const jsuser = {
    name: "anand",
    "full Name": "Anand Prasad",
    [mysym]: "Mykey1",
    age: 18,
    location: "Mumbai",
    isLoogedIn: false,
    lastDaysLog: ["Monday", "Saturday"]
}

//object access
console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser["full Name"]);
console.log(jsuser[mysym]);

jsuser.name = "Suraj"
// Object.freeze(jsuser)
jsuser.name = "anand"
console.log(jsuser);

jsuser.greeting = function () {
    console.log("Hello anand");
}

jsuser.greetingTwo = function () {
    console.log(`Hello ${this.name}`);
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());