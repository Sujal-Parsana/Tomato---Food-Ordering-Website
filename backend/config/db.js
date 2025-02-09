import mongoose, { connect } from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sujalparsana:1766@cluster0.is5jy.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}