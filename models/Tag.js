import mongoose from "mongoose";

const TagScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
    },
  ],
});

export default mongoose.model("Tag", TagScheme);
