const { response } = require("express");
const {
  sucessResponse,
  errorResponse,
} = require("../helperFunctions/response");
const User = require("../model/userModel");

const SignupController = async (req, res) => {
  const { userName, email, password } = req.body;

  if (!email || !userName || !password) {
    return errorResponse(400, false, "please fill all the fields", res);
  }

  if (password.length < 8) {
    return errorResponse(400, false, "minimun 8 carrecters are required", res);
  }

  try {
    const createUser = await User.create(req.body);
    return sucessResponse(
      200,
      true,
      "user added successfully",
      createUser,
      res,
    );
  } catch (error) {
    return errorResponse(400, false, error.message, res);
  }

  return sucessResponse(200, true, "user added successfully", [], res);
};



const loginController=async(req,res)=>{
   
    const {email,password}=req.body

    if(!email || !password){
        errorResponse(400,false,"fill all the fields",res)
    }

    try {

       
       const finduser= await User.findOne({email:email,password:password})
        if (!finduser) {
    return errorResponse(401, false, "Invalid email or password", res);
  }
       finduser.token=new Date().getMilliseconds()
      return   sucessResponse(200,true,"login successfull",finduser,res)
    

    }catch(error){
      return   errorResponse(400,false,error.message,res)
    }
}
module.exports = { SignupController,loginController };
