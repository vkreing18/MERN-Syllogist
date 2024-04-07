const prompt = require('prompt-sync')();
const fs = require('fs');

exports.totalPrice = () => {
    const i = fs.readFileSync("cart.json");
    let itemsArr = JSON.parse(i);

    let total = 0;
    for (let i = 0; i < itemsArr.length; i++) {
        total += itemsArr[i].price * itemsArr[i].quantity ;
    }
    return total;
}