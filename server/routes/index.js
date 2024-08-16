import express from 'express'
import postRoutes from './postRoutes.js'
import authRoutes from './authRoutes.js'
import commentRoutes from './commentRoutes.js'
import convRoutes from './convRoutes.js'

const router = express.Router()


router.use("/post", postRoutes)
router.use("/auth", authRoutes)
router.use("/comment", commentRoutes)
router.use("/conv", convRoutes)

export default router