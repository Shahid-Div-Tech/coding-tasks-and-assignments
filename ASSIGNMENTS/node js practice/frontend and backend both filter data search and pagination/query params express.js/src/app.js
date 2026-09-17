const express=require("express")
const dotenv=require("dotenv")
const cors=require("cors")
const dns = require("node:dns");
const dataBaseConnection = require("./helperFunctions/ConnectDB");
const authRoutes = require("./Routes/authRoutes");
const usersRoutes = require("./Routes/usersRoutes");
dotenv.config({
    path:"./src/.env"
})



dns.setServers(["8.8.8.8", "1.1.1.1"]);
const app=express()

app.use(cors())

app.use(express.json())

dataBaseConnection()

app.get("/health",(req,res)=>[
    res.status(200).json({
        status:true,
        message:"app is running succcessfully"
    })
])


app.use("/api/v1/auth",authRoutes)

app.use("/api/v1/users",usersRoutes)




app.listen(process.env.PORT,()=>{
    console.log("app is running")
})