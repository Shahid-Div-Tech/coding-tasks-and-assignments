const { errorResponse, sucessResponse } = require("../helperfunctions/responseHandler")
const Users = require("../models/userSchema")

const signupController=async (req,res)=>{

const {email,password,userName}=req.body


if(!email || !password || !userName){
  return errorResponse(400,false,"fill all fields",res)
}

if(password.length<8){
 return  errorResponse(400,false,"password should be minimum 8 characters long",res)
}

try{
  await Users.create({
  email:email,
  password:password,
  userName:userName
 
})
 return    sucessResponse(200,true,"create user successfully",[],res)
}catch(error){

  return errorResponse(400,false,error.message,res)
  
}
  }


  const loginController=(req,res)=>{

  }

  module.exports={signupController,loginController}