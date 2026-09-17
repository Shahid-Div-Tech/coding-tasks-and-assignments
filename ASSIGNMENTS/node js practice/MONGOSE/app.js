const dns = require("node:dns");





const express=require("express")



dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require('mongoose');
const Users=require("./models/UserSchema")


const app=express()

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://shahidiq1010_db_user:shahidiq1010_db_user@cluster0.vrlfct5.mongodb.net/');
   console.log("=> connected successfully ")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get("/health",(req,res)=>{
 res.send("server is working fine")
})

app.post("/addUser",async (req,res)=>{
    const myUser={
        name:"Sufyan",
        profession:"Software Engineer ",
        age:17
    }
   try{
    const small=await Users.create(myUser)
    res.send({
        status:true,
        message:"user added successfully"
    })
   }
   catch(error){
    console.log(error)
    res.send({
        status:false,
        message:error.message
    })
   }
 
})



app.listen(8000,()=>{
    console.log("app is running ")
}) 