const express = require('express')
const keyboard = require('./keyboard')
const message = require('./message')
const chatRoom = require('./chatRoom')
const friend = require('./friend')
// const restaurant = require('./restaurant')

const router = express.Router()

/* GET home page. */
router.use('/keyboard', keyboard)
router.use('/message', message)
router.use('/chatRoom', chatRoom)
router.use('/friend', friend)
// router.use('/restaurant', restaurant)

module.exports = router
