const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    phone:{
        type:String,
    }
},
  {
   //to remember the time of user's details updation and creation we use timestamps
   timestamps: true
  }
)

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;