const friends = require("../models/friends.model");



const addNewFriend = (req, res) => { // Bu fonksiyonlar bizim controller'ımız olacak

    if (!req.body.name) {
        return res.sendStatus(400)
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend)
}
const deleteOneFriend = (req, res) => {
    const friendId = req.params.id;

    const newFriendsList = friends.filter((item) => item.id !== Number(friendId)).map(item => ({ name: item.name, id: item.id - 1 }))


    friends.length = 0
    Object.assign(friends, newFriendsList)
    console.log(newFriendsList, friends)
    res.status(200).send('Friend Has been deleted')
}

const getAllFriends = (req, res) => {
    // res.send('HELLO WORLD')
    res.json(friends)
}
const getFriendById = (req, res) => {
    const friendId = req.params.id
    if (friends[Number(friendId)]) {
        res.status(200).json(friends[Number(friendId)])

    }
    else {
        //eğer bulamazsa yapılacaklar burada
        // res.status(404).json({ error: 'FRİEND DOES NOT EXİST' })
        // res.sendStatus(404); //Bu hazır status mesajı ile gelir. Örneğin sendStatus(404) = res.status(404).json('Not Found')
        res.status(404).send('LA BULAMADIK') // Custom error mesajı ile

    }
}
module.exports = {
    addNewFriend,
    deleteOneFriend,
    getAllFriends,
    getFriendById
}