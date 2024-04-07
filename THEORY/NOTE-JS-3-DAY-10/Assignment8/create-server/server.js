const express = require('express');
const fs = require('fs');

const app = express();

const port = 8000;


app.get('/product', (req, res) => {
    const content = JSON.parse(fs.readFileSync(__dirname+"/cart.json"));
    let total = 0;
    for (let i = 0; i < content.length; i++) {
        total += content[i].price * content[i].quantity ;
    }
    res.status(200).json({
        message : "Items in Cart",
        data: content,
        total_price : total
    })
});

app.get('/product/:product_id', (req, res) => {
    product_id = req.params.product_id;
    const content = JSON.parse(fs.readFileSync(__dirname+"/cart.json"));
    const matcheddata = content.filter(item => item.product_id == product_id);
    let total = content[0].price * content[0].quantity ;
    res.status(200).json({
        message : "Retrived Data",
        data: matcheddata,
        total_price : total
    })
});

app.listen(port, ()=> {
    console.log("Server running at http://localhost:"+port);
});