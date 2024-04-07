const express=require('express');
const fs=require('fs');
const {uuid}=require('uuidv4');
const {Product}=require('./Products');


const router=express.Router()

//LIST OF THE PRODUCTS AVAILABLE
router.get('/product',(req,res)=>{
    try{
    console.log(__dirname);
    const filearray=fs.readdirSync(__dirname);
    console.log(filearray); 
    let products=[];
    let message='';

    if(filearray.includes('product.json'))
        products=JSON.parse(fs.readFileSync(__dirname +'/product.json'));

    if(products.length>0)
       message='product fetched successfully'
    else
        message='no product exists'

    return res.status(200).json({
        message:message,
        products
    })
    }catch(err){
        return res.status(500).json({
            message:"something went wrong",
            error:err.message

        })
    }
}
)




//ADDING OF PRODUCT
router.post("/product",(req,res)=>{
    try{
        const filearray = fs.readdirSync(__dirname);
        let products = [];
        let error = '';
        if(filearray.includes('product.json')){

            productJson = fs.readFileSync(__dirname +'/product.json');
            if(productJson){

                products = JSON.parse(productJson);

            }
        }
        const { name,price,description,image} = req.body;



        if(name=='' && error == ''){
            error = "Missing product Name"
            res.status(400).json({
                message: error
            })
        }
        if(price=='' && error == ''){
            error = "Missing product Price"
            res.status(400).json({
                message: error
            })
        }
        if(description=='' && error == ''){
            error = "Missing product description"
            res.status(400).json({
                message: error
            })
        }


        const product = new Product(uuid(),name,price,description,image);
        console.log(product);
        products = [...products,product ];

        fs.writeFile(__dirname +'/product.json', JSON.stringify(products),(err)=>{
            if(err) 
            res.status(500).json({
                message : "Something wrong while writing file",
                error : err
            })
            res.status(200).json({
                message : "product saved successfully",
                product
            })
        })
    }catch(err){
        res.status(500).json({
            message : "Something went wrong",
            error : err.message
        })
    }
})


//DELETE
router.delete('/product/:id',(req,res)=>
 {
    const {id}=req.params;
    let productarray=JSON.parse(fs.readFileSync(__dirname +'/product.json'));
    productarray=productarray.filter(prod=>prod.id!=id);
    fs.writeFile(__dirname +'/product.json',JSON.stringify(productarray),(err)=>{
        if(err)
        return res.status(500).json({
            message:"something went wrong",
            error:err
        })
        return res.status(200).json({
           message:"product deleted successfully" 
        })
    })
 })


 //UPDATE
 router.put("/product/:id",(req,res)=>{
    const {id}=req.params;
    const {name,price,description,image}=req.body;
    let productarray=JSON.parse(fs.readFileSync(__dirname +'/product.json'));
    productarray=productarray.filter(prod=>prod.id!=id);

    const product = new Product(id,name,price,description,image);
    productarray=[...productarray,product];
    fs.writeFile(__dirname +'/product.json',JSON.stringify(productarray),(err)=>{
        if(err)
        return res.status(500).json({
            message:"something went wrong",
            error:err
        })
        return res.status(200).json({
           message:"product updated successfully" 
        })
    })


 })

module.exports=router