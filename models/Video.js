import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    required: true,
    trim: true,
  },
  difficulty: {
    type: Number,
    required: true,
  },
  manifest: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Video || mongoose.model("Video", videoSchema);
