import commentModel from "../models/commentModel.js";
import postModel from "../models/postModel.js";
import mongoose from "mongoose";

export const getComments = async (req, res) => {
    try {
        const { postId } = req.query
        const comments = await commentModel.find({ postId }).sort({updatedAt: -1})
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const createComments = async (req, res) => {

    const { postId, content, author, authorImage } = req.body

    try {
        const post = await postModel.findById(postId)

        if (!post) {
            return res.status(404).json("post not found")
        }

        const comment = await commentModel.create({
            postId,
            author,
            authorImage,
            content
        })

        const {commentCount} = post
        await postModel.findByIdAndUpdate(postId, {commentCount: commentCount + 1})

        res.status(201).json(comment)
    } catch (err) {
        res.status(500).json(err.message)
    }
}