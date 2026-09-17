
class AppError extends Error{

    constructor(message,statusCode){
        this.statusCode=statusCode
        super(message)
    }
}

module.exports=AppError