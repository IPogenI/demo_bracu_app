import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
    {
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        },
        message: {
            type: String,
            trim: true
        },
        conversationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "conversations",
            required: true
        }
    },
    {
        timestamps: true
    }
)

const messageModel = mongoose.model("messages", messageSchema)
export default messageModel