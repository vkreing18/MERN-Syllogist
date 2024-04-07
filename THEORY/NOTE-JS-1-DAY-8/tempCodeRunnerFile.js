const fs = require('fs');// file system

const content = fs.readFileSync('./user.json');
console.log(content.toString());