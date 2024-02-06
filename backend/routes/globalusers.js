const express = require('express')
const authmiddleware = require('../middleware/messageauth')
const allUsers = require('../controllers/allusers')

const alluserRouter = express.Router()

alluserRouter.get('/allusers', authmiddleware, allUsers)

module.exports = alluserRouter