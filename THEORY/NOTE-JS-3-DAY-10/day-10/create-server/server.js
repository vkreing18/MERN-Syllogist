const express = require('express');
const fs = require('fs');

const app = express();

const port = 4000;



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

app.listen(port,()=>{
  console.log(`Server started at port ${port}`);
})