// promise has 3 state 

//1. Pending------operation not completed still getting executed
//2. Fullfiled-----operation completed successfully
//3.REjected------operation failed

// PROMISE EXEMPLE


// let count = 0;

// let cntVal = new Promise((resolve,reject)=>{
//     if(count)
//     resolve(`Promise Resolved`);
//     else
//     reject(`promise Rejected`);
// })
//  console.log(cntVal);



let count = 1;

let cntVal = new Promise((resolve,reject)=>{
    if(count)
    resolve(`Promise Resolved`);
    else
    reject(`promise Rejected`);
})

// passing a function into another function is a callback function....
// here result is a callback function 
// As result is called by another function named then

console.log(cntVal);
 cntVal.then((result)=>{
    console.log(result);
 })

 .then((result)=>{
    console.log(`Something to be done after the first 'then'`);
 })
 .catch((result)=>{
    console.log(result)
 })


