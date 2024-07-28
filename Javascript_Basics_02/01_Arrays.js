const arr = [0,3,4,45,2,5]
const player = ["Ironman", "Superman", "Hulk"]
const arr1 = new Array(1,2,3,4)
console.log(arr[3]);

//Array methods
arr.push(6)
arr.push(6)
arr.pop()
arr.unshift(0)
arr.shift()

// console.log(arr.includes(9));
// console.log(arr[9]);
// console.log(arr.indexOf(4));
// console.log(arr);

// const newArr = arr.join()
// console.log(arr);
// console.log(typeof newArr);

console.log("A " , arr);
const myarr = arr.slice(1,3)
console.log(myarr);
console.log("B", arr);

const myarr1 = arr.splice(1,3)
console.log(myarr1);
console.log("C", arr);

// difference between slice and splice in javascript?

