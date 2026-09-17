const express=require("express")
const {sucessResponse,errorResponse}=require("../helperfunctions/responseHandler")
const Users=require("../models/userSchema")
const {signupController,loginController} = require("../Controllers/authController")

const authRoutes=express.Router()


authRoutes.post("/signup",signupController)
authRoutes.post("/login",signupController)

module.exports=authRoutes