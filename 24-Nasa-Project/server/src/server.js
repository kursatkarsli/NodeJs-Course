const PORT = process.env.PORT || 8000
const express = require('express');
const path = require('path')
const http = require('http');
const app = require('./app.js');
const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app)


async function startServer () {

    await loadPlanetsData()
    server.listen(PORT, () => {
        console.log(`Listening on ${PORT}...`)
    })
}

startServer()






