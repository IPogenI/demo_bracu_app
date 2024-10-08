import express from 'express'
import { getComments, createComments} from '../controllers/commentController.js'

const router = express.Router()

router.get("/", getComments)
router.post("/", createComments)

export default router