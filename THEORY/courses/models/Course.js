const mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    course_name:{
        type:String,
        required:true
    },
    course_price:{
        type:Number,
        required:true
    },
    start_date:{
        type:Date,
        required:false
    },
    end_date:{
        type:Date,
        required:false
    }

},{timestamps:true})

exports.Course = mongoose.model('course',courseSchema);

