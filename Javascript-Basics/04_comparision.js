// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);

// console.log("2"> 1);
// console.log("01" > 1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log("2" === 2);
// The reason is that an equality check == and comparisions > < >= <= work differently
//Comparisons convert null to a number, treating it as 0
//That's why (3) null >= 0 is true and (1) null > 0 is false