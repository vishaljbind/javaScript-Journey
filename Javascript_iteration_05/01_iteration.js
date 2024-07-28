// for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
}

//

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

const arr = ["anand", "suraj", "alex", "sam"]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is Detected!");
        continue // break
    }
    console.log(`Value of i is ${index}`);
}

