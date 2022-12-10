import mongoose from "mongoose";
import bcrypt from "bcrypt"

const profileSchema = new mongoose.Schema({
    "estado": String,
    "soltero": Boolean
})

const ciudades = ["Barranquilla", "Cali", "Bogotá", "Medellin", "Bucaramanga", "Sin Asignar"]

const userSchema = new mongoose.Schema({
    "nombre": { type: String, required: true, maxLength: 30, minLength: 3, unique: true, immutable: true },
    "contraseña": { type: String, required: true }
}, { timestamps: true })

export default mongoose.model("users", userSchema)