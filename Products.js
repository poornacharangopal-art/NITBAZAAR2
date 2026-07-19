const mongoose=require("mongoose");
const ProductsSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  ImageUrl:{
    type:String,
    required:true
  },
  UserEmail:{
    type:String,
    required:true
  },
  Cost:{
    type:Number,
    required:true
  },
  UserName:{
    type:String,
    required:true
  },
  College:{
    type:String,
    required:true
  }
})
module.exports=mongoose.model("Products",ProductsSchema);

  
