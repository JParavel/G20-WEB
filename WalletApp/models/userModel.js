import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    "nombre":{type:String, required:true, immutable:true},
    "edad":Number,
    "ciudad":{type:String, required:true},
    "mensaje": String
})

export default mongoose.model("users", userSchema)