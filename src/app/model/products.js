import mongoose from "mongoose";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Product = new Schema({
  author: ObjectId,
  name:{ type:String },
  description:{ type:String },
  price:{ type:String},
  ratting:{ type:String},
  imgUrl:{ type:String },
  slug:{ type:String },
  quantity:{ type:Number}
  
},{
  timestamps:true
});

Product.plugin(mongooseDelete,{
  deletedAt:true,
  overrideMethods:true,
})

const Products =  mongoose.model("product", Product);
export default Products;