
const mongoose = require("mongoose");
const userSkema =new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    
  name: {
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

const userModel = mongoose.model('users', userSkema);

module.exports=userModel