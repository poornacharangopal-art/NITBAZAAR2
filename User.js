const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
  EmailId:{
    type:String,
    required:true
  },
  UserId:{
    type:String,
    required:true
  },
  UserName:{
    type:String,
    required:true
  },
  College:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});
module.export=model.mongoose("User",UserSchema);
