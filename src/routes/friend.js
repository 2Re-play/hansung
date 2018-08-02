const express = require('express')

const friendctrl = require('../controller/friendController')

const firend = express.Router()

/* GET home page. */
firend.post('/', friendctrl.plus_friend)
firend.delete('/', friendctrl.delete_friend)

module.exports = firend
