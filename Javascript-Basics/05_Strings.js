const name = "anand"
const repocount = 50

// console.log(name + repocount + "pro");

console.log(`Hello i am ${name} , and my repo count is ${repocount}`);  //string interpolation
const gameName = new String('anandtech')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(5));
console.log(gameName.indexOf('c'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(0,5)
console.log(anotherString);

const sliceEnd = gameName.slice(-9, 5)
console.log(sliceEnd);

const newString1 = "  anand "
console.log(newString1);
console.log(newString1.trim());

const url = "https://anand.com/anand%20Prasad"

console.log(url.replace('%20','-'));
console.log(url.includes('anand'));

const gameName1 = new String('anand-tech')
console.log(gameName1.split('-'));