// const user ={
//     name:'John Doe',
//     email:'john@gmail.com',
//     phone:'+91-123-456-7890',
//     password:'1234',
//     address:{
//         main_address:{
//             address1:'Test Address',
//             address2:'',
//             city:'Test City',
//             state:'Test State',
//         },
//         office_address:{
//             address1:'Test address',
//             address2:'',
//             city:'Test city',
//             state:'Test state'
//         }
//     }
// }

// console.log(user.address.main_address.city);
// console.log(user.address.city);


// console.log(user.name);
// console.log(user.email);



/// method 1


// const fullName =user.name;
// const userEmail=user.email;
// const userPhone = user.phone;

// object destructure

// const {name,email,phone} = user;

// console.log(`USER DETAILS -
// Name:${name},
// Phone:${phone},
// Email:${email}
// `)



// const {name:fullName,email:userEmail,phone:userPhone} = user;

// console.log(`USER DETAILS -
// Name:${fullName},
// Phone:${userPhone},
// Email:${userEmail}
// `)


//object1.object2.object3.property1
//object1.object2.object3.property2






const user ={
    name:'John Doe',
    email:'john@gmail.com',
    phone:'+91-123-456-7890',
    password:'1234',
    address:{
        main_address:{
            address1:'Test Address',
            address2:'',
            city:'Test City',
            state:'Test State',
        },
        office_address:{
            address1:'Test address',
            address2:'',
            city:'Test city',
            state:'Test state'
        }
    }
}




const {address1:main_address1,address2:main_address2,city:main_city,state:main_state} = user.address.main_address
const {address1:office_address1,address2:office_address2,city:office_city,state:office_state} = user.address.office_address


console.log(main_address1);
console.log(main_address2);
console.log(office_address1);

// const {address1,address2,city,state} = user.address.main_address;

// console.log(address1);
// console.log(address2);
// console.log(city);
// console.log(state);



// synchronous and asynchronous programming
/*

synchronous --- untill the  line 1 is executed line 2 cannot be executed  
*/



