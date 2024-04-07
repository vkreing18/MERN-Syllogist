// const http = require("http");
// const port = 4000;

// // const server = http.createServer((req, res) => {
// //   //console.log(req);
// //   if (req.url == "/") {
// //     // res.writeHead(200,{'Content-Type':'text/plain'});
// //     res.statusCode = 200;
// //     res.setHeader('Content-Type', 'text/html');
// //     //res.write("This is being served from web server");

// //     // html type 
// //     res.write("<html>");
// //     res.write("<head>");
// //     res.write("</head>");
// //     res.write("</body><h1>home</h1></body>");
// //     res.write("</head>"); 
// //     res.end();
// //   }
// //   if (req.url == "/about") {
// //     res.write("About");
// //     res.end();
// //   }
// // //   } else {
// // //     res.write("404-page not found");
// // //     res.end();
// // });

// // server.listen(port, () => {
// //   console.log(`Server started at port ${port}`);
// // });





// // json type
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.write(JSON.stringify({message:"Hello There"}))
//     res.end();
//   }
//   if (req.url == "/about") {
//     res.write("About");
//     res.end();
//   }
// });

// server.listen(port, () => {
//   console.log(`Server started at port ${port}`);
// });









//instance of the express frame work....is app for our application

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



