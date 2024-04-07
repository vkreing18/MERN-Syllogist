const prompt = require('prompt-sync')();
const fs = require('fs');

function User(id,name,email,phone){

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

}

exports.addUser = ()=>{
    const howManyUser = prompt(`Enter How Many User`);
    let userArr = []; 
    for(let i=0;i<howManyUser;i++){
        const id = prompt(`Enter The Id::`);
        const name = prompt(`Enter The Name::`);
        const email = prompt(`Enter The Email::`);
        const phone = prompt(`Enter The Phone::`);
        const user = new User(id,name,email,phone);
        userArr =[...userArr,user];
    }
    //inter change the data into the file
    //sync way 
   // fs.writeFileSync("user.json",JSON.stringify(userArr));

   //another way
   fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{
    if(err)
    console.log(`something went wrong`)
    else
    console.log(`User(s) saved successfully`)
   })
}
/* {
    id,
    name,
    email,
    phone
}
*/


