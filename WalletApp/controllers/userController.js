import userModel from "../models/userModel.js";

export async function createUser(req, res){

    const {nombre, edad, ciudad} = req.body.usuario;

    let usuario = null;

    try {
        usuario = await userModel.create({
            nombre,
            edad,
            ciudad
        })
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(201).json(usuario);
}
export async function readUser(req, res){

    const {nombre} = req.body

    let usuario = null;
    try {
        usuario = await userModel.find({nombre},{"ciudad":1})
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }

    res.status(200).json(usuario);
}
export function updateUser(req, res){
    res.sendStatus(200);
}
export function deleteUser(req, res){
    res.sendStatus(200);
}