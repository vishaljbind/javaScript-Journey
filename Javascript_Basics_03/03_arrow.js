const user = {
    username: "anand",
    price: 100,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "alex"
// user.welcomeMessage()

// console.log(this);

// this keyword is global 


function myfin(){
    let user = "anand"
    console.log(this.user); // undefined
}

// myfin()

//arrow function does not support this keyword in javascript ?

// const myfun = function(){
//     let user = "anand"
//     console.log(this.user); //undefined
// }

const myfun = () => {
    let user = "anand"
    console.log(this.user);
}
// myfun()  //undefined


//**************************ARROWW FUNCTION***************** */

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2,5));

const object1 = () => ({username: "anand"})
console.log(object1());
