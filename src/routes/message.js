const express = require('express')

const messageCtrl = require('../controller/messageController')

const message = express.Router()

/* GET home page. */
message.post('/', messageCtrl.message)

module.exports = message
