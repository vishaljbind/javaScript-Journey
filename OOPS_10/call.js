function setUserName(username) {
    // complex db calls
    this.username = username
    console.log("called");
}

function createUser(username, email , password) {
    this.email = email,
    this.password = 123,
    // setUserName(username)
    setUserName.call(this, username)
    console.log(this);
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
}

const user1 = new createUser("anand", "anand@gmail.com", "123")
console.log(user1);