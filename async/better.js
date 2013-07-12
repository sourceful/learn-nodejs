'use strict';

var math = require('./math.js');

math.sum(1, 2, function(err, result){
    if(err){
        return then(err);
    }

    math.sum(result, 3, function(err, result){
        if(err){
            return then(err);
        }

        then(err, result);
    });
});

function then(err, result){
    if(err){
        throw err;
    }

    console.log('I can\'t believe the result is:', result, '!');
}