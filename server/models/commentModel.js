import mongoose from "mongoose";

// Define the comment schema
const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const commentModel = mongoose.model("comments", commentSchema)
export default commentModel