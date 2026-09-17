const sucessResponse=(statuscode,status,message,data,res)=>{
 return   res.status(statuscode).json({
    status:status,
    message:message,
    data:data
   })
}


const errorResponse=(statuscode,status,message,res)=>{
 return   res.status(statuscode).json({
    status:status,
    message:message,
   })
}




module.exports={sucessResponse,errorResponse}
