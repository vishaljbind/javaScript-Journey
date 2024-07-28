const user = {
    username: "anand",
    loginCount: 12,
    signInCount: true,

    getUserProfile: function () {
        // console.log("got user profile from db");
        console.log(`Username: ${this.username}`);
        console.log(this);   // this refer to current context 
    }
}

// console.log(user.username);
// console.log(this); // give object
// console.log(user.getUserProfile());


//constructor function

function User(username, loginCount, signInCount) {
    this.username = username;
    this.loginCount = loginCount;
    this.signInCount = signInCount;

    this.getUserProfile = function () {
        // console.log("got user profile from db");
        console.log(`Username: ${this.username}`);
        // console.log(this);   // this refer to current context 
    }
}

const user1 = new User("anand", 12, true);
const user2 = new User("suraj", 15,false)
console.log(user1);
console.log(user1.getUserProfile());
console.log(user2);
