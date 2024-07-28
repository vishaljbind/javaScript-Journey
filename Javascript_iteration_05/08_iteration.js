// reduce methods for shopping cart total bill

const num = [1,2,3,4,5,6,7,8,9,10]

const myTotal = num.reduce((acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc  + currval
}, 0)

console.log(myTotal);

const shoppingCart = [
    {
        coursename: "js course",
        price: 199
    },
    {
        coursename: "mobile course",
        price: 1199
    },
    {
        coursename: "java course",
        price: 599
    },
    {
        coursename: "kotlin course",
        price: 699
    }
]

const courseTotal = shoppingCart.reduce((acc,item) => {
    console.log(`acc: ${acc} and curritem: ${item.coursename} and price is :${item.price}`);
    return acc + item.price
},0)
console.log(courseTotal);