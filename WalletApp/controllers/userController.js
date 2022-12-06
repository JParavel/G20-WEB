import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"

//CREATE
export async function createUser(req, res) {

    const usuario = req.body;
    const { contraseña } = usuario

    const salt = await bcrypt.genSalt(10)
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt)
    usuario.contraseña = contraseñaEncriptada

    let documento = null;

    try {
        documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento);
}

//READ
export async function readUser(req, res) {

    const { nombre } = req

    let usuario = null;
    try {
        usuario = await userModel.findOne({ nombre }, { "_id": 0 })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(usuario);
}

//UPDATE
export async function updateUser(req, res) {

    const { nombre, updates } = req.body

    let documento = null

    try {
        documento = await userModel.updateOne({ nombre }, updates, { runValidators: true })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

// export async function updateUsers(req, res){

//     const {nombre, updates} = req.body

//     let documento = null

//     try {
//         documento = await userModel.updateMany({nombre},updates)
//     } catch (error) {
//         res.status(400).json(error.message)
//         return;
//     }

//     res.status(200).json(documento)
// }



//DELETE
export async function deleteUser(req, res) {
    const { nombre } = req.body

    let documento = null

    try {
        documento = await userModel.deleteOne({ nombre })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}