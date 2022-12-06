import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const ACCESS_TOKEN = "8eb9a3382ab165319fa12e116ce6758bd7a6e8fdce84129beab8c7e678e60c42a6c6ea1f56052d67fa001b8eaf55f837bc413f17981ae899060bad266379bd58"

export async function login(req, res) {

    const { nombre, password } = req.headers

    if (nombre == null || password == null) return res.sendStatus(401)

    let document

    try {
        document = await userModel.findOne({ nombre })
    } catch (error) {
        res.status(400).json(error.message)
        return
    }

    if (document == null) return res.sendStatus(401)

    //Validar la contraseña

    if (await bcrypt.compare(password, document.contraseña)) {
        const token = jwt.sign(nombre, ACCESS_TOKEN)
        res.json({ token })
    } else {
        res.sendStatus(401)
    }
}