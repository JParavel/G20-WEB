import jwt from "jsonwebtoken"

const ACCESS_TOKEN = "8eb9a3382ab165319fa12e116ce6758bd7a6e8fdce84129beab8c7e678e60c42a6c6ea1f56052d67fa001b8eaf55f837bc413f17981ae899060bad266379bd58"

export default (req, res, next) => {

    const { token } = req.headers

    let nombre

    try {
        nombre = jwt.verify(token, ACCESS_TOKEN)
    } catch (error) {
        res.status(401).json(error.message)
        return
    }


    console.log(nombre);


    req.nombre = nombre

    next()
}