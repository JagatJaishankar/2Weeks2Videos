import mongoose from "mongoose";

const refundSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  url: {
    type: String,
    required: true,
    trim: true,
  },
  source: {
    type: String,
    required: true,
    trim: true,
  },
  like: {
    type: String,
    required: true,
    trim: true,
  },
  struggle: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Refund || mongoose.model("Refund", refundSchema);
