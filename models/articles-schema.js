const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/article-linear-icon-modern-outline-logo-concept-whit-white-background-programming-collection-suitable-use-web-apps-133523925.jpg",
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    length: Number,
    createdBy: String,
    likes: [{ type: Number }],
    comments: [],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
