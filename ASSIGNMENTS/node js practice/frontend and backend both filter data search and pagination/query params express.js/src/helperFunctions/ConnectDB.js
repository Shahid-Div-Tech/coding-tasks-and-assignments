const mongoose=require("mongoose")
const { errorResponse } = require("./response")
const dotenv=require("dotenv")
dotenv.config({
    path:"./src/.env"
})


async function dataBaseConnection(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("==> DB connected sucessfully")

    }
    catch(error){
        console.log(error.message)
    }
}


module.exports=dataBaseConnection