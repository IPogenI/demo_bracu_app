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
    type: [String],
    default: []
  },
  downVotes: {
    type: [String],
    default: []
  },
  commentCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const postModel = mongoose.model('posts', postSchema);

export default postModel;