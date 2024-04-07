const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models/User');
//const { model } = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/add',async(req,res)=>{
    try{

        let  { full_name,email,password } = req.body;
        /**Generate password */
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password,salt);
        
        const user = new User({full_name,email,password});
        await user.save();
        
        
        return res.status(200).json({
            message:"User saved successfully",
            user
        })
        
    }catch(err){
        return res.status(500).json({
            message:"Something Went Wrong",
            error:err.message
        })

    }
    })





    router.post('/login',async(req,res)=>{
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email,password});
            if(user){
                const verifyuser = await bcrypt.compare(password,user.password);
                if(verifyuser){
                    const payload = {
                        user:{
                            id:user_id
                        }
                    }
                    const token = jwt.sign(payload,'SiliconMERNcourse',{expiresIn:3600})
                    res.status(200).json({
                        message:"Logged in",
                        user:{user_id:user._id,email:user.email},
                        token
                    })
                }else{
                    res.status(401).json({
                        message:"Wrong Username/password"
                    })

                    }
                }else{
                    res.status(401).json({
                        message:"Wrong Username/password"
                    })
                }
            }catch(err0){
                res.status(401).json({
                    message:"Something went wrong"
                })
            }
        }
    )

    module.exports = router