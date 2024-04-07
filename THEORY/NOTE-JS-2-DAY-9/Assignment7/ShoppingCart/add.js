const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id, name, quantity, price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

let itemsArr = [];

exports.addToCart = () => {
    const no_of_items = prompt('How many Items :');
    for(let i = 0; i < no_of_items ; i++){
        const id = prompt('Enter Item ID :');
        const name = prompt('Enter Item Name :');
        const quantity = prompt('Enter Item Quantity :');
        const price = prompt('Enter Item Price :');
        const Items = new items(id, name, quantity, price);
        itemsArr.push(Items);
    }
    fs.writeFileSync("cart.json", JSON.stringify(itemsArr), (err)=>{
        if(err){
            console.log("Something went wrong");
        } else {
            console.log("Item(s) added Successfully");
        }
    });
}