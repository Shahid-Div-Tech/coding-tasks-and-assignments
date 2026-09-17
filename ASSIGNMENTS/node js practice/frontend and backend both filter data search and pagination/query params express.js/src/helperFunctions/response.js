
function sucessResponse(statusCode,status,message,data,res){
 return res.status(statusCode).json({
    status,
    message,
    data,
 })
}



function errorResponse(statusCode,status,message,res){
 return res.status(statusCode).json({
    status,
    message,
 })
}

module.exports={sucessResponse,errorResponse}