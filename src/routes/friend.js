const { Router } = require('express')

const friendCtrl = require('../controller/friendController')

const firend = Router()

/* GET home page. */
firend.post('/', friendCtrl.plusFriend)
firend.delete('/', friendCtrl.deleteFriend)

module.exports = firend
