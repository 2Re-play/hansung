const express = require('express')

const keyboardCtrl = require('../controller/keyboardController')

const keyboard = express.Router()

/* GET home page. */
keyboard.get('/', keyboardCtrl.mainButtons)

module.exports = keyboard
