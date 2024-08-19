import postModel from "../models/postModel.js"
import mongoose from 'mongoose'


export const setVote = async (req, res) => {
    const {postId, username, upvote, downvote} = req.body
    console.log(upvote, downvote)
    try {
        let post = await postModel.findById(postId)
        if(upvote) {
            
            if(!post.upVotes.includes(username)) {
                post.upVotes.push(username)
            }
            if(post.downVotes.includes(username)) {
                post.downVotes = post.downVotes.filter((person) => person !== username)
            }
        }else if(downvote) {
            if(!post.downVotes.includes(username)) {
                post.downVotes.push(username)
            }
            if(post.upVotes.includes(username)) {
                post.upVotes = post.upVotes.filter((person) => person !== username)
            }
        }else {
            if(post.downVotes.includes(username)) {
                post.downVotes = post.downVotes.filter((person) => person !== username)
            }
            if(post.upVotes.includes(username)) {
                post.upVotes = post.upVotes.filter((person) => person !== username)
            }
        }

        await postModel.findByIdAndUpdate(postId, {upVotes: post.upVotes, downVotes: post.downVotes})
        res.status(201).json(post)
    }catch (err) {
        res.status(500).json({message: err.message})
        console.log(err.message)
    }
}