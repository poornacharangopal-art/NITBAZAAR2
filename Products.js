const mongoose=require("mongoose");
const ProductsSchema=new mongoose.Schema({
  Name:{
    type:String,
    required:true
  },
  ImageUrl{
    type:String,
    required:true
  },
  UserEmail:{
    type:String,
    required:name
  },
  Cost{
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
module.export=model.mongoose("product",ProductSchema);

  
