import express from "express"


let router = express.Router();

// ./mascota/

router.get("/", function (req, res) {
    res.send("Bienvenido a la página de mascotas")
})

router.get("/:nombre", function (req, res) {

    let nombre = req.params.nombre;

    res.send("Usted ha solicitado a la mascota: "+nombre)
})

export default router;

