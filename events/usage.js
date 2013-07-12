'use strict';

var Heartbeat = require('./implementation.js');
var a = new Heartbeat(400);
var b = new Heartbeat(1000);

a.on('beat', function(beats){
    console.log('Heart A beat n times:', beats);
});

b.on('beat', function(beats){
    console.log('Heart B beat n times:', beats);
});