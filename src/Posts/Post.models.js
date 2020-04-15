import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  post: {
    type: String,
    required: "Required post",
  },
  author: {
    type: String,
    required: "Required author",
  },
});

const PostModel = mongoose.model("postmodel", PostSchema);
PostModel.ensureIndexes();

export default PostModel;
