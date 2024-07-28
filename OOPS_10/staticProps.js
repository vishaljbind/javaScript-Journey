class User {
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }

    createId(){  // remove static keyword 
        return Math.floor(Math.random() * 1000);
    }
}

class Teacher extends User {
    constructor(email){
        super("Anand"); //important for java
        this.email = email;
    }
}

const teacher = new Teacher("anand@gmail");
console.log(teacher);
console.log(teacher.createId())
teacher.greet()

const user = new User("Anand");
user.greet();
console.log(user.createId());
console.log(user);