import express from "express";

const app = express();

const puerto = 8080

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando y esta escuchando peticiones.")
})

app.get("/inicio", (req, res) => {
    res.send("G20")
})

app.get("/", (req, res) => {
    res.send("<b>Bienvenido a mi primera aplicación web</b>")
})

app.get("/redi", (req, res) => {
    res.redirect("inicio")
})


//Declarar un objeto JSON

const usuario = {
    nombre: "Pedro",
    id: 1,
    email: "soypedro@correocaliente.com",
    edad: 32,
    notas: [5, 4.3, 3.7],
    "id mascota": 2,
    "atributo con espacios": "atributo"
}

const mascota = {
    nombre: "Calvin",
    id: 2,
    raza: "PitBull",
    edad: 7,
    "id usuario":1
}

app.get("/usuario", (req, res) => {
    res.json(usuario)
})

app.get("/mascota", (req, res) => {
    res.json(mascota)
})
