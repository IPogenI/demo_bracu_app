import conversationModel from "../models/conversationModel.js";
import mongoose from 'mongoose'

//for a user
export const getConversations = async (req, res) => {
    const {userId} = req.params

    try {
        const conv = await conversationModel.find({users: userId}).populate('users')

        res.status(200).json(conv)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}

export const createConversation = async (req, res) => {

    try {

        if(!req.params.conversationId) {
            return res.status(400).json({message: "message not linked to any conversation"})
        }

        const conv = await conversationModel.create(req.body);
        res.status(201).json(conv)
        console.log(conv)

    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}