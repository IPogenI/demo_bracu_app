import mongoose from "mongoose";

// Define the post schema
const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: ''
  },
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  commentCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const postModel = mongoose.model('posts', postSchema);

export default postModel;