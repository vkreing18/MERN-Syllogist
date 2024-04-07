const express = require('express');
const fs = require('fs');
const { uuid } = require('uuidv4');
const { Course } = require('../models/Course');
const router = express.Router();


router.post('/add',(req,res)=>{
    try {

        const {course_name, course_price, start_date, end_date} = req.body;

        /**validating the input 
         * whether the data send as input is correct or not
         */
        if(course_name == '' && error == ''){
            error = "Missing Course name";
            res.status(400).json({
                message:error
            })
        }
            if(course_price == '' && error == ''){
                error = "Missing Course price";
                res.status(400).json({
                    message:error
                })
        }


        const courseObj = {
            course_name,
            course_price,
            start_date,
            end_date

        }

        const course  = new Course(courseObj);
        course.save().then((result)=>{
            return res.status(200).json({
                message:"Data save successfully",
                result
            })
        })
        .catch((err)=>{
            return res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
        })

    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        });
    }

})
router.get('/', (req, res) => {
    try {
        /** Getting content of the directory in order to check
         *  for the file courses.json
         */
        console.log(__dirname);
        const filearray = fs.readdirSync(__dirname);
        console.log(filearray);

        let courses = [];
        let message = '';

        /**checking for the file courses.json is 
         * present or not in the directory
         */

        if (filearray.includes("courses.json"))
        // reading tghe file courses.json
            courses = JSON.parse(fs.readFileSync("courses.json"));
            if (courses.length>0)
            message = 'Courses Fetched Successfully';
            else
            message = 'No courses found';
        return res.status(200).json({
            message: message,
            courses
        });
    } catch (err) {
        return res.status(500).json({
            message: "Something went wrong",
            error: err.message,
        });
    }
});


module.exports = router
