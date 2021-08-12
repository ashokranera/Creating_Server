var http = require('http')

var server = http.createServer((req , res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
 
    var myObj = {
        name:'ashok',
        job : 'nodejs',
        age : 22
    };

    res.end(JSON.stringify(myObj))
})

server.listen(3000,'127.0.0.1');
console.log('now listening to port 3000');