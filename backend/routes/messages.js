const express = require('express')

const authmiddleware = require('../middleware/messageauth')
const { sendmsg, getmessages } = require('../controllers/msgcontrol')

const Usermsg = express.Router()

Usermsg.get('/message/get/:id', authmiddleware, getmessages)
Usermsg.post('/message/send/:id', authmiddleware, sendmsg)

module.exports = Usermsg