const express = require('express');
const router = require('./api/descriptions-router.js');

const server = express();

server.use('/api/descriptions', router)

server.get('/', (req, res) => {
    res.status(200).json({message: "API is up and running"});
});

module.exports = server;


