
const express = require('express')
const { addNewFriend, deleteOneFriend, getAllFriends, getFriendById } = require('../controllers/index.js');

const friendsRouter = express.Router()

friendsRouter.use((req, res, next) => {
    console.log('IP address:', req.ip)
    next()
})

friendsRouter.post('/', addNewFriend)

friendsRouter.delete('/:id', deleteOneFriend)

friendsRouter.get('/', getAllFriends)

friendsRouter.get('/:id', getFriendById)

module.exports = friendsRouter