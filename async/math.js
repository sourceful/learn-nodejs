'use strict';

var api = {
    sum: function(a, b, done){
        process.nextTick(function(){
            done(null, a + b);
        });
    }
};

module.exports = api;
