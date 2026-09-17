const express=require("express")
const morgan = require("morgan")
const  cors = require('cors')


let items=[]

const app=express()

app.use(cors())
app.use((req, res, next) => {
    express.json()(req, res, () => {
        if(req.body){
              req.body.name="shahid"
        
        }
     
        
       
        next()
    })
})

app.use(morgan())


app.get("/product",(req,res)=>{
    res.status(200).json({
        status:true,
        data:items
    })
})



app.post("/product",(req,res)=>{
     items.push(req.body)
     res.send("added successfully")
})


app.listen(3000,()=>{
    console.log("dukhan khul gae ")
})