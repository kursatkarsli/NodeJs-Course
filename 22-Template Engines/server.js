const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router.js');
const messagesRouter = require('./routes/messages.router.js');

const app = express();

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
// app.set('case sensitive routing', true)
const PORT = 3000;


/// Middleware
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello World',
        caption: 'NABER LA\''
    })
})
app.use((req, res, next) => {
    const start = Date.now()
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use("/", express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)
app.listen(PORT, () => {
    console.log(`SERVER LİSTENİNG ON ${PORT}`)
})
