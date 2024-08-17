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

        // if(!req.body.conversationId) {
        //     return res.status(400).json({message: "message not linked to any conversation"})
        // }

        let conv = await conversationModel.create(req.body)
        conv = await conversationModel.findById(conv._id).populate('users')
        
        res.status(201).json(conv)
        console.log(conv)

    } catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}

export const checkConversationExists = async (req, res) => {
    try {
        const { userId1, userId2 } = req.body;

        
        if (!userId1 || !userId2) {
            return res.status(400).json({ message: "Both user IDs must be provided." });
        }

        
        const conversation = await conversationModel.findOne({
            users: { $all: [userId1, userId2] },
            $expr: { $eq: [{ $size: "$users" }, 2] }
        }).populate('users');

        if (conversation) {
            return res.status(200).json(conversation);
        } else {
            return res.status(200).json({ message: "Conversation not found." });
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err.message);
    }
}