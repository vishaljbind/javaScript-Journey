// iteration on object

// forin loop

const myobj = {
    js: 'javascript',
    java: 'java',
    kt : 'kotlin',
    cpp: 'c++'
}

for (const key in myobj) {
    console.log(`${key} shortcut is : ${myobj[key]}`);
}

const programming = ["js", "kotlin", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}