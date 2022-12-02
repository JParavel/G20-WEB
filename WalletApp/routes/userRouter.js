import express, { Router } from "express"
import { createUser, deleteUser, readUser, updateUser, updateUsers } from "../controllers/userController.js"

const userRouter = express.Router()

//CRUD

//CREAR
//POST
userRouter.post("/", (req, res) => {
    createUser(req, res)
})

//LEER
//GET
userRouter.get("/", (req, res) => {
    readUser(req, res)
})

//ACTUALIZAR
//PUT
userRouter.patch("/", (req, res) => {
    updateUser(req, res)
})

userRouter.patch("/muchos", (req, res) => {
    updateUsers(req, res)
})

//ELIMINAR
//DELETE
userRouter.delete("/", (req, res) => {
    deleteUser(req, res)
})

export default userRouter;