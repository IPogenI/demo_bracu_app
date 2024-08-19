import postModel from "../models/postModel.js"
import commentModel from "../models/commentModel.js"
//import {uploadImage} from "../index.js"
import { uploadImage, deleteImageFromDrive } from "../imageServer/imageServices.js"
import mongoose from "mongoose"

export const getPosts = async (req, res) => {
    postModel.find({}).sort({ createdAt: -1 })
        .then((posts) => res.json(posts))
        .catch((err) => res.json(err))
}

export const getSinglePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await postModel.findById(id)
        if(!post) {
            res.status(404).json("post not found")
        }
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const createPosts = async (req, res) => {
    
    try {
        let { name, caption } = req.body
        let imageUrl = null

        if (req.file) {
            const filePath = req.file.path
            const fileName = req.file.originalname
            const mimeType = req.file.mimetype

            const fileData = await uploadImage(filePath, fileName, mimeType)
            imageUrl = `https://lh3.googleusercontent.com/d/${fileData.id}`
            //imageUrl = fileData.webViewLink
        }

        const newPost = await postModel.create({ name, caption, imageUrl })
        

        res.status(200).json(newPost)
    } catch (error) {
        //res.status(500).json({ error: 'Failed to create post' });
        res.status(500).json({error});
    }



    // postModel.create(req.body)
    // .then((post) => res.json(post))
    // .catch((err) => res.json(err));
}

const extractFileId = (url) => {
    const regex = /\/d\/([^\/?]+)/
    const match = url.match(regex)
    return match[1]
}



export const deletePosts = async (req, res) => {
    const { id } = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Post ID not valid"})
    }

    try {

        const delComment = await commentModel.deleteMany({postId: id})
        const post = await postModel.findByIdAndDelete(id)

        if(!post) {
            return res.status(404).json({error : "Post does not exist"})
        }

        if(post.imageUrl){
            const fileId = extractFileId(post.imageUrl)

            if(fileId) {

                await deleteImageFromDrive(fileId)
            }
        }

        //await postModel.findByIdAndDelete(id)

        res.status(200).json({message: "Post deletion complete"})
    } catch(error){

        console.error("Post deletion error: ", error)
        res.status(500).json({error: 'Post deletion failure'})
    }
}


export const updatePosts = async (req, res) => {
    try {
        const {caption} = req.body
        const {id} = req.params
        const updatedData = {caption}
        let imageUrl = null;
        if(req.file) {
            const filePath = req.file.path
            const fileName = req.file.originalname
            const mimeType = req.file.mimetype

            const fileData = await uploadImage(filePath, fileName, mimeType)
            imageUrl = `https://lh3.googleusercontent.com/d/${fileData.id}`
        }

        if(imageUrl) {
            updatedData.imageUrl = imageUrl
        }

        const updatedPost = await postModel.findByIdAndUpdate(
            id,
            updatedData
        )

        if(updatedPost.imageUrl) {
            const fileId = extractFileId(updatedPost.imageUrl)

            if(fileId) {

                await deleteImageFromDrive(fileId)
            }
        }

        res.status(200).json(updatedPost)

        
    } catch (error) {
        res.status(500).json({error: "Failed to update post"})
    }
}