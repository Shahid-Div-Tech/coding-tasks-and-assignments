const AppError = require("../helperFunctions/errorClass")
const { sucessResponse, errorResponse } = require("../helperFunctions/response")
const Todos = require("../model/todoModel")


const addTodoController=async(req,res)=>{

  const {title,message}=req.body
  
  if(!title || !message){
    return errorResponse(400,false,"required all the fields",res)
  }

  try{
      const data= await Todos.create(req.body)
     return  sucessResponse(200,true,"added successfully",data,res)
  }
  catch(error){
    return errorResponse(400,false,error.message,res)
  }
}

const getTodoController=async(req,res)=>{

  

  try{
      const data= await Todos.find()
     return  sucessResponse(200,true,"sucess",data,res)
  }
  catch(error){
    return errorResponse(400,false,error.message,res)
  }
}



const getTodoById=async(req,res)=>{
  
  

  try{
      const data= await Todos.findOne({_id:req.params.id})
      if(!data){
        return errorResponse(400,false,"not available",res)
      }
     return  sucessResponse(200,true,"sucess",data,res)
  }
  catch(error){
    return errorResponse(400,false,error.message,res)
  }
}


const deleteTodo=async(req,res,next)=>{
  
  

  try{
      const data= await Todos.deleteOne({_id:req.params.id})
      if(!data){
        next(new AppError(400,"server is down "))
      }
     return  sucessResponse(200,true,"delte sucessfully",data,res)
  }
  catch(error){
    return errorResponse(400,false,error.message,res)
  }
}
module.exports={addTodoController,getTodoController,getTodoById,deleteTodo}