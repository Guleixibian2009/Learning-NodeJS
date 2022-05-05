"use strict";
var http = require("http")

http.createServer(function (request, responce){
    responce.writeHead(200, {
        'Content-Type': 'text/html'
    });

    responce.end('<h1>Hello World</h1><p>Welcome to my server. Yay, this is working!</p>');
}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/")