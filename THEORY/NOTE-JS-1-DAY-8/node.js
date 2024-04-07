// // globalThis.console.log('AA')


// //There are 3 type of java package

// //  own packages,already there packages,node packages third party files




// //how to build our own module





// //const custom = require('./custom');

// const prompt = require('prompt-sync')()
// const {hello,add} = require('./custom')


// console.log(hello);
// const x = Number(prompt(`Enter First Number`));
// const y = Number(prompt(`Enter second Number`));
// console.log(add(x,y));





//    DEFAULT MODULES



// const fs = require('fs');// file system

// const content = fs.readFileSync('./user.json');
// console.log(JSON.parse(content));

// buffer is temporary storage.......

// const fs = require('fs');// file system

// const content = fs.readFileSync('./user.json');
// console.log(content.toString());

//console.log(JSON.parse(content));


const user1 = {
    name:"Joy",
    email:"joy@emple.com",
    age:20
}

console.log(JSON.stringify(user1));

// const fs = require('fs');
// const con = fs.readFileSync('./user.json');
// console.log(JSON.parse(con));