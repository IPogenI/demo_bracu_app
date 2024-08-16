import conversationModel from "../models/conversationModel.js";
import mongoose from 'mongoose'

//for a user
export const getConversations = async (req, res) => {
    const {userId} = req.params

    try {
        const conv = await conversationModel.find({users: userId})

        res.status(200).json(conv)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}

export const createConversation = async (req, res) => {

    try {

        const conv = await conversationModel.create(req.body);
        res.status(201).json(conv)
        console.log(conv)

    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}