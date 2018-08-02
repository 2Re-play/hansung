const express = require('express')

const chat_room_ctrl = require('../controller/chat_room_Controller')

const chat_room = express.Router()

/* GET home page. */
chat_room.delete('/:user_key', chat_room_ctrl.out_chat)

module.exports = chat_room
