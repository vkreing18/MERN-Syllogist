const prompt = require('prompt-sync')();
const fs = require('fs');

function items(id, name, quantity, price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

exports.updateCart = (id) => {
    const i = fs.readFileSync("cart.json");
    let itemsArr = JSON.parse(i);

    selectedItem = itemsArr.filter(item => item.id == id);
    itemsArr = itemsArr.filter(item => item.id != id);
    const quantity = prompt('Enter new Item Quantity :');
    const name = selectedItem[0].name;
    const price = selectedItem[0].price;
    const Items = new items(id, name, quantity, price);
    itemsArr.push(Items);
    fs.writeFileSync("cart.json", JSON.stringify(itemsArr), (err)=>{
        if(err){
            console.log("Something went wrong");
        } else {
            console.log("Item : "+ name + "\t\tQuantity : "+ quantity + " was Updated!");
        }
    });
}