const express=require("express")

const { addTodoController, getTodoController, getTodoById, deleteTodo } = require("../controllers/todoController")

const todoRoutes=express.Router()

todoRoutes.get("/all",getTodoController)
todoRoutes.post("/add",addTodoController)
todoRoutes.get("/all/:id",getTodoById)
todoRoutes.delete("/delete/:id",deleteTodo)


module.exports=todoRoutes