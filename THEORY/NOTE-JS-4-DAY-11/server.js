const express = require('express');
const fs = require('fs');

const app = express();

const port = 4000;

// middle ware......it recognise the json data here application is able to accept json data..
app.use(express.json());


app.get('/',(req,res)=>{

const content = JSON.parse(fs.readFileSync("data.json"));
res.status(200).json({
  message:"Retrrived  Data",
  data:content
})

})

app.get('/getrectangle/:height',(req,res)=>{
  console.log(req.params);
  height = req.params.height;
  const content = JSON.parse(fs.readFileSync("data.json"));
  const matcheddata = content.filter(item=>item.height == height);
  res.status(200).json({
    message:"Retrrived  Data",
    data:matcheddata
})
})
  // adding data to the datas file json

app.post('/addrectangle',(req,res)=>{
    console.log(req.body);
    console.log(req.headers);
    // const height = req.body.height;
    // const width = req.body.width;
    const { height,width } = req.body;
    let rectarray = JSON.parse(fs.readFileSync('data.json'));
    rectarray = [...rectarray,{height:height,width:width}];
    fs.writeFile('data.json',JSON.stringify(rectarray),(err)=>{
        if(err)
        return res.status(505).json({
            message:"Something went wrong",
            error:err
        })
        return res.status(201).json({
            message:"New rectangle saved successfully",
            rectangle:{height:height,width:width}
        })
    })
})

// delete the record of data.json


app.delete('/deleterectangle/:height',(req,res)=>{
    const {height} = req.params;
    let rectarray = JSON.parse(fs.readFileSync('data.json'));
    rectarray = rectarray.filter(rect=>rect.height != height);
    fs.writeFile('data.json',JSON.stringify(rectarray),(err)=>{
        if(err)
        return res.status(505).json({
            message:"Something went wrong",
            error:err
        })
        return res.status(200).json({
            message:" Rectangle deleted successfully",
            
        })
    })
})

//update the data in the data file

app.put("/updaterectangle/:height",(req,res)=>{
    const {height} = req.params;
    const {heightr,widthr} = req.body;
    let rectarray = JSON.parse(fs.readFileSync('data.json'));
    rectarray = rectarray.filter(rect=>rect.height == height);
    rectarray = [...rectarray,{heightr,widthr}];
    fs.writeFile('data.json',JSON.stringify(rectarray),(err)=>{
        if(err)
        return res.status(505).json({
            message:"Something went wrong",
            error:err
        })
        return res.status(200).json({
            message:" Rectangle updated successfully",
            
        })
    })

})

app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
})
