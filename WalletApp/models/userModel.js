import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    "estado": String,
    "soltero": Boolean
})

function validar(value){
    return true
}
const ciudades = ["Barranquilla", "Cali", "Bogotá", "Medellin", "Bucaramanga", "Sin Asignar"]

const userSchema = mongoose.Schema({
    "nombre":{
        type: String,
        required: true,
        maxLength: 30,
        minLength: 3,
        unique: true,
        immutable: true
    },
    "edad":{
        type: Number,
        min: 18,
        max: 99,
        required:true,
        validate:{
            validator: validar,
            message: "El valor debe ser un numero par"
        }
    },
    "ciudad":{
        type: String,
        default: "Sin Asignar",
        enum: ciudades
    },
    "estado":{
        type:Boolean,
        set: () => true
    }
})

export default mongoose.model("users", userSchema)