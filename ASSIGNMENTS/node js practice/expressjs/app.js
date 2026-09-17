const express=require("express")
const mongoose=require("mongoose")
const dns = require("node:dns");

const User=require("./models/userSkema")

const app=express()

dns.setServers(["8.8.8.8", "1.1.1.1"]);


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://shahidiq1010_db_user:shahidiq1010_db_user@cluster0.vrlfct5.mongodb.net/');

  console.log("=>connected successfully")

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.use(express.json())

app.use((req,res,next)=>{
    req.body.id=new Date().getMilliseconds()
    next()
})



app.get("/user",async (req,res)=>{

    const data=await User.find()

    res.status(200).json({
        status:true,
        message:"success",
        data:data
    })
})


app.post("/user",async (req,res)=>{

    const user = await User.create(req.body);

    res.status(200).json({
        status:true,
        message:"sucess",
   
    })
})

app.put("/user",async (req,res)=>{


    const filter = { name: req.body.name };
const update = {
  $set: {
    password: req.body.password
  }
};

const doc = await User.findOneAndUpdate(filter, update, {
  returnDocument: 'after'
});
    

    res.send({
        status:true,
        message:"update successfully"
    })
})


app.delete("/user",async (req,res)=>{

    const doc = await User.findOneAndDelete({
  name: req.body.name
});



    res.send({
        status:true,
        massage:"delete successfully"
    })
})


app.listen(8000,()=>{
    console.log("your server is running on port 8000")
})