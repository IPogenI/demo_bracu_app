import express from 'express'
import postRoutes from './postRoutes.js'
import authRoutes from './authRoutes.js'
import commentRoutes from './commentRoutes.js'
import convRoutes from './convRoutes.js'
import messageRoutes from './messageRoutes.js'
import userRoutes from './userRoutes.js'
import voteRoutes from './voteRoutes.js'

const router = express.Router()


router.use("/post", postRoutes)
router.use("/auth", authRoutes)
router.use("/comment", commentRoutes)
router.use("/conv", convRoutes)
router.use("/message", messageRoutes)
router.use("/user", userRoutes)
router.use("/vote", voteRoutes)

export default router