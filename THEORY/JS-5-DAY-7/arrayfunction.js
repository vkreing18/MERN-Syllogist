// // foe each loop


// arrObj.forEach((value,index)=>{
//     let {name,email,phone} = value;
//     console.log(`${index}->${name}`)
//     console.log(``)
//     console.log(`${index}->${email}`)
//     console.log(``)
//     console.log(`${index}->${phone}`)
//     console.log(``)
// })


// // const arr=[10,20,30,40];
// // // const sqrarr =[100,400,900,1600];


// // let sqrarr=[];
// // for(let i=0;i<arr.length;i++){
// //     const sqr=arr[i]*arr[i];
// //     sqrarr=[...sqrarr,sqr];

// // }
// // console.log(sqrarr);

// // // Mapping Function

// // const arr=[10,20,30,40];
// // let sqrarr = arr.map(item=>item*item)
// // console.log(sqrarr);



// const arrObj =[
//         {
//             name:'Mirza Sahid',
//             email:'mirzaasktitan@gmail.com',
//             phone:'9778412240',
//             password:'11',
//         },
//         {
//             name:'Subarna keshari sutar ',
//             email:'subarnakesharisutar@gmail.com',
//             phone:'77784858621',
//             password:'22',
//         },
//         {
//             name:'xyz xyz',
//             email:'xyzxyz@gmail.com',
//             phone:'97797794524',
//             password:'33',
//         }
//     ]
    
//     // arrObj.forEach((value,index)=>{
//     //     let {name,email,phone} = value;
//     //     console.log(`${index}->${name}`)
//     //     console.log(``)
//     //     console.log(`${index}->${email}`)
//     //     console.log(``)
//     //     console.log(`${index}->${phone}`)
//     //     console.log(``)
//     // })

//     // let moarr=[];
//     // for(let i=0;i<arrObj.length;i++){
//     //     const {name,email,phone} = arrObj[i];
//     //     const obj={
//     //         name,
//     //         email,
//     //         phone
//     //     }

//     //     moarr.push(obj)
//     // }
    
//     // console.log(moarr);


//     let moarr = arrObj.map(item=>{
//         return {
//             name:item.name,
//             email:item.email,
//             phone:item.phone
//         }
//     })

//     console.log(moarr);
    



// filter 


//const arr=[10,20,0,40,1];
const arrObj =[
    {
        name:'Mirza Sahid',
        email:'mirzaasktitan@gmail.com',
        phone:'9778412240',
        age:40
    },
    {
        name:'Subarna keshari sutar ',
        email:'subarnakesharisutar@gmail.com',
        phone:'77784858621',
        age:45
    },
    {
        name:'xyz xyz',
        email:'xyzxyz@gmail.com',
        phone:'97797794524',
        age:35
    }
]

let filteredArrObj = arrObj.filter(item=>item.age >=40)

console.log(filteredArrObj);