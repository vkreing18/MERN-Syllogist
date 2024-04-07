const prompt = require('prompt-sync')();
const {addToCart} = require('./add');
const {updateCart} = require('./update');
const {removeItem} = require('./remove');
const {totalPrice} = require('./total');


const op = prompt("Enter the operation you wish to perform: ");
var id;
switch (op) {
    case 'add':
        addToCart();
        break;
    case 'update':
        id = prompt("Enter the id : ");
        updateCart(id);
        break;
    case 'remove':
        id = prompt("Enter the id : ");
        removeItem(id);
        break;
    default:
        console.log("Unknown operation!");
}
console.log("\nTotal Price of  Items: " + totalPrice());