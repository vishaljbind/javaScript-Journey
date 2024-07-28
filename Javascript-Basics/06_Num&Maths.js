const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(2));

const investNum = 23.467
console.log(investNum.toPrecision(3));

const payment = 10000
console.log(payment.toLocaleString('en-IN'));

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(2.3));
// console.log(Math.pow(2,5));
// console.log(Math.max(2,4,6));

console.log(Math.random());
console.log((Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + 1); // #