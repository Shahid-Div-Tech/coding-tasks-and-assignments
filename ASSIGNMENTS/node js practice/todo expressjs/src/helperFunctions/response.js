
function sucessResponse(statusCode,status,message,data,res){
  return res.status(statusCode).json({
    status:status,
    message:message,
    data:data
  })
}

function errorResponse(statusCode,status,message,res){
  return res.status(statusCode).json({
    status:status,
    message:message,
  })
}





module.exports={sucessResponse,errorResponse}