'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Heartbeat(interval){
    EventEmitter.call(this);
    
    var emitter = this;
    var beats = 0;

    setInterval(function(){
        emitter.emit('beat', ++beats);
    }, interval);
}

util.inherits(Heartbeat, EventEmitter);

module.exports = Heartbeat;