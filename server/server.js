const http = require('http');
const fs = require('fs');
const router =require('./router/router.js');

const serverConfigFile = fs.readFileSync(`${__dirname}/config/env.json`,'utf-8');

const serverConfig = JSON.parse(serverConfigFile);
const hostname = serverConfig['hostname'];
const port = serverConfig['port'];

const server = http.createServer((req, res) => {
  router.init(req,res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});