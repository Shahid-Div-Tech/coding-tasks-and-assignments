const express=require("express")
const { sucessResponse, errorResponse } = require("../helperFunctions/response")
const User = require("../model/userModel")
const { SignupController, loginController } = require("../controllers/authController")

const authRoute=express.Router()



authRoute.post("/signup",SignupController)


authRoute.post("/login",loginController)

module.exports=authRoute