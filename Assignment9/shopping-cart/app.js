const express=require('express');
const productRoutes=require('./routes');
const fs=require('fs');
const {uuid}=require('uuidv4');
const {Product}=require('./Product');

const app=express();
const port=999;

app.use(express.json())
app.use(productRoutes);

app.listen(port,()=>{
    console.log("server started at port http://localhost:"+port);
}
)