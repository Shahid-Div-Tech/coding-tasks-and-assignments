const express=require("express")
const cors=require("cors")
const dotenv = require("dotenv")

dotenv.config()


console.log(process.env.MY_GMAIL)
console.log(process.env.MY_Password)



let items=[]

const app=express()



app.use(express.json())

app.use((req,res,next)=>{

    if(req.body){
   req.body.id=new Date().getMilliseconds()
    }

console.log("yahan se guzar gaya")
next()
})

app.use(cors())


app.get("/product",(req,res)=>{
 
    res.status(200).json({
        status:"true",
        message:"successful",
        data:items
    })
})

app.get("/product/:id",(req,res)=>{

    console.log(req.params.id)

    let singleItem=items.find((item)=>{
        return item.id===Number(req.params.id)
        
    })

    console.log(singleItem)

    res.status(200).json({
        status:"true",
        message:"successful",
        data:singleItem
    })
})



app.post("/product",(req,res)=>{

    console.log("req jarahi ha")
    items.push(req.body)

    res.send("addedd successfully")

})





app.listen(3000,()=>{
    console.log("server is running")
})
