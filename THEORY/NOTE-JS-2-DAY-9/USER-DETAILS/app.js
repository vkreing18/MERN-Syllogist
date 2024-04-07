//  Create a list of users 
// update an users and also add an user to the list of users
// List users
// Delete users



// ----------------------------------------------------------------//

//                        METHOD-1



// const createUser = require('./create');

// const prompt = require('prompt-sync')();

// const operation = prompt(`Enter which operation you want to perform ?`);
// /*
// add
// update
// list
// delete
// */

// switch(operation){
//     case 'add':
//         createUser.addUser();
//         break;
//     case 'update':
//         break;
//     case 'delete':
//         break;
//     default:
//         console.log(`No Operation is going to performed`);
//         break;
// }


// -------------------------------------------------------------------//



//                  METHOD-2



const {addUser} = require('./create');
const {updateUser} = require('./update');


const prompt = require('prompt-sync')();

const operation = prompt(`Enter which operation you want to perform ?`);
/*
add
update
list
delete
*/

switch(operation){
    case 'add':
        addUser();
        break;
    case 'update':
        const id = prompt(`Enter the user id you want to update ?`);
        updateUser(id);
        break;
    case 'delete':
        const idd = prompt(`Enter the user id you want to update ?`);
        deleteUser(idd);
        break;
    default:
        console.log(`No Operation is going to performed`);
        break;
}


