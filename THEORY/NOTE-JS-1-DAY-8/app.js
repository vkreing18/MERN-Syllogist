const express=require('express');
const fs=require('fs')
const app=express();
const port=4026;
app.use(express.json())

    app.get('/product',(req,res)=>{
        const content=JSON.parse(fs.readFileSync("cart.json"));
        // let sum=0;
        // for(let i=0;i<content.length;i++)
        // {
        //     sum=sum+content[i].price*content[i].quantity;
        // }
       // JSON.stringify(sum);
        res.status(200).json({ 
            message:"Retrieved data" ,
            data:content ,
            //Total_price:sum
            })
    })
    app.get('/product/:product_id',(req,res)=>{
        product_id=req.params.product_id;
        let content=JSON.parse(fs.readFileSync("cart.json"));
        const mathcheddata=content.filter(content=>content.product_id==product_id);
        res.status(200).json({
        message:"Retrieved data",
        data:mathcheddata  
        })
})

app.post('/add',(req,res)=>{
    console.log(req.body)
    console.log(req.headers)
    const product_id=req.body.product_id;
    const product_name=req.body.product_name;
    const product_description=req.body.product_description;
    const price =req.body.price;
    const product_image=req.body.product_image;
    let array=JSON.parse(fs.readFileSync('cart.json'));
    array=[...array,{product_id:product_id,product_name:product_name,product_description:product_description,price:price,product_image:product_image}];
    fs.writeFile('cart.json',JSON.stringify(array),(err)=>{
        if(err)
        return res.status(500).json({
        message:"Something is wrong",
        error:err
    })
    return res.status(201).json({
        message:"saved",
        Details:{product_id:product_id,product_name:product_name,product_description:product_description,price:price,product_image:product_image}
    })
    })
})
app.delete('/:product_id',(req,res)=>{
    let product_id=req.params.product_id;
    let content=JSON.parse(fs.readFileSync("cart.json"));
    content=content.filter(content=>content.product_id!=product_id);
    fs.writeFile('cart.json',JSON.stringify(content),(err)=>{
        if(err)
           return res.status(500).json({
           message:"Something is wrong",
           error:err
    })
    else
    return res.status(201).json({
        message:"deleted",
    
    })
    })

})
app.put("/update/:product_id",(req,res)=>{
    const {product_id}=req.params
    const {id,product_name,product_description,price,product_image}=req.body;
    //let product_id=req.params.product_id;
    let upd=JSON.parse(fs.readFileSync('cart.json'));
    upd=upd.filter(upd=>upd.product_id!=product_id);
    upd=[...upd,{id,product_name,product_description,price,product_image}];
    fs.writeFile('cart.json',JSON.stringify(upd),(err)=>{
        if(err)
        return res.status(500).json({
        message:"Something is wrong",
        error:err
    })
    return res.status(201).json({
        message:"updated",
       
    })
    })
})
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})