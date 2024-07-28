// forof loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is : ${greet}`);
}

// maps
const map = new Map()
map.set('IN', "india")
map.set('US', "united state of america")
map.set('Fr', "france")
map.set('UK', "england")
map.set('SA', "south africa")

for (const [key, value] of map) {
    console.log(key, ": -> ", value);
}



const myobj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const iterator of object) {
    
// }