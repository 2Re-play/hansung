const express = require('express')

const chatRoomCtrl = require('../controller/chatRoomController')

const chatRoom = express.Router()

/* GET home page. */
chatRoom.delete('/:user_key', chatRoomCtrl.outChat)

module.exports = chatRoom
