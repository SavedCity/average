const express = require("express");
const articles = express.Router();
const Article = require("../models/articles-schema.js");
const Comment = require("../models/comments-schema.js")

articles.get("/", (req, res) => {
  Article.find({}, (err, foundArticles) => {
    res.json(foundArticles);
  });
});

articles.post("/", (req, res) => {
  Article.create(req.body, (err, createdArticle) => {
    Article.find({}, (err, foundArticles) => {
      res.json(foundArticles);
    });
  });
});

articles.get("/:id", (req, res) => {
  Article.findById(
    req.params.id, (err, foundArticle) => {
      foundArticle.comments.push(req.body.comment)
      foundArticle.save()
      res.json(foundArticle)
    }
  )
})

articles.put("/:id", (req, res) => {
  Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedArticle) => {
      if (err) {
        res.send(err);
      } else {
        Article.find({}, (err, foundArticles) => {
          res.json(foundArticles);
        });
      }
    }
  );
});

articles.delete("/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
    Article.find({}, (err, foundArticles) => {
      res.json(foundArticles);
    });
  });
});

module.exports = articles;
