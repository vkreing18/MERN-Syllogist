const mongoose = require('mongoose');

exports.dbConn = async()=>{
    try{
        const dbURl = "mongodb+srv://Vkreing18:sahid786@vkreing.ljbiy.mongodb.net/coursedb?retryWrites=true&w=majority"
        await mongoose.connect(dbURl,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error ${err.message}`);
    }
 
}