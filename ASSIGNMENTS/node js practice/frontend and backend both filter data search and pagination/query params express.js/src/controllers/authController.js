const { sucessResponse, errorResponse } = require("../helperFunctions/response")
const User = require("../models/UserModel")

const signupController=async (req,res)=>{

    const {userName,email,password,age}=req.body

    if(!userName || !email || !password || !age){
        errorResponse(400,false,"fill all the fields",res)
    }


try{
    const signupuser=await User.create(req.body)
   return sucessResponse(200,true,"sign up sucessfully",signupuser,res)
}
catch(error){
    errorResponse(400,false,error.message,res)
}
}

const loginController=async(req,res)=>{

    const {email,password}=req.body

        if( !email || !password ){
        errorResponse(400,false,"fill all the fields",res)
    }

   try{
    const loginuser=await User.findOne({password:req.body.password,email:req.body.email})
   return sucessResponse(200,true,"login sucessfully",loginuser,res)
}
catch(error){
    errorResponse(400,false,error.message,res)
}

}



module.exports={signupController,loginController}