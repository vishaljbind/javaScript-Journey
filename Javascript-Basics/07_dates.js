let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toJSON());

// console.log(typeof mydate);

let mydate2 = new Date(2024, 4, 14)
let mydate3 = new Date("2024-06-11")
console.log(mydate2);
console.log(mydate3);
console.log(mydate2.toString());
console.log(mydate2.toDateString());
console.log(mydate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getMonth());

newDate.toLocaleString('default',{
    weekday: 'long',
})