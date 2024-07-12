import mongoose from "mongoose";

// Define the comment schema
const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  }
});

// Define the post schema
const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true,
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
  },
  comments: [ commentSchema ] // Array of commentSchema
}, { timestamps: true });

const postModel = mongoose.model('posts', postSchema);

export default postModel;