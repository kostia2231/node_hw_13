import mongoose from "mongoose";

const PublisherScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
});

export default mongoose.model("Publisher", PublisherScheme);
