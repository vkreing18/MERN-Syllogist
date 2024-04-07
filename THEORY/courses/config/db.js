const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURl = "mongodb+srv://Vkreing18:sahid786@vkreing.ljbiy.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURl,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log(`Database connected`)
}).catch((err)=>console.log(err));
}