import express from 'express'
import { getPosts, createPosts, updatePosts, deletePosts } from '../controllers/postController.js'
import { google } from 'googleapis'
import multer from 'multer'
import fs from 'fs'
import upload from '../middlewares/upload.js'

const router = express.Router()


router.get("/", getPosts)
router.post("/", upload.single('file'), createPosts)
router.put("/:id", upload.single('file'), updatePosts)
router.delete("/:id", deletePosts)

export default router