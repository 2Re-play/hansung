const { Router } = require('express')

const messageCtrl = require('../controller/messageController')

const message = Router()

/* GET home page. */
message.post('/', messageCtrl.message)

module.exports = message
