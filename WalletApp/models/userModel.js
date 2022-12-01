import mongoose from "mongoose";

const userModel = mongoose.Schema({
    "nombre":{type:String, required:true},
    "edad":Number,
    "ciudad":{type:String, required:true}
})

export default mongoose.model("users", userModel)