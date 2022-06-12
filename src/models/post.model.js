const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    creator: { type: String },
    title: { type: String },
    link: { type: String },
    pubDate: { type: String },
    content: { type: String },
    contentSnippet: { type: String },
    guid: { type: String },
    categories: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postSchema);
