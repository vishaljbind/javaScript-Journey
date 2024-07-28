const programming = ["js", "kotlin", "java", "cpp"]

const values = programming.forEach(item => {
    // console.log(item);
    return item
})
console.log(values);

// filter

const num2 = [1,2,3,4,5,6,7,8,9,10]

const newNum = num2.filter(num => num > 4)
const num1 = num2.filter(num => {
    return num > 4
})
// console.log(num1);
// console.log(newNum);

const num3 = []
num2.forEach( num => {
    if (num > 4) {
        num3.push(num)
    }
})
console.log(num3);

