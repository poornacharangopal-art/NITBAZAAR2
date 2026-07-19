const mongoose=require("mongoose");
const OtpSchema=new mongoose.Schema({
  Email:{
    type:String,
    require:true
  },
  Otp:{
    type:Number,
    require:true
  },
  Expiry:{
    type:Date,
    require:true
  }
});
module.exports=mongoose.model("Otp",OtpSchema);
    
