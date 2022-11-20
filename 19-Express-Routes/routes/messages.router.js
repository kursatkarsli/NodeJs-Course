const express = require("express")
const messagesRouter = express.Router()
const { getMessages, writeToConsole } = require('../controllers/index.js');

messagesRouter.get('/', getMessages)
messagesRouter.post('/', writeToConsole)

module.exports = messagesRouter