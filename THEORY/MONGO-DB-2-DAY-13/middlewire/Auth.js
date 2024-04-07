const jwt = require('jsonwebtoken');

const Auth = async (req,res,next)=>{
    // console.log(req.header);
    // console.log(req.body);
    try{

       const token =  req.headers['x-auth-token'];
       if(!token){
        return res.status(401).json({
            message:"Missing Auth token"
        })
       }
       if(await jwt.verify(token,'SiliconMERNcourse')){
        next();
       }
       else{
        return res.status(401).json({
            message:"Unauthorized"
        })
       }
    }catch(err){
        return res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
}

module.exports = Auth