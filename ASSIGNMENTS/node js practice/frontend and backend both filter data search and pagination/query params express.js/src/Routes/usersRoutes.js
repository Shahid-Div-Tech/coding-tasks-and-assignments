const express=require("express")
const { getUserController, addUserController, updateUserController, deleteUserController } = require("../controllers/userController")

const usersRoutes=express.Router()

usersRoutes.get("/all",getUserController)
usersRoutes.post("/add",addUserController)
usersRoutes.put("/update",updateUserController)
usersRoutes.delete("/delete",deleteUserController)



module.exports=usersRoutes