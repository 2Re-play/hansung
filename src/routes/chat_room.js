const express = require('express')

const chat_room_ctrl = require('../controller/chat_room_Controller')

const keyboard = express.Router()

/* GET home page. */
keyboard.delete('/:user_key', chat_room_ctrl.out_chat)

module.exports = keyboard
