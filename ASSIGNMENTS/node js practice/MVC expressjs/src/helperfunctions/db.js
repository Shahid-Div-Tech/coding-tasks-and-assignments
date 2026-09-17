const mongoose = require('mongoose');
const dotenv=require("dotenv")
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);


dotenv.config({
    path:"./src/.env"
})



const connectDB=async ()=> {
    console.log(process.env.MONGOOSE_URI)
    try{
        const con=await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("db connected successfully")
    }
    catch(error){
        console.log(error)
    }


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


module.exports=connectDB