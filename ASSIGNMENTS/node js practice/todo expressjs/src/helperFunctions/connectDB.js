
const mongoose = require('mongoose');
const dotenv=require("dotenv")

const dataBaseConnection= async()=>{
try{
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log("DB connect sucessfully")
}
catch(error){
    console.log(error.message)
}
}


module.exports=dataBaseConnection
