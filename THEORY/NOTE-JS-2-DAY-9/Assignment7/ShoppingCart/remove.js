const prompt = require('prompt-sync')();
const fs = require('fs');

exports.removeItem = (id) => {
    const i = fs.readFileSync("cart.json");
    let itemsArr = JSON.parse(i);

    itemsArr = itemsArr.filter(item => item.id != id);
    fs.writeFileSync("cart.json", JSON.stringify(itemsArr), (err)=>{
        if(err){
            console.log("Something went wrong");
        } else {
            console.log("Item #"+id+" has been removed from cart");
        }
    });
}