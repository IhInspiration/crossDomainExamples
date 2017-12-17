var http = require('http');
var socket = require('socket.io');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });

    res.end();
});

server.listen('2333');

console.log('Server is running at port 2333....');

socket.listen(server).on('connection', function(client) {

    client.on('message', function(msg) {
        client.send('hello: ' + msg);

        console.log('data from client: ' + msg);
    });

    client.on('disconnect', function() {
        console.log('Client socket has closed.');
    });
});