const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User", 
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("blog",blogSchema);