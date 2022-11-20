const express = require('express');

const app = express();

const PORT = 3000;
const friends = [{ name: 'Albert Einstein', id: 0 }, { name: 'Sir Isaac Newton 1', id: 1 }]


/// Middleware
app.use((req, res, next) => {
    const start = Date.now()

    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);

});
app.use(express.json())

app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.sendStatus(400)
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);
    res.json(newFriend)
})

app.delete('/friends/:id', (req, res) => {
    const friendId = req.params.id;

    const newFriendsList = friends.filter((item) => item.id !== Number(friendId)).map(item => ({ name: item.name, id: item.id - 1 }))


    friends.length = 0
    Object.assign(friends, newFriendsList)
    console.log(newFriendsList, friends)
    res.status(200).send('Friend Has been deleted')
})

app.get('/friends', (req, res) => {
    // res.send('HELLO WORLD')
    res.json(friends)
})

app.get('/friends/:id', (req, res) => {
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
})
app.get('/messages', (req, res) => {
    res.send('<ul><li>HELLO ALBERT!</li></ul>')
})
app.post('/messages', (req, res) => {
    console.log('UPDATİNG')
})
app.listen(PORT, () => {
    console.log(`SERVER LİSTENİNG ON ${PORT}`)
})
