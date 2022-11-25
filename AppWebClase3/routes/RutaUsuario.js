import express from "express"

const router = express.Router();

const usuario = {
    nombre: "Juliana",
    id: 1,
    email: "soypedro@correocaliente.com",
    edad: 32,
    notas: [5, 4.3, 3.7],
    "id mascota": 2,
    "atributo con espacios": "atributo"
}

// ./usuario/..


router.get("/", (req, res) => {
    res.json(usuario)
})

router.get("/nombre", (req, res) => {
    const nombre = usuario.nombre
    const mensaje = `<b>${nombre}</b>`
    res.send(mensaje)
})

export default router