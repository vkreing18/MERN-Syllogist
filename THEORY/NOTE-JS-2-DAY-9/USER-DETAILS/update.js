//   1.read from the file
//   2.filter the data that you want to update
//   3.enter tha data that you want to update
//   4.add the data to the existing array
//   5.we need to write it back

const prompt = require('prompt-sync')();
const fs = require('fs');

function User(id,name,email,phone){

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

}

exports.updateUser = (id)=>{
    let userArr = JSON.parse(fs.readFileSync("user.json"));
    console.log(`Original User Array ${JSON.stringify(userArr)}`);
    userArr = userArr.filter(user => user.id != id);
    console.log(`Array without the id which is to be updated ${JSON.stringify(userArr)}`);
    //const id = prompt(`Enter The Id::`);
    const name = prompt(`Enter The Name::`);
    const email = prompt(`Enter The Email::`);
    const phone = prompt(`Enter The Phone::`);

    const userObj = new User(id,name,email,phone);
    console.log(`details of the id to be updated ${JSON.stringify(userArr)}`);
    userArr=[...userArr,userObj];
    console.log(`Array after the updating the Original id ${JSON.stringify(userArr)}`);
    fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{
        if(err)
        console.log(`something went wrong`)
        else
        console.log(`User(s) updated successfully`)
       })
}
