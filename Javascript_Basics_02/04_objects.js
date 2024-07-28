// const twitter = new Object() //singleton object
const twitter = {} //nonsingleton object

twitter.id = "123abc"
twitter.name = "Alex"
twitter.isLoggedIn = false
console.log(twitter);

const user = {
    email: "anand@gmail.com",
    fullName: {
        userFullName: {
            firstName: "anand",
            lastName: "prasad"
        }
    }
}
console.log(user.fullName.userFullName.firstName);

const object1 = {
    1:"anand",
    2: "suraj"
}

const object2 = {
    3:"an",
    4: "su"
}

// const obj3 = {object1, object2}
// const obj3 = Object.assign({},object1,object2)

const obj3 = {...object1, ...object2}
console.log(obj3);

const users = [
    {
        id: 1,
        name: "name"
    },
    {
        id: 2,
        name: "name"
    },
    {
        id: 3,
        name: "name"
    }
]

users[1].name
console.log(twitter);
console.log(Object.keys(twitter));
console.log(Object.values(twitter));
console.log(Object.entries(twitter));
console.log(twitter.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Kotlin Program",
    price: "9999",
    Instructor: "anand"
}

// course.Instructor

const {Instructor} = course
console.log(Instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "anand")  // react destructuring

