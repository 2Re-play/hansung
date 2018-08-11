const express = require('express')

const friendCtrl = require('../controller/friendController')

const firend = express.Router()

/* GET home page. */
firend.post('/', friendCtrl.plusFriend)
firend.delete('/', friendCtrl.deleteFriend)

module.exports = firend
