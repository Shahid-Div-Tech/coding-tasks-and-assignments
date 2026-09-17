const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
     email:{
         type:String,
        required:true,
        unique:true
    },
     password:{
         type:String,
        required:true,
       minlength:8
    },
     age:{
        type:Number,
        required:true,
        min:18
    },

})


const User=mongoose.model("users",userSchema)

module.exports=User