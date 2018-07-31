const express = require('express')

const keyboardctrl = require('../controller/keyboardController')

const keyboard = express.Router()

/* GET home page. */
keyboard.get('/', keyboardctrl.main_buttons)

module.exports = keyboard
