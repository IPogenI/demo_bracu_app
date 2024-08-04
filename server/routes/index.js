import express from 'express'
import postRoutes from './postRoutes.js'

const router = express.Router()


router.use("/post", postRoutes)


export default router