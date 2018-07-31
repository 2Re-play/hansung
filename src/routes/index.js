const express = require('express')
const keyboard = require('./keyboard')
const message = require('./message')
// const restaurant = require('./restaurant')

const router = express.Router()

/* GET home page. */
router.use('/keyboard', keyboard)
router.use('/message', message)
// router.use('/restaurant', restaurant)

module.exports = router
