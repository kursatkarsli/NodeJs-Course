const express = require('express');
const path = require('path')
const planetsRouter = require('./routers/planets/planet.router')
const morgan = require('morgan');
const cors = require('cors');
const launchesRouter = require('./routers/launches/launches.router')

const app = express();
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:8000'] }))

app.use(morgan('combined'))

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter)

app.get('/*', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '..', '/public', 'index.html'))
})


module.exports = app;
