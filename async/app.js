'use strict';

var math = require('./math.js');

math.sum(1, 2, function(err, result){
    if(err){
        throw err;
    }

    console.log('I can\'t believe the result is:', result, '!');
});
