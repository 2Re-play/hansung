const { Router } = require('express')

const chatRoomCtrl = require('../controller/chatRoomController')

const chatRoom = Router()

/* GET home page. */
chatRoom.delete('/:user_key', chatRoomCtrl.outChat)

module.exports = chatRoom
