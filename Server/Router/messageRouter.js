const express = require('express');
const addMessageController = require('../Controller/messageController');
const { getMessages } = require('../Controller/getMessage');
const messaeRouter = express.Router();
messaeRouter.post('/addMessage', addMessageController)
messaeRouter.post('/getmsg',getMessages)
module.exports = messaeRouter;