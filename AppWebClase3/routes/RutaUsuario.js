import express from "express"
import { crearUsuario, eliminarUsuario, leerUsuario, listaUsuarios } from "../controllers/ControladorUsuario.js";

const router = express.Router();

// const usuario = {
//     nombre: "Juliana",
//     id: 1,
//     email: "soypedro@correocaliente.com",
//     edad: 32,
//     notas: [5, 4.3, 3.7],
//     "id mascota": 2,
//     "atributo con espacios": "atributo"
// } 

// ./usuario/..

router.get("/lista", (req, res) => {
    listaUsuarios(res)
})

router.post("/nuevo", function (req, res) {
    crearUsuario(req, res)
})

router.get("/:nombre", (req, res) => {
    leerUsuario(req, res)
})

router.delete("/:nombre", (req, res) =>{
    eliminarUsuario(req, res)
})

export default router