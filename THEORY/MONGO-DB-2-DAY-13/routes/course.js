const exp = require('constants');
const express = require('express');
const fs = require('fs');
const { Course } = require('../models/Courses');
const Auth = require('../middlewire/Auth');
const router = express.Router();

router.get('/',async (req,res)=>{
    try{
        const courses = await Course.find();
            return res.status(200).json({
                message:"Courses retrieved successfully",
                courses
            })
        }catch(err){
            return res.status(500).json({
                message:"Something went wrong",
                error:err.message
            })
        }
        })

router.post('/add',Auth,async(req,res)=>{
    try{
        console.log('Reached the Add route');
        const { course_name,course_price,start_date,end_date } = req.body;
        if(course_name == '' && error == ''){
            error="Missing course name"
            res.status(400).json({
                message:error
            })
        }
        if(course_price == '' && error == ''){
            error="Missing course price"
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
    
    const course = new Course(courseObj);
    await course.save();
    return res.status(200).json({
        message:"Course saved successfully"
    })

}catch(err){
    return res.status(500).json({
        message:"Something went wrong",
        error:err.message
    })
}

})
//       METHOD 1

// router.put('/update/:id',async(req,res)=>{
//     try{
//     const id = req.params.id;
//     const {course_name,course_price,start_date,end_date} = req.body;
//     await Course.findByIdAndUpdate(id,{course_name,course_price,start_date,end_date})
//     return res.status(200).json({
//     message:"Data Updated successfully"
//     })

// }catch(err){
//     return res.status(500).json({
//         message:"Something went wrong",
//         error:err.message
//     })
// }
// })





router.put('/update/:id',async(req,res)=>{
    try{
    const id = req.params.id;
    const {course_name,course_price,start_date,end_date} = req.body;
    // await Course.findByIdAndUpdate(id,{course_name,course_price,start_date,end_date})
    // return res.status(200).json({
    // message:"Data Updated successfully"
    // })
    const course = await Course.findById(id);
    course.course_name = course_name;
    course.course_price = course_price;
    course.start_date = start_date;
    course.end_date = end_date;
    await course.save();
    return res.status(200).json({
         message:"Data Updated successfully"
         })

}catch(err){
    return res.status(500).json({
        message:"Something went wrong",
        error:err.message
    })
}
})


router.get('/:name', async(req,res)=>{
    try{
        const course_name = req.params.course_name;
        const course = await Course.findOne({course_name});
        res.status(200).json({
            message:"Data fetched",
            course
        })
    }catch(err){
        res.status(500).json({
            message:"Data did not fetched",
            error:err.message
        })
    }
})

router.delete('/delete/:id', async(req,res)=>{
    try{
        await Course.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message:"Data deleted"
        })
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
})

module.exports = router 