//-----file model-----------------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// tạo model
const Post = new Schema({
  // các thông tin
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Post", Post);
