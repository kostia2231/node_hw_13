import mongoose from "mongoose";

const MagazineScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  issueNumber: {
    type: Number,
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
});

export default mongoose.model("Magazine", MagazineScheme);
