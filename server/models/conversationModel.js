import mongoose from 'mongoose'

const conversationSchema = new mongoose.Schema(
    {
        photo: {
            type: String,
            default: 'https://cdn-icons-png.flaticon.com/512/9790/9790561.png',
        },
        conversationName: {
            type: String,
        },
        isGroup: {
            type: Boolean,
            default: false,
        },
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
            },
        ],
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
        },
    },
    {
        timestamps: true,
    }
)

const conversationModel = mongoose.model("conversations", conversationSchema)
export default conversationModel