const express = require('express');
const { addNewFriend, deleteOneFriend, getAllFriends, getFriendById, getMessages, writeToConsole } = require('./controllers/index.js');

const app = express();

const PORT = 3000;


/// Middleware
app.use((req, res, next) => {
    const start = Date.now()

    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);

});
app.use(express.json())

app.post('/friends', addNewFriend
)

app.delete('/friends/:id', deleteOneFriend)

app.get('/friends', getAllFriends)

app.get('/friends/:id', getFriendById)
app.get('/messages', getMessages)
app.post('/messages', writeToConsole)
app.listen(PORT, () => {
    console.log(`SERVER LİSTENİNG ON ${PORT}`)
})
