'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');
var index = path.resolve(__dirname, './index.html');

http.createServer(function(req, res) {
    var stream = fs.createReadStream(index);

    stream.on('open', function(){
        res.writeHead(200, { 'Content-Type': 'text/html' });
    });

    stream.on('error', function(){
        res.writeHead(404);
        res.end();
    });

    stream.pipe(res);
}).listen(8000);

console.log('Listening!');