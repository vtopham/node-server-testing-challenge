const express = require('express');

const server = require('./server.js');

server.use(express.json());

server.listen(4000, _ => {
    console.log('Listening on 4000')
})