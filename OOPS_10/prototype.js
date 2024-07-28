// let  myname = "anand   "
// console.log(myname.truelength);

let myhero = ["superman", "flash"]

let heropower = {
    superman: "fly",
    flash: "super speed",

    getSpiderPower : function () {
        console.log(`Flying power is ${this.superman}`);
    }
}

Object.prototype.anand = function () {
    console.log(`anand is present in all objects`);
}

// heropower.anand()
myhero.anand()


Array.prototype.anandall = function () {
    console.log(`anand all hello`);
}

// myhero.anandall()
// heropower.anandall()


//inheritance

const student = {
    name: "anand",
    age: 23,
    email: "anand@gmail.com"
}

const studentSupport = {
    isAvailable : false
}
const teacher = {
    makeVideo: true,
}

const teachSupport = {
    isAvailable : false
}

const TAsupport = {
    makeAssign: 'js assign',
    fulltime : true,
    __proto__ : teachSupport
}

teacher.__proto__ = student

/// modern approach for prototypal inheritance

Object.setPrototypeOf(teachSupport, teacher)

let userName = "anand   "
String.prototype.truelength = function () {
    console.log(`${this}`);
    console.log(`truelength is : ${this.trim().length}`);
}

userName.truelength()
"anand".truelength()