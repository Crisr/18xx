const test = require('tape');
const CB = require('../Core/core_bit');
const Pawn = require('../Core/core_Pawn');
const Finance = require('../Core/core_finance');

test('Core Bit tests', function (TC) {        
        const CBit = new CB();  
        const myPawn = new Pawn('Cris');        
        TC.equal(typeof(CBit.GetLocation()), "object", "Should be an Object");
        TC.equal(typeof(CBit.SetAIValue(2)), "undefined", "Error, value 2 is not valid, 0..1 is valid");
        TC.equal(CBit.GetAIValue(CBit.SetAIValue(0.5)), CBit.GetAIValue(), 'Set and Get AI values should be equal')
        TC.end();
});

test('Finance tests', function (TC) {        
        const myBank = new Finance.Bank();      
        const Bills5 = myBank.createBills(`GAME`, 5, 1);
        
        // TC.equal(typeof(CBit.GetLocation()), "object", "Should be an Object");
        // TC.equal(typeof(CBit.SetAIValue(2)), "string", "Error, value 2 is not valid, 0..1 is valid");
        // TC.equal(CBit.GetAIValue(CBit.SetAIValue(0.5)), CBit.GetAIValue(), 'Set and Get AI values should be equal')
        TC.end();
});