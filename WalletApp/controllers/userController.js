import userModel from "../models/userModel.js";

//CREATE
export async function createUser(req, res){

    // const {nombre, edad, ciudad} = req.body.usuario;
    const usuario = req.body.usuario;

    let documento = null;

    try {
        // usuario = await userModel.create({
        //     nombre,
        //     edad,
        //     ciudad
        // })
        documento = await userModel.create(usuario)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(documento);
}

//READ
export async function readUser(req, res){

    const {nombre} = req.body

    let usuario = null;
    try {
        usuario = await userModel.find({nombre},{"_id":0})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(usuario);
}

//UPDATE
export async function updateUser(req, res){

    const {id, updates} = req.body

    let documento = null

    try {
        documento = await userModel.updateOne({"_id":id},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}

export async function updateUsers(req, res){

    const {nombre, updates} = req.body

    let documento = null

    try {
        documento = await userModel.updateMany({nombre},updates)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}



//DELETE
export async function deleteUser(req, res){
    const {id} = req.body

    let documento = null

    try {
        documento = await userModel.deleteOne({"_id":id})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(documento)
}