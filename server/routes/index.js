import express from 'express'
import postRoutes from './postRoutes.js'
import authRoutes from './authRoutes.js'

const router = express.Router()


router.use("/post", postRoutes)
router.use("/auth", authRoutes)

export default router