import express from "express";
import routerMascota from "./routes/RutaMascota.js";
import routerUsuario from "./routes/RutaUsuario.js";

const app = express();

const puerto = 8080

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando y esta escuchando peticiones.")
})

//Middlewares
app.use(express.json())
app.use("/usuario", routerUsuario)
app.use("/mascota", routerMascota)

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



const mascota = {
    nombre: "Calvin",
    id: 2,
    raza: "PitBull",
    edad: 7,
    "id usuario":1
}

app.get("/mascota", (req, res) => {
    res.json(mascota)
})

//Middlewares



