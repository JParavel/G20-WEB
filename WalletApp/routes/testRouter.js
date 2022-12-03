import express from "express"
import userModel from "../models/userModel.js"

const testRouter = express.Router()

testRouter.get("/", async (req, res) => {

    const { edad, nombre } = req.body;

    let document = null

    try {
        document = await userModel.find()
    } catch (error) {
        res.json(error)
        return
    }

    res.json(document)
})

export default testRouter