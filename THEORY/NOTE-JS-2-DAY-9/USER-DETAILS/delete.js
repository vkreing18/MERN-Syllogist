const prompt = require('prompt-sync')();
const fs = require('fs');

function User(id,name,email,phone){

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

}

exports.deleteUser = (id)=>{
    let userArr = JSON.parse(fs.readFileSync("user.json"));
    console.log(`Original User Array ${JSON.stringify(userArr)}`);
    userArr = userArr.filter(user => user.id != id);
    console.log(`Array without the id which is to be deleted ${JSON.stringify(userArr)}`);

    fs.writeFile("user.json",JSON.stringify(userArr),(err)=>{
        if(err)
        console.log(`something went wrong`)
        else
        console.log(`User(s) updated successfully`)
       })
}
