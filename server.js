const express = require('express');
const server = express();
const NamesRouter = require('./api/namesRouter');

server.use(express.json())

server.use('/api/names', NamesRouter);

module.exports = server;