const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    author: String,
    image: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/article-linear-icon-modern-outline-logo-concept-whit-white-background-programming-collection-suitable-use-web-apps-133523925.jpg",
    },
    title: String,
    content: String,
    length: Number,
    createdBy: String,
    likes: Boolean,
    comments: String,
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
