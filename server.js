var http = require('http');
var handleRequest = function(request, response) {
    response.writeHead(200);
    response.end('Hello World, from VCC!');
}

var helloServer = http.createServer(handleRequest);
helloServer.listen(8080);