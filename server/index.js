import dotenv from 'dotenv'
import multer from 'multer';
import { google } from 'googleapis';
import fs from 'fs';
import express, { urlencoded } from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import postModel from './models/postModel.js';
import mongoose from 'mongoose';

dotenv.config()

const upload = multer({
    dest: 'uploads/'
})

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

connectDB();

const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    redirect_uris: [process.env.GOOGLE_REDIRECT_URI]
}

const refreshToken = process.env.GOOGLE_REFRESH_TOKEN

const { client_id, client_secret, redirect_uris } = credentials
const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
)

oauth2Client.setCredentials({ refresh_token: refreshToken })

const drive = google.drive({
    version: "v3",
    auth: oauth2Client
})

const uploadImage = async (filePath, fileName, mimeType) => {
    try {
        const res = await drive.files.create({
            requestBody: {
                name: fileName,
                mimeType: mimeType
            },

            media: {
                mimeType: mimeType,
                body: fs.createReadStream(filePath)
            }
        })

        // Setting Image Permission to Public
        const fileId = res.data.id;

        await drive.permissions.create({
            fileId: fileId,
            requestBody: {
                role: 'reader',
                type: 'anyone',
            },
        })

        // const res2 = await drive.files.get({
        //     fileId: fileId,
        //     fields: 'webViewLink, webContentLink'
        // })

        fs.unlinkSync(filePath)
         return res.data
        // return res2.data

    } catch (error) {
        console.log(error)
        throw error
    }
}


app.post('/createPost', upload.single('file'), async (req, res) => {
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
        res.status(500).json({ error: 'Failed to create post' });
    }



    // postModel.create(req.body)
    // .then((post) => res.json(post))
    // .catch((err) => res.json(err));
});

const extractFileId = (url) => {
    const regex = /\/d\/([^\/?]+)/
    const match = url.match(regex)
    return match[1]
}

const deleteImageFromDrive = async (fileId) => {

    try {
        await drive.files.delete({fileId})
        console.log("Image deleted from Drive")
    }catch (error) {
        console.error("Image not deleted from drive")
        throw error
    }
}

app.delete("/deletePost/:id", async(req, res) => {
    const { id } = req.params;


    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: "Post ID not valid"})
    }

    try {
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
})

app.put("/updatePost/:id", upload.single("file"), async(req, res) => {

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
})

app.get('/getPost', async (req, res) => {
    postModel.find({}).sort({ updatedAt: -1 })
        .then((posts) => res.json(posts))
        .catch((err) => res.json(err))
})


app.listen(PORT, () => {
    console.log(`Listening from PORT: ${PORT}`)
})