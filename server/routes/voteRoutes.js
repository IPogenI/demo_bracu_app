import express from 'express'
import { setVote } from '../controllers/voteController.js'

const router = express.Router()

router.post("/", setVote)


export default router