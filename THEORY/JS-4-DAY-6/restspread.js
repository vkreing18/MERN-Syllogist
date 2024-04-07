// // use of spread operator 
// // concadination of array using spread operstor

// let arr1 =[10,20,30]
// let arr2=[89,67];

// //arr1 = arr1.concat(arr2);
// arr1=[...arr1,...arr2];
// console.log(arr1);

// // copying one array to another

// let arr3=[...arr1];
// arr3.push(60);

// console.log(arr3);
// console.log(arr1);



// const arr4 = [...arr1,60,70,80];
// console.log(arr4);


// function xyz(a,b){
//     return a+b;
// }

// console.log(xyz(...arr4));



//rest javascript to take n number of argument

function abc(a,b,...num){
    console.log(a)
    console.log(b)
    console.log(num);
}

abc(1,3,5,8,9,7,4,55,11,25)