const express = require('express')

const messagectrl = require('../controller/messageController')

const message = express.Router()

/* GET home page. */
message.post('/', messagectrl.message)

module.exports = message
