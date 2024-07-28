
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsrName(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("anand", "anand@gmail.com", "123")
console.log(user1.encryptPassword());
console.log(user1.changeUsrName());
console.log(user1);


//behind scene

function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function() {
    return ` ${this.password}abc`
}

User.prototype.changeUsrName = function () {
    return ` ${this.username.toUpperCase()}`
}

const user2 = new User("suraj", "suraj@gmail.com", "143")
// console.log(user2.encryptPassword());
// console.log(user2.changeUsrName());
// console.log(user2);

