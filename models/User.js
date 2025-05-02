import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    trim: true,
  },
  hasAccess: {
    type: Boolean,
    default: false,
  },
  customerId: {
    type: String,
  },
  isSmart: {
    type: Boolean,
  },
  startTime: {
    type: Date,
  },
  videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", userSchema);
