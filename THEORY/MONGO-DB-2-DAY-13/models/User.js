const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const userSchema = new Schema({
    full_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

exports.User = mongoose.model('user',userSchema);