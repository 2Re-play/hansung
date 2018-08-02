const express = require('express')
const keyboard = require('./keyboard')
const message = require('./message')
const chat_room = require('./chat_room')
// const restaurant = require('./restaurant')

const router = express.Router()

/* GET home page. */
router.use('/keyboard', keyboard)
router.use('/message', message)
router.use('/chat_room', chat_room)
// router.use('/restaurant', restaurant)

module.exports = router
