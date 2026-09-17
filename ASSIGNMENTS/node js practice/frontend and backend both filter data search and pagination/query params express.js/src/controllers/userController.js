const { sucessResponse, errorResponse } = require("../helperFunctions/response")
const User = require("../models/UserModel")
const usersRoutes = require("../Routes/usersRoutes")

const getUserController=async (req,res)=>{
  
    console.log(req.query)
    

    let limit=req.query.limit ||5
    let skip=req.query.skip
    let sorted=req.query.sort || "id"
    
    
    let userData={...req.query}

    delete userData.limit
    delete userData.skip
    delete userData.sort

    if (userData.userName === "" || userData.userName === "undefined" ) {
    delete userData.userName;
}

console.log(userData)
    // let query={}
    
    

    // if (req.query.userName) {
    //     query = {userName:req.query.userName}
    // }


    // if(req.query.ageStart && req.query.ageEnd ){
    //    query= {age:{$gte:Number(req.query.ageStart), $lte:Number(req.query.ageEnd)}}
    // }

try {
    // const getusers= await User.find({userName:"shahid ahmed"})

    const getusers= await User.find(userData).limit(limit).skip(skip).sort(sorted)
        return sucessResponse(200,true," sucessfully",getusers,res)
} catch (error) {
    errorResponse(400,false,error.message,res)
}
}

const addUserController=(req,res)=>{
return sucessResponse(200,true,"add sucessfully",[],res)
}

const updateUserController=(req,res)=>{
 return sucessResponse(200,true,"update sucessfully",[],res)
}


const deleteUserController=(req,res)=>{
   return sucessResponse(200,true,"delete sucessfully",[],res)
}




module.exports={getUserController,addUserController,updateUserController,deleteUserController}