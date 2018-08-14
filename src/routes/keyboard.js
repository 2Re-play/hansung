const { Router } = require('express')

const keyboardCtrl = require('../controller/keyboardController')

const keyboard = Router()

/* GET home page. */
keyboard.get('/', keyboardCtrl.mainButtons)

module.exports = keyboard
