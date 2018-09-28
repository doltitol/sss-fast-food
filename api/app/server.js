const http = require('http');
//to import index.js file
const app = require('./routes/index');

//to use localhost or port from the server
const port = process.env.PORT || 3000;

//create the server
const server = http.createServer(app);

//listen at port
server.listen(port);

module.exports = server;