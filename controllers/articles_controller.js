const express = require('express')
const articles = express.Router()
const Article = require('../models/articles.js')

articles.get('/', (req, res) => {
    Article.find({}, (err, foundArticles) => {
        res.json(foundArticles)
    })
})


articles.post('/', (req, res) => {
    Article.create(req.body, (err, createdArticle) => {
        Article.find({}, (err, foundArticles) => {
            res.json(foundArticles)
        })
    })
})

articles.put('/:id', (req,res) => {
    Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true},
        (err, updatedArticle) => {
            if (err) {
                res.send(err)
            } else {
                Article.find({}, (err, foundArticles) => {
                    res.json(foundArticles)
                })
            }
        }
    )
})

articles.delete('/:id', (req, res) => {
    Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
        Article.find({}, (err, foundArticles) => {
            res.json(foundArticles)
        })
    })
})

module.exports = articles
