var test = require('tape');
var CB = require('../Core/core_bit');

test('Core Bit tests', function (TC) {        
        const CBit = new CB();           
        TC.equal(typeof(CBit.GetLocation()), "object", "Should be an Object");
        CBit.printInfo();
        TC.end();
});