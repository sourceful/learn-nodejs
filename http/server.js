'use strict';

var http = require('http');

http.createServer(function(req, res) {
    res.end('Hello Node', 200);
    console.log('I think I\'ve heard something!');
}).listen(8000);

console.log('Listening!');