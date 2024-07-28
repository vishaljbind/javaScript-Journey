const marvel_heros = ["Thor", "Spiderman", "Hulk", "Ironman"]
const dc_heros = ["Superman", "Splash", "Batman", "Cyborg"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[4]);

const allheros = marvel_heros.concat(dc_heros)

console.log(allheros);

const all_new = [...marvel_heros, ...dc_heros]
console.log(all_new);

const another_arr = [1,3,3, [2,4,5], 7, [8,3,4]]
const real_arr = another_arr.flat(Infinity)
console.log(real_arr);


console.log(Array.isArray("anand"));
console.log(Array.from("anand"));
console.log(Array.from({name: "anand"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));