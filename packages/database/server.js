const server = require("express")();
const bodyParser = require("body-parser");
const express = require('express');

const { port } = require("./config");
const config = require("./config");

server.use(express.json());
require('./dbUtil')(config);
require('./routes/get')(server);
require('./routes/post')(server);
server.listen(port, () => console.log(`server on ${port}`));
