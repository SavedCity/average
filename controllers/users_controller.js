const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.post('/', (req, res) => {
    req.body.username = req.body.username
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        console.log('user is created: ', createdUser)
        res.redirect('/')
    })
})

module.exports = users
