import express from 'express'
import postRoutes from './postRoutes.js'
import authRoutes from './authRoutes.js'
import commentRoutes from './commentRoutes.js'

const router = express.Router()


router.use("/post", postRoutes)
router.use("/auth", authRoutes)
router.use("/comment", commentRoutes)

export default router