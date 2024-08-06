import argon2 from 'argon2'
import userModel from '../models/userModel.js'

export const registerController = async (req, res) => {
    try {
        console.log(req.body)
        const {username, email, password} = req.body
        const hashedPassword = await argon2.hash(password)

        const newUser = await userModel.create(
            {
                username,
                email,
                hashedPassword
            }
        )

        res.status(200).json(newUser)
    } catch (err) {
        
        res.status(500).json(err)
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({email})
        if( !user ){
            console.log("user not found")
            return res.status(404).json("user not found")
        }

        const isValid = await argon2.verify(user.hashedPassword, password)

        if(!isValid) {
            console.log("wrong password")
            return res.status(400).json("wrong password")
        }

        res.status(200).json(user)
    } catch(err) {
        res.status(500).json(err)
    }
}