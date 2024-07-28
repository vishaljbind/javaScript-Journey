// let a = 10
// const b = 20
// var c = 30

let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:", a);
}
console.log(a);
// console.log(b);
console.log(c);

function one() {
    const userName = "anand"
    function two() {
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}

one()

if (true) {
    const username = "anand"
    if (username === "anand") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);