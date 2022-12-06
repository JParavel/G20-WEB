import express from "express"
import { createUser, deleteUser, readUser, updateUser } from "../controllers/userController.js"
import holaMundo from "../middlewares/holaMundo.js"
import verificarToken from "../middlewares/verificarToken.js"

const userRouter = express.Router()

//CRUD

//CREAR
//POST
userRouter.post("/", holaMundo, createUser)

//LEER
//GET
userRouter.get("/", verificarToken, readUser)

//ACTUALIZAR
//PUT
userRouter.patch("/", (req, res) => {
    updateUser(req, res)
})

userRouter.patch("/muchos", (req, res) => {
    updateUser(req, res)
})

//ELIMINAR
//DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(req, res)
})

export default userRouter;