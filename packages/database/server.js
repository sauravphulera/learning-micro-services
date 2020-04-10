const server = require("express")();
const bodyParser = require("body-parser");

const { port } = require("./config");
const config = require("./config");

server.use(bodyParser.json());
require('./dbUtil')(config);
require('./routes/get')(server);
require('./routes/post')(server);
server.listen(port, () => console.log(`server on ${port}`));
