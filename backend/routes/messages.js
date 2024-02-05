const express = require('express')

const sendmsg = require('../controllers/msgcontrol')
const authmiddleware = require('../middleware/messageauth')

const Usermsg = express.Router()

Usermsg.post('/message/send/:id', authmiddleware, sendmsg)

module.exports = Usermsg