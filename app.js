const http = require('http');

const server = http.createServer((req, res) => {
    console.log('I am ready');
    res.end('I am ready')
})

server.listen(3000);
