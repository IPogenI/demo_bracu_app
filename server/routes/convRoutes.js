import express from 'express'
import { createConversation, getConversations } from '../controllers/convController.js'

const router = express.Router()

router.get("/:userId", getConversations)
router.post("/", createConversation)

export default router