import express from 'express'
import { createConversation, getConversations, checkConversationExists } from '../controllers/convController.js'

const router = express.Router()

router.get("/:userId", getConversations)
router.post("/ifExists", checkConversationExists)
router.post("/", createConversation)

export default router