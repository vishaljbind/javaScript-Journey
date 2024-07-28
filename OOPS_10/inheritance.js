class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    logme(){
        console.log(`Username is : ${this.name}`);
    }
}

class Teacher extends User {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    addCourse(){
        super.logme();
        console.log(`A new course Subject is added : ${this.subject}`);
    }
}

const teacher = new Teacher('anand', 23, 'Javascript');
teacher.addCourse(); 

const user1 = new User("suraj", "anand@gmail.com", "1234")

console.log(teacher instanceof Teacher);
console.log(user1 instanceof User);