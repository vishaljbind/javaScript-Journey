function multiple5(num) {
    return num * 5
}

multiple5.power = 2
console.log(multiple5(5));
console.log(multiple5.power);
console.log(multiple5.prototype);


// include functionality

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}

createUser.prototype.printme = function () {
    console.log(`score is ${this.score}`);
}

const user1 = new createUser("anand", 35)
const user2 = createUser("suraj", 100)

user1.increment()
user1.printme()