import express from "express";

const app = express();

const puerto = 8080

app.listen(puerto, () => {
    console.log("El servidor se esta ejecutando y esta escuchando peticiones.")
})

app.get("/inicio", (req, res) => {
    res.send("G20")
})
