'use strict';

var async = require('async');
var math = require('./math.js');

async.waterfall([
    function(next){
        math.sum(1, 2, next);
    },
    function(result, next){
        math.sum(result, 3, next);
    }
], then);

function then(err, result){
    if(err){
        throw err;
    }

    console.log('I can\'t believe the result is:', result, '!');
}