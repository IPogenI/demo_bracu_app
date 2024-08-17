import userModel from "../models/userModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err.message)
    }
}