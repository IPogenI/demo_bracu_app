import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    hashedPassword: {
      type: String,
      required: true
    },
    profilePicture: {
      type: String,
      default: "",
    }
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema)
export default userModel