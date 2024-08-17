import express from 'express'
import { createMessage, getMessages } from '../controllers/messageController.js'

const router = express.Router()

router.get("/:conversationId", getMessages)
router.post("/", createMessage)


export default router