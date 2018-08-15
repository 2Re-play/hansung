const { Router } = require('express')
const keyboard = require('./keyboard')
const message = require('./message')
const chatRoom = require('./chatRoom')
const friend = require('./friend')
// const restaurant = require('./restaurant')

const router = Router()

/* GET home page. */
router.use('/keyboard', keyboard)
router.use('/message', message)
router.use('/chat_room', chatRoom)
router.use('/friend', friend)

module.exports = router
