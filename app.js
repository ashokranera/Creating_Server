var http = require('http')

var server = http.createServer((req , res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey node');
})

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');