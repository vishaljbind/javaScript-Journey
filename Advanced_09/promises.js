const promise1 = new Promise(function (resolve, reject) {
    //Async task
    setTimeout(() => {
        // console.log(`async task is complete`);
        resolve()
    }, 1000);
})

promise1.then(function () {
    // console.log(`promise consumed`);
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        // console.log(`async task 2`);
    resolve()
    }, 1000);
}).then(() => {
    // console.log("Async task 2 is resolved");
})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({username:"anand", phone: 99758122})
    }, 1000);
}).then(function (user) {
    // console.log(user);
})

const promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username:"anand", phone: 99758122})
        } else {
           reject('ERROR: Something went wrong') 
        }
    }, 1000);
}).then(function (user) {
    console.log(user);
    return user.username
}).then( (username) => {
    console.log(username);
}).catch( function (error) {
    console.log(error);
}).finally(() => {
    console.log("promise is either resolved/rejacted always");
})

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username:"anand", phone: 99758122})
        } else {
           reject('ERROR: Something went wrong') 
        }
    }, 1000);
})

async function consumePromise() {
    try {
        const response =  await promise5
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}
consumePromise()

async function getUserProfile() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        // console.log(data);
    } catch (error) {
        console.log('E: ', error);
    }
}

getUserProfile()

fetch('https://api.github.com/users/Anand-Prasad-14')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.log(error))