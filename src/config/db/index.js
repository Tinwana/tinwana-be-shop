import mongoose from "mongoose";


export default async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shop-react");
    console.log('connect successful!');
  } catch (err) {
    console.log('connect failure!');
  }
}
