const express=require("express")
const dotenv=require("dotenv")
const connectDB=require("./helperfunctions/db")
const authRoutes=require("./Routes/authRoutes")
dotenv.config(
{ path: "./src/.env" }
)

const app=express()

app.use(express.json())

connectDB()



app.get("/health",(req,res)=>{
     res.status(200).json({
        status:true,
        message:"server is working fine"
     })
})

app.use("/api/auth",authRoutes)











app.listen(process.env.PORT,()=>{
    console.log("server is start")
})