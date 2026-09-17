const express=require("express")
const dotenv=require("dotenv")
const authRoute = require("./Routes/authRoutes")
const dataBaseConnection = require("./helperFunctions/connectDB")
const dns = require("dns");
const todoRoutes = require("./Routes/todoRoutes");
const globalError = require("./helperFunctions/globalError");
dotenv.config(
    {path:"./src/.env"}
)

const app=express()



dns.setServers(["8.8.8.8", "1.1.1.1"]);

dataBaseConnection()

app.use(express.json())

app.get("/health",(req,res)=>{
    res.json({
        status:true,
        message:"app is working"
    })
})


app.use("/api/auth",authRoute)
app.use("/api/todo",todoRoutes)
app.use(globalError)




app.listen(process.env.PORT,()=>{
    console.log("server is working")
})